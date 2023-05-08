let obj = {
    name:"Zx",
    age:19,
    gender:"male",
    level:"cai"
}

obj[Symbol.iterator] = function(){
	var keys = Object.keys(this);
	var count = 0;
	return {
		next(){
			if(count<keys.length){
				return {value: obj[keys[count++]],done:false}
			}else{
				return {value:undefined,done:true}
			}
		}
	}
};

for(var k of obj){
	console.log(k);
}

