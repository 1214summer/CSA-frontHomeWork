class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    speak(){
        console.log(`${this.name},你好，我${this.age}岁了`)
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }
    speak(){
        console.log(`${this.name},你好，我${this.age}岁了,是${this.grade}级`)
    }
}

const s1 = new Student('嚣张',13,[21,22,23,44])
console.log(s1)
s1.speak()