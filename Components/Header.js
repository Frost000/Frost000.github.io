class MyHeader extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = /*css*/`
        .header{
            position: sticky;
            top: 0;
            width: 100%;
            height: 8vh;
            border-bottom: 5px solid black;
            display : flex;
            justify-content: center;
            background-color: white;
        }
        .container{
            width: 45%;
            display: flex;
            gap: 40px;
            justify-content: center;
        }
        .item{
            margin-top: 5px;
            margin-bottom: 10px;
            font-family: BlueOcean;
            font-size: 4vh;

            a{
              color: black;
              text-decoration: none;
            }
        }`
    ;

    const content = /*html*/`
      <div class="header">
        <div class="container">
          <div class="item"><a href="/">${getLabel("home")}</a></div>
          <div class="item"><a href="/Projects">${getLabel("projects")}</a></div>
          <div class="item"><a href="/Online">${getLabel("online")}</a></div>
        </div>
      </div>`
    ;

    this.innerHTML = content;
    this.appendChild(style);
  };

  connectedCallback() {
    console.log('MyHeader added to page');
  }
}

function manageScroll() {

}

customElements.define('my-header', MyHeader);