
# 🚀 E-commerce Backend API

Bem-vindo ao backend da API do seu e-commerce!  
Este projeto foi desenvolvido para gerenciar produtos, categorias e autenticação de usuários, utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**.

---

## ✨ Funcionalidades

Esta API oferece os seguintes recursos:

### Autenticação de Usuários
- Geração de tokens JWT para acesso seguro às rotas protegidas.

### Gestão de Produtos
- Criação, leitura (listagem e por ID), atualização e exclusão de produtos.
- Gestão de imagens e opções de produtos (tamanhos, cores, etc.).

### Gestão de Categorias
- Criação, leitura (listagem e por ID), atualização e exclusão de categorias.

### Rotas Protegidas
- Uso de middleware JWT para garantir que apenas usuários autenticados possam realizar operações sensíveis:
  - Criação, atualização e exclusão de produtos e categorias.
  - Atualização e exclusão de usuários.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para construção da API.
- **Prisma ORM**: ORM moderno para interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional robusto.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização.
- **bcrypt** *(sugestão futura)*: Para criptografia de senhas (não implementado ainda; senhas estão em texto plano).
- **cors**: Controle de políticas de origem cruzada.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **nodemon**: Reinício automático do servidor durante o desenvolvimento.

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 18 ou superior recomendada)
- npm (gerenciador de pacotes)
- PostgreSQL

### ▶️ Como Rodar o Projeto

Após a configuração, rode o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta definida no seu `.env`).

---

## 🧪 Endpoints da API

### Autenticação (User Token)

*Implementar especificação se necessário.*

---

### **Produtos** `/v1/product`

| Método | Endpoint             | Protegido | Descrição                                   |
|--------|----------------------|-----------|---------------------------------------------|
| GET    | /v1/product/search   | Não       | Lista produtos com opções de filtro         |
| GET    | /v1/product/:id      | Não       | Obtém um produto específico pelo ID         |
| POST   | /v1/product          | Sim       | Cria um novo produto                        |
| PUT    | /v1/product/:id      | Sim       | Atualiza um produto existente pelo ID       |
| DELETE | /v1/product/:id      | Sim       | Deleta um produto existente pelo ID         |

---

### **Categorias** `/v1/category`

| Método | Endpoint             | Protegido | Descrição                                   |
|--------|----------------------|-----------|---------------------------------------------|
| GET    | /v1/category/search  | Não       | Lista categorias com opções de filtro       |
| GET    | /v1/category/:id     | Não       | Obtém uma categoria específica pelo ID      |
| POST   | /v1/category         | Sim       | Cria uma nova categoria                     |
| PUT    | /v1/category/:id     | Sim       | Atualiza uma categoria existente pelo ID    |
| DELETE | /v1/category/:id     | Sim       | Deleta uma categoria existente pelo ID      |

---

### **Usuários** `/v1/user`

| Método | Endpoint             | Protegido | Descrição                                   |
|--------|----------------------|-----------|---------------------------------------------|
| GET    | /v1/user/:id         | Não       | Obtém informações de um usuário pelo ID     |
| POST   | /v1/user             | Não       | Cadastra um novo usuário (registro)         |
| PUT    | /v1/user/:id         | Sim       | Atualiza um usuário existente pelo ID       |
| DELETE | /v1/user/:id         | Sim       | Deleta um usuário existente pelo ID         |

---

## 👥 Equipe de Desenvolvedores

Conheça a equipe responsável por este projeto:

- **Janiny Nóbrega**: Arquitetura de rotas, configuração do `App.js`, implementação dos *Controllers* e *Middleware* de autenticação.
- **Saulo**: Especialista em TI e Prisma ORM, integração com o banco de dados.
- **Jonathas**: Responsável pela lógica de negócios e validações dos *Services*.
- **Ana**: Implementação dos *Repositories*, comunicação com o banco via Prisma.
- **Jairo**: Definição das tabelas e design do `schema.prisma`.

---

## 🤝 Contribuição

Este projeto foi desenvolvido de forma colaborativa como parte da formação Geração Tech 2.0.

---

## 📄 Licença

Projeto de estudo — **Back-End E-commerce API - Geração Tech 2.0**
