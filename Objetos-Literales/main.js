//objetos literales

const sale = {
    customer: "Erik Galindo",
    total: 1100,
    items: [
        {
            name: "Monitor 27 pulgadas",
            brand: "HP"
        },
        {
            name: "teclado",
            brand: "Hyper X"
        },
        {
            name: "Mouse",
            brand: "Vic Tysen"
        }
    ],
    showItems(){
        this.items.forEach(
            item => console.log(`${item.name}`)
        );
    },
    showInfo(){
        console.log("La información de la venta es: ");
        console.log(`Cliente: ${this.customer}, Total: ${this.total}`);
        this.showItems();
    }
};

sale.showInfo();