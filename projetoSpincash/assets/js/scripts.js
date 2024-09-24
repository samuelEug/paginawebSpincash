function submitForm() {
    var nome_empresa = document.querySelector('input[name=nome-da-empresa]').value;
    var primeiro_nome = document.querySelector('input[name=primeiro-nome]').value;
    var email = document.querySelector('input[name=email]').value;
    var cidade_estado = document.querySelector('input[name=cidade-e-estado]').value;
    var telefone = document.querySelector('input[name=telefone]').value;

    var radiosPorteEmpresa = document.getElementsByName("porte_empresa");
    var porteEmpresaSelecionado = "";
    for (var i = 0; i < radiosPorteEmpresa.length; i++){
        if (radiosPorteEmpresa[i].checked){
            porteEmpresaSelecionado = radiosPorteEmpresa[i].value;
            break;
        }
    }

    var radiosVersao = document.getElementsByName("versao");
    var versaoSelecionada = "";
    for (var i = 0; i < radiosVersao.length; i++){
        if (radiosVersao[i].checked){
            versaoSelecionada = radiosVersao[i].value;
            break;
        }
    }

    var radiosPlano = document.getElementsByName("plano");
    var planoSelecionado = "";
    for (var i = 0; i < radiosPlano.length; i++){
        if (radiosPlano[i].checked){
            planoSelecionado = radiosPlano[i].value;
            break;
        }
    }

    var radiosDivulgacao = document.getElementsByName("divul");
    var divulgacaoSelecionada = "";
    for (var i = 0; i < radiosDivulgacao.length; i++){
        if (radiosDivulgacao[i].checked){
            divulgacaoSelecionada = radiosDivulgacao[i].value;
            break;
        }
    }

    // console.log('Dados do formulário:', {
    //     nome_empresa,
    //     primeiro_nome,
    //     email,
    //     cidade_estado,
    //     telefone,
    //     porteEmpresaSelecionado,
    //     versaoSelecionada,
    //     planoSelecionado,
    //     divulgacaoSelecionada
    // });

    var data = {
        to: 'samuel.eug7@gmail.com', 
        subject: 'Novo Formulário Submetido',
        text: `
            Nome da Empresa: ${nome_empresa}
            Primeiro Nome: ${primeiro_nome}
            E-mail: ${email}
            Cidade e Estado: ${cidade_estado}
            Telefone: ${telefone}
            Porte da Empresa: ${porteEmpresaSelecionado}
            Versão do Software: ${versaoSelecionada}
            Plano: ${planoSelecionado}
            Como ficou sabendo do Spincash: ${divulgacaoSelecionada}
        `
    };

    console.log('Dados a serem enviados para a API:', data);

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('E-mail enviado com sucesso');
        } else {
            alert('Erro ao enviar o e-mail');
        }
    })
    .catch(error => {
        alert('Erro ao enviar o e-mail:', error);
    });
}
