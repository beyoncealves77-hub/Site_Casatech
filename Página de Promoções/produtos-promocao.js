// ATUALIZAÇÃO 01/09 - TODO ESTE ARQUIVO FOI CRIADO NESTA ATUALIZAÇÃO

// ATUALIZAÇÃO 17/11 - PRODUTOS PROMOCIONAIS DA CASATECH
const produtosPromocao = {

    1: {
        categoria: "ACESSÓRIOS",
        nome: "Câmera Instax Mini",
        precoOriginal: "R$ 899,00",
        precoPromocional: "R$ 749,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Câmera instantânea compacta para registrar e imprimir momentos.",
        temTamanho: false,
        variacoes: [
            { nome: "Branca", especificacao: "Kit branco", imagem: "../imagens/camera-instax-branca.jpg" },
            { nome: "Rosa", especificacao: "Kit rosa", imagem: "../imagens/camera-instax-rosa.jpg" },
            { nome: "Azul", especificacao: "Kit azul", imagem: "../imagens/camera-instax-azul.jpg" }
        ]
    },

    2: {
        categoria: "ACESSÓRIOS",
        nome: "Smartwatch",
        precoOriginal: "R$ 1.299,00",
        precoPromocional: "R$ 999,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Relógio inteligente para notificações, atividades e rotina.",
        temTamanho: false,
        variacoes: [
            { nome: "Preto", especificacao: "Pulseira preta", imagem: "../imagens/smartwatch-preto.jpg" },
            { nome: "Rosa", especificacao: "Pulseira rosa", imagem: "../imagens/smartwatch-rosa.jpg" },
            { nome: "Roxo", especificacao: "Pulseira roxa", imagem: "../imagens/smartwatch-roxo.jpg" }
        ]
    },

    3: {
        categoria: "ACESSÓRIOS",
        nome: "Fone Bluetooth",
        precoOriginal: "R$ 999,00",
        precoPromocional: "R$ 799,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Fone sem fio com estojo de carregamento.",
        temTamanho: false,
        variacoes: [
            { nome: "Preto", especificacao: "Cor preta", imagem: "../imagens/fone-bluetooth-preto.jpg" },
            { nome: "Rosa", especificacao: "Cor rosa", imagem: "../imagens/fone-bluetooth-rosa.jpg" },
            { nome: "Branco", especificacao: "Cor branca", imagem: "../imagens/fone-bluetooth-branco.jpg" }
        ]
    },

    4: {
        categoria: "ACESSÓRIOS",
        nome: "Carregador USB-C",
        precoOriginal: "R$ 199,00",
        precoPromocional: "R$ 149,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Carregador compacto com cabo USB-C para uso diário.",
        temTamanho: false,
        variacoes: [
            { nome: "Preto", especificacao: "Carregador preto", imagem: "../imagens/carregador-usbc-preto.jpg" },
            { nome: "Rosa", especificacao: "Carregador rosa", imagem: "../imagens/carregador-usbc-rosa.jpg" },
            { nome: "Branco", especificacao: "Carregador branco", imagem: "../imagens/carregador-usbc-branco.jpg" }
        ]
    },

    5: {
        categoria: "ACESSÓRIOS",
        nome: "Carregador Lightning",
        precoOriginal: "R$ 249,00",
        precoPromocional: "R$ 189,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Carregador com cabo Lightning para dispositivos compatíveis.",
        temTamanho: false,
        variacoes: [
            { nome: "Modelo 1", especificacao: "Kit branco", imagem: "../imagens/carregador-lightning-branco-01.jpg" },
            { nome: "Modelo 2", especificacao: "Kit branco com cabo", imagem: "../imagens/carregador-lightning-branco-02.jpg" }
        ]
    },

    6: {
        categoria: "ACESSÓRIOS",
        nome: "Caixa de Som JBL",
        precoOriginal: "R$ 599,00",
        precoPromocional: "R$ 449,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Caixa de som portátil para música e entretenimento.",
        temTamanho: false,
        variacoes: [
            { nome: "Branca", especificacao: "Cor branca", imagem: "../imagens/caixa-som-jbl-branca.jpg" }
        ]
    },

    7: {
        categoria: "ACESSÓRIOS",
        nome: "Tablet",
        precoOriginal: "R$ 2.499,00",
        precoPromocional: "R$ 1.999,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Tablet para estudos, leitura, vídeos e produtividade.",
        temTamanho: false,
        variacoes: [
            { nome: "Rosa", especificacao: "Tablet rosa com caneta", imagem: "../imagens/tablet-rosa.jpg" },
            { nome: "Branco", especificacao: "Tablet branco", imagem: "../imagens/tablet-branco.jpg" }
        ]
    },

    8: {
        categoria: "ACESSÓRIOS",
        nome: "Óculos de Realidade Virtual",
        precoOriginal: "R$ 499,00",
        precoPromocional: "R$ 349,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Óculos VR para experiências imersivas com smartphone.",
        temTamanho: false,
        variacoes: [
            { nome: "Modelo 1", especificacao: "VR Box com controle", imagem: "../imagens/oculos-vr-01.jpg" },
            { nome: "Modelo 2", especificacao: "VR Box", imagem: "../imagens/oculos-vr-02.jpg" },
            { nome: "Modelo 3", especificacao: "VR para smartphone", imagem: "../imagens/oculos-vr-03.jpg" }
        ]
    },

    9: {
        categoria: "TECNOLOGIA",
        nome: "PlayStation 5",
        precoOriginal: "R$ 4.999,00",
        precoPromocional: "R$ 4.299,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Console de nova geração para jogos e entretenimento.",
        temTamanho: false,
        variacoes: [
            { nome: "Modelo 1", especificacao: "Console com controles", imagem: "../imagens/console-ps5-01.jpg" },
            { nome: "Modelo 2", especificacao: "Edição digital", imagem: "../imagens/console-ps5-02.jpg" },
            { nome: "Modelo 3", especificacao: "Edição com leitor", imagem: "../imagens/console-ps5-03.jpg" }
        ]
    },

    10: {
        categoria: "TECNOLOGIA",
        nome: "Impressora HP",
        precoOriginal: "R$ 899,00",
        precoPromocional: "R$ 699,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Impressora para trabalhos, estudos e uso doméstico.",
        temTamanho: false,
        variacoes: [
            { nome: "Preta 1", especificacao: "Modelo preto", imagem: "../imagens/impressora-hp-preta-01.jpg" },
            { nome: "Branca", especificacao: "Modelo branco", imagem: "../imagens/impressora-hp-branca.jpg" },
            { nome: "Preta 2", especificacao: "Modelo preto compacto", imagem: "../imagens/impressora-hp-preta-02.jpg" }
        ]
    },

    11: {
        categoria: "TECNOLOGIA",
        nome: "Monitor Gamer",
        precoOriginal: "R$ 1.899,00",
        precoPromocional: "R$ 1.499,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Monitor para jogos e produtividade com tela ampla.",
        temTamanho: false,
        variacoes: [
            { nome: "Gamer", especificacao: "Monitor gamer", imagem: "../imagens/monitor-gamer.jpg" },
            { nome: "Branco", especificacao: "Setup com monitor branco", imagem: "../imagens/setup-monitor-branco.jpg" }
        ]
    },

    12: {
        categoria: "TECNOLOGIA",
        nome: "Desktop Completo",
        precoOriginal: "R$ 4.299,00",
        precoPromocional: "R$ 3.599,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Computador completo para estudos, trabalho e uso diário.",
        temTamanho: false,
        variacoes: [
            { nome: "Modelo 1", especificacao: "Desktop completo", imagem: "../imagens/desktop-completo-01.jpg" },
            { nome: "Dell 1", especificacao: "Desktop Dell", imagem: "../imagens/desktop-dell-01.jpg" },
            { nome: "Dell 2", especificacao: "Desktop Dell com monitor", imagem: "../imagens/desktop-dell-02.jpg" }
        ]
    },

    13: {
        categoria: "TECNOLOGIA",
        nome: "Mouse Sem Fio",
        precoOriginal: "R$ 199,00",
        precoPromocional: "R$ 139,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Mouse sem fio compacto para trabalho e estudos.",
        temTamanho: false,
        variacoes: [
            { nome: "Branco", especificacao: "Cor branca", imagem: "../imagens/mouse-branco.jpg" },
            { nome: "Rosa", especificacao: "Cor rosa", imagem: "../imagens/mouse-rosa.jpg" },
            { nome: "Azul", especificacao: "Cor azul", imagem: "../imagens/mouse-azul.jpg" }
        ]
    },

    14: {
        categoria: "TECNOLOGIA",
        nome: "Notebook",
        precoOriginal: "R$ 5.999,00",
        precoPromocional: "R$ 5.199,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Notebook para estudos, trabalho e produtividade.",
        temTamanho: false,
        variacoes: [
            { nome: "Rosa", especificacao: "Acabamento rosa", imagem: "../imagens/notebook-rosa.jpg" },
            { nome: "Preto", especificacao: "Acabamento preto", imagem: "../imagens/notebook-preto.jpg" }
        ]
    },

    15: {
        categoria: "TECNOLOGIA",
        nome: "Smart TV 4K",
        precoOriginal: "R$ 3.799,00",
        precoPromocional: "R$ 3.099,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Smart TV para filmes, séries, aplicativos e entretenimento.",
        temTamanho: false,
        variacoes: [
            { nome: "Modelo 1", especificacao: "Tela ampla", imagem: "../imagens/smart-tv-01.jpg" },
            { nome: "Modelo 2", especificacao: "Smart Hub", imagem: "../imagens/smart-tv-02.jpg" },
            { nome: "Modelo 3", especificacao: "Design fino", imagem: "../imagens/smart-tv-03.jpg" }
        ]
    },

    16: {
        categoria: "TECNOLOGIA",
        nome: "Robô Aspirador Inteligente",
        precoOriginal: "R$ 2.899,00",
        precoPromocional: "R$ 2.299,00",
        desconto: "OFERTA",
        validade: "30/11/2026",
        descricao: "Robô aspirador inteligente para automatizar a limpeza da casa.",
        temTamanho: false,
        variacoes: [
            { nome: "Preto", especificacao: "Modelo preto", imagem: "../imagens/robo-aspirador-preto.jpg" },
            { nome: "Branco", especificacao: "Modelo branco", imagem: "../imagens/robo-aspirador-branco.jpg" },
            { nome: "Premium", especificacao: "Estação premium", imagem: "../imagens/robo-aspirador-premium-preto.jpg" }
        ]
    }

};

