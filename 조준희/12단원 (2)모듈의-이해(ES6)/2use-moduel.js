import {name, property, say, home} from './2MyModule.js';
console.log(name);
console.log(property.id);
console.log(property.type);
say();

console.log(home.postcode);
console.log(home.address);
home.getAddress();