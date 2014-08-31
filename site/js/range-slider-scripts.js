//solution 1
    function redirectPage() {
      	//var juniors = [4,5,6,7];
        //var seniors = [8,9,10,11,12];
        //var teens = [13,14,15];


        //var age = $("input[name=age-slider]").val();

        var age  = document.getElementById('age-slider').value;


        if (age < 8) {
        	window.location.href ="juniors.html";
        }
        else if (age >7 && age < 13) {
        	window.location.href ="seniors.html";
        }
        else if (age > 12) {
        	window.location.href ="teens.html";
        }
    }
        


    function redirectPageWithValue(selectedAge) {

        document.getElementById('age-slider').value = selectedAge;

        console.log ("value= " + document.getElementById('age-slider').value )

        if (selectedAge < 8) {
            window.location.href ="juniors.html";
        }
        else if (selectedAge >7 && selectedAge < 12) {
            window.location.href ="seniors.html";
        }
        else if (selectedAge > 13) {
            window.location.href ="teens.html";
        }
    }
        


//solution 2 // http://stackoverflow.com/questions/19740612/styled-input-type-range-made-to-redirect-not-working-on-touch-devices
    /*document.getElementById('age-slider').onmouseup = function () {
        var val = document.getElementById('age-slider').value;
        if (val <= 7) {

            window.location.href = "juniors.html";
        } 
        else {
            this.value = 0;
            zero()
        }
    }*/

//solution 3 //http://api.jquery.com/change/
   