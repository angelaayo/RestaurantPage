import oysterImg from "./oyster.jpg";
import pastaImg from "./pasta4.jpg";
import cakeImg from "./cake.jpg";
import wineImg from "./wine.jpg";
export const menuData = [
    {
        title: "Wine",
        src: wineImg,
        items: [
            { name: "Chateau Belmont Rouge", price: 12.99 },
            { name: "Villa Sera Pinot Grigio", price: 10.99 },
            { name: "Domaine Noir Cabernet", price: 14.99 },
            { name: "Casa Blanca Rosé", price: 9.99 }
        ]
    },
    {
        title: "Appetizer",
        src: oysterImg,
        items: [
            { name: "Bruschetta al Pomodoro", price: 8.99 },
            { name: "Burrata e Prosciutto", price: 12.99 },
            { name: "Calamari Fritti", price: 10.99 }
        ]
    },
    {
        title: "Main Course",
        src: pastaImg,
        items: [
            { name: "Tagliatelle al Ragù", price: 16.99 },
            { name: "Pappardelle ai Funghi", price: 15.99 },
            { name: "Rigatoni all'Amatriciana", price: 14.99 },
            { name: "Gnocchi al Gorgonzola", price: 13.99 }
        ]
    },
    {
        title: "Desserts",
        src: cakeImg,
        items: [
            { name: "Tiramisù della Casa", price: 7.99 },
            { name: "Panna Cotta al Lampone", price: 6.99 },
            { name: "Torta di Cioccolato", price: 8.99 }
        ]
    }
]