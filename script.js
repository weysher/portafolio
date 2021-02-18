// Web hecha con AlexCG Design, si te sirvió la plantilla por favor entra a AlexCG Design
// esta plantilla es libre para usar, así como otras plantillas más que tenemos en el canal...
// ->>>> https://www.youtube.com/alexcgdesign <<<<-
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let portfolio = document.getElementById("portfolio");
let skill = document.getElementById("skill");
let certific = document.getElementById("certific");
let proyect = document.getElementById("proyect");

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');        
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

portfolio.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})
skill.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})
certific.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})
contact.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})



window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
    }
})
puntero.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})
contact.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})
punte.addEventListener("click",function(){
    if(contador == 1){
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});