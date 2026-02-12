const form = document.getElementById("applyForm");
const note = document.getElementById("formNote");
const recruiterForm = document.getElementById("recruiterForm");
const recruiterNote = document.getElementById("recruiterNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const role = formData.get("role");

    if (note) {
      note.textContent = `Thanks, ${name}. Your application for ${role} is in AI review.`;
    }

    const payload = {
      name,
      role,
      email: formData.get("email"),
      linkedin: formData.get("linkedin"),
    };

    localStorage.setItem("joseV2Applicant", JSON.stringify(payload));
    window.location.href = "recruiter-questions.html";
  });
}

if (recruiterForm) {
  recruiterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(recruiterForm);
    const payload = {
      roles: formData.get("roles"),
      volume: formData.get("volume"),
      ats: formData.get("ats"),
    };

    localStorage.setItem("joseV2Recruiter", JSON.stringify(payload));

    if (recruiterNote) {
      recruiterNote.textContent = "Thanks! Your answers are in review. We will follow up shortly.";
    }

    recruiterForm.reset();
  });
}
