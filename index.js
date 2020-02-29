let express = require('express')
let bodyParser = require('body-parser')

let app = express()


let appRoutes = require('./routes/app')

let exphbs = require('express-handlebars')
const extNameHbs = 'hbs'; //.handlebars //.hbs

let hbs = exphbs.create({extname: extNameHbs})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine(extNameHbs, hbs.engine)
app.set('view engine',extNameHbs)
app.use('/',appRoutes)
app.use(express.static('public'))



app.listen(3000, () => {
    console.log('It\'s Alive!')
}) 