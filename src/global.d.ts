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
	movementType : Field;
	movementHopDistance : Field;
	tubeOnDecayRate : Field;
	tubeOffDecayRate : Field;
	tubeRepairRate : Field;
}

interface DIARCFields {
	port : Field;
}