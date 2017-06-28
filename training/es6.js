// https://github.com/lukehoban/es6features
var ab = "sss".toUpperCase()

// arrrow function
var multi = (x, y) => x*y
var no_para = () => console.log("aaa")
var object_return = (id, name) => ({id: id, name:name})

//map
var arraydict = [
    {name: "samsung", value: 12},
    {name: "nokia", value: 13},
    {name: "lg", value: 14}
]
console.log(arraydict.map(x => x.value))
// filter
var disbythree = arraydict.filter(x => x % 3 == 0)

//class
class Shape{
    constructor(id, x, y){
        this.id = id
        this.move = move(x,y)
    }
    static move (x, y){ //called without instance
        this.x = x
        this.y = y
    }
}
class Retangle extends Shape{
    constructor(id, x, y, width, height){
        super(id, x, y)
        this.width = width
        this.height = height
    }
}