# GameZone Arena 🎮

## Tema
Portal de games com análises, galeria de novidades e lançamentos, e área de contato para a comunidade gamer.

## Integrantes
- João Pedro Pereira Martins — RA: 251530
- Vinícius Nucci Galvão — RA: 252127

## Disciplina
**Linguagens de Programação** — Professor: Abimael de Oliveira  
Data de entrega: 07/06/2026

## Páginas do Projeto
- **Home** (`index.html`) — Carrossel, apresentação, cards de destaques, chamadas para galeria e contato
- **Galeria** (`galeria.html`) — Galeria de jogos com filtros por categoria e cards de lançamentos futuros
- **Contato** (`contato.html`) — Formulário completo com validação, mapa incorporado e informações de contato

## Estrutura de Pastas
```
/projeto-af-gamezone
│
├── index.html
├── galeria.html
├── contato.html
├── README.md
│
├── /css
│   └── style.css
│
├── /js
│   └── script.js
│
└── /img
    └── (imagens via Unsplash CDN)
```

## Tecnologias Utilizadas
- HTML5 semântico (header, nav, main, section, article, figure, footer)
- CSS3 externo com variáveis, Flexbox, animações e responsividade
- Bootstrap 5.3.3 (Navbar, Carrossel, Grid, utilitários)
- JavaScript (manipulação de DOM, eventos, filtros, validação)
- Google Fonts (Rajdhani + Exo 2)
- Google Maps (iframe incorporado)

## Funcionalidades JavaScript
1. **Botão voltar ao topo** — aparece após 300px de scroll e rola suavemente
2. **Alternador de tema claro/escuro** — salva preferência no localStorage
3. **Validação do formulário** — verifica campos obrigatórios e formato de e-mail
4. **Destaque visual nos cards** — efeito ao passar o mouse via JS
5. **Filtros de categoria** — filtra os cards da galeria por gênero (RPG, Ação, etc.)
6. **Link ativo no menu** — destaca automaticamente a página atual
7. **Animação ao rolar** — Intersection Observer para animar cards ao entrarem na tela

## Efeitos Visuais CSS
- Hover com elevação nos cards (`translateY` + `box-shadow`)
- Escala de imagem no hover (`scale`)
- Gradiente em títulos com `-webkit-background-clip: text`
- Animação `@keyframes aparecer` com `opacity` + `translateY`
- Transições suaves em botões, links e bordas
- Pseudo-elemento `::after` animado no menu

## Link do Repositório
(https://github.com/Jp0Martins/gamezone)
