function myFun(){
  var emailcheck = document.getElementById('email').value;
var pattern =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (pattern.test(emailcheck)) {
    alert("valid");
    // document.getElementById('showmsg').innerHTML = "Valid email address";    
  }
else{
  alert("invalid");
      // document.getElementById('showmsg').innerHTML = "Invalid email address";    

}
}


// ******back to top arrow button javascript
	$(window).on('load', function(){
    if($('#back-to-top').length){
      var scrollTrigger = 100, //px
      backToTop = function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > scrollTrigger){
          $('#back-to-top').addClass('show');
        }
        else{
          $('#back-to-top').removeClass('show');
        }
      };
      backToTop();
      $(window).on('scroll',function(){
        backToTop();
      });
      $('#back-to-top').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop:0
        },700);
      });
    }
  });


  //***********Booking page javascript***********8
  
  // $(".gallery").magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   gall9ery:{
  //     enabled: true
  //   }
  // *******************



