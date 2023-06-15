//Selecciona el elemento HTML con la clase pantalla y lo asigna en la variable "pantalla"
const pantalla = document.querySelector(".pantalla");
//Selecciona el elemento HTML con la clase btn y lo asigna en la variable "botones"
const botones = document.querySelectorAll(".btn");

//.forEach() se utiliza para ejecutar una función proporcionada una vez por cada elemento en un arreglo. Proporciona una forma sencilla de recorrer los elementos de un arreglo y realizar una acción en cada uno de ellos.
botones.forEach(boton => {  
    boton.addEventListener("click", () => { 
       // console.log(btn.textContent) para comprobar que funciona el "click"
        //Obtener el texto y guardarlo en una variable
        const botonApretado = boton.textContent;

        if(boton.id === "C"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "error"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return
        }
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
                return
            }catch{
                pantalla.textContent = "error"
            }
            return
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "error"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
    
})