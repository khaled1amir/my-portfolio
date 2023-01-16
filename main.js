const moreOrLessBtn = document.getElementById("moreOrLess");
var moreCerts = document.getElementsByClassName("more");
var mood = "more";

moreOrLessBtn.onclick = () => {
    moreCerts.style.display = 'block';
}