//Menu active
function addMarkerCategory(){
    $(document).ready(function(){
        $('.category-name').on('click',function(){
            $(this).siblings().removeClass('cat-active');
            $(this).addClass('cat-active');
        })
    })
}

addMarkerCategory()
