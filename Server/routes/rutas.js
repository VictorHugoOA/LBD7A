
const { response, Router } = require("express");
const express = require("express");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment');


const store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname);
  }
})

const upload = multer({ storage: store }).single('file');

function createRouter(db) {
  const router = express.Router();

  //info prof 1 en uso
  router.get('/Profesor/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'Select * from profesor where id = ?',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //info de materia 2 en uso
  router.get('/Materia/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'Select * from Materia where id = ?',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //info del alumno 3 en uso
  router.get('/Alumno/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'select * from grupoal where id=? ',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //curso por ALUMNO 4 (3 tablas) en uso 1
  router.get('/cursosAlumno/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'select * from Materia Mat left join clases_de Clas on Mat.id = Clas.id_materia where id_grupo =(select id_grupo from Alumno where id=?);',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Actividades mostradas por materia y alumno 5 en uso 
  router.get('/AlumnoActividades/:idalum/:idmat', function (req, res) {
    const idalum = req.params.idalum
    const idmat = req.params.idmat
    db.query(
      'select * from alumnosact where id_alumno = ? and id_materia =?',
      [idalum, idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Actividades entregadas por materia y alumno 6 en uso
  router.get('/AlumnoActividadesEntregadas/:idalum/:idmat', function (req, res) {
    const idalum = req.params.idalum
    const idmat = req.params.idmat
    db.query(
      'select * from actividad Act left join realiza Rea on Act.id=Rea.id_actividad where id_alumno = ? and Act.id_materia =? and Act.estado ="1"',
      [idalum, idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Actividades por materia 7 en uso
  router.get('/ActividadesMateria/:idmat', function (req, res) {
    const idmat = req.params.idmat
    db.query(
      'select * from actividad Act where id_materia = ?',
      [idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Actividades por grupo y materia 8 (3 tablas) en uso 2
  router.get('/ActividadesMateriaGrupo/:idgrup/:idmat', function (req, res) {
    const idgrup = req.params.idgrup
    const idmat = req.params.idmat
    db.query(
      'select * from actividad where id in(select id_actividad from AlumnosAct AA left join Alumno A on AA.id_alumno= A.id where A.id_grupo = ? and AA.id_materia=?)',
      [idgrup, idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //info de Actividad 9 en uso
  router.get('/Actividad/:idact', function (req, res) {
    const idact = req.params.idact
    db.query(
      'select * from actividad where id= ?',
      [idact],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Grupos por profesor 10 en uso
  router.get('/GrupoProfesor/:idprof', function (req, res) {
    const idprof = req.params.idprof
    db.query(
      'select id,grado,clase from grupo where id_profesor= ?',
      [idprof],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Lista de alumnos por profesor 11 en uso
  router.get('/GrupoAlumProfesor/:idprof', function (req, res) {
    const idprof = req.params.idprof
    const idgrup = req.params.idgrup
    db.query(
      'select * from ListaAlumnos where id_profesor= ? ',
      [idprof, idgrup],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Materias que el profesor imparte 12 (3 Tablas) en uso 3
  router.get('/MateriasProfesor/:idprof', function (req, res) {
    const idprof = req.params.idprof
    db.query(
      'select * from materia where id in (select id_materia from clases_de C left join grupo G on C.id_grupo= G.id where G.id_profesor=?)',
      [idprof],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Obtener el profesor y grupo del alumno 13 (3 Tablas) en uso 4
  router.get('/AlumnoProfesor/:idalumno', function (req, res) {
    const idalumno = req.params.idalumno
    db.query(
      'select profesor.*, grupo.* from alumno, grupo, profesor where alumno.id = ? and alumno.id_grupo = grupo.id and grupo.id_profesor = profesor.id',
      [idalumno],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Login Vista Alumno 14 en uso
  router.get('/LoginA/:idalumno/:contrasena', function (req, res) {
    const idalumno = req.params.idalumno
    const cont = req.params.contrasena
    db.query(
      'call login_alumno(?, ?);',
      [idalumno, cont],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Login Vista profesor 15 en uso
  router.get('/LoginP/:idprof/:contrasena', function (req, res) {
    const idprof = req.params.idprof
    const cont = req.params.contrasena
    db.query(
      'call login_profesor(?, ?);',
      [idprof, cont],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Avances 16 en uso
  router.get('/Avances/:idalum', function (req, res) {
    const idalum = req.params.idalum
    db.query(
      'call avances(?);',
      [idalum],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
      }
    );
  });
  //Actividades pendientes por alumno 17 en uso
  router.get('/AlumnoActividadesPendientes/:idalum', function (req, res) {
    const idalum = req.params.idalum
    db.query(
      'select * from alumnosact where id_alumno = ? and estado=0 and estado_entrega=0',
      [idalum],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //actividad alumno 18 en uso
  router.get('/AlumnoActividad/:idalum/:idact', function (req, res) {
    const idalum = req.params.idalum
    const idact = req.params.idact
    db.query(
      'select * from alumnosact where id_alumno = ? and id_actividad =?',
      [idalum, idact],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Actividades dadas por el profesor aun abiertas 19(3 tablas) en uso 5
  router.get('/ProfesorActividadesAbiertas/:idprof', function (req, res) {
    const idprof = req.params.idprof
    db.query(
      'select distinct titulo,id_actividad,fecha_limite from alumnosact where id_alumno in(select id from alumno where id_grupo =(select id from grupo where id_profesor=?)) and estado=0;',
      [idprof],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Realizar entrega 20 en uso
  router.get('/entregar/:idAlumno/:idactividad', function (req, res) {
    const alumno = req.params.idAlumno;
    const actividad = req.params.idactividad;
    db.query(
      'update realiza set fecha_entrega = ?, hora_entrega = ?, estado_entrega = 1 where id_alumno = ? and id_actividad = ?',
      [moment().format('YYYY-MM-DD'), moment().format('HH:mm:ss'), alumno, actividad],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  })
  //Obtener libros de las materias del alumno (4 Tablas) 21 en uso 6
  router.get('/LibrosAlumno/:id', function (req, res) {
    const alumno = req.params.id;
    db.query(
      'select * from materia inner join libro on materia.id = libro.id_materia where materia.id in (select id_materia from clases_de inner join grupo on clases_de.id_grupo = grupo.id where grupo.id = (select id_grupo from alumno where id = ?));',
      [alumno],
      (error, results) => {
        if (error) throw error;
        res.send(results);
        console.log(results);
      });

  })
 //Obtener libros del profesor 22 en uso (3 Tablas) 7
  router.get('/LibrosProfesor/:id', function (req, res) {
    const profesor = req.params.id;
    db.query(
      'select * from libro where id_materia in (select clases_de.id_materia from grupo left join clases_de on grupo.id = clases_de.id_grupo where id_profesor = ?);',
      [profesor],
      (error, results) => {
        if (error) throw error;
        res.send(results);
        console.log(results);
      });
  })
  //Obtener archivos de la actividad. 23 en uso
  router.get('/obtener/:idAlumno/:idActividad', function (req, res) {
    const alumno = req.params.idAlumno;
    const actividad = req.params.idActividad;
    db.query(
      'select * from tarea where id_alumno = ? and id_actividad = ?',
      [alumno, actividad],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  })
  //Crea una plantilla para las actividades 24 en uso
  router.get('/crearactividad/:mat', function (req, res) {

    const mat = req.params.mat;

    db.query(
      'call actividad_template(?)',
      [mat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );

  })
  //Actualizar datos actividad 25 en uso
  router.post('/ActualizarActividad', function(req, res){
    const id = req.body.id;
    const titulo = req.body.titulo;
    const fecha = req.body.fecha;
    const desc = req.body.desc;
    const hora = req.body.hora;
    const retraso = req.body.retraso;
    const profesor = req.body.idprof
    db.query(
      'call actividad_alumnos(?,?,?,?,?,?,?)',
      [id, titulo, fecha, desc, hora, retraso, profesor],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Actualizar datos actividad 26 en uso
  router.post('/EditarActividad', function(req, res){
      const id = req.body.id;
      const titulo = req.body.titulo;
      const fecha = req.body.fecha;
      const desc = req.body.desc;
      const hora = req.body.hora;


      const retraso = req.body.retraso;
      const estado = req.body.estado;
      db.query(
        'update actividad set titulo = ?, fecha_limite = ?, descripción = ?, hora_limite = ?, retraso = ?, estado = ? where id = ?',
        [titulo, fecha, desc, hora, retraso, estado, id],
        (error, results) => {
          if (error) throw error;
          res.send(results);
  
          console.log(results);
  
        }
      );
    });
  //Borrar actividad 27 en uso
  router.get('/BorrarActividad/:id', function(req, res){
    const id = req.params.id;
    db.query('delete from actividad where id = ?',
     [id],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Guarda en los materiales en la actividad 28 en uso
  router.get('/guardarmaterial/:id/:ar', function (req, res) {
    const act = req.params.id;
    const archivo = req.params.ar;
    db.query(
      'insert into Material(id_actividad, archivo) values(?, ?);',
      [act, archivo],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );

  });
  //Obtener el numero de entregas para una activida 29
  router.get('/ObtenerNumEntregas/:id', function(req, res){
    const id = req.params.id;
    db.query('select count(*) from realiza where id_actividad = 1 and estado_entrega != 0;',
    [id],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Obtener material por actividad 30 en uso
  router.get('/obtenerMateriales/:id', function(req, res){
    const id = req.params.id;
    db.query('select * from Material where id_actividad = ?',
    [id],
    (error, results) => {
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Profesor por grupo 31 en uso
  router.get('/ProfesorGrupo/:idgrup', function (req, res) {
    const idgrup = req.params.idgrup
    db.query(
      'select * from profesor where id in(select id_profesor from grupomat where id=?)',
      [idgrup],
      (error, results) => {
        if (error) throw error;
        res.send(results);


        console.log(results);
      }
    );
  });
  //Mostrar los recursos de una materia 31 en uso
  router.get('/obtenerRecursos/:idmat/:prof', function(req, res){
    const idmat = req.params.idmat;
    const idprof = req.params.prof;
    db.query('select * from recurso where id_materia = ? and id_profesor= ?',
    [idmat,idprof],
    (error, results) => {
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Borrar archivo 32 en uso
  router.get('/borrarRecursos/:id', function(req, res){
    const id = req.params.id;
    db.query('delete from recurso where id= ?',
    [id],
    (error, results) => {
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Guardar recurso 33
  router.post('/almacenarRecurso', function(req, res){
    const idProf = req.body.idProf;
    const idMat = req.body.idMat;
    const archivo = req.body.archivo;
    const titulo = req.body.titulo;
    db.query('insert into Recurso (titulo, id_materia, id_profesor, archivo) values(?, ?, ?, ?);',
    [titulo, idMat, idProf, archivo],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  });
 //calificar en uso 34
  router.post('/calificar', function(req, res){
    const idAl = req.body.idAl;
    const idAct = req.body.idAct;
    const cal = req.body.calificacion;
    const comentario = req.body.comentario;
    db.query('update realiza set calificacion = ?, comentario = ? where id_alumno = ? and id_actividad = ?',
    [cal, comentario, idAl, idAct],
    (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Tutorias de los profes 35 (3 Tablas) 8
  router.get('/tutoriaProfe/:idProf', function(req, res){
    const idProf = req.params.idProf;
    db.query('select * from tutoría where id_alumno in (select alumno.id from alumno inner join grupo on alumno.id_grupo = grupo.id where grupo.id_profesor = ?) and tutoría.id_profesor is null;', 
    [idProf],
    (error, results) =>{
      if(error) throw error;

      res.send(results);
      console.log(results);
    })
  })

  router.post('/crearTutoria', function(req, res){
    const idAl = req.body.idAl;
    const pregunta = req.body.pregunta;
    db.query('insert into tutoría(pregunta, id_alumno, fecha) values(?, ?, ?);',
    [pregunta, idAl, moment().format("YYYY-MM-DD")],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  });

  router.get('/tutoriasAlumno/:id', function(req, res){
    const idAl = req.params.id;
    db.query('select tutoría.*, alumno.nombre, alumno.apellido_pat, alumno.apellido_mat from tutoría left join alumno on tutoría.id_alumno = alumno.id where tutoría.id_alumno = ? and tutoría.id_profesor is null',
    [idAl],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Tutorias respondiadas del alumno (3 tablas) 9
  router.get('/tutoriasRespondidas/:id', function(req, res){
    const idAl = req.params.id;
    db.query('select A.apellido_pat, A.nombre, A.apellido_mat, T.*, P.nombre as nomProf, P.apellido_pat as patProf, P.apellido_mat as matProf from tutoría T, profesor P, Alumno A where T.id_alumno = ? and T.id_alumno = A.id and P.id = T.id_profesor;',
    [idAl],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  });
  //Tutorias respondidas del prof (3 tablas) 10
  router.get('/tutoriasRespondidasProf/:id', function(req, res){
    const idAl = req.params.id;
    db.query('select A.apellido_pat, A.nombre, A.apellido_mat, T.*, P.nombre as nomProf, P.apellido_pat as patProf, P.apellido_mat as matProf from tutoría T, profesor P, Alumno A where T.id_profesor = ? and T.id_alumno = A.id and P.id = T.id_profesor;',
    [idAl],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  });

  router.get('/tutoria/:id', function(req, res){
    const id = req.params.id;
    db.query('select tutoría.*, alumno.nombre, alumno.apellido_pat, alumno.apellido_mat from tutoría left join alumno on tutoría.id_alumno = alumno.id where tutoría.id = ?',
    [id],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    });
  })

  router.post('/actualizarTutoria', function(req, res){
    const id = req.body.id;
    const respuesta = req.body.respuesta;
    const idProf = req.body.idProf;
    db.query('update tutoría set id_profesor = ?, respuesta = ? where id= ?',
    [idProf, respuesta, id], (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);

    });
  })

  router.post('/guardarArchivoTutoria', function(req, res){
    const idTuto = req.body.id;
    const archivo = req.body.archivo;
    db.query('insert into MaterialTutoria (id_tutoria, archivo) values(?,?);',
    [idTuto, archivo],
    (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  router.post('/borrarArchivoTutoria', function(req, res){
    const archivo = req.body.archivo;
    db.query('delete from MaterialTutoria where archivo = ?',
    [archivo],
    (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  router.get('/archivosTutoria/:id', function(req, res){
    const id = req.params.id;
    db.query('select * from MaterialTutoria where id_tutoria = ?;',
    [id],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  router.get('/grupos', function(req, res){
    db.query('select * from grupo', [], 
    (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  //Consultas para el CRUD
  //Altas
  //Alta grupo
  router.post('/insertarGrupo', function(req, res){
    const id = req.body.id;
    const grado = req.body.grado;
    const clase = req.body.clase;
    const profesor = req.body.profesor;
    db.query('insert into grupo (id, grado, clase, id_profesor, ciclo_inicio, ciclo_final) values(?,?,?,?, ?, ?);',
    [id, grado, clase, profesor], (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  });
  //Alta profesor
  router.post('/insertarProfe', function(req, res)
  {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const telefono = req.body.telefono;
    const correo = req.body.correo; 
    const sexo = req.body.sexo;
    const password = req.body.password;

    db.query('insert into profesor (id, nombre, apellido_pat, apellido_mat, correo, telefono, sexo, contrasena) values(?, ?, ?, ?, ?, ?, ?, ?);',
    [id, nombre, paterno, materno, correo, telefono, sexo, password],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })

  })
  //Alta Alumno
  router.post('/insertarAlumno', function(req, res){
    const id = req.body.id;
    const nombre = req.body.nombre;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const sexo = req.body.sexo;
    const password = req.body.password;
    const grupo = req.body.grupo;
    db.query('insert into alumno (id, nombre, apellido_pat, apellido_mat, id_grupo, sexo, contrasena) values(?, ?, ?, ?, ?, ?, ?)',
    [id, nombre, paterno, materno, grupo, sexo, password], (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  //Alta Materia
  router.post('/insertarMateria', function(req, res)
  {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const campo = req.body.campo;
    const nivel = req.body.nivel;
    db.query('insert into materia (id, nombre, campo, nivel) values(?, ?, ?, ?)',
    [id, nombre, campo, nivel],
    (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })

  //Alta libro
  router.post('/insertarLibro', function(req, res)
  {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const year = req.body.year;
    const editorial = req.body.editorial;
    const materia = req.body.materia;
    const archivo = req.body.archivo;

    db.query('insert into libro (id, año, archivo, editorial, título, id_materia) values(?,?,?,?,?,?)',
    [id, year, archivo, editorial, titulo, materia], (error, results)=>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })

  })

  // Mostrar Profesores
  router.get('/Profesores', function (req, res) {
    db.query(
      'Select * from profesores',
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Mostrar Alumnos
  router.get('/Alumnos', function (req, res) {
    db.query(
      'Select * from alumnos',
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Mostrar Materias
  router.get('/Materias', function (req, res) {
    db.query(
      'Select * from materia',
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Mostrar Grupos
  router.get('/Grupos', function (req, res) {
  db.query(
    'Select * from grupos',
    (error, results) => {
      if (error) throw error;
      res.send(results);

      console.log(results);

    }
  );
});
  //Mostrar Libros
  router.get('/Libros', function (req, res) {
    db.query(
      'Select * from libro',
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Obtener libro
  router.get('/Libro/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'Select * from libro where id = ?',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Obtener grupo
  router.get('/Grupo/:id', function (req, res) {
    const id = req.params.id
    db.query(
      'Select * from grupo where id = ?',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  });
  //Obtener Alumno
  router.get('/Alumno2/:id', function (req, res) {
  const id = req.params.id
  db.query(
    'Select * from alumno where id = ?',
    id,
    (error, results) => {
      if (error) throw error;
      res.send(results);

      console.log(results);

    }
  );
});

  //Mostrar la lista de los alumnos que hacen uan actividad.
  router.get('/ListaAlumnosActividad/:id', function(req, res){
    const id = req.params.id;
    db.query('select * from alumnosact left join alumno on alumnosact.id_alumno = alumno.id where id_actividad = ?;',
    [id],
    (error, results) =>{
      if(error) throw error;
      res.send(results);
      console.log(results);
    })
  })
  //Las fuciones para guardar archivos y obtener archivos
  //Guardar archivos 
  router.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
      if (err) {
        return res.status(501).json({ error: err });
      }
      //Aquí ira todo para guardar en la bd

      return res.json({ originalname: req.file.originalname, uploadname: req.file.filename });
    });
  });

  router.get('/guardartarea/:idalumno/:idactividad/:ar', function (req, res, next) {
    const actividad = req.params.idactividad
    const alumno = req.params.idalumno
    const ar = req.params.ar;
    db.query(
      'insert into tarea (id_alumno, id_actividad, archivo) values (?, ?, ?);',
      [alumno, actividad, ar],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);

      }
    );
  })
  //Obtener archivos
  router.get('/getfile/:file', function (req, res, next) {
    let fil = ""
    fil = path.join(__dirname, '../uploads') + '/' + req.params.file;
    res.sendFile(fil);
  });
  //Borrar tarea.
  router.get('/delete/:file', function (req, res, next) {
    let fil = "";
    fil = path.join(__dirname, '../uploads') + '/' + req.params.file;
    try {
      fs.unlinkSync(fil);

      db.query(
        'delete from tarea where archivo = ?',
        [req.params.file],
        (error, results) => {
          if (error) throw error;
          res.send(results);

          console.log(results);

        }
      );


      return res.status(200);
    } catch (err) {
      console.error(err);
      return res.status(200).json({ error: "El archivo no existe" });
    }
  });
  //Borrar material.
  router.get('/borrarMaterial/:file', function (req, res, next) {
    let fil = "";
    fil = path.join(__dirname, '../uploads') + '/' + req.params.file;
    try {
      fs.unlinkSync(fil);

      db.query(
        'delete from Material where archivo = ?',
        [req.params.file],
        (error, results) => {
          if (error) throw error;
          res.send(results);

          console.log(results);

        }
      );
      return res.status(200);
    } catch (err) {
      console.error(err);
      return res.status(200).json({ error: "El archivo no existe" });
    }
  });

  return router;
}

module.exports = createRouter;





