# Overloadfig
Config Descriptors.

- Easy to use
- Loose Goosey
- Json

## Examples
Don't believe me? take a look at this stuff ripped out of example.js:

```Javascript
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
                return "abc";
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

// Return values
// Also all keys are optional, best effort approach with minimal erroring
console.log(loadConfig(exampleSpec, {
    "action": {
        "http": "asdf"
    },
}));
```

## FUTURE WORK
- Strict mode
- Typescript
