# <p align = "center"> DrivenPass </p>

<p align="center">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsE07I6Txa-3pnvgnWs5zOO0rmFvmD_3E_A&usqp=CAU"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SergioTrajano-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SergioTrajano/DrivenPass-API?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger?
Está aplicação é um gerenciador de senhas e dados pessoais que ajuda a tratar esse problema.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- PostgreSQL
- PrismaOMR
- Cryptr e Bcrypt

***

# Rotas de criação e gerenciamento de usuários:

## Rota <span style="color:yellow"> **POST** </span>/signUp

Essa rota permite criar usuários.

O Body da requisição deve ser feito no seguinte formato:

```json
{
	"email": "email_do_usuario", //string
	"password": "senha_do_usuario" //string
}
```

A senha deve ter no mínimo 10 caracteres. 
Caso aja algum erro no body retorna status 422. 
Caso o email já esteja em uso, retorna status 409. 
Tudo estando correto, retorna statusCode 201.

## Rota <span style="color:yellow"> **POST** </span>/signIn

Essa rota loggar os usuários.

O Body da requisição deve ser feito no seguinte formato:

```json
{
	"email": "email_do_usuario", //string
	"password": "senha_do_usuario" //string
}
```

Caso aja algum erro no body retorna status 422. 
Caso o email ou senha sejam invalidos, retorna status 401. 
Tudo estando correto, retorna status 200 e um objeto que contem o token do usuário.

 # Rota criação e gerenciamento de credenciais
 
 ## Rota <span style="color:yellow"> **POST** </span>/credentials

Essa rota permite criar credentiais.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "url": "https://github.com/auth0/node-jsonwebtoken#readme", //string
  "userName": "aluno", //string
  "password": "123", //string
  "label": "Teste21" //string
}
```

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso haja algum erro no body, retorna status 422.
Caso o campo "label" seja igual a outra "label" usado pelo usuário, retorna status 409.
Caso o email já esteja em uso, retorna status 409. 
Tudo estando correto, retorna statusCode 201.

 ## Rota <span style="color:yellow"> **GET** </span>/credentials

Essa rota permite o usuário ver suas credenciais criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um array de objetos com as informações de suas credenciais na forma:

```json
[
  {
    "id": 40,
    "userId": 34,
    "label": "Teste21",
    "userName": "aluno",
    "password": "0123456789",
    "url": "https://github.com/auth0/node-jsonwebtoken#readme"
  },
  {
    "id": 41,
    "userId": 34,
    "label": "Teste212",
    "userName": "aluno",
    "password": "0123456789",
    "url": "https://github.com/auth0/node-jsonwebtoken#readme"
  }
]
```

 ## Rota <span style="color:yellow"> **GET** </span>/credentials/:id

Essa rota permite o usuário ver pelo id uma de suas credenciais criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista credencial com o id passado, retorna status 404.
Caso a credencial com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um objeto com as informações da credencial pesquisada na forma:

```json
{
  "id": 40,
  "userId": 34,
  "label": "Teste21",
  "userName": "aluno",
  "password": "0123456789",
  "url": "https://github.com/auth0/node-jsonwebtoken#readme"
}
```

 ## Rota <span style="color:yellow"> **DELETE** </span>/credentials/:id

Essa rota permite o usuário deletar pelo id uma de suas credenciais criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista credencial com o id passado, retorna status 404.
Caso a credencial com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200.

 # Rota criação e gerenciamento de Notas seguras
 
 ## Rota <span style="color:yellow"> **POST** </span>/secureNotes

Essa rota permite criar notas seguras.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "title": "SecureNote 5", //string
  "anotation": "Anotação suprema" //string
}
```

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso haja algum erro no body, retorna status 422.
Caso o "title" já esteja em uso, retorna status 409. 
Tudo estando correto, retorna statusCode 201.

 ## Rota <span style="color:yellow"> **GET** </span>/secureNotes

Essa rota permite o usuário ver suas notas seguras criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um array de objetos com as informações de suas notas seguras na forma:

```json
[
  {
    "id": 10,
    "userId": 34,
    "title": "SecureNote 5",
    "anotation": "Anotação suprema"
  },
  {
    "id": 11,
    "userId": 34,
    "title": "SecureNote 6",
    "anotation": "Anotação suprema"
  }
]
```

 ## Rota <span style="color:yellow"> **GET** </span>/secureNotes/:id

Essa rota permite o usuário ver pelo id uma de suas notas seguras criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista nota segura com o id passado, retorna status 404.
Caso a nota segura com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um objeto com as informações da nota segura pesquisada na forma: 

```json
{
  "id": 10,
  "userId": 34,
  "title": "SecureNote 5",
  "anotation": "Anotação suprema"
}
```

 ## Rota <span style="color:yellow"> **DELETE** </span>/secureNotes/:id

Essa rota permite o usuário deletar pelo id uma de suas notas seguras criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista nota segura com o id passado, retorna status 404.
Caso a nota segura com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200.
 
  # Rota criação e gerenciamento de Cartões
 
 ## Rota <span style="color:yellow"> **POST** </span>/cards

