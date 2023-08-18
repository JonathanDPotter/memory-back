class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>Memory Back</h1>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkName = this.getAttribute("link-name") || "broken";

    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>
      <a href="/${linkName}">${linkName}</a>
    </footer>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

const routes = {
  index: {
    root: "/",
    GET: {
      "/": "returns the homepage",
      "/routes": "returns this object",
      "/healthcheck": "returns a 200 status",
    },
  },
};

const routePre = document.getElementById("routes");

routePre.innerHTML = JSON.stringify(routes, null, 2);
