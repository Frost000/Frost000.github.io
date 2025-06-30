class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <div>
        <h2><slot name="title">Default Title</slot></h2>
        <p><slot></slot></p>
      </div>
    `;
  };

  connectedCallback() {
    console.log('Element added to page');
    console.log(window.innerHeight);
  }
}

customElements.define('my-component', MyComponent);