const express= require('express')

const router = express.Router();
router.get('/',(req,res)=> {
    res.json(['hassna']);
} );

module.exports = router;