const express   = require( 'express' ),
      app       = express(),
      session   = require( 'express-session' ),
      passport  = require( 'passport' ),
      Local     = require( 'passport-local' ).Strategy,
      bodyParser= require( 'body-parser' )

// automatically deliver all files in the public folder
// with the correct headers / MIME type.
app.use( express.static( 'public' ) )

// get json when appropriate
app.use( bodyParser.json() )

// domain views index.html
app.get('/', function(request, response) {
  response.sendFile( __dirname + '/views/index.html' )
})

// GET orders
app.get('/orders', (req, res) => res.send(db.get('orders').values()))

// POST submit
app.post( '/submit', function( request, response ) {
  dataString = ''

  request.on( 'data', function( data ) {
      dataString += data
  })

  request.on( 'end', function() {
    console.log( JSON.parse( dataString ) )

    var order = JSON.parse( dataString )
    var yourname = (order.yourname)
    var phone = (order.phone)
    var potato = (order.potato)
    var seasoning = (order.seasoning)
    var size = (order.size)
    var ordernum = db.get('ordercount')
                     .value()

    obj = { yourname: yourname, phone: phone, potato: potato, seasoning: seasoning, size: size, ordernum: ordernum}
    console.log(obj)

    // add new order to orders part of database
    db.get('orders')
      .push(obj)
      .write()

    // increment ordercount
    db.update('ordercount', n => n + 1)
      .write()

    response.writeHead( 200, "OK", {'Content-Type': 'application/json' })
    response.end()
  })
})

app.listen( process.env.PORT || 3000 )

// DATABASE
// low db set up
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low( adapter )

// set defaults (required if your JSON file is empty)
db.defaults({ orders: [], users: [], ordercount: 0 })
  .write()

// add an order
db.get('orders')
  .push({ yourname: 'Joe', phone: '122-343-2334', potato: 'sweet', seasoning: 'salt', size: 'small', ordernum: 1234})
  .write()

// add a user
db.get('users')
  .push({ username:'admin', password:'fantastic' })
  .write()
  
// increment ordercount
db.update('ordercount', n => n + 1)
  .write()

/*
// filter users by age
const seniors = db.get( 'users' )
  .filter( user => user.age > 70 )
  .value()
*/