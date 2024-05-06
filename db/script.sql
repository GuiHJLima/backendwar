-- Criação do banco de dados
CREATE DATABASE limaaulabacktds2;

-- Conecta no banco de dados
\c limaaulabacktds2;

-- Criação da tabela 'warriors'
CREATE TABLE warriors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    universe VARCHAR(255) NOT NULL,
    alignment VARCHAR(255) NOT NULL,
    abilitie VARCHAR(255) NOT NULL,
    strength INT NOT NULL,
    agility INT NOT NULL,
    constitution INT NOT NULL,
    level INT NOT NULL,
    vitality INT NOT NULL
);

-- Criação da tabela 'battle'
CREATE TABLE battle (
    id SERIAL PRIMARY KEY,
    warrior1_id INT NOT NULL,
    warrior2_id INT NOT NULL,
    winner_id INT NOT NULL,
    FOREIGN KEY (warrior1_id) REFERENCES warriors(id),
    FOREIGN KEY (warrior2_id) REFERENCES warriors(id),
    FOREIGN KEY (winner_id) REFERENCES warriors(id)
);

-- inserção de dados na tabela 'warriors'
INSERT INTO warriors (name, universe, alignment, abilitie, strength, agility, constitution, level, vitality) VALUES 
('Goku', 'Dragon Ball', 'Chaotic Good', 'Kamehameha', 9, 10, 9, 19, 100),
('Vegeta', 'Dragon Ball', 'Chaotic Good', 'Final Flash', 10, 9, 9, 19, 100),
('Freeza', 'Dragon Ball', 'Chaotic Evil', 'Death Ball', 9, 9, 10, 19, 100),
('Cell', 'Dragon Ball', 'Neutral Evil', 'Kamehameha', 10, 10, 10, 20, 100),
('Gohan', 'Dragon Ball', 'Lawful Good', 'Masenko', 9, 10, 8, 17, 100),
('Piccolo', 'Dragon Ball', 'Lawful Good', 'Special Beam Cannon', 8, 8, 8, 18, 100),
('Trunks', 'Dragon Ball', 'Neutral Good', 'Burning Attack', 9, 9, 10, 15, 100),
('Goten', 'Dragon Ball', 'Lawful Good', 'Kamehameha', 7, 7, 7, 10, 100),
('Bills', 'Dragon Ball', 'Lawful Neutral', 'Hakai', 10, 10, 10, 20, 100),
('Whis', 'Dragon Ball', 'Lawful Neutral', 'Temporal Do-Over', 10, 10, 10, 20, 100),
('Naruto', 'Naruto', 'Chaotic Good', 'Rasengan', 8, 9, 8, 18, 100),
('Sasuke', 'Naruto', 'Chaotic Neutral', 'Chidori', 9, 8, 8, 18, 100),
('Madara', 'Naruto', 'Chaotic Evil', 'Susanoo', 10, 10, 10, 20, 100),
('Kakashi', 'Naruto', 'Lawful Good', 'Raikiri', 9, 9, 9, 17, 100),
('Itachi', 'Naruto', 'Neutral Neutral', 'Amaterasu', 9, 9, 9, 17, 100),
('Minato', 'Naruto', 'Lawful Good', 'Rasengan', 9, 10, 9, 19, 100),
('Hashirama', 'Naruto', 'Lawful Good', 'Wood Release', 9, 9, 9, 19, 100),
('Tobirama', 'Naruto', 'Lawful Good', 'Water Release', 9, 9, 9, 19, 100),
('Hiruzen', 'Naruto', 'Lawful Good', 'Shadow Clone Jutsu', 9, 9, 9, 19, 100),
('Jiraiya', 'Naruto', 'Chaotic Good', 'Rasengan', 9, 9, 9, 19, 100),
('Ichigo', 'Bleach', 'Neutral good', 'Getsuga Tenshou', 10, 10, 9, 19, 100),
('Aizen', 'Bleach', 'Lawful Evil', 'Kyoka Suigetsu', 9, 10, 10, 19, 100),
('Yamamoto', 'Bleach', 'Lawful Good', 'Zanka no Tachi', 10, 10, 10, 20, 100),
('Kenpachi', 'Bleach', 'Chaotic Neutral', 'Kendo', 10, 8, 10, 20, 100),
('Byakuya', 'Bleach', 'Lawful Neutral', 'Senbonzakura', 8, 10, 8, 18, 100),
('Grimmjow', 'Bleach', 'Chaotic Neutral', 'Gran Rey Cero', 9, 9, 9, 18, 100),
('Ulquiorra', 'Bleach', 'Neutral Evil', 'Lanza del Relampago', 10, 9, 9, 18, 100),
('Nelliel', 'Bleach', 'Neutral Good', 'Cero Doble', 7, 10, 9, 16, 100),
('Rukia', 'Bleach', 'Lawful Good', 'Sode no Shirayuki', 9, 7, 9, 16, 100),
('Renji', 'Bleach', 'Chaotic Good', 'Hihio Zabimaru', 9, 10, 7, 16, 100),
('Luffy', 'One Piece', 'Chaotic Good', 'Gomu Gomu no Pistol', 9, 9, 9, 19, 100),
('Zoro', 'One Piece', 'True Neutral', 'Santoryu', 10, 9, 9, 19, 100),
('Sanji', 'One Piece', 'Chaotic Good', 'Diable Jambe', 9, 10, 9, 19, 100),
('Nami', 'One Piece', 'Chaotic Good', 'Thunderbolt Tempo', 7, 7, 10, 17, 100),
('Usopp', 'One Piece', 'Chaotic Good', 'Kabuto', 7, 7, 7, 15, 100),
('Chopper', 'One Piece', 'Neutral Good', 'Heavy Point', 6, 6, 8, 15, 100),
('Robin', 'One Piece', 'Neutral Good', 'Mil Fleurs', 10, 7, 10, 19, 100),
('Franky', 'One Piece', 'Chaotic Good', 'Coup de Vent', 8, 8, 10, 17, 100),
('Brook', 'One Piece', 'Chaotic Good', 'Yomi Yomi no Mi', 7, 10, 10, 17, 100),
('Shanks', 'One Piece', 'Chaotic Good', 'Haoshoku Haki', 10, 10, 10, 19, 100),
('Whitebeard', 'One Piece', 'Chaotic Good', 'Gura Gura no Mi', 10, 10, 10, 20, 100),
('Kaido', 'One Piece', 'Chaotic Evil', 'Boro Breath', 10, 10, 10, 20, 100),
('Big Mom', 'One Piece', 'Chaotic Evil', 'Soru Soru no Mi', 10, 10, 10, 20, 100),
('Blackbeard', 'One Piece', 'Chaotic Evil', 'Gura Gura no Mi', 9, 9, 9, 18, 100),
('Akainu', 'One Piece', 'Lawful Evil', 'Magu Magu no Mi', 10, 7, 10, 19, 100),
('Kizaru', 'One Piece', 'Lawful Neutral', 'Pika Pika no Mi', 10, 10, 7, 19, 100),
('Aokiji', 'One Piece', 'Lawful Neutral', 'Hie Hie no Mi',7, 10, 10, 19, 100)
