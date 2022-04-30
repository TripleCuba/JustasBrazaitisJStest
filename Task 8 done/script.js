/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(val1,val2){
    this.a=val1;
    this.b=val2;
    this.sum = ()=>this.a+this.b
    this.subtraction = ()=>this.a-this.b
    this.multiplication = ()=>this.a*this.b
    this.division = ()=>this.a/this.b
    
}
const number = new Calculator(10,2)
console.log(number.sum())
console.log(number.subtraction())
console.log(number.multiplication())
console.log(number.division())

