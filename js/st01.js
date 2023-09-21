/* Como crio uma função no java script*/

function cadastrarPessoa() {
    /* 
    var let const
    */
    let nome = document.querySelector("#nome").value
    localStorage.setItem("nome", nome)

    window.location.href = "bemvindo.html" 

    //alert (nome)


}