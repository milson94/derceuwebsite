document.addEventListener('DOMContentLoaded', () => {
    console.log('Bem-vindo à Imobiliária Solução! O website foi carregado com sucesso.');

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;

            // Simplesmente imprime os dados no console para demonstração
            console.log('Formulário enviado:');
            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Telefone:', telefone);

            alert('Obrigado! Sua mensagem foi enviada. Entraremos em contacto brevemente.');

            form.reset(); // Limpa o formulário
        });
    }
});