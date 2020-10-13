Davi Soares
API Rest fake json-server

site de banco de dadas grátis

Web.Postman(é necessário realizar o login para utilizar)> https://web.postman.co/build/workspace/My-Workspace


Será necessários 3 arquivos na pasta> db.json > esse arquivo será a database
                                     package.json >esse arquivo será necessário para baixar as dependências do node.js                                     
                                     server.js > sera o body da API


Instalando o Node.js no json-server

Use esse comando no terminal $ npm install

Uma pasta "node_modules" e um arquivo "package-lock.json" serão criados


Integrando banco de dados

No terminal use esse comando para iniciar o banco de dados $ json-server --watch db.json

Também no terminal irá mostrar seu localhost, exemplo "http://localhost:3000/product", nesse exemplo foi feito uma subcategoria "product"

Na página inicial do Postman, clique em "Create a request" e cole o localhost em "Entrer request URL"



Iniciando a API e inserindo request

Para iniciar a API, no terminal cole esse comando para rodar o json-server $ node server.js 

Para inserir uma request, ao lado do localhost, selecione "POST", logo abaixo em "body", depois em "Raw" e selecione a extensão "JSON"


Esse Curl de comando é para inserir uma request direto no terminal $ curl -XPOST http://localhost:3000/product -H 'Content-type:application/json' -d '{"name": "mesa"}'


OBS:

O id no banco de dados é primary key, então não pode repetir a numeração

Dentro do método primário no arquivo "server.js", poderá modificar os minutos para testar>  if (minutes <= 10) 

Caso a inserção tenha dado certo, o retorno será o próprio objeto em json, caso negue pelo tempo, retornará na mensagem "403 forbidden"


















