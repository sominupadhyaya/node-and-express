const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

data = {
    "data":[
        {
            "name": "Promises in JS" , 
            "author" : "Somin"
        },
        {
            "name" : "Async JS" , 
            "author" : "Gaurab"
        }
    ]
}
app.get('/' , (req , res) =>{
    res.json(data)
})

app.listen(8000 , () =>{
    console.log('Server started at http://localhost:8000/');
})