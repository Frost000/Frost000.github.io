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
        border-right: 0.6vh solid black;
    }
    
    .sidebar-container{
      display: flex;
      flex-direction: column;
    }

    .sidebar-close {
      height: 10vh;
      display: flex;
      justify-content: center;
      background-color: red;
    }

    .sidebar-content{
      height: 65vh;
      display: flex;
      flex-direction: column;
    }

    .sidebar-item{
      flex-grow: 1;
    }
    `
    ;

    const content = /*html*/`
      <div class="sidebar" id="sidebar">
        <div class="sidebar-container">
          <div class="sidebar-close">
            <a href="#/" onclick="closeSidebar()"> Close </a>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-item">
              Drop Down language
            </div>
            <div class="sidebar-item">
              DarkMode
            </div>
          </div>
        </div>
      </div>`
    ;

    this.innerHTML = content;
    this.appendChild(style);
  };

  connectedCallback() {
  }
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-30.6vw";
}
function openSidebar() {
  document.getElementById("sidebar").style.left = "0vw";
}

customElements.define('my-sidebar', MySidebar);