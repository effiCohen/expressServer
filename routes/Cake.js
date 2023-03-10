import express from "express";
import { cakeModel } from "../models/cakeModel.js";
import { addCakeValid, updateCakeValid } from "../validations/cakeValidation.js";

const router = express.Router();



// const cakes = [
//   { id: 1, type: "Blueberry Cake", price: 30, category: "fruit" },
//   { id: 2, type: "Raspberry Cake", price: 25, category: "fruit" },
//   { id: 3, type: "Mango Cake", price: 20, category: "fruit" },
//   { id: 4, type: "Peach Cake", price: 25, category: "fruit" },
//   { id: 5, type: "Apple Cake", price: 20, category: "fruit" },
//   { id: 6, type: "Vanilla Cake", price: 25, category: "milk" },
//   { id: 7, type: "Funfetti Cake", price: 20, category: "milk" },
//   { id: 8, type: "Coconut Cake", price: 35, category: "milk" },
//   { id: 9, type: "Sponge Cake", price: 15, category: "milk" },
//   { id: 10, type: "Orange Cake", price: 25, category: "milk" },
//   { id: 11, type: "Lime Cake", price: 20, category: "milk" },
//   { id: 12, type: "Chocolate Cake", price: 25, category: "no sugar" },
//   { id: 13, type: "Red Velvet Cake", price: 30, category: "no sugar" },
//   { id: 14, type: "Carrot Cake", price: 35, category: "no sugar" },
//   { id: 15, type: "Lemon Cake", price: 20, category: "no sugar" },
//   { id: 16, type: "Strawberry Shortcake", price: 15, category: "no sugar" },
//   { id: 17, type: "Cheesecake", price: 40, category: "no sugar" },
//   { id: 18, type: "Black Forest Cake", price: 45, category: "no sugar" },
//   {
//     id: 19,
//     type: "Pineapple Upside-Down Cake",
//     price: 30,
//     category: "no sugar",
//   },
//   { id: 20, type: "Banana Cake", price: 20, category: "no sugar" },
// ];

router.get('/', async(req, res) => {
  try {
      const cakes = await cakeModel.find({})
      res.json(cakes);
  } catch (err) {
      console.log(err)
      res.status(500).json({ msg_err: err })
  }
})

      

// //ראוטר עבור חיפוש עוגות לפי קטגוריות
// router.get("/category/:category", (req, res) => {
//   //איסוף פארם מהכתובת
//   const category = req.params.category;
//   console.log(category);
//   //פילטר עבור קטגוריה שנבחרה בפארם
//   const filterdCaked = cakes.filter((cakes) => cakes.category === category);
//   //אם המערך ריק זאת אומרת שלא קיים קטגוריה כזו
//   if (!filterdCaked.length)
//     //נחזיר גייסון עם הודעה מתאימה בנוסף נוסיף ריטארן בשביל שלא יהיו התנגשויות גייסונים
//     return res.status(401).json({ msg: `Category ${category}not found!` });
//   res.json(filterdCaked);
// });

// router.get("/byPrice", (req, res) => {
//   //איוסף קווארי מכתובת
//   const min = req.query.min;
//   const max = req.query.max;
//   //ייצור מערך זמני לפילטור
//   let filterdCakedByPrice = [];
//   //אם אין מקס ואין מינ
//   if (!min && !max) {
//     return res.json(cakes);
//   }
//   //אם אין מקס ויש מינ
//   else if (min && !max) {
//     filterdCakedByPrice = cakes.filter((cakes) => cakes.price >= min);
//     return res.json(filterdCakedByPrice);
//   }
//   //אם אין מינ ויש מקס
//   else if (!min && max) {
//     filterdCakedByPrice = cakes.filter((cakes) => cakes.price <= max);
//     return res.json(filterdCakedByPrice);
//   }
//   //אם מינ גדול ממקס נחזיר הודעה בהתאם
//   else if (min > max) {
//     return res
//       .status(401)
//       .json({ msg: "cannot find when minimun bigger ther maximun" });
//   }
//   //נחזיר את המערך המופלטר לפי הקווארי
//   filterdCakedByPrice = cakes.filter(
//     (cakes) => cakes.price >= min && cakes.price <= max
//   );
//   res.json(filterdCakedByPrice);
// });

