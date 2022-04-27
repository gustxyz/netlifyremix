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

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Homepage
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
function Homepage() {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInBhYmlvX3YyMDIyMDEyM19sb2NhbGVcIiwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgXCJTZXQtQ29va2llXCIsXG4gICAgYXdhaXQgY29va2llLnNlcmlhbGl6ZSh1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICApO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5cbmltcG9ydCAgU3R5bGVzICBmcm9tIFwiLi9hc3NldHMvc3R5bGVzL2Jhc2UuY3NzXCJcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQWxraSBEaWdpdGFsIHwgV2ViIERlc2lnblwiIH07XG59O1xuXG5cblxuY29uc3QgQmFzZVRlbXBsYXRlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgPGhlYWQ+XG4gICAgICA8bGluayBocmVmPXtTdHlsZXN9IHJlbD0nc3R5bGVzaGVldCcvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8TGlua3MgLz5cbiAgICBcbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblxuXG4gIHJldHVybiAoXG4gICAgPEJhc2VUZW1wbGF0ZT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0Jhc2VUZW1wbGF0ZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gPEJhc2VUZW1wbGF0ZT57ZXJyb3J9PC9CYXNlVGVtcGxhdGU+O1xufTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKExvZ28pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdiBjb250YWluZXIgbW9iaWxlLW5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibW9iaWxlLWxvZ29cIiBzcmM9e0xvZ299IGFsdD1cIm1vYmlsZV9jb21wYW55X2xvZ29cIiBoZWlnaHQ9XCI2MFwiIC8+IFxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGFyaWEtbGFiZWw9XCJvcGVuIHRoZSBtZW51XCIgaWQ9XCJtZW51LWJ1dHRvblwiIGNsYXNzTmFtZT1cImhhbWJ1cmdlciBoYW1idXJnZXItLXNwcmluZ1wiIG9uQ2xpY2s9XCJ0b2dnbGVOYXYoKVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1tZW51XCIgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cImNvbXBhbnkgbG9nb1wiIHdpZHRoPVwiMTAwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJvbi10b3BcIiBjbGFzc05hbWU9XCJuYXZiYXItbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayBjbGFzc05hbWU9J2FjdGl2ZS1tZW51JyB0bz0nLyc+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1saVwiPjxMaW5rIHRvPSdhYm91dCc+QWJvdXQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayB0bz0nc2VydmljZXMnPlNlcnZpY2VzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgdG89J3BvcnRmb2xpbyc+UG9ydGZvbGlvPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgdG89J2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsICJcbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBsaWdodC1tb2RlLXN2Z1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYzI3MmUxM2YxMWZlYzVlOGE4MmI2MzQyYmMxOTRiM2ViNzRiNWI3Mi83Y2YxMC9pbWFnZXMvZm9vdGVyLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAgLz5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBkYXJrLW1vZGUtc3ZnXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8zYjc1NmFlMzBlZjUxY2NkODU2NGMyOTc4ZWE4YTVhNzBmMTkzMWY4Lzk1ZGI3L2ltYWdlcy9mb290ZXItc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3VwXCI+IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW0gaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIG1vYmlsZS1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gZGVza3RvcC1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tXCI+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTA5LTQ4MS03NTEyXCI+KDUwOSk0ODEtNzUxMjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9Jy8nPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9Jy9odG1sL2Fib3V0Jz5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay1sb25nJyBocmVmPScvaHRtbC9zZXJ2aWNlcyc+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstbG9uZycgaHJlZj0nLyNwb3J0Zm9saW8nPlBvcnRmb2xpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay1sb25nJyBocmVmPScvaHRtbC9jb250YWN0Jz5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPlNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPldlYiBEZXNpZ248L3A+XG4gICAgICAgICAgICAgICAgICA8cD5XZWJzaXRlIE1haW50ZW5hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+U0VPIFNlcnZpY2VzPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q29udGVudCBDcmVhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkxvZ28gRGVzaWduPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZGluZ1wiPlxuICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgMjAyMSB8IEFsa2kgRGlnaXRhbCBXZWIgU2VydmljZXMgfCBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPE1haW4gLz5cbn1cbiIsICJcblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwibGFuZGluZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPlNtYWxsIEJ1c2luZXNzIFdlYiBEZXNpZ24gKyBEZXZlbG9wbWVudDwvaDE+XG4gICAgICAgICAgICA8aDI+Tm8gcGFnZSBidWlsZGVycyBvciBXb3JkUHJlc3MgLSBXZSBvZmZlciAxMDAlIGhhbmQtY29kZWQgd2Vic2l0ZXMgd2l0aCBzdXBlcmlvciByZXN1bHRzIHN0YXJ0aW5nIGF0ICQxNTAvbW8uPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHF1b3RlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgIEdFVCBJTiBUT1VDSCFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2NrLXVwIGRlc2t0b3AtZGlzcGxheVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvODFmZjNiOWFkMzFjNDRhZTFlNWQzYWYyZjBkNjM2NGQ2MGVkZWU4NS8yZjE1Zi9pbWFnZXMvbW9jay11cC1yZXBsYWNlLnBuZ1wiIGFsdD1cIm1vY2t1cCBvZiBhIHdlYnNpdGUgb24gY29tcHV0ZXIgZGVza3RvcCBhbmQgcGhvbmVcIi8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vY2stdXAgbW9iaWxlLWRpc3BsYXlcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzllNTQ4MjE4M2MwOGQ5OGZjNDNhNTZmYTFjOWE3ZjFhMGY2MWEyMDcvYTNiN2MvaW1hZ2VzL21vY2stdXAtbW9iaWxlLXJlcGFjZS5wbmdcIiBhbHQ9XCJhIG1vY2t1cCBvZiBhIHdlYnNpdGUgb24gY29tcHV0ZXIgZGVza3RvcCBhbmQgcGhvbmVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInN3b29wIGxpZ2h0LXN3b29wXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yNWU5NGVhYmIxY2RlYzI2MTNiZDI2NWQ2NDVkYzE1MzI0YmFjZmU4Lzg2ZjQ1L2ltYWdlcy9sYW5kaW5nLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInN3b29wIGRhcmstc3dvb3AgXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yYzQ5OTI2OWE0YTMzZmJiZmNhMjgwMTBkYjhmZGJiNjY4YTIzYzFjL2JlYmE2L2ltYWdlcy9sYW5kaW5nLXN3b29zaC1kYXJrLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwid2hhdC13ZS1kb1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LXRvcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LXdlLWRvLXRvcHBlciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPldIQVQgPC9zcGFuPiBXRSBET1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJncmFwaGljLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMjkwNDhkOWVmZTg5MjUyMzk5MTIyY2QyNDg3ZjI1M2RjYmU5YmNjNC9jZjhhNS9pbWFnZXMvY29kZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5XZSBzcGVjaWFsaXplIGluIHNtYWxsIGJ1c2luZXNzIHdlYiBkZXNpZ24gYW5kIGRldmVsb3BtZW50IGZvciBjbGllbnRzIGFueXdoZXJlIGluIHRoZSBVUy4gRXZlcnkgbGluZSBvZiBjb2RlIGlzIHdyaXR0ZW4gYnkgaGFuZCB0byBlbnN1cmUgdGhlIGJlc3QgcGVyZm9ybWFuY2UsIHdoaWNoIGhlbHBzIGJyaW5nIGluIG1vcmUgY3VzdG9tZXJzIHRvIHlvdXIgc2l0ZSBhbmQgYnJpbmcgbW9yZSByZXZlbnVlIHRvIHlvdXIgYnVzaW5lc3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tY29udGVudCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI1MTJwdFwiIHZpZXdCb3g9XCItMTEgMCA1MTIgNTEyLjAwMVwiIHdpZHRoPVwiNTEycHRcIj48cGF0aCBkPVwibTI2MS40Mzc1IDUxMS40NDE0MDYgMTM4Ljg1MTU2Mi01NC45NDE0MDZjNTQuNzY1NjI2LTQ0LjkyOTY4OCA4OS43MTA5MzgtMTEzLjEzMjgxMiA4OS43MTA5MzgtMTg5LjUgMC0xMzUuMzA4NTk0LTEwOS42OTE0MDYtMjQ1LTI0NS0yNDVzLTI0NSAxMDkuNjkxNDA2LTI0NSAyNDVjMCAxMzUuMzEyNSAxMDkuNjkxNDA2IDI0NSAyNDUgMjQ1IDUuNTI3MzQ0IDAgMTEuMDAzOTA2LS4xOTkyMTkgMTYuNDM3NS0uNTU4NTk0em0wIDBcIiBmaWxsPVwiIzI3YTNmZlwiLz48cGF0aCBkPVwibTM4OC43NDIxODggMzE4Ljk0OTIxOWMxLjk1MzEyNC0yMy42NDQ1MzEtMS42NDg0MzgtNDcuMzM1OTM4LTEyLjExNzE4OC02OC42Mjg5MDctMjcuMDQyOTY5LTU1LjAxMTcxOC0yMC44Mzk4NDQtNTkuMDAzOTA2LTIxLjY3OTY4OC0xMTMuNjAxNTYyIDAtMTEuMTU2MjUtOS4wNDI5NjgtMjAuMTk1MzEyLTIwLjE5NTMxMi0yMC4xOTUzMTItMTEuMTU2MjUgMC0yMC4xOTUzMTIgOS4wMzkwNjItMjAuMTk1MzEyIDIwLjE5NTMxMiAwIDcuMjAzMTI1IDAgMjAzLjgzMjAzMSAwIDIwMy4wNjI1IDAgMy4xNDg0MzgtLjMzNTkzOCA2LjIyMjY1Ni0uOTU3MDMyIDkuMTg3NXYyOS4wNzAzMTJjMCAyNC40OTYwOTQtMTkuOTI5Njg3IDQ0LjQyOTY4OC00NC40MjU3ODEgNDQuNDI5Njg4LTE2LjI2OTUzMSAwLTcyLjM3NSAwLTExMC41NTA3ODEgMCAxNi45ODA0NjggMjMuNjE3MTg4IDQwLjIxNDg0NCA0Mi4xMTMyODEgNjcuMTc5Njg3IDUzLjMxMjUuMTY3OTY5LjA2NjQwNi4zMzU5MzguMTM2NzE5LjUwMzkwNy4yMDcwMzEgMTYuMjIyNjU2IDYuODU1NDY5IDI4LjYwOTM3NCAxOS43ODEyNSAzNS4xMzI4MTIgMzUuNDUzMTI1IDUyLjUzNTE1Ni0zLjQ4MDQ2OCAxMDAuNTQ2ODc1LTIzLjUwNzgxMiAxMzguODUxNTYyLTU0LjkzNzVsLTE1LjA1MDc4MS01NS4yOTI5NjhjLTIuMTQ4NDM3LTcuOTAyMzQ0LTIuOTA2MjUtMTYuMTE3MTg4LTIuMjM4MjgxLTI0LjI3NzM0NHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm04My42MDkzNzUgMTE3LjIzMDQ2OS02LjE1MjM0NC01LjY5OTIxOWMtOS40ODA0NjktOC43ODkwNjItMjQuNDI5Njg3LTguMjE4NzUtMzMuMjE0ODQzIDEuMjY1NjI1LTguNzg1MTU3IDkuNDgwNDY5LTguMjE0ODQ0IDI0LjQyOTY4NyAxLjI2NTYyNCAzMy4yMTQ4NDRsMzguMTAxNTYzIDM1LjMwNDY4N3ptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0yODUuNjIxMDk0IDBoLTE3Mi43MTQ4NDRjLTE2Ljc1NzgxMiAwLTMwLjM5MDYyNSAxMy42MzY3MTktMzAuMzkwNjI1IDMwLjM5NDUzMXYzNjMuOTgwNDY5YzAgMTYuNzU3ODEyIDEzLjYzMjgxMyAzMC4zOTQ1MzEgMzAuMzkwNjI1IDMwLjM5NDUzMWgxNzIuNzE0ODQ0YzE2Ljc1NzgxMiAwIDMwLjM5NDUzMS0xMy42MzY3MTkgMzAuMzk0NTMxLTMwLjM5NDUzMXYtMzYzLjk4MDQ2OWMwLTE2Ljc1NzgxMi0xMy42MzY3MTktMzAuMzk0NTMxLTMwLjM5NDUzMS0zMC4zOTQ1MzF6bTAgMFwiIGZpbGw9XCIjM2Q0ZWM2XCIvPjxwYXRoIGQ9XCJtMTQxLjAzNTE1NiAyMi41MzkwNjJjLTEuNjQ0NTMxLTIuNDQ1MzEyLTIuNjA1NDY4LTUuMzg2NzE4LTIuNjA1NDY4LTguNTU0Njg3IDAtNi4yMTg3NSAzLjcwMzEyNC0xMS41NjI1IDkuMDE1NjI0LTEzLjk4NDM3NWgtMzQuNTM5MDYyYy0xNi43ODUxNTYgMC0zMC4zOTQ1MzEgMTMuNjA5Mzc1LTMwLjM5NDUzMSAzMC4zOTQ1MzF2MzYzLjk4MDQ2OWMwIDE2Ljc4NTE1NiAxMy42MDkzNzUgMzAuMzkwNjI1IDMwLjM5NDUzMSAzMC4zOTA2MjVoMzYuNzE4NzV2LTM3NS41ODk4NDRjMC05LjU1ODU5My0zLjI1MzkwNi0xOC43MDMxMjUtOC41ODk4NDQtMjYuNjM2NzE5em0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48cGF0aCBkPVwibTEwMC4xMDkzNzUgMTkxLjk3NjU2MnYyMDIuMzk4NDM4YzAgNy4wNzAzMTIgNS43MzA0NjkgMTIuODAwNzgxIDEyLjc5Njg3NSAxMi44MDA3ODFoMTcyLjcxNDg0NGM3LjA2NjQwNiAwIDEyLjc5Njg3NS01LjczMDQ2OSAxMi43OTY4NzUtMTIuODAwNzgxIDAtNi45NDUzMTIgMC0xMDguMzM1OTM4IDAtMjAyLjM5ODQzOHptMCAwXCIgZmlsbD1cIiNlNmY3ZmVcIi8+PHBhdGggZD1cIm0xMDAuMTA5Mzc1IDE5MS45NzY1NjJ2MjAyLjM5ODQzOGMwIDcuMDcwMzEyIDUuNzMwNDY5IDEyLjgwMDc4MSAxMi43OTY4NzUgMTIuODAwNzgxaDMwLjI3MzQzOHYtMjE1LjE5OTIxOXptMCAwXCIgZmlsbD1cIiNkNWYxZmVcIi8+PHBhdGggZD1cIm0xNjkuNjc1NzgxIDI1My4wMzEyNWMwIDExLjA3NDIxOS04Ljk3NjU2MiAyMC4wNTA3ODEtMjAuMDUwNzgxIDIwLjA1MDc4MXMtMjAuMDUwNzgxLTguOTc2NTYyLTIwLjA1MDc4MS0yMC4wNTA3ODEgOC45NzY1NjItMjAuMDU0Njg4IDIwLjA1MDc4MS0yMC4wNTQ2ODggMjAuMDUwNzgxIDguOTgwNDY5IDIwLjA1MDc4MSAyMC4wNTQ2ODh6bTAgMFwiIGZpbGw9XCIjM2Q0ZWM2XCIvPjxwYXRoIGQ9XCJtMTY5LjY3NTc4MSAzMjcuMzgyODEyYzAgMTEuMDc0MjE5LTguOTc2NTYyIDIwLjA1NDY4OC0yMC4wNTA3ODEgMjAuMDU0Njg4cy0yMC4wNTA3ODEtOC45ODA0NjktMjAuMDUwNzgxLTIwLjA1NDY4OGMwLTExLjA3NDIxOCA4Ljk3NjU2Mi0yMC4wNTA3ODEgMjAuMDUwNzgxLTIwLjA1MDc4MXMyMC4wNTA3ODEgOC45NzY1NjMgMjAuMDUwNzgxIDIwLjA1MDc4MXptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNDcuMzU5Mzc1IDIzMy4xMTMyODFjLTEwLjAwNzgxMyAxLjEyODkwNy0xNy43ODUxNTYgOS42MDkzNzUtMTcuNzg1MTU2IDE5LjkxNzk2OSAwIDExLjA3NDIxOSA4Ljk3NjU2MiAyMC4wNTA3ODEgMjAuMDUwNzgxIDIwLjA1MDc4MSA2LjkwNjI1IDAgMTIuOTkyMTg4LTMuNDkyMTg3IDE2LjU5NzY1Ni04LjgwNDY4Ny0xNy4yODkwNjIgMS45NDkyMTgtMjguMjk2ODc1LTE3LjI2OTUzMi0xOC44NjMyODEtMzEuMTY0MDYzem0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48cGF0aCBkPVwibTE0Ny4zNTkzNzUgMzA3LjQ2ODc1Yy0xMC4wMDc4MTMgMS4xMjUtMTcuNzg1MTU2IDkuNjA5Mzc1LTE3Ljc4NTE1NiAxOS45MTQwNjIgMCAxMS4wNzgxMjYgOC45NzY1NjIgMjAuMDU0Njg4IDIwLjA1MDc4MSAyMC4wNTQ2ODggNi45MDYyNSAwIDEyLjk5MjE4OC0zLjQ5MjE4OCAxNi41OTc2NTYtOC44MDQ2ODgtMTcuMTgzNTk0IDEuOTMzNTk0LTI4LjM1OTM3NS0xNy4xNzk2ODctMTguODYzMjgxLTMxLjE2NDA2MnptMCAwXCIgZmlsbD1cIiMyYjM4OTRcIi8+PGcgZmlsbD1cIiMxMWRmZWZcIj48cGF0aCBkPVwibTIzMS41NjY0MDYgMjQ0LjY5NTMxMmgtMjguNDY4NzVjLTQuMTQwNjI1IDAtNy41LTMuMzU5Mzc0LTcuNS03LjUgMC00LjE0NDUzMSAzLjM1OTM3NS03LjUgNy41LTcuNWgyOC40Njg3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OSA3LjUgNy41IDAgNC4xNDA2MjYtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTI2MC4wMzUxNTYgMjc2LjM2NzE4OGgtNTYuOTM3NWMtNC4xNDQ1MzEgMC03LjUtMy4zNTkzNzYtNy41LTcuNSAwLTQuMTQ0NTMyIDMuMzU1NDY5LTcuNSA3LjUtNy41aDU2LjkzNzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjggNy41IDcuNSAwIDQuMTQwNjI0LTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PHBhdGggZD1cIm0yMzEuNTY2NDA2IDMxOS4wNDY4NzVoLTI4LjQ2ODc1Yy00LjE0MDYyNSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41czMuMzU5Mzc1LTcuNSA3LjUtNy41aDI4LjQ2ODc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjVzLTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PHBhdGggZD1cIm0yNjAuMDM1MTU2IDM1MC43MTg3NWgtNTYuOTM3NWMtNC4xNDQ1MzEgMC03LjUtMy4zNTU0NjktNy41LTcuNSAwLTQuMTQwNjI1IDMuMzU1NDY5LTcuNSA3LjUtNy41aDU2LjkzNzVjNC4xNDA2MjUgMCA3LjUgMy4zNTkzNzUgNy41IDcuNSAwIDQuMTQ0NTMxLTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PC9nPjxwYXRoIGQ9XCJtMjg1LjUxOTUzMSAxNy41OTc2NTZoLTI1LjY2Nzk2OWMtMi40MjE4NzQgMC00LjM4MjgxMiAxLjk2MDkzOC00LjM4MjgxMiA0LjM3ODkwNiAwIDUuODA4NTk0LTQuNzUgMTAuNTU4NTk0LTEwLjU1NDY4OCAxMC41NTg1OTRoLTkxLjQ5NjA5M2MtNS44MDg1OTQgMC0xMC41NTg1OTQtNC43NS0xMC41NTg1OTQtMTAuNTU4NTk0IDAtMi40MTc5NjgtMS45NjA5MzctNC4zNzg5MDYtNC4zODI4MTMtNC4zNzg5MDZoLTI1LjY2Nzk2OGMtNy4wNzAzMTMgMC0xMi44MDA3ODIgNS43MzA0NjktMTIuODAwNzgyIDEyLjc5Njg3NXYxNjMuNTgyMDMxaDE5OC4zMTI1di0xNjMuNTgyMDMxYzAtNy4wNjY0MDYtNS43MzA0NjgtMTIuNzk2ODc1LTEyLjgwMDc4MS0xMi43OTY4NzV6bTAgMFwiIGZpbGw9XCIjZjk0OGI0XCIvPjxwYXRoIGQ9XCJtMTQzLjE3OTY4OCAyNC41MDc4MTJjLS4yMDMxMjYtLjgxMjUtLjMyMDMxMy0xLjY1NjI1LS4zMjAzMTMtMi41MjczNDMgMC0yLjQyMTg3NS0xLjk2MDkzNy00LjM4MjgxMy00LjM4MjgxMy00LjM4MjgxM2gtMjUuNjY3OTY4Yy03LjA3MDMxMyAwLTEyLjgwMDc4MiA1LjczMDQ2OS0xMi44MDA3ODIgMTIuNzk2ODc1djE2My41ODIwMzFoNDMuMTcxODc2em0wIDBcIiBmaWxsPVwiI2UwMGU4YlwiLz48cGF0aCBkPVwibTI4NS41MTk1MzEgMTcuNTk3NjU2aC0yNS42Njc5NjljLTIuNDIxODc0IDAtNC4zODI4MTIgMS45NjA5MzgtNC4zODI4MTIgNC4zNzg5MDYgMCA1LjgwODU5NC00Ljc1IDEwLjU1ODU5NC0xMC41NTQ2ODggMTAuNTU4NTk0aC01MC40NjQ4NDNsMTAzLjg3MTA5MyAxMzAuMjAzMTI1di0xMzIuMzQzNzVjMC03LjA2NjQwNi01LjczMDQ2OC0xMi43OTY4NzUtMTIuODAwNzgxLTEyLjc5Njg3NXptMCAwXCIgZmlsbD1cIiNmYzdhY2RcIi8+PHBhdGggZD1cIm0xNjYuOTE3OTY5IDc3LjIwNzAzMWgtMzQuNTg1OTM4Yy00LjE0MDYyNSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41czMuMzU5Mzc1LTcuNSA3LjUtNy41aDM0LjU4NTkzOGM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OSA3LjUgNy41IDAgNC4xNDA2MjUtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiIGZpbGw9XCIjZmM3YWNkXCIvPjxwYXRoIGQ9XCJtMTE3LjgxNjQwNiAyNDEuMTkxNDA2Yy03LjczMDQ2OCA4LjMzOTg0NC0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc1bC0zNC40OTYwOTQtMzEuOTY0ODQzYy04LjM0Mzc1LTcuNzMwNDY5LTguODM5ODQ0LTIwLjc2MTcxOS0xLjEwOTM3NS0yOS4xMDU0NjlzMjAuNzYxNzE5LTguODM5ODQ0IDI5LjEwNTQ2OS0xLjEwOTM3NWwzNC40OTYwOTMgMzEuOTY0ODQ0YzguMzM5ODQ0IDcuNzMwNDY4IDguODM5ODQ0IDIwLjc2MTcxOCAxLjEwOTM3NSAyOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMTE2LjcwNzAzMSAyMTIuMDg1OTM4LTE2LjQxMDE1Ni0xNS4yMDMxMjZjMi4xNjAxNTYgNy44MjQyMTkuMzY3MTg3IDE2LjU0Mjk2OS01LjU1MDc4MSAyMi45Mjk2ODgtNS45MjE4NzUgNi4zOTA2MjUtMTQuNDgwNDY5IDguODM5ODQ0LTIyLjQ0MTQwNiA3LjI4NTE1NmwxNi40MDYyNSAxNS4yMDMxMjVjOC4zNDM3NSA3LjczMDQ2OSAyMS4zNzEwOTMgNy4yMzA0NjkgMjkuMTA1NDY4LTEuMTA5Mzc1IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzc1LTEuMTA5Mzc1LTI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDI5Ny4zNjMyODFjLTcuNzMwNDY4IDguMzQzNzUtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NWwtMzQuNDk2MDk0LTMxLjk2NDg0NGMtOC4zNDM3NS03LjczMDQ2OC04LjgzOTg0NC0yMC43NjE3MTgtMS4xMDkzNzUtMjkuMTAxNTYyIDcuNzMwNDY5LTguMzQzNzUgMjAuNzYxNzE5LTguODM5ODQ0IDI5LjEwNTQ2OS0xLjEwOTM3NWwzNC40OTYwOTMgMzEuOTY0ODQ0YzguMzM5ODQ0IDcuNzMwNDY5IDguODM5ODQ0IDIwLjc1NzgxMiAxLjEwOTM3NSAyOS4xMDE1NjJ6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMTE3LjgxNjQwNiAzNTMuNTM5MDYyYy03LjczMDQ2OCA4LjM0Mzc1LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzZsLTM0LjQ5NjA5NC0zMS45NjQ4NDRjLTguMzQzNzUtNy43MzA0NjktOC44Mzk4NDQtMjAuNzYxNzE5LTEuMTA5Mzc1LTI5LjEwNTQ2OXMyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjggOC44Mzk4NDQgMjAuNzYxNzE4IDEuMTA5Mzc1IDI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0zODUuMjM4MjgxIDQwMS4yMDcwMzFjLTEuMDY2NDA2LTMuOTI5Njg3LTEuNzg5MDYyLTcuOTMzNTkzLTIuMTY3OTY5LTExLjk3MjY1Ni0zOC4xNjQwNjIgNjIuNjU2MjUtMTEyLjI1NzgxMiA5MS43NTM5MDYtMTgxLjg1NTQ2OCA3My42NjAxNTYgNy43NjE3MTggNC45ODgyODEgMTUuOTg0Mzc1IDkuMzA4NTk0IDI0LjU4NTkzNyAxMi44ODI4MTMuMTY3OTY5LjA3MDMxMi4zMzU5MzguMTQwNjI1LjUwMzkwNy4yMTA5MzcgMTYuMjIyNjU2IDYuODUxNTYzIDI4LjYwOTM3NCAxOS43NzczNDQgMzUuMTMyODEyIDM1LjQ1MzEyNSA1Mi41MzUxNTYtMy40ODA0NjggMTAwLjU0Njg3NS0yMy41MTE3MTggMTM4Ljg1MTU2Mi01NC45NDE0MDZ6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjxwYXRoIGQ9XCJtMTE2LjcwNzAzMSAyNjguMjYxNzE5LTE2LjQxMDE1Ni0xNS4yMDMxMjVjMi4xNjAxNTYgNy44MjAzMTIuMzY3MTg3IDE2LjUzOTA2Mi01LjU1MDc4MSAyMi45Mjk2ODctNS45MjE4NzUgNi4zOTA2MjUtMTQuNDgwNDY5IDguODM5ODQ0LTIyLjQ0MTQwNiA3LjI4NTE1N2wxNi40MDYyNSAxNS4xOTkyMThjOC4zNDM3NSA3LjczMDQ2OSAyMS4zNzUgNy4yMzQzNzUgMjkuMTA1NDY4LTEuMTA5Mzc1IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzcxMDkzLTEuMTA5Mzc1LTI5LjEwMTU2MnptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDMyNC40MzM1OTQtMTYuNDEwMTU2LTE1LjIwMzEyNWMyLjE2MDE1NiA3LjgyNDIxOS4zNjcxODcgMTYuNTQyOTY5LTUuNTUwNzgxIDIyLjkyOTY4Ny01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44NDM3NS0yMi40NDE0MDYgNy4yODUxNTZsMTYuNDA2MjUgMTUuMjAzMTI2YzguMzQzNzUgNy43MzA0NjggMjEuMzc1IDcuMjM0Mzc0IDI5LjEwNTQ2OC0xLjEwOTM3NiA3LjczMDQ2OS04LjM0Mzc1IDcuMjMwNDY5LTIxLjM3NS0xLjEwOTM3NS0yOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TW9iaWxlLUZpcnN0IERlc2lnbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgc2l0ZSBmb3IgbW9iaWxlIGRldmljZXMgZmlyc3QsIHRoZW4gd2UgYWRkIG9uIHRvIGl0IHRvIG1ha2UgdGFibGV0IGFuZCBkZXNrdG9wLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJMYXllcl8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiPjxnPjxwYXRoIGQ9XCJtMjU2IDIxLjk5NWMtMTM1LjMxMSAwLTI0NS4wMDIgMTA5LjY5MS0yNDUuMDAyIDI0NS4wMDIgMCA1Mi4zNjcgMTYuNDM5IDEwMC44ODkgNDQuNDI1IDE0MC43MDhsMjg2LjgyMiA4OC42NjZjOTIuNzU1LTM0Ljg5MyAxNTguNzU3LTEyNC40MTkgMTU4Ljc1Ny0yMjkuMzczIDAtMTM1LjMxMS0xMDkuNjkxLTI0NS4wMDMtMjQ1LjAwMi0yNDUuMDAzelwiIGZpbGw9XCIjZmZkZDQwXCIvPjxwYXRoIGQ9XCJtMjMxLjQzMiAxMTMuNzY0YzAtOS4zMDYgMS4xNDYtMTguMzQ4IDMuMjktMjcuMDAxaC0xMzYuNzgzYy0zLjAzNCAwLTUuOTk1LjMxNi04Ljg1NS45MTEtMTIuODQ3IDExLjk2My0yNC40MDQgMjUuMjg4LTM0LjQ0NiAzOS43NDgtLjA1Ny45MDYtLjA5NiAxLjgxOC0uMDk2IDIuNzM4djI3Ni4yNzVjMTAuNDUxIDE1LjA3MSAyMi41NTEgMjguOTEyIDM2LjAzNSA0MS4yNjVsMjE2LjU3OSA1OC45MzZjMTIuNTYyLTIuNjcyIDI0Ljc2OS02LjMwMiAzNi41NC0xMC44MTZ2LTI2OS43OTRjLTYxLjkwMyAwLTExMi4yNjQtNTAuMzYtMTEyLjI2NC0xMTIuMjYyelwiIGZpbGw9XCIjMTY3Y2MxXCIvPjxwYXRoIGQ9XCJtMTYyLjE2NSA0ODAuMzk5LTIuMTEzLTMzNi4xMWMtLjAwMy0uNDkyLS4xODUtLjk2NC0uNDktMS4zNS01LjM0Ny02Ljc1Mi0yLjAxMS0xMS40MDQuMDgyLTEzLjM2Ni42ODUtLjY0Mi44NDYtMS42NzMuNDE3LTIuNTA4LTIuNDYzLTQuNzk2LjgxNS03LjgyOSAyLjE5NS04LjgzNC4zNzktLjI3Ni42NDgtLjY3Ni43NzktMS4xMjZsMy43NzMtMTMuMDYxYy4yMDMtLjcwMy4wNDEtMS40NzEtLjQ0OS0yLjAxNC02LjQ1OS03LjE2LTEuOTkzLTEyLjI3Ny40OTQtMTQuMzA0LjMxOC0uMjU5LjUzOS0uNTk2LjY2NC0uOTYzaC02OS41NzhjLTIzLjkyOSAwLTQzLjM5NyAxOS40NjgtNDMuMzk3IDQzLjM5N3YyNzYuMjczYzEwLjA1NCAxNC40OTkgMjEuNjMzIDI3Ljg1OCAzNC41MDMgMzkuODV6XCIgZmlsbD1cIiMwMjQ3ODhcIi8+PHBhdGggZD1cIm04MS41NDIgMTk1Ljg4N3YyNDMuMTA4YzQ0LjQzIDQ1LjA2MiAxMDYuMTc3IDczLjAwNSAxNzQuNDU4IDczLjAwNSAyMC45NTEgMCA0MS4yODUtMi42MzYgNjAuNjk1LTcuNTgzdi0yODEuNjgxYy0xOC43ODctNC42NTYtMzUuNzItMTQuMDU1LTQ5LjQ1NC0yNi44NDl6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm04MS41NDIgNDM4Ljk5NmMyMi4yNzEgMjIuNTg3IDQ4Ljg4OCA0MC44NzUgNzguNTA2IDUzLjQ5NHYtMjk2LjYwM2gtNzguNTA2elwiIGZpbGw9XCIjZDNkY2ZiXCIvPjxnPjxwYXRoIGQ9XCJtMTY3LjE0OSAxMTcuODYyaC00LjMzM2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg0LjMzM2M0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiIzFlOTJkM1wiLz48L2c+PGc+PHBhdGggZD1cIm0yMzQuMzg0IDExNy44NjJoLTQxLjYzOGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg0MS42MzhjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiMxZTkyZDNcIi8+PC9nPjxwYXRoIGQ9XCJtMjMzLjY1MyAxMzYuMDI5aC04My4wMzVjLTYuNiAwLTEyLTUuNC0xMi0xMiAwLTUuNjctNC41OTYtMTAuMjY2LTEwLjI2Ni0xMC4yNjZoLTMwLjQxM2MtOS4wNTYgMC0xNi4zOTcgNy4zNDEtMTYuMzk3IDE2LjM5N3Y2OC4zODVoMTg4LjY0NGMtMTguMzc5LTE1Ljk1Ni0zMS41MzUtMzcuNzc1LTM2LjUzMy02Mi41MTZ6XCIgZmlsbD1cIiM5YmQ4ZjlcIi8+PHBhdGggZD1cIm0xNTAuNjE4IDEzNi4wMjljLTYuNiAwLTEyLTUuNC0xMi0xMiAwLTUuNjctNC41OTYtMTAuMjY2LTEwLjI2NS0xMC4yNjZoLTMwLjQxNGMtOS4wNTYgMC0xNi4zOTcgNy4zNDEtMTYuMzk3IDE2LjM5N3Y2OC4zODVoNzguNTA1di02Mi41MTdoLTkuNDI5elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxnIGZpbGw9XCIjMWU5MmQzXCI+PHBhdGggZD1cIm0zMTYuNjk1IDIxMC4yMzZjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjV2Mjg4LjQ1NWM1LjA2LTEuMTIgMTAuMDYzLTIuMzkyIDE1LTMuODE5di0yODQuNjM2YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjV6XCIvPjxwYXRoIGQ9XCJtODkuMDQyIDQ0Ni4yODJ2LTMxNi4xMjJjMC00LjkwNiAzLjk5MS04Ljg5NyA4Ljg5Ny04Ljg5N2gzMC40MTRjMS41MjUgMCAyLjc2NiAxLjI0IDIuNzY2IDIuNzY1IDAgMTAuNzUyIDguNzQ4IDE5LjUgMTkuNSAxOS41aDg4LjAzNWM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41IDAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVoLTg4LjAzNWMtMi40MzkgMC00LjUtMi4wNi00LjUtNC41IDAtOS43OTYtNy45Ny0xNy43NjUtMTcuNzY2LTE3Ljc2NWgtMzAuNDE0Yy0xMy4xNzcgMC0yMy44OTcgMTAuNzIxLTIzLjg5NyAyMy44OTd2MzAwLjg5MmM0Ljc3NiA1LjI5MyA5Ljc4NCAxMC4zNzEgMTUgMTUuMjN6XCIvPjwvZz48cGF0aCBkPVwibTE1OS42NDQgMTI5LjU3M2MuMzA2LS4yODYuNDg5LS42NTUuNTgtMS4wNDRoLTkuNjA2Yy0yLjQzOSAwLTQuNS0yLjA2LTQuNS00LjUgMC05Ljc5Ni03Ljk3LTE3Ljc2NS0xNy43NjYtMTcuNzY1aC0zMC40MTNjLTEzLjE3NyAwLTIzLjg5NyAxMC43MjEtMjMuODk3IDIzLjg5N3YzMDAuODkyYzQuNzc2IDUuMjkzIDkuNzg0IDEwLjM3MSAxNSAxNS4yM3YtMzE2LjEyM2MwLTQuOTA2IDMuOTkxLTguODk3IDguODk3LTguODk3aDMwLjQxNGMxLjUyNSAwIDIuNzY2IDEuMjQgMi43NjYgMi43NjUgMCAxMC43NTIgOC43NDggMTkuNSAxOS41IDE5LjVoOS4yODFjLS4wODMtLjIxLS4xOTUtLjQxLS4zMzctLjU5LTUuMzQ3LTYuNzUxLTIuMDExLTExLjQwNC4wODEtMTMuMzY1elwiIGZpbGw9XCIjMTY3Y2MxXCIvPjxwYXRoIGQ9XCJtMjQxLjkzNCAxNTcuMTA2aC04MS41ODV2MjYuMjg2aDk0LjI5MmMuNTY4IDAgMS4xMjQtLjA0OCAxLjY3NC0uMTE4LTUuODkyLTcuOTg0LTEwLjc1LTE2Ljc3Mi0xNC4zODEtMjYuMTY4elwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtMTYxLjM0OSAxNTcuMTA2aC0xNC43NTJjLTcuMjU5IDAtMTMuMTQzIDUuODg0LTEzLjE0MyAxMy4xNDNzNS44ODQgMTMuMTQzIDEzLjE0MyAxMy4xNDNoMTQuNzUyelwiIGZpbGw9XCIjM2M1OGEwXCIvPjxnPjxwYXRoIGQ9XCJtMTE2LjUzNSAxNDEuODMyaC0xMC4zMzRjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoMTAuMzM0YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZTllZmZmXCIvPjwvZz48cGF0aCBkPVwibTI3OS44MjEgMzQ0LjVoLTE2MS40MDVjLTUuNDQ1IDAtOS44OTktNC40NTUtOS44OTktOS44OTl2LTg3LjMyYzAtNS40NDUgNC40NTUtOS44OTkgOS44OTktOS44OTloMTYxLjQwNWM1LjQ0NSAwIDkuODk5IDQuNDU1IDkuODk5IDkuODk5djg3LjMyYzAgNS40NDUtNC40NTQgOS44OTktOS44OTkgOS44OTl6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PHBhdGggZD1cIm0xMDguNTE3IDI0Ny4yODF2ODcuMzJjMCA1LjQ0NSA0LjQ1NSA5Ljg5OSA5Ljg5OSA5Ljg5OWgxMDMuNzA2Yy0uMzE2LS41MjUtLjc3OC0uOTctMS4zNzQtMS4yNTUtOC4wNjgtMy44NDgtNy44NTQtMTAuMDQ2LTYuODQ4LTEzLjY5Mi40NDMtMS42MDctLjM3NC0zLjMxNS0xLjk0LTMuODg2LTE0LjMyLTUuMjE2LTExLjc2MS0xOC4wMzQtMTAuNjMzLTIxLjg2LjIxOC0uNzM5LjE3Mi0xLjUyNy0uMTQtMi4yMzJsLTEwLjk5LTI0LjgyM2MtLjQ3OS0xLjA4MS0xLjUxLTEuODM5LTIuNjktMS45MDgtOS42ODctLjU2Ny0xMS40MzQtOC40NjQtMTEuNjcyLTEyLjY4NC0uMDg0LTEuNDg0LTEuMTkxLTIuNzE0LTIuNjU2LTIuOTY0LTE2LjA0OS0yLjc0My0xNC43MTktMTUuMzQtMTMuNjMtMjAuMDM5LjEzOS0uNjAxLjA5NC0xLjIxNC0uMTAzLTEuNzc1aC00MS4wMjljLTUuNDQ2IDAtOS45IDQuNDU0LTkuOSA5Ljg5OXpcIiBmaWxsPVwiI2U4MDA1NFwiLz48Zz48cGF0aCBkPVwibTEzOC4yMyAzODIuMDAzaC01Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoNWM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTcgNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTEzLjUxNyAzODIuMDAzaC01Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoNWM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjg5LjcyMSAzODIuMDAzaC05NC4wNzRjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg5NC4wNzRjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48Zz48cGF0aCBkPVwibTE5NS42NDcgMzgyLjAwM2gtMzcuMDgzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoMzcuMDgzYzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0xOTUuNjQ4IDM4OS44ODJjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjV2LTE1LjVjMC00LjE0MyAzLjM1OC03LjUgNy41LTcuNXM3LjUgMy4zNTcgNy41IDcuNXYxNS41YzAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNlODAwNTRcIi8+PC9nPjxlbGxpcHNlIGN4PVwiMTk5LjExOFwiIGN5PVwiMjkwLjk0MVwiIGZpbGw9XCIjZTllZmZmXCIgcng9XCIzOS4wNzFcIiByeT1cIjM5LjA3MVwiIHRyYW5zZm9ybT1cIm1hdHJpeCguMTYgLS45ODcgLjk4NyAuMTYgLTExOS45NjEgNDQwLjg4NSlcIi8+PHBhdGggZD1cIm0yMTEuOTU5IDMyNS42NjhjLTE0LjMyLTUuMjE2LTExLjc2MS0xOC4wMzQtMTAuNjMzLTIxLjg2LjIxOC0uNzM5LjE3Mi0xLjUyNy0uMTQtMi4yMzJsLTEwLjk5LTI0LjgyM2MtLjQ3OS0xLjA4MS0xLjUxLTEuODM5LTIuNjktMS45MDgtOS42ODctLjU2Ny0xMS40MzQtOC40NjQtMTEuNjcyLTEyLjY4NC0uMDQyLS43NDctLjM0NS0xLjQzLS44MjEtMS45NTUtOS4xMDggNy4xNTMtMTQuOTY1IDE4LjI1Ny0xNC45NjUgMzAuNzM2IDAgMjEuNTc4IDE3LjQ5MyAzOS4wNzEgMzkuMDcxIDM5LjA3MSA1LjE0NSAwIDEwLjA1My0xLjAwNCAxNC41NTEtMi44MTEtLjM0Ny0uNjktLjkzNi0xLjI1Mi0xLjcxMS0xLjUzNHpcIiBmaWxsPVwiI2JlYzhmN1wiLz48cGF0aCBkPVwibTIxMy44MDQgMjg2LjkxNS0xOS4wODEtMTIuMTk5Yy0zLjE4LTIuMDMzLTcuMzUyLjI1MS03LjM1MiA0LjAyNnYyNC4zOThjMCAzLjc3NSA0LjE3MiA2LjA1OSA3LjM1MiA0LjAyNmwxOS4wODEtMTIuMTk5YzIuOTM5LTEuODc5IDIuOTM5LTYuMTczIDAtOC4wNTJ6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PGc+PHBhdGggZD1cIm0xODAuNzQ3IDQxNC43NjNoLTcyLjIzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDcyLjIzYzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjUgMCA0LjE0Mi0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PGc+PHBhdGggZD1cIm0yODkuNzIxIDQ0NC4xNDVoLTE4MS4yMDRjLTQuMTQyIDAtNy41LTMuMzU4LTcuNS03LjUgMC00LjE0MyAzLjM1OC03LjUgNy41LTcuNWgxODEuMjA0YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjUgMCA0LjE0Mi0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PHBhdGggZD1cIm0yODkuNzIxIDQ1Ni45MjJoLTE4MS4yMDRjLTEuOSAwLTMuNjMuNzEyLTQuOTUyIDEuODc3IDUuODMzIDQuNjQyIDExLjg4NCA5LjAyIDE4LjEzMyAxMy4xMjNoMTY4LjAyM2M0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48cGF0aCBkPVwibTI4OS43MjEgNDg0LjdoLTE0Ni4yYzExLjM5NSA1Ljg5OSAyMy4zMTMgMTAuOTI1IDM1LjY2NSAxNWgxMTAuNTM0YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjUuMDAxLTQuMTQyLTMuMzU3LTcuNS03LjQ5OS03LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PGNpcmNsZSBjeD1cIjM0My42OTVcIiBjeT1cIjExMy43NjNcIiBmaWxsPVwiIzJhNDI4Y1wiIHI9XCIxMTMuNzYzXCIvPjxwYXRoIGQ9XCJtMzg3LjE4MiAxNTUuMzVjLjA5Ny0xLjk1My0uNjEzLTMuODU2LTEuOTk2LTUuMjM5bC02LjY2Mi02LjY2MmMtMS4yLTEuMi0yLjgwOC0xLjg5MS00LjUwMi0xLjk5Ny0yMS42MS0xLjM1Ny0yMi43NzItMTkuNzY1LTIyLjcwOC0yNC41MzEuMDExLS44MTUtLjEzNy0xLjYyMi0uNDE3LTIuMzg3bC01Ljg3OC0xNi4wNzZjLS44MzctMi4yODctMi44MjktMy45MjYtNS4yMTktNC4zOTQtNTEuMDE3LTkuOTk1LTM5LjcwNi02OC44NzUtMzUuOTcyLTgzLjc5MS4yNTgtMS4wMzEuMjU3LTIuMDg5LjAzNy0zLjA5OC00My4xODQgMTYuMTQ0LTczLjkzNCA1Ny43NzMtNzMuOTM0IDEwNi41ODkgMCA2Mi44MyA1MC45MzMgMTEzLjc2MyAxMTMuNzYzIDExMy43NjMgNy4zMjUgMCAxNC40ODQtLjcwMSAyMS40MjQtMi4wMjNsMzAuMzk2LTYwLjk1Yy03LjQxOC0xLjUyOC04LjQ4Mi02LjE3Ni04LjMzMi05LjIwNHpcIiBmaWxsPVwiIzFjMmU3YVwiLz48Zz48cGF0aCBkPVwibTI5OS43MTIgMTUyLjYwMy0zMy4zMDQtMzMuMzA0Yy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNSAwLTExLjA3MmwzMy4zMDQtMzMuMzA0YzMuMDU3LTMuMDU3IDguMDE0LTMuMDU4IDExLjA3MiAwIDMuMDU3IDMuMDU3IDMuMDU4IDguMDE1IDAgMTEuMDcybC0yNy43NjggMjcuNzY5IDI3Ljc2OCAyNy43NjhjMy4wNTcgMy4wNTcgMy4wNTcgOC4wMTUgMCAxMS4wNzItMy4wNTggMy4wNTctOC4wMTQgMy4wNTYtMTEuMDcyLS4wMDF6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMzc2LjYwNyAxNTIuNjAzYy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNCAwLTExLjA3MmwyNy43NjgtMjcuNzY4LTI3Ljc2OS0yNy43NjhjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE1IDAtMTEuMDcyIDMuMDU4LTMuMDU4IDguMDE1LTMuMDU4IDExLjA3MiAwbDMzLjMwNSAzMy4zMDRjMy4wNTUgMy4wNTYgMy4wNTcgOC4wMTUgMCAxMS4wNzJsLTMzLjMwNCAzMy4zMDRjLTMuMDU3IDMuMDU3LTguMDE0IDMuMDU4LTExLjA3MiAwelwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48Zz48cGF0aCBkPVwibTMyNS41ODkgMTU0LjIxM2MtMy45NDctMS43NjYtNS43MTQtNi4zOTgtMy45NDgtMTAuMzQ0bDI5LjgxNi02Ni42MDhjMS43NjctMy45NDYgNi4zOTktNS43MTMgMTAuMzQ0LTMuOTQ3IDMuOTQ3IDEuNzY3IDUuNzE0IDYuMzk4IDMuOTQ3IDEwLjM0NGwtMjkuODE2IDY2LjYwOGMtMS43NiAzLjkzNC02LjM4NSA1LjcxOC0xMC4zNDMgMy45NDd6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxwYXRoIGQ9XCJtNDQxLjc4OSAxOTIuNDcxaC05LjA5MWMtMi40MDIgMC00LjM1Ni0xLjk1NC00LjM1Ni00LjM1NnYtOS4wOTFjMC0xMC44MS03LjYzMS0xNC40MTktMTIuNS0xNS42MjJoLTY3LjIzNmMtMi43MzggMC00Ljk1OCAyLjIyLTQuOTU4IDQuOTU4djE1Mi43NzVjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDEwMy44NDhjMi43MzggMCA0Ljk1OC0yLjIyIDQuOTU4LTQuOTU4di0xMTcuOTYxYy0yLjkxNi0xMC40NTktMTUuNDc1LTEwLjcwMS0xNS42MjMtMTAuNzAzelwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtMzgzLjA2OSAzMDEuNDY1di0xMTMuNDM1YzAtMTMuNjAxIDExLjAyNi0yNC42MjggMjQuNjI3LTI0LjYyOGgtNTkuMDljLTIuNzM4IDAtNC45NTggMi4yMi00Ljk1OCA0Ljk1OHYxNTIuNzc1YzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGg1OS4wOWMtMTMuNjAxIDAtMjQuNjI3LTExLjAyNi0yNC42MjctMjQuNjI4elwiIGZpbGw9XCIjZDNkY2ZiXCIvPjxwYXRoIGQ9XCJtNDUyLjI5NiAxODcuOTU4LTE5LjQ0LTE5LjQ0Yy0zLjI3NS0zLjI3NS03LjcxOC01LjExNS0xMi4zNS01LjExNWgtOC42MjhzMTUuODYyLjI0MiAxNS44NjIgMTUuNjIydjkuMDkxYzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGg5LjA5MXMxNS42MjIuMTI4IDE1LjYyMiAxNC43NzF2LTcuNTM3YzAtNC42MzItMS44NC05LjA3NS01LjExNS0xMi4zNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48ZyBmaWxsPVwiIzczYzNmOVwiPjxwYXRoIGQ9XCJtNDE0LjA0NSAyMzguOTExaC0zMS40ODNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMzEuNDgzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyMTguNDA3aC0yNi4wODJjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMjYuMDgyYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM5NS41NjMgMjE4LjQwN2gtMTMuMDAxYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDEzLjAwMWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjU4LjU4NmgtMjYuMDgyYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDI2LjA4MmMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zOTUuNTYzIDI1OC41ODZoLTEzLjAwMWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgxMy4wMDFjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzg2LjM3NyAyNzkuMDg4aC0zLjgxNGMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzLjgxNGMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjc5LjA4OGgtMzUuNjQ0Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDM1LjY0NGMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PC9nPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyMzguOTExaC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjE4LjQwN2gtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI1OC41ODZoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyNzkuMDg4aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTQzNi42NDcgMjM4LjkxMWgtNS4zOTVjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoNS4zOTVjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PHBhdGggZD1cIm00MTQuMDQ1IDI5OS41OTFoLTMxLjQ4M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzMS40ODNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI5OS41OTFoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtNDM2LjY0NyAyOTkuNTkxaC01LjM5NWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWg1LjM5NWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5PcHRpbWl6YXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD42MCUgb2YgYWxsIGludGVybmV0IHRyYWZmaWMgaXMgb24gbW9iaWxlIGRldmljZXMsIHNvIHdlIG9wdGltaXplIHlvdXIgbW9iaWxlIHRvIHBlcmZvcm0gdGhlaXIgYmVzdCBpbiBzZWFyY2ggZW5naW5lcy48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBpZ2d5LWJhbmtcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzFhNmE3NjM1ZDcyM2JkNDNhZDAxZWI4ZTE0Y2E1NTVhZGU5MjAwZDkvZTY0M2IvaW1hZ2VzL3NhdmluZ3Muc3ZnXCIgYWx0PVwiZHJhd2luZyBvZiBhIG1hbiBuZXh0IHRvIGEgbGFyZ2UgcGlnZ3kgYmFua1wiIHdpZHRoPVwiMzAwcHhcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXRleHQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDA8L3NwYW4+IERvd24sIDxzcGFuPiQxNTA8L3NwYW4+IFBlciBNb250aCwgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBNaW5pbXVtIENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiQwIGRvd24gZm9yIGEgc3RhbmRhcmQgNSBwYWdlIHNtYWxsIGJ1c2luZXNzIHdlYnNpdGUuIElmIHlvdSBuZWVkIG1vcmUgdGhhbiB0aGF0IHRoZW4gd2UgaGF2ZSB0byBkbyBjdXN0b20gcHJpY2luZyBiYXNlZCBvbiB0aGUgc2NvcGUgb2Ygd29yaywgbnVtYmVyIG9mIGFkZGl0aW9uYWwgcGFnZXMsIGFuZCB0aW1lIGludm9sdmVkLiA8YnIvPjxici8+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBvd24geW91ciBkb21haW4sIGNvbnRlbnQsIGxpc3RpbmcsIGFuZCBwcm9maWxlcy4gIENhbmNlbCBhbnl0aW1lIHdpdGggbm8gZmVlcyBvciBoYXNzbGUuICBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3N0aW5nIEZlZXMgSW5jbHVkZWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvc3RpbmcgZmVlcyBhcmUgYnVpbHQgcmlnaHQgaW50byB0aGUgbW9udGhseSBwYXltZW50LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VW5saW1pdGVkIEVkaXRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2UgYW55dGhpbmcgeW91IHdhbnQgYXQgYW55dGltZSBhbmQgaXQgd2lsbCBiZSBkb25lIHRoYXQgZGF5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MjQvNyBDdXN0b21lciBTZXJ2aWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYWxsIGRpcmVjdCBhbnl0aW1lIGRheSBvciBuaWdodCwgbm8gcGhvbmUgdHJlZXMgb3IgYXV0b21hdGVkIHJlc3BvbnNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldlYiBEZXNpZ24gJiBEZXZlbG9wbWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5jbHVkZXMgb3ZlciA0MCBob3VycyBvZiBkZXNpZ24sIGRldmVsb3BtZW50LCBhbmQgdGVzdGluZy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNpdGF0aW9ucyBBbmQgTGlzdGluZ3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkl0J3MgaW1wb3J0YW50IHRvIGhhdmUgeW91ciB3ZWJzaXRlIGxpbmtlZCBmcm9tIG90aGVyIHdlYnNpdGVzLCBsaWtlIGRpcmVjdG9yaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R29vZ2xlIEFuYWx5dGljczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgaW5zdGFsbCBBbmFseXRpY3MgZm9yIGZyZWUgdG8gbW9uaXRvciB0cmFmZmljIGFuZCB3aGVyZSBpdCBjb21lcyBmcm9tLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljZXNcIiBjbGFzc05hbWU9XCJzZWN0aW9uIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+U3RhbmRhcmQgKyBCbG9nZ2luZzwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+U1RBUlRJTkcgQVQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjMwMDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gMTAwMCsgV29yZCBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IFdyaXR0ZW4gQnkgYW4gU0VPIFNwZWNpYWxpc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gMSBQb3N0IFBlciBNb250aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAkMTUwIFBlciBFeHRyYSBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+NSBQQUdFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MTUwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFVubGltaXRlZCBFZGl0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEluY2x1ZGVzIEhvc3Rpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyNC83IEN1c3RvbWVyIFNlcnZpY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMaWZldGltZSBVcGRhdGVzPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkXCJ0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+TG9nb3MgJiBHcmFwaGljIERlc2lnbjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+SU5DTFVERUQhPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4wPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDIgcmV2aXNpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gQWxsIEZpbGUgRm9ybWF0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFJlYWR5IHRvIHVzZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEZSRUUgdy8gU3Vic2NyaXB0aW9uPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbjwvbWFpbj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07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
