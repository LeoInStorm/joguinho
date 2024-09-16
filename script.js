// Selecionando os elementos
const modal = document.getElementById('modal');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const winnerModal = document.getElementById('winnerModal');

// Função para mover a modal para uma posição aleatória, sem sair da tela
function moveModal() {
    const modalWidth = modal.clientWidth;
    const modalHeight = modal.clientHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Garante que a modal não saia da tela no eixo X e Y
    const randomX = Math.random() * (windowWidth - modalWidth);
    const randomY = Math.random() * (windowHeight - modalHeight);

    modal.style.left = `${randomX}px`;
    modal.style.top = `${randomY}px`;
}
// Evento de clique no botão "Não"
noBtn.addEventListener('click', moveModal);

// Evento de clique no botão "Sim"
yesBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Esconde a primeira modal
    winnerModal.style.display = 'block'; // Mostra a modal de vencedor
});
