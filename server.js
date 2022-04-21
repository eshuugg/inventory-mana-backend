const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/productRoutes')
const supplierRouter = require('./routes/supplierRoutes')
const stockRouter = require('./routes/stockRouter')
const sellReportRouter = require('./routes/sellReportRouter')
const app = express()

var corOption = {
    origin: "http://localhost:3000"
}

//middleware

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//router


app.use('/api/product', productRouter)

app.use('/api/suppliers', supplierRouter)

app.use('/api/stock', stockRouter )

app.use('/api/sellReport', sellReportRouter )


//testing api

app.get('/', (req, res) => {
    res.json({ message: 'Hello from api' })
})


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})