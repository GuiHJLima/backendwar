# Anime War (RPG)⚔🪄

O Projeto Anime War é uma aplicação de backend desenvolvida para oferecer funcionalidades de CRUD (Create, Read, Update, Delete) relacionadas a personagens de anime. Ele permite a criação, atualização, exclusão e recuperação de informações sobre esses personagens, bem como funcionalidades adicionais, como batalhas entre os personagens e registro de histórico de batalhas.

![anime_war](https://github.com/GuiLimaSeila/backendwar/assets/123502074/3be8c1ab-d715-4156-9a96-f542e9ca06e2)

## Funcionalidades🪄

- Criação, leitura, atualização e exclusão (CRUD) de personagens.
- Realização de batalhas entre personagens.
- Registro e consulta de histórico de batalhas.

## Tecnologias Utilizadas🪄

- Node.js
- Express
- PostgreSQL

## Como Usar🪄

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto usando `npm install`.
3. Configure o banco de dados PostgreSQL com o nome `animewar_db` e execute o script `script.sql` para criar as tabelas necessárias.
4. Abra o arquivo `index.js` e ajuste as configurações do banco de dados conforme necessário (usuário, senha, host, porta).
5. Inicie o servidor executando `npm run dev`.
6. Acesse as diferentes rotas disponíveis conforme a documentação fornecida.

## Documentação e teste de rotas
**Testando as Rotas no Insomnia:**

Para testar cada rota individualmente, siga estas instruções:

1. Rota para obter todos os personagens

- Método: GET
- URL: `http://localhost:4000/warriors/`

2. Rota para adicionar um novo personagen

- Método: POST
- URL: `http://localhost:4000/warriors/`
- Corpo da Requisição (JSON):
  {
	   "name": "Nome do Personagen",
	   "universe": "Universo do Personagen",
	   "alignment": "Alinhamento do Personagen",
	   "abilitie": "Habilidade do Personagen",
	   "strength": Força do Personagen(INT),
	   "agility": Agilidade do Personagen(INT),
	   "constitution": Constituição do Personagen(INT),
	   "level": Level do Personagen(INT),
	   "vitality": VItalidade do Personagen(INT)
  }

3. Rota para atualizar um personagen

- Método: PUT
- URL: `http://localhost:4000/warriors/{id}`
  - Substitua `{id}` pelo ID do personagen que deseja atualizar.
- Corpo da Requisição (JSON):
   {
	   "name": "Nome do Personagen",
	   "universe": "Universo do Personagen",
	   "alignment": "Alinhamento do Personagen",
	   "abilitie": "Habilidade do Personagen",
	   "strength": Força do Personagen(INT),
	   "agility": Agilidade do Personagen(INT),
	   "constitution": Constituição do Personagen(INT),
	   "level": Level do Personagen(INT),
	   "vitality": VItalidade do Personagen(INT)
  }

4. Rota para deletar um personagen

- Método: DELETE
- URL: `http://localhost:4000/warriors/{id}`
  - Substitua `{id}` pelo ID do personagen que deseja deletar.

5. Rota para obter um personagen específico

- Método: GET
- URL: `http://localhost:4000/warriors/{id}`
  - Substitua `{id}` pelo ID do personagen que deseja recuperar.

6. Rota para obter todos os personagens de um determinado nome

- Método: GET
- URL: `http://localhost:4000/warriors/name/{name}`
  - Substitua `{name}` pelo nome desejado.
 
7. Rota para obter todos os personagens de um determinado nome 

- Método: GET
- URL: `http://localhost:4000/warriors/universe/{universe}`
  - Substitua `{universe}` pelo univereso desejado.

8. Rota para obter todos os personagens de um determinado alinhamento 

- Método: GET
- URL: `http://localhost:4000/warriors/alignment/{alignment}`
  - Substitua `{alignment}` pelo alinhamento desejado.
 
9. Rota para obter todos os personagens de um determinada força

- Método: GET
- URL: `http://localhost:4000/warriors/strength/{strength}`
  - Substitua `{strength}` pela força desejada.
 
10. Rota para obter todos os personagens de um determinada agilidade

- Método: GET
- URL: `http://localhost:4000/warriors/agility/{agility}`
  - Substitua `{agility}` pela agilidade desejada.
 
11. Rota para obter todos os personagens de um determinada constituição

- Método: GET
- URL: `http://localhost:4000/warriors/constitution/{constitution}`
  - Substitua `{constitution}` pela constitution desejada.
 
12. Rota para obter todos os personagens de um determinado level

- Método: GET
- URL: `http://localhost:4000/warriors/level/{level}`
  - Substitua `{level}` pelo level desejada.
 
13. Rota para obter todos os personagens de um determinada vitality

- Método: GET
- URL: `http://localhost:4000/warriors/vitality/{vitality}`
  - Substitua `{vitality}` pela força desejada.

14. Rota para realizar uma batalha entre dois personagens

- Método: GET
- URL: `http://localhost:4000/battle/{id1}/{id2}`
  - Substitua `{id1}` e `{id2}` pelos IDs dos personagens que deseja colocar para batalhar.

15. Rota para obter o histórico de batalhas

- Método: GET
- URL: `http://localhost:4000/battle`

16. Rota para obter o histórico de batalhas com os dados dos personagens

- Método: GET
- URL: `http://localhost:4000/battle/warrios`

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs, propor melhorias ou enviar pull requests.
