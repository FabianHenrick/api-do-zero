import express from "express";
/*
 *  ####### O Que uma Rota precisa? ########
 *
 * 1) Tipo de Rota / Método HTTP
 * 2) Endereço
 *
 */

const app = express();

app.get("/usuarios", (req, res) => {
  res.send("Ok, deu bom!");
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
