const form = document.getElementById("applyForm");
const note = document.getElementById("formNote");
const recruiterForm = document.getElementById("recruiterForm");
const recruiterNote = document.getElementById("recruiterNote");
const applicantSummary = document.getElementById("applicantSummary");
const thankYouSummary = document.getElementById("thankYouSummary");

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

if (applicantSummary) {
  const raw = localStorage.getItem("joseV2Applicant");
  if (raw) {
    try {
      const data = JSON.parse(raw);
      applicantSummary.textContent = `Applicant: ${data.name} · Role: ${data.role}`;
    } catch (error) {
      applicantSummary.textContent = "";
    }
  }
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
      recruiterNote.textContent = "Thanks! Your answers are saved.";
    }

    recruiterForm.reset();
    window.location.href = "thank-you.html";
  });
}

if (thankYouSummary) {
  const applicantRaw = localStorage.getItem("joseV2Applicant");
  const recruiterRaw = localStorage.getItem("joseV2Recruiter");
  if (applicantRaw || recruiterRaw) {
    try {
      const applicant = applicantRaw ? JSON.parse(applicantRaw) : null;
      const recruiter = recruiterRaw ? JSON.parse(recruiterRaw) : null;
      const name = applicant?.name ? applicant.name : "Recruiter";
      const role = applicant?.role ? applicant.role : "your role";
      const roles = recruiter?.roles ? recruiter.roles : "your focus areas";
      thankYouSummary.textContent = `${name}, we received your interest in ${role} and recruiter focus on ${roles}.`;
    } catch (error) {
      thankYouSummary.textContent = "";
    }
  }
}
