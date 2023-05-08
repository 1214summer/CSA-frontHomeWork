var funcs = []

// 需要修改的函数
for (var i = 0; i < 10; i++) {
    funcs.push(function() { console.log(i) })
 }
 
//示例 使用es5的闭包的概念
//  for (var i = 0; i < 10; i++) {
//         func.push((function(value) {
//             return function() {
//                 console.log(value)
//             }
//         }(i)))
// }

function func(){
    let i=0
    for (i = 0; i < 10; i++) {
        funcs.push(i)
    }
}
func()
funcs.forEach(function(func) {
   console.log(func);
})




