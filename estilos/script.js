// ESCRITA HEADER

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Adiciona o texto ao elemento HTML
    textElement.innerText = loremText;

    // Calcula o tempo total da animação em milissegundos
    const animationDuration = 5000;

    // Adiciona uma classe para iniciar a animação
    textElement.classList.add("start-animation");

    // Adiciona um ouvinte de evento para quando a animação terminar
    textElement.addEventListener("animationend", () => {
        // Remove a classe que continua a animação
        textElement.classList.remove("start-animation");
        // Adiciona uma classe para parar a animação
        textElement.classList.add("pause-animation");
    });
});

//   FIM ESCRITA HEADER


// comprar 
// Adicione este script para redirecionar após a "escrita"
document.getElementById('botaoComprar').addEventListener('click', function() {
    window.location.href = this.href;
});

document.addEventListener("DOMContentLoaded", function() {
    const texto = "Siga-nos nas redes sociais: Instagram, Facebook, Biblioteca, Tyter, CNPJ.";
    const textoAnimado = document.getElementById("texto-animado");
    let index = 0;

    function escreverTexto() {
        textoAnimado.textContent += texto[index];
        index++;

        if (index < texto.length) {
            setTimeout(escreverTexto, 50); // Ajuste o tempo conforme necessário
        } else {
            // Quando o texto termina, adicione os links com animação
            adicionarLinks();
        }
    }

    function adicionarLinks() {
        const links = ["Instagram", "Facebook", "Biblioteca", "Tyter", "CNPJ"];
        const ul = document.createElement("ul");

        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = `https://www.${link.toLowerCase()}.com/`;
            a.target = "_blank";
            a.textContent = link;

            li.appendChild(a);
            ul.appendChild(li);
        });

        // Adiciona a lista de links ao conteúdo do rodapé
        document.getElementById("conteudo-rodape").appendChild(ul);
    }

    // Limpa o conteúdo inicial do texto-animado para evitar duplicatas
    textoAnimado.textContent = "";

    // Chama a função para começar a escrever o texto
    escreverTexto();
});

