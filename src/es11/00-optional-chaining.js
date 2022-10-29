const users = {
    gndx : {
        country : 'MX'
    },
    ana : {
        country:'CO'
    }
}

//se colocan los signos de pregunta para saber si existe en caso de no existir
//el objeto nos marca como undefined
console.log(users?.bebeloper?.country);