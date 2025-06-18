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
