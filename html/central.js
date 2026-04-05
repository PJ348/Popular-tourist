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

    const contentBangkok = document.getElementById("contentBangkok");
    const contentAyutthaya = document.getElementById("contentAyutthaya");
    const contentKanchanaburi = document.getElementById("contentKanchanaburi");
    const openText = document.querySelector(".openText");
    const provinceName = tabSelectActive.textContent.trim(); 
 
    if (provinceName === "Bangkok") {
        contentKanchanaburi.classList.add("active");
        contentAyutthaya.classList.add("active");
        openText.textContent = '"City Built by Angels, Center of Administration, Radiant Temples and Palaces, The Capital of Thailand"';

    } 
    else if (provinceName === "Ayutthaya") {
        contentBangkok.classList.add("active");
        contentKanchanaburi.classList.add("active");
        openText.textContent = '"Ancient Capital, Land of Abundance, Outstanding Literature, Noble People of Ayutthaya, Invaluable World Heritage"';
    }
    else if (provinceName === "Kanchanaburi") {
        contentBangkok.classList.add("active");
        contentAyutthaya.classList.add("active");
        openText.textContent = '"Ancient Realm, Kanchanaburi is Gems, The River Kwai Bridge, Beautiful Waterfalls, and World Heritage"';
    }

} 
