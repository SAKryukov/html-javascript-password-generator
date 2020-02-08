﻿"use strict";

const utility = {

    populateUndefined: function(structure, defaultStructure) {
        for (let index in defaultStructure) {
            if (defaultStructure[index] instanceof Object) {
                if (structure[index] == undefined)
                    structure[index] = new defaultStructure[index].constructor();
                this.populateUndefined(structure[index], defaultStructure[index]);
            } else
                if (structure[index] == undefined)
                    structure[index] = defaultStructure[index];
        } //loop
    }, //populateUndefined

    hiddenString: length => { return new Array(length + 1).join(String.fromCodePoint(0x2022)) }, //bullet

    createReadonly: function (structure) {
        for (let index in structure)
            if (structure[index] && structure[index] instanceof Object)
                structure[index] = this.createReadonly(structure[index]);
        return new Proxy(structure, { set: () => { } });
    }, //createReadonly

    clipboard: {
        setup: function() {
            if (this.clipboardTarget) return;
            this.clipboardTarget = document.createElement("input");            
        }, //setup
        copy: function(text) {
            this.setup();
            document.body.appendChild(this.clipboardTarget);
            this.clipboardTarget.value = text;
            this.clipboardTarget.select();
            document.execCommand("copy");
            document.body.removeChild(this.clipboardTarget);
        } //copy
    }, //clipboard

    humanReadablePassword: value => { //SA??? unused
        let groupSize = 5;
        if (value.length % groupSize != 0) {
            groupSize = 4;
            if (value.length % groupSize != 0) {
                groupSize = 3;
                if (value.length % groupSize != 0)
                    return value;
	        } //if
        } //if
        let result = "";
        for (let index = 0; index < value.length / groupSize; ++index)
            result += value.substr(index * groupSize, groupSize) + " ";
        return result;
    }, //humanReadablePassword

    styleSize: value => `${value}px`,

};