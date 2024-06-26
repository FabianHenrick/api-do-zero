import express from "express";
/*
 *  ####### O Que uma Rota precisa? ########
 *
 * 1) Tipo de Rota / Método HTTP
 * 2) Endereço
 *
 */

const app = express();
/*
O Comando abaixo serve para o express conseguir trabalhar com JSON
*/
app.use(express.json());

const users = [];
app.post("/usuarios", (req, res) => {
  users.push(req.body);

  res.status(201).json(req.body);
});

app.get("/usuarios", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000);

/*
 *  ####### Criar Nossa Api de Usuários ########
 *
 * 1) Criar um Usuário.
 * 2) Listar todos os Usuários.
 * 3) Editar um Usuário.
 * 4) Deletar um Usuário.
 *
 *
 */

/* 
acesso ao DB
HendrikoDev
S4HonUmTL5fY2FcF 
*/
