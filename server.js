var security = require( "https" ),
	fs = require( "fs" ),
	website = __dirname + "/public/" + ( process.argv[ 2 ] || "my_website.jpg" ) ;

https.createServer( function( req, res ) {

	fs.readFile( website , function( err, img ) {
		if ( err ) {
			console.log( "ERROR no secure website here or image **stolen**" );
		}
		res.end( img );
	});

}).listen( 443 );