// router.get("/byId/:id", (req, res) => {
//   //איסוף פארם
//   const id = req.params.id;
//   //פונקציה פיינד מחזירה אובייקט בודד לפי התנאי
//   const cake = cakes.find((cakes) => cakes.id == id);
//   //אם הפונקציה לא החזירה כלום ניתן הודעה בהתאם
//   if (!cake) return res.json({ msg: `Cake not found!` });
//   //נחזיר את העוגה לפי האיידי מהפארם
//   res.json(cake);
// });

// router.post("/", (req, res) => {
//   const { type, price, category } = req.body;
//   const cake = req.body;
//   if ((!type, !price, !category))
//     return res.json({ msg_err: "type,price,category are requierd" });

//   //פעולה שתוודא שרק הערכים שאני רוצה יהיו בבאדי ולא אחרת
//   //לולאה זאת תרוץ על כל מפתח באובייקט
//   for (const key in cake) {
//     if (key != "type" && key != "price" && key != "category")
//       return res.json({ msg_err: "only type,price and category are requierd" });
//   }
//   //מוסיף שדה אי די כעורך המערך +1
//   cake.id = cakes.length + 1;
//   //מוסיף את העוגה למערך של העוגות
//   cakes.push(cake);
//   res.json({ msg: "cake add", cake });
// });

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const cake = cakes.find((cakes) => cakes.id == id);
//   if (!cake) {
//     return res.status(401).json({ msg_err: "Cake not found" });
//   }
//   let index;
//   cakes.forEach((cake, i) => {
//     if (cake.id == id) {
//       index = i;
//     }
//   });

//   cakes.splice(index, 1);
//   res.json(cakes);
// });
router.delete('/byName/:name', async(req, res) => {
  try {
      const name = req.params.name

      const cake = await cakeModel.findOne({ name: name })
      console.log(cake)
      if (!cake) {
          return res.status(401).json({ msg_err: "Cake not exist!" })
      }

      const data = await cakeModel.deleteOne({ name: name })
      if (data.deletedCount != 1) {
          return res.status(500).json({ msg: 'Cake not deleted' })
      }

      return res.status(200).json({ msg: 'Cake deleted successfully' })

  } catch (err) {
      console.log(err)
      res.status(500).json({ msg_err: err })
  }
})
router.post('/', async(req, res) => {
  try {
      const cake = req.body
      const validation = addCakeValid(cake)
      if (validation.error) {
          return res.status(400).json({ msg_err: validation.error.details })
      }

      // const data = await CakeModel.create(cake)
      // data.save()

      const cakeData = new cakeModel(cake)
      await cakeData.save()

      res.json({ msg: 'Cake Added', cakeData })
  } catch (err) {
      if (err.code == 11000) {
          return res.status(400).json({ msg_err: 'Cake name already exist!' })
      }
      console.log(err)
      res.status(500).json({ msg_err: err })
  }
})
router.put('/byName/:name', async(req, res) => {

  try {
      const name = req.params.name
          // const isExist = await CakeModel.findOne({ type: name })

      // if (!isExist) {
      //     return res.status(401).json({ msg_err: "Cake not exist!" })
      // }

      const cake = req.body
      const validation = updateCakeValid(cake)
      if (validation.error) {
          return res.status(400).json({ msg_err: validation.error.details })
      }
      const data = await cakeModel.updateOne({ name: name }, cake)
      if (data.matchedCount != 1) {
          return res.status(401).json({ msg_err: "Cake not exist!" })
      }
      if (data.modifiedCount == 1 && data.matchedCount == 1) {
          return res.status(200).json({ msg: 'Cake updated successfully' })
      }

      return res.status(200).json({ msg: 'Cake without any updated..' })

  } catch (err) {
      console.log(err)
      res.status(500).json({ msg_err: err })
  }
})
router.get('/:name', async(req, res) => {
  try {
      const cake = await cakeModel.findOne({ name: req.params.name })

      if (!cake) {
          return res.status(401).json({ msg_err: "Cake not exist!" })
      }

      res.json(cake)
  } catch (err) {
      console.log(err)
      res.status(500).json({ msg_err: err })
  }
})


export default router;
