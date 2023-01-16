const moreOrLessBtn = document.getElementById("moreOrLess");
const moreCertificates = document.getElementById("more");
var mood = "more";
function showCertificates() {
    if (mood == "more") {
        moreCertificates.style.display = 'block';
        mood = "less";
    } else {
        moreCertificates.style.display = 'none';
        mood = "more"
    }
}