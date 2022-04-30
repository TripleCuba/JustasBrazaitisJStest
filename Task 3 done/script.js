/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';
let cards = document.createElement("div");
cards.className = "cards"
let onOff = false
document.getElementById("btn").addEventListener("click", ()=>{
    onOff =! onOff
    console.log(onOff)
    if(onOff===true){
        document.getElementById("message").textContent = ""
        fetch(ENDPOINT)
        .then(getResp => getResp.json())
        .then(getData => {
            console.log(getData)
            getData.forEach(item => {
                let card = document.createElement("div")
                card.className = "card"
                let img = document.createElement("img");
                img.src = item.avatar_url;
                let login = document.createElement("h3");
                login.textContent = item.login;
                card.append(img, login)
                cards.append(card)
            });
            document.getElementById("output").append(cards)
        })
        .catch(error=>{
            error
            alert("error")
        }
            )}
    else{
document.getElementById("output").innerHTML=`<p id="message">Press "Show Users" button to see users</p>`}
    
})


