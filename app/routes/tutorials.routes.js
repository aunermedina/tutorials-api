module.exports = app => {
  const { authJwt } = require("../middleware");
  const tutorials = require("../controllers/tutorial.controller.js");

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", [authJwt.verifyToken], tutorials.create);

  // Retrieve all Tutorials
  router.get("/", [authJwt.verifyToken], tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", [authJwt.verifyToken], tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", [authJwt.verifyToken], tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", [authJwt.verifyToken], tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", [authJwt.verifyToken], tutorials.delete);

  // Create a new Tutorial
  router.delete("/", [authJwt.verifyToken], tutorials.deleteAll);

  app.use('/api/tutorials', router);
};