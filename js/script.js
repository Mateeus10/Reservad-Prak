function mostrarAlerta() {
  document.getElementById("alerta").style.display = "block";
}

function confirmado() {
  document.getElementById("alerta").style.display = "none";
}

function cancelado() {
  document.getElementById("alerta").style.display = "none";
}

function mostrarDiv(divId) {
  // Esconde todas as divs de conteúdo
  const divs = ['container_dashboard', 'container_vagas', 'container_reservas', 'container_pagamentos', 'container_relatorios', 'container_configuracao'];
  divs.forEach(id => {
    document.getElementById(id).style.display = (id === divId) ? 'block' : 'none';
  });
}

function fetchHTML(file, containerId) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

function loadHTML() {
  fetchHTML('dashboard.html', 'container_dashboard');
  fetchHTML('gerenciamento_vagas.html', 'container_vagas');
  fetchHTML('reservas.html', 'container_reservas');
  fetchHTML('pagamentos.html', 'container_pagamentos');
  fetchHTML('relatorios.html', 'container_relatorios');
  fetchHTML('configuracao.html', 'container_configuracao');
}

function loadDashboard() {
  fetch('dashboard.html')  // Caminho correto relativo ao index.html
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_dashboard').innerHTML = data;
      mostrarDiv('container_dashboard'); // Mostra a div do dashboard
    })
    .catch(error => console.error('Erro ao carregar dashboard.html:', error));
}

function loadHTML() {
  fetch('gerenciamento_vagas.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_vagas').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar gerenciamento_vagas.html:', error));

  fetch('reservas.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_reservas').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar reservas.html:', error));

  fetch('pagamentos.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_pagamentos').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar pagamentos.html:', error));

  fetch('relatorios.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_relatorios').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar relatorios.html:', error));

  fetch('configuracao.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container_configuracao').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar configuracao.html:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadDashboard();  // Carrega o dashboard na inicialização
  loadHTML();       // Prepara os outros conteúdos, mas sem exibi-los ainda
});
