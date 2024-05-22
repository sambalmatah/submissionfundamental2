class FormApp extends HTMLElement {
    constructor() {
        super();

        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
            .wrapper{
                background-color: white;
                max-width: 420px;
                margin: 0 auto;

                border-radius: 8px;
                box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
            }

            h2 {
                text-align: center;
                line-height: 5rem;
                height: 3rem

            }

            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 2rem 2rem;
            }
        
            #inputTitle {
                font-size: 1rem;
                padding: 0.4rem;
                border-radius: 0.2rem;
                border: 1px solid #666;


            }

            #inputBody {
                font-size: 1rem;
                padding: 0.4rem;
                border-radius: 0.2rem;
                border: 1px solid #666;
                min-height: 120px;

            }

            #addNewNotes {
                padding: 0.8rem;
                background-color: salmon;
                border: none;
                border-radius: 0.6rem;
                color: white;
                font-size: 1rem;
            }
            

            @media screen and (max-width: 440px) {
                .wrapper {
                    margin: auto 1rem;
                }
            }
        `;
    }

    render() {
        this._updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}
            <div class="wrapper">
                <h2>New Notes</h2>
                <form>
                    <input type="text" name="inputTitle" id="inputTitle" class="input-title" placeholder="Input title">
                    <textarea name="inputBody" id="inputBody" class="input-body" placeholder="Input body"></textarea>
                    <button type="button" id="addNewNotes">Add Notes</button>
                </form>
            </div>
        `;
    }
}

customElements.define('form-app', FormApp);