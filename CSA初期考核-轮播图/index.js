window.onload=function(){
    let body=document.querySelector('.body')
    body.style.width=screen.width+'px';
    document.querySelector('.right').style.left=(screen.width-100)+'px'
    body.addEventListener('mouseover',function(){
        document.querySelector('.left').style.opacity='1'
        document.querySelector('.right').style.opacity='1'
    })
    body.addEventListener('mouseout',function(){
        document.querySelector('.left').style.opacity='0'
        document.querySelector('.right').style.opacity='0'
    })
}

let option={
    method:'GET',
    mode:'cors',
}
fetch('https://autumnfish.cn/personalized').then(res=>{
    return res.json()
})
.then(json=>{
    console.log(json.result)
    let datas=json.result
    datas.map(data=> {
        let str=`
        <div class="data">
            <img src=${data.picUrl} alt="">
            <div class="profile">
                <span class="name">${data.name}</span>
                <span class="count">播放量：${data.playCount}</span>
            </div>
        </div>
        `
        document.querySelector('.content').innerHTML+=str
        
    })
})
const content=document.querySelector('.content')
const lis=document.querySelectorAll('.circle li')
function pointsSlide(index){
    const lis=document.querySelectorAll('.circle li')
    const content=document.querySelector('.content')
    target=-index*1253
    content.style.left= target +'px'
    for(let i=0;i<lis.length;i++){
        lis[i].className=''
    }
    lis[index].className='current'
}
//左边滑动的按键
function leftSlide(){
    const content=document.querySelector('.content')
    const lis=document.querySelectorAll('.circle li')
    let index=0
    for(let i=0;i<lis.length;i++){
        if(lis[i].className==='current') {index=i}
    }
    if(index!==0){
        console.log('kk');
        content.style.left=(-(index+1)*1253)+'px'
        for(let i=0;i<lis.length;i++){
          lis[i].className=''
        }
        lis[index-1].className='current'
    }
    
}
//右边滑动的按键
function rightSlide(){
    const content=document.querySelector('.content')
    const lis=document.querySelectorAll('.circle li')
    let index=0
    for(let i=0;i<lis.length;i++){
        if(lis[i].className==='current')
        index=i
    }
    if(index!==5){
        content.style.left=-(index-1)*1253+'px'
        for(let i=0;i<lis.length;i++){
          lis[i].className=''
        }
        lis[index+1].className='current'
    }
}