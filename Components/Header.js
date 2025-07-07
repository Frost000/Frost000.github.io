class MyHeader extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = /*css*/`
        :root{
          --header-size: 8vh;
          --text-size: 4vh;
          --container-padding: 0%;
        }

        .header{
            position: sticky;
            top: 0;
            width: 100%;
            height: var(--header-size);
            border-bottom: 0.6vh solid black;
            display : flex;
            justify-content: center;
            background-color: white;
            transition: 0.4s;
        }
        .container{
            width: 45%;
            display: flex;
            gap:1.5vw;
            justify-content: center;
            padding-left: var(--container-padding);
            transition: 0.7s;
        }
        .item{
            margin-top: 0.4vh;
            margin-bottom: 0.8vh;
            font-family: BlueOcean;
            font-size: var(--text-size);
            transition: 0.4s;
            a{
              color: black;
              text-decoration: none;
            }
        }
        .settings{
          transition: 0.4s;
          height: var(--text-size);
          width: var(--text-size);
          fill: none;
          stroke-width: 1.5;
          stroke: black;
        }`
    ;

    const content = /*html*/`
      <div class="header">
        <div class="container">
          <div class="item"><a href="/">${getLabel("home")}</a></div>
          <div class="item"><a href="/Projects">${getLabel("projects")}</a></div>
          <div class="item"><a href="/Online">${getLabel("online")}</a></div>
          <div class="item"><a href="#/" onclick="tryCallSidebar()">${getLabel("settings")}</a></div>
        </div>
      </div>`
    ;

    this.innerHTML = content;
    this.appendChild(style);
  };

  connectedCallback() {
    addEventListener("scroll", (event) => manageScroll());
  }
}

function tryCallSidebar() {
  openSidebar();
}

function manageScroll() {
  if (document.documentElement.scrollTop > 250) {
    document.documentElement.style.setProperty('--header-size', '4vh');
    document.documentElement.style.setProperty('--text-size', '2vh');
    document.documentElement.style.setProperty('--container-padding', '60%');
  } else {
    document.documentElement.style.setProperty('--header-size', '8vh');
    document.documentElement.style.setProperty('--text-size', '4vh');
    document.documentElement.style.setProperty('--container-padding', '0%');
  }
}

customElements.define('my-header', MyHeader);