const ModuleFromRemotePackage = require("why-simple-module");

module.exports = {
    "name": "@why-monorepo-demo/simple-module-a",
    "version": "2.0.1",
    "dependencies":{
        "why-simple-module": ModuleFromRemotePackage
    }
};