// ATUALIZAÇÃO 01/09 - SOMENTE AS DUAS CATEGORIAS QUE FICARAM NA PÁGINA DE PROMOÇÕES
const categoriasPromocao = ["ACESSÓRIOS", "TECNOLOGIA"];

// ATUALIZAÇÃO 01/09 - CONTROLA QUAIS CARROSSÉIS PODEM SE MOVIMENTAR
const carrosseisAtivos = {};

// ATUALIZAÇÃO 01/09 - CONTROLA A MOVIMENTAÇÃO AUTOMÁTICA
const intervalosCarrosseis = {};

// ATUALIZAÇÃO 01/09 - CRIA OS CARDS A PARTIR DOS PRODUTOS CADASTRADOS
function criarCardsPromocao() {
    categoriasPromocao.forEach(function(categoria) {
        const categoriaNormalizada = normalizarCategoria(categoria);
        const carrossel = document.getElementById("carrossel-" + categoriaNormalizada);

        if (!carrossel) {
            return;
        }

        carrossel.innerHTML = "";

        Object.keys(produtosPromocao).forEach(function(id) {
            const produto = produtosPromocao[id];

            if (produto.categoria !== categoria) {
                return;
            }

            const card = document.createElement("article");
            card.className = "card-promocao";
            card.dataset.produtoId = id;
            card.onclick = function() {
                abrirProdutoPromocao(id);
            };

            const imagem = produto.variacoes[0].imagem;

            card.innerHTML = `
                <span class="selo-desconto">${produto.desconto}</span>
                <img src="${imagem}" alt="${produto.nome}" loading="lazy">
                <div class="conteudo-card">
                    <p class="categoria-card">${produto.categoria}</p>
                    <h3>${produto.nome}</h3>
                    <p class="preco-antigo">${produto.precoOriginal}</p>
                    <p class="preco-promocional">${produto.precoPromocional}</p>
                    <p class="validade-promocao">Oferta até ${produto.validade}</p>
                    <button type="button">VER PRODUTO</button>
                </div>
            `;

            carrossel.appendChild(card);
        });

        configurarCarrossel(categoriaNormalizada);
    });
}

