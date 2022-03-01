'use strict';
const state = {
    created: new Date()
};
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
        type: 'server',
        room: getValue('room')
    };
    return settings;
}
function generateSpaceStationClient() {
    const settings = {
        created: state.created,
        type: 'client',
        room: getValue('room')
    };
    return settings;
}
function getValue(key) {
    const field = fields[key];
    const value = document.getElementById(key);
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
function createInput(key) {
    const field = fields[key];
    const inputElem = document.createElement('input');
    let description;
    let descriptionText;
    inputElem.setAttribute('type', field.type);
    inputElem.setAttribute('id', key);
    inputElem.setAttribute('name', key);
    inputElem.setAttribute('placeholder', `${field.name}...`);
    inputElem.onchange = function () {
        state.created = new Date();
    };
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
function generateForm() {
    const keys = Object.keys(fields);
    let field;
    for (let key of keys) {
        createInput(key);
    }
    createButtons();
}
(function main() {
    generateForm();
})();
//# sourceMappingURL=index.js.map