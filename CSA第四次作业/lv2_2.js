let light = {
    red:function(){
       console.log("red");
    },
    green:function(){
        console.log("green");
    },
    yellow:function(){
        console.log("yellow");
    }
}

const traffic_light=(light,delay)=>{
    return new Promise((light,reject)=>{
        setTimeout(()=>{
            light()
        },delay)
    })
}
const main=()=>{
    Promise.resolve()
    .then(()=>{
        return traffic_light(light.red(),3000)
    })
    .then(()=>{
        return traffic_light(light.green(),1000)
    })
    .then(()=>{
        return traffic_light(light.yellow(),2000)
    })
    .then(()=>{
        main();
    })
}
main()