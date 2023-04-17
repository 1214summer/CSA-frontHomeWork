function myPush(...value){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i];
    }
}
var arr=[231];
arr.myPush(1,2,3,4);
console.log(arr);//结果：[231,1,2,3,4]