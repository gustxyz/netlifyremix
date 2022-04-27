var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const url = new URL(request.url);
  const cookie = (0, import_remix.createCookie)("pabio_v20220123_locale", {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Set-Cookie", await cookie.serialize(url.pathname.split("/")[1]));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/Header/index.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/assets/images/logo.png
var logo_default = "/build/_assets/logo-BHSRVWXK.png";

// app/components/Header/index.tsx
var Header = () => {
  console.log(logo_default);
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-nav container mobile-nav-container"
  }, /* @__PURE__ */ React.createElement("img", {
    id: "mobile-logo",
    src: logo_default,
    alt: "mobile_company_logo",
    height: "60"
  }))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "side-menu",
    className: "side-nav"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_default,
    alt: "company logo",
    width: "100px"
  }), /* @__PURE__ */ React.createElement("ul", {
    id: "on-top",
    className: "navbar-links"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "active-menu",
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "about"
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "services"
  }, "Services")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "portfolio"
  }, "Portfolio")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-li"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
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
    src: logo_default,
    alt: "alki digital web designs logo",
    height: "50"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "footer-logo desktop-display",
    src: logo_default,
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

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx
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
}), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
function App() {
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var ErrorBoundary = ({ error }) => {
  console.error(error);
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, error);
};

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Homepage
});
init_react();

// app/components/About/index.tsx
init_react();
var About = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("link", {
    href: "https://d33wubrfki0l68.cloudfront.net/bundles/bf62e7a7871d940c3c6df187eae9258636299ed4.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "About Us")), /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("span", null, "Alki Digital Web Services"), /* @__PURE__ */ React.createElement("h2", null, "Giving Small Businesses The Big Business Treatment"), /* @__PURE__ */ React.createElement("p", null, "My name is Alex L, I am the owner and sole developer of Alki Digital. After working in the tech industry for a little over 4 years I launched this business as a way for me to serve small businesses while building my own. My goal is to build a company that can foster community, and provide a safe space for industry professionals to harness their skills to build careers of their own.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "A lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website. The ones that do, get taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years. A lot of businesses are in a tough spot - they either can't afford a good website, and if they can they don't know who to trust to make something great. That's where the $0 down and $100 a month model comes in. It's more managable for a small business to handle and won't hurt their bank accounts.")))), /* @__PURE__ */ React.createElement("section", {
    id: "circles"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "topper"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "Quality "), " Over Quantity"), /* @__PURE__ */ React.createElement("p", null, "We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on as we work closely with you to create a website you're 100% happy with and not something you just settle for.")), /* @__PURE__ */ React.createElement("div", {
    className: "circles"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "1")), /* @__PURE__ */ React.createElement("h3", null, "No Pre-Written Content"), /* @__PURE__ */ React.createElement("p", null, "We write unique and engaging content around your company.  Everyone is unique!")), /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "2")), /* @__PURE__ */ React.createElement("h3", null, "Unbeatable Customer Service"), /* @__PURE__ */ React.createElement("p", null, "No automated systems - When you need help the lead developer answers your call.")), /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "3")), /* @__PURE__ */ React.createElement("h3", null, "No Limits On Design"), /* @__PURE__ */ React.createElement("p", null, "We can edit the design to cater to your tastes.  Everything is customizable!")))), /* @__PURE__ */ React.createElement("button", {
    className: "button-solid about-button",
    type: "button"
  }, "OUR SERVICES")), /* @__PURE__ */ React.createElement("section", {
    id: "about-contact",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about-container container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-item"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "contact-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "contact-info"
  }, /* @__PURE__ */ React.createElement("h2", null, "Phone:"), /* @__PURE__ */ React.createElement("p", null, "(509) 481-7512"))), /* @__PURE__ */ React.createElement("div", {
    className: "contact-item"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "contact-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "contact-info"
  }, /* @__PURE__ */ React.createElement("h2", null, "Email:"), /* @__PURE__ */ React.createElement("p", null, "alkidigital.webdesign@gmail.com")))), /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, /* @__PURE__ */ React.createElement("form", {
    "data-netlify-recaptcha": "true",
    id: "contact",
    method: "post",
    name: "Contact Form"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "Contact Form"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "contact-topper"
  }, /* @__PURE__ */ React.createElement("span", null, "DROP"), " US A LINE"), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Your Name",
    type: "text",
    tabIndex: 1,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "email",
    name: "email",
    placeholder: "Your Email Address",
    type: "email",
    tabIndex: 2,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "phone number",
    name: "phone",
    placeholder: "Your Phone Number",
    type: "tel",
    tabIndex: 3,
    required: true
  }), /* @__PURE__ */ React.createElement("textarea", {
    "aria-label": "write your message",
    name: "message",
    placeholder: "Type your Message Here....",
    tabIndex: 4,
    required: true
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("script", {
    src: "https://www.google.com/recaptcha/api.js"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "g-recaptcha",
    "data-sitekey": "6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9"
  }), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: { width: 302, height: 422, position: "relative" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: 302, height: 422, position: "absolute" }
  })), /* @__PURE__ */ React.createElement("div", {
    style: { width: 300, height: 60, borderStyle: "none", bottom: 12, left: 25, margin: 0, padding: 0, right: 25, background: "#f9f9f9", border: "1px solid #c1c1c1", borderRadius: 3 }
  }, /* @__PURE__ */ React.createElement("textarea", {
    id: "g-recaptcha-response",
    name: "g-recaptcha-response",
    className: "g-recaptcha-response",
    style: { width: 250, height: 40, border: "1px solid #c1c1c1", margin: "10px 25px", padding: 0, resize: "none" }
  }))))), /* @__PURE__ */ React.createElement("p", {
    className: "form-submit"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "submit",
    type: "submit",
    id: "contact-submit",
    className: "primary button-solid",
    "data-submit": "...Sending"
  }, "Submit")))))));
};
var About_default = About;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/about/index.tsx
function Homepage() {
  return /* @__PURE__ */ React.createElement(About_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Homepage2
});
init_react();

