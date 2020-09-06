const winter = document.querySelector(".winter");
const spring = document.querySelector(".spring");
const summer = document.querySelector(".summer");
const fall = document.querySelector(".fall");
const typeOfseason = document.querySelector("#typeOfseason")
const icon = document.querySelector("i");

const iconClass = ["far fa-snowflake fa-2x", "fas fa-seedling fa-2x", "fas fa-umbrella-beach fa-2x", "fas fa-tree fa-2x"];
const seasons = [winter, spring, summer, fall]
let nameOfseason = ["Winter", "Spring", "Summer", "Fall"]

for (let i = 0; i < seasons.length; i++) 
{

    seasons[i].addEventListener("mouseover", function () {
        // show name of season
        typeOfseason.innerHTML = nameOfseason[i];
        // show season icon
        icon.className = iconClass[i];
        icon.classList.add("moveIcon");
// chang the color of icon depending on the type of season
        if(iconClass[i] === iconClass[0]){
            icon.style.color="skyblue";
        }
        else if(iconClass[i] === iconClass[1]){
            icon.style.color="green";
        }
        else if(iconClass[i] === iconClass[2]){
            icon.style.color = "rgb(255, 51, 0)";
        }else{
            icon.style.color ="rgb(252, 156, 13)"
        }
    });
    
   
}
for (let i = 0; i < seasons.length; i++) {

    seasons[i].addEventListener("mouseout", function () {

        icon.classList.remove("moveIcon");
    });

}