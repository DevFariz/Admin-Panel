const popupsGeneral = document.querySelectorAll(".administrator-popup");
const closeBtns = document.querySelectorAll(".administrator-close-btn");
const popupItems = document.querySelectorAll("[data-id]");

popupItems.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    const popups = document.querySelectorAll("[popup-id]");

    popups.forEach((elem) => {
      if (trigger.getAttribute("data-id") === elem.getAttribute("popup-id")) {
        elem.classList.add("popup-transition");
        elem.style.display = "block";

        closeBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", () => {
            elem.classList.remove("popup-transition");
            elem.style.display = "none";
          });
        });
      }
    });
  });
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
