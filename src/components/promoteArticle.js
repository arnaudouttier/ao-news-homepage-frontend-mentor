export default class PromoteArticle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const template = document.querySelector("#promote-article-template");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("promote-article", PromoteArticle);