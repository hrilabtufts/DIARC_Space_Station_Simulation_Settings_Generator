'use strict';

interface SpaceStationServerSettings {
	created : string;
	id : string;
	name : string;
	type : string;
	room : string;

	tubeOnDecayRate : number;
	tubeOffDecayRate : number;
	tubeRepairRate : number;

	ade_ip? : string;
	ade_port? : number;

	ros_ip? : string;
	ros_port? : number;
}

interface SpaceStationClientSettings {
	created : string;
	id : string;
	name : string;
	type : string;
	room : string;

	movementType : string;
	movementHopDistance : number;

	tubeOnDecayRate : number;
	tubeOffDecayRate : number;
	tubeRepairRate : number;
}

function capitalizeFirstLetter (str : string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function uuid () {
	let d = new Date().getTime();
	let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let r = Math.random() * 16;
		if (d > 0) {
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
	});
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
		id : state.id,
		name : getValue('name'),
		type : 'server',
		room : getValue('room'),
		tubeOnDecayRate : getValue('tubeOnDecayRate'),
		tubeOffDecayRate : getValue('tubeOffDecayRate'),
		tubeRepairRate : getValue('tubeRepairRate')
	};
	return settings;
}

function generateSpaceStationClient () : SpaceStationClientSettings {
	const settings : SpaceStationClientSettings = {
		created : state.created,
		id : state.id,
		name : getValue('name'),
		type : 'client',
		room : getValue('room'),
		movementType : getValue('movementType'),
		movementHopDistance : getValue('movementHopDistance'),
		tubeOnDecayRate : getValue('tubeOnDecayRate'),
		tubeOffDecayRate : getValue('tubeOffDecayRate'),
		tubeRepairRate : getValue('tubeRepairRate')
	};
	return settings;
}

function getValue (key : string) : any {
	//@ts-ignore
	const field : any = fields[key];
	const valueElem : HTMLInputElement = document.getElementById(key) as HTMLInputElement;
	const value : string = valueElem.value;

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

function createField (key : string, parent : HTMLElement, fieldsArr : any) {
	//@ts-ignore
	const field : any = fieldsArr[key];
	const hr : HTMLElement = document.createElement('hr');
	const label : HTMLElement = document.createElement('h4');
	let description : HTMLElement;
	let descriptionText : HTMLElement;

	label.innerHTML = field.name;
	parent.appendChild(label);

	if (field.input === 'number' || field.input === 'text') {
		createInput(key, field, parent);
	} else if (field.input === 'select') {
		createSelect(key, field, parent);
	}

	if (field.description) {
		description = document.createElement('p');
		descriptionText = document.createElement('small');
		descriptionText.innerHTML = field.description;
		description.appendChild(descriptionText);
		parent.appendChild(description);
	}

	parent.appendChild(hr);
}

function createInput (key : string, field : Field, parent : HTMLElement) {
	const inputElem : HTMLInputElement = document.createElement('input') as HTMLInputElement;

	inputElem.setAttribute('type', field.input);
	inputElem.setAttribute('id', key);
	inputElem.setAttribute('name', key);
	inputElem.setAttribute('placeholder', `${field.name}...`);
	inputElem.onchange = function () {
		state.created = new Date();
		state.id = uuid();
	}
	inputElem.value = field.default;
	parent.appendChild(inputElem);
}

function createSelect (key : string, field : Field, parent : HTMLElement) {
	const selectElem : HTMLSelectElement = document.createElement('select') as HTMLSelectElement;
	let optionElem : HTMLOptionElement;

	selectElem.setAttribute('id', key);
	selectElem.setAttribute('name', key);

	for (let option of field.options) {
		optionElem = document.createElement('option') as HTMLOptionElement;
		optionElem.value = option;
		optionElem.innerHTML = capitalizeFirstLetter(option);
		if (option === field.default) {
			optionElem.selected = true;
		}
		selectElem.appendChild(optionElem);
	}

	selectElem.onchange = function () {
		state.created = new Date();
		state.id = uuid();
	}

	parent.appendChild(selectElem);
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

function createDIARCSection (parent : HTMLElement) {
	const section : HTMLElement = document.createElement('div');
	const header : HTMLHeadElement = document.createElement('h2');
	const keys : string[] = Object.keys(DIARCfields);
	header.innerHTML = 'DIARC';
	section.appendChild(header);

	for (let key of keys) {
		createField(key, section, DIARCfields);
	}

	parent.appendChild(section);
}

function createForm () {
	const keys : string[] = Object.keys(fields);
	const parent : HTMLElement = document.getElementById('settings');

	for (let key of keys) {
		createField(key, parent, fields);
	}

	createDIARCSection(parent);
	
	createButtons();
}

const state : any = {
	created : new Date(),
	id : uuid()
};

(function main () {
	createForm();
})()
