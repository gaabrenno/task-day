# 📝 Tasks Day - Gerenciador de Tarefas

Um aplicativo de gerenciamento de tarefas desenvolvido em React para fins de estudo e aprendizado. Este projeto demonstra conceitos fundamentais do React como componentes, hooks, estado, props e roteamento.

![Tasks Day](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Funcionalidades

- ✅ **Adicionar tarefas** com título e descrição
- ✅ **Marcar tarefas como concluídas** com animação visual
- ✅ **Excluir tarefas** com confirmação visual
- ✅ **Visualizar detalhes** de cada tarefa em página separada
- ✅ **Persistência de dados** usando localStorage
- ✅ **Interface responsiva** e moderna
- ✅ **Animações e efeitos visuais** com Tailwind CSS
- ✅ **Estado vazio** com ilustração SVG personalizada

## 🛠️ Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.4.1** - Build tool e dev server
- **Tailwind CSS 4.1.11** - Framework CSS utilitário
- **React Router DOM 7.6.3** - Roteamento para aplicações React
- **Lucide React 0.525.0** - Biblioteca de ícones
- **UUID 11.1.0** - Geração de IDs únicos
- **ESLint** - Linter para qualidade de código

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/gaabrenno/task-day.git
   cd task-day
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🎯 Como Usar

### Adicionando uma Tarefa
1. Digite o título da tarefa no primeiro campo
2. Adicione uma descrição no segundo campo
3. Clique em "Adicionar" para salvar

### Gerenciando Tarefas
- **Marcar como concluída**: Clique no título da tarefa
- **Ver detalhes**: Clique no ícone de seta (→)
- **Excluir**: Clique no ícone de lixeira (🗑️)

### Navegação
- Use o botão de voltar (←) na página de detalhes para retornar à lista

## 📁 Estrutura do Projeto

```
task-day/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── day-off.svg          # Ilustração para estado vazio
│   │   └── react.svg
│   ├── components/
│   │   ├── FormTask.jsx         # Componente do formulário
│   │   └── Tasks.jsx            # Componente da lista de tarefas
│   ├── pages/
│   │   └── TaskPages.jsx        # Página de detalhes da tarefa
│   ├── App.css
│   ├── App.jsx                  # Componente principal
│   ├── index.css
│   └── main.jsx                 # Ponto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: `#00FFF7` (Ciano) - Títulos e elementos principais
- **Secundária**: `#FFD600` (Amarelo) - Tarefas pendentes
- **Sucesso**: `#40ff00` (Verde) - Tarefas concluídas
- **Perigo**: `#ff5900` (Laranja) - Botão de exclusão
- **Fundo**: `#232136` (Cinza escuro) - Container principal
- **Background**: `#18181b` (Zinc-900) - Fundo da página

### Características Visuais
- **Efeitos de sombra** com cores neon
- **Animações suaves** de transição
- **Design responsivo** para mobile e desktop
- **Ilustração SVG** para estado vazio (unDraw)
- **Ícones intuitivos** da Lucide React

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter ESLint
```

## 📚 Conceitos React Demonstrados

### Hooks Utilizados
- `useState` - Gerenciamento de estado local
- `useEffect` - Efeitos colaterais (localStorage)
- `useNavigate` - Navegação programática
- `useSearchParams` - Manipulação de parâmetros de URL

### Conceitos de Componentes
- **Componentes funcionais** com hooks
- **Props** para comunicação entre componentes
- **Event handlers** para interações do usuário
- **Renderização condicional** baseada em estado

### Gerenciamento de Estado
- **Estado local** com useState
- **Lifting state up** para compartilhar dados
- **Persistência** com localStorage
- **Imutabilidade** na atualização de arrays

## 🚀 Funcionalidades Avançadas

### Roteamento
- **React Router DOM** para navegação entre páginas
- **URL parameters** para passar dados entre rotas
- **Navegação programática** com useNavigate

### Persistência de Dados
- **localStorage** para salvar tarefas localmente
- **Sincronização automática** com useEffect
- **Recuperação de dados** ao carregar a aplicação

### UX/UI
- **Feedback visual** para ações do usuário
- **Estados de loading** e vazio
- **Validação de formulários** em tempo real
- **Design responsivo** para diferentes dispositivos

## 🤝 Contribuindo

Este é um projeto de estudo, mas contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvido por

**ARDA Innovations**

---

⭐ Se este projeto te ajudou no aprendizado de React, considere dar uma estrela no repositório!
