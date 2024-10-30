// Função para abrir a tabela de famílias em uma nova janela
function openFamilyTable() {
    const familyWindow = window.open("", "_blank", "width=600,height=400");
    familyWindow.document.write(`
        <html>
            <head>
                <title>Tabela de Famílias</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                    }
                    table {
                        width: 90%;
                        margin: 20px auto;
                        border-collapse: separate;
                        border-spacing: 10px;
                    }
                    th, td {
                        padding: 15px;
                        background-color: #f9f9f9;
                        border: 2px solid #ddd;
                        border-radius: 10px;
                        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                    }
                    th {
                        background-color: #ffed85;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <h2>Núcleos Familiares e Sugestões de Bolos</h2>
                <table>
                    <tr>
                        <th>Núcleos Familiares</th>
                        <th>Sugestões de Bolos</th>
                    </tr>
                    <tr><td>Núcleo 1: Josenice, Jonatas, Niltinho e Alysson</td><td>Bolo simples</td></tr>
                    <tr><td>Núcleo 2: Joseane, Danielly e Jadi</td><td>Bolo de nata</td></tr>
                    <tr><td>Núcleo 3: Josileide, Wal, Iris e Isa</td><td>Bolo de laranja</td></tr>
                    <tr><td>Núcleo 4: Josinete, Rosivaldo, Gabriel e Thamires</td><td>Bolo de fubá/milho</td></tr>
                    <tr><td>Núcleo 5: Joelio, Edilane, Denis e Sara</td><td>Bolo de chocolate</td></tr>
                    <tr><td>Núcleo 6: Joselio, Gorette, Joselia e Geovanna</td><td>Bolo de formigueiro</td></tr>
                    <tr><td>Núcleo 7: Silvia, Sylvio, Sofia e Samuel</td><td>Bolo de cenoura com brigadeiro</td></tr>
                    <tr><td>Núcleo 8: Josenilda, Paulo, Nayara, David e Alice</td><td>Bolo de nata com goiabada</td></tr>
                </table>
            </body>
        </html>
    `);
    familyWindow.document.close();
}

function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
}

// Mensagens rotativas
const rotatingMessages = [
    "Prepare-se para um dia especial em família!",
    "Traga muita alegria e disposição!",
    "Nos vemos lá!"
];

let currentMessageIndex = 0;
const rotatingMessageElement = document.getElementById('rotating-message');

// Função para atualizar a mensagem rotativa
function updateRotatingMessage() {
    rotatingMessageElement.textContent = rotatingMessages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % rotatingMessages.length;
}

// Iniciar a rotação de mensagens a cada 10 segundos
setInterval(updateRotatingMessage, 10000);

// Iniciar a primeira mensagem ao carregar a página
updateRotatingMessage();

function showMonkeyGif() {
    const monkeyGif = document.getElementById('monkeyGif');
    monkeyGif.style.display = 'block'; // Exibir o GIF

    // Esconder o GIF após 7 segundos
    setTimeout(() => {
        monkeyGif.style.display = 'none'; // Ocultar o GIF
    }, 7000);
}
