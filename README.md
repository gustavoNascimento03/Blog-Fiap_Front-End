# Blog Fullstack - Projeto FIAP

Este é um projeto fullstack de um blog desenvolvido como parte do curso da FIAP. A aplicação permite a visualização, criação, edição e exclusão de posts, com um sistema de autenticação para proteger as rotas administrativas.

## 🚀 Funcionalidades

- **Visualização de Posts:** A página principal lista todos os posts consumidos de uma API.
- **CRUD Completo:**
  - **Create:** Formulário para criação de novos posts.
  - **Read:** Visualização do post completo em um modal.
  - **Update:** Formulário para edição de posts existentes.
  - **Delete:** Funcionalidade para apagar posts.
- **Sistema de Login:** Autenticação simulada no frontend para habilitar as funcionalidades de administrador (criar, editar, apagar).
- **Rotas Protegidas:** As rotas de criação (`/create-post`) e edição (`/edit-post/:id`) são acessíveis apenas para usuários autenticados.
- **Busca Dinâmica:** Campo de pesquisa para filtrar posts por palavra-chave através de uma chamada à API.
- **Ambiente Containerizado:** O backend e o banco de dados rodam em containers Docker, garantindo um ambiente de desenvolvimento consistente e preparado para deploy.

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React:** Biblioteca principal para a construção da interface.
- **Vite:** Ferramenta de build para um desenvolvimento frontend rápido.
- **React Router:** Para gerenciamento de rotas e navegação (SPA).
- **Hooks:** Uso extensivo de `useState`, `useEffect` e `useContext` para gerenciamento de estado e ciclo de vida.
- **Context API:** Para gerenciamento de estado global (autenticação e lista de posts).
- **CSS Puro:** Para estilização, com abordagem Mobile-First.

### Backend

- **Node.js:** Ambiente de execução do servidor.
- **Express.js:** Framework para a construção da API RESTful.
- **MongoDB:** Banco de dados NoSQL para armazenamento dos posts.
- **Mongoose:** ODM para modelagem e comunicação com o MongoDB.
- **Docker & Docker Compose:** Para containerização da aplicação e do banco de dados.
- **CORS:** Middleware para permitir a comunicação entre frontend e backend.

## 🏁 Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação completa (frontend e backend) na sua máquina.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando.

### 1. Backend

Primeiro, vamos iniciar o servidor da API e o banco de dados.

```bash
# 1. Clone o repositório (caso ainda não tenha)
git clone <url-do-seu-repositorio>

# 2. Navegue até a pasta do backend
cd <pasta-do-projeto>/back-end_blog

# 3. Crie o arquivo de configuração do Docker Compose
# (Este passo é necessário apenas se o docker-compose.yml não estiver no repositório)
# Crie um arquivo `docker-compose.yml` com o conteúdo que construímos.

# 4. Inicie os containers
# O --build força a reconstrução da imagem com as últimas alterações do código
docker-compose up --build
```
O backend estará rodando em `http://localhost:3000`.

### 2. Frontend

Agora, vamos iniciar a aplicação React.

```bash
# 1. Em um NOVO terminal, navegue até a pasta do frontend
cd <pasta-do-projeto>/front-end_blog

# 2. Crie o arquivo de variáveis de ambiente
# Crie um arquivo chamado `.env.local` na raiz da pasta do frontend
# e adicione a seguinte linha:
VITE_API_BASE_URL=http://localhost:3000

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```
O frontend estará acessível em `http://localhost:5174` (ou a porta indicada no terminal).

### Credenciais de Teste

Para acessar as funcionalidades de administrador, use as seguintes credenciais na página de login:

- **Usuário:** `Professor_001`
- **Senha:** `escola456` (ou a senha que você definiu no `AuthContext.jsx`)

## 🏗️ Estrutura do Frontend

O frontend foi organizado da seguinte maneira para garantir manutenibilidade e escalabilidade:

```
src/
├── Components/   # Componentes reutilizáveis (Button, Modal, PostCard, etc.)
├── contexts/     # Gerenciamento de estado global (AuthContext)
├── pages/        # Componentes que representam as páginas (Home, PostList, etc.)
└── assets/       # Imagens, fontes e outros arquivos estáticos
```

## ✒️ Autor

**Gustavo S Nascimento**