function toggleMode(){
    //Aqui vou começar o código dentro da function mesmo
    const html = document.documentElement
    html.classList.toggle("light")
        /*if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }*/

    // Essa lógica acima, pode ser basicamente e facilmente substituida pelo toggle, caso tenha light ele tira, caso não tenha ele irá colocar

    //Alteração de imagem
    // Agora, vamos realizar a troca de imagem ao alterar do dark para o light mode
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // Se tiver sem o light mode, deixar imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }

}
// Esse código basicamente faz com que eu remova ou adicione o lightmode, removendo ou adicionando a classe light. 

