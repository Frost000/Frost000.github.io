class MyHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement("style");
    style.textContent = /*css*/`
        .header{
            top: 0;
            width: 100%;
            height: 8vh;
            background-color: red;
            border-bottom: 5px solid black;
            display : flex;
            justify-content: center;
            gap: 10px;
        }
        .container{
            width: 45%;
            background-color: pink;
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        .item{
            background-color: blue;
            margin-top: 10px;
            margin-bottom: 10px;
        }`
    ;

    const content = /*html*/`
      <div class="header">
        <div class="container">
            <div class="item"><h1>Home</h1></div>
            <div class="item">Projects</div>
            <div class="item">Fun</div>
            <div class="item">${getLabel("home")}</div>
        </div>
      </div>`
    ;

    shadow.innerHTML = content;
    shadow.appendChild(style);
  };

  connectedCallback() {
    console.log('MyHeader added to page');
  }
}

function manageScroll() {

}

customElements.define('my-header', MyHeader);