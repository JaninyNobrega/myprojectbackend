# 🚀 E-commerce Backend API

Bem-vindo ao backend da API do seu e-commerce! Este projeto foi desenvolvido para gerenciar produtos, categorias e autenticação de usuários, utilizando Node.js, Express, Prisma ORM e PostgreSQL.

---

## ✨ Funcionalidades

Esta API oferece os seguintes recursos:

* **Autenticação de Usuários:** Geração de tokens JWT para acesso seguro às rotas protegidas.
* **Gestão de Produtos:**
    * Criação, leitura (listagem e por ID), atualização e exclusão de produtos.
    * Gestão de imagens e opções de produtos (tamanhos, cores, etc.).
* **Gestão de Categorias:**
    * Criação, leitura (listagem e por ID), atualização e exclusão de categorias.
* **Rotas Protegidas:** Uso de middleware JWT para garantir que apenas usuários autenticados possam realizar operações sensíveis (criação, atualização e exclusão de produtos e categorias; atualização e exclusão de usuários).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express:** Framework web para Node.js, utilizado para construir a API.
* **Prisma ORM:** ORM moderno e de próxima geração para interagir com o banco de dados.
* **PostgreSQL:** Banco de dados relacional robusto.
* **JWT (JSON Web Tokens):** Para autenticação e autorização de usuários.
* **`bcrypt` (sugestão futura):** Para criptografia de senhas. (Não implementado nesta versão, senhas estão em texto plano para simplificação inicial).
* **`cors`:** Para lidar com políticas de segurança de Same-Origin Policy em requisições de front-ends.
* **`dotenv`:** Para carregar variáveis de ambiente.
* **`nodemon`:** Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

* [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior recomendada)
* [npm](https://www.npmjs.com/get-npm) (gerenciador de pacotes do Node.js)
* [PostgreSQL](https://www.postgresql.org/download/) (servidor de banco de dados)

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd myprojectbackend
