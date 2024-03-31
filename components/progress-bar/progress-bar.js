// progress-bar.js
class ProgressBar extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Create progress bar container
    const progressBarContainer = document.createElement("div");
    progressBarContainer.classList.add("progress-bar-container");

    // Create progress bar element
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    // Append progress bar element to container
    progressBarContainer.appendChild(progressBar);

    // Append progress bar container to shadow DOM
    shadowRoot.appendChild(progressBarContainer);

    // Apply styles
    const style = document.createElement("style");
    style.textContent = `
        .progress-bar-container {
          width: 100%;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          background-color: #4CAF50;
          width: 0;
          transition: width 0.3s ease-in-out;
        }
      `;
    shadowRoot.appendChild(style);
  }

  connectedCallback() {
    // Get progress attribute value
    const progress = this.getAttribute("progress");

    // Set progress bar width based on the progress attribute
    if (progress !== null) {
      const progressBar = this.shadowRoot.querySelector(".progress-bar");
      progressBar.style.width = `${progress}%`;
    }
  }

  static get observedAttributes() {
    return ["progress"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "progress" && oldValue !== newValue) {
      const progressBar = this.shadowRoot.querySelector(".progress-bar");
      progressBar.style.width = `${newValue}%`;
    }
  }
}

// Define the custom element
customElements.define("progress-bar", ProgressBar);
