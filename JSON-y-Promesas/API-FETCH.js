/*
El API FETCH nos sirve para obtener un recurso externo
que esta en algun servicio, endpoint, servicio en el backend
*/

//API FETCH
//esta api es una promesa ya hecha
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((json) => console.log(json));

//async y await
(function () {
  console.log("Souy una funcion de expresion ejecutada inmediatamente");
});

(async function () {
  //await solo puede ser empleada en una funcion con Async
  //await, se esperara hasta que el proceso termine
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonResult = await data.json();
  console.log(jsonResult);
});

//leyendo nuestro archivo JSON con el API fetch
fetch("people.json")
  .then((data) => data.json())
  .then((json) => {
    const people = json;

    console.log(people.name);

    for (const skill of people) {
      console.log(`Habilidad: ${skill}`);
    }
  });
