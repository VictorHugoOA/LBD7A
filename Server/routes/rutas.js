
const { response } = require("express");
const express = require("express");


function createRouter(db) {
  const router = express.Router();
//info de materia 1
  router.get('/Materia/:id', function (req, res) {
    const id =req.params.id
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
  //info del alumno 2
  router.get('/Alumno/:id', function (req, res) {
    const id =req.params.id
    db.query(
    'select * from Alumno where id=?',
      id,
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
        
      }
    );
  });
  //curso por ALUMNO 3 3 tablas
  router.get('/cursosAlumno/:id', function (req, res) {
    const id =req.params.id
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
  //Actividades mostradas por materia y alumno 4
  router.get('/AlumnoActividades/:idalum/:idmat', function (req, res) {
    const idalum =req.params.idalum
    const idmat =req.params.idmat
    db.query(
    'select * from actividad Act left join realiza Rea on Act.id=Rea.id_actividad where id_alumno = ? and Act.id_materia =?',
      [idalum,idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
        
      }
    );
  });
  //Actividades entregadas por materia y alumno 5
  router.get('/AlumnoActividadesEntregadas/:idalum/:idmat', function (req, res) {
    const idalum =req.params.idalum
    const idmat =req.params.idmat
    db.query(
    'select * from actividad Act left join realiza Rea on Act.id=Rea.id_actividad where id_alumno = ? and Act.id_materia =? and Act.estado ="Entregada"',
      [idalum,idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);
        
      }
    );
  });
  //Actividades por materia 6
  router.get('/ActividadesMateria/:idmat', function (req, res) {
    const idmat =req.params.idmat
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
  //Actividades por grupo y materia pendiente 7
  router.get('/ActividadesMateriaGrupo/:idgrup/:idmat', function (req, res) {
    const idgrup =req.params.idgrup
    const idmat =req.params.idmat
    db.query(
    'select * from actividad where id in(select id_actividad from AlumnosAct AA left join Alumno A on AA.id_alumno= A.id where A.id_grupo = ? and AA.id_materia=?)',
      [idgrup,idmat],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //info de Actividad 8
  router.get('/Actividad/:idact', function (req, res) {
    const idact =req.params.idact
    db.query(
    'select * from actividad Act where id= ?',
      [idact],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Grupos por profesor 9
  router.get('/GrupoProfesor/:idprof', function (req, res) {
    const idprof =req.params.idprof
    db.query(
    'select * from grupo where id_profesor= ?',
      [idprof],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Lista de alumnos por grupo y profesor 10
  router.get('/GrupoAlumProfesor/:idprof/:idgrup', function (req, res) {
    const idprof =req.params.prof
    const idgrup =req.params.idgrup
    db.query(
    'select * from alumno A left join grupo G on A.id_grupo=G.id where G.id_profesor= ? and G.id=?',
      [idprof,idgrup],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Materias que el profesor imparte 11 3 Tablas
  router.get('/MateriasProfesor/:idprof', function (req, res) {
    const idprof =req.params.idprof
    db.query(
    'select * from materia  where id in (select id_materia from clases_de C left join grupo G on C.id_grupo= G.id where G.id_profesor=?)',
      [idprof],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });

  return router;
}

module.exports = createRouter;





