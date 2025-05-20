const student = require("../models/student.model");
const router = require("express").Router();

router.get('/', async function(req,res) {
    try {
        const students = await student.find();
        console.log("hello");
        return res.json(students);
    }
    catch (ex) {
        return res.send(ex.message);
    }   
});

module.exports = router;