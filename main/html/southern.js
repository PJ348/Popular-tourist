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

    const contentPhuket = document.getElementById("contentPhuket");
    const contentKrabi = document.getElementById("contentKrabi");
    const contentSuratThani = document.getElementById("contentSuratThani");
    const openText = document.querySelector(".openText");
    const provinceName = tabSelectActive.textContent.trim(); 
    
    document.getElementById("contentPhuket").click();
    if (provinceName === "Phuket") {
        contentKrabi.classList.add("active");
        contentSuratThani.classList.add("active");
        openText.textContent = '"Pearl of the Andaman, Paradise of the South, Golden Sand Beaches, Two Heroines, Revered Luang Pho Chaem"';

    } 
    else if (provinceName === "Krabi") {
        contentPhuket.classList.add("active");
        contentSuratThani.classList.add("active");
        openText.textContent = '"The Livable City, Home to Lovely People"';
    }
    else if (provinceName === "Surat Thani") {
        contentPhuket.classList.add("active");
        contentKrabi.classList.add("active");
        openText.textContent = '"City of a Hundred Islands, Delicious Rambutan, Big Oysters, Red Salted Eggs, Center of Dharma"';
    }

} 
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll(".tabSelect");
    tabs.forEach(tab => {
        if (tab.textContent.trim() === "Phuket") {
            activeSelectProvince(tab); 
        }
    });
});