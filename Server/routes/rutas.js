
const { response } = require("express");
const express = require("express");


function createRouter(db) {
  const router = express.Router();

  router.get('/cursos/:id', function (req, res) {
    const id =req.params.id
    db.query(
    'Select * from Materia where id_mat in(select id_mat from cursa where id_alum= ?)',
      id,
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





