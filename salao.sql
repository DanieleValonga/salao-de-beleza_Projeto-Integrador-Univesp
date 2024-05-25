select @@version;
use salao;
CREATE TABLE clientes (
id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    instagram VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    idade INT,
    telefone VARCHAR(15)
);


