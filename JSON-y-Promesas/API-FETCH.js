/*
El API FETCH nos sirve par aobtener un recurso externo
que esta en algun servicio, endpoint, servicio en el backend
*/

//API FETCH
//esta api es una promesa ya hecha
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json => console.log(json));