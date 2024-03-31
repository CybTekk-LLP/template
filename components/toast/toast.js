class ToastMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const message = this.getAttribute("message") || "Default message";
    const duration = parseInt(this.getAttribute("duration")) || 3000;
    const position = this.getAttribute("position") || "bottom-right";
    const closeButton = this.getAttribute("close-button") === "true";
    const backgroundColor = this.getAttribute("background-color") || "#333";
    const textColor = this.getAttribute("text-color") || "#fff";

    const toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-container");
    toastContainer.style.backgroundColor = backgroundColor;
    toastContainer.style.color = textColor;

    toastContainer.textContent = message;

    toastContainer.classList.add(`position-${position}`);

    if (closeButton) {
      const closeButtonIcon = document.createElement("span");
      closeButtonIcon.innerHTML = "&times;";
      closeButtonIcon.classList.add("close-button");
      closeButtonIcon.addEventListener("click", () => {
        this.remove();
      });
      toastContainer.appendChild(closeButtonIcon);
    }

    const style = document.createElement("style");
    style.textContent = `
      .toast-container {
        position: fixed;
        min-width: 250px;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease-in-out;
      }
      .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
      }
      .position-top-left { top: 20px; left: 20px; }
      .position-top-center { top: 20px; left: 50%; transform: translateX(-50%); }
      .position-top-right { top: 20px; right: 20px; }
      .position-bottom-left { bottom: 20px; left: 20px; }
      .position-bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }
      .position-bottom-right { bottom: 20px; right: 20px; }
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(toastContainer);

    setTimeout(() => {
      this.remove();
    }, duration);
  }
}

customElements.define("toast-message", ToastMessage);
