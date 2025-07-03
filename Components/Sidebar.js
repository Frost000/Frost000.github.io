class MySidebar extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = /*css*/`

    .sidebar{
        position: fixed;
        display: block;
        top: 0px;
        left: 0px;
        height: 100vh;
        width: 30vw;
        background-color: pink;
        transition: 0.5s;
    }`
    ;

    const content = /*html*/`
      <div class="sidebar" id="sidebar">
        <div class="container">
          <a href="#" onclick="closeSidebar()"> Close </a>
        </div>
      </div>`
    ;

    this.innerHTML = content;
    this.appendChild(style);
  };

  connectedCallback() {
  }
}

function closeSidebar()
{
  document.getElementById("sidebar").style.display = "none";
}

customElements.define('my-sidebar', MySidebar);