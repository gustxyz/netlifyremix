import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-NTWTLK5P.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/Header/index.tsx
init_react();
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-nav container mobile-nav-container"
  }, /* @__PURE__ */ React.createElement("img", {
    id: "mobile-logo",
    src: "/images/logo.png",
    alt: "mobile_company_logo",
    height: "60"
  }))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "side-menu",
    className: "side-nav"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    alt: "company logo",
    width: "100px"
  }), /* @__PURE__ */ React.createElement("ul", {
    id: "on-top",
    className: "navbar-links"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "active-menu",
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "about"
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "services"
  }, "Services")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "portfolio"
  }, "Portfolio")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "contact"
  }, "Contact")))))));
};
var Header_default = Header;

// app/components/Footer/index.tsx
init_react();
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "footer-img light-mode-svg",
    src: "https://d33wubrfki0l68.cloudfront.net/c272e13f11fec5e8a82b6342bc194b3eb74b5b72/7cf10/images/footer-swoosh.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "footer-img dark-mode-svg",
    src: "https://d33wubrfki0l68.cloudfront.net/3b756ae30ef51ccd8564c2978ea8a5a70f1931f8/95db7/images/footer-swoosh-dark.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-item image-box"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "footer-logo mobile-display",
    src: "/images/logo.png",
    alt: "alki digital web designs logo",
    height: "50"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "footer-logo desktop-display",
    src: "/images/logo.png",
    alt: "alki digital web designs logo",
    height: "50"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:alkidigital.webdesign@gmail.com"
  }, "alkidigital.webdesign@gmail.com"), /* @__PURE__ */ React.createElement("a", {
    href: "tel:509-481-7512"
  }, "(509)481-7512")), /* @__PURE__ */ React.createElement("div", {
    className: "footer-item"
  }, /* @__PURE__ */ React.createElement("h2", null, "Navigation"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "footer-line"
  }), /* @__PURE__ */ React.createElement("a", {
    className: "link",
    href: "/"
  }, "Home"), /* @__PURE__ */ React.createElement("a", {
    className: "link",
    href: "/html/about"
  }, "About"), /* @__PURE__ */ React.createElement("a", {
    className: "link-long",
    href: "/html/services"
  }, "Services"), /* @__PURE__ */ React.createElement("a", {
    className: "link-long",
    href: "/#portfolio"
  }, "Portfolio"), /* @__PURE__ */ React.createElement("a", {
    className: "link-long",
    href: "/html/contact"
  }, "Contact")), /* @__PURE__ */ React.createElement("div", {
    className: "footer-item"
  }, /* @__PURE__ */ React.createElement("h2", null, "Services"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "footer-line"
  }), /* @__PURE__ */ React.createElement("p", null, "Web Design"), /* @__PURE__ */ React.createElement("p", null, "Website Maintenance"), /* @__PURE__ */ React.createElement("p", null, "SEO Services"), /* @__PURE__ */ React.createElement("p", null, "Content Creation"), /* @__PURE__ */ React.createElement("p", null, "Logo Design")))), /* @__PURE__ */ React.createElement("div", {
    className: "branding"
  }, /* @__PURE__ */ React.createElement("p", null, "Copyright \xA9 2021 | Alki Digital Web Services | All Rights Reserved")));
};
var Footer_default = Footer;

// app/assets/styles/base.css
var base_default = "/build/_assets/base-MCPENS2Z.css";

// app/root.tsx
var meta = () => {
  return { title: "Alki Digital | Web Design" };
};
var BaseTemplate = ({ children }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("link", {
  href: base_default,
  rel: "stylesheet"
}), /* @__PURE__ */ React.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
function App() {
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var ErrorBoundary = ({ error }) => {
  console.error(error);
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, error);
};
export {
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-GV7V77ZZ.js.map
