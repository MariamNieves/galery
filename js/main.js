
let imagenes = [
    "img/prim.jpg",
    "img/seg.jpg",
    "img/ter.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg"
];

let cantidad = imagenes.length;
let i = 0;
let imagen = document.getElementById('imagen');

function presentarImagenes() {
    let intervalo = setInterval(function(){
        if (i < cantidad){
            console.log(i);
            let imagen = document.getElementById('imagen');
            imagen.src = imagenes[i];
            i++;
        }
        
    },500); 
};


presentarImagenes()



/*

*/