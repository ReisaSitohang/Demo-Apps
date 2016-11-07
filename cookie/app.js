const express = require ( 'express' )
const app     = express( )

app.use(express.static(__dirname+'/views'))

app.get('/', (req, res)=>{
	console.log('Opened home page')
		res.render('views/index.html')
	})


app.listen (8000, () => {
	console.log('server is running')
})