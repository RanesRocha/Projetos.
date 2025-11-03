
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("ligth")
    // Podendo usar if else mas toggle(verifica) resolve

    const img = document.querySelector("#profile img")
    // buscou tag img
    if(html.classList.constains("ligth")){
        img.setAttribute("src=","./assets/Img_avatar.png")
        //se estiver no ligth adiciona está imagem 
    }else{
        img.setAttribute("src=","./assets/Img_avatar.png")
        //se não estiver no ligth mode, mantem essa imagem
    }
}
//("src=","./assets/Img_avatar.png") podendo ser alterado a imagem  












