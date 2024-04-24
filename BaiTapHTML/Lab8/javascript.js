// confirm to display the page or not
function confirmToDisplay() {
    if (confirm("Do you want to display the page?")) {
        document.getElementById("display").innerHTML = "The page is displayed";
    } else {
        document.getElementById("display").innerHTML = "The page is not displayed";
    }
}