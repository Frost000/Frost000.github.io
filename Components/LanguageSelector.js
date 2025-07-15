class LanguageSelector extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = /*css*/`
    `;

    const content = /*html*/`
      <div>
        <h4>${getLabel("fr", "langs")}</h4>
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
            <option value="fr"><h1>FR - ${getLabel("fr", "langs")}</h1></option>
            <option value="en">EN - ${getLabel("en", "langs")}</option>
        </select>
      </div>
      `;

    this.innerHTML = content;
    this.appendChild(style);
  };
}

customElements.define('language-selector', LanguageSelector);