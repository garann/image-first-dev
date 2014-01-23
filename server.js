var http = require( "http" ),
	fs = require( "fs" ),
	website = __dirname + "/public/" + ( process.argv[ 2 ] || "my_website.jpg" ) ;

http.createServer( function( req, res ) {

	fs.readFile( website , function( err, img ) {
		if ( err ) {
			console.log( "ERROR no website here" );
		}
		res.end( img );
	});

}).listen( 80 );