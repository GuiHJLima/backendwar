const express = require('express');
const { Pool } = require('pg');

const app = express();

const port = 4000;

app.get(express.json());

//configuração do banco de dados
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'limaaulabacktds2',
    password: 'ds564',
    port: 5432,
});

//criar uma rota que obtem todos os usuarios
app.get('/usuario', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM usuario');
        res.json({total: resultado.rowCount,
             usuarios: resultado.rows});
    } catch (error) {
        console.error("Erro ao tentar obter todos os usuarios");
        res.status(500).send({mensagem: "Erro ao tentar obter todos os usuarios"});
    }
});

//criar uma rota que obtem um usuario pelo id
app.get('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const resultado = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        res.json({total: resultado.rowCount,
            usuario: resultado.rows[0]});
    } catch (error) {
        console.error("Erro ao tentar obter um usuario pelo id");
        res.status(500).send({mensagem: "Erro ao tentar obter um usuario pelo id"});
    }
});

//criar uma rota que adcione um novo usuario
app.post('/usuario', async (req, res) => {
    try {
       const {nome, email} = req.body;
       await pool.query('INSERT INTO usuario (nome, email) VALUES ($1, $2)', [nome, email]);
       res.send(201)({mensagem: "Usuario adicionado com sucesso"});
    } catch (error) {
        console.error("Erro ao tentar adicionar um novo usuario", error);
        res.status(500).send({mensagem: "Erro ao tentar adicionar um novo usuario"});
    }
});

//criar uma rota que delete um usuario]
app.delete('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
        res.send({mensagem: "Usuario deletado com sucesso"});
    } catch (error) {
        console.error("Erro ao tentar deletar um usuario");
        res.status(500).send({mensagem: "Erro ao tentar deletar um usuario"});
    }
});

//criar uma rota que atualize um usuario
app.put('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {nome, email} = req.body;
        await pool.query('UPDATE usuario SET nome = $1, email = $2 WHERE id = $3', [nome, email, id]);
        res.send({mensagem: "Usuario atualizado com sucesso"});
    } catch (error) {
        console.error("Erro ao tentar atualizar um usuario");
        res.status(500).send({mensagem: "Erro ao tentar atualizar um usuario"});
    }
});



//inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor esta rodando em http://localhost:${port}`);
});