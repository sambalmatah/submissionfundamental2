import data from './notes.js';

class ListNotes extends HTMLElement {
    notes = [];

    _note = {
        id: null,
        title: null,
        body: null,
        createAt: null,
    }

    constructor() {
        super();

        this._style = document.createElement('style');
    }

    connectedCallback() {     
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
            #cardWrapper {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                gap: 1rem;

                margin-block-start: 3rem;
                margin-inline: 1rem;
            }

            #cardNotes {
                border-radius: 4px;
                overflow: hidden;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
            }

            #cardTitle, #cardBody {
                padding: 1rem;
            }

            #cardTitle {
                background: #FA8072;
                color: #eee;
            }

            
            @media screen and (max-width: 1200px) {
                #cardWrapper {
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            }

            @media screen and (max-width: 840px) {
                #cardWrapper {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            

            @media screen and (max-width: 620px) {
                #cardWrapper {
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media screen and (max-width: 440px) {
                #cardWrapper {
                    grid-template-columns: 1fr;
                }
            }
        `;
    }

    render() {
        console.log(notes);
        this._updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}
            <div id="cardWrapper" class="card-wrapper">
                ${notes.map(note => `
                    <div id="cardNotes">
                        <div id="cardTitle">
                            <h3 id="titleNotes">${note.title}</h3>
                        </div>
                        <div id="cardBody">
                            <p id="bodyNotes">${note.body}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

    }

}

customElements.define('list-notes', ListNotes);