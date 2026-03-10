-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS brecho_luxo_react;
USE brecho_luxo;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    designer VARCHAR(100),
    categoria VARCHAR(50),
    condicao VARCHAR(50),
    ano VARCHAR(20),
    imagens JSON, -- Array de URLs das imagens
    destaque BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de detalhes dos produtos
CREATE TABLE produto_detalhes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    detalhe VARCHAR(255) NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);

-- Tabela de carrinho
CREATE TABLE carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
    UNIQUE KEY unique_usuario_produto (usuario_id, produto_id)
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status ENUM('aguardando pagamento', 'pago', 'enviado', 'entregue', 'cancelado') DEFAULT 'aguardando pagamento',
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de itens do pedido
CREATE TABLE pedido_itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    nome VARCHAR(200) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE
);

-- Inserir alguns produtos de exemplo
INSERT INTO produtos (nome, descricao, preco, designer, categoria, condicao, ano, imagens, destaque) VALUES
('Bolsa Chanel Vintage', 'Bolsa clássica da Chanel em couro matelassê, edição limitada dos anos 90', 8500.00, 'Chanel', 'Bolsas', 'Excelente', '1995', '["https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500", "https://images.unsplash.com/photo-1584917865442-89b86a0b3d1a?w=500"]', true),
('Relógio Rolex Datejust', 'Relógio Rolex Datejust em aço inoxidável com mostrador prata', 32000.00, 'Rolex', 'Relógios', 'Ótima', '2010', '["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500", "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500"]', true),
('Vestido Dior Couture', 'Vestido longo Dior em seda natural, coleção limitada', 12900.00, 'Dior', 'Vestuário', 'Excelente', '2018', '["https://images.unsplash.com/photo-1550639525-c97d455acf70?w=500", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500"]', true),
('Sapatos Louboutin', 'Scarpins Christian Louboutin com sola vermelha característica', 4200.00, 'Christian Louboutin', 'Calçados', 'Ótima', '2020', '["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"]', true),
('Bolsa Louis Vuitton Speedy', 'Bolsa Louis Vuitton Speedy 30 em monogram canvas', 7200.00, 'Louis Vuitton', 'Bolsas', 'Ótima', '2015', '["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500", "https://images.unsplash.com/photo-1584917865442-89b86a0b3d1a?w=500"]', true);

-- Inserir detalhes dos produtos
INSERT INTO produto_detalhes (produto_id, detalhe) VALUES
(1, 'Couro legítimo'),
(1, 'Corrente banhada a ouro'),
(1, 'Logo CC frontal'),
(1, 'Forro interno em seda'),
(2, 'Movimento automático'),
(2, 'Caixa 36mm'),
(2, 'Cristal safira'),
(2, 'Pulseira Jubilee'),
(3, 'Seda pura'),
(3, 'Feito à mão'),
(3, 'Detalhes em renda'),
(3, 'Forro em seda'),
(4, 'Couro legítimo'),
(4, 'Sola vermelha'),
(4, 'Salto 12cm'),
(4, 'Bico fino'),
(5, 'Monogram canvas'),
(5, 'Alças em couro'),
(5, 'Fecho dourado'),
(5, 'Forro em tecido');

-- Inserir usuário admin de exemplo
INSERT INTO usuarios (nome, email, senha, isAdmin) VALUES
('Admin', 'admin@luxevintage.com', '$2a$10$XQKNREQJxQxQxQxQxQxQxQ', true); -- senha: admin123

-- Inserir usuário comum de exemplo
INSERT INTO usuarios (nome, email, senha, isAdmin) VALUES
('Cliente Teste', 'cliente@email.com', '$2a$10$XQKNREQJxQxQxQxQxQxQxQ', false); -- senha: 123456