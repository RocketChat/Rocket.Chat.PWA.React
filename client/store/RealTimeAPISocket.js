import { Observable } from "rxjs";
import { v1 as uuid } from "uuid";
import sha256 from "sha256";

export default class RealTimeAPISocket {

	// Constructor to RealTimeAPISocket which accepts url to connect to WebSocket or the WebSocket Observable as the parameter.
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

	onMessage(messageHandler){
		this.subscribe(messageHandler,null, null);
	}

	onComplete(completeHandler){
		this.subscribe(null, null, completeHandler);
	}

	onError(errorHandler){
		this.subscribe(null,errorHandler,null);
	}

	// Send a JSON Object via WebSocket Connection
	send(msg) {
		return this.socket.next(JSON.stringify(msg));
	}

	// Subscribe to the WebSocket Observable
	subscribe(next, err, complete) {
		this.getObservable().subscribe(next, err, complete);
	}

	// Sends "pong" message to "ping" received, to keep the connection alive
	keepAlive() {
		this.getPingObservable().subscribe(
			msg => { this.send({ msg: "pong" }); }
		);
	}

	// Returns the WebSocket Observable.
	getObservable() {
		return this.socket.catch(err => Observable.of(err));
	}

	// Returns Observable filtered for "connected" message
	getConnectionObservable() {
		return this.getObservable().filter(msg => (msg.msg === "connected"));
	}

	// Returns Observable filtered for "ping" message
	getPingObservable() {
		return this.getObservable().filter(msg => msg.msg === "ping");
	}

	// Get Observable To the Result of Login Request Sent, Responds with 2 Responses, message type "result" and "added"
	getLoginObservable(id) {
		let resultObservable = this.getIDFilteredResultObservable(id);
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

	// Method To get The Observable to Socket, Filtered with The Message ID Provided and Message type as "result"
	getIDFilteredResultObservable(id) {
		return this.getObservable().filter(msg => ((msg.id === id && msg.msg === "result")));
	}

	// Server Connection 
	connectToServer() {
		this.send({ "msg": "connect", "version": "1", "support": ["1", "pre2", "pre1"] });
		return this.getConnectionObservable();
	}

	// Login with Username and Password
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

	// Login with Authentication Token
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

	// Login with OAuth, with Client Token and Client Secret
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

	// Get Rooms User's Subscribed to
	getRooms() {
		let id = uuid();
		this.send({
			"msg": "method",
			"method": "rooms/get",
			"id": id,
			"params": [{ "$date": Date.now() / 1000 }]
		});
		return this.getIDFilteredResultObservable(id);
	}

}