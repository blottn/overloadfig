import loadConfig from './overloadfig.js';

// Example overloadfig
const exampleSpec = {
    "action": {
        "string": (val) => {
            console.log("hello " + val);
        },
        "number": (val) => {
            console.log("number: " + val);
        },
        "object": {
            "http": (val) => {
                console.log("making a http get! (not really obviously)" );
                return "abc"; // Could return the actual value here
            },
        },
    },
    "msg": { // Note don't have to specify that it's an object
        "name": (name) => {
            console.log(`hello ${name}!`);
            return `hello ${name}!`;
        }
    },
}

// Basic callbacks on values
loadConfig(exampleSpec, {
    "action": "to new overloadfig user!",
    "msg": {
        "name": "root"
    }
});
// Outputs ->
//     hello to new overloadfig user!
//     hello root!



// Return values
// Also all keys are optional, best effort approach with minimal erroring
console.log(loadConfig(exampleSpec, {
    "action": {
        "http": "asdf"
    },
}));
// Outputs ->
//     making a http get! (not really obviously)
//     { action: { http: 'abc' } }

