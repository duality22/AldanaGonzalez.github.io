'use strict'

$(document).ready(function(){


    $('body').on({ 'mousemove' : function( e ){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left' : (clientX - 20) + 'px',
            'top' : (clientY - 20 ) + 'px'
        })
    }})

    $('.a').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })

})


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);
})