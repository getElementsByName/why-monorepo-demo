const SimpleModuleA = require("@why-monorepo-demo/simple-module-a");

module.exports = {
    "name": "@why-monorepo-demo/simple-plugin-a",
    "version": "2.0.1",
    "dependencies":{
        "@why-monorepo-demo/simple-module-a": SimpleModuleA
    }
};