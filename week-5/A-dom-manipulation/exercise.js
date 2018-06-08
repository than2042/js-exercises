/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
//document.body.style.background = "blue";

 document.querySelector("#bgrChangeBtn").addEventListener("click", buttonChange);
function buttonChange() {
    document.body.style.background = "blue";
}




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector("#alertBtn").addEventListener("click", function alertButton() {
    alert("Thanks for visiting Bikes for Refugees");
});




/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// var newParagraph = document.createElement('p');
// newParagraph.innerText = "Read more Below"

document.querySelector("#addTextBtn").addEventListener("click", displayContent)
function displayContent() {
    var button = document.querySelector("#addTextBtn");
    var newParagraph = document.createElement('p');
    newParagraph.innerText = "Read more Below";
    button.parentElement.appendChild(newParagraph);
    
}


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
 
var largeFontSize = document.getElementById("#largerLinksBtn");
addEventListener("click", function() {
    document.querySelector('#bgrChangeBtn').style.fontSize = "2rem";
    document.querySelector('#alertBtn').style.fontSize = "2.3rem";
    document.querySelector('#addTextBtn').style.fontSize = "2.6rem";
    document.querySelector('#addArticleBtn').style.fontSize = "1rem";
    document.querySelector('#addArticleBtn').style.border = "solid black 5px";
});



