//Alergenos de productos induviudales: la funcion se llama en el script producots.js
function setAllergens(elements,id){
    let card = document.querySelector(id);
    let allergens = document.createElement('div');
    for(i = 0; i<elements.length; i++){
        let allergensImg = document.createElement('img');
        allergens.className = "allergens-product";
        allergensImg.setAttribute('src',elements[i]);
        allergens.appendChild(allergensImg);
    }

    card.appendChild(allergens);

    return allergens;
}


var producto_1 = new Array();
producto_1[0] = ['alergenos/camaron.png'];
producto_1[1] = ['alergenos/cangrejo.png'];
producto_1[2] = ['alergenos/mani.png'];

var producto_2 = new Array();
producto_2[0] = ['alergenos/nuez.png'];
producto_2[1] = ['alergenos/leche.png'];

var producto_3 = new Array();
producto_3[0] = ['alergenos/sal.png'];
producto_3[1] = ['alergenos/trigo.png'];
producto_3[2] = ['alergenos/leche.png'];

var producto_4 = new Array();
producto_4[0] = ['alergenos/leche.png'];


var producto_5 = new Array();
producto_5[0] = ['alergenos/leche.png'];

var producto_6 = new Array();
producto_6[0] = ['alergenos/leche.png'];;

var producto_7 = new Array();
producto_7[0] = ['alergenos/sal.png'];
producto_7[1] = ['alergenos/trigo.png'];
producto_7[2] = ['alergenos/huevo.png'];
producto_7[3] = ['alergenos/chorizo.png'];


var producto_8 = new Array();
producto_8[0] = ['alergenos/sal.png'];
producto_8[1] = ['alergenos/huevo.png'];

var producto_9 = new Array();
producto_9[0] = ['alergenos/pez.png'];
producto_9[1] = ['alergenos/trigo.png'];
producto_9[2] = ['alergenos/huevo.png'];

var producto_10 = new Array();
producto_10[0] = ['alergenos/huevo.png'];
producto_10[1] = ['alergenos/leche.png'];
producto_10[2] = ['alergenos/trigo.png'];

var producto_11 = new Array();
producto_11[0] = ['alergenos/huevo.png'];
producto_11[1] = ['alergenos/leche.png'];
producto_11[2] = ['alergenos/trigo.png'];

var producto_12 = new Array();
producto_12[0] = ['alergenos/huevo.png'];
producto_12[1] = ['alergenos/leche.png'];
producto_12[2] = ['alergenos/trigo.png'];


//************************************************************************************************************************************************
//Creacion de todos los allergenos
const allergens = [
  {
    "nombre":"Camaron",
    "url":"alergenos/camaron.png"
  },
  {
    "nombre":"Cangrejo",
    "url":"alergenos/cangrejo.png"
  },
  {
    "nombre":"Chorizo",
    "url":"alergenos/chorizo.png"
  },
  {
    "nombre":"Hongo",
    "url":"alergenos/hongo.png"
  },
  {
    "nombre":"Huevo",
    "url":"alergenos/leche.png"
  },
  {
    "nombre":"Mani",
    "url":"alergenos/mani.png"
  },
  {
    "nombre":"Molusco",
    "url":"alergenos/molusco.png"
  },
  {
    "nombre":"Mostaza",
    "url":"alergenos/mostaza.png"
  },
  {
    "nombre":"Nuez",
    "url":"alergenos/nuez.png"
  },
  {
    "nombre":"Pescado",
    "url":"alergenos/pez.png"
  },
  {
    "nombre":"Pimienta",
    "url":"alergenos/pimienta.png"
  },
  {
    "nombre":"Pulpo",
    "url":"alergenos/pulpo.png"
  },
  {
    "nombre":"Sal",
    "url":"alergenos/sal.png"
  },
  {
    "nombre":"Sesamo",
    "url":"alergenos/sesamo.png"
  },
  {
    "nombre":"SO2",
    "url":"alergenos/SO.png"
  },
  {
    "nombre":"Soya",
    "url":"alergenos/soya.png"
  },
  {
    "nombre":"Trigo",
    "url":"alergenos/trigo.png"
  }
]
const createAllergens = () =>{
  const allergensContent = document.querySelector(".allergens-content");
  allergens.forEach((allergen) => {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
    <img class="allergens" src="${allergen.url}" alt="allergens-img">
    <p class="allergens-name">${allergen.nombre}</p>
    `
    allergensContent.append(box);
  });
}

createAllergens();
