//Anterior a la actualización
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 24;
    var country = country || "MX";
    console.log(name, age, country);
}

newUser();
newUser('david',15,'CO');

//la forma de hacer con la actualizacion
function newAdmin(name = 'oscar', age = 24, country  = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('mike', 12, 'AR');