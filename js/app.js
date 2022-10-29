//marcar categoria activa por default
$(".category-1").addClass("cat-active");

//Mostra categoria 1 por default
$(".category--1").show();
$(".category--2").hide();
$(".category--3").hide();
$(".category--4").hide();

//Mostrar confirmacion de PEDIDO
$(document).ready(function(){
  $(".btn-close-cofirm").on("click", function(){
    $(".cofirm-content").removeClass("show");
  })
})


//Categorias active
function addMarkerCategory(){
    $(document).ready(function(){
        $('.category-name').on('click',function(){
            $(this).siblings().removeClass('cat-active');
            $(this).addClass('cat-active');
        })
    })
}

addMarkerCategory();


function createContentCategoty(child,father){
  $(child).appendTo(father);
};

//Organizar las categorias en contenedores
//categoria 1
createContentCategoty('.card-1','.category--1');
createContentCategoty('.card-2','.category--1');
createContentCategoty('.card-3','.category--1');

//categoria 2
createContentCategoty('.card-4','.category--2');
createContentCategoty('.card-5','.category--2');
createContentCategoty('.card-6','.category--2');

//categoria 3
createContentCategoty('.card-7','.category--3');
createContentCategoty('.card-8','.category--3');
createContentCategoty('.card-9','.category--3');

//categoria 4
createContentCategoty('.card-10','.category--4');
createContentCategoty('.card-11','.category--4');
createContentCategoty('.card-12','.category--4');


//Ocular las categorias
function catHidden(){
  $(document).ready(function(){
    $(".category-1").on("click", function(){
        $(".category--1").show();
        $(".category--2").hide();
        $(".category--3").hide();
        $(".category--4").hide();
    })
  });

  $(document).ready(function(){
    $(".category-2").on("click", function(){
        $(".category--2").show();
        $(".category--1").hide();
        $(".category--3").hide();
        $(".category--4").hide();
    })
  });

  $(document).ready(function(){
    $(".category-3").on("click", function(){
        $(".category--3").show();
        $(".category--1").hide();
        $(".category--2").hide();
        $(".category--4").hide();
    })
  });

  $(document).ready(function(){
    $(".category-4").on("click", function(){
        $(".category--4").show();
        $(".category--1").hide();
        $(".category--2").hide();
        $(".category--3").hide();
    })
  });
}

catHidden();
