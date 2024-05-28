var carro = [] ;
var spTotal = document.getElementById("Total");
var listacarro = document.getElementById("carrito");


function agregarcarro1(){

var objProducto = {
    id : 1,
    nombre : "Producto1",
    precio : 375,

};
carro.push(objProducto);
calcularTotal();
mostrarenCarro();

}

function calcularTotal(){
    var eltotal = 0;
    for (var p of carro)
        {
eltotal += p.precio;
        }
        spTotal.textContent = eltotal;
}