Davi Soares
API Rest fake json-server

Ferramentas necessárias para download e sites
Visual Studio Code> https://code.visualstudio.com/download
Node.js> https://nodejs.org/en/ 
Web.Postman(é necessário realizar o login para utilizar)> https://web.postman.co/build/workspace/My-Workspace

Instalando o Node.js

para instalar Node.js, cole esse comando no terminal>  npm install -g json-server


Integrando banco de dados

Crie um arquivo em e extensão "db.json"

No terminal use esse comando para iniciar o banco de dados> json-server --watch db.json

Também no terminal irá mostrar seu localhost, exemplo " http://localhost:3000/product", nesse exemplo foi feito uma subcategoria "product"

Após o login no site Postman, clique em "Create a request" e cole o localhost em "Entrer request URL"



Criando a API e inserindo request

Na mesma pasta onde está o "db.json",criará um arquivo com nome e extensão "server.js"

Execute o arquivo "server.js" com o Visual Studio Code e esse arquivo conterá o corpo da API

Após a construção da API, no terminal cole este comando para rodar o json-server> node server.js 

Para inserir uma request, ao lado do localhost, selecione "POST", logo abaixo em "body", depois em "Raw" e selecione a extensão "JSON"


Esse comando é para inserir uma request direto no terminal > curl -XPOST http://localhost:3000/product -H 'Content-type:application/json' -d '{"name": "mesa"}'


OBS:

O id no banco de dados é primary key, então não pode repetir a numeração