Essa rota permite criar cartões.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "label": "que vida triste3", //string
  "cardNumber": "0123-0152-0123-0123", //string
  "expirationDate": "05/35", //string
  "cardHolderName": "Sergio A T Silva", //string
  "securityCode": "456", //string
  "password": "123", //string
  "isVirtual": false, //boolean
  "type": "both" // "debit", "credit" or "both"
}
```

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso haja algum erro no body, retorna status 422.
Caso o "label" já esteja em uso pelo usuário, retorna status 409. 
Tudo estando correto, retorna statusCode 201.

 ## Rota <span style="color:yellow"> **GET** </span>/cards

Essa rota permite o usuário ver seus cartões criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um array de objetos com as informações de seus cartões na forma:

```json
[
  {
    "id": 11,
    "userId": 34,
    "label": "que vida triste3",
    "cardNumber": "0123-0152-0123-0123",
    "cardHolderName": "Sergio A T Silva",
    "securityCode": "456",
    "expirationDate": "05/35",
    "password": "123",
    "isVirtual": false,
    "type": "both"
  },
  {
    "id": 12,
    "userId": 34,
    "label": "que vida triste4",
    "cardNumber": "0123-0152-0123-0123",
    "cardHolderName": "Sergio A T Silva",
    "securityCode": "456",
    "expirationDate": "05/35",
    "password": "123",
    "isVirtual": false,
    "type": "both"
  }
]
```

 ## Rota <span style="color:yellow"> **GET** </span>/cards/:id

Essa rota permite o usuário ver pelo id uma de seus cartões criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista cartão com o id passado, retorna status 404.
Caso o cartão com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um objeto com as informações da nota segura pesquisada na forma: 

```json
{
  "id": 12,
  "userId": 34,
  "label": "que vida triste4",
  "cardNumber": "0123-0152-0123-0123",
  "cardHolderName": "Sergio A T Silva",
  "securityCode": "456",
  "expirationDate": "05/35",
  "password": "123",
  "isVirtual": false,
  "type": "both"
}
```

 ## Rota <span style="color:yellow"> **DELETE** </span>/secureNotes/:id

Essa rota permite o usuário deletar pelo id uma de suas notas seguras criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista cartão com o id passado, retorna status 404.
Caso a cartão com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200.
 
  # Rota criação e gerenciamento de Wi-fi
 
 ## Rota <span style="color:yellow"> **POST** </span>/wifis

Essa rota permite criar wifis.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "label": "Teste 3", //string
  "networkName": "Vizinho chato", //string
  "password": "freeWifi" //string
}
```

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso haja algum erro no body, retorna status 422.
Tudo estando correto, retorna statusCode 201.

 ## Rota <span style="color:yellow"> **GET** </span>/wifis

Essa rota permite o usuário ver seus wifis criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um array de objetos com as informações de seus wifis na forma:

```json
[
  {
    "id": 9,
    "userId": 34,
    "label": "Teste 3",
    "networkName": "Vizinho chato",
    "password": "freeWifi"
  },
  {
    "id": 10,
    "userId": 34,
    "label": "Teste 4",
    "networkName": "Vizinho chato da esquerda",
    "password": "freeWifi"
  }
]
```

 ## Rota <span style="color:yellow"> **GET** </span>/wifis/:id

Essa rota permite o usuário ver pelo id uma de seus wifis criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista wifi com o id passado, retorna status 404.
Caso a wifi com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um objeto com as informações do wifi pesquisado na forma: 

```json
{
  "id": 10,
  "userId": 34,
  "label": "Teste 4",
  "networkName": "Vizinho chato da esquerda",
  "password": "freeWifi"
}
```

 ## Rota <span style="color:yellow"> **DELETE** </span>/secureNotes/:id

Essa rota permite o usuário deletar pelo id uma de seus wifis criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista wifi com o id passado, retorna status 404.
Caso a wifi com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200.

 # Rota criação e gerenciamento de credenciais
 
 ## Rota <span style="color:yellow"> **POST** </span>/documents

Essa rota permite criar documentos.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "fullName": "AAA AAAB", //string
  "issueDate": "12/12/12", //string
  "expirationDate": "12/12/95", //string
  "registrationNumber": 123456789, //number
  "issuingBody": "SDS", //string
  "type": "typo_documento" //"RG" ou "CNH"
}
```

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso haja algum erro no body, retorna status 422.
Caso o campo "type" seja igual a outro "type" usado pelo usuário, retorna status 409.
Tudo estando correto, retorna statusCode 201.

 ## Rota <span style="color:yellow"> **GET** </span>/documents

Essa rota permite o usuário ver seus documentos criadas.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um array de objetos com as informações de seus documentos na forma:

```json
[
  {
    "id": 6,
    "fullName": "AAA AAAB",
    "issueDate": "12/12/12",
    "expirationDate": "12/12/95",
    "registrationNumber": 123456789,
    "issuingBody": "SDS",
    "type": "CNH",
    "userId": 34
  },
  {
    "id": 7,
    "fullName": "AAA AAAB",
    "issueDate": "12/12/12",
    "expirationDate": "12/12/95",
    "registrationNumber": 123456789,
    "issuingBody": "SDS",
    "type": "RG",
    "userId": 34
  }
]
```

 ## Rota <span style="color:yellow"> **GET** </span>/documents/:id

Essa rota permite o usuário ver pelo id uma de seus documentos criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista documento com o id passado, retorna status 404.
Caso o documento com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200. E um objeto com as informações do documento pesquisado na forma:

```json
{
"id": 7,
"fullName": "AAA AAAB",
"issueDate": "12/12/12",
"expirationDate": "12/12/95",
"registrationNumber": 123456789,
"issuingBody": "SDS",
"type": "RG",
"userId": 34
}
```

 ## Rota <span style="color:yellow"> **DELETE** </span>/documents/:id

Essa rota permite o usuário deletar pelo id uma de seus documentos criados.

Deve ser enviada no header da requezição pelo "Authorization" um token no formato "Bearer token". Caso não seja enviado, retorna status 422. Caso o "Authorization" seja enviado, mas o token seja invalido, retorna status 403.
Caso não exista documento com o id passado, retorna status 404.
Caso o documento com o id passado exista, mas não for do usuário, retorna status 403.
Tudo estando correto, retorna statusCode 200.

***

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/SergioTrajano/DrivenPass-API
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```













