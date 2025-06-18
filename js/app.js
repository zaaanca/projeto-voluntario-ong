const needs = JSON.parse(localStorage.getItem("needs") || "[]");

const form = document.getElementById("needForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

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

    needs.push(newNeed);
    localStorage.setItem("needs", JSON.stringify(needs));

    alert("Necessidade cadastrada com sucesso!");
    form.reset();
  });
}

const cepInput = document.getElementById("cep");

if (cepInput) {
  cepInput.addEventListener("blur", async () => {
    const rawCep = cepInput.value.replace(/\D/g, "");
    if (rawCep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
      const data = await response.json();
      if (data.erro) return;

      form.street.value = data.logradouro;
      form.neighborhood.value = data.bairro;
      form.city.value = data.localidade;
      form.state.value = data.uf;
    } catch (err) {
      console.error("Erro ao consultar ViaCEP:", err);
    }
  });
}
