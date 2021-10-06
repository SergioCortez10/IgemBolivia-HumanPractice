
window.addEventListener('scroll', (e)=>{
    let y = window.scrollY;
    if(y >= 500){
        document.getElementById('nav').classList.add('my-nav')
    }else{
        document.getElementById('nav').classList.remove('my-nav')
    } 
})

function navBarColor(){
    document.getElementById('nav').classList.add('my-nav')
}

// Boton ver mas
let i = 0;
let btnReference = document.querySelector('#btnReference').addEventListener('click', function() {
    if(!i){
        document.getElementById('vermas').style.display ='inline';
        document.getElementById('btnReference').innerHTML ='Hide references';
        i = 1;  
    }
    else {
        document.getElementById('vermas').style.display = 'none';
        document.getElementById('btnReference').innerHTML ='See references';
        i = 0;  
    }
})

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});