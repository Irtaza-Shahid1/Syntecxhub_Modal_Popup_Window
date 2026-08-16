const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const submitText = document.getElementById("submitText");

function openModal() {
  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  successMessage.textContent = "";

  setTimeout(() => nameInput.focus(), 150);
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  successMessage.textContent = "";
}

function updateCharacterCount() {
  charCount.textContent = `${messageInput.value.length} / 180`;
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
messageInput.addEventListener("input", updateCharacterCount);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = nameInput.value.trim().split(" ")[0] || "there";

  submitBtn.disabled = true;
  submitText.textContent = "Sending...";
  successMessage.textContent = "";

  setTimeout(() => {
    successMessage.textContent = `Thanks, ${firstName}! Your message has been sent.`;
    contactForm.reset();
    updateCharacterCount();
    submitText.textContent = "Send Message";
    submitBtn.disabled = false;
  }, 650);
});
