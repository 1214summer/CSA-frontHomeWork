var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18,
        color: ['pink', 'blue']
    }
};
var o = {}
for (var k in obj) {
    // k 是属性名 obj[k] 是属性值
    o[k] = obj[k];
}
console.log(o);
o.msg.age = 20;
console.log(obj);

// Object.assign(o, obj) // 浅拷贝语法糖
// console.log(o);
//{ id: 1, name: 'andy', msg: { age: 18, color: [ 'pink', 'blue' ] } }
// o.msg.age = 20;

// console.log(obj);
//{ id: 1, name: 'andy', msg: { age: 20, color: [ 'pink', 'blue' ] } }
