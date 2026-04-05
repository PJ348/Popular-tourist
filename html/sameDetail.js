function myFunction(x) {
    x.classList.toggle("change");

    let myNavbar = document.getElementById("myNavbar");
    myNavbar.classList.toggle("active");
}

function direction (place) {
    const urlPlace = `https://www.google.com/maps/search/?api=1&query=${place}`;
    window.open(urlPlace, "_blank");
}

const user = "pornthinrada.janphen";
const domain = "gmail.com";
document.getElementById("email").textContent = user + "@" + domain;