document.addEventListener("DOMContentLoaded", function() {
    var containerPublicacoes = document.getElementById("container-publicacoes");
    var formularioPublicacao = document.getElementById("formulario-publicacao");
    var pesquisarInput = document.getElementById("pesquisar-input");
    var fotoUsuario = document.getElementById("foto-usuario-img");
    var botaoCadastro = document.querySelector(".botao-cadastro");

    var likeButton = null;
    var dislikeButton = null;

    formularioPublicacao.addEventListener("submit", function(e) {
        e.preventDefault();

        var nomeUsuarioInput = document.getElementById("nome-usuario");
        var mensagemInput = document.getElementById("mensagem");
        var selecaoPublicacao = document.getElementById("selecao-publicacao");

        var nomeUsuario = nomeUsuarioInput.value;
        var mensagem = mensagemInput.value;
        var publicacaoSelecionada = selecaoPublicacao.value;

        if (nomeUsuario && mensagem) {
            var publicacaoDiv = document.createElement("div");
            publicacaoDiv.className = "publicacao";

            var autorDiv = document.createElement("div");
            autorDiv.className = "autor";
            autorDiv.textContent = nomeUsuario;

            var conteudoDiv = document.createElement("div");
            conteudoDiv.className = "conteudo";
            conteudoDiv.textContent = mensagem;

            var dataDiv = document.createElement("div");
            dataDiv.className = "data";
            var dataAtual = new Date();
            dataDiv.textContent = "Postado em " + dataAtual.toLocaleDateString();

            var publicacaoSelecionadaDiv = document.createElement("div");
            publicacaoSelecionadaDiv.className = "publicacao-selecionada";
            publicacaoSelecionadaDiv.textContent = publicacaoSelecionada;

            likeButton = document.createElement("button");
            likeButton.className = "like-button";
            likeButton.textContent = "👍";
            likeButton.addEventListener("click", function() {
                if (!likeButton.classList.contains("selecionado")) {
                    likeButton.classList.add("selecionado");
                    dislikeButton.classList.remove("selecionado");
                } else {
                    likeButton.classList.remove("selecionado");
                }
            });

            dislikeButton = document.createElement("button");
            dislikeButton.className = "dislike-button";
            dislikeButton.textContent = "👎";
            dislikeButton.addEventListener("click", function() {
                if (!dislikeButton.classList.contains("selecionado")) {
                    dislikeButton.classList.add("selecionado");
                    likeButton.classList.remove("selecionado");
                } else {
                    dislikeButton.classList.remove("selecionado");
                }
            });

            var deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.textContent = "🗑️";
            deleteButton.addEventListener("click", function() {
                publicacaoDiv.remove();
            });

            publicacaoDiv.appendChild(autorDiv);
            publicacaoDiv.appendChild(conteudoDiv);
            publicacaoDiv.appendChild(dataDiv);
            publicacaoDiv.appendChild(publicacaoSelecionadaDiv);
            publicacaoDiv.appendChild(likeButton);
            publicacaoDiv.appendChild(dislikeButton);
            publicacaoDiv.appendChild(deleteButton);

            containerPublicacoes.appendChild(publicacaoDiv);

            nomeUsuarioInput.value = "";
            mensagemInput.value = "";
        }
    });

    pesquisarInput.addEventListener("input", function() {
        var termoPesquisa = pesquisarInput.value.toLowerCase();
        var publicacoes = containerPublicacoes.getElementsByClassName("publicacao");

        Array.from(publicacoes).forEach(function(publicacao) {
            var conteudo = publicacao.querySelector(".conteudo").textContent.toLowerCase();

            if (conteudo.includes(termoPesquisa)) {
                publicacao.style.display = "block";
            } else {
                publicacao.style.display = "none";
            }
        });
    });

    botaoCadastro.addEventListener("click", function() {
        console.log("Botão de cadastro clicado!");
    });

    fotoUsuario.addEventListener("click", function() {
        console.log("Foto de usuário clicada!");
    });
});



const login = document.getElementById('login');

 

botao.addEventListener('click', function(event){

  event.preventDefault()

  window.location.href = 'login.html'

 

})



const ChatBot = document.getElementById('ChatBot');

 

ChatBot.addEventListener('click', function(event){

  event.preventDefault()

  window.location.href = 'ChatBot.html'

 

})