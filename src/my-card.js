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
    this.fancy= false;
    this.detailLink = "https://hax.psu.edu";
  }

  static get styles() {
    return css`

:host([fancy]) .card {
 background-color: orange;
/* control block inline - block */

}
:host {
  display: inline-block;
}





      .card {
  background-color: red;
  width: 100%;  
  max-width: 360px;
  padding: 5px;
  border: 2px solid black;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  height: 600px;

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
  color: white;
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

summary{
  padding: 10px 20px;
 
 
}

slot{
  color: white;
  text-align: center;
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

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
    this.backgroundColor = this.fancy ? 'orange' : ''; 
  }

  render() {
    return html`
    <div class="controller">
   
<div class="card" style="background-color: ${this.backgroundColor}">
<div class="title">
  <h1>${this.title}</h1>
  <img src="${this.image}">
  <p class= "Description"><slot>${this.description}</slot></p>
</div>

<details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Details</summary>
  <div>
  <a href="${this.detailLink}" target="_blank"> 
  <button class="btn">
  <em>Link for more info </em>
  </button>
  </a>
  </div>
</details>

</div>
</div>

  `;
  }

  static get properties() {
    return {
      fancy: {type: Boolean, reflect: true},
      title: { type: String },
      image: {type: String},
      description: {type: String},
      backgroundColor: {type: String},
    
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
