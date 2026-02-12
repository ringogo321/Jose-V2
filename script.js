const form = document.getElementById("applyForm");
const note = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const role = formData.get("role");

    note.textContent = `Thanks, ${name}. Your application for ${role} is in AI review.`;
    form.reset();
  });
}
