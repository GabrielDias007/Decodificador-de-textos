    var mensagecript = document.querySelector(".textarea");
    var mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptar = criptografar(mensagecript.value);
    mensagem.value = textoEncriptar;
    mensagecript.value = "";
}

function criptografar(stringCriptar){
    let codigoMatriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCriptar = stringCriptar.toLowerCase();

    for(let i = 0;i < codigoMatriz.length;i++){
        if(stringCriptar.includes(codigoMatriz[i][0])){
            stringCriptar = stringCriptar.replaceAll(codigoMatriz[i][0],codigoMatriz[i][1]);
        }
    }
    return stringCriptar;
}

function Btndescriptar(){
    const textoDescritografar = descriptar(mensagecript.value);
    mensagem.value = textoDescritografar;
    mensagecript.value = "";
}

function descriptar(stringDescriptar){
    let codigoMatriz = [["enter" , "e"],["imes" , "i"],["ai" , "a"],["ober" , "o"],["ufat" , "u"]];
    stringDescriptar = stringDescriptar.toLowerCase();

    for(let i = 0 ; i < codigoMatriz.length ; i++){
    if(stringDescriptar.includes(codigoMatriz[i][0])){
            stringDescriptar = stringDescriptar.replaceAll(codigoMatriz[i][0],codigoMatriz[i][1]);
        }
    }
    return stringDescriptar;
}

let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('.mensagem');
  textArea.select();
  document.execCommand('copy');
  
});