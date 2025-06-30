class MyHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement("style");
    style.textContent = /*css*/`
        .header{
            background-color: red;
        }`
    ;

    const content = /*html*/`
      <div class="header">
        <p>
            123
        </p>
      </div>`
    ;

    shadow.innerHTML = content;
    shadow.appendChild(style);
  };

  connectedCallback() {
    console.log('MyHeader added to page');
  }
}

customElements.define('my-header', MyHeader);