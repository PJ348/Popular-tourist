const banner = document.querySelector('.bannerImages');
const firstImageClone = banner.querySelectorAll('img')[0].cloneNode(true);
banner.appendChild(firstImageClone);
setInterval(() => {
    console.log(banner);
    if (banner.scrollLeft + banner.clientWidth >= banner.scrollWidth - 10) {
        banner.scrollTo({
            left: 0,
            behavior: 'auto'
        });
        setTimeout(() => {
            banner.scrollBy({
                left: banner.clientWidth,
                behavior: 'smooth'
            });
        }, 50); 
    } 
    else {
        banner.scrollBy({
            left: banner.clientWidth,
            behavior: 'smooth'
        });
        
    }
}, 3000);

function myFunction(x) {
    x.classList.toggle("change");

    let myNavbar = document.getElementById("myNavbar");
    myNavbar.classList.toggle("active");
}

const user = "pornthinrada.janphen";
const domain = "gmail.com";
document.getElementById("email").textContent = user + "@" + domain;