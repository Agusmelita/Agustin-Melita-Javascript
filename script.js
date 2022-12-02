function sumarProductosYAgregarIVA(){
    console.log(sumaIva());
    }
    

let suma = 0 ;

while (suma >= 25000){
    alert("Superaste el monto de compra")
}



function VerificarTarjeta(){

    let tarjetaDeCredito = document.getElementById("tarjetaDeCredito").value; 

    if (tarjetaDeCredito <= 9999999999999999 && tarjetaDeCredito >=1000000000000000){
        console.log("La tarjeta es valida");
    }
    else{
        console.log("El numero no corresponde a una tarjeta");
    }
}

function VerificarCVC(){

    let cvc = document.getElementById("cvc").value; 

    if (cvc <= 999 && cvc >= 100){
        console.log("el CVC es valido");
    }
    else{
        console.log("El numero no corresponde a un cvc");
    }
}

function Pagar(){
    VerificarCVC()
    VerificarTarjeta()
}

class Producto{
    constructor(nombre, marca, precio, tipo){

        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.tipo = tipo
    }

    sumaIva(){
        this.precio =this.precio * 1.21;
    }
    
}

const producto1 = new Producto("Placa de Video XFX Radeon RX 6600 XT 8GB GDDR6","XFX", 98000, "Placa de video") 
const producto2 = new Producto("Memoria RAM Adata XPG Spectrix D50 ROG 8GB", "Adata", 13000, "Memoria RAM") 
const producto3 = new Producto("Mouse Redragon M711", "Redragon", 5200, "Mouse") 
const producto4 = new Producto("Gabinete DeepCool Matrexx 55 Mesh", "Deepcool", 12000, "Gabinete") 
const producto5 = new Producto("Placa de video Zotac RTX 3060 TI 12GB", "Zotac", 156000, "Placa de video") 
const producto6 = new Producto("Mother ASUS PRIME A520M-K AM4", "ASUS",  18000, "Motherboard") 


const productosArray = [producto1, producto2, producto3, producto4, producto5, producto6]

const divTarjetas = document.getElementById("divTarjetas")

productosArray.forEach(prodArray => {
    divTarjetas.innerHTML += `
    <div class="tarjeta">
        <h4 class="nombre_producto">${prodArray.nombre}</h4>
        <p class="precio">$ ${prodArray.precio}</p>
        <button onclick=" localStorage.setItem('precio', JSON.parse(${prodArray.precio}))">Comprar</button>
    </div>
    `
})


//<button onclick=" localStorage.setItem('precio', JSON.parse(${prodArray.precio}))">Comprar</button>

function eliminarLocalStorage(){
    localStorage.clear()
}

localStorage.clear
/*productos.sort((a, b) => {
    if (a.precio < b.precio){
        return -1;
    }
    
    if (a.precio > b.precio){
        return 1;
    }
     return 0;
    
});
console.log(productos)
*/





