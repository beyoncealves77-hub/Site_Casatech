// ATUALIZAÇÃO 17/11 - PRODUTOS REAIS DA CASATECH
const produtos = {

    1: {
        categoria: "CELULARES",
        nome: "Smartphone Premium 256 GB",
        preco: "R$ 11.999,00",
        descricao: "Smartphone premium com acabamento moderno, câmera avançada e alto desempenho.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Bordô",
                especificacao: "Cor bordô • 256 GB",
                imagem: "../imagens/smartphone-premium-bordo.jpg"
            },
            {
                nome: "Rosa",
                especificacao: "Cor rosa • 256 GB",
                imagem: "../imagens/smartphone-premium-rosa.jpg"
            }
        ]
    },

    2: {
        categoria: "CELULARES",
        nome: "Galaxy S26 Ultra",
        preco: "R$ 8.999,00",
        descricao: "Smartphone premium com tela ampla, câmera avançada e caneta integrada.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Roxo",
                especificacao: "Cor roxa • Linha Ultra",
                imagem: "../imagens/smartphone-galaxy-s26-ultra-roxo.jpg"
            },
            {
                nome: "Branco",
                especificacao: "Cor branca • Linha Ultra",
                imagem: "../imagens/smartphone-galaxy-s26-ultra-branco.jpg"
            },
            {
                nome: "Azul",
                especificacao: "Cor azul • Linha Ultra",
                imagem: "../imagens/smartphone-galaxy-s26-ultra-azul.jpg"
            }
        ]
    },

    3: {
        categoria: "ELETROS",
        nome: "Robô Aspirador Inteligente",
        preco: "R$ 2.499,00",
        descricao: "Robô aspirador inteligente para limpeza automática da casa.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Preto",
                especificacao: "Modelo preto com base",
                imagem: "../imagens/robo-aspirador-preto.jpg"
            },
            {
                nome: "Branco",
                especificacao: "Modelo branco com base",
                imagem: "../imagens/robo-aspirador-branco.jpg"
            },
            {
                nome: "Premium",
                especificacao: "Modelo premium preto com estação",
                imagem: "../imagens/robo-aspirador-premium-preto.jpg"
            }
        ]
    },

    4: {
        categoria: "ELETROS",
        nome: "Geladeira Smart",
        preco: "R$ 6.999,00",
        descricao: "Geladeira moderna com amplo espaço interno e acabamento premium.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Inox 1",
                especificacao: "Acabamento inox • 3 portas",
                imagem: "../imagens/geladeira-smart-inox-01.jpg"
            },
            {
                nome: "Inox 2",
                especificacao: "Acabamento inox • painel frontal",
                imagem: "../imagens/geladeira-smart-inox-02.jpg"
            },
            {
                nome: "Preta",
                especificacao: "Acabamento preto • 4 portas",
                imagem: "../imagens/geladeira-smart-preta.jpg"
            }
        ]
    },

    5: {
        categoria: "ACESSÓRIOS",
        nome: "Óculos de Realidade Virtual",
        preco: "R$ 399,00",
        descricao: "Óculos de realidade virtual para experiências imersivas com smartphone.",
        temTamanho: false,
        variacoes: [
            {
                nome: "VR Box 1",
                especificacao: "Modelo com controle",
                imagem: "../imagens/oculos-vr-01.jpg"
            },
            {
                nome: "VR Box 2",
                especificacao: "Modelo VR Box com controle",
                imagem: "../imagens/oculos-vr-02.jpg"
            },
            {
                nome: "VR Box 3",
                especificacao: "Modelo para smartphone",
                imagem: "../imagens/oculos-vr-03.jpg"
            }
        ]
    },

    6: {
        categoria: "ACESSÓRIOS",
        nome: "Fone Bluetooth",
        preco: "R$ 899,00",
        descricao: "Fone de ouvido sem fio com estojo de carregamento.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Preto",
                especificacao: "Cor preta",
                imagem: "../imagens/fone-bluetooth-preto.jpg"
            },
            {
                nome: "Rosa",
                especificacao: "Cor rosa",
                imagem: "../imagens/fone-bluetooth-rosa.jpg"
            },
            {
                nome: "Branco",
                especificacao: "Cor branca",
                imagem: "../imagens/fone-bluetooth-branco.jpg"
            }
        ]
    },

    7: {
        categoria: "INFORMÁTICA",
        nome: "Teclado Mecânico Compacto",
        preco: "R$ 349,00",
        descricao: "Teclado compacto para jogos, estudos e produtividade.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Branco",
                especificacao: "Teclado compacto branco",
                imagem: "../imagens/teclado-mecanico-branco.jpg"
            },
            {
                nome: "Preto",
                especificacao: "Teclado compacto preto",
                imagem: "../imagens/teclado-mecanico-preto.jpg"
            },
            {
                nome: "Rosa",
                especificacao: "Teclado compacto rosa",
                imagem: "../imagens/teclado-mecanico-rosa.jpg"
            }
        ]
    },

    8: {
        categoria: "ELETROS",
        nome: "Smart TV 4K",
        preco: "R$ 3.299,00",
        descricao: "Smart TV para filmes, séries, aplicativos e entretenimento.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Modelo 1",
                especificacao: "Tela ampla • acabamento preto",
                imagem: "../imagens/smart-tv-01.jpg"
            },
            {
                nome: "Modelo 2",
                especificacao: "Smart Hub e aplicativos",
                imagem: "../imagens/smart-tv-02.jpg"
            },
            {
                nome: "Modelo 3",
                especificacao: "Design fino",
                imagem: "../imagens/smart-tv-03.jpg"
            }
        ]
    },

    9: {
        categoria: "INFORMÁTICA",
        nome: "Notebook",
        preco: "R$ 5.499,00",
        descricao: "Notebook para estudos, trabalho e uso diário.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Rosa",
                especificacao: "Acabamento rosa",
                imagem: "../imagens/notebook-rosa.jpg"
            },
            {
                nome: "Preto",
                especificacao: "Acabamento preto",
                imagem: "../imagens/notebook-preto.jpg"
            }
        ]
    },

    10: {
        categoria: "ACESSÓRIOS",
        nome: "Smart Speaker com Relógio",
        preco: "R$ 699,00",
        descricao: "Caixa de som inteligente com relógio digital e assistente de voz.",
        temTamanho: false,
        variacoes: [
            {
                nome: "Branco",
                especificacao: "Cor branca",
                imagem: "../imagens/smart-speaker-branco.jpg"
            },
            {
                nome: "Rosa",
                especificacao: "Cor rosa",
                imagem: "../imagens/smart-speaker-rosa.jpg"
            },
            {
                nome: "Preto",
                especificacao: "Cor preta",
                imagem: "../imagens/smart-speaker-preto.jpg"
            }
        ]
    }

};



