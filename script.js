// Função para criar os corações caindo
function createFallingHearts() {
    const heart = document.createElement("span");
    heart.textContent = "❤️"; // Emoji de coração

    // Adiciona o coração ao body
    document.body.appendChild(heart);

    // Posicionamento aleatório no topo
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px"; // Começa fora da tela
    heart.style.fontSize = "30px"; // Tamanho do coração
    heart.style.animation = "fall 3s linear forwards"; // Animação de queda

    // Remove o coração depois que ele terminou de cair
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Cria um coração a cada 500ms
setInterval(createFallingHearts, 500);

// Função para calcular o tempo juntos
function updateTime() {
    const startDate = new Date("2021-06-27"); // Data de início do namoro
    const currentDate = new Date();
    const timeDiff = currentDate - startDate; // Diferença de tempo em milissegundos

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Atualizar a contagem no HTML
    const timeString = `${days} dias, ${hours % 24} horas, ${minutes % 60} minutos, ${seconds % 60} segundos`;
    document.getElementById("timeTogether").textContent = `Tempo juntos: ${timeString}`;
}

// Atualizar o cronômetro a cada segundo
setInterval(updateTime, 1000);