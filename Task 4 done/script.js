/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(getResp => getResp.json())
    .then(getData => {
        console.log(getData)
        let cards = document.createElement("div")
        cards.className = "cards"
        getData.forEach(item => {
            let models = document.createElement("ul")
            let card = document.createElement("div")
            card.className = "card"
            let brand = document.createElement("h2")
            brand.textContent = item.brand
            let modelArr = item.models
            for (i = 0; i < modelArr.length; i++) {
                let model = document.createElement("li")
                model.innerText = modelArr[i]
                models.append(model)
            }
            card.append(brand, models)
            cards.append(card)
        });
        document.getElementById("output").append(cards)
    })
    .catch(error => {
        alert("error")
        return (error)
    })