$(document).ready(function(){
	$('#reader').html5_qrcode(function(code){
		  alert("Your QR detected!");
			//$('#loading').show();
			$('#reader').hide();
		  $.get("http://jo-pp-ruby-demo.herokuapp.com/qr/pay?amt=1100&ba=" + code, function(data){
        //alert("Payment Result: " + data);
				alert("Thank you for shopping!");
      });
			//$('#read').html(data);
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);

  //$('#coffee').blur(function(){
  //   cal();
  //});

});

/*function cal() {
	c = $('#coffeee').val();
	m = $('#milk').val();
	t = $('#tea').val();
	a = 500 x c + 200 x m + 400 x t;
	$('#total').val(a);
}*/
