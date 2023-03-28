const popup = document.querySelector(".administrator-popup");
const popupContent = document.querySelector(".administrator-popup-content");
const closeBtn = document.querySelector(".administrator-close-btn");
const popupTriggers = document.querySelectorAll(
  ".adminitrator-table-item__popup"
);

popupTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup-transition");
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popup-transition");
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("popup-transition");
    popup.style.display = "none";
  }
});

const officiantBtn = document.getElementById("officiant-btn");
const orderBtn = document.getElementById("order-btn");
const officiantPopupContainer = document.getElementById(
  "officiant-popup-container"
);
const orderPopupContainer = document.getElementById("order-popup-container");

const officiantPopupCloseBtn = document.getElementById(
  "officiant-popup-close-btn"
);

const orderPopupCloseBtn = document.getElementById("order-popup-close-btn");

officiantBtn.addEventListener("click", () => {
  officiantPopupContainer.style.display = "flex";
});

orderBtn.addEventListener("click", () => {
  orderPopupContainer.style.display = "flex";
});

// Add event listeners to the close buttons for each popup
officiantPopupCloseBtn.addEventListener("click", () => {
  officiantPopupContainer.style.display = "none";
});

orderPopupCloseBtn.addEventListener("click", () => {
  orderPopupContainer.style.display = "none";
});
