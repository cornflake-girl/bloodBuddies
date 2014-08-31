//range-slider-scripts.js

<script type="text/javascript">
      //solution 1
      function redirectPage(age) {
      	var juniors = [4,5,6,7];
        var seniors = [8,9,10,11,12];
        var teens = [13,14,15];
        var age = $("input[name=age-slider]").val();
        if (age == 'juniors') {
        	window.location.href ="juniors.html"
        }
        else {if (age =='seniors') {
        	window.location.href ="seniors.html"
        }
        else (age =='teens') {
        	window.location.href ="teens.html"
        };};
      });
        


    //solution 2 // http://stackoverflow.com/questions/19740612/styled-input-type-range-made-to-redirect-not-working-on-touch-devices
    //document.getElementById('age-slider').onmouseup = function () {
    //var val = document.getElementById('age-slider').value;
    //if (val <= 7) {

      //  window.location.href = "juniors.html";
    //} else {
      //  this.value = 0;
        //zero()
    //}
//}
</script>