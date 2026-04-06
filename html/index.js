const banner = document.querySelector('.bannerImages');
const firstImageClone = banner.querySelectorAll('img')[0].cloneNode(true);
banner.appendChild(firstImageClone);
setInterval(() => {
    console.log(banner);
    const slideWidth = banner.clientWidth;
    if (banner.scrollLeft + banner.clientWidth >= banner.scrollWidth - 10) {
        banner.scrollTo({
            left: 0,
            behavior: 'auto'
        });
        setTimeout(() => {
            banner.scrollBy({
                left: slideWidth,
                behavior: 'smooth'
            });
        }, 50); 
    } 
    else {
        const currentScroll = banner.scrollLeft;
        const nextIndex = Math.round(currentScroll / slideWidth) + 1;
        
        banner.scrollTo({
            left: nextIndex * slideWidth,
            behavior: 'smooth'
        });
        
    }
}, 3000);

