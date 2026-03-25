import mainPastaImg from "./mainPasta.jpg";
export function createHomePage(){
    const homeContainer = document.createElement("div");
    const imageHolder = document.createElement("img");
    imageHolder.src = mainPastaImg;
    const infoDump = document.createElement("div");
    const ourGoal = document.createElement("div");
    ourGoal.textContent = "";
    const ourMission = document.createElement("div");
    //grid container
    const faveContainer = document.createElement("div");
    //const foodImages = ["salad.png", "burger.png", "tiramisu.png"];
    for(let i=0; i<3; i++){
        const foodContainer = document.createElement('div');
        const foodImg = document.createElement("img");
        //foodImg.src = foodImages[i];
        const foodTitle = document.createElement("div");
        const foodDescription = document.createElement("div");
    }
    homeContainer.append(imageHolder);
    return homeContainer;
    
}
