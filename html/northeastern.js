function activeSelectProvince(tabSelectActive) {
    // const tabSelect = document.querySelector(".active");
    // if (tabSelect !== null) {
    //     tabSelect.classList.remove("active");
    // }
    const tabSelect = document.querySelectorAll(".tabSelect");
    tabSelect.forEach(tabSelect => {
        tabSelect.classList.remove("active");
    });
    tabSelectActive.classList.add("active");

    const contentAll = document.querySelectorAll(".contentAll");
    contentAll.forEach(content => {
        content.classList.remove("active");
    });

    const contentLoei = document.getElementById("contentLoei");
    const contentBuriram = document.getElementById("contentBuriram");
    const contentNakhonRatchasima = document.getElementById("contentNakhonRatchasima");
    const openText = document.querySelector(".openText");
    const provinceName = tabSelectActive.textContent.trim(); 
 
    if (provinceName === "Loei") {
        contentNakhonRatchasima.classList.add("active");
        contentBuriram.classList.add("active");
        openText.textContent = '"City of the Sea of Mountains, The Coldest in Siam, Beautiful Flowers in Three Seasons, Home of Noble Monks, A Pristine City"';

    } 
    else if (provinceName === "Buriram") {
        contentLoei.classList.add("active");
        contentNakhonRatchasima.classList.add("active");
        openText.textContent = '"City of Stone Sanctuaries, Land of Volcanoes, Beautiful Silk, Rich in Culture, The Outstanding Sports City"';
    }
    else if (provinceName === "Nakhon Ratchasima") {
        contentLoei.classList.add("active");
        contentBuriram.classList.add("active");
        openText.textContent = '"City of Brave Women, Fine Silk, Korat Noodles, Stone Sanctuaries, and Dan Kwian Pottery"'; 
    }

} 
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll(".tabSelect");
    tabs.forEach(tab => {
        if (tab.textContent.trim() === "Loei") {
            activeSelectProvince(tab); 
        }
    });
});