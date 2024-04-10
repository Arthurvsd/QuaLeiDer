function mostrarsenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('versenha')

    if (inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash-fill')
    }
    else
    inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye')
}