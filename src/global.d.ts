interface Field {
	name : string;
	input : string;
	type : string; 
	default : any;
	options? : string[];
	description? : string;
}

interface Fields {
	name : Field;
	room : Field;
	maxPlayers : Field;
	movementType : Field;
	movementHopDistance : Field;
	tubeOnDecayRate : Field;
	tubeOffDecayRate : Field;
	tubeRepairRate : Field;
	stationNotifications : Field;
	allowCrosstalk: Field;
	truncateRepairStatements : Field;
	calibrateEyeTracker : Field;
	useLSL : Field;
}

interface DIARCFields {
	port : Field;
}

interface ROSFields {
	model : Field;
	IP : Field;
	port : Field;
	voice : Field;
}

interface TrialsFields {
	seconds : Field;
	robots : Field;
	survey : Field;
}