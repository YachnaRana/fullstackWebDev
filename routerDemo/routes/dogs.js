const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('All dogs')
})
router.post('/', (req, res)=>{
    res.send('posting dogs')
})
router.get('/:id/edit', (req, res)=>{
    res.send('edit dogs')
})
router.get('/:id/show', (req, res)=>{
    res.send('show dogs')
})

module.exports = router;