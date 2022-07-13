(function(){
    const titlePreguntas =[...document.querySelectorAll('.preguntas__title')];
    titlePreguntas.forEach(pregunta =>{
        pregunta.addEventListener('click', ()=>{
            let height = 0;
            let answer = pregunta.nextElementSibling;
            let addpadding = pregunta.parentElement.parentElement;

            addpadding.classList.toggle('preguntas__padding--add')
            pregunta.children[0].classList.toggle('preguntas__arrow--rotate')

            if(answer.clientHeight === 0 ){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
    });

    }); 
})();