
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
  //curso por ALUMNO 3 (3 tablas)
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
  //Actividades mostradas por materia y alumno 4 pendiente
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
    'select * from actividad Act left join realiza Rea on Act.id=Rea.id_actividad where id_alumno = ? and Act.id_materia =? and Act.estado ="1"',
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
  //Actividades por grupo y materia 7 (3 tablas)
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
    const idprof =req.params.idprof
    const idgrup =req.params.idgrup
    db.query(
    'select * from ListaAlumnos where id_profesor= ? and id_grupo=?',
      [idprof,idgrup],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Materias que el profesor imparte 11 (3 Tablas)
  router.get('/MateriasProfesor/:idprof', function (req, res) {
    const idprof =req.params.idprof
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
  //Obtener el profesor y grupo del alumno 12 (3 Tablas)
  router.get('/AlumnoProfesor/:idalumno', function (req, res) {
    const idalumno =req.params.idalumno
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
  //Login Vista Alumno 13
  router.get('/LoginA/:idalumno/:contrasena', function (req, res) {
    const idalumno =req.params.idalumno
    const cont=req.params.contrasena
    db.query(
    'call login_alumno(?, ?)',
      [idalumno,cont],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Login Vista profesor 14
  router.get('/LoginP/:idprof/:contrasena', function (req, res) {
    const idprof =req.params.idprof
    const cont=req.params.contrasena
    db.query(
    'call login_profesor(?, ?);',
      [idprof,cont],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Avances 15
  router.get('/Avances/:idalum', function (req, res) {
    const idalum =req.params.idalum
    db.query(
    'call avances(?, @out); select @out;',
      [idalum],
      (error, results) => {
        if (error) throw error;
        res.send(results);

        console.log(results);       
      }
    );
  });
  //Actividades pendientes por alumno 16
  router.get('/AlumnoActividadesPendientes/:idalum', function (req, res) {
    const idalum =req.params.idalum 
    db.query(
    'select * from actividad Act left join realiza Rea on Act.id=Rea.id_actividad where Rea.id_alumno = ? and Act.estado=0 and Rea.estado_entrega =0',
      [idalum],
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





