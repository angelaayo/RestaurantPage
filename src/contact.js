export function createContactPage(){
    const contactContainer = document.createElement("div");
    const contactHeader = document.createElement("div");
    contactHeader.textContent = "Contact Us";
    contactHeader.className = "title";




    contactContainer.append(contactHeader);

    return contactContainer;
}