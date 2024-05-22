class FooterApp extends HTMLElement {
    constructor() {
        super();

        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
            p#textFooter {
                color: #eee;
                text-align: center;
                line-height: 60px;

                font-size: 0.8rem;
            }
            
            span {
                font-style: italic;
            }
        `;
    }

    render() {
        this._updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}

            <p id="textFooter">Copyright &copy; <span>sambalmatah</span> - 2024</p>
        `;
    }
}

customElements.define('footer-app', FooterApp);