import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image='';
    this.description= '';
    this.backgroundColor= 'red';
  }

  static get styles() {
    return css`
      .card {
  background-color: red;
  width: 100%;  
  max-width: 360px;
  padding: 5px;
  border: 2px solid black;
}

.fancy {
  background-color: orange;
  color: #FF0099;
}

.title {
  background-color: black;
  width: 100%; 
  max-width: 300px; 
  padding: 10px;
  margin: 20px;
  min-height: 450px;
}

.title h1 {
  color: white;
  text-align: center;
}

.title img {
  width: 100%;  
  max-width: 300px;
}

.description {
  background-color: black;
  color: white;
  margin: 20px;
  height: 75px;
  margin: 20px;
}

.description p {
  text-align: center;
  padding: 20px;
}

.button {
  padding: 10px 130px;
  width: auto; 
  display: inline-block;
  margin: 10px auto; 
}

.button a {
  border-color: black;
  background-color: white;
  padding: 10px 20px;
  border: 5px solid black;
  border-radius: 110px;
  border-width: 2px;
  font-size: 18px;
}

@media (min-width: 500px) and (max-width: 800px) {
  .button {
    display: inline-block;
  }
}

@media (max-width: 500px) {
  .card {
    width: 95%;
    padding: 10px;
  }

  .title {
    width: 90%;
    min-height: 400px;
    padding: 10px;
  }

  .description {
    padding: 10px;
  }

  .button a {
    font-size: 16px;
    padding: 10px 20px;
  }
}
    `;
  }

  render() {
    return html
    `<div class="controller">
   <button @click=${this.cloneNode}>Clone Card</button>
   <button @click=${this.changeName}>Change name</button>
   <button @click=${this.changePicture}>Change picture</button>
   <button @click=${this.changeBackground}>Change background</button>
   <button @click=${this.deleteCard}>Delete Card</button>
<div class="card" style="background-color: ${this.backgroundColor}">
<div class="title">
  <h1>${this.title}</h1>
  <img src="${this.image}">
</div>

<div class="description">
  <p>${this.description}</p>
</div>

<div class="button">
  <a href="https://hax.psu.edu">Details</a>
</div>
</div>
</div>

  `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      description: {type: String},
      backgroundColor: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
