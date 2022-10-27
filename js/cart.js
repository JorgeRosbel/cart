const incrementar =  document.getElementById("add-count");
const remover =  document.getElementById("remove-count");
let pedido = [];

const createCart = ()=> {
  modalContainer.classList.remove("cart-hidden");
  modalContainer.innerHTML = "";
  const modalHeader = document.createElement('div');
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<p class="modal-title"><ion-icon name="restaurant"></ion-icon>Su pedido</p>`;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement('buttom');
  modalbutton.className = "modal-btn-close";
  modalbutton.innerHTML = '<ion-icon name="close"></ion-icon>';
  modalHeader.append(modalbutton);

  cart.forEach((product)=>{
      let cartContent = document.createElement('div');
      cartContent.className = "modal-content";
      cartContent.innerHTML = `
      <img src="${product.image}" alt="product-Img" class="img-mini">
      <p class="product-name-cart">${product.nombre}</p>
      <p class="product-amount">x${product.cantidad}</p>
      <p class="product-price-cart">${product.cantidad * product.precio}<ion-icon name="logo-euro"></ion-icon></p>
      `;

      modalContainer.append(cartContent);

      let eliminar = document.createElement("buttom");
      eliminar.className = "btn-delete";
      eliminar.innerHTML = `<ion-icon name="trash"></ion-icon>`;
      cartContent.append(eliminar);

      eliminar.addEventListener("click", eliminarProducto);

  });

  const total =cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const totalBuying = document.createElement('div');
  totalBuying.className = "total-content";

  totalBuying.innerHTML = `
  <p class="total">Total a pagar: ${total}<ion-icon name="logo-euro"></ion-icon></p>`;

  modalContainer.append(totalBuying);


  //Logica para enviar el pedido por Wahatsapp
  //Contenedor del pedido
  const enviarPedido = document.createElement("a");
  enviarPedido.innerHTML = `<buttom class="btn-pedido">Enviar<ion-icon name="logo-whatsapp"></ion-icon></buttom>`;
  const sendBtn = document.querySelector(".btn-pedido");
  enviarPedido.addEventListener("click", () => {
    cart.forEach((product) => {
      let nombreProducto = 'Nombre: ' + product.nombre + '\n';
      let unidades = 'Cantidad: ' + product.cantidad + '\n';
      let precioPorcantidad = 'Precio: '+ (product.cantidad * product.precio)  + ' euros' + '\n';
      pedido.push(nombreProducto,unidades,precioPorcantidad);
    });
    var address = 'https://api.whatsapp.com/send?phone=5358893628&text=PEDIDO%20MARYS%20CAFE%0A'+ pedido + 'Total a pagar: ' + '%0At' + total;
    enviarPedido.setAttribute("href",address);
  })

  totalBuying.append(enviarPedido);






  //Ocular verCarrito
  const btnClose = document.querySelector(".modal-btn-close");
  btnClose.addEventListener("click", () =>{
    modalContainer.classList.add("cart-hidden");
  });


};


verCarrito.addEventListener("click",createCart);

//Funcion de eliminar producto por ID
const eliminarProducto = () => {
  const foundId = cart.find((element) => element.id);
  cart = cart.filter((cartId) => {
    return cartId !== foundId;
  });
  cartCounter();
  createCart();
};

//Cart counter
const cartCounter = () => {
  cantCarrito.style.display = "block";
  cantCarrito.innerHTML = cart.length;
}


const enviarPedido =  () => {
  cart.forEach((product) => {
    let nombreProducto = 'Nombre: ' + product.nombre + '\n';
    let unidades = 'Cantidad: ' + product.cantidad + '\n';
    let precioPorcantidad = 'Precio'+ (product.cantidad * product.precio)  + ' euros' + '\n';
    pedido.push(nombreProducto,unidades,precioPorcantidad);
  });
  return pedido;
};
