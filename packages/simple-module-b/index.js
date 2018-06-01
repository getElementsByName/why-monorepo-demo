const ModuleFromRemotePackage = require("why-simple-module");

module.exports = {
    "name": "@why-monorepo-demo/simple-module-b",
    "version": "2.0.1",
    "dependencies":{
        "why-simple-module": ModuleFromRemotePackage
    }
};