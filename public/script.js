
const slider = localStorage.getItem('slider')
  

$(document).ready(function() {

    // slider.forEach(song => {
    //     $('.owl-carousel').append(`
    //     <div class="item">
    //       <img src=${song.poster} class='w-full'/>
    //     </div>`);
    //   })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
});
  
  
  

