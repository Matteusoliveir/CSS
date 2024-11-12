// Função para máscara de CPF
function mascaraCPF(event) {
    let valor = event.target.value.replace(/\D/g, '');
    if (valor.length <= 3) {
        event.target.value = valor;
    } else if (valor.length <= 6) {
        event.target.value = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else if (valor.length <= 9) {
        event.target.value = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else {
        event.target.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
}

// Função para máscara de celular
function mascaraCelular(event) {
    let valor = event.target.value.replace(/\D/g, '');
    if (valor.length <= 2) {
        event.target.value = `(${valor}`;
    } else if (valor.length <= 10) {
        event.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
    } else {
        event.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
    }
}

// Função de envio do formulário de cadastro
function handleCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const celular = document.getElementById('celular').value;
    const senha = document.getElementById('senha').value;

    // Validações simples (você pode personalizar mais conforme necessário)
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert(`Cadastro realizado com sucesso, ${nome}!`);
}
