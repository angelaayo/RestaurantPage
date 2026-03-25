import mainPastaImg from "./mainPasta.jpg";
import spicyPasta from "./pasta3.jpg";
import meditPasta from "./pasta2.jpg";
import tomatoPasta from "./pasta1.jpg";
export function createHomePage(){
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");
    const imageHolder = document.createElement("img");
    imageHolder.classList.add("mainImg");
    imageHolder.src = mainPastaImg;
    const infoDump = document.createElement("div"); //container for goal and history
    infoDump.classList.add("infoContainer");
    const ourGoal = document.createElement("div");
    const goalHeader = document.createElement("div");
    goalHeader.textContent = "Our Goal"
    ourGoal.textContent = "To serve up hearty, homemade-style spaghetti that keeps you coming back for more — because good pasta fixes everything.";
    const ourHistory = document.createElement("div");
    const historyHeader = document.createElement("div");
    historyHeader.textContent = "Our History"
    ourHistory.textContent = "Spag Spot was born out of a simple love for spaghetti and good company, started by two friends who believed great pasta shouldn't be complicated."
    infoDump.append(goalHeader, historyHeader, ourGoal, ourHistory);
    const faveHeader = document.createElement("div");
    faveHeader.textContent = "Our Favorites";
    //grid container
    const faveContainer = document.createElement("div");
    faveContainer.classList.add("faveContainer");
    const foodImages = [spicyPasta, meditPasta, tomatoPasta];
    for(let i=0; i<3; i++){
        const foodContainer = document.createElement('div');
        foodContainer.classList.add("foodContainer");
        const foodImg = document.createElement("img");
        foodImg.src = foodImages[i];
        foodImg.classList.add("foodImages");
        const foodTitle = document.createElement("div");
        const foodDescription = document.createElement("div");
        foodContainer.append(foodImg, foodTitle, foodDescription);
        faveContainer.append(foodContainer);
    }
    homeContainer.append(imageHolder, infoDump, faveHeader, faveContainer);
    return homeContainer;
    
}
