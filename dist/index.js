'use strict';
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function uuid() {
    let d = new Date().getTime();
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        }
        else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
}
;
function download(obj, name) {
    const fileName = name;
    const json = JSON.stringify(obj, null, '\t');
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', fileName);
    dlAnchorElem.click();
}
function generateSpaceStationServer() {
    const settings = {
        created: state.created,
        id: state.id,
        name: getValue('name'),
        type: 'server',
        room: getValue('room'),
        tubeOnDecayRate: getValue('tubeOnDecayRate'),
        tubeOffDecayRate: getValue('tubeOffDecayRate'),
        tubeRepairRate: getValue('tubeRepairRate')
    };
    return settings;
}
function generateSpaceStationClient() {
    const settings = {
        created: state.created,
        id: state.id,
        name: getValue('name'),
        type: 'client',
        room: getValue('room'),
        movementType: getValue('movementType'),
        movementHopDistance: getValue('movementHopDistance'),
        tubeOnDecayRate: getValue('tubeOnDecayRate'),
        tubeOffDecayRate: getValue('tubeOffDecayRate'),
        tubeRepairRate: getValue('tubeRepairRate')
    };
    return settings;
}
function getValue(key) {
    //@ts-ignore
    const field = fields[key];
    const valueElem = document.getElementById(key);
    const value = valueElem.value;
    let str;
    let num;
    let bool;
    if (field.type === 'string') {
        str = value;
        return str;
    }
    else if (field.type === 'float') {
        num = parseFloat(value);
        return num;
    }
    else if (field.type === 'integer') {
        num = parseInt(value);
        return num;
    }
    else if (field.type === 'boolean') {
        bool = document.getElementById(key).checked;
        return bool;
    }
    return value;
}
function downloadClient() {
    const settings = generateSpaceStationClient();
    download(settings, 'client_settings.json');
}
function downloadServer() {
    const settings = generateSpaceStationClient();
    download(settings, 'server_settings.json');
}
function createField(key, parent, fieldsArr) {
    //@ts-ignore
    const field = fieldsArr[key];
    const hr = document.createElement('hr');
    const label = document.createElement('h4');
    let description;
    let descriptionText;
    label.innerHTML = field.name;
    parent.appendChild(label);
    if (field.input === 'number' || field.input === 'text') {
        createInput(key, field, parent);
    }
    else if (field.input === 'select') {
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
function createInput(key, field, parent) {
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', field.input);
    inputElem.setAttribute('id', key);
    inputElem.setAttribute('name', key);
    inputElem.setAttribute('placeholder', `${field.name}...`);
    inputElem.onchange = function () {
        state.created = new Date();
        state.id = uuid();
    };
    inputElem.value = field.default;
    parent.appendChild(inputElem);
}
function createSelect(key, field, parent) {
    const selectElem = document.createElement('select');
    let optionElem;
    selectElem.setAttribute('id', key);
    selectElem.setAttribute('name', key);
    for (let option of field.options) {
        optionElem = document.createElement('option');
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
    };
    parent.appendChild(selectElem);
}
function createButtons() {
    const buttonsElem = document.getElementById('buttons');
    const dServer = document.createElement('button');
    dServer.innerHTML = "Download Server Settings";
    dServer.onclick = function () { downloadServer(); };
    const dClient = document.createElement('button');
    dClient.innerHTML = "Download Client Settings";
    dClient.onclick = function () { downloadClient(); };
    buttonsElem.appendChild(dServer);
    buttonsElem.appendChild(dClient);
}
function createDIARCSection(parent) {
    const section = document.createElement('div');
    const header = document.createElement('h2');
    const keys = Object.keys(DIARCfields);
    header.innerHTML = 'DIARC';
    section.appendChild(header);
    for (let key of keys) {
        createField(key, section, DIARCfields);
    }
    parent.appendChild(section);
}
function createForm() {
    const keys = Object.keys(fields);
    const parent = document.getElementById('settings');
    for (let key of keys) {
        createField(key, parent, fields);
    }
    createDIARCSection(parent);
    createButtons();
}
const state = {
    created: new Date(),
    id: uuid()
};
(function main() {
    createForm();
})();
//# sourceMappingURL=index.js.map