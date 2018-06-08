//Part 1
// Using querySelector

var btnBlue = document.querySelector('#blueBtn');
var btnOrange = document.querySelector('#orangeBtn');
var btnGreen = document.querySelector('#greenBtn');

var buttonJum = document.querySelector('.jumbotron');
var buttonDonate = document.querySelector('.btn-primary');
var buttonVolunteer = document.querySelector(' .btn-secondary');

btnBlue.addEventListener('click', function() {
    buttonJum.style.backgroundColor = "#588fbd";
    buttonDonate.style.backgroundColor = '#ffa500';
    buttonVolunteer.style.backgroundColor = 'black';
    buttonVolunteer.style.color = 'white';
});

btnOrange.addEventListener('click', function(){
    buttonJum.style.backgroundColor = '#f0ad4e';
    buttonDonate.style.backgroundColor = '#5751fd';
    buttonVolunteer.style.backgroundColor = '31b0d5';
    buttonVolunteer.style.color = 'white';
});

btnGreen.addEventListener('click', function(){
    buttonJum.style.backgroundColor = '#87ca8a';
    buttonDonate.style.backgroundColor = 'black';
    buttonVolunteer.style.backgroundColor = '#8c9c08';
});

//using getElementByID

var blueButton = document.getElementById("blueBtn");
var orangeButton = document.getElementById("orangeBtn");
var greenButton = document.getElementById("greenBtn");

var buttonJum = document.querySelector(".jumbotron");
var donateButton = document.querySelector(".btn-primary");
var volunteerButton = document.querySelector(".btn-secondary");

blueButton.addEventListener('click', function(){
    buttonJum.style.backgroundColor = "#588fbd";
    donateButton.style.backgroundColor = "#ffa500";
    volunteerButton.style.backgroundColor = "black";
    volunteerButton.style.color = "white";
    
});

orangeButton.addEventListener('click', function(){
    buttonJum.style.backgroundColor = "#f0ad4e";
    donateButton.style.backgroundColor = "#5751fd";
    volunteerButton.style.backgroundColor = "#31b0d5";
    volunteerButton.style.color = "white";
    
});

greenButton.addEventListener('click', function(){
    buttonJum.style.backgroundColor = "#87ca8a";
    donateButton.style.backgroundColor = "black";
    volunteerButton.style.backgroundColor = "#8c9c08";
    
});

//Part 2

var submitBtn = document.querySelector('form');
var yourEmail = document.querySelector('#exampleInputEmail1');
var yourName = document.querySelector('#example-text-input');
var yourComment = document.querySelector('#exampleTextarea');
var formAllFields = document.querySelector('form .form-control');

submitBtn.addEventListener('click', function() {
    event.preventDefault();
    var formError = false;

    if (yourEmail.value.length == 0) {
        yourEmail.style.backgroundColor = "red";
        formError = true;
    }

    if (yourName.value.length == 0) {
        yourName.style.backgroundColor = "red";
        formError = true;
    }
    
    if (yourComment.value.length == 0) {
        yourComment.style.backgroundColor = "red";
        formError = true;
    }

    if (!yourEmail.value.includes('@')) {
        yourEmail.style.backgroundColor = "red";
        formError = true;
    }

    if (formError == false) {
        alert('Thank you for filling out the form!');
        formAllFields.forEach(i => {
            i.value = " ";
            i.style.backgroundColor = "white"
        });
    }
});






