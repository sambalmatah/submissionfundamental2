class HeaderApp extends HTMLElement {
    constructor() {
        super();

        // this.render();
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
            h1 {
                margin: 0 1rem;
                line-height: 60px;
                color: white;
            }
        `;
    }

    render() {
        this._updateStyle();
        
        this.innerHTML = `
            ${this._style.outerHTML}

            <h1>Note App</h1>
        `;
    }
}

customElements.define('header-app', HeaderApp);