// ATUALIZAÇÃO 01/09 - TRANSFORMA O NOME DA CATEGORIA NO ID USADO PELO HTML
function normalizarCategoria(categoria) {
    return categoria
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// ATUALIZAÇÃO 01/09 - MOSTRA AUTOMATICAMENTE A QUANTIDADE REAL DE PRODUTOS DA CATEGORIA
function atualizarQuantidadeCategoria(categoria, quantidade) {
    const textoQuantidade = document.getElementById("quantidade-" + categoria);

    if (!textoQuantidade) {
        return;
    }

    if (quantidade === 1) {
        textoQuantidade.textContent = "1 produto em promoção";
    } else {
        textoQuantidade.textContent = quantidade + " produtos em promoção";
    }
}

// ATUALIZAÇÃO 01/09 - ADAPTA O CARROSSEL À QUANTIDADE DE PRODUTOS CADASTRADOS
function configurarCarrossel(categoria) {
    const carrossel = document.getElementById("carrossel-" + categoria);
    const janela = document.getElementById("janela-" + categoria);
    const secao = document.getElementById("secao-" + categoria);

    if (!carrossel || !janela || !secao) {
        return;
    }

    const quantidade = carrossel.querySelectorAll(".card-promocao").length;
    const setas = secao.querySelectorAll(".seta-carrossel");

    atualizarQuantidadeCategoria(categoria, quantidade);

    // ATUALIZAÇÃO 01/09 - SE A CATEGORIA FICAR SEM PRODUTOS, A SEÇÃO SOME SEM QUEBRAR A PÁGINA
    if (quantidade === 0) {
        secao.style.display = "none";
        carrosseisAtivos[categoria] = false;
        pararCarrossel(categoria);
        return;
    }

    secao.style.display = "block";

    // ATUALIZAÇÃO 01/09 - DE 1 A 3 PRODUTOS O CARROSSEL FICA PARADO E CENTRALIZADO
    if (quantidade < 4) {
        carrosseisAtivos[categoria] = false;
        carrossel.classList.add("carrossel-parado");
        carrossel.classList.remove("carrossel-quatro");

        setas.forEach(function(seta) {
            seta.classList.add("oculta");
        });

        pararCarrossel(categoria);
        janela.scrollTo({ left: 0 });
        return;
    }

    // ATUALIZAÇÃO 01/09 - COM 4 OU MAIS PRODUTOS O CARROSSEL CONTINUA ATIVO
    carrosseisAtivos[categoria] = true;
    carrossel.classList.remove("carrossel-parado");
    carrossel.classList.toggle("carrossel-quatro", quantidade === 4);

    setas.forEach(function(seta) {
        seta.classList.remove("oculta");
    });

    iniciarCarrossel(categoria);
}

// ATUALIZAÇÃO 01/09 - ABRE A COMPRA DO PRODUTO PROMOCIONAL PELO ID
function abrirProdutoPromocao(id) {
    window.location.href = "compra-promocao.html?id=" + id;
}

// ATUALIZAÇÃO 01/09 - MOVE O CARROSSEL E REPETE AO CHEGAR NO FINAL
function moverCarrossel(categoria, direcao) {
    if (carrosseisAtivos[categoria] !== true) {
        return;
    }

    const janela = document.getElementById("janela-" + categoria);
    const carrossel = document.getElementById("carrossel-" + categoria);

    if (!janela || !carrossel) {
        return;
    }

    const primeiroCard = carrossel.querySelector(".card-promocao");

    if (!primeiroCard) {
        return;
    }

    const estiloCarrossel = window.getComputedStyle(carrossel);
    const espaco = parseFloat(estiloCarrossel.gap) || 20;
    const passo = primeiroCard.offsetWidth + espaco;
    const limite = janela.scrollWidth - janela.clientWidth;

    if (direcao > 0 && janela.scrollLeft >= limite - 10) {
        janela.scrollTo({ left: 0, behavior: "smooth" });
        return;
    }

    if (direcao < 0 && janela.scrollLeft <= 10) {
        janela.scrollTo({ left: limite, behavior: "smooth" });
        return;
    }

    janela.scrollBy({
        left: passo * direcao,
        behavior: "smooth"
    });
}

// ATUALIZAÇÃO 01/09 - INICIA A MOVIMENTAÇÃO AUTOMÁTICA SOMENTE QUANDO HÁ 4 OU MAIS PRODUTOS
function iniciarCarrossel(categoria) {
    pararCarrossel(categoria);

    if (carrosseisAtivos[categoria] !== true) {
        return;
    }

    intervalosCarrosseis[categoria] = setInterval(function() {
        moverCarrossel(categoria, 1);
    }, 3500);
}

// ATUALIZAÇÃO 01/09 - PAUSA A MOVIMENTAÇÃO AUTOMÁTICA
function pararCarrossel(categoria) {
    if (intervalosCarrosseis[categoria]) {
        clearInterval(intervalosCarrosseis[categoria]);
        intervalosCarrosseis[categoria] = null;
    }
}

// ATUALIZAÇÃO 01/09 - INICIA A PÁGINA DE PROMOÇÕES SEM DEPENDER DE UMA QUANTIDADE FIXA DE PRODUTOS
document.addEventListener("DOMContentLoaded", function() {
    const paginaPromocoes = document.getElementById("carrossel-acessorios");

    if (!paginaPromocoes) {
        return;
    }

    criarCardsPromocao();
});