// PEGA O ID DA URL

const parametros =
    new URLSearchParams(window.location.search);


// SE ABRIR DIRETO SEM ID,
// CARREGA O PRODUTO 1

const id =
    parametros.get("id") || "1";


const produto =
    produtos[id] || produtos[1];



carregarProduto();



// CARREGA AS INFORMAÇÕES

function carregarProduto() {


    document
        .getElementById("categoriaProduto")
        .textContent =
        produto.categoria;


    document
        .getElementById("nomeProduto")
        .textContent =
        produto.nome;


    document
        .getElementById("precoProduto")
        .textContent =
        produto.preco;


    document
        .getElementById("descricaoProduto")
        .textContent =
        produto.descricao;


    criarMiniaturas();

    configurarTamanhos();

}



// CRIA AS MINIATURAS

function criarMiniaturas() {


    let area =
        document.getElementById("miniaturas");


    area.innerHTML = "";


    produto.variacoes.forEach(
        function(variacao) {


            let imagem =
                document.createElement("img");


            imagem.src =
                variacao.imagem;


            imagem.alt =
                variacao.nome;


            imagem.dataset.nome =
                variacao.nome;


            imagem.dataset.especificacao =
                variacao.especificacao;


            imagem.onclick =
                function() {

                    trocarModelo(imagem);

                };


            area.appendChild(imagem);

        }
    );


    let primeiraImagem =
        area.querySelector("img");


    if (primeiraImagem) {

        trocarModelo(primeiraImagem);

    }

}



// TROCA O MODELO

function trocarModelo(imagem) {


    document
        .getElementById("imagemPrincipal")
        .src =
        imagem.src;


    document
        .getElementById("nomeModelo")
        .textContent =
        imagem.dataset.nome;


    document
        .getElementById("especificacaoModelo")
        .textContent =
        imagem.dataset.especificacao;


    let miniaturas =
        document.querySelectorAll(
            ".miniaturas img"
        );


    miniaturas.forEach(function(item) {

        item.classList.remove(
            "selecionada"
        );

    });


    imagem.classList.add(
        "selecionada"
    );

}



// TAMANHOS

function configurarTamanhos() {


    let area =
        document.getElementById(
            "areaTamanhos"
        );


    let tamanhos =
        document.getElementById(
            "tamanhos"
        );


    tamanhos.innerHTML = "";


    if (produto.temTamanho === true) {


        area.style.display =
            "block";


        produto.tamanhos.forEach(
            function(tamanho) {


                let botao =
                    document.createElement(
                        "button"
                    );


                botao.textContent =
                    tamanho;


                botao.onclick =
                    function() {

                        selecionarTamanho(
                            botao
                        );

                    };


                tamanhos.appendChild(
                    botao
                );

            }
        );


    } else {


        area.style.display =
            "none";

    }

}



// SELECIONA TAMANHO

function selecionarTamanho(botao) {


    let botoes =
        document.querySelectorAll(
            ".tamanhos button"
        );


    botoes.forEach(function(item) {

        item.classList.remove(
            "selecionado"
        );

    });


    botao.classList.add(
        "selecionado"
    );

}