const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('All shelters')
})
router.post('/', (req, res)=>{
    res.send('posting shelters')
})
router.get('/:id/edit', (req, res)=>{
    res.send('edit shelter')
})
router.get('/:id/show', (req, res)=>{
    res.send('show shelters')
})

module.exports = router;