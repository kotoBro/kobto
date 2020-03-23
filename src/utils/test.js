
class Parent {
  constructor(name) {
    this.name = name
  }
  getName () {
    return this.name
  }

  get (propertyName) {
    console.log(propertyName)
  }
}
class Child extends Parent {
  constructor(name, sex) {
    super(name)
    this.sex = sex || 'boy'
  }
  getSex () {
    console.log(this.sex)
    return this.sex
  }
}
var child1 = new Child('child1')
var parent1 = new Parent('parent1')
console.log(child1) // Child{ name: 'child1', sex: 'boy' }
console.log(parent1)// Parent{ name: 'parent1' }
child1.getName()    // 'child1'
child1.getSex()     // 'boy'
parent1.getName()   // 'parent1'
parent1.getSex()    // Uncaught TypeError: parent1.getSex is not a function