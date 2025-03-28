# Testes de Performance - EBAC QA

Repositório para testes de performance dos endpoints de Produtos e Clientes usando k6.

## 📋 Pré-requisitos
- Node.js 16+
- npm 9+
- Docker e Docker Compose
- k6 instalado ([Instalação](https://grafana.com/docs/k6/latest/get-started/installation/))

## 🚀 Configuração

### 1. Configurar a API
```bash
cd server
npm install
npm run docker:db
npm run db:init
npm start
```

### 2. Configurar os Testes de Performance
```bash
cd k6
npm install
```

## 🔧 Executar Testes
Na pasta `k6` execute:
```bash
npm test
```

## 📂 Estrutura do Repositório
```
.
├── server/          # API EBAC Demo Store
├── k6/              # Testes de performance
│   ├── simulations/ # Scripts de teste
│   ├── requests/    # Classes de requisições
│   └── utils/       # Utilitários
└── README.md
```

## 📊 Resultados Esperados
- Testes executando em 4 estágios de carga
- Threshold de p(99) < 1000ms
- Relatório completo no terminal

## ⁉️ Suporte
Em caso de problemas, verifique:
- API rodando em http://localhost:3000
- Banco de dados Docker em execução