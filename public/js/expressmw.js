const express = require('express')
const app = express()
const dreams = []

// for example only: routes for handling the post request
app.use( function( request, response, next ) {
  let dataString = ''

  request.on( 'data', function( data ) {
    dataString += data 
  })

  request.on( 'end', function() {
    const json = JSON.parse( dataString )
    dreams.push( json )
    // add a 'json' field to our request object
    request.json = JSON.stringify( dreams )
    next()
  })
})

app.post( '/submit', function( request, response ) {
  // our request object now has a 'json' field in it from our
  // previous middleware
  response.writeHead( 200, { 'Content-Type': 'application/json'})
  response.end( JSON.stringify( request.json ) )
})

const listener = app.listen( process.env.PORT, function() {
  console.log( 'Your app is listening on port ' + listener.address().port )
})
