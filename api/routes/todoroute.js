
import express from "express";

const router = express.Router();

router.post('/',(req,res) => {
    const data = {
        title: req.body.title,
        description:req.body.description,
        date: req.body.date
    }
 res.json({
     message : 'message was sent successfully',
     _data:data,
        

 });
})


export default router;