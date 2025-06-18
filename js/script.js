const needs = JSON.parse(localStorage.getItem('needs')) || [];

function renderNeeds(filtrarTexto = '', tipoAjuda = '') {
  const container = document.getElementById('lista-necessidades');
  container.innerHTML = '';

  const filtradas = needs.filter(n => {
    const buscaTexto = filtrarTexto.toLowerCase();
    const combinaTexto = n.titulo.toLowerCase().includes(buscaTexto) || n.descricao.toLowerCase().includes(buscaTexto);
    const combinaTipo = tipoAjuda === '' || n.tipoAjuda === tipoAjuda;
    return combinaTexto && combinaTipo;
  });

  filtradas.forEach(n => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${n.titulo}</h3>
      <p><strong>Instituição:</strong> ${n.instituicao}</p>
      <p><strong>Tipo:</strong> ${n.tipoAjuda}</p>
      <p>${n.descricao}</p>
      <p><strong>Endereço:</strong> ${n.rua}, ${n.bairro}, ${n.cidade} - ${n.estado}</p>
      <p><strong>Contato:</strong> ${n.contato}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNeeds();

  const inputPesquisa = document.getElementById('pesquisa');
  const selectTipo = document.getElementById('filtroTipoAjuda');

  inputPesquisa.addEventListener('input', () => {
    renderNeeds(inputPesquisa.value, selectTipo.value);
  });

  selectTipo.addEventListener('change', () => {
    renderNeeds(inputPesquisa.value, selectTipo.value);
  });
});
