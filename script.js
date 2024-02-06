const listElements = document.querySelectorAll('.expand');

listElements.forEach((item, index) => {
    const btn = item.querySelector("#icon-toggle");
    const toShowContent = item.querySelector(".invisible-content");

    btn.addEventListener("click",()=>{
        toShowContent.classList.add("active");

        listElements.forEach((itr,idx)=>{
            
            const selectedBtn = itr.querySelector("#icon-toggle");
            if(idx === index)selectedBtn.src = "./assets/images/icon-minus.svg";
            if (idx !== index) {
                const otherContent = itr.querySelector(".invisible-content");
                selectedBtn.src = "./assets/images/icon-plus.svg";
                if (otherContent.classList.contains("active")) {
                    otherContent.classList.remove("active");
                }
            }
        })
    })
    
    
});
