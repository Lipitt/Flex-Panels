const panels = document.querySelectorAll('.panel');
        
        // esta funcion hace un toggle de la clase open sobre el panel que haya sido clickeado. 
        // esta funcion es llamada mediante el event listener cuando se hace click en un panel. 
        function toggleOpen(){
            this.classList.toggle('open');
        }

        // esta funcion hace un toggle de la clase open-active cuando termina el evento "transitionend" en el panel correspondiente
        // al pasarle el evento por parametro y preguntarle si tiene una propiedad con nombre "flex", aseguramos
        // que el toggle se haga cuando termina la transicion del flexbox y no cual quier otra transicion que termine. 
         function toggleActive(e){
                if(e.propertyName.includes('flex')){
                this.classList.toggle('open-active');
              }
        }

        //Esta funcion agrega un event listener (click) a cada elemento que tenga la clase ".panel"
        //cuando se dispare el evento click, llamara a la funcion toggleOpen
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));

        //Esta funcion agrega un event listener de final de transicion a cada elemento que tenga la clase ".panel"
        //Cuando la transicion termine, el evento se disparara y llama a la funcion toggleActive
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));