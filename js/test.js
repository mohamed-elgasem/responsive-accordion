const content = document.querySelectorAll(".content");
const i = document.querySelectorAll("i");

content.forEach((item, index) =>{

    let header = item.querySelector("header");

    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        console.log();
        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fas fa-minus");
        }else{
            description.style.height = `0px`;
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    });
})