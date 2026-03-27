import {menuData} from "./menuData.js";
export function createMenuPage (menuData){
    const menuHeader = document.createElement("div");
    const mainContainer = document.createElement("div");

    menuData.forEach(item => {
        const textContainer = createTextBlock(item);
        const imageHolder = createImageBlock(item.src)
    });
}