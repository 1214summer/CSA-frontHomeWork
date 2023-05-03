var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
var o = {};
// 用递归的方式完成深拷贝 封装函数
function deepCopy(newobj, oldobj) {
    // 遍历oldobj的属性名
    for (let k in oldobj) {
        // 判断属性属于哪种数据类型
        // 1.获取属性值 oldobj[k]
        let item = oldobj[k];
        if (item instanceof Array) {
            newobj[k] = []; // (1)先给newobj添加一个属性k，同oldobj里的k
            deepCopy(newobj[k], item) // (2)再用oldobj[k]赋值给newobj[k]
        } else if (item instanceof Object) {
            newobj[k] = {};
            deepCopy(newobj[k], item)
        } else {
            newobj[k] = item
        }

    }
}
deepCopy(o, obj)
console.log(o);