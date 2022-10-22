const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whoooooooops!')
        }
    });
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err));