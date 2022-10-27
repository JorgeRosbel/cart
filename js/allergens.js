//Alergenos de productos
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
producto_1[1] = ['alergenos/camaron.png'];

var producto_2 = new Array();
producto_2[0] = ['alergenos/camaron.png'];
producto_2[1] = ['alergenos/camaron.png'];

var producto_3 = new Array();
producto_3[0] = ['alergenos/camaron.png'];
producto_3[1] = ['alergenos/camaron.png'];

var producto_4 = new Array();
producto_4[0] = ['alergenos/camaron.png'];
producto_4[1] = ['alergenos/camaron.png'];

var producto_5 = new Array();
producto_5[0] = ['alergenos/camaron.png'];
producto_5[1] = ['alergenos/camaron.png'];

var producto_6 = new Array();
producto_6[0] = ['alergenos/camaron.png'];
producto_6[1] = ['alergenos/camaron.png'];

var producto_7 = new Array();
producto_7[0] = ['alergenos/camaron.png'];
producto_7[1] = ['alergenos/camaron.png'];

var producto_8 = new Array();
producto_8[0] = ['alergenos/camaron.png'];
producto_8[1] = ['alergenos/camaron.png'];

var producto_9 = new Array();
producto_9[0] = ['alergenos/camaron.png'];
producto_9[1] = ['alergenos/camaron.png'];

var producto_10 = new Array();
producto_10[0] = ['alergenos/camaron.png'];
producto_10[1] = ['alergenos/camaron.png'];

var producto_11 = new Array();
producto_11[0] = ['alergenos/camaron.png'];
producto_11[1] = ['alergenos/camaron.png'];

var producto_12 = new Array();
producto_12[0] = ['alergenos/camaron.png'];
producto_12[1] = ['alergenos/camaron.png'];