// app/components/Main/index.tsx
init_react();
var Main = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "landing",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Small Business Web Design + Development"), /* @__PURE__ */ React.createElement("h2", null, "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo."), /* @__PURE__ */ React.createElement("button", {
    className: "button-solid quote-button",
    type: "button"
  }, "GET IN TOUCH!"), /* @__PURE__ */ React.createElement("img", {
    className: "mock-up desktop-display",
    src: "https://d33wubrfki0l68.cloudfront.net/81ff3b9ad31c44ae1e5d3af2f0d6364d60edee85/2f15f/images/mock-up-replace.png",
    alt: "mockup of a website on computer desktop and phone"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "mock-up mobile-display",
    src: "https://d33wubrfki0l68.cloudfront.net/9e5482183c08d98fc43a56fa1c9a7f1a0f61a207/a3b7c/images/mock-up-mobile-repace.png",
    alt: "a mockup of a website on computer desktop and phone"
  })), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "swoop light-swoop",
    src: "https://d33wubrfki0l68.cloudfront.net/25e94eabb1cdec2613bd265d645dc15324bacfe8/86f45/images/landing-swoosh.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "swoop dark-swoop ",
    src: "https://d33wubrfki0l68.cloudfront.net/2c499269a4a33fbbfca28010db8fdbb668a23c1c/beba6/images/landing-swoosh-dark.svg",
    alt: ""
  })), /* @__PURE__ */ React.createElement("section", {
    id: "what-we-do",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "what-topper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "what-we-do-topper container"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "WHAT "), " WE DO"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "graphic-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dash"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/29048d9efe89252399122cd2487f253dcbe9bcc4/cf8a5/images/code.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "dash"
  })), /* @__PURE__ */ React.createElement("p", null, "We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business."))), /* @__PURE__ */ React.createElement("div", {
    className: "what-we-do-content container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "item"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    height: "512pt",
    viewBox: "-11 0 512 512.001",
    width: "512pt"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m261.4375 511.441406 138.851562-54.941406c54.765626-44.929688 89.710938-113.132812 89.710938-189.5 0-135.308594-109.691406-245-245-245s-245 109.691406-245 245c0 135.3125 109.691406 245 245 245 5.527344 0 11.003906-.199219 16.4375-.558594zm0 0",
    fill: "#27a3ff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m388.742188 318.949219c1.953124-23.644531-1.648438-47.335938-12.117188-68.628907-27.042969-55.011718-20.839844-59.003906-21.679688-113.601562 0-11.15625-9.042968-20.195312-20.195312-20.195312-11.15625 0-20.195312 9.039062-20.195312 20.195312 0 7.203125 0 203.832031 0 203.0625 0 3.148438-.335938 6.222656-.957032 9.1875v29.070312c0 24.496094-19.929687 44.429688-44.425781 44.429688-16.269531 0-72.375 0-110.550781 0 16.980468 23.617188 40.214844 42.113281 67.179687 53.3125.167969.066406.335938.136719.503907.207031 16.222656 6.855469 28.609374 19.78125 35.132812 35.453125 52.535156-3.480468 100.546875-23.507812 138.851562-54.9375l-15.050781-55.292968c-2.148437-7.902344-2.90625-16.117188-2.238281-24.277344zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m83.609375 117.230469-6.152344-5.699219c-9.480469-8.789062-24.429687-8.21875-33.214843 1.265625-8.785157 9.480469-8.214844 24.429687 1.265624 33.214844l38.101563 35.304687zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m285.621094 0h-172.714844c-16.757812 0-30.390625 13.636719-30.390625 30.394531v363.980469c0 16.757812 13.632813 30.394531 30.390625 30.394531h172.714844c16.757812 0 30.394531-13.636719 30.394531-30.394531v-363.980469c0-16.757812-13.636719-30.394531-30.394531-30.394531zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m141.035156 22.539062c-1.644531-2.445312-2.605468-5.386718-2.605468-8.554687 0-6.21875 3.703124-11.5625 9.015624-13.984375h-34.539062c-16.785156 0-30.394531 13.609375-30.394531 30.394531v363.980469c0 16.785156 13.609375 30.390625 30.394531 30.390625h36.71875v-375.589844c0-9.558593-3.253906-18.703125-8.589844-26.636719zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h172.714844c7.066406 0 12.796875-5.730469 12.796875-12.800781 0-6.945312 0-108.335938 0-202.398438zm0 0",
    fill: "#e6f7fe"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h30.273438v-215.199219zm0 0",
    fill: "#d5f1fe"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m169.675781 253.03125c0 11.074219-8.976562 20.050781-20.050781 20.050781s-20.050781-8.976562-20.050781-20.050781 8.976562-20.054688 20.050781-20.054688 20.050781 8.980469 20.050781 20.054688zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m169.675781 327.382812c0 11.074219-8.976562 20.054688-20.050781 20.054688s-20.050781-8.980469-20.050781-20.054688c0-11.074218 8.976562-20.050781 20.050781-20.050781s20.050781 8.976563 20.050781 20.050781zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m147.359375 233.113281c-10.007813 1.128907-17.785156 9.609375-17.785156 19.917969 0 11.074219 8.976562 20.050781 20.050781 20.050781 6.90625 0 12.992188-3.492187 16.597656-8.804687-17.289062 1.949218-28.296875-17.269532-18.863281-31.164063zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m147.359375 307.46875c-10.007813 1.125-17.785156 9.609375-17.785156 19.914062 0 11.078126 8.976562 20.054688 20.050781 20.054688 6.90625 0 12.992188-3.492188 16.597656-8.804688-17.183594 1.933594-28.359375-17.179687-18.863281-31.164062zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#11dfef"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m231.566406 244.695312h-28.46875c-4.140625 0-7.5-3.359374-7.5-7.5 0-4.144531 3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140626-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m260.035156 276.367188h-56.9375c-4.144531 0-7.5-3.359376-7.5-7.5 0-4.144532 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.355468 7.5 7.5 0 4.140624-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m231.566406 319.046875h-28.46875c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5s-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m260.035156 350.71875h-56.9375c-4.144531 0-7.5-3.355469-7.5-7.5 0-4.140625 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144531-3.359375 7.5-7.5 7.5zm0 0"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-91.496093c-5.808594 0-10.558594-4.75-10.558594-10.558594 0-2.417968-1.960937-4.378906-4.382813-4.378906h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h198.3125v-163.582031c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0",
    fill: "#f948b4"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m143.179688 24.507812c-.203126-.8125-.320313-1.65625-.320313-2.527343 0-2.421875-1.960937-4.382813-4.382813-4.382813h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h43.171876zm0 0",
    fill: "#e00e8b"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-50.464843l103.871093 130.203125v-132.34375c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0",
    fill: "#fc7acd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m166.917969 77.207031h-34.585938c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h34.585938c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140625-3.359375 7.5-7.5 7.5zm0 0",
    fill: "#fc7acd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 241.191406c-7.730468 8.339844-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964843c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 212.085938-16.410156-15.203126c2.160156 7.824219.367187 16.542969-5.550781 22.929688-5.921875 6.390625-14.480469 8.839844-22.441406 7.285156l16.40625 15.203125c8.34375 7.730469 21.371093 7.230469 29.105468-1.109375 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 297.363281c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964844c-8.34375-7.730468-8.839844-20.761718-1.109375-29.101562 7.730469-8.34375 20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730469 8.839844 20.757812 1.109375 29.101562zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 353.539062c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109376l-34.496094-31.964844c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m385.238281 401.207031c-1.066406-3.929687-1.789062-7.933593-2.167969-11.972656-38.164062 62.65625-112.257812 91.753906-181.855468 73.660156 7.761718 4.988281 15.984375 9.308594 24.585937 12.882813.167969.070312.335938.140625.503907.210937 16.222656 6.851563 28.609374 19.777344 35.132812 35.453125 52.535156-3.480468 100.546875-23.511718 138.851562-54.941406zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 268.261719-16.410156-15.203125c2.160156 7.820312.367187 16.539062-5.550781 22.929687-5.921875 6.390625-14.480469 8.839844-22.441406 7.285157l16.40625 15.199218c8.34375 7.730469 21.375 7.234375 29.105468-1.109375 7.730469-8.34375 7.230469-21.371093-1.109375-29.101562zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 324.433594-16.410156-15.203125c2.160156 7.824219.367187 16.542969-5.550781 22.929687-5.921875 6.390625-14.480469 8.84375-22.441406 7.285156l16.40625 15.203126c8.34375 7.730468 21.375 7.234374 29.105468-1.109376 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0",
    fill: "#fbbc8d"
  })), /* @__PURE__ */ React.createElement("h3", null, "Mobile-First Design"), /* @__PURE__ */ React.createElement("p", null, "We start building your site for mobile devices first, then we add on to it to make tablet and desktop.")), /* @__PURE__ */ React.createElement("div", {
    className: "item"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    "enable-background": "new 0 0 512 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m256 21.995c-135.311 0-245.002 109.691-245.002 245.002 0 52.367 16.439 100.889 44.425 140.708l286.822 88.666c92.755-34.893 158.757-124.419 158.757-229.373 0-135.311-109.691-245.003-245.002-245.003z",
    fill: "#ffdd40"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m231.432 113.764c0-9.306 1.146-18.348 3.29-27.001h-136.783c-3.034 0-5.995.316-8.855.911-12.847 11.963-24.404 25.288-34.446 39.748-.057.906-.096 1.818-.096 2.738v276.275c10.451 15.071 22.551 28.912 36.035 41.265l216.579 58.936c12.562-2.672 24.769-6.302 36.54-10.816v-269.794c-61.903 0-112.264-50.36-112.264-112.262z",
    fill: "#167cc1"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m162.165 480.399-2.113-336.11c-.003-.492-.185-.964-.49-1.35-5.347-6.752-2.011-11.404.082-13.366.685-.642.846-1.673.417-2.508-2.463-4.796.815-7.829 2.195-8.834.379-.276.648-.676.779-1.126l3.773-13.061c.203-.703.041-1.471-.449-2.014-6.459-7.16-1.993-12.277.494-14.304.318-.259.539-.596.664-.963h-69.578c-23.929 0-43.397 19.468-43.397 43.397v276.273c10.054 14.499 21.633 27.858 34.503 39.85z",
    fill: "#024788"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m81.542 195.887v243.108c44.43 45.062 106.177 73.005 174.458 73.005 20.951 0 41.285-2.636 60.695-7.583v-281.681c-18.787-4.656-35.72-14.055-49.454-26.849z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m81.542 438.996c22.271 22.587 48.888 40.875 78.506 53.494v-296.603h-78.506z",
    fill: "#d3dcfb"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m167.149 117.862h-4.333c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h4.333c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#1e92d3"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m234.384 117.862h-41.638c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h41.638c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#1e92d3"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m233.653 136.029h-83.035c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.266-10.266h-30.413c-9.056 0-16.397 7.341-16.397 16.397v68.385h188.644c-18.379-15.956-31.535-37.775-36.533-62.516z",
    fill: "#9bd8f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m150.618 136.029c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.265-10.266h-30.414c-9.056 0-16.397 7.341-16.397 16.397v68.385h78.505v-62.517h-9.429z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#1e92d3"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m316.695 210.236c-4.142 0-7.5 3.357-7.5 7.5v288.455c5.06-1.12 10.063-2.392 15-3.819v-284.636c0-4.142-3.358-7.5-7.5-7.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m89.042 446.282v-316.122c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h88.035c4.142 0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-88.035c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.414c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m159.644 129.573c.306-.286.489-.655.58-1.044h-9.606c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.413c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23v-316.123c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h9.281c-.083-.21-.195-.41-.337-.59-5.347-6.751-2.011-11.404.081-13.365z",
    fill: "#167cc1"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m241.934 157.106h-81.585v26.286h94.292c.568 0 1.124-.048 1.674-.118-5.892-7.984-10.75-16.772-14.381-26.168z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m161.349 157.106h-14.752c-7.259 0-13.143 5.884-13.143 13.143s5.884 13.143 13.143 13.143h14.752z",
    fill: "#3c58a0"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m116.535 141.832h-10.334c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h10.334c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#e9efff"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m279.821 344.5h-161.405c-5.445 0-9.899-4.455-9.899-9.899v-87.32c0-5.445 4.455-9.899 9.899-9.899h161.405c5.445 0 9.899 4.455 9.899 9.899v87.32c0 5.445-4.454 9.899-9.899 9.899z",
    fill: "#ff4155"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m108.517 247.281v87.32c0 5.445 4.455 9.899 9.899 9.899h103.706c-.316-.525-.778-.97-1.374-1.255-8.068-3.848-7.854-10.046-6.848-13.692.443-1.607-.374-3.315-1.94-3.886-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.084-1.484-1.191-2.714-2.656-2.964-16.049-2.743-14.719-15.34-13.63-20.039.139-.601.094-1.214-.103-1.775h-41.029c-5.446 0-9.9 4.454-9.9 9.899z",
    fill: "#e80054"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m138.23 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.357 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m113.517 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 382.003h-94.074c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h94.074c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m195.647 382.003h-37.083c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h37.083c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m195.648 389.882c-4.142 0-7.5-3.357-7.5-7.5v-15.5c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v15.5c0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#e80054"
  })), /* @__PURE__ */ React.createElement("ellipse", {
    cx: "199.118",
    cy: "290.941",
    fill: "#e9efff",
    rx: "39.071",
    ry: "39.071",
    transform: "matrix(.16 -.987 .987 .16 -119.961 440.885)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m211.959 325.668c-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.042-.747-.345-1.43-.821-1.955-9.108 7.153-14.965 18.257-14.965 30.736 0 21.578 17.493 39.071 39.071 39.071 5.145 0 10.053-1.004 14.551-2.811-.347-.69-.936-1.252-1.711-1.534z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m213.804 286.915-19.081-12.199c-3.18-2.033-7.352.251-7.352 4.026v24.398c0 3.775 4.172 6.059 7.352 4.026l19.081-12.199c2.939-1.879 2.939-6.173 0-8.052z",
    fill: "#ff4155"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m180.747 414.763h-72.23c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h72.23c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 444.145h-181.204c-4.142 0-7.5-3.358-7.5-7.5 0-4.143 3.358-7.5 7.5-7.5h181.204c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 456.922h-181.204c-1.9 0-3.63.712-4.952 1.877 5.833 4.642 11.884 9.02 18.133 13.123h168.023c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 484.7h-146.2c11.395 5.899 23.313 10.925 35.665 15h110.534c4.142 0 7.5-3.357 7.5-7.5.001-4.142-3.357-7.5-7.499-7.5z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "343.695",
    cy: "113.763",
    fill: "#2a428c",
    r: "113.763"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m387.182 155.35c.097-1.953-.613-3.856-1.996-5.239l-6.662-6.662c-1.2-1.2-2.808-1.891-4.502-1.997-21.61-1.357-22.772-19.765-22.708-24.531.011-.815-.137-1.622-.417-2.387l-5.878-16.076c-.837-2.287-2.829-3.926-5.219-4.394-51.017-9.995-39.706-68.875-35.972-83.791.258-1.031.257-2.089.037-3.098-43.184 16.144-73.934 57.773-73.934 106.589 0 62.83 50.933 113.763 113.763 113.763 7.325 0 14.484-.701 21.424-2.023l30.396-60.95c-7.418-1.528-8.482-6.176-8.332-9.204z",
    fill: "#1c2e7a"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m299.712 152.603-33.304-33.304c-3.057-3.057-3.057-8.015 0-11.072l33.304-33.304c3.057-3.057 8.014-3.058 11.072 0 3.057 3.057 3.058 8.015 0 11.072l-27.768 27.769 27.768 27.768c3.057 3.057 3.057 8.015 0 11.072-3.058 3.057-8.014 3.056-11.072-.001z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m376.607 152.603c-3.057-3.057-3.057-8.014 0-11.072l27.768-27.768-27.769-27.768c-3.057-3.057-3.057-8.015 0-11.072 3.058-3.058 8.015-3.058 11.072 0l33.305 33.304c3.055 3.056 3.057 8.015 0 11.072l-33.304 33.304c-3.057 3.057-8.014 3.058-11.072 0z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m325.589 154.213c-3.947-1.766-5.714-6.398-3.948-10.344l29.816-66.608c1.767-3.946 6.399-5.713 10.344-3.947 3.947 1.767 5.714 6.398 3.947 10.344l-29.816 66.608c-1.76 3.934-6.385 5.718-10.343 3.947z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m441.789 192.471h-9.091c-2.402 0-4.356-1.954-4.356-4.356v-9.091c0-10.81-7.631-14.419-12.5-15.622h-67.236c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h103.848c2.738 0 4.958-2.22 4.958-4.958v-117.961c-2.916-10.459-15.475-10.701-15.623-10.703z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m383.069 301.465v-113.435c0-13.601 11.026-24.628 24.627-24.628h-59.09c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h59.09c-13.601 0-24.627-11.026-24.627-24.628z",
    fill: "#d3dcfb"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m452.296 187.958-19.44-19.44c-3.275-3.275-7.718-5.115-12.35-5.115h-8.628s15.862.242 15.862 15.622v9.091c0 2.738 2.22 4.958 4.958 4.958h9.091s15.622.128 15.622 14.771v-7.537c0-4.632-1.84-9.075-5.115-12.35z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#73c3f9"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m414.045 238.911h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 218.407h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m395.563 218.407h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 258.586h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m395.563 258.586h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m386.377 279.088h-3.814c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h3.814c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 279.088h-35.644c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h35.644c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 238.911h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 218.407h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 258.586h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 279.088h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m436.647 238.911h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m414.045 299.591h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 299.591h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m436.647 299.591h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }))), /* @__PURE__ */ React.createElement("h3", null, "Optimization"), /* @__PURE__ */ React.createElement("p", null, "60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines."))))), /* @__PURE__ */ React.createElement("section", {
    id: "pricing",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "piggy-bank",
    src: "https://d33wubrfki0l68.cloudfront.net/1a6a7635d723bd43ad01eb8e14ca555ade9200d9/e643b/images/savings.svg",
    alt: "drawing of a man next to a large piggy bank",
    width: "300px"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "left-text-group"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "$0"), " Down, ", /* @__PURE__ */ React.createElement("span", null, "$150"), " Per Month, ", /* @__PURE__ */ React.createElement("br", null), "No Minimum Contract"), /* @__PURE__ */ React.createElement("p", null, "$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved. ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "You own your domain, content, listing, and profiles.  Cancel anytime with no fees or hassle.")), /* @__PURE__ */ React.createElement("div", {
    className: "list-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Hosting Fees Included"), /* @__PURE__ */ React.createElement("p", null, "Hosting fees are built right into the monthly payment."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Unlimited Edits"), /* @__PURE__ */ React.createElement("p", null, "Change anything you want at anytime and it will be done that day."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "24/7 Customer Service"), /* @__PURE__ */ React.createElement("p", null, "Call direct anytime day or night, no phone trees or automated responses."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Web Design & Development"), /* @__PURE__ */ React.createElement("p", null, "Includes over 40 hours of design, development, and testing."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Citations And Listings"), /* @__PURE__ */ React.createElement("p", null, "It's important to have your website linked from other websites, like directories."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Google Analytics"), /* @__PURE__ */ React.createElement("p", null, "We install Analytics for free to monitor traffic and where it comes from."))))))), /* @__PURE__ */ React.createElement("section", {
    id: "prices",
    className: "section "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard + Blogging"), /* @__PURE__ */ React.createElement("span", null, "STARTING AT"), /* @__PURE__ */ React.createElement("h3", null, "300"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1000+ Word Post"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Written By an SEO Specialist"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1 Post Per Month"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " $150 Per Extra Post")), /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US")), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard"), /* @__PURE__ */ React.createElement("span", null, "5 PAGES"), /* @__PURE__ */ React.createElement("h3", null, "150"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Unlimited Edits"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Includes Hosting"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 24/7 Customer Service"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Lifetime Updates")), /* @__PURE__ */ React.createElement("button", {
    className: "button-solid",
    type: "button"
  }, "CONTACT US")), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Logos & Graphic Design"), /* @__PURE__ */ React.createElement("span", null, "INCLUDED!"), /* @__PURE__ */ React.createElement("h3", null, "0"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 2 revisions"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " All File Formats"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Ready to use"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " FREE w/ Subscription")), /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US")))));
};
var Main_default = Main;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
function Homepage2() {
  return /* @__PURE__ */ React.createElement(Main_default, null);
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9hYm91dC9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQWJvdXQvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2Fib3V0L2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZSwgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3QgY29va2llID0gY3JlYXRlQ29va2llKFwicGFiaW9fdjIwMjIwMTIzX2xvY2FsZVwiLCB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcbiAgICBcIlNldC1Db29raWVcIixcbiAgICBhd2FpdCBjb29raWUuc2VyaWFsaXplKHVybC5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0pXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEVycm9yQm91bmRhcnlDb21wb25lbnQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZU1hdGNoZXMsXG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cblxuaW1wb3J0ICBTdHlsZXMgIGZyb20gXCIuL2Fzc2V0cy9zdHlsZXMvYmFzZS5jc3NcIlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJBbGtpIERpZ2l0YWwgfCBXZWIgRGVzaWduXCIgfTtcbn07XG5cblxuXG5jb25zdCBCYXNlVGVtcGxhdGU6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICA8aGVhZD5cbiAgICAgIDxsaW5rIGhyZWY9e1N0eWxlc30gcmVsPSdzdHlsZXNoZWV0Jy8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxMaW5rcyAvPlxuICAgIFxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZVRlbXBsYXRlPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE91dGxldCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQmFzZVRlbXBsYXRlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICh7IGVycm9yIH0pID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiA8QmFzZVRlbXBsYXRlPntlcnJvcn08L0Jhc2VUZW1wbGF0ZT47XG59O1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coTG9nbyk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2IGNvbnRhaW5lciBtb2JpbGUtbmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJtb2JpbGUtbG9nb1wiIHNyYz17TG9nb30gYWx0PVwibW9iaWxlX2NvbXBhbnlfbG9nb1wiIGhlaWdodD1cIjYwXCIgLz4gXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gYXJpYS1sYWJlbD1cIm9wZW4gdGhlIG1lbnVcIiBpZD1cIm1lbnUtYnV0dG9uXCIgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc3ByaW5nXCIgb25DbGljaz1cInRvZ2dsZU5hdigpXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlLW1lbnVcIiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiY29tcGFueSBsb2dvXCIgd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cIm9uLXRvcFwiIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1saVwiPjxMaW5rIGNsYXNzTmFtZT0nYWN0aXZlLW1lbnUnIHRvPScvJz5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgdG89J2Fib3V0Jz5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1saVwiPjxMaW5rIHRvPSdzZXJ2aWNlcyc+U2VydmljZXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayB0bz0ncG9ydGZvbGlvJz5Qb3J0Zm9saW88L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayB0bz0nY29udGFjdCc+Q29udGFjdDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwgIlxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIjtcblxuXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyPlxuICAgICAgPGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItaW1nIGxpZ2h0LW1vZGUtc3ZnXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9jMjcyZTEzZjExZmVjNWU4YTgyYjYzNDJiYzE5NGIzZWI3NGI1YjcyLzdjZjEwL2ltYWdlcy9mb290ZXItc3dvb3NoLnN2Z1wiIGFsdD1cIlwiICAvPlxuICAgICAgPGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItaW1nIGRhcmstbW9kZS1zdmdcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzNiNzU2YWUzMGVmNTFjY2Q4NTY0YzI5NzhlYThhNWE3MGYxOTMxZjgvOTVkYjcvaW1hZ2VzL2Zvb3Rlci1zd29vc2gtZGFyay5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdXBcIj4gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaXRlbSBpbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gbW9iaWxlLWRpc3BsYXlcIiBzcmM9e0xvZ299IGFsdD1cImFsa2kgZGlnaXRhbCB3ZWIgZGVzaWducyBsb2dvXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXItbG9nbyBkZXNrdG9wLWRpc3BsYXlcIiBzcmM9e0xvZ299IGFsdD1cImFsa2kgZGlnaXRhbCB3ZWIgZGVzaWducyBsb2dvXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmFsa2lkaWdpdGFsLndlYmRlc2lnbkBnbWFpbC5jb21cIj5hbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1MDktNDgxLTc1MTJcIj4oNTA5KTQ4MS03NTEyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaXRlbVwiPiBcbiAgICAgICAgICAgICAgICAgIDxoMj5OYXZpZ2F0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluaycgaHJlZj0nLyc+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluaycgaHJlZj0nL2h0bWwvYWJvdXQnPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLWxvbmcnIGhyZWY9Jy9odG1sL3NlcnZpY2VzJz5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay1sb25nJyBocmVmPScvI3BvcnRmb2xpbyc+UG9ydGZvbGlvPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLWxvbmcnIGhyZWY9Jy9odG1sL2NvbnRhY3QnPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+V2ViIERlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPldlYnNpdGUgTWFpbnRlbmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5TRU8gU2VydmljZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db250ZW50IENyZWF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+TG9nbyBEZXNpZ248L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kaW5nXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDIxIHwgQWxraSBEaWdpdGFsIFdlYiBTZXJ2aWNlcyB8IEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BYm91dCdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPEFib3V0IC8+XG59XG4iLCAiXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICA8bGluayBocmVmPSdodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvYmY2MmU3YTc4NzFkOTQwYzNjNmRmMTg3ZWFlOTI1ODYzNjI5OWVkNC5jc3MnIHJlbD0nc3R5bGVzaGVldCcvPlxuICAgIFxuICAgIFxuXG4gIFxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aDE+QWJvdXQgVXM8L2gxPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWxraSBEaWdpdGFsIFdlYiBTZXJ2aWNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDI+R2l2aW5nIFNtYWxsIEJ1c2luZXNzZXMgVGhlIEJpZyBCdXNpbmVzcyBUcmVhdG1lbnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwPk15IG5hbWUgaXMgQWxleCBMLCBJIGFtIHRoZSBvd25lciBhbmQgc29sZSBkZXZlbG9wZXIgb2YgQWxraSBEaWdpdGFsLiBBZnRlciB3b3JraW5nIGluIHRoZSB0ZWNoIGluZHVzdHJ5IGZvciBhIGxpdHRsZSBvdmVyIDQgeWVhcnMgSSBsYXVuY2hlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzIGJ1c2luZXNzIGFzIGEgd2F5IGZvciBtZSB0byBzZXJ2ZSBzbWFsbCBidXNpbmVzc2VzIHdoaWxlIGJ1aWxkaW5nIG15IG93bi4gTXkgZ29hbCBpcyB0byBidWlsZCBhIGNvbXBhbnkgdGhhdCBjYW4gZm9zdGVyIGNvbW11bml0eSwgYW5kIFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlIGEgc2FmZSBzcGFjZSBmb3IgaW5kdXN0cnkgcHJvZmVzc2lvbmFscyB0byBoYXJuZXNzIHRoZWlyIHNraWxscyB0byBidWlsZCBjYXJlZXJzIG9mIHRoZWlyIG93bi4gXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgIEEgbG90IG9mIHNtYWxsIGJ1c2luZXNzZXMgZG9uJ3QgaGF2ZSB0aGUgZnVuZHMgdG8gc3BlbmQgdGhvdXNhbmRzIG9mIGRvbGxhcnMgdXBmcm9udCBvbiBhIG5ldyB3ZWJzaXRlLlxuICAgICAgICAgICAgICAgIFRoZSBvbmVzIHRoYXQgZG8sIGdldCB0YWtlbiBhZHZhbnRhZ2Ugb2YgYW5kIGhhdmUgYSB0ZXJyaWJsZSB3ZWJzaXRlIHRoYXQgbG9va3MgbGlrZSBpdCB3YXMgYnVpbHQgYnkgc29tZW9uZSBpbiBhIGR1bmdlb24gXG4gICAgICAgICAgICAgICAgYW5kIGhhdmVuJ3Qgc2VlbiBkZXNpZ24gdHJlbmRzIGZvciB0aGUgbGFzdCAxMCB5ZWFycy4gQSBsb3Qgb2YgYnVzaW5lc3NlcyBhcmUgaW4gYSB0b3VnaCBzcG90IC0gdGhleSBlaXRoZXIgY2FuJ3QgYWZmb3JkIGEgZ29vZCB3ZWJzaXRlLCBhbmQgXG4gICAgICAgICAgICAgICAgaWYgdGhleSBjYW4gdGhleSBkb24ndCBrbm93IHdobyB0byB0cnVzdCB0byBtYWtlIHNvbWV0aGluZyBncmVhdC4gVGhhdCdzIHdoZXJlIHRoZSAkMCBkb3duIGFuZCAkMTAwIGEgbW9udGggbW9kZWwgY29tZXMgaW4uICBcbiAgICAgICAgICAgICAgICBJdCdzIG1vcmUgbWFuYWdhYmxlIGZvciBhIHNtYWxsIGJ1c2luZXNzIHRvIGhhbmRsZSBhbmQgd29uJ3QgaHVydCB0aGVpciBiYW5rIGFjY291bnRzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiY2lyY2xlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4+UXVhbGl0eSA8L3NwYW4+IE92ZXIgUXVhbnRpdHk8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldlIGZvY3VzIG9uIHRoZSBuZWVkcyBvbiBlYWNoIGluZGl2aWR1YWwgYnVzaW5lc3MgYW5kIHRhaWxvciBjb250ZW50IGFyb3VuZCB3aGF0IG1ha2VzIGl0IHVuaXF1ZS4gT3VyIGNvbGxhYm9yYXRpdmUgcHJvY2VzcyBpcyB2ZXJ5IGhhbmRzIG9uIFxuICAgICAgICAgICAgICAgICAgICBhcyB3ZSB3b3JrIGNsb3NlbHkgd2l0aCB5b3UgdG8gY3JlYXRlIGEgd2Vic2l0ZSB5b3UncmUgMTAwJSBoYXBweSB3aXRoIGFuZCBub3Qgc29tZXRoaW5nIHlvdSBqdXN0IHNldHRsZSBmb3IuIFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+MTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIFByZS1Xcml0dGVuIENvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSB3cml0ZSB1bmlxdWUgYW5kIGVuZ2FnaW5nIGNvbnRlbnQgYXJvdW5kIHlvdXIgY29tcGFueS4gIEV2ZXJ5b25lIGlzIHVuaXF1ZSE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+Mjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlVuYmVhdGFibGUgQ3VzdG9tZXIgU2VydmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIGF1dG9tYXRlZCBzeXN0ZW1zIC0gV2hlbiB5b3UgbmVlZCBoZWxwIHRoZSBsZWFkIGRldmVsb3BlciBhbnN3ZXJzIHlvdXIgY2FsbC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+Mzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIExpbWl0cyBPbiBEZXNpZ248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gZWRpdCB0aGUgZGVzaWduIHRvIGNhdGVyIHRvIHlvdXIgdGFzdGVzLiAgRXZlcnl0aGluZyBpcyBjdXN0b21pemFibGUhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBhYm91dC1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgT1VSIFNFUlZJQ0VTXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImFib3V0LWNvbnRhY3RcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGFpbmVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXRlbVwiPlxuXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNvbnRhY3QtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBob25lOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4oNTA5KSA0ODEtNzUxMjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgaWQ9XCJzZWNvbmQtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiAgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiAgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCI+PGc+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwNi45NTUsMS4zMTRjLTMuMTE5LTEuNzgtNi45NTUtMS43NS0xMC4wNDUsMC4wNzhMMzEzLjY1NiwxMDkuNzU2Yy00Ljc1NCwyLjgxMS02LjMyOSw4Ljk0My0zLjUxOCwxMy42OTcgICAgYzIuODEsNC43NTMsOC45NDIsNi4zMjgsMTMuNjk3LDMuNTE4bDEzMS40ODItNzcuNzQ5TDIxMC40MTEsMzAzLjMzNUw4OC42MDMsMjY2LjA2OWwxNTguOTY1LTk0ICAgIGM0Ljc1NC0yLjgxMiw2LjMyOS04Ljk0NCwzLjUxOC0xMy42OThjLTIuODEtNC43NTMtOC45NDMtNi4zMy0xMy42OTctMy41MThMNTguOTEsMjYwLjM5MmMtMy40MSwyLjAxNy01LjMwOSw1Ljg1Ni00Ljg0LDkuNzkxICAgIHMzLjIxNiw3LjIyMSw3LjAwNCw4LjM4bDE0NS40NjksNDQuNTA0TDI3MC43Miw0MzkuODhjMC4wNjcsMC4xMjEsMC4xMzYsMC4yMjMsMC4yMDcsMC4zMTRjMS4wNzEsMS43ODYsMi42NzYsMy4yNDUsNC42NzgsNC4wODcgICAgYzEuMjUzLDAuNTI3LDIuNTcsMC43ODQsMy44NzgsMC43ODRjMi41NjMsMCw1LjA4Ni0wLjk4Niw2Ljk5MS0yLjg0OWw3My43OTQtNzIuMTJsMTM4LjgwNiw0Mi40NjYgICAgYzAuOTYsMC4yOTMsMS45NDUsMC40MzgsMi45MjUsMC40MzhjMi4xMTYsMCw0LjIwNi0wLjY3Miw1Ljk0OC0xLjk2MUM1MTAuNDk2LDQwOS4xNTMsNTEyLDQwNi4xNyw1MTIsNDAzVjEwICAgIEM1MTIsNi40MDksNTEwLjA3NCwzLjA5Myw1MDYuOTU1LDEuMzE0eiBNMjcxLjI2NSwzMjkuMjNjLTEuMTU4LDEuNjczLTEuNzc5LDMuNjU5LTEuNzc5LDUuNjk0djYxLjE3MWwtNDMuODIzLTc5Ljc2NSAgICBsMTkzLjkyMS0yMDEuMjFMMjcxLjI2NSwzMjkuMjN6IE0yODkuNDg2LDQxMS4zMDl2LTYyLjg2N2w0OC45OSwxNC45ODhMMjg5LjQ4Niw0MTEuMzA5eiBNNDkyLDM4OS40ODNsLTE5Ni40OTktNjAuMTE2ICAgIEw0OTIsNDUuNzA0VjM4OS40ODN6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2NC40MjMsMzQ3LjU3N2MtMy45MDYtMy45MDUtMTAuMjM2LTMuOTA1LTE0LjE0MywwbC05My4zNTIsOTMuMzUyYy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDMgICAgQzU4Ljg4Miw0NTcuMDI0LDYxLjQ0MSw0NTgsNjQsNDU4czUuMTE4LTAuOTc2LDcuMDcxLTIuOTI5bDkzLjM1Mi05My4zNTJDMTY4LjMyOCwzNTcuODE1LDE2OC4zMjgsMzUxLjQ4MywxNjQuNDIzLDM0Ny41Nzd6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwLjA3MSw0NzEuOTI4Yy0zLjkwNi0zLjkwMy0xMC4yMzYtMy45MDMtMTQuMTQyLDAuMDAxbC0yMywyM2MtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzICAgIEM0Ljg4Miw1MTEuMDI0LDcuNDQxLDUxMiwxMCw1MTJzNS4xMTgtMC45NzcsNy4wNzEtMi45MjlsMjMtMjNDNDMuOTc2LDQ4Mi4xNjYsNDMuOTc2LDQ3NS44MzQsNDAuMDcxLDQ3MS45Mjh6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0Mi42NDksNDk0LjM0Yy0xLjg1OS0xLjg2LTQuNDM5LTIuOTMtNy4wNjktMi45M2MtMi42NDEsMC01LjIxLDEuMDctNy4wNywyLjkzYy0xLjg2LDEuODYtMi45Myw0LjQzLTIuOTMsNy4wNyAgICBjMCwyLjYzLDEuMDY5LDUuMjEsMi45Myw3LjA3YzEuODYsMS44Niw0LjQ0LDIuOTMsNy4wNywyLjkzczUuMjEtMS4wNyw3LjA2OS0yLjkzYzEuODYtMS44NiwyLjkzMS00LjQ0LDIuOTMxLTcuMDcgICAgQzE0NS41OCw0OTguNzcsMTQ0LjUxLDQ5Ni4yLDE0Mi42NDksNDk0LjM0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPjxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMTcuMDUxLDQxOS45MzVjLTMuOTAzLTMuOTA1LTEwLjIzMy0zLjkwNS0xNC4xNDIsMGwtNDkuNDQ2LDQ5LjQ0NWMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQyICAgIGMxLjk1MywxLjk1Myw0LjUxMiwyLjkyOSw3LjA3MSwyLjkyOXM1LjExOC0wLjk3Nyw3LjA3MS0yLjkyOWw0OS40NDYtNDkuNDQ1QzIyMC45NTYsNDMwLjE3MiwyMjAuOTU2LDQyMy44NCwyMTcuMDUxLDQxOS45MzV6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM4Ny43MDQsNDE2LjEzOWMtMy45MDYtMy45MDQtMTAuMjM2LTMuOTA0LTE0LjE0MiwwbC00OS41OCw0OS41OGMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzICAgIGMxLjk1MywxLjk1Miw0LjUxMiwyLjkyOSw3LjA3MSwyLjkyOXM1LjExOC0wLjk3Nyw3LjA3MS0yLjkyOWw0OS41OC00OS41OEMzOTEuNjA5LDQyNi4zNzcsMzkxLjYwOSw0MjAuMDQ1LDM4Ny43MDQsNDE2LjEzOXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvZz48Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjgzLjUsMTM2LjMxYy0xLjg2LTEuODYtNC40NC0yLjkzLTcuMDctMi45M3MtNS4yMSwxLjA3LTcuMDcsMi45M2MtMS44NTksMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA4ICAgIGMwLDIuNjMsMS4wNyw1LjIsMi45Myw3LjA2YzEuODYsMS44Nyw0LjQ0LDIuOTMsNy4wNywyLjkzczUuMjEtMS4wNiw3LjA3LTIuOTNjMS44NTktMS44NiwyLjkzLTQuNDMsMi45My03LjA2ICAgIEMyODYuNDMsMTQwLjc1LDI4NS4zNiwxMzguMTcsMjgzLjUsMTM2LjMxelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPjwvZz4gPC9zdmc+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNvbnRhY3QtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVtYWlsOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5hbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBkYXRhLW5ldGxpZnktcmVjYXB0Y2hhPSd0cnVlJyBpZD0nY29udGFjdCcgbWV0aG9kPSdwb3N0JyBuYW1lPSdDb250YWN0IEZvcm0nPjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J2Zvcm0tbmFtZScgdmFsdWU9J0NvbnRhY3QgRm9ybScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3QtdG9wcGVyXCI+PHNwYW4+RFJPUDwvc3Bhbj4gVVMgQSBMSU5FPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgdHlwZT1cInRleHRcIiB0YWJJbmRleD17MX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIHRhYkluZGV4PXsyfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJwaG9uZSBudW1iZXJcIiBuYW1lPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiIHRhYkluZGV4PXszfXJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgYXJpYS1sYWJlbD1cIndyaXRlIHlvdXIgbWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgTWVzc2FnZSBIZXJlLi4uLlwiIHRhYkluZGV4PXs0fSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2NyaXB0IHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzJz48L3NjcmlwdD5cbjxkaXYgY2xhc3NOYW1lPSdnLXJlY2FwdGNoYScgZGF0YS1zaXRla2V5PSc2TGRBdlVJVUFBQUFBSGpyam1qdE5UY1h5S20wV0t3ZWZMcC1kUXY5Jz48L2Rpdj5cbjxub3NjcmlwdD5cbjxkaXY+XG48ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMiwgaGVpZ2h0OiA0MjIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbjxkaXYgc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlxuXG57LyogPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkvZmFsbGJhY2s/az02TGRBdlVJVUFBQUFBSGpyam1qdE5UY1h5S20wV0t3ZWZMcC1kUXY5XCIgZnJhbWVCb3JkZXI9ezB9IHNjcm9sbGluZz1cIm5vXCJcbnN0eWxlPXt7d2lkdGg6IDMwMiwgaGVpZ2h0OiA0MjIsIGJvcmRlclN0eWxlOiBcIm5vbmVcIn19PlxuXG48L2lmcmFtZT4gKi99XG48L2Rpdj5cbjwvZGl2PlxuPGRpdiBzdHlsZT17e3dpZHRoOiAzMDAsIGhlaWdodDogNjAsIGJvcmRlclN0eWxlOiAnbm9uZScsIGJvdHRvbTogMTIsIGxlZnQ6IDI1LCBtYXJnaW46IDAsIHBhZGRpbmc6IDAsIHJpZ2h0OiAyNSwgYmFja2dyb3VuZDogJyNmOWY5ZjknLCBib3JkZXI6ICcxcHggc29saWQgI2MxYzFjMScsIGJvcmRlclJhZGl1czogM319PlxuPHRleHRhcmVhIGlkPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiBuYW1lPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiBjbGFzc05hbWU9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiXG4gIHN0eWxlPXt7d2lkdGg6IDI1MCwgaGVpZ2h0OiA0MCwgYm9yZGVyOiAnMXB4IHNvbGlkICNjMWMxYzEnLCBtYXJnaW46ICcxMHB4IDI1cHgnLCBwYWRkaW5nOiAwLCByZXNpemU6ICdub25lJ319ID5cbjwvdGV4dGFyZWE+XG48L2Rpdj5cbjwvZGl2PlxuPC9ub3NjcmlwdD5cbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29udGFjdC1zdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5IGJ1dHRvbi1zb2xpZFwiIGRhdGEtc3VibWl0PVwiLi4uU2VuZGluZ1wiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCJcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8TWFpbiAvPlxufVxuIiwgIlxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICBcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJsYW5kaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+U21hbGwgQnVzaW5lc3MgV2ViIERlc2lnbiArIERldmVsb3BtZW50PC9oMT5cbiAgICAgICAgICAgIDxoMj5ObyBwYWdlIGJ1aWxkZXJzIG9yIFdvcmRQcmVzcyAtIFdlIG9mZmVyIDEwMCUgaGFuZC1jb2RlZCB3ZWJzaXRlcyB3aXRoIHN1cGVyaW9yIHJlc3VsdHMgc3RhcnRpbmcgYXQgJDE1MC9tby48L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgcXVvdGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgR0VUIElOIFRPVUNIIVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vY2stdXAgZGVza3RvcC1kaXNwbGF5XCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC84MWZmM2I5YWQzMWM0NGFlMWU1ZDNhZjJmMGQ2MzY0ZDYwZWRlZTg1LzJmMTVmL2ltYWdlcy9tb2NrLXVwLXJlcGxhY2UucG5nXCIgYWx0PVwibW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9jay11cCBtb2JpbGUtZGlzcGxheVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvOWU1NDgyMTgzYzA4ZDk4ZmM0M2E1NmZhMWM5YTdmMWEwZjYxYTIwNy9hM2I3Yy9pbWFnZXMvbW9jay11cC1tb2JpbGUtcmVwYWNlLnBuZ1wiIGFsdD1cImEgbW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgbGlnaHQtc3dvb3BcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzI1ZTk0ZWFiYjFjZGVjMjYxM2JkMjY1ZDY0NWRjMTUzMjRiYWNmZTgvODZmNDUvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgZGFyay1zd29vcCBcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzJjNDk5MjY5YTRhMzNmYmJmY2EyODAxMGRiOGZkYmI2NjhhMjNjMWMvYmViYTYvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJ3aGF0LXdlLWRvXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtdG9wcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tdG9wcGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+V0hBVCA8L3NwYW4+IFdFIERPXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyYXBoaWMtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yOTA0OGQ5ZWZlODkyNTIzOTkxMjJjZDI0ODdmMjUzZGNiZTliY2M0L2NmOGE1L2ltYWdlcy9jb2RlLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldlIHNwZWNpYWxpemUgaW4gc21hbGwgYnVzaW5lc3Mgd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgZm9yIGNsaWVudHMgYW55d2hlcmUgaW4gdGhlIFVTLiBFdmVyeSBsaW5lIG9mIGNvZGUgaXMgd3JpdHRlbiBieSBoYW5kIHRvIGVuc3VyZSB0aGUgYmVzdCBwZXJmb3JtYW5jZSwgd2hpY2ggaGVscHMgYnJpbmcgaW4gbW9yZSBjdXN0b21lcnMgdG8geW91ciBzaXRlIGFuZCBicmluZyBtb3JlIHJldmVudWUgdG8geW91ciBidXNpbmVzcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC13ZS1kby1jb250ZW50IGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjUxMnB0XCIgdmlld0JveD1cIi0xMSAwIDUxMiA1MTIuMDAxXCIgd2lkdGg9XCI1MTJwdFwiPjxwYXRoIGQ9XCJtMjYxLjQzNzUgNTExLjQ0MTQwNiAxMzguODUxNTYyLTU0Ljk0MTQwNmM1NC43NjU2MjYtNDQuOTI5Njg4IDg5LjcxMDkzOC0xMTMuMTMyODEyIDg5LjcxMDkzOC0xODkuNSAwLTEzNS4zMDg1OTQtMTA5LjY5MTQwNi0yNDUtMjQ1LTI0NXMtMjQ1IDEwOS42OTE0MDYtMjQ1IDI0NWMwIDEzNS4zMTI1IDEwOS42OTE0MDYgMjQ1IDI0NSAyNDUgNS41MjczNDQgMCAxMS4wMDM5MDYtLjE5OTIxOSAxNi40Mzc1LS41NTg1OTR6bTAgMFwiIGZpbGw9XCIjMjdhM2ZmXCIvPjxwYXRoIGQ9XCJtMzg4Ljc0MjE4OCAzMTguOTQ5MjE5YzEuOTUzMTI0LTIzLjY0NDUzMS0xLjY0ODQzOC00Ny4zMzU5MzgtMTIuMTE3MTg4LTY4LjYyODkwNy0yNy4wNDI5NjktNTUuMDExNzE4LTIwLjgzOTg0NC01OS4wMDM5MDYtMjEuNjc5Njg4LTExMy42MDE1NjIgMC0xMS4xNTYyNS05LjA0Mjk2OC0yMC4xOTUzMTItMjAuMTk1MzEyLTIwLjE5NTMxMi0xMS4xNTYyNSAwLTIwLjE5NTMxMiA5LjAzOTA2Mi0yMC4xOTUzMTIgMjAuMTk1MzEyIDAgNy4yMDMxMjUgMCAyMDMuODMyMDMxIDAgMjAzLjA2MjUgMCAzLjE0ODQzOC0uMzM1OTM4IDYuMjIyNjU2LS45NTcwMzIgOS4xODc1djI5LjA3MDMxMmMwIDI0LjQ5NjA5NC0xOS45Mjk2ODcgNDQuNDI5Njg4LTQ0LjQyNTc4MSA0NC40Mjk2ODgtMTYuMjY5NTMxIDAtNzIuMzc1IDAtMTEwLjU1MDc4MSAwIDE2Ljk4MDQ2OCAyMy42MTcxODggNDAuMjE0ODQ0IDQyLjExMzI4MSA2Ny4xNzk2ODcgNTMuMzEyNS4xNjc5NjkuMDY2NDA2LjMzNTkzOC4xMzY3MTkuNTAzOTA3LjIwNzAzMSAxNi4yMjI2NTYgNi44NTU0NjkgMjguNjA5Mzc0IDE5Ljc4MTI1IDM1LjEzMjgxMiAzNS40NTMxMjUgNTIuNTM1MTU2LTMuNDgwNDY4IDEwMC41NDY4NzUtMjMuNTA3ODEyIDEzOC44NTE1NjItNTQuOTM3NWwtMTUuMDUwNzgxLTU1LjI5Mjk2OGMtMi4xNDg0MzctNy45MDIzNDQtMi45MDYyNS0xNi4xMTcxODgtMi4yMzgyODEtMjQuMjc3MzQ0em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTgzLjYwOTM3NSAxMTcuMjMwNDY5LTYuMTUyMzQ0LTUuNjk5MjE5Yy05LjQ4MDQ2OS04Ljc4OTA2Mi0yNC40Mjk2ODctOC4yMTg3NS0zMy4yMTQ4NDMgMS4yNjU2MjUtOC43ODUxNTcgOS40ODA0NjktOC4yMTQ4NDQgMjQuNDI5Njg3IDEuMjY1NjI0IDMzLjIxNDg0NGwzOC4xMDE1NjMgMzUuMzA0Njg3em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTI4NS42MjEwOTQgMGgtMTcyLjcxNDg0NGMtMTYuNzU3ODEyIDAtMzAuMzkwNjI1IDEzLjYzNjcxOS0zMC4zOTA2MjUgMzAuMzk0NTMxdjM2My45ODA0NjljMCAxNi43NTc4MTIgMTMuNjMyODEzIDMwLjM5NDUzMSAzMC4zOTA2MjUgMzAuMzk0NTMxaDE3Mi43MTQ4NDRjMTYuNzU3ODEyIDAgMzAuMzk0NTMxLTEzLjYzNjcxOSAzMC4zOTQ1MzEtMzAuMzk0NTMxdi0zNjMuOTgwNDY5YzAtMTYuNzU3ODEyLTEzLjYzNjcxOS0zMC4zOTQ1MzEtMzAuMzk0NTMxLTMwLjM5NDUzMXptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNDEuMDM1MTU2IDIyLjUzOTA2MmMtMS42NDQ1MzEtMi40NDUzMTItMi42MDU0NjgtNS4zODY3MTgtMi42MDU0NjgtOC41NTQ2ODcgMC02LjIxODc1IDMuNzAzMTI0LTExLjU2MjUgOS4wMTU2MjQtMTMuOTg0Mzc1aC0zNC41MzkwNjJjLTE2Ljc4NTE1NiAwLTMwLjM5NDUzMSAxMy42MDkzNzUtMzAuMzk0NTMxIDMwLjM5NDUzMXYzNjMuOTgwNDY5YzAgMTYuNzg1MTU2IDEzLjYwOTM3NSAzMC4zOTA2MjUgMzAuMzk0NTMxIDMwLjM5MDYyNWgzNi43MTg3NXYtMzc1LjU4OTg0NGMwLTkuNTU4NTkzLTMuMjUzOTA2LTE4LjcwMzEyNS04LjU4OTg0NC0yNi42MzY3MTl6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTAwLjEwOTM3NSAxOTEuOTc2NTYydjIwMi4zOTg0MzhjMCA3LjA3MDMxMiA1LjczMDQ2OSAxMi44MDA3ODEgMTIuNzk2ODc1IDEyLjgwMDc4MWgxNzIuNzE0ODQ0YzcuMDY2NDA2IDAgMTIuNzk2ODc1LTUuNzMwNDY5IDEyLjc5Njg3NS0xMi44MDA3ODEgMC02Ljk0NTMxMiAwLTEwOC4zMzU5MzggMC0yMDIuMzk4NDM4em0wIDBcIiBmaWxsPVwiI2U2ZjdmZVwiLz48cGF0aCBkPVwibTEwMC4xMDkzNzUgMTkxLjk3NjU2MnYyMDIuMzk4NDM4YzAgNy4wNzAzMTIgNS43MzA0NjkgMTIuODAwNzgxIDEyLjc5Njg3NSAxMi44MDA3ODFoMzAuMjczNDM4di0yMTUuMTk5MjE5em0wIDBcIiBmaWxsPVwiI2Q1ZjFmZVwiLz48cGF0aCBkPVwibTE2OS42NzU3ODEgMjUzLjAzMTI1YzAgMTEuMDc0MjE5LTguOTc2NTYyIDIwLjA1MDc4MS0yMC4wNTA3ODEgMjAuMDUwNzgxcy0yMC4wNTA3ODEtOC45NzY1NjItMjAuMDUwNzgxLTIwLjA1MDc4MSA4Ljk3NjU2Mi0yMC4wNTQ2ODggMjAuMDUwNzgxLTIwLjA1NDY4OCAyMC4wNTA3ODEgOC45ODA0NjkgMjAuMDUwNzgxIDIwLjA1NDY4OHptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNjkuNjc1NzgxIDMyNy4zODI4MTJjMCAxMS4wNzQyMTktOC45NzY1NjIgMjAuMDU0Njg4LTIwLjA1MDc4MSAyMC4wNTQ2ODhzLTIwLjA1MDc4MS04Ljk4MDQ2OS0yMC4wNTA3ODEtMjAuMDU0Njg4YzAtMTEuMDc0MjE4IDguOTc2NTYyLTIwLjA1MDc4MSAyMC4wNTA3ODEtMjAuMDUwNzgxczIwLjA1MDc4MSA4Ljk3NjU2MyAyMC4wNTA3ODEgMjAuMDUwNzgxem0wIDBcIiBmaWxsPVwiIzNkNGVjNlwiLz48cGF0aCBkPVwibTE0Ny4zNTkzNzUgMjMzLjExMzI4MWMtMTAuMDA3ODEzIDEuMTI4OTA3LTE3Ljc4NTE1NiA5LjYwOTM3NS0xNy43ODUxNTYgMTkuOTE3OTY5IDAgMTEuMDc0MjE5IDguOTc2NTYyIDIwLjA1MDc4MSAyMC4wNTA3ODEgMjAuMDUwNzgxIDYuOTA2MjUgMCAxMi45OTIxODgtMy40OTIxODcgMTYuNTk3NjU2LTguODA0Njg3LTE3LjI4OTA2MiAxLjk0OTIxOC0yOC4yOTY4NzUtMTcuMjY5NTMyLTE4Ljg2MzI4MS0zMS4xNjQwNjN6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTQ3LjM1OTM3NSAzMDcuNDY4NzVjLTEwLjAwNzgxMyAxLjEyNS0xNy43ODUxNTYgOS42MDkzNzUtMTcuNzg1MTU2IDE5LjkxNDA2MiAwIDExLjA3ODEyNiA4Ljk3NjU2MiAyMC4wNTQ2ODggMjAuMDUwNzgxIDIwLjA1NDY4OCA2LjkwNjI1IDAgMTIuOTkyMTg4LTMuNDkyMTg4IDE2LjU5NzY1Ni04LjgwNDY4OC0xNy4xODM1OTQgMS45MzM1OTQtMjguMzU5Mzc1LTE3LjE3OTY4Ny0xOC44NjMyODEtMzEuMTY0MDYyem0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48ZyBmaWxsPVwiIzExZGZlZlwiPjxwYXRoIGQ9XCJtMjMxLjU2NjQwNiAyNDQuNjk1MzEyaC0yOC40Njg3NWMtNC4xNDA2MjUgMC03LjUtMy4zNTkzNzQtNy41LTcuNSAwLTQuMTQ0NTMxIDMuMzU5Mzc1LTcuNSA3LjUtNy41aDI4LjQ2ODc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNi0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjxwYXRoIGQ9XCJtMjYwLjAzNTE1NiAyNzYuMzY3MTg4aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1OTM3Ni03LjUtNy41IDAtNC4xNDQ1MzIgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OCA3LjUgNy41IDAgNC4xNDA2MjQtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTIzMS41NjY0MDYgMzE5LjA0Njg3NWgtMjguNDY4NzVjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMjguNDY4NzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjkgNy41IDcuNXMtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTI2MC4wMzUxNTYgMzUwLjcxODc1aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41IDAtNC4xNDA2MjUgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1OTM3NSA3LjUgNy41IDAgNC4xNDQ1MzEtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48L2c+PHBhdGggZD1cIm0yODUuNTE5NTMxIDE3LjU5NzY1NmgtMjUuNjY3OTY5Yy0yLjQyMTg3NCAwLTQuMzgyODEyIDEuOTYwOTM4LTQuMzgyODEyIDQuMzc4OTA2IDAgNS44MDg1OTQtNC43NSAxMC41NTg1OTQtMTAuNTU0Njg4IDEwLjU1ODU5NGgtOTEuNDk2MDkzYy01LjgwODU5NCAwLTEwLjU1ODU5NC00Ljc1LTEwLjU1ODU5NC0xMC41NTg1OTQgMC0yLjQxNzk2OC0xLjk2MDkzNy00LjM3ODkwNi00LjM4MjgxMy00LjM3ODkwNmgtMjUuNjY3OTY4Yy03LjA3MDMxMyAwLTEyLjgwMDc4MiA1LjczMDQ2OS0xMi44MDA3ODIgMTIuNzk2ODc1djE2My41ODIwMzFoMTk4LjMxMjV2LTE2My41ODIwMzFjMC03LjA2NjQwNi01LjczMDQ2OC0xMi43OTY4NzUtMTIuODAwNzgxLTEyLjc5Njg3NXptMCAwXCIgZmlsbD1cIiNmOTQ4YjRcIi8+PHBhdGggZD1cIm0xNDMuMTc5Njg4IDI0LjUwNzgxMmMtLjIwMzEyNi0uODEyNS0uMzIwMzEzLTEuNjU2MjUtLjMyMDMxMy0yLjUyNzM0MyAwLTIuNDIxODc1LTEuOTYwOTM3LTQuMzgyODEzLTQuMzgyODEzLTQuMzgyODEzaC0yNS42Njc5NjhjLTcuMDcwMzEzIDAtMTIuODAwNzgyIDUuNzMwNDY5LTEyLjgwMDc4MiAxMi43OTY4NzV2MTYzLjU4MjAzMWg0My4xNzE4NzZ6bTAgMFwiIGZpbGw9XCIjZTAwZThiXCIvPjxwYXRoIGQ9XCJtMjg1LjUxOTUzMSAxNy41OTc2NTZoLTI1LjY2Nzk2OWMtMi40MjE4NzQgMC00LjM4MjgxMiAxLjk2MDkzOC00LjM4MjgxMiA0LjM3ODkwNiAwIDUuODA4NTk0LTQuNzUgMTAuNTU4NTk0LTEwLjU1NDY4OCAxMC41NTg1OTRoLTUwLjQ2NDg0M2wxMDMuODcxMDkzIDEzMC4yMDMxMjV2LTEzMi4zNDM3NWMwLTcuMDY2NDA2LTUuNzMwNDY4LTEyLjc5Njg3NS0xMi44MDA3ODEtMTIuNzk2ODc1em0wIDBcIiBmaWxsPVwiI2ZjN2FjZFwiLz48cGF0aCBkPVwibTE2Ni45MTc5NjkgNzcuMjA3MDMxaC0zNC41ODU5MzhjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMzQuNTg1OTM4YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNS0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIgZmlsbD1cIiNmYzdhY2RcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDI0MS4xOTE0MDZjLTcuNzMwNDY4IDguMzM5ODQ0LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzVsLTM0LjQ5NjA5NC0zMS45NjQ4NDNjLTguMzQzNzUtNy43MzA0NjktOC44Mzk4NDQtMjAuNzYxNzE5LTEuMTA5Mzc1LTI5LjEwNTQ2OXMyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjggOC44Mzk4NDQgMjAuNzYxNzE4IDEuMTA5Mzc1IDI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDIxMi4wODU5MzgtMTYuNDEwMTU2LTE1LjIwMzEyNmMyLjE2MDE1NiA3LjgyNDIxOS4zNjcxODcgMTYuNTQyOTY5LTUuNTUwNzgxIDIyLjkyOTY4OC01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU2bDE2LjQwNjI1IDE1LjIwMzEyNWM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3MTA5MyA3LjIzMDQ2OSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzUtMS4xMDkzNzUtMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNy44MTY0MDYgMjk3LjM2MzI4MWMtNy43MzA0NjggOC4zNDM3NS0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc1bC0zNC40OTYwOTQtMzEuOTY0ODQ0Yy04LjM0Mzc1LTcuNzMwNDY4LTguODM5ODQ0LTIwLjc2MTcxOC0xLjEwOTM3NS0yOS4xMDE1NjIgNy43MzA0NjktOC4zNDM3NSAyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjkgOC44Mzk4NDQgMjAuNzU3ODEyIDEuMTA5Mzc1IDI5LjEwMTU2MnptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDM1My41MzkwNjJjLTcuNzMwNDY4IDguMzQzNzUtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NmwtMzQuNDk2MDk0LTMxLjk2NDg0NGMtOC4zNDM3NS03LjczMDQ2OS04LjgzOTg0NC0yMC43NjE3MTktMS4xMDkzNzUtMjkuMTA1NDY5czIwLjc2MTcxOS04LjgzOTg0NCAyOS4xMDU0NjktMS4xMDkzNzVsMzQuNDk2MDkzIDMxLjk2NDg0NGM4LjMzOTg0NCA3LjczMDQ2OCA4LjgzOTg0NCAyMC43NjE3MTggMS4xMDkzNzUgMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTM4NS4yMzgyODEgNDAxLjIwNzAzMWMtMS4wNjY0MDYtMy45Mjk2ODctMS43ODkwNjItNy45MzM1OTMtMi4xNjc5NjktMTEuOTcyNjU2LTM4LjE2NDA2MiA2Mi42NTYyNS0xMTIuMjU3ODEyIDkxLjc1MzkwNi0xODEuODU1NDY4IDczLjY2MDE1NiA3Ljc2MTcxOCA0Ljk4ODI4MSAxNS45ODQzNzUgOS4zMDg1OTQgMjQuNTg1OTM3IDEyLjg4MjgxMy4xNjc5NjkuMDcwMzEyLjMzNTkzOC4xNDA2MjUuNTAzOTA3LjIxMDkzNyAxNi4yMjI2NTYgNi44NTE1NjMgMjguNjA5Mzc0IDE5Ljc3NzM0NCAzNS4xMzI4MTIgMzUuNDUzMTI1IDUyLjUzNTE1Ni0zLjQ4MDQ2OCAxMDAuNTQ2ODc1LTIzLjUxMTcxOCAxMzguODUxNTYyLTU0Ljk0MTQwNnptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDI2OC4yNjE3MTktMTYuNDEwMTU2LTE1LjIwMzEyNWMyLjE2MDE1NiA3LjgyMDMxMi4zNjcxODcgMTYuNTM5MDYyLTUuNTUwNzgxIDIyLjkyOTY4Ny01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU3bDE2LjQwNjI1IDE1LjE5OTIxOGM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3NSA3LjIzNDM3NSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzEwOTMtMS4xMDkzNzUtMjkuMTAxNTYyem0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNi43MDcwMzEgMzI0LjQzMzU5NC0xNi40MTAxNTYtMTUuMjAzMTI1YzIuMTYwMTU2IDcuODI0MjE5LjM2NzE4NyAxNi41NDI5NjktNS41NTA3ODEgMjIuOTI5Njg3LTUuOTIxODc1IDYuMzkwNjI1LTE0LjQ4MDQ2OSA4Ljg0Mzc1LTIyLjQ0MTQwNiA3LjI4NTE1NmwxNi40MDYyNSAxNS4yMDMxMjZjOC4zNDM3NSA3LjczMDQ2OCAyMS4zNzUgNy4yMzQzNzQgMjkuMTA1NDY4LTEuMTA5Mzc2IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzc1LTEuMTA5Mzc1LTI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Nb2JpbGUtRmlyc3QgRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2Ugc3RhcnQgYnVpbGRpbmcgeW91ciBzaXRlIGZvciBtb2JpbGUgZGV2aWNlcyBmaXJzdCwgdGhlbiB3ZSBhZGQgb24gdG8gaXQgdG8gbWFrZSB0YWJsZXQgYW5kIGRlc2t0b3AuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkxheWVyXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCI+PGc+PHBhdGggZD1cIm0yNTYgMjEuOTk1Yy0xMzUuMzExIDAtMjQ1LjAwMiAxMDkuNjkxLTI0NS4wMDIgMjQ1LjAwMiAwIDUyLjM2NyAxNi40MzkgMTAwLjg4OSA0NC40MjUgMTQwLjcwOGwyODYuODIyIDg4LjY2NmM5Mi43NTUtMzQuODkzIDE1OC43NTctMTI0LjQxOSAxNTguNzU3LTIyOS4zNzMgMC0xMzUuMzExLTEwOS42OTEtMjQ1LjAwMy0yNDUuMDAyLTI0NS4wMDN6XCIgZmlsbD1cIiNmZmRkNDBcIi8+PHBhdGggZD1cIm0yMzEuNDMyIDExMy43NjRjMC05LjMwNiAxLjE0Ni0xOC4zNDggMy4yOS0yNy4wMDFoLTEzNi43ODNjLTMuMDM0IDAtNS45OTUuMzE2LTguODU1LjkxMS0xMi44NDcgMTEuOTYzLTI0LjQwNCAyNS4yODgtMzQuNDQ2IDM5Ljc0OC0uMDU3LjkwNi0uMDk2IDEuODE4LS4wOTYgMi43Mzh2Mjc2LjI3NWMxMC40NTEgMTUuMDcxIDIyLjU1MSAyOC45MTIgMzYuMDM1IDQxLjI2NWwyMTYuNTc5IDU4LjkzNmMxMi41NjItMi42NzIgMjQuNzY5LTYuMzAyIDM2LjU0LTEwLjgxNnYtMjY5Ljc5NGMtNjEuOTAzIDAtMTEyLjI2NC01MC4zNi0xMTIuMjY0LTExMi4yNjJ6XCIgZmlsbD1cIiMxNjdjYzFcIi8+PHBhdGggZD1cIm0xNjIuMTY1IDQ4MC4zOTktMi4xMTMtMzM2LjExYy0uMDAzLS40OTItLjE4NS0uOTY0LS40OS0xLjM1LTUuMzQ3LTYuNzUyLTIuMDExLTExLjQwNC4wODItMTMuMzY2LjY4NS0uNjQyLjg0Ni0xLjY3My40MTctMi41MDgtMi40NjMtNC43OTYuODE1LTcuODI5IDIuMTk1LTguODM0LjM3OS0uMjc2LjY0OC0uNjc2Ljc3OS0xLjEyNmwzLjc3My0xMy4wNjFjLjIwMy0uNzAzLjA0MS0xLjQ3MS0uNDQ5LTIuMDE0LTYuNDU5LTcuMTYtMS45OTMtMTIuMjc3LjQ5NC0xNC4zMDQuMzE4LS4yNTkuNTM5LS41OTYuNjY0LS45NjNoLTY5LjU3OGMtMjMuOTI5IDAtNDMuMzk3IDE5LjQ2OC00My4zOTcgNDMuMzk3djI3Ni4yNzNjMTAuMDU0IDE0LjQ5OSAyMS42MzMgMjcuODU4IDM0LjUwMyAzOS44NXpcIiBmaWxsPVwiIzAyNDc4OFwiLz48cGF0aCBkPVwibTgxLjU0MiAxOTUuODg3djI0My4xMDhjNDQuNDMgNDUuMDYyIDEwNi4xNzcgNzMuMDA1IDE3NC40NTggNzMuMDA1IDIwLjk1MSAwIDQxLjI4NS0yLjYzNiA2MC42OTUtNy41ODN2LTI4MS42ODFjLTE4Ljc4Ny00LjY1Ni0zNS43Mi0xNC4wNTUtNDkuNDU0LTI2Ljg0OXpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTgxLjU0MiA0MzguOTk2YzIyLjI3MSAyMi41ODcgNDguODg4IDQwLjg3NSA3OC41MDYgNTMuNDk0di0yOTYuNjAzaC03OC41MDZ6XCIgZmlsbD1cIiNkM2RjZmJcIi8+PGc+PHBhdGggZD1cIm0xNjcuMTQ5IDExNy44NjJoLTQuMzMzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDQuMzMzYzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjMWU5MmQzXCIvPjwvZz48Zz48cGF0aCBkPVwibTIzNC4zODQgMTE3Ljg2MmgtNDEuNjM4Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDQxLjYzOGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiIzFlOTJkM1wiLz48L2c+PHBhdGggZD1cIm0yMzMuNjUzIDEzNi4wMjloLTgzLjAzNWMtNi42IDAtMTItNS40LTEyLTEyIDAtNS42Ny00LjU5Ni0xMC4yNjYtMTAuMjY2LTEwLjI2NmgtMzAuNDEzYy05LjA1NiAwLTE2LjM5NyA3LjM0MS0xNi4zOTcgMTYuMzk3djY4LjM4NWgxODguNjQ0Yy0xOC4zNzktMTUuOTU2LTMxLjUzNS0zNy43NzUtMzYuNTMzLTYyLjUxNnpcIiBmaWxsPVwiIzliZDhmOVwiLz48cGF0aCBkPVwibTE1MC42MTggMTM2LjAyOWMtNi42IDAtMTItNS40LTEyLTEyIDAtNS42Ny00LjU5Ni0xMC4yNjYtMTAuMjY1LTEwLjI2NmgtMzAuNDE0Yy05LjA1NiAwLTE2LjM5NyA3LjM0MS0xNi4zOTcgMTYuMzk3djY4LjM4NWg3OC41MDV2LTYyLjUxN2gtOS40Mjl6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PGcgZmlsbD1cIiMxZTkyZDNcIj48cGF0aCBkPVwibTMxNi42OTUgMjEwLjIzNmMtNC4xNDIgMC03LjUgMy4zNTctNy41IDcuNXYyODguNDU1YzUuMDYtMS4xMiAxMC4wNjMtMi4zOTIgMTUtMy44MTl2LTI4NC42MzZjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNXpcIi8+PHBhdGggZD1cIm04OS4wNDIgNDQ2LjI4MnYtMzE2LjEyMmMwLTQuOTA2IDMuOTkxLTguODk3IDguODk3LTguODk3aDMwLjQxNGMxLjUyNSAwIDIuNzY2IDEuMjQgMi43NjYgMi43NjUgMCAxMC43NTIgOC43NDggMTkuNSAxOS41IDE5LjVoODguMDM1YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjUgMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNWgtODguMDM1Yy0yLjQzOSAwLTQuNS0yLjA2LTQuNS00LjUgMC05Ljc5Ni03Ljk3LTE3Ljc2NS0xNy43NjYtMTcuNzY1aC0zMC40MTRjLTEzLjE3NyAwLTIzLjg5NyAxMC43MjEtMjMuODk3IDIzLjg5N3YzMDAuODkyYzQuNzc2IDUuMjkzIDkuNzg0IDEwLjM3MSAxNSAxNS4yM3pcIi8+PC9nPjxwYXRoIGQ9XCJtMTU5LjY0NCAxMjkuNTczYy4zMDYtLjI4Ni40ODktLjY1NS41OC0xLjA0NGgtOS42MDZjLTIuNDM5IDAtNC41LTIuMDYtNC41LTQuNSAwLTkuNzk2LTcuOTctMTcuNzY1LTE3Ljc2Ni0xNy43NjVoLTMwLjQxM2MtMTMuMTc3IDAtMjMuODk3IDEwLjcyMS0yMy44OTcgMjMuODk3djMwMC44OTJjNC43NzYgNS4yOTMgOS43ODQgMTAuMzcxIDE1IDE1LjIzdi0zMTYuMTIzYzAtNC45MDYgMy45OTEtOC44OTcgOC44OTctOC44OTdoMzAuNDE0YzEuNTI1IDAgMi43NjYgMS4yNCAyLjc2NiAyLjc2NSAwIDEwLjc1MiA4Ljc0OCAxOS41IDE5LjUgMTkuNWg5LjI4MWMtLjA4My0uMjEtLjE5NS0uNDEtLjMzNy0uNTktNS4zNDctNi43NTEtMi4wMTEtMTEuNDA0LjA4MS0xMy4zNjV6XCIgZmlsbD1cIiMxNjdjYzFcIi8+PHBhdGggZD1cIm0yNDEuOTM0IDE1Ny4xMDZoLTgxLjU4NXYyNi4yODZoOTQuMjkyYy41NjggMCAxLjEyNC0uMDQ4IDEuNjc0LS4xMTgtNS44OTItNy45ODQtMTAuNzUtMTYuNzcyLTE0LjM4MS0yNi4xNjh6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm0xNjEuMzQ5IDE1Ny4xMDZoLTE0Ljc1MmMtNy4yNTkgMC0xMy4xNDMgNS44ODQtMTMuMTQzIDEzLjE0M3M1Ljg4NCAxMy4xNDMgMTMuMTQzIDEzLjE0M2gxNC43NTJ6XCIgZmlsbD1cIiMzYzU4YTBcIi8+PGc+PHBhdGggZD1cIm0xMTYuNTM1IDE0MS44MzJoLTEwLjMzNGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWgxMC4zMzRjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PC9nPjxwYXRoIGQ9XCJtMjc5LjgyMSAzNDQuNWgtMTYxLjQwNWMtNS40NDUgMC05Ljg5OS00LjQ1NS05Ljg5OS05Ljg5OXYtODcuMzJjMC01LjQ0NSA0LjQ1NS05Ljg5OSA5Ljg5OS05Ljg5OWgxNjEuNDA1YzUuNDQ1IDAgOS44OTkgNC40NTUgOS44OTkgOS44OTl2ODcuMzJjMCA1LjQ0NS00LjQ1NCA5Ljg5OS05Ljg5OSA5Ljg5OXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48cGF0aCBkPVwibTEwOC41MTcgMjQ3LjI4MXY4Ny4zMmMwIDUuNDQ1IDQuNDU1IDkuODk5IDkuODk5IDkuODk5aDEwMy43MDZjLS4zMTYtLjUyNS0uNzc4LS45Ny0xLjM3NC0xLjI1NS04LjA2OC0zLjg0OC03Ljg1NC0xMC4wNDYtNi44NDgtMTMuNjkyLjQ0My0xLjYwNy0uMzc0LTMuMzE1LTEuOTQtMy44ODYtMTQuMzItNS4yMTYtMTEuNzYxLTE4LjAzNC0xMC42MzMtMjEuODYuMjE4LS43MzkuMTcyLTEuNTI3LS4xNC0yLjIzMmwtMTAuOTktMjQuODIzYy0uNDc5LTEuMDgxLTEuNTEtMS44MzktMi42OS0xLjkwOC05LjY4Ny0uNTY3LTExLjQzNC04LjQ2NC0xMS42NzItMTIuNjg0LS4wODQtMS40ODQtMS4xOTEtMi43MTQtMi42NTYtMi45NjQtMTYuMDQ5LTIuNzQzLTE0LjcxOS0xNS4zNC0xMy42My0yMC4wMzkuMTM5LS42MDEuMDk0LTEuMjE0LS4xMDMtMS43NzVoLTQxLjAyOWMtNS40NDYgMC05LjkgNC40NTQtOS45IDkuODk5elwiIGZpbGw9XCIjZTgwMDU0XCIvPjxnPjxwYXRoIGQ9XCJtMTM4LjIzIDM4Mi4wMDNoLTVjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg1YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1NyA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0xMTMuNTE3IDM4Mi4wMDNoLTVjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg1YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0yODkuNzIxIDM4Mi4wMDNoLTk0LjA3NGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDk0LjA3NGM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTk1LjY0NyAzODIuMDAzaC0zNy4wODNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWgzNy4wODNjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTE5NS42NDggMzg5Ljg4MmMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXYtMTUuNWMwLTQuMTQzIDMuMzU4LTcuNSA3LjUtNy41czcuNSAzLjM1NyA3LjUgNy41djE1LjVjMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2U4MDA1NFwiLz48L2c+PGVsbGlwc2UgY3g9XCIxOTkuMTE4XCIgY3k9XCIyOTAuOTQxXCIgZmlsbD1cIiNlOWVmZmZcIiByeD1cIjM5LjA3MVwiIHJ5PVwiMzkuMDcxXCIgdHJhbnNmb3JtPVwibWF0cml4KC4xNiAtLjk4NyAuOTg3IC4xNiAtMTE5Ljk2MSA0NDAuODg1KVwiLz48cGF0aCBkPVwibTIxMS45NTkgMzI1LjY2OGMtMTQuMzItNS4yMTYtMTEuNzYxLTE4LjAzNC0xMC42MzMtMjEuODYuMjE4LS43MzkuMTcyLTEuNTI3LS4xNC0yLjIzMmwtMTAuOTktMjQuODIzYy0uNDc5LTEuMDgxLTEuNTEtMS44MzktMi42OS0xLjkwOC05LjY4Ny0uNTY3LTExLjQzNC04LjQ2NC0xMS42NzItMTIuNjg0LS4wNDItLjc0Ny0uMzQ1LTEuNDMtLjgyMS0xLjk1NS05LjEwOCA3LjE1My0xNC45NjUgMTguMjU3LTE0Ljk2NSAzMC43MzYgMCAyMS41NzggMTcuNDkzIDM5LjA3MSAzOS4wNzEgMzkuMDcxIDUuMTQ1IDAgMTAuMDUzLTEuMDA0IDE0LjU1MS0yLjgxMS0uMzQ3LS42OS0uOTM2LTEuMjUyLTEuNzExLTEuNTM0elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxwYXRoIGQ9XCJtMjEzLjgwNCAyODYuOTE1LTE5LjA4MS0xMi4xOTljLTMuMTgtMi4wMzMtNy4zNTIuMjUxLTcuMzUyIDQuMDI2djI0LjM5OGMwIDMuNzc1IDQuMTcyIDYuMDU5IDcuMzUyIDQuMDI2bDE5LjA4MS0xMi4xOTljMi45MzktMS44NzkgMi45MzktNi4xNzMgMC04LjA1MnpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48Zz48cGF0aCBkPVwibTE4MC43NDcgNDE0Ljc2M2gtNzIuMjNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNzIuMjNjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNSAwIDQuMTQyLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48Zz48cGF0aCBkPVwibTI4OS43MjEgNDQ0LjE0NWgtMTgxLjIwNGMtNC4xNDIgMC03LjUtMy4zNTgtNy41LTcuNSAwLTQuMTQzIDMuMzU4LTcuNSA3LjUtNy41aDE4MS4yMDRjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNSAwIDQuMTQyLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48cGF0aCBkPVwibTI4OS43MjEgNDU2LjkyMmgtMTgxLjIwNGMtMS45IDAtMy42My43MTItNC45NTIgMS44NzcgNS44MzMgNC42NDIgMTEuODg0IDkuMDIgMTguMTMzIDEzLjEyM2gxNjguMDIzYzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxwYXRoIGQ9XCJtMjg5LjcyMSA0ODQuN2gtMTQ2LjJjMTEuMzk1IDUuODk5IDIzLjMxMyAxMC45MjUgMzUuNjY1IDE1aDExMC41MzRjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNS4wMDEtNC4xNDItMy4zNTctNy41LTcuNDk5LTcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48Y2lyY2xlIGN4PVwiMzQzLjY5NVwiIGN5PVwiMTEzLjc2M1wiIGZpbGw9XCIjMmE0MjhjXCIgcj1cIjExMy43NjNcIi8+PHBhdGggZD1cIm0zODcuMTgyIDE1NS4zNWMuMDk3LTEuOTUzLS42MTMtMy44NTYtMS45OTYtNS4yMzlsLTYuNjYyLTYuNjYyYy0xLjItMS4yLTIuODA4LTEuODkxLTQuNTAyLTEuOTk3LTIxLjYxLTEuMzU3LTIyLjc3Mi0xOS43NjUtMjIuNzA4LTI0LjUzMS4wMTEtLjgxNS0uMTM3LTEuNjIyLS40MTctMi4zODdsLTUuODc4LTE2LjA3NmMtLjgzNy0yLjI4Ny0yLjgyOS0zLjkyNi01LjIxOS00LjM5NC01MS4wMTctOS45OTUtMzkuNzA2LTY4Ljg3NS0zNS45NzItODMuNzkxLjI1OC0xLjAzMS4yNTctMi4wODkuMDM3LTMuMDk4LTQzLjE4NCAxNi4xNDQtNzMuOTM0IDU3Ljc3My03My45MzQgMTA2LjU4OSAwIDYyLjgzIDUwLjkzMyAxMTMuNzYzIDExMy43NjMgMTEzLjc2MyA3LjMyNSAwIDE0LjQ4NC0uNzAxIDIxLjQyNC0yLjAyM2wzMC4zOTYtNjAuOTVjLTcuNDE4LTEuNTI4LTguNDgyLTYuMTc2LTguMzMyLTkuMjA0elwiIGZpbGw9XCIjMWMyZTdhXCIvPjxnPjxwYXRoIGQ9XCJtMjk5LjcxMiAxNTIuNjAzLTMzLjMwNC0zMy4zMDRjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE1IDAtMTEuMDcybDMzLjMwNC0zMy4zMDRjMy4wNTctMy4wNTcgOC4wMTQtMy4wNTggMTEuMDcyIDAgMy4wNTcgMy4wNTcgMy4wNTggOC4wMTUgMCAxMS4wNzJsLTI3Ljc2OCAyNy43NjkgMjcuNzY4IDI3Ljc2OGMzLjA1NyAzLjA1NyAzLjA1NyA4LjAxNSAwIDExLjA3Mi0zLjA1OCAzLjA1Ny04LjAxNCAzLjA1Ni0xMS4wNzItLjAwMXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PGc+PHBhdGggZD1cIm0zNzYuNjA3IDE1Mi42MDNjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE0IDAtMTEuMDcybDI3Ljc2OC0yNy43NjgtMjcuNzY5LTI3Ljc2OGMtMy4wNTctMy4wNTctMy4wNTctOC4wMTUgMC0xMS4wNzIgMy4wNTgtMy4wNTggOC4wMTUtMy4wNTggMTEuMDcyIDBsMzMuMzA1IDMzLjMwNGMzLjA1NSAzLjA1NiAzLjA1NyA4LjAxNSAwIDExLjA3MmwtMzMuMzA0IDMzLjMwNGMtMy4wNTcgMy4wNTctOC4wMTQgMy4wNTgtMTEuMDcyIDB6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMzI1LjU4OSAxNTQuMjEzYy0zLjk0Ny0xLjc2Ni01LjcxNC02LjM5OC0zLjk0OC0xMC4zNDRsMjkuODE2LTY2LjYwOGMxLjc2Ny0zLjk0NiA2LjM5OS01LjcxMyAxMC4zNDQtMy45NDcgMy45NDcgMS43NjcgNS43MTQgNi4zOTggMy45NDcgMTAuMzQ0bC0yOS44MTYgNjYuNjA4Yy0xLjc2IDMuOTM0LTYuMzg1IDUuNzE4LTEwLjM0MyAzLjk0N3pcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PHBhdGggZD1cIm00NDEuNzg5IDE5Mi40NzFoLTkuMDkxYy0yLjQwMiAwLTQuMzU2LTEuOTU0LTQuMzU2LTQuMzU2di05LjA5MWMwLTEwLjgxLTcuNjMxLTE0LjQxOS0xMi41LTE1LjYyMmgtNjcuMjM2Yy0yLjczOCAwLTQuOTU4IDIuMjItNC45NTggNC45NTh2MTUyLjc3NWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoMTAzLjg0OGMyLjczOCAwIDQuOTU4LTIuMjIgNC45NTgtNC45NTh2LTExNy45NjFjLTIuOTE2LTEwLjQ1OS0xNS40NzUtMTAuNzAxLTE1LjYyMy0xMC43MDN6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm0zODMuMDY5IDMwMS40NjV2LTExMy40MzVjMC0xMy42MDEgMTEuMDI2LTI0LjYyOCAyNC42MjctMjQuNjI4aC01OS4wOWMtMi43MzggMC00Ljk1OCAyLjIyLTQuOTU4IDQuOTU4djE1Mi43NzVjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDU5LjA5Yy0xMy42MDEgMC0yNC42MjctMTEuMDI2LTI0LjYyNy0yNC42Mjh6XCIgZmlsbD1cIiNkM2RjZmJcIi8+PHBhdGggZD1cIm00NTIuMjk2IDE4Ny45NTgtMTkuNDQtMTkuNDRjLTMuMjc1LTMuMjc1LTcuNzE4LTUuMTE1LTEyLjM1LTUuMTE1aC04LjYyOHMxNS44NjIuMjQyIDE1Ljg2MiAxNS42MjJ2OS4wOTFjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDkuMDkxczE1LjYyMi4xMjggMTUuNjIyIDE0Ljc3MXYtNy41MzdjMC00LjYzMi0xLjg0LTkuMDc1LTUuMTE1LTEyLjM1elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxnIGZpbGw9XCIjNzNjM2Y5XCI+PHBhdGggZD1cIm00MTQuMDQ1IDIzOC45MTFoLTMxLjQ4M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzMS40ODNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDIxOC40MDdoLTI2LjA4MmMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgyNi4wODJjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzk1LjU2MyAyMTguNDA3aC0xMy4wMDFjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMTMuMDAxYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyNTguNTg2aC0yNi4wODJjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMjYuMDgyYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM5NS41NjMgMjU4LjU4NmgtMTMuMDAxYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDEzLjAwMWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zODYuMzc3IDI3OS4wODhoLTMuODE0Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMuODE0YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyNzkuMDg4aC0zNS42NDRjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMzUuNjQ0YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48L2c+PHBhdGggZD1cIm0zNjYuNzgzIDIzOC45MTFoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyMTguNDA3aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjU4LjU4NmgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI3OS4wODhoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtNDM2LjY0NyAyMzguOTExaC01LjM5NWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWg1LjM5NWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48cGF0aCBkPVwibTQxNC4wNDUgMjk5LjU5MWgtMzEuNDgzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMxLjQ4M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjk5LjU5MWgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm00MzYuNjQ3IDI5OS41OTFoLTUuMzk1Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDUuMzk1YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk9wdGltaXphdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPjYwJSBvZiBhbGwgaW50ZXJuZXQgdHJhZmZpYyBpcyBvbiBtb2JpbGUgZGV2aWNlcywgc28gd2Ugb3B0aW1pemUgeW91ciBtb2JpbGUgdG8gcGVyZm9ybSB0aGVpciBiZXN0IGluIHNlYXJjaCBlbmdpbmVzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGlnZ3ktYmFua1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMWE2YTc2MzVkNzIzYmQ0M2FkMDFlYjhlMTRjYTU1NWFkZTkyMDBkOS9lNjQzYi9pbWFnZXMvc2F2aW5ncy5zdmdcIiBhbHQ9XCJkcmF3aW5nIG9mIGEgbWFuIG5leHQgdG8gYSBsYXJnZSBwaWdneSBiYW5rXCIgd2lkdGg9XCIzMDBweFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtdGV4dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kMDwvc3Bhbj4gRG93biwgPHNwYW4+JDE1MDwvc3Bhbj4gUGVyIE1vbnRoLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIE1pbmltdW0gQ29udHJhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JDAgZG93biBmb3IgYSBzdGFuZGFyZCA1IHBhZ2Ugc21hbGwgYnVzaW5lc3Mgd2Vic2l0ZS4gSWYgeW91IG5lZWQgbW9yZSB0aGFuIHRoYXQgdGhlbiB3ZSBoYXZlIHRvIGRvIGN1c3RvbSBwcmljaW5nIGJhc2VkIG9uIHRoZSBzY29wZSBvZiB3b3JrLCBudW1iZXIgb2YgYWRkaXRpb25hbCBwYWdlcywgYW5kIHRpbWUgaW52b2x2ZWQuIDxici8+PGJyLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IG93biB5b3VyIGRvbWFpbiwgY29udGVudCwgbGlzdGluZywgYW5kIHByb2ZpbGVzLiAgQ2FuY2VsIGFueXRpbWUgd2l0aCBubyBmZWVzIG9yIGhhc3NsZS4gIFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvc3RpbmcgRmVlcyBJbmNsdWRlZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SG9zdGluZyBmZWVzIGFyZSBidWlsdCByaWdodCBpbnRvIHRoZSBtb250aGx5IHBheW1lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5VbmxpbWl0ZWQgRWRpdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBhbnl0aGluZyB5b3Ugd2FudCBhdCBhbnl0aW1lIGFuZCBpdCB3aWxsIGJlIGRvbmUgdGhhdCBkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4yNC83IEN1c3RvbWVyIFNlcnZpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbGwgZGlyZWN0IGFueXRpbWUgZGF5IG9yIG5pZ2h0LCBubyBwaG9uZSB0cmVlcyBvciBhdXRvbWF0ZWQgcmVzcG9uc2VzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V2ViIERlc2lnbiAmIERldmVsb3BtZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbmNsdWRlcyBvdmVyIDQwIGhvdXJzIG9mIGRlc2lnbiwgZGV2ZWxvcG1lbnQsIGFuZCB0ZXN0aW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2l0YXRpb25zIEFuZCBMaXN0aW5nczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SXQncyBpbXBvcnRhbnQgdG8gaGF2ZSB5b3VyIHdlYnNpdGUgbGlua2VkIGZyb20gb3RoZXIgd2Vic2l0ZXMsIGxpa2UgZGlyZWN0b3JpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hb29nbGUgQW5hbHl0aWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBpbnN0YWxsIEFuYWx5dGljcyBmb3IgZnJlZSB0byBtb25pdG9yIHRyYWZmaWMgYW5kIHdoZXJlIGl0IGNvbWVzIGZyb20uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInByaWNlc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZCArIEJsb2dnaW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TVEFSVElORyBBVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MzAwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAxMDAwKyBXb3JkIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gV3JpdHRlbiBCeSBhbiBTRU8gU3BlY2lhbGlzdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAxIFBvc3QgUGVyIE1vbnRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+ICQxNTAgUGVyIEV4dHJhIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj41IFBBR0VTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4xNTA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gVW5saW1pdGVkIEVkaXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gSW5jbHVkZXMgSG9zdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDI0LzcgQ3VzdG9tZXIgU2VydmljZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IExpZmV0aW1lIFVwZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWRcInR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5Mb2dvcyAmIEdyYXBoaWMgRGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5JTkNMVURFRCE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMiByZXZpc2lvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBBbGwgRmlsZSBGb3JtYXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gUmVhZHkgdG8gdXNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gRlJFRSB3LyBTdWJzY3JpcHRpb248L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVB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
