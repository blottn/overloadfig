// Example overloadfig
const example = {
    "action": {
        "string": (val) => {
            console.log("hi");
        },
        "number": (val) => {
            console.log("number: " + val);
        },
        "object": {
            "http": (val) => {
                console.log("making a http get!" 
            },
        },
    }
}

function loadConfig(def, cfg) {
    if (typeof def === "function") { // base case
        return def(cfg);
    }
    if (typeof def === "object") { // we have some cases to test
        if (!(typeof cfg in def)) {
            throw `unhandled type ${cfg} in ${JSON.stringify(def)}`;
        }
    }
}
