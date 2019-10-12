var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');

var app = express();


app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
  res.render('index',{title:'Any title'})
})
app.listen(3001,()=>
{
  console.log('Server is running on port 3001')
}
)