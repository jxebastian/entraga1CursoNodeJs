const opciones = {
    id_curso: {
        demand: true,
        alias: 'i'
    },
    nombre_interesado: {
        demand: true,
        alias: 'n'
    },
    cedula_interesado: {
        demand: true,
        alias: 'c'
    }
}
const express = require('express')
const app = express()
 
const {cursos, listaCursos} = require('./cursos');
const argv = require('yargs')
                .command('inscribir', 'Inscribir a curso', opciones)
                .argv;
const fs = require('fs');

let inscribirInteresado = (datos) => {
    let curso = cursos.find( curso => curso.id == datos.id_curso);
    if (curso == undefined) {
        console.log('El curso con el id que ingresaste no existe');
    }else{
        let texto = 'El estudiante '
                    + datos.nombre_interesado + '\n'
                    + 'con cedula ' + datos.cedula_interesado + '\n'
                    + 'se ha matriculado en el curso llamado\n'
                    + curso.nombre + ' con duracion de ' + curso.duracion;
        app.get('/', function (req, res) {
	  res.send(texto)
	});
	app.listen(3000);
    }
}

if (argv._[0] == undefined){
    listaCursos();
}else {
    inscribirInteresado(argv);
}

