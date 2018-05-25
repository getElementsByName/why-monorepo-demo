const ModuleA = require("@why-monorepo-demo/simple-module-a");
const ModuleB = require("@why-monorepo-demo/simple-module-b");

console.log(ModuleA);
console.log(ModuleB);

try{
    const PluginA = require("@why-monorepo-demo/simple-plugin-a");
    
    console.log(PluginA);
} catch(e){
    console.error("Can't load '@why-monorepo-demo/simple-plugin-a'", e);
}
