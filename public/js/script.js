// Adiciona um evento de escuta ao formulário para realizar a ação quando for enviado
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    // Evita o comportamento padrão de envio de formulário
    e.preventDefault();

    // Captura os valores dos campos 'name' e 'password'
    const username = e.target.name.value;
    const password = e.target.password.value;

    try {
        // Envia uma solicitação POST à rota da API de registro
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        // Verifica o status da resposta e exibe uma mensagem de acordo
        if (response.ok) {
            // Exibe a mensagem de sucesso na interface
            document.getElementById('successMessage').style.display = 'block';
        } else {
            // Exibe um alerta com o erro se houver falha no registro
            const result = await response.text();
            alert(`Erro: ${result}`);
        }
    } catch (error) {
        // Trata erros de conexão ou outros erros de execução
        alert('Falha ao conectar com o servidor. Tente novamente mais tarde.');
        console.error(error);
    }
});
