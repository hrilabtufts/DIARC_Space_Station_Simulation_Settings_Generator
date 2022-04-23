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
        maxPlayers: getValue('maxPlayers'),
        tubeOnDecayRate: getValue('tubeOnDecayRate'),
        tubeOffDecayRate: getValue('tubeOffDecayRate'),
        tubeRepairRate: getValue('tubeRepairRate'),
        stationNotifications: getValue('stationNotifications'),
        truncateRepairStatements: getValue('truncateRepairStatements'),
        useLSL: getValue('useLSL'),
        DIARC: getDIARC(),
        trials: getTrials()
    };
    return settings;
    7;
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
        tubeRepairRate: getValue('tubeRepairRate'),
        openTTSUrl: getValue('openTTSUrl'),
        openTTSPort: getValue('openTTSPort'),
        calibrateEyeTracker: getValue('calibrateEyeTracker'),
        useLSL: getValue('useLSL'),
        allowCrosstalk: getValue('allowCrosstalk')
    };
    return settings;
}
function getDIARC() {
    const diarcs = document.querySelectorAll('.diarc');
    const d = [];
    let diarcIndex = 0;
    diarcs.forEach((diarcElem) => {
        const dElem = {
            port: getAnyValue(`port_${diarcIndex}`, 'integer'),
            ROS: getROS(diarcIndex)
        };
        d.push(dElem);
        diarcIndex++;
    });
    return d;
}
function getROS(diarcIndex) {
    const ross = document.querySelectorAll(`#ross_${diarcIndex} .ros`);
    const r = [];
    let rosIndex = 0;
    ross.forEach((rosElem) => {
        const rElem = {
            model: getAnyValue(`model_${diarcIndex}_${rosIndex}`, 'string'),
            IP: getAnyValue(`IP_${diarcIndex}_${rosIndex}`, 'string'),
            port: getAnyValue(`port_${diarcIndex}_${rosIndex}`, 'integer'),
            voice: getAnyValue(`voice_${diarcIndex}_${rosIndex}`, 'string')
        };
        r.push(rElem);
        rosIndex++;
    });
    return r;
}
function getTrials() {
    const trials = document.querySelectorAll(`#trials .trial`);
    const t = [];
    let trialIndex = 0;
    trials.forEach((trialElem) => {
        const tElem = {
            seconds: getAnyValue(`seconds_${trialIndex}`, 'integer'),
            robots: getAnyValue(`robots_${trialIndex}`, 'integer'),
            survey: getAnyValue(`survey_${trialIndex}`, 'boolean'),
            tubes: getTubes(trialIndex),
            rovers: getRovers(trialIndex)
        };
        t.push(tElem);
        trialIndex++;
    });
    return t;
}
function getTubes(trialIndex) {
    const tubes = document.querySelectorAll(`#trial_${trialIndex} .tube`);
    const t = [];
    let tubeIndex = 0;
    tubes.forEach((tubeElem) => {
        const tElem = {
            time: getAnyValue(`tube_${trialIndex}_${tubeIndex}_time`, 'integer')
        };
        const tubeVal = getAnyValue(`tube_${trialIndex}_${tubeIndex}_tube`, 'string');
        if (tubeVal !== "") {
            tElem.tube = tubeVal;
        }
        t.push(tElem);
        tubeIndex++;
    });
    return t;
}
function getRovers(trialIndex) {
    const rovers = document.querySelectorAll(`#trial_${trialIndex} .rover`);
    const r = [];
    let roverIndex = 0;
    rovers.forEach((roverElem) => {
        const rElem = {
            time: getAnyValue(`rover_${trialIndex}_${roverIndex}_time`, 'integer')
        };
        const roverVal = getAnyValue(`rover_${trialIndex}_${roverIndex}_position`, 'string');
        if (roverVal !== "") {
            rElem.position = roverVal;
        }
        r.push(rElem);
        roverIndex++;
    });
    return r;
}
function getValue(key) {
    //@ts-ignore
    const field = fields[key];
    return getAnyValue(key, field.type);
}
function getAnyValue(id, type) {
    const valueElem = document.getElementById(id);
    const value = valueElem.value;
    let str;
    let num;
    let bool;
    if (type === 'string') {
        str = value;
        return str;
    }
    else if (type === 'float') {
        num = parseFloat(value);
        return num;
    }
    else if (type === 'integer') {
        num = parseInt(value);
        return num;
    }
    else if (type === 'boolean') {
        bool = document.getElementById(id).checked;
        return bool;
    }
    return value;
}
function downloadClient() {
    const settings = generateSpaceStationClient();
    download(settings, 'client_settings.json');
}
function downloadServer() {
    const settings = generateSpaceStationServer();
    download(settings, 'server_settings.json');
}
function createField(key, parent, fieldsArr, index = -1, index2 = -1) {
    //@ts-ignore
    const field = fieldsArr[key];
    const hr = document.createElement('hr');
    const label = document.createElement('h4');
    let description;
    let descriptionText;
    if (index > -1) {
        key += `_${index}`;
    }
    if (index2 > -1) {
        key += `_${index2}`;
    }
    label.innerHTML = field.name;
    parent.appendChild(label);
    if (field.input === 'number' || field.input === 'text' || field.input == 'checkbox') {
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
        updateState();
    };
    if (field.input === 'checkbox') {
        if (field.default === true) {
            inputElem.checked = true;
        }
    }
    else {
        inputElem.value = field.default;
    }
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
        updateState();
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
    const buttonsElem = document.createElement('div');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');
    section.id = 'diarc';
    header.innerHTML = 'DIARC';
    section.appendChild(header);
    section.appendChild(hr);
    createDIARCElement(section);
    parent.appendChild(section);
}
function createDIARCElement(parent) {
    const keys = Object.keys(DIARCfields);
    const diarcElem = document.createElement('div');
    const header = document.createElement('h3');
    diarcElem.classList.add('diarc');
    state.diarc.lastCreated++;
    diarcElem.id = `diarc_${state.diarc.lastCreated}`;
    header.innerHTML = `DIARC #${state.trials.lastCreated + 1}`;
    diarcElem.appendChild(header);
    for (let key of keys) {
        createField(key, diarcElem, DIARCfields, state.diarc.lastCreated);
    }
    createROSSection(diarcElem, state.diarc.lastCreated);
    parent.appendChild(diarcElem);
}
function createROSSection(parent, diarcIndex) {
    const rossElem = document.createElement('div');
    const header = document.createElement('h3');
    const buttonsElem = document.createElement('div');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');
    rossElem.id = `ross_${diarcIndex}`;
    header.innerHTML = `ROS Instances`;
    addButton.innerHTML = 'Add ROS instance';
    addButton.onclick = function (event) {
        event.preventDefault();
        createROSElement(document.getElementById(`ross_${diarcIndex}`), diarcIndex);
        return false;
    };
    removeButton.innerHTML = 'Remove ROS instance';
    removeButton.onclick = function (event) {
        event.preventDefault();
        removeROSElement(diarcIndex);
        return false;
    };
    buttonsElem.appendChild(addButton);
    buttonsElem.appendChild(removeButton);
    parent.appendChild(header);
    parent.appendChild(hr);
    parent.appendChild(rossElem);
    parent.appendChild(buttonsElem);
    createROSElement(rossElem, diarcIndex);
}
function createROSElement(parent, diarcIndex) {
    const rosElem = document.createElement('div');
    const header = document.createElement('h3');
    const keys = Object.keys(ROSfields);
    let rosIndex;
    let key;
    rosElem.classList.add('ros');
    rosIndex = parent.querySelectorAll('.ros').length;
    header.innerHTML = `ROS Instance #${rosIndex + 1}`;
    key = `ros_${diarcIndex}_${rosIndex}`;
    rosElem.id = key;
    rosElem.appendChild(header);
    for (let key of keys) {
        createField(key, rosElem, ROSfields, state.diarc.lastCreated, rosIndex);
    }
    parent.appendChild(rosElem);
}
function createTrialsSection(parent) {
    const section = document.createElement('div');
    const header = document.createElement('h2');
    const buttonsElem = document.createElement('div');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');
    section.id = 'trials';
    header.innerHTML = 'Trials';
    section.appendChild(header);
    section.appendChild(hr);
    createTrialElement(section);
    addButton.innerHTML = 'Add trial';
    addButton.onclick = function (event) {
        event.preventDefault();
        createTrialElement(document.getElementById('trials'));
        return false;
    };
    removeButton.innerHTML = 'Remove trial';
    removeButton.onclick = function (event) {
        event.preventDefault();
        removeTrialElement();
        return false;
    };
    buttonsElem.appendChild(addButton);
    buttonsElem.appendChild(removeButton);
    parent.appendChild(section);
    parent.appendChild(buttonsElem);
}
function createTrialElement(parent) {
    const trialElem = document.createElement('div');
    const header = document.createElement('h3');
    const keys = Object.keys(trialFields);
    trialElem.classList.add('trial');
    state.trials.lastCreated++;
    trialElem.id = `trial_${state.trials.lastCreated}`;
    header.innerHTML = `Trial #${state.trials.lastCreated + 1}`;
    trialElem.appendChild(header);
    for (let key of keys) {
        createField(key, trialElem, trialFields, state.trials.lastCreated);
    }
    createTubesSection(trialElem, state.trials.lastCreated);
    createRoversSection(trialElem, state.trials.lastCreated);
    parent.appendChild(trialElem);
}
function createTubesSection(parent, trialIndex) {
    const tubesElem = document.createElement('div');
    const header = document.createElement('h3');
    const buttonsElem = document.createElement('div');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');
    const trial = trialIndex + 0;
    tubesElem.id = `tubes_${trialIndex}`;
    header.innerHTML = 'Tube Break Events';
    addButton.innerHTML = 'Add tube event';
    addButton.onclick = function (event) {
        event.preventDefault();
        createTubeElement(trialIndex);
        return false;
    };
    removeButton.innerHTML = 'Remove tube event';
    removeButton.onclick = function (event) {
        event.preventDefault();
        removeTubeElement(trialIndex);
        return false;
    };
    buttonsElem.appendChild(addButton);
    buttonsElem.appendChild(removeButton);
    parent.appendChild(header);
    parent.appendChild(hr);
    parent.appendChild(tubesElem);
    parent.appendChild(buttonsElem);
}
function createTubeElement(trialIndex) {
    const parent = document.getElementById(`tubes_${trialIndex}`);
    const tubeElem = document.createElement('div');
    const tubeTime = document.createElement('input');
    const tubeTube = document.createElement('select');
    const header = document.createElement('strong');
    const hr = document.createElement('hr');
    let option;
    let key;
    let tubeIndex;
    let tubeNumber;
    tubeElem.classList.add('tube');
    tubeIndex = parent.querySelectorAll('.tube').length;
    header.innerHTML = `Tube Break Event #${tubeIndex + 1}`;
    tubeElem.appendChild(header);
    key = `tube_${trialIndex}_${tubeIndex}`;
    tubeElem.id = key;
    tubeTime.type = 'number';
    tubeTime.value = '0';
    tubeTime.placeholder = 'Time in seconds';
    tubeTime.id = `${key}_time`;
    tubeTime.name = `${key}_time`;
    tubeTime.onchange = function () {
        updateState();
    };
    tubeElem.appendChild(tubeTime);
    tubeTube.id = `${key}_tube`;
    tubeTube.name = `${key}_tube`;
    tubeTube.onchange = function () {
        updateState();
    };
    option = document.createElement('option');
    option.innerHTML = "Random";
    option.value = "";
    option.selected = true;
    tubeTube.appendChild(option);
    for (let wing of tubeLabels.wings) {
        for (let side of tubeLabels.sides) {
            for (let i = 0; i < tubeLabels.tubeCount; i++) {
                tubeNumber = i + 1;
                option = document.createElement('option');
                option.innerHTML = `${wing} ${side} ${tubeNumber}`;
                option.value = `${wing}:${side[0]}:${tubeNumber}`;
                tubeTube.appendChild(option);
            }
        }
    }
    tubeElem.appendChild(tubeTube);
    tubeElem.appendChild(hr);
    parent.append(tubeElem);
}
function createRoversSection(parent, trialIndex) {
    const roversElem = document.createElement('div');
    const header = document.createElement('h3');
    const buttonsElem = document.createElement('div');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const trial = trialIndex + 0;
    roversElem.id = `rovers_${trialIndex}`;
    header.innerHTML = 'Rover Events';
    addButton.innerHTML = 'Add rover event';
    addButton.onclick = function (event) {
        event.preventDefault();
        createRoverElement(trialIndex);
        return false;
    };
    removeButton.innerHTML = 'Remove rover event';
    removeButton.onclick = function (event) {
        event.preventDefault();
        removeRoverElement(trialIndex);
        return false;
    };
    buttonsElem.appendChild(addButton);
    buttonsElem.appendChild(removeButton);
    parent.appendChild(header);
    parent.appendChild(roversElem);
    parent.appendChild(buttonsElem);
}
function createRoverElement(trialIndex) {
    const parent = document.getElementById(`rovers_${trialIndex}`);
    const roverElem = document.createElement('div');
    const roverTime = document.createElement('input');
    const roverPosition = document.createElement('select');
    const header = document.createElement('strong');
    const hr = document.createElement('hr');
    let option;
    let key;
    let roverIndex;
    let rowNumber;
    roverElem.classList.add('rover');
    roverIndex = parent.querySelectorAll('.rover').length;
    header.innerHTML = `Rover Event #${roverIndex + 1}`;
    roverElem.appendChild(header);
    key = `rover_${trialIndex}_${roverIndex}`;
    roverElem.id = key;
    roverTime.type = 'number';
    roverTime.value = '0';
    roverTime.placeholder = 'Time in seconds';
    roverTime.id = `${key}_time`;
    roverTime.name = `${key}_time`;
    roverTime.onchange = function () {
        updateState();
    };
    roverElem.appendChild(roverTime);
    roverPosition.id = `${key}_position`;
    roverPosition.name = `${key}_position`;
    roverPosition.onchange = function () {
        updateState();
    };
    option = document.createElement('option');
    option.innerHTML = "Random";
    option.value = "";
    option.selected = true;
    roverPosition.appendChild(option);
    for (let type of roversLabels.types) {
        for (let col of roversLabels.cols) {
            for (let i = 0; i < roversLabels.rows; i++) {
                rowNumber = i + 1;
                option = document.createElement('option');
                option.innerHTML = `${type} ${col}${rowNumber}`;
                option.value = `${type}:${col}:${rowNumber}`;
                roverPosition.appendChild(option);
            }
        }
    }
    roverElem.appendChild(roverPosition);
    roverElem.appendChild(hr);
    parent.append(roverElem);
}
function removeTrialElement() {
    let key;
    if (state.trials.lastCreated > -1) {
        key = `trial_${state.trials.lastCreated}`;
        document.getElementById(key).remove();
        state.trials.lastCreated--;
    }
}
function removeTubeElement(trialIndex) {
    const tubes = document.querySelectorAll(`#tubes_${trialIndex} .tube`);
    let key;
    if (tubes.length > 0) {
        key = `tube_${trialIndex}_${tubes.length - 1}`;
        document.getElementById(key).remove();
    }
}
function removeRoverElement(trialIndex) {
    const rovers = document.querySelectorAll(`#rovers_${trialIndex} .rover`);
    let key;
    if (rovers.length > 0) {
        key = `rover_${trialIndex}_${rovers.length - 1}`;
        document.getElementById(key).remove();
    }
}
function removeROSElement(diarcIndex) {
    const ross = document.querySelectorAll(`#diarc_${diarcIndex} .ros`);
    let key;
    if (ross.length > 0) {
        key = `ros_${diarcIndex}_${ross.length - 1}`;
        document.getElementById(key).remove();
    }
}
function createForm() {
    const keys = Object.keys(fields);
    const parent = document.getElementById('settings');
    for (let key of keys) {
        createField(key, parent, fields);
    }
    createDIARCSection(parent);
    createTrialsSection(parent);
    createButtons();
}
function updateState() {
    state.created = new Date();
    state.id = uuid();
}
const state = {
    created: new Date(),
    id: uuid(),
    diarc: {
        lastCreated: -1
    },
    trials: {
        lastCreated: -1
    }
};
(function main() {
    createForm();
})();
//# sourceMappingURL=index.js.map