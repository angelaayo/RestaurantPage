import {menuData} from "./menuData.js";
export function createMenuPage (){
    const outerMostContainer = document.createElement("div");
    const menuHeader = document.createElement("div");
    menuHeader.textContent = "Menu";
    const mainContainer = document.createElement("div");
    mainContainer.className = "menuContainer";

    menuData.forEach((menuGroup, row) => {
        const menuInfo = document.createElement("div");
        menuInfo.className = "menuInfoContainer";
        const textContainer = createTextBlock(menuGroup);
        const imageHolder = createImageBlock(menuGroup.src);

        if(row%2 ==0){
            menuInfo.append(textContainer, imageHolder);
        }
        else{
            menuInfo.append(imageHolder, textContainer);
        }
        mainContainer.append(menuInfo)
    });
    outerMostContainer.append(menuHeader, mainContainer);

    return outerMostContainer;
}

function createTextBlock(menuGroup){
    const textContainer = document.createElement("ul");
    textContainer.className = "menuTextContainer";
    const textHeader = document.createElement("li");
    textHeader.textContent = menuGroup.title;
    textContainer.append(textHeader);
    menuGroup.items.forEach(item =>{
        const itemContainer = document.createElement("li");
        itemContainer.className = "menuItems";
        const itemText = document.createElement("span");
        itemText.textContent = item.name;
        const itemPrice = document.createElement("span");
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemContainer.append(itemText, itemPrice);
        textContainer.append(itemContainer);
    })
    return textContainer;
}

function createImageBlock(menuImage){
    const imageHolder = document.createElement("img");
    imageHolder.src = menuImage;
    imageHolder.className = "menuImg";
    return imageHolder;
}