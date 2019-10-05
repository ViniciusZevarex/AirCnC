const express 	= require('express');
const mongoose	= require('mongoose');
const cors		= require('cors')
const routes 	= require('./routes');
const path		= require('path'); 


//express é um microframework para não precisar escrever coisas que já estão prontas
const app = express();

mongoose.connect('<url>', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
//pegar requisição e enviar resposta

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body =  acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

//GET, POST, PUT, DELETE
// app.post('/user', (req,res) =>{
// 	return res.json({ message: req.body});
// });

//porta do localhost onde a aplicação será executada
app.listen(4444);
