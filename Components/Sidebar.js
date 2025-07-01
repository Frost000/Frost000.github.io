class MySidebar extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = /*css*/`
    .sidebar{
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100px;

        .container{
          background-color: blue;
        }
    }

    `
    ;

    const content = /*html*/`
      <div class="sidebar">
        <div class="container">
        </div>
      </div>`
    ;

    this.innerHTML = content;
    this.appendChild(style);
  };

  connectedCallback() {
    console.log("sidebar");
  }
}

customElements.define('my-sidebar', MySidebar);