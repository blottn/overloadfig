function isObjectOfTypes(o) {
    return Object.keys(o)
        .filter(x => !["string", "number", "object"].includes(x)).length == 0;
}

function loadConfig(def, cfg) {
    if (typeof def === "function") {
        return def(cfg);
    }
    if (!isObjectOfTypes(def)) {
        let out = {};
        Object.keys(cfg).map(key => {
            if (key in def) { // TODO add strict mode
                out[key] = loadConfig(def[key], cfg[key]);
            }
        });
        return out;
    }
    else {
        return loadConfig(def[typeof cfg], cfg);
    }
}

export default loadConfig
