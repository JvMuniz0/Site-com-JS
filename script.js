function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var titulo = document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png.jpg'
        document.body.style.background = '#779d9e'
        titulo.innerHTML = 'Bom Dia'
        //Bom dia
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png.jpg'
        document.body.style.background = '#ef9b81'
        titulo.innerHTML = 'Boa Tarde'
        //boa tarde
    } else{
        img.src = 'noite.png.jpg'
        document.body.style.background = '#4d304f'
        titulo.innerHTML = 'Boa Noite'
        // boa noite
    }
}
