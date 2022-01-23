class Header extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <style>
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .btn {
                    display: inline-block;
                    background: green;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    margin: 5px;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 15px;
                    font-family: inherit;
                }
            </style>
            
            <header class="header">
                <h1>Todo App</h1>
                <button class="btn">Add</button>
            </header>
            <add-form></add-form>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    toggleAddForm = () => {
        const form = this.shadowRoot.querySelector('add-form');
        if (form.style.display !== "none")
            form.style.display = "none";
        else
            form.style.display = "block";
    }

    connectedCallback() {
        this.shadowRoot.querySelector('add-form').style.display = "none";
        this.shadowRoot.querySelector('.btn').addEventListener('click', () => {
            this.toggleAddForm();
        })
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.btn').removeEventListener();
    }
}

customElements.define("app-header", Header);