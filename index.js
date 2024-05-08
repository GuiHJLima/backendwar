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
    port: 7007,
});

//função para verificar a alingment
async function checkAlignment(alignment) {
    const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
    if (alignments.includes(alignment)) {
        return true;
    } else {
        return false;
    }
}

//função para verificar strength, agility, constitution, level, vitality
async function checkNumber(strength, agility, constitution, level, vitality) {
    if (isNaN(strength, agility, constitution, level, vitality)) {
        return false;
    } else {
        if (strength < 0 || strength > 10 || agility < 0 || agility > 10 || constitution < 0 || constitution > 10 || level < 0 || level > 20 || vitality < 100 || vitality > 1000) {
            return false;
        } else {
            return true;
        }
    }
}

//função calc batalha
async function batalha(warrior1, warrior2) {
    let battle = {
        warrior1_id: warrior1.id,
        warrior2_id: warrior2.id,
        winner_id: null,
        winner: null,
    };
    let warrior1Vitality = warrior1.vitality + (warrior1.constitution * 10) + (warrior1.level * 10);
    let warrior2Vitality = warrior2.vitality + (warrior2.constitution * 10) + (warrior2.level * 10);

    let warrior1Initiative = Math.floor(Math.random() * 20) + warrior1.agility + (warrior1.level / 2);
    let warrior2Initiative = Math.floor(Math.random() * 20) + warrior2.agility + (warrior2.level / 2);

    let warrior1Attack = Math.floor(Math.random(warrior1.strength) * 20) + (warrior1.level / 2);
    let warrior2Attack = Math.floor(Math.random(warrior2.strength) * 20) + (warrior2.level / 2);

    do {
        if (warrior1Initiative > warrior2Initiative) {
            warrior2Vitality -= warrior1Attack;
            if (warrior2Vitality <= 0) {
                battle.winner_id = warrior1.id;
                battle.winner = warrior1.name;
            } else {
                warrior1Vitality -= warrior2Attack;
                if (warrior1Vitality <= 0) {
                    battle.winner_id = warrior2.id;
                    battle.winner = warrior2.name;
                }
            }
        }
    } while (warrior1Vitality > 0 || warrior2Vitality > 0);
    return battle;
}

//rota get all warriors
app.get('/warriors', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM warriors');
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter todos os warriors", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter todos os warriors" });
    }
});

//rota get warrior by id
app.get('/warriors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE id = $1', [id]);
        res.json(resultado.rows[0]);
    } catch (error) {
        console.error("Erro ao tentar obter warrior por id", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por id" });
    }
});

//rotas get warrior by name
app.get('/warriors/name/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE name = $1', [name]);
        res.json(resultado.rows[0]);
    } catch (error) {
        console.error("Erro ao tentar obter warrior por nome", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por nome" });
    }
});

//rota get warrior by universe
app.get('/warriors/universe/:universe', async (req, res) => {
    const { universe } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE universe = $1', [universe]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por universo", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por universo" });
    }
});

//rota get warrior by alignment
app.get('/warriors/alignment/:alignment', async (req, res) => {
    const { alignment } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE alignment = $1', [alignment]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por alinhamento", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por alinhamento" });
    }
});

//rota get warrior by strength
app.get('/warriors/strength/:strength', async (req, res) => {
    const { strength } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE strength = $1', [strength]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por força", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por força" });
    }
});

//rota get warrior by agility
app.get('/warriors/agility/:agility', async (req, res) => {
    const { agility } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE agility = $1', [agility]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por agilidade", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por agilidade" });
    }
});

//rota get warrior by constitution
app.get('/warriors/constitution/:constitution', async (req, res) => {
    const { constitution } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE constitution = $1', [constitution]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por constituição", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por constituição" });
    }
});

//rota get warrior by level
app.get('/warriors/level/:level', async (req, res) => {
    const { level } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE level = $1', [level]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por level", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por level" });
    }
});

//rota get warrior by vitality
app.get('/warriors/vitality/:vitality', async (req, res) => {
    const { vitality } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE vitality = $1', [vitality]);
        res.json({
            total: resultado.rowCount,
            warriors: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter warrior por vitalidade", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter warrior por vitalidade" });
    }
});

//rota post warrior
app.post('/warriors', async (req, res) => {
    const { name, universe, alignment, abilitie, strength, agility, constitution, level, vitality } = req.body;
    if (!name || !universe || !alignment || !abilitie || !strength || !agility || !constitution || !level || !vitality) {
        console.log("Todos os campos são obrigatórios");
        res.status(400).send({ mensagem: "Todos os campos são obrigatórios" });
        return;
    }
    if (!checkAlignment(alignment)) {
        console.log("Alignment inválido, por favor informe um dos seguintes: Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, True Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil");
        res.status(400).send({ mensagem: "Alignment inválido, por favor informe um dos seguintes: Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, True Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil" });
        return;
    }
    if (!checkNumber(strength, agility, constitution, level, vitality)) {
        console.log("Strength, Agility, Constitution, Level e Vitality devem ser números entre 0 e 10, Level entre 0 e 20 e Vitality entre 100 e 1000");
        res.status(400).send({ mensagem: "Strength, Agility, Constitution, Level e Vitality devem ser números entre 0 e 10, Level entre 0 e 20 e Vitality entre 100 e 1000" });
        return;
    }
    try {
        await pool.query('INSERT INTO warriors (name, universe, alignment, abilitie, strength, agility, constitution, level, vitality) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [name, universe, alignment, abilitie, strength, agility, constitution, level, vitality]);
        res.status(201).send({ mensagem: "Warrior criado com sucesso" });
    } catch (error) {
        console.error("Erro ao tentar criar warrior", error);
        res.status(500).send({ mensagem: "Erro ao tentar criar warrior" });
    }
});

//rota delete warrior
app.delete('/warriors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE id = $1', [id]);
        if (resultado.rowCount === 0) {
            res.status(404).send({ mensagem: "Warrior não encontrado" });
        } else {
            await pool.query('DELETE FROM warriors WHERE id = $1', [id]);
            res.send({ mensagem: "Warrior deletado com sucesso" });
        }
    } catch (error) {
        console.error("Erro ao tentar deletar warrior", error);
        res.status(500).send({ mensagem: "Erro ao tentar deletar warrior" });
    }
});

//rota put warrior
app.put('/warriors/:id', async (req, res) => {
    const { id } = req.params;
    const { name, universe, alignment, abilitie, strength, agility, constitution, level, vitality } = req.body;
    if (!name || !universe || !alignment || !abilitie || !strength || !agility || !constitution || !level || !vitality) {
        console.log("Todos os campos são obrigatórios");
        res.status(400).send({ mensagem: "Todos os campos são obrigatórios" });
        return;
    }
    if (!checkAlignment(alignment)) {
        console.log("Alignment inválido, por favor informe um dos seguintes: Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, True Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil");
        res.status(400).send({ mensagem: "Alignment inválido, por favor informe um dos seguintes: Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, True Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil" });
        return;
    }
    if (!checkNumber(strength, agility, constitution, level, vitality)) {
        console.log("Strength, Agility, Constitution, Level e Vitality devem ser números entre 0 e 10, Level entre 0 e 20 e Vitality entre 100 e 1000");
        res.status(400).send({ mensagem: "Strength, Agility, Constitution, Level e Vitality devem ser números entre 0 e 10, Level entre 0 e 20 e Vitality entre 100 e 1000" });
        return;
    }
    try {
        const resultado = await pool.query('SELECT * FROM warriors WHERE id = $1', [id]);
        if (resultado.rowCount === 0) {
            res.status(404).send({ mensagem: "Warrior não encontrado" });
        } else {
            await pool.query('UPDATE warriors SET name = $1, universe = $2, alignment = $3, abilitie = $4, strength = $5, agility = $6, constitution = $7, level = $8, vitality = $9 WHERE id = $10', [name, universe, alignment, abilitie, strength, agility, constitution, level, vitality, id]);
            res.send({ mensagem: "Warrior atualizado com sucesso" });
        }
    } catch (error) {
        console.error("Erro ao tentar atualizar warrior", error);
        res.status(500).send({ mensagem: "Erro ao tentar atualizar warrior" });
    }
});


//rota get battle
app.get('/battle', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM battle');
        res.json({
            total: resultado.rowCount,
            battle: resultado.rows
        });
    } catch (error) {
        console.error("Erro ao tentar obter todas as batalhas", error);
        res.status(500).send({ mensagem: "Erro ao tentar obter todas as batalhas" });
    }
});

//rota create battle
app.get('/battle/:id1/:id2', async (req, res) => {
    const { id1, id2 } = req.params;
    
    try{
        const vencedor = await batalha(id1, id2);

        await pool.query('INSERT INTO battle (warrior1_id, warrior2_id, winner_id, winner) VALUES ($1, $2, $3, $4)', [vencedor.warrior1_id, vencedor.warrior2_id, vencedor.winner_id, vencedor.winner]);

        const resultado = await pool.query('SELECT * FROM battle WHERE id = $1', [vencedor.winner_id]);
        res.json({vencedor: resultado.rows[0], mensagem: "Batalha criada com sucesso"});
    } catch (error) {
        console.error("Erro ao tentar criar batalha", error);
        res.status(500).send({ mensagem: "Erro ao tentar criar batalha" });
    }
});

//inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor esta rodando em http://localhost:${port}`);
});