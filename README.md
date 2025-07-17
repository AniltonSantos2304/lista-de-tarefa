# Gerenciador de Tarefas

Um aplicativo web simples e responsivo para gerenciar tarefas com diferentes níveis de prioridade.

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas com definição de prioridade
- ✅ Visualizar tarefas em uma tabela organizada
- ✅ Sistema de prioridades com indicadores visuais (Alta, Média, Baixa)
- ✅ Marcar tarefas como concluídas
- ✅ Interface responsiva para todos os dispositivos
- ✅ Design moderno com Bootstrap 5

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica da aplicação
- **Bootstrap 5** - Framework CSS para design responsivo
- **Font Awesome** - Ícones (via CDN)

## 📱 Responsividade

O aplicativo foi desenvolvido com foco em responsividade:

- **Desktop/Tablet**: Layout em duas colunas lado a lado
- **Mobile**: Layout empilhado com informações condensadas
- **Adaptação automática**: Interface se ajusta conforme o tamanho da tela

## 🎨 Sistema de Prioridades

As tarefas são categorizadas por prioridade com cores distintas:

- 🔴 **Alta**: Fundo vermelho claro
- 🟡 **Média**: Fundo laranja claro  
- 🟢 **Baixa**: Fundo verde claro

## 📂 Estrutura do Projeto

```
projeto/
├── index.html          # Arquivo principal
├── css/
│   └── style.css       # Estilos customizados (opcional)
├── js/
│   └── script.js       # JavaScript da aplicação (opcional)
└── README.md           # Documentação
```

## 🚀 Como Usar

### Instalação

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Não é necessário servidor local - funciona diretamente no navegador

### Uso da Aplicação

1. **Adicionar Tarefa**:
   - Preencha o campo "Nome da Tarefa"
   - Selecione a prioridade (Alta, Média ou Baixa)
   - Clique em "Adicionar Tarefa"

2. **Visualizar Tarefas**:
   - As tarefas aparecem na tabela ao lado (ou abaixo em mobile)
   - Cada tarefa mostra nome, prioridade e botão de ação

3. **Concluir Tarefa**:
   - Clique no botão "Concluir" para remover a tarefa da lista
   - A tarefa será removida permanentemente

## 💻 Compatibilidade

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis (iOS/Android)

## 🔧 Personalização

### Cores das Prioridades

Para alterar as cores das prioridades, modifique as classes CSS:

```css
.priority-high { background-color: #ffebee; }
.priority-medium { background-color: #fff3e0; }
.priority-low { background-color: #e8f5e8; }
```

### Indicadores de Prioridade

Para alterar os círculos indicadores:

```css
.priority-high .priority-indicator { background-color: #f44336; }
.priority-medium .priority-indicator { background-color: #ff9800; }
.priority-low .priority-indicator { background-color: #4caf50; }
```

## 🚨 Limitações

- As tarefas são armazenadas apenas em memória (não persistem após refresh)
- Não há funcionalidade de edição de tarefas
- Não há sistema de categorias além das prioridades

## 📝 Melhorias Futuras

- [ ] Persistência de dados com localStorage
- [ ] Funcionalidade de edição de tarefas
- [ ] Sistema de categorias
- [ ] Filtros por prioridade
- [ ] Ordenação personalizada
- [ ] Modo escuro
- [ ] Exportação de tarefas

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor: Anilton
