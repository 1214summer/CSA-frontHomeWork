const person = {
    name: 'csa',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2021, title: 'GoodStudent' }]
}

//我的代码
const { name, age: year, address: { city, area: mountain }, title: [title1, { year: title2, title: title3 }] } = person
// const { area: mountain } = area

console.log(name) // csa
console.log(year) // 1000000这里没有写错哈，就是要输出 1000000，结合课件
console.log(city) // ChongQing
console.log(mountain) // NanShan //这里没有写错，就是要输出 NanShan，结合课件
console.log(title1) // student
console.log(title2) // 2021
console.log(title3) // GoodStudent
