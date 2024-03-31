// input-form.js
class InputForm extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Create template element
    const template = document.createElement("template");
    const style = document.createElement("style");
    style.textContent = `
      /* Styles specific to the input form component */
      .input-form {
        margin: 20px;
      }
      .input-form label {
        display: block;
        margin-bottom: 10px;
      }
      .input-form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }
    `;

    // Create div element
    const div = document.createElement("div");
    div.classList.add("input-form");

    // Create label and input elements
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("placeholder", "Enter your name");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Enter your email");

    // Append label and input elements to div
    div.appendChild(nameLabel);
    div.appendChild(nameInput);
    div.appendChild(emailLabel);
    div.appendChild(emailInput);

    // Append style and content to template
    template.content.appendChild(style.cloneNode(true));
    template.content.appendChild(div);

    // Append template content to shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define("input-form", InputForm);
