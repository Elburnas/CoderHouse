let usuarios = [];
let newuser = prompt("¿Es nuevo usuario? ");
let usuarioViejo = "";

function userCreado(){
    for (let i=0;i<100;i++)
    {
        if (newuser[i] == usuarioViejo)
        {
            alert("Ingrese su password");
        }
        else
        {
            alert("Por favor cree un usuario");
            return;
        }
    }
}
switch(newuser){
    case "No":
            usuarioViejo =prompt("Ingrese su correo por favor: ");
            userCreado();
        break;
    case "Si":
            usuarios.push(prompt("Ingrese su correo: "))
        break;
}