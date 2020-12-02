
const { response } = require("express");
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
  //Actividades mostradas por materia y alumno 5
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
  //Actividades por materia 7
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
  //info de Actividad 9
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
  //Realizar entrega 20
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

  //Obtener libros de las materias del alumno (4 Tablas)
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

  router.get('/LibrosProfesor/:id', function(req, res){
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

  //Obtener archivos de la actividad.
  router.get('/obtener/:idAlumno/:idActividad', function (req, res) {
    const alumno = req.params.idAlumno;
    const actividad = req.params.idActividad;
    console.log(moment().format('YYYY-MM-DD'));
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

  return router;
}

module.exports = createRouter;





