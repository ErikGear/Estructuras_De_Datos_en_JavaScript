///setTimeout(()=> console.log("hola un segundo despues"), 1000);

const miPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("se ejecuta la promesa");
        reject("algo paso, error");
        resolve("pato");
    }, 1000);
});


miPromise.then(data => console.log(data))
.catch(error => console.log(error));
