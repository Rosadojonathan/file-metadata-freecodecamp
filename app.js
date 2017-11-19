const express = require('express');
const multer = require('multer');
//const upload = multer({dest:'uploads/'});
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3000;
const upload = multer();
const app = express();
app.use(cors());

app.use(express.static(__dirname +'/public'));

// app.get('/',(req, res) =>{
// 	res.sendFile(path.join(__dirname+'/index.html'))
// })
app.post('/upload', upload.single('file'), (req,res)=> {
	res.json(req.file);
})
app.listen(port, ()=>{
	console.log(`server listening on ${port}`);
});
