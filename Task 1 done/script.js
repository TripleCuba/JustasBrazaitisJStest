/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let svar = (x) => x * 2.2046;
let gram = (x) => x / 0.001;
let unc = (x) => x * 35.274;


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let inpKg = document.getElementById("search").value;
    let ansDiv = document.createElement("div");
    ansDiv.className = "ansDiv";
    let lbRow = document.createElement("h1");
    lbRow.textContent = inpKg + "kg = " + svar(inpKg) + "lb";
    let gRow = document.createElement("h1");
    gRow.textContent = inpKg + "kg = " + gram(inpKg) + "g";
    let ozRow = document.createElement("h1");
    ozRow.textContent = inpKg + "kg = " + unc(inpKg) + "oz";
    ansDiv.append(lbRow, gRow, ozRow);
    document.getElementById("output").append(ansDiv);


})

