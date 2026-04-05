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

    const contentChiangMai = document.getElementById("contentChiangMai");
    const contentChiangRai = document.getElementById("contentChiangRai");
    const contentNan = document.getElementById("contentNan");
    const openText = document.querySelector(".openText");
    const provinceName = tabSelectActive.textContent.trim(); 
 
    if (provinceName === "Chiang Mai") {
        contentChiangRai.classList.add("active");
        contentNan.classList.add("active");
        openText.textContent = '"Grace of Doi Suthep, Pride of Traditions, Beauty of Blossoms, The Precious Nakhon Phing"';

    } 
    else if (provinceName === "Chiang Rai") {
        contentChiangMai.classList.add("active");
        contentNan.classList.add("active");
        openText.textContent = '"Northernmost of Siam, Frontier of Three Lands, Home of Lanna Culture, Precious Phra That Doi Tung"';
    }
    else if (provinceName === "Nan") {
        contentChiangRai.classList.add("active");
        contentChiangMai.classList.add("active");
        openText.textContent = '"Renowned Boat Races, City of the Black Tusk, Wat Phumin Murals, Land of Golden Oranges, Radiant Phra That Chae Haeng"';
    }

} 