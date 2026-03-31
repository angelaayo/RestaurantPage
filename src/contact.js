import locationIcon from "./mapMarker.svg";
import phoneIcon from "./phoneIcon.svg";
import emailIcon from "./emailIcon.svg";
import hoursIcon from "./storeClock.svg";
import mapIcon from "./mapIcon.jpg";

export function createContactPage(){
    const contactContainer = document.createElement("div");
    contactContainer.className = "contactContainer";
    const contactHeader = document.createElement("div");
    contactHeader.textContent = "Contact Us";
    contactHeader.className = "title";
    const descriptor = document.createElement("div");
    descriptor.textContent = "Get in touch with Spag Spot"
    const subDescriptor = document.createElement("div");
    subDescriptor.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    const mapContainer = document.createElement("img");
    mapContainer.src = mapIcon;
    mapContainer.className = "mapImg";

    
    const infoContainer = document.createElement("div");
    infoContainer.className = "contactInfo";
    infoContainer.append(createInfo(locationIcon, "Our Location", "123 Saint Blvd"));
    infoContainer.append(createInfo(phoneIcon, "Phone Number", "1234567891"));
    infoContainer.append(createInfo(emailIcon, "Email Us", "spagspot@domain.com"));
    infoContainer.append(createInfo(hoursIcon, "Our Hours", "Mon-Sat: 7:00-3:00"));





    contactContainer.append(contactHeader, descriptor,subDescriptor, infoContainer, mapContainer);

    return contactContainer;
}

function createInfo(infoIcon, infoTitle, infoSubText){
    const box = document.createElement("div");
    box.className = "cardBox";
    const iconHolder = document.createElement("img");
    iconHolder.src = infoIcon;
    iconHolder.className = "iconImg";
    const titleHolder = document.createElement("div");
    titleHolder.textContent = infoTitle;
    const subtextHolder = document.createElement("div");
    subtextHolder.textContent = infoSubText;
    box.append(iconHolder, titleHolder, subtextHolder);
    return box;
}