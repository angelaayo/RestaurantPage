import "./style.css";
import {createHomePage} from "./home.js";

const navigate = (()=>{
    const outerContainer = document.querySelector("#content");
    outerContainer.append(createHomePage());
})();