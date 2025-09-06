const div = document.createElement("div");
div.innerHTML = `<style>
        h3 {
            color: blue;
        }
    </style>
        <slot name="abc"></slot>
        <h3 id="temph3">
        </h3>
        <h3 id="ffds">
        </h3>
        <slot></slot>
        `;

class UserCard extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
        </style><h3 slot="abc">${this.getAttribute("name")}</h3>`;
    
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(div.cloneNode(true));
    
    this.shadowRoot.querySelector("#ffds").innerText = "something";
  }
}

window.customElements.define("user-card", UserCard);
