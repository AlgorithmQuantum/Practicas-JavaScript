let nota = 50 //puedes poner la nota que necesite debe ser un valor entre 0 y 100

function aprovado(nota){
    if(nota >= 90){
        console.log("Excelente")
    }else if (nota >= 75){
        console.log("Bien")
    }else if (nota >= 60){
        console.log("Suficiente")
    }else{
        console.log("No aprovado")
    }
}

aprovado(nota=45) //No aprovado
aprovado(nota=60) //Suficiente
aprovado(nota=70) //Suficiente
aprovado(nota=0) //No aprovado
aprovado(nota=95) //Excelente