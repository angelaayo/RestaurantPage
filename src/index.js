import "./style.css";
import {createHomePage} from "./home.js";
import {createMenuPage} from "./menu.js";
import {createContactPage} from "./contact.js";

const navigate = (()=>{
    const contentContainer = document.querySelector("#content");
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contactBtn = document.querySelector("#contactBtn");
    contentContainer.append(createHomePage());

    homeBtn.addEventListener("click", ()=>{
        contentContainer.innerHTML = "";
        contentContainer.append(createHomePage());
    });

    menuBtn.addEventListener("click", ()=>{
        contentContainer.innerHTML = "";
        contentContainer.append(createMenuPage());
    });

    contactBtn.addEventListener("click", ()=>{
        contentContainer.innerHTML = "";
        //contentContainer.append(createContactPage());
    });
})();