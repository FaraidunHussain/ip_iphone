
$('.m').click(function(){
	$('nav .menu').toggle(100);
});
$(window).resize(function(e) {
var menu = $(window).width();
if($(window).width() >= 768)
{
$('nav .menu').removeAttr('style')
}
});


        $(document).ready(function (){
            $("#scroll").click(function (){
                    $('html , body').animate({
						scrollTop:'0px'
						}, 1500);
            });
			
        });
			 //@Faraidun Hussain | 2015

       var iphone;

       function myFunction() {
         iphone = setTimeout(showPage, 2000);
       }
       
       function showPage() {
         document.getElementById("loader").style.display = "none";
         document.getElementById("ip-iphone").style.display = "block";
       }
           
            function startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(function() {
                    startTime()
                }, 500);
            }
            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i
                };
                return i;
            }
        
        var slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
