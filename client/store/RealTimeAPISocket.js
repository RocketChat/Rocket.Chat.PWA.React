import { Observable } from "rxjs";
import { v1 as uuid } from "uuid";
import sha256 from "sha256";

export default class RealTimeAPISocket {

	constructor(param) {
		if (typeof param === "string") {
			this.url = param;
			this.socket = Observable.webSocket(this.url);
		}
		if (typeof param === "object") {
			this.socket = param;
			this.url = this.socket.url;
		}
	}

	send(msg) {
		return this.socket.next(JSON.stringify(msg));
	}

	subscribe(next, err, complete) {
		this.getObservable().subscribe(next, err, complete);
	}

	keepAlive() {
		this.getPingObservable().subscribe(
			msg => { this.send({ msg: "pong" }); }
		);
	}

	getObservable() {
		return this.socket;
	}

	getConnectionObservable() {
		return this.getObservable().filter(msg => (msg.msg === "connected"));
	}

	getPingObservable() {
		return this.getObservable().filter(msg => msg.msg === "ping");
	}

	getLoginObservable(id) {
		let resultObservable = this.getObservable().filter(msg => ((msg.id === id && msg.msg === "result") || (msg.msg === "updated" && msg.methods.find(id => id === id) !== undefined)));
		let resultId;
		resultObservable.subscribe(
			msg => {
				if ((msg.id === id && msg.msg === "result" && !msg.error))
					resultId = msg.result.id;
			}
		);

		let addedOb = this.getObservable().buffer(resultObservable).find(obj => obj.find(msg => msg.id === resultId) !== undefined).map(obj => obj[0]);

		return Observable.merge(resultObservable, addedOb);

	}

	login(username, password) {
		let id = uuid();
		this.send({
			"msg": "method",
			"method": "login",
			"id": id,
			"params": [
				{
					"user": { "username": username },
					"password": {
						"digest": sha256(password),
						"algorithm": "sha-256"
					}
				}
			]
		});
		return this.getLoginObservable(id);
	}

	loginWithAuthToken(authToken) {
		let id = uuid();
		this.send({
			"msg": "method",
			"method": "login",
			"id": id,
			"params": [
				{ "resume": authToken }
			]
		});
		return this.getLoginObservable(id);
	}

	loginWithOAuth(credToken, credSecret) {
		let id = uuid();
		this.send({
			"msg": "method",
			"method": "login",
			"id": id,
			"params": [
				{
					"oauth": {
						"credentialToken": credToken,
						"credentialSecret": credSecret
					}
				}
			]
		});
		return this.getLoginObservable(id);
	}

	connectToServer() {
		this.send({ "msg": "connect", "version": "1", "support": ["1", "pre2", "pre1"] });
		return this.getConnectionObservable();
	}

}