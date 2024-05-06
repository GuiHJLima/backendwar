const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

//rota get all
app.get('/warriors', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM warriors');
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter todos os warriors", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter todos os warriors"});
    }
});


//inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor esta rodando em http://localhost:${port}`);
});