
# Projeto Back End Trybe

projeto focando em educação financeira

Para utilizar o Trybe você precisará:

  ##  Clonar o repositorio

  ## Git clone

    git clone <link abaixo>

  <a href="git@github.com:vinistm/Trybe.git"> GIT HUB </a>



Após o clone do repositório sera necessario seguir os seguintes comandos:   

   
  ## Install

    yarn install


  

  ## Docker
   (caso esteja usando um docker)

    $ sudo docker-compose up --build

  ## Migration

    $ sudo docker exec api yarn typeorm migration:generate src/migrations/client -d src/data-source.ts

  ## Migration Run

    $ sudo docker exec api yarn typeorm migration:run -d src/data-source.ts




## Documentação da API

Criação de Usuario



```http
  POST /user/register

  Json{
    "username":"teste",
    "password": "Letrasenumero12"
  }
```



#### Retorno

```http
  POST /user/register

  {
	"username": "teste",
	"password": "$2b$10$ZN.YvCLQv4g9hEpotHWnCeGqyh64sC/2LKGpoWbUy9c0.MHa1irPO"
  }
```
caso não seja enviado o password/username da forma correta ele nos dara a seguinte resposta:

```http
  POST /user/register

  {
	"error": "ValidationError",
	"message": "The password must contain an uppercase letter, a number."
  }
```
Login

```http
  POST /login

  Json{
	"username":"teste",
	"password":"Letrasenumero12"
  }
```
#### Retorno
```http
  POST /login
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0ZTQiLCJpYXQiOjE2NjkwMzcwNDYsImV4cCI6MTY2OTEyMzQ0Nn0.O7vMBHRBysnvmU5aXHS9r-E4Z6ovV4NOhsgVjMR9Ysg"
    }

```
Criação de Account

```http
  POST /user/account

  {
	"balance": "200"
  }
```
#### Retorno

```http
  POST /user/account
  
    {
        "balance": 200,
        "id": 3
    }

```
