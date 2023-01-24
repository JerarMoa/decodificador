const texto = document.querySelector(".textarea");
const encriptado = document.querySelector(".encriptado");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");

const btnCopiar = document.querySelector(".copiar")


//función que oculta la imagen
function ocultar() {
    document.querySelector("header").className = "ocultar"
    document.querySelector(".seccion1").className = "ocultar"
    document.querySelector(".munieco").className = "ocultar"
    document.querySelector(".no-encontrado").className = "ocultar"
}


//función que encripta el texto
function encriptar(mensajeEncriptado) {
    let miCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < miCodigo.length; i++) {
        if(mensajeEncriptado.includes(miCodigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(miCodigo[i][0], miCodigo[i][1])
        }
    }
    return mensajeEncriptado;
}


//función que escribe el texto encriptado en el textarea
function textoEncriptado() {
    ocultar()
    encriptado.innerHTML = encriptar(texto.value);
}


//función que desencripta el texto
function desencriptar(mensajeDesencriptado) {
    let miCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < miCodigo.length; i++) {
        if(mensajeDesencriptado.includes(miCodigo[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(miCodigo[i][1], miCodigo[i][0])
        }
    }
    return mensajeDesencriptado;
}

//función que escribe el texto desencriptado en el textarea
function textoDesencriptado() {
    ocultar()
    encriptado.innerHTML = desencriptar(texto.value);
}


//función que copia el código
function copiar() {
    let copiarTexto = encriptado;
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(encriptado.value);
    alert("copiaste: " + encriptado.value);
}


btnEncriptar.onclick = textoEncriptado;

btnDesencriptar.onclick = textoDesencriptado;

btnCopiar.onclick = copiar;