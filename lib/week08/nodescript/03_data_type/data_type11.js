const obj = {foo:'hello'};

obj = {foo:'good bye'};

Object.freeze(obj);

obj.foo = 'good bye';

console.log(obj.foo);