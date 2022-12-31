import express from "express";
import { userModel } from "../models/userModel.js";
import { addUserValid, updateUserValid } from "../validations/userValid.js";
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const user = await userModel.find({})
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg_err: err })
    }
  })
  router.delete('/byName/:name', async(req, res) => {
    try {
        const name = req.params.name
  
        const user = await userModel.findOne({ name: name })
        console.log(user)
        if (!user) {
            return res.status(401).json({ msg_err: "user not exist!" })
        }
  
        const data = await userModel.deleteOne({ name: name })
        if (data.deletedCount != 1) {
            return res.status(500).json({ msg: 'user not deleted' })
        }
  
        return res.status(200).json({ msg: 'user deleted successfully' })
  
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg_err: err })
    }
  })
  router.post('/', async(req, res) => {
    try {
        const user = req.body
        const validation = addUserValid(user)
        if (validation.error) {
            return res.status(400).json({ msg_err: validation.error.details })
        }
  
        // const data = await CakeModel.create(cake)
        // data.save()
  
        const userData = new userModel(user)
        await userData.save()
  
        res.json({ msg: 'user Added', userData })
    } catch (err) {
        if (err.code == 11000) {
            return res.status(400).json({ msg_err: 'user name already exist!' })
        }
        console.log(err)
        res.status(500).json({ msg_err: err })
    }
  })
  router.put('/byName/:name', async(req, res) => {

    try {
        const name = req.params.name

        const user = req.body
        const validation = updateUserValid(user)
        if (validation.error) {
            return res.status(400).json({ msg_err: validation.error.details })
        }
        const data = await userModel.updateOne({ name: name }, user)
        if (data.matchedCount != 1) {
            return res.status(401).json({ msg_err: "user not exist!" })
        }
        if (data.modifiedCount == 1 && data.matchedCount == 1) {
            return res.status(200).json({ msg: 'user updated successfully' })
        }
  
        return res.status(200).json({ msg: 'user without any updated..' })
  
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg_err: err })
    }
  })
  router.get('/:name', async(req, res) => {
    try {
        const user = await userModel.findOne({ name: req.params.name })
  
        if (!user) {
            return res.status(401).json({ msg_err: "user not exist!" })
        }
  
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg_err: err })
    }
  })

  export default router;
  
  
  

  






