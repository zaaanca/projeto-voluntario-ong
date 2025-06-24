// Carrega as necessidades do localStorage ou inicia um array vazio
const needs = JSON.parse(localStorage.getItem("needs") || "[]");

// Seleciona o formulário de cadastro, se existir na página
const form = document.getElementById("needForm");

if (form) {
  // Adiciona evento de submit ao formulário de cadastro
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Cria um novo objeto de necessidade com os dados do formulário
    const newNeed = {
      institution: form.institution.value.trim(),
      type: form.type.value,
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      cep: form.cep.value.trim(),
      street: form.street.value,
      neighborhood: form.neighborhood.value,
      city: form.city.value,
      state: form.state.value,
      contact: form.contact.value.trim(),
      createdAt: new Date().toISOString(),
    };

    // Adiciona a nova necessidade ao array e salva no localStorage
    needs.push(newNeed);
    localStorage.setItem("needs", JSON.stringify(needs));

    alert("Necessidade cadastrada com sucesso!");
    form.reset();
  });
}

// Busca automática de endereço pelo CEP usando a API ViaCEP
const cepInput = document.getElementById("cep");

if (cepInput) {
  cepInput.addEventListener("blur", async () => {
    const rawCep = cepInput.value.replace(/\D/g, "");
    if (rawCep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
      const data = await response.json();
      if (data.erro) return;

      // Preenche os campos de endereço automaticamente
      form.street.value = data.logradouro;
      form.neighborhood.value = data.bairro;
      form.city.value = data.localidade;
      form.state.value = data.uf;
    } catch (err) {
      console.error("Erro ao consultar ViaCEP:", err);
    }
  });
}

// Lógica de exibição e filtro das necessidades na página necessidades.html
if (window.location.pathname.endsWith("necessidades.html")) {
  const searchInput = document.getElementById("searchInput");
  const filterType = document.getElementById("filterType");

  // Aplica filtros de busca e tipo
  const applyFilters = () => {
    const term = searchInput.value.toLowerCase();
    const type = filterType.value;

    const filtered = needs.filter((need) => {
      const matchesTerm =
        need.title.toLowerCase().includes(term) ||
        need.description.toLowerCase().includes(term);
      const matchesType = type ? need.type === type : true;
      return matchesTerm && matchesType;
    });

    renderNeeds(filtered);
  };

  // Renderiza a lista de necessidades na tela
  function renderNeeds(list = needs) {
    const needsList = document.getElementById("needsList");
    if (!needsList) return;
    if (!list.length) {
      needsList.innerHTML = '<p class="empty">Nenhuma necessidade cadastrada.</p>';
      return;
    }
    needsList.innerHTML = list
      .map(
        (need) => `
      <article class="need-card">
        <h2>${need.title}</h2>
        <p><strong>Instituição:</strong> ${need.institution}</p>
        <p><strong>Tipo:</strong> ${need.type}</p>
        <p>${need.description}</p>
        <p><strong>Local:</strong> ${
          need.street ? need.street + ", " : ""
        }${need.neighborhood ? need.neighborhood + ", " : ""}${
          need.city
        } - ${need.state}</p>
        <p><strong>Contato:</strong> ${need.contact}</p>
      </article>
    `
      )
      .join("");
  }

  // Inicializa a lista e eventos de filtro
  renderNeeds();
  searchInput.addEventListener("input", applyFilters);
  filterType.addEventListener("change", applyFilters);
}
