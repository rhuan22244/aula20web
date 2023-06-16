function alo(){
    alert('alo!')
}

function olanome(nome){
    alert('ola ' + nome + ' bem vindo ao curso!')
}
function saudacao(){
    const nome = document .getElementById('nome').value
    if(nome != ''){
        alert(`ola ${nome}.Bem vindo ao curso`)//interpolaçâo de strings
    }else{
        alert('informe seu nome')
        document .getElementById('nome').focus()//coloca foco nos elementos
    }
}
function mouseCima(){
    alert('o mouse esta em cima')
}
function mouseSaiu(){
    alert('o mouse saiu')
}
function textoMudou(){
    alert('o texto mudou')
}
function emfoco(){
    const user = document .getElementById('user')
    user.style.border = '5px solid green'
    user.style.backgroundColor = 'black'
}
function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'green'
}
