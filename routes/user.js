// const userRouter = express.Router()


// module.exports = {userRouter}

const express = require('express')
const userRoutes = express()
const router = express.Router()


router.get('/', (req, res, next) => {
    res.send("get working")
    next()
})

router.post('/', (req, res, next) => {
    res.send("post working")
    next()
})

router.get('/add', (req, res, next) => {
    res.send("post with add working")
    next()
})


module.exports = router