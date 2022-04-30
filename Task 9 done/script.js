/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie{
    constructor(title,director,budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive = ()=>this.budget > 100000000
}
const PulpFiction = new Movie("PulpFiction", "Tarantino", 213900000)
console.log(PulpFiction.title)
console.log(PulpFiction.director)
console.log(PulpFiction.budget)
console.log(PulpFiction.wasExpensive())
