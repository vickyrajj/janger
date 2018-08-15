$(document).ready(function(){
    
      var zero=1000;
        $(window).on('scroll',function(){
                $('.navbar').toggleClass('hide',$(window).scrollTop()>zero);
                zero=$(window).scrollTop();
            
        })
        
    
})
