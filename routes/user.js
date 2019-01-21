const express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Todo = require('../model/Todo')
const router = express.Router();


router.get('/getAll', (req, res) => {
    Todo.find({})
        .then((response) => {
            return res.send(response)
        })
        .catch(e => console.log(e))
})

router.delete('/del', (req, res) => {
    const { body } = req;
    console.log(body)

    Todo.deleteOne({ name: body.name })
        .then((response) => {
            console.log('im running')
            res.send({ message: 'User deleted', response })
        })
        .catch(e => res.send({ message: e.message }))
})

router.put('/put', (req, res) => {
    const { body } = req;
    console.log(body)

    Todo.updateOne({ name: "Hussain" }, { name: body.name })
        .then((response) => {
            console.log('im running')
            res.send({ message: 'User Update Successfully', response })
        })
        .catch(e => res.send({ message: e.message }))
})


router.get('/find/:id', (req, res) => {
    Todo.findById(req.param.id)
    .then((response) => {
        return res.send(response)
    })
})

router.post('/post', (request, response) => {
    const user = new Todo(request.body);
    user.save()
    .then((res) => response.send({ message: 'User successfully Add' }))
    .catch(e => response.send(500, { message: e.message }))
})



module.exports = router