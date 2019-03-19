let cursos = [
    {
        id: 1,
        nombre: 'Nodejs',
        duracion: '36 horas',
        precio: 0
    },
    {
        id: 2,
        nombre: 'Ingles',
        duracion: '48 horas',
        precio: 2000
    },
    {
        id: 3,
        nombre: 'Movil',
        duracion: '10 horas',
        precio: 3000
    }
];

let listaCursos = () => {
    let t = 1;
    cursos.forEach(curso => {
        setTimeout(function(){
            let texto = 'El curso ' + curso.nombre + ' tiene como id = ' + curso.id
            + ' tiene una duración de ' + curso.duracion + ' y un precio de ' + curso.precio;
            console.log(texto);
        }, 2000*t);
        t++;
    });
}

module.exports = {
    cursos,
    listaCursos
}