# Primeiros Passos com a Aplicação

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia a aplicação em modo de desenvolvimento.<br>
Por padrão, estará acessível em: [http://localhost:3000](http://localhost:3000)

### `npm test`

Executa o test runner (executador de testes).

### `npm run build`

Compila a aplicação para produção na pasta `dist`.<br>
A versão é minificada e os nomes dos arquivos incluem hashes.<br>
Sua aplicação está pronta para ser implantada!

## Desenvolvimento

**Pré-requisitos:**  
Certifique-se de ter o Node.js 14, npm e Docker instalados.

1. **Instalar o Yarn**
```bash
npm install -g yarn

2. **Instalar dependências**
```bash
npm install -g yarn

3. **Gerar o cliente do Prisma**
```bash
npm run prisma:generate

4. **Iniciar o banco de dados no Docker**
```bash
npm run docker:db

5. **Inicializar o banco de dados**
```bash
npm run db:init

6. **Iniciar o servidor**
```bash
npm start


