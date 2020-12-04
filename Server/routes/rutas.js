
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
  //curso por ALUMNO 4 (3 tablas) en uso
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
  //Actividades entregadas por materia y alumno 6 cambiar
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
  //Actividades por materia 7 checar
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
  //Actividades por grupo y materia 8 (3 tablas) en uso
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
  //info de Actividad 9 checar
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
  //Materias que el profesor imparte 12 (3 Tablas) en uso
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
  //Obtener el profesor y grupo del alumno 13 (3 Tablas) en uso
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
  //Actividades dadas por el profesor aun abiertas 19(3 tablas) en uso
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

  //Obtener libros de las materias del alumno (4 Tablas) 21 en uso
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
 //Obtener libros del profesor 22 en uso
  router.get('/LibrosProfesor/:id', function (req, res) {
    const profesor = req.params.id;
    db.query(
      'select * from libro where id_materia in (select id_materia from grupoMat where id_profesor = ?);',
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





