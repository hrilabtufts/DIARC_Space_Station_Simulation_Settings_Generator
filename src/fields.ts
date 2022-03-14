const fields : Fields = {
	name : {
		name : 'Study Name',
		input : 'text',
		type : 'string',
		default : 'Space Station SMM Study',
		description : 'A unique name for your study.'
	},
	room : {
		name : 'Photon Room',
		input : 'text',
		type : 'string',
		default : 'Test Room 1',
		description : 'The name of the Photon multiplayer room, unique to your study.'
	},
	movementType : {
		name : 'VR Movement Type',
		input : 'select',
		type : 'string',
		options : [ 'jump', 'linear' ],
		default : 'jump',
		description : 'The type of player movement to use, either by jumping or linear movement using the D pad on the left Vive controller.'
	},
	movementHopDistance : {
		name : 'VR Hop Distance',
		input : 'number',
		type : 'float',
		default : 3.0,
		description : 'Distance of player movement when using jump setting.'
	},
	tubeOnDecayRate : {
		name : 'Tube On Decay Rate',
		input : 'number',
		type : 'float',
		default : 1.0,
		description : 'Rate of %/sec by which a broken tube decays when on.'
	},
	tubeOffDecayRate : {
		name : 'Tube Off Decay Rate',
		input : 'number',
		type : 'float',
		default : 0.5,
		description : 'Rate of %/sec by which a broken tube decays when off.'
	},
	tubeRepairRate : {
		name : 'Tube Repair Rate',
		input : 'number',
		type : 'float',
		default : 5.0,
		description : 'Rate of %/sec by which a tube repairs after being fixed.'
	}
}

const DIARCfields : DIARCFields = {
	port : {
		name : 'DIARC UnitySpaceshipComponent Websocket Server Port',
		input : 'number',
		type : 'integer',
		default : 8000,
		description : 'Port number to bind Websocket server for DIARC UnitySpaceshipComponent.'
	}
}