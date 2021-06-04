const express = require('express');
const projetsExample = require("./dev/projectsExamples.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(projetsExample);
});

router.get("/:id", (req, res) => {
    const projectID = +req.params.id;
   
    const result = projetsExample.find((project) => project.id === projectID)
  
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(404).json({message: "project not found"})
    }
 })

 router.post("/", (req, res) => {
     const init = projetsExample;
     const newProjects = {
         id: [...init].pop().id +1,
         ...req.body,
     }
     init.push(newProjects);
     res.status(201).json(init[init.length - 1]);

 })

 router.put("/:id", (req, res) => {
     const id = +req.params.id;
     const index  = projetsExample.indexOf(
         projetsExample.find((projet) => projet.id === id)
     );
     
     if(index >= 0) {
        let newProject = projetsExample.find((project) => project.id === id)
        newProject = {
            id,
            ...req.body,
        };
         projetsExample.splice(index, 1, newProject)
         res.status(200).json(newProject)
     } else {
         res.status(404).json({message: "not found"})
     }
 })

 router.delete("/:id", (req, res) => {
     const id = +req.params.id;
     const index = projetsExample.indexOf(projetsExample.find((projet) => projet.id === id ))
    

     if (res) {
         projetsExample.splice(index, 1);
         res.status(204).json({message: "Projets deleted"})
     } else {
        res.status(404).json({message: "not found"}) 
     };
 })

module.exports = router;


