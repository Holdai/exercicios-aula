function Cadastrarcomanda(){
let nome = document.querySelector("#garçon").value
let mesa = parseInt(document.querySelector("#mesa").value)
let comanda = parseInt(documnet.querySelector("#comanda").value)
let resultado = comanda * (10/100)
document.querySelector("reultado").innerHTML = resultado

}