$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.mega-dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown(400);
            $(this).toggleClass('open');        
        },
        function() {
            $('.mega-dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp(0);
            $(this).toggleClass('open');       
        }
    );
});

//
//$(document).ready(function(){
//    $(".dropdown").click(function() {
//            $('.profile-dropdown-menu').toggleClass('open').slideDown(400);      
//    });
//});

/* CATEGORIES DROPDOWN */

//	$('.profile-slide-down').click(function(){
//		$('.profile-dropdown-menu').slideToggle(500);
//		return false;
//	});
//
//	$(document).click(function(e){
//		if( $(e.target).is('.profile-dropdown-menu , .profile-dropdown-menu *') ){
//		// do nothing
//		} else {
//			$('.profile-dropdown-menu').slideUp(500);
//		}
//	});
//	$(document).on('click' , '.dropdown' , function(){
//		$('.profile-dropdown-menu').slideUp(500);
//	});
//
//    $('.categories-dropdown').click(function(){
//		$('.profile-dropdown-menu').slideToggle(500);
//		return false;
//	});
//
//	$(document).click(function(e){
//		if( $(e.target).is('.profile-dropdown-menu , .profile-dropdown-menu *') ){
//		// do nothing
//		} else {
//			$('.profile-dropdown-menu').slideUp(500);
//		}
//	});
//	$(document).on('click' , '.dropdown' , function(){
//		$('.profile-dropdown-menu').slideUp(500);
//	});

