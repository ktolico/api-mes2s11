console.log("Entro index.js");

fetch('https://dev4humans.com.mx/api/clases/productos', {method: "GET"})
    .then(response => response.json())
    .then(data => {
        console.log("La promesa se resolvio");
        const rawData = data;
        console.log(rawData);
        console.log(rawData.data.products);
    }).catch(error => console.log(error));