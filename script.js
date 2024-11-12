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

// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é número
    if (cpf.length !== 11) return false;

    // Validação dos números repetidos (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validação do primeiro dígito verificador
    let soma = 0;
    let multiplicador = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    let resto = soma % 11;
    if (resto < 2) {
        if (parseInt(cpf.charAt(9)) !== 0) return false;
    } else {
        if (parseInt(cpf.charAt(9)) !== 11 - resto) return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    multiplicador = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    resto = soma % 11;
    if (resto < 2) {
        if (parseInt(cpf.charAt(10)) !== 0) return false;
    } else {
        if (parseInt(cpf.charAt(10)) !== 11 - resto) return false;
    }

    return true;
}

// Função para validar o celular
function validarCelular(celular) {
    let regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    return regex.test(celular);
}

// Função de envio do formulário de cadastro
function handleCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const celular = document.getElementById('celular').value;
    const senha = document.getElementById('senha').value;

    // Validar CPF
    if (!validarCPF(cpf)) {
        alert("CPF inválido. Verifique o formato e os números.");
        return;
    }

    // Validar celular
    if (!validarCelular(celular)) {
        alert("Celular inválido. Certifique-se de que está no formato (XX) XXXXX-XXXX.");
        return;
    }

    // Validar senha
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Sucesso no cadastro
    alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}!`);
    window.location.href = 'login.html';
}

// Função de login (caso precise de algum futuro backend)
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Simulando sucesso de login
    alert("Login realizado com sucesso!");
    window.location.href = 'index.html';
}
