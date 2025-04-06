# ⏱️ Pomodoro App

Este é um aplicativo de Pomodoro desenvolvido com **React**, **TypeScript** e **JavaScript**, que ajuda a gerenciar seu tempo utilizando a técnica Pomodoro.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- Hooks React (`useState`, `useEffect`, `useCallback`)

## 🎯 Funcionalidades

- Timer com contagem regressiva no estilo Pomodoro
- Botões para iniciar e parar o ciclo
- Lógica separada em componentes e hooks personalizados
- Conversores de tempo (ex: segundos para minutos)
- Layout simples e intuitivo

## 📁 Estrutura do Projeto
rc/ ├── assets/ # Arquivos estáticos ├── components/ # Componentes da interface │ ├── Button.tsx │ ├── PomodoroTimer.tsx │ └── Timer.tsx ├── hooks/ # Hooks customizados │ └── use-interval.tsx ├── utils/ # Funções utilitárias │ ├── seconds-to-minutes.ts │ ├── seconds-to-time.ts │ └── zero-left.ts ├── App.tsx # Componente principal ├── main.tsx # Ponto de entrada da aplicação └── index.css # Estilos globais.


▶️ Como Rodar o Projeto

1. Clone o repositório:
   git clone.
   cd seu-repositorio

Instale as dependências:
yarn

Inicie o servidor de desenvolvimento:
yarn dev

