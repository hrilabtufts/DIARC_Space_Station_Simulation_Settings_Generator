'use strict';

interface Field {
	name : string;
	input : string;
	type : string; 
	default : any;
	description? : string;
}

interface SpaceStationServerSettings {
	created : string;
	name : string;
	type : string;
	room? : string;

	ade_ip? : string;
	ade_port? : number;

	ros_ip? : string;
	ros_port? : number;
}

interface SpaceStationClientSettings {
	created : string;
	name : string;
	type : string;
	room? : string;
}

const state : any = {
	created : new Date()	
};

function download (obj : any, name : string) {
	const fileName : string = name;
	const json : string = JSON.stringify(obj, null, '\t');
	const dataStr : string = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
	const dlAnchorElem = document.createElement('a');

	dlAnchorElem.setAttribute('href', dataStr);
	dlAnchorElem.setAttribute('download', fileName);
	dlAnchorElem.click();
}

function generateSpaceStationServer () : SpaceStationServerSettings {
	const settings : SpaceStationServerSettings = {
		created : state.created,
		name : getValue('name'),
		type : 'server',
		room : getValue('room')
	};
	return settings;
}

function generateSpaceStationClient () : SpaceStationClientSettings {
	const settings : SpaceStationClientSettings = {
		created : state.created,
		name : getValue('name'),
		type : 'client',
		room : getValue('room')
	};
	return settings;
}

function getValue (key : string) : any {
	const field : any = fields[key];
	const value : any = document.getElementById(key);

	let str : string;
	let num : number; 
	let bool : boolean;

	if (field.type === 'string') {
		str = value;
		return str;
	} else if (field.type === 'float') {
		num = parseFloat(value);
		return num;
	} else if (field.type === 'integer') {
		num = parseInt(value);
		return num;
	} else if (field.type === 'boolean') {
		bool = (document.getElementById(key) as HTMLInputElement).checked;
		return bool;
	}

	return value;
}

function downloadClient () {
	const settings : SpaceStationClientSettings = generateSpaceStationClient();
	download(settings, 'client_settings.json');
}

function downloadServer () {
	const settings : SpaceStationServerSettings = generateSpaceStationClient();
	download(settings, 'server_settings.json');
}

function createInput (key : string) {
	const field : any = fields[key];
	const inputElem : HTMLInputElement = document.createElement('input') as HTMLInputElement;
	let description : HTMLElement;
	let descriptionText : HTMLElement;
	inputElem.setAttribute('type', field.type);
	inputElem.setAttribute('id', key);
	inputElem.setAttribute('name', key);
	inputElem.setAttribute('placeholder', `${field.name}...`);
	inputElem.onchange = function () {
		state.created = new Date();
	}
	inputElem.value = field.default;
	document.getElementById('settings').appendChild(inputElem);
	if (field.description) {
		description = document.createElement('p');
		descriptionText = document.createElement('small');
		descriptionText.innerHTML = field.description;
		description.appendChild(descriptionText);
		document.getElementById('settings').appendChild(description);
	}
}

function createButtons () {
	const buttonsElem : HTMLElement = document.getElementById('buttons')
	const dServer : HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
	dServer.innerHTML = "Download Server Settings";
	dServer.onclick = function () { downloadServer() };
	const dClient : HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
	dClient.innerHTML = "Download Client Settings";
	dClient.onclick = function () { downloadClient() };

	buttonsElem.appendChild(dServer);
	buttonsElem.appendChild(dClient);
}

function generateForm () {
	const keys : string[] = Object.keys(fields);
	let field : Field;
	for (let key of keys) {
		createInput(key);
	}
	createButtons();
}

(function main () {
	generateForm();
})()
