//Uso padrão 
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const request = require("request");

//Uso padrão middlewares
server.use(middlewares);

//Para inserir POST,PUT e PATCH é necessário o body-parser
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  
  //Método prímario do cadastro dos produtos
  if (req.method === "POST") {
    main();
    var date = new Date().toString();
    var i;
    for (i = 0; i < jsonData.length; i++) {
      if (jsonData[i].name == req.body.name) {
        let dateOne = new Date(jsonData[i].createdAt);
        let dateTwo = new Date(date);
        let msDifference = dateTwo - dateOne;
        let minutes = Math.floor(msDifference / 1000 / 60);
        if (minutes <= 10) {          
        //Para mudar o tempo de cadastro, altere o número dentro do if 
          return res.json({
            status: 403,
            message: "Forbidden",
          });
        }
      }
    }
    req.body.createdAt = date;
  }
  next();
});

// Rota padrão do usuário
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

var jsonData = "";
//Função  para otimizar o carregamento do banco de dados
async function main() {
  jsonData = await fetchData();
}

// Função para integrar com o banco de dados 
function fetchData() {
  return new Promise(function (resolve, reject) {
    request(
      {
        url: "http://localhost:3000/product",
        json: true,
      },
      (err, response, body) => {
        resolve(body);
      }
    );
  });
}
main();
