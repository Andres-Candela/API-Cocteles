const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
window.addEventListener('DOMContentLoaded', coctelesApi);
const containerCard = document.getElementById("containerCard");

document.addEventListener('keyup', e=>{

  if (e.target.matches("#buscar")){

      if(e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".card").forEach(elemento => {

          elemento.textContent.toLowerCase().includes(e.target.value)
          ?elemento.classList.remove("filtro")
          :elemento.classList.add("filtro")
      })
  }
})

function coctelesApi(){
  fetch (url)
  .then(response => response.json())
  .then(data => data["drinks"].map(drinks => {
    
      const div = document.createElement("div");
      div.classList.add("card");

      const img = document.createElement("img");
      img.src = drinks["strDrinkThumb"];
      img.classList.add("img");

      const name = document.createElement("p");
      name.textContent = drinks["strDrink"];
      name.classList.add("name");

      div.appendChild(img)
      div.appendChild(name)
      containerCard.appendChild(div)
  }))
}