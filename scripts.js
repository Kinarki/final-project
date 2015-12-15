var app = angular.module('tugowarApp', []);
var counter = 0;
$(document).on('keyup', function(e){
    if(e.keyCode == 40){
       counter += 1;
        console.log(counter);
    }
    if(counter === 40){
        alert('win');
        counter = 0;
    }
});