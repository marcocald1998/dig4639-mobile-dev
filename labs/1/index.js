let Adder = require ("./Adder.js")
let myAdder = new Adder (
    {
        a:3,
        b:8
    }
)
console.log(myAdder.render());