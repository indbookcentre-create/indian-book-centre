const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#navLinks");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const searchInput = document.getElementById("bookSearch");
const productCards = document.querySelectorAll(".product-card");

searchInput?.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase().trim();
  productCards.forEach(card => {
    card.style.display = card.dataset.search.includes(term) ? "" : "none";
  });
});

const modal = document.getElementById("orderModal");
const selectedBook = document.getElementById("selectedBook");
const requirement = document.getElementById("bookRequirement");

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const book = button.dataset.book || "Book enquiry";
    selectedBook.textContent = book;
    requirement.value = book;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  });
});

document.getElementById("sendOrder")?.addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim() || "Customer";
  const book = requirement.value.trim() || selectedBook.textContent;
  const message = document.getElementById("orderMessage").value.trim();
  const text = `Hello Indian Book Centre,%0A%0AName: ${encodeURIComponent(name)}%0ABook/Requirement: ${encodeURIComponent(book)}%0AMessage: ${encodeURIComponent(message || "Please tell me availability and price.")}`;
  window.open(`https://wa.me/919871912591?text=${text}`, "_blank", "noopener");
});
