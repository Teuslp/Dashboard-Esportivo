document.getElementById('perfil').style.display = 'block';

function mostrarConteudo(aba) {
    var abas = document.querySelectorAll('.aba');
    abas.forEach(function(elemento) {
        elemento.style.display = 'none';
    });
    document.getElementById(aba).style.display = 'block';
}

function adicionarPartida() {
    var nomeAdversario = document.getElementById('nomeAdversario').value;
    var placarMeuTime = parseInt(document.getElementById('placarMeuTime').value);
    var placarAdversario = parseInt(document.getElementById('placarAdversario').value);
    var quantidadeGols = parseInt(document.getElementById('quantidadeGols').value);
    var quantidadeAssistencias = parseInt(document.getElementById('quantidadeAssistencias').value);

    var resultadoPartida;
    if (placarMeuTime > placarAdversario) {
        resultadoPartida = 'Vitória';
    } else if (placarMeuTime === placarAdversario) {
        resultadoPartida = 'Empate';
    } else {
        resultadoPartida = 'Derrota';
    }

    var jogosAnteriores = parseInt(document.getElementById('quantidadeJogos').textContent);
    var assistenciasAnteriores = parseInt(document.getElementById('quantidadeAssistenciasPerfil').textContent);
    var golsAnteriores = parseInt(document.getElementById('quantidadeGolsPerfil').textContent);

    document.getElementById('quantidadeJogos').textContent = jogosAnteriores + 1;
    document.getElementById('quantidadeAssistenciasPerfil').textContent = assistenciasAnteriores + quantidadeAssistencias;
    document.getElementById('quantidadeGolsPerfil').textContent = golsAnteriores + quantidadeGols;

    var tabelaHistorico = document.getElementById('tabelaHistorico').getElementsByTagName('tbody')[0];
    var novaLinha = tabelaHistorico.insertRow();

    var dataAtual = new Date();
    var dataFormatada = dataAtual.getDate() + '/' + (dataAtual.getMonth() + 1) + '/' + dataAtual.getFullYear();

    var colunaData = novaLinha.insertCell(0);
    var colunaTimeAdversario = novaLinha.insertCell(1);
    var colunaGolsMarcados = novaLinha.insertCell(2);
    var colunaAssistencias = novaLinha.insertCell(3);
    var colunaResultado = novaLinha.insertCell(4);
    var colunaResultadoGeral = novaLinha.insertCell(5); 

    colunaData.textContent = dataFormatada;
    colunaTimeAdversario.textContent = nomeAdversario;
    colunaGolsMarcados.textContent = quantidadeGols;
    colunaAssistencias.textContent = quantidadeAssistencias;
    colunaResultado.textContent = resultadoPartida;
    colunaResultadoGeral.textContent = placarMeuTime + ' - ' + placarAdversario; 

    document.getElementById('nomeAdversario').value = '';
    document.getElementById('placarMeuTime').value = '';
    document.getElementById('placarAdversario').value = '';
    document.getElementById('quantidadeGols').value = '';
    document.getElementById('quantidadeAssistencias').value = '';
}

function adicionarEvento() {
    var dataEvento = document.getElementById('dataEvento').value;
    var descricaoEvento = document.getElementById('descricaoEvento').value;

    if (dataEvento && descricaoEvento) {
        var listaEventos = document.getElementById('listaEventos');
        var novoEvento = document.createElement('div');
        novoEvento.classList.add('evento');
        novoEvento.innerHTML = '<strong>' + dataEvento + ':</strong> ' + descricaoEvento;
        listaEventos.appendChild(novoEvento);

        document.getElementById('dataEvento').value = '';
        document.getElementById('descricaoEvento').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.getElementById('quantidadeJogos').textContent = '0';
document.getElementById('quantidadeAssistenciasPerfil').textContent = '0';
document.getElementById('quantidadeGolsPerfil').textContent = '0';