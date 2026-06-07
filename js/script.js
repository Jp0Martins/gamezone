/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: GameZone Arena - Portal de Games
Aluno 1: João Pedro Pereira Martins - RA: 251530
Aluno 2: Vinícius Nucci Galvão - RA: 252127
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// ================================================
// FUNCIONALIDADE 1 — BOTÃO VOLTAR AO TOPO
// ================================================
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================================
// FUNCIONALIDADE 2 — ALTERNAR TEMA CLARO / ESCURO
// ================================================
const btnTema = document.querySelector('#btnTema');

if (btnTema) {
    // Verifica se o usuário já tinha preferência salva
    const temaSalvo = localStorage.getItem('gamezone-tema');
    if (temaSalvo === 'claro') {
        document.body.classList.add('tema-claro');
        btnTema.textContent = '☀️';
    }

    btnTema.addEventListener('click', function () {
        document.body.classList.toggle('tema-claro');
        const temaNovo = document.body.classList.contains('tema-claro') ? 'claro' : 'escuro';
        localStorage.setItem('gamezone-tema', temaNovo);
        btnTema.textContent = temaNovo === 'claro' ? '☀️' : '🌙';
    });
}

// ================================================
// FUNCIONALIDADE 3 — VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ================================================
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();
        const alerta = document.querySelector('#alertaSucesso');

        if (nome === '' || email === '' || mensagem === '') {
            alert('⚠️ Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação básica de e-mail via pattern
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('⚠️ Por favor, insira um e-mail válido.');
            return;
        }

        // Exibe mensagem de sucesso
        if (alerta) {
            alerta.classList.add('show');
            setTimeout(function () {
                alerta.classList.remove('show');
            }, 4000);
        }

        formulario.reset();
    });
}

// ================================================
// FUNCIONALIDADE 4 — DESTAQUE VISUAL NOS CARDS DA GALERIA
// ================================================
const cardsGaleria = document.querySelectorAll('.card-jogo, .card-lancamento');

cardsGaleria.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function () {
        card.classList.remove('card-destaque-js');
    });
});

// ================================================
// FUNCIONALIDADE 5 — FILTROS DE CATEGORIA NA GALERIA
// ================================================
const botoesFiltr = document.querySelectorAll('.btn-filtro');
const itensGaleria = document.querySelectorAll('[data-categoria]');

botoesFiltr.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Remove ativo de todos
        botoesFiltr.forEach(function (b) { b.classList.remove('ativo'); });
        btn.classList.add('ativo');

        const filtro = btn.getAttribute('data-filtro');

        itensGaleria.forEach(function (item) {
            if (filtro === 'todos' || item.getAttribute('data-categoria') === filtro) {
                item.style.display = '';
                item.style.animation = 'aparecer 0.4s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ================================================
// FUNCIONALIDADE 6 — MARCAR LINK ATIVO NO MENU
// ================================================
const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
const linksNav = document.querySelectorAll('.nav-link');

linksNav.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
        link.classList.add('ativo-link');
    }
});

// ================================================
// FUNCIONALIDADE 7 — ANIMAÇÃO AO ROLAR (INTERSECTION OBSERVER)
// ================================================
const elementosAnimados = document.querySelectorAll('.card-jogo, .card-lancamento, .stat-item, .info-item');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'aparecer 0.6s ease both';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementosAnimados.forEach(function (el) {
        observer.observe(el);
    });
}
