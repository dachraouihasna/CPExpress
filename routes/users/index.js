const express = require("express")
const adminRouter = require('./admin')

const router = express.Router();
router.get('/',(req,res)=> {
    res.json(['hassna','dachraoui']);
} );

router.use('/admin', adminRouter);

module.exports = router;