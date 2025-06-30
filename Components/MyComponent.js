class MyComponent extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: 'open' });
    const style = `
      <style>
      .header{
      }
      </style>
    `;
    const html = /*html*/`
      <div>
        <h2><slot name="title">Default Title</slot></h2>
        <p><slot></slot></p>
      </div>
      `;

    this.innerHTML = style + html;
  };

  connectedCallback() {
    console.log('Element added to page');
    addEventListener("scroll", (event) => manageScroll(event))
  }
}

function manageScroll(event) {
    console.log(event);
};

customElements.define('my-component', MyComponent);