const form = document.querySelector("#form")
const mail = document.querySelector("#formCorreo")
const pass = document.querySelector("#formPassword")

let usuarios = [];
form.addEventListener("submit", nuevoUsuario)

function nuevoUsuario (e){
    e.preventDefault()
    usuarios.push({mail: `${mail.value}`, pass: `${pass.value}`});
    console.log(usuarios);
}
