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
	maxPlayers : {
		name : 'maxPlayers',
		input : 'number',
		type : 'integer',
		default : 2,
		description : 'Maximum number of players to allow in a room.'
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
	},
	openTTSUrl : {
		name : 'OpenTTS URL',
		input : 'text',
		type : 'string',
		default : 'http://127.0.0.1',
		description : 'URL of the OpenTTS server to use for speech synthesis.'
	},
	openTTSPort : {
		name : 'OpenTTS Port',
		input : 'number',
		type : 'integer',
		default : 5500,
		description : 'Port of the OpenTTS server. Set to -1 if no port is used.'
	},
	kaldiASRUrl : {
		name : 'Kaldi ASR URL',
		input : 'text',
		type : 'string',
		default : 'ws://127.0.0.1',
		description : 'URL of the Kaldi ASR (websocket) server to use for automatic speech recognition.'
	},
	kaldiASRPort : {
		name : 'Kaldi ASR Port',
		input : 'number',
		type : 'integer',
		default : 2700,
		description : 'Port of the Kaldi ASR server. Set to -1 if no port is used.'
	},
	voiceChatUrl: {
        name: 'Voice Chat URL',
        input: 'text',
        type: 'string',
        default: '127.0.0.1',
        description: 'URL of the Dissonance multiplayer voice chat.'
    },
    voiceChatPort: {
        name: 'Voice Chat Port',
        input: 'number',
        type: 'integer',
        default: 8868,
        description: 'Port of the Dissonance multiplayer voice chat.'
    },
	networkConnectionUrl : {
		name : 'Server URL',
		input : 'text',
		type : 'string',
		default : '127.0.0.1',
		description : 'URL (or IP address) of the Unity server for Mirror networking'
	},
	networkConnectionPort : {
		name :  'Server Port',
		input : 'number',
		type : 'integer',
		default : 8868,
		description : 'Port of the Unity server for Mirror networking'
	},
	stationNotifications : {
		name : 'Station Notifications',
		input : 'checkbox',
		type : 'boolean',
		default : true,
		description : 'Whether the space station should audibly announce tube breakages and rover events.'
	},
	allowCrosstalk : {
		name : 'Allow Agent Crosstalk',
		input : 'checkbox',
		type : 'boolean',
		default : false,
		description : 'Whether to allow space station, rover and robots talk over one another. If false they will wait for the other to finish before speaking.'
	},
    truncateRepairStatements : {
        name: 'Truncate Player Repair Statements',
        input : 'checkbox',
        type : 'boolean',
        default : true,
        description : 'Whether to truncate all statements made by players containing the word "repair".'
    },
	voiceChatDistortion: {
        name: 'Distort Player-Player Voice Chat',
        input: 'checkbox',
        type: 'boolean',
        default: true,
        description: 'Whether to apply voice distortion between players in voice chat.'
    },
	calibrateEyeTracker : {
        name : 'Calibrate Eye Tracker',
        input : 'checkbox',
        type : 'boolean',
        default : true,
        description : 'Whether to launch the SRanipal eye tracker calibration process on startup.'
    },
    useLSL : {
        name : 'Use Labstreaminglayer (LSL)',
        input : 'checkbox',
        type : 'boolean',
        default : true,
        description : 'Whether to use LSL to publish clock data streams between clients and server.'
    },
    perRobotCommunication : {
    	name : 'Use Per-Robot Communication',
    	input : 'checkbox',
    	type : 'boolean',
    	default : true,
    	description : 'Whether to enforce per-robot communication by selecting which controller is assigned to which robot or to pass all communications to both robots.'
    }
}

const DIARCfields : DIARCFields = {
	port : {
		name : 'DIARC UnitySpaceshipComponent Websocket Server Port',
		input : 'number',
		type : 'integer',
		default : 8000,
		description : 'Port number to bind Unity Websocket server for DIARC UnitySpaceshipComponent to connect to as a client.'
	}
}

const ROSfields : ROSFields = {
	model : {
		name : 'Robot Model',
		input : 'select',
		options : [ 'PR2' ],
		type : 'string',
		default : 'PR2',
		description : 'Model of robot to be used in your study.'
	},
	IP : {
		name : 'RosBridge Server IP Address',
		input : 'text',
		type : 'string',
		default : '127.0.0.1',
		description : 'IP address of remote RosBridge server for Unity to connect to as a client.'
	},
	port : {
		name : 'RosBridge Server Port',
		input : 'number',
		type : 'integer',
		default : 9090,
		description : 'Port number of remote RosBridge server for Unity to connect to as a client.'
	}
}

const trialFields : TrialsFields = {
	seconds : {
		name : 'Trial length',
		input : 'number',
		type : 'integer',
		default : 240,
		description : 'Length of the trial in seconds.'
	},
	robots : {
		name : 'Number of Robots',
		input : 'number',
		type : 'integer',
		default : 2,
		description : 'Number of robots in this trial. Should not exceed number of total RosBridge connections.'
	},
	survey : {
		name : 'Survey',
		input : 'checkbox',
		type : 'boolean',
		default : true,
		description : 'Whether to include survey questions at end of trial.'
	},
	endAtZero : {
		name : 'End at Zero',
		input : 'checkbox',
		type : 'boolean',
		default : false,
		description : 'Whether to end the trial when space station health ends at 0 or waits for timer to run out.'
	}
};

const tubeLabels : any = {
	wings : [
		'Alpha',
		'Beta',
		'Gamma'
	],
	sides : [
		'Left',
		'Right'
	],
	tubeCount : 12
}

const roversLabels : any = {
	types : [ 'radiation', 'basalt', 'volcanic', 'sandstone' ],
	cols : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S' ],
	rows : 19
}