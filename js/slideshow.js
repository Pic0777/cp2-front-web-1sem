/*CRIANDO UM SLIDESHOW AUTOMÁTICO */

//VARIAVEIS 

//ARRAY
let imagens=['../img/animaisbanner.jpg','../img/animaisbanner2.jpg'];
//POSIÇÃO QUE VAI INICIAR 
let index =0;
//TEMPO DAS IMAGENS TROCAR
let time=3000;


//FUNÇÃO SLIDWSHOW
function slideShow(){
    //DOM - PEGANDO O ID E PASSSANDO CAMINHO DAS IMAGENS
    document.getElementById('img-banner').src=imagens[index];
    //INCREMENTANDO
    index++;
//CONDICONAL if
    if(index == imagens.length){
        index=0;
    }
    //metodo setTimout para executar a função e chamar o tempo
      setTimeout('slideShow()',time);
    
}

//executando a função
slideShow();

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});
