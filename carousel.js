// $(function() {
// $("#previous_frame").click(function(){
//         console.log("adentro")
//         $(".frames").animate({left: '620px'});
//     });
// // $("#next_frame").click(function(){
// //       console.log("hola");
// //       $("#active").animate({right: '620px'}, "slow");
// //     });
// });

// // function move(direction, num){

// // }


    $(function($) {
        // Aqui estamos usando una libreria para generar el carrusel de imagnes.
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
