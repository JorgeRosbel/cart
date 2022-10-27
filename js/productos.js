//Ver carrito
const verCarrito = document.getElementById('carrito');
const modalContainer = document.getElementById('modal-container');
const shop = document.querySelector('.shop');
const cantCarrito = document.getElementById('cantidad-cart');

const productos = [
    {
        "id":1,
        "nombre":"Patatas bravas",
        "precio":4.00,
        "img":"image/aperitivo_1.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":2,
        "nombre":"Pinchos de tortilla de patatas",
        "precio":2.80,
        "img":"image/aperitivo_2.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":3,
        "nombre":"Boquerones en vinagre",
        "precio":4.40,
        "img":"image/aperitivo_3.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":4,
        "nombre":"Limón",
        "precio":2.00,
        "img":"image/jugo_1.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":5,
        "nombre":"Naranja",
        "precio":4.34,
        "img":"image/jugo_2.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":6,
        "nombre":"Manzana",
        "precio":7.20,
        "img":"image/jugo_3.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":7,
        "nombre":"Pizza de chorizo",
        "precio":10.15,
        "img":"image/pizza_1.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":8,
        "nombre":"Pizza de jamón",
        "precio":9.00,
        "img":"image/pizza_2.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":9,
        "nombre":"Pizza de atún",
        "precio":4.00,
        "img":"image/pizza_3.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":10,
        "nombre":"Cheesecak",
        "precio":6.00,
        "img":"image/cake_1.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":11,
        "nombre":"Tres leches",
        "precio":10.00,
        "img":"image/cake_2.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    },
    {
        "id":12,
        "nombre":"Tiramisú",
        "precio":4.30,
        "img":"image/cake_3.jpg",
        "desc":"lorem impis desc lestro le as  adas derll lorem",
        "cantidad":1
    }
];


let cart = [];
var count = 1;
productos.forEach((product)=>{
    let card = document.createElement('div');
        card.className = "card card-" + count;
        card.innerHTML = `
        <img src="${product.img}" alt="product-Img" class="img-product">
        <div class="product-info">
            <p class="product-name">${product.nombre}</p>
            <p class="product-price">${product.precio}<ion-icon name="logo-euro"></ion-icon></p>
        </div>
        `
    count++;
    let add = document.createElement('buttom');
    card.append(add);
    add.className = "btn-buy";
    add.innerHTML = '<ion-icon name="cart"></ion-icon> Añadir';
    add.addEventListener("click",() =>{
      const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
      if(repeat){
        cart.map((prod) => {
          if(prod.id === product.id){
            prod.cantidad++;
          }
        })
      }else {
        cart.push({
            id: product.id,
            image: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad
        });
      }
      cartCounter();
    })

    shop.append(card);
})


//set localstorgae items






//Colocar allergenos en cartas especificas
setAllergens(producto_1,'.card-1');
setAllergens(producto_2,'.card-2');
setAllergens(producto_3,'.card-3');
setAllergens(producto_4,'.card-4');
setAllergens(producto_5,'.card-5');
setAllergens(producto_6,'.card-6');
setAllergens(producto_7,'.card-7');
setAllergens(producto_8,'.card-8');
setAllergens(producto_9,'.card-9');
setAllergens(producto_10,'.card-10');
setAllergens(producto_11,'.card-11');
setAllergens(producto_12,'.card-12');
