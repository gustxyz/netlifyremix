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
  const location = (0, import_remix2.useLocation)();
  const navLinks = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-nav container mobile-nav-container"
  }, /* @__PURE__ */ React.createElement("img", {
    id: "mobile-logo",
    src: logo_default,
    alt: "mobile_company_logo",
    height: "60"
  }), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "open the menu",
    id: "menu-button",
    className: "hamburger hamburger--spring",
    onClick: "toggleNav()",
    type: "button"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-box"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-inner"
  }))))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
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
  }, navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: navLink.name + navLink.route,
      className: "nav-li"
    }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
      className: location.pathname === navLink.route ? "active-menu" : "",
      to: navLink.route
    }, navLink.name));
  }))))));
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

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx
var meta = () => {
  return { title: "Alki Digital | Web Design" };
};
var BaseTemplate = ({ children }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
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

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/services/index.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Homepage,
  links: () => links,
  loader: () => loader
});
init_react();
var import_react = __toModule(require("@remix-run/react"));

// app/components/Services/index.tsx
init_react();
var Services = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Our Services")), /* @__PURE__ */ React.createElement("section", {
    id: "web-dev",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/056812f1d18390665bc20f315b66c795066e513f/68074/images/code-scg.svg",
    alt: "man staring at an open browser window"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Web Design & Development Done Differently"), /* @__PURE__ */ React.createElement("p", null, "What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line.  This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "Websites built by hand will ", /* @__PURE__ */ React.createElement("span", null, "out-perform most WordPress sites"), " and drag and drop page builders which could cost thousands of dollars.  When it comes to the web, the faster and more organized websites win."))), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "paper-airplane-path container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "line-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "svg-div"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 58.064 58.064",
    "xml:space": "preserve",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#43B7FF" },
    points: "17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032 ",
    "data-original": "#7383BF",
    className: "",
    "data-old_color": "#7383BF"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032 ",
    "data-original": "#556080",
    className: "",
    "data-old_color": "#556080"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.064,48.032 31.912,40.133 ",
    "data-original": "#464F66",
    className: "active-path",
    "data-old_color": "#464F66"
  })), " "))))), /* @__PURE__ */ React.createElement("section", {
    id: "seo",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/82dfa31bd7245d1c5b7be8fd5b4ed281b6c32d63/183d7/images/speed.svg",
    alt: "man standing in front of a computer"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Search Engine Optimization For 2021"), /* @__PURE__ */ React.createElement("p", null, "If someone tells you they can get you to the front page of Google in 3 months - ", /* @__PURE__ */ React.createElement("span", null, "RUN!"), " Unless your website was featured by The New York Times it could take years to rank in the top of the search results.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "We offer a number of the latest search engine optimization techniques for 2021:"), /* @__PURE__ */ React.createElement("ul", {
    className: "checkmark"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Keyword-Centered Content & Blogs"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Mobile-First-Optimized for the Best Experience"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Clean & Organized Code Structure For Web Crawlers"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Fully Responsive For Mobile, Tablet, & Desktop")))), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "paper-airplane-path container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "line-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "svg-div"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 58.064 58.064",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#43B7FF" },
    points: "17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032 ",
    "data-original": "#7383BF",
    className: "",
    "data-old_color": "#7383BF"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032 ",
    "data-original": "#556080",
    className: "",
    "data-old_color": "#556080"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.064,48.032 31.912,40.133 ",
    "data-original": "#464F66",
    className: "active-path",
    "data-old_color": "#464F66"
  })), " "))))), /* @__PURE__ */ React.createElement("section", {
    id: "graphic-design",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/a9cb42a527a8f7d16f3804d86dc12261c3f33f80/58d60/images/design-svg.svg",
    alt: "man standing next graphic display"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Logos, Graphic Design, & Branding"), /* @__PURE__ */ React.createElement("p", null, "We also offer logo and graphic design services via our own in-house graphic designer.  If you have an existing logo that needs a touch up or need a completely new one we can help build your business's brand."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Logos Starting at $350"), /* @__PURE__ */ React.createElement("p", null, "Rates may increase based on complexity, number of hours, and number of revisions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Social Media Graphics"), /* @__PURE__ */ React.createElement("p", null, "Make a post that stands out with its own custom graphics.  Give us a call for plans and rates.")))))), /* @__PURE__ */ React.createElement("section", {
    id: "updates",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Lifetime Updates For Your Website"), /* @__PURE__ */ React.createElement("p", null, "Google changes its search alogrithm standards every so often, changing what is important to rank.  And web accessibility guidelines for users with screen readers get updated as well.  So we also include ", /* @__PURE__ */ React.createElement("span", null, "lifetime updates"), "to your website to make sure it never goes out of date and is always changing with the times.")), /* @__PURE__ */ React.createElement("div", {
    className: "boxes-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m408.049 340.523v-35.642c0-4.144-3.36-7.504-7.504-7.504s-7.504 3.36-7.504 7.504v35.642c0 1.379-1.122 2.501-2.501 2.501h-99.772c-3.066-35.017 17.217-69.147 51.175-82.256 6.765-2.611 10.369-10.09 8.205-17.027l-9.733-31.228c-1.123-3.601-3.708-6.623-7.091-8.293-3.397-1.676-7.39-1.888-10.954-.579-33.926 12.456-61.487 37.236-77.608 69.775-16.176 32.652-19.126 69.751-8.307 104.462 11.751 37.7 38.708 68.567 74.39 85.43-.936 3.693.006 7.579 2.63 10.487 3.05 3.397 7.708 4.617 11.965 3.275l45.006-14.028c3.221-1.003 5.828-3.358 7.155-6.459s1.229-6.613-.269-9.636l-20.934-42.24c-2.017-4.07-6.088-6.512-10.631-6.392-4.541.127-8.471 2.8-10.258 6.976l-1.032 2.412c-19.341-9.844-33.916-26.998-40.396-47.788-.195-.626-.358-1.255-.537-1.882h96.994c9.656 0 17.511-7.855 17.511-17.51zm-74.46 83.321c4.807 2.051 10.394-.2 12.453-5.016l.28-.654 15.74 31.76-34.657 10.802c.041-1.306-.193-2.618-.701-3.866-.951-2.338-2.755-4.172-5.079-5.165-34.051-14.558-59.872-43.095-70.843-78.294-19.88-63.781 13.33-131.743 75.664-155.274l9.05 29.038c-46.099 18.415-70.562 69.665-55.744 117.206 8.339 26.753 27.961 48.425 53.837 59.463z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "55.468",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "99.969",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "144.469",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m505.591 293.99c-12.068-38.719-39.919-69.994-76.86-86.579l.035-.081c1.787-4.176 1.006-8.865-2.038-12.236-3.044-3.372-7.63-4.627-11.965-3.275l-6.714 2.093v-142.007c0-9.655-7.855-17.51-17.51-17.51h-296.664c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504h296.664c1.379 0 2.501 1.122 2.501 2.501v81.545h-378.032v-81.544c0-1.379 1.122-2.501 2.501-2.501h38.228c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-38.227c-9.655-.001-17.51 7.854-17.51 17.509v288.618c0 9.655 7.855 17.51 17.51 17.51h180.493c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-180.493c-1.379 0-2.501-1.122-2.501-2.501v-192.065h378.031v50.131l-23.284 7.258c-3.22 1.003-5.828 3.357-7.155 6.459-1.327 3.101-1.229 6.613.269 9.636l20.934 42.24c2.017 4.07 6.103 6.511 10.631 6.392 4.541-.127 8.471-2.8 10.257-6.976l.296-.692c20.653 9.588 36.169 27.209 42.976 49.047 12.585 40.378-8.438 83.929-47.862 99.147-6.763 2.611-10.367 10.091-8.204 17.027l9.733 31.227c2.145 7.414 10.869 11.678 18.046 8.873 33.925-12.456 61.486-37.236 77.607-69.775 16.176-32.653 19.126-69.752 8.307-104.463zm-89.992 159.74-9.051-29.039c46.099-18.415 70.562-69.665 55.744-117.206-8.704-27.924-29.399-50.033-56.781-60.66-4.39-1.705-9.239.043-11.583 3.988l-15.789-31.86 34.061-10.616c-.401 1.862-.231 3.799.513 5.6.97 2.35 2.882 4.244 5.244 5.196 35.308 14.227 62.027 43.139 73.305 79.323 19.88 63.782-13.33 131.744-75.663 155.274z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m55.187 166.708c-12.052 0-21.856 9.805-21.856 21.856v71.396c0 12.052 9.804 21.856 21.856 21.856h71.396c12.052 0 21.856-9.804 21.856-21.856v-70.739c0-12.414-10.099-22.513-22.513-22.513zm78.244 22.513v70.739c0 3.776-3.072 6.848-6.848 6.848h-71.396c-3.776 0-6.848-3.072-6.848-6.848v-71.396c0-3.776 3.072-6.848 6.848-6.848h70.74c4.138.001 7.504 3.367 7.504 7.505z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m176.428 186.782h55.193c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-55.193c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m176.428 221.488h55.193c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-55.193c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }))), " "), /* @__PURE__ */ React.createElement("h3", null, "Design Updates"), /* @__PURE__ */ React.createElement("p", null, "If you ever want a new design, we will rebuild your website at no extra cost.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m220.716 512c-50.951 0-99.868-21.715-134.208-59.576-2.788-3.074-2.556-7.827.518-10.616 3.074-2.787 7.826-2.557 10.615.518 31.497 34.728 76.356 54.645 123.075 54.645 26.573 0 53.009-6.431 76.447-18.596 22.669-11.765 42.639-28.903 57.749-49.562 2.494-3.409 3.511-7.584 2.864-11.757-.648-4.173-2.882-7.845-6.291-10.339s-7.589-3.517-11.758-2.864c-4.174.647-7.845 2.881-10.339 6.29-25.285 34.567-65.91 55.204-108.672 55.204-74.186 0-134.541-60.355-134.541-134.541 0-25.694 7.263-50.666 21.003-72.218 13.388-21 32.269-37.863 54.601-48.764 5.793-2.829 9.367-9.085 8.829-15.522-.533-6.384-5.012-11.922-11.124-13.802-3.82-1.175-7.986-.846-11.577.906-27.569 13.458-50.873 34.268-67.393 60.183-16.983 26.638-25.961 57.488-25.961 89.218 0 31.47 8.877 62.121 25.67 88.641 2.221 3.507 1.178 8.149-2.328 10.369-3.506 2.222-8.148 1.179-10.369-2.328-18.32-28.929-28.003-62.361-28.003-96.682 0-34.598 9.792-68.243 28.317-97.298 18.01-28.25 43.416-50.937 73.473-65.61 7.402-3.613 15.77-4.13 23.56-1.45 7.791 2.679 14.071 8.232 17.685 15.635 3.613 7.402 4.129 15.77 1.449 23.561-2.679 7.79-8.231 14.07-15.634 17.684-19.842 9.688-36.621 24.674-48.521 43.34-12.199 19.133-18.647 41.311-18.647 64.138 0 65.899 53.613 119.512 119.512 119.512 37.986 0 74.076-18.336 96.541-49.048 4.864-6.65 12.025-11.007 20.166-12.269 8.135-1.263 16.286.72 22.935 5.586 6.649 4.863 11.006 12.024 12.268 20.164 1.263 8.141-.72 16.287-5.585 22.935-16.471 22.518-38.24 41.201-62.955 54.028-25.569 13.27-54.398 20.285-83.371 20.285z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m252.916 96.026c-26.475 0-48.013-21.539-48.013-48.014.001-26.474 21.539-48.012 48.013-48.012 26.475 0 48.014 21.538 48.014 48.013 0 26.474-21.539 48.013-48.014 48.013zm0-80.997c-18.187 0-32.983 14.796-32.983 32.983 0 18.188 14.797 32.984 32.983 32.984 18.188 0 32.984-14.797 32.984-32.984.001-18.186-14.796-32.983-32.984-32.983z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.566 366.168c-3.048 0-5.914-1.867-7.042-4.89l-15.136-40.581c-4.424-12.068-15.996-20.151-28.808-20.152h-97.477c-4.151 0-7.515-3.364-7.515-7.515v-71.143c0-4.151 3.364-7.515 7.515-7.515h91.071c8.743 0 15.856-7.114 15.856-15.857s-7.113-15.856-15.856-15.856h-91.071c-4.151 0-7.515-3.364-7.515-7.515v-15.399c0-16.913-13.759-30.672-30.672-30.672-16.912 0-30.671 13.759-30.671 30.672v81.221c0 4.151-3.364 7.515-7.515 7.515s-7.515-3.364-7.515-7.515v-81.221c0-25.2 20.501-45.702 45.701-45.702s45.702 20.502 45.702 45.702v7.884h83.557c17.03 0 30.885 13.855 30.885 30.886s-13.855 30.887-30.885 30.887h-83.557v56.113h89.962c19.092.001 36.334 12.044 42.905 29.969l15.121 40.541c1.45 3.889-.526 8.217-4.415 9.667-.865.324-1.752.476-2.625.476z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m441.561 461.828c-4.426 0-8.836-.964-12.97-2.88-7.485-3.47-13.171-9.646-16.012-17.391l-27.832-74.103c-4.431-12.085-16.003-20.167-28.815-20.167h-103.014c-25.201 0-45.702-20.502-45.702-45.703v-30.559c0-4.151 3.364-7.515 7.515-7.515s7.515 3.364 7.515 7.515v30.559c0 16.913 13.76 30.673 30.673 30.673h103.015c19.091 0 36.334 12.043 42.906 29.968l27.832 74.103c3.029 8.264 12.16 12.493 20.366 9.484 3.977-1.458 7.148-4.377 8.929-8.219s1.958-8.149.5-12.125l-13.407-35.946c-1.45-3.888.526-8.217 4.415-9.667 3.889-1.451 8.216.525 9.667 4.415l13.422 35.985c2.854 7.785 2.508 16.173-.961 23.658s-9.645 13.171-17.39 16.012c-3.47 1.27-7.066 1.903-10.652 1.903z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })))), " "), /* @__PURE__ */ React.createElement("h3", null, "Web Accessibility"), /* @__PURE__ */ React.createElement("p", null, "Staying on top of the latest guidelines for web accessibility compliance.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m298.675 165.014c-32.124 24.689-38.173 70.911-13.484 103.035 11.943 15.539 29.249 25.501 48.729 28.051 3.249.425 6.492.635 9.714.635 16.095 0 31.645-5.251 44.592-15.202 15.539-11.943 25.501-29.249 28.051-48.729 2.549-19.48-2.624-38.767-14.566-54.306-24.69-32.124-70.911-38.172-103.036-13.484zm102.735 65.844c-2.03 15.509-9.957 29.284-22.321 38.786-25.57 19.651-62.359 14.837-82.01-10.733-19.651-25.569-14.837-62.358 10.733-82.01 10.603-8.149 23.133-12.09 35.572-12.09 17.559 0 34.936 7.856 46.438 22.823 9.503 12.365 13.618 27.715 11.588 43.224z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m325.551 199.983c6.208-4.771 13.913-6.84 21.71-5.818 7.791 1.02 14.709 5 19.481 11.209 5.966 7.763 17.744-1.518 11.889-9.137-14.908-19.398-42.82-23.05-62.217-8.143-7.668 5.893 1.468 17.781 9.137 11.889z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m511.795 145.551v-.392c0-36.929-30.044-66.972-66.973-66.972h-311.875c-9.671 0-9.671 14.994 0 14.994h311.875c28.661 0 51.979 23.317 51.979 51.978v.392c0 28.661-23.317 51.978-51.979 51.978h-2.051c-3.423-13.243-9.479-25.709-17.98-36.769-34.47-44.851-99.003-53.297-143.854-18.826-18.819 14.464-31.226 34.221-36.745 55.596h-177.219c-28.661 0-51.979-23.317-51.979-51.978v-.392c0-28.661 23.317-51.978 51.979-51.978h18.993c9.671 0 9.671-14.994 0-14.994h-18.993c-36.929-.001-66.973 30.042-66.973 66.971v.392c0 36.929 30.044 66.972 66.973 66.972h174.504c-2.671 25.274 3.961 51.571 20.634 73.265 16.698 21.727 40.858 35.65 68.028 39.206 4.522.592 9.037.884 13.523.884 14.748 0 29.168-3.185 42.465-9.297l13.149 17.109c-9.275 7.279-10.992 20.729-3.79 30.099 4.242 5.519 10.649 8.416 17.124 8.416 2.883 0 5.779-.576 8.504-1.749l40.294 52.574c21.908 28.506 66.804-5.316 44.571-34.243l-40.308-52.593c2.388-3.02 3.946-6.623 4.459-10.539.747-5.712-.774-11.373-4.285-15.94-7.201-9.37-20.639-11.172-30.061-4.083l-13.164-17.128c5.855-7.097 10.757-14.956 14.503-23.354 3.939-8.832-9.754-14.94-13.694-6.108-5.879 13.179-15.077 24.826-26.601 33.683-18.551 14.257-41.546 20.438-64.744 17.401-23.199-3.036-43.828-14.925-58.085-33.476-29.433-38.296-22.222-93.396 16.074-122.829s93.396-22.221 122.829 16.075c11.044 14.37 17.291 31.5 18.066 49.538.416 9.661 15.395 9.019 14.98-.643-.091-2.107-.263-4.2-.48-6.284 36.632-.351 66.327-30.245 66.327-66.956zm-15.106 262.055c-1.472 11.249-16.462 15.305-23.386 6.295l-39.896-52.055 20.788-15.977 39.89 52.048c2.133 2.776 3.058 6.217 2.604 9.689-.455 3.472.454-3.472 0 0zm-42.733-88.754c2.185 2.843 1.637 7.031-1.206 9.216l-36.159 27.791c-2.873 2.207-7.008 1.667-9.217-1.206s-1.667-7.008 1.206-9.217l36.159-27.79c2.873-2.208 7.009-1.668 9.217 1.206zm-47.991-14.238c2.127-1.635 4.178-3.36 6.166-5.152l11.166 14.529-12.73 9.784-11.159-14.52c2.231-1.457 4.421-3 6.557-4.641z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m66.473 146.447c0 4.14 3.357 7.497 7.497 7.497h138.944c9.671 0 9.671-14.994 0-14.994h-138.944c-4.14 0-7.497 3.357-7.497 7.497z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })), " "), /* @__PURE__ */ React.createElement("h3", null, "Search Engine Updates"), /* @__PURE__ */ React.createElement("p", null, "Your website will stay up to date with Google's search guidelines for ranking.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M507.527,208.179c-0.908-4.782-5.088-8.242-9.955-8.242H261.404c-5.596,0-10.132,4.536-10.132,10.132v97.266    c0,5.596,4.536,10.132,10.132,10.132h115.967c-11.752,23.149-30.065,42.7-52.671,55.958c-20.729,12.168-44.485,18.599-68.7,18.599    c-56.417,0-107.615-35.479-127.404-88.296c-5.72-15.213-8.62-31.271-8.62-47.729c0-15.134,2.471-30.009,7.34-44.206    c18.871-54.919,70.586-91.818,128.685-91.818c25.528,0,50.398,7.11,71.916,20.561c3.684,2.303,8.427,2.001,11.788-0.752    l79.65-65.209c2.341-1.917,3.703-4.78,3.714-7.804c0.011-3.026-1.332-5.897-3.66-7.83C373.632,20.933,315.599,0,256,0    C114.841,0,0,114.841,0,256c0,42.345,10.552,84.299,30.516,121.326C75.307,460.396,161.708,512,256,512    c59.004,0,116.586-20.556,162.139-57.879c44.922-36.807,76.269-88.19,88.261-144.677c3.715-17.449,5.6-35.431,5.6-53.445    C512,239.906,510.495,223.817,507.527,208.179z M256,20.264c50.746,0,100.257,16.477,140.753,46.628l-64.4,52.724    c-23.24-13.043-49.482-19.904-76.353-19.904c-61.934,0-117.53,36.511-142.555,92.184l-62.849-51.454    C91.079,68.767,167.977,20.264,256,20.264z M20.264,256c0-34.585,7.488-67.453,20.924-97.071l64.819,53.067    c-4.173,14.251-6.295,29.018-6.295,44.004c0,16.43,2.525,32.523,7.502,47.94l-64.412,52.727    C28.041,325.39,20.264,290.848,20.264,256z M256,491.736c-84.05,0-161.291-44.532-203.565-116.768l62.675-51.305    c11.504,23.986,28.887,44.597,50.889,60.122c26.427,18.647,57.549,28.504,90,28.504c25.424,0,50.411-6.197,72.719-17.94    l64.854,53.093C353.689,476.097,305.388,491.736,256,491.736z M486.581,305.23c-10.63,50.067-37.787,95.775-76.714,129.362    l-62.917-51.508c25.118-18.016,44.552-43.208,55.414-72.195c1.166-3.111,0.732-6.597-1.16-9.327    c-1.893-2.73-5.005-4.359-8.327-4.359H271.536v-77.003h217.493c1.798,11.78,2.707,23.786,2.707,35.799    C491.736,272.599,490.002,289.161,486.581,305.23z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })))), " "), /* @__PURE__ */ React.createElement("h3", null, "Google Business Profile"), /* @__PURE__ */ React.createElement("p", null, "We also help optimize and manage your Google, Bing, & Yahoo Business Profile"))))), /* @__PURE__ */ React.createElement("section", {
    id: "pricing",
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
    className: "button-solid services-button",
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
var Services_default = Services;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/services/index.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/01ba941265b8ab55efcb1e2c16cda90619453695.css"
    }
  ];
}
var loader = async ({
  params
}) => {
  console.log(params);
  return params;
};
function Homepage() {
  const params = (0, import_react.useParams)();
  console.log(params);
  return /* @__PURE__ */ React.createElement(Services_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Homepage2,
  links: () => links2
});
init_react();

// app/components/Contact/index.tsx
init_react();
var Contact = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Contact Us")), /* @__PURE__ */ React.createElement("section", {
    id: "valley-form",
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "border-group"
  }, /* @__PURE__ */ React.createElement("p", null, "Email:"), /* @__PURE__ */ React.createElement("p", null, "alkidigital.webdesign@gmail.com")), /* @__PURE__ */ React.createElement("div", {
    className: "border-group"
  }, /* @__PURE__ */ React.createElement("p", null, "Phone:"), /* @__PURE__ */ React.createElement("p", null, "(509) 481-7512"))), /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "https://submit-form.com/Nutg910E",
    id: "contact",
    name: "CONTACT FORM"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "form"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "contact-topper"
  }, /* @__PURE__ */ React.createElement("span", null, "DROP"), " US A LINE"), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Name",
    type: "text",
    tabIndex: 1,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Business",
    type: "text",
    tabIndex: 2,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "email",
    name: "email",
    placeholder: "Email Address",
    type: "email",
    tabIndex: 3,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "phone number",
    name: "phone",
    placeholder: "Phone Number",
    type: "tel",
    tabIndex: 4,
    required: true
  }), /* @__PURE__ */ React.createElement("textarea", {
    "aria-label": "write your message",
    name: "message",
    placeholder: "Type your Message Here....",
    tabIndex: 5,
    required: true
  }), /* @__PURE__ */ React.createElement("p", {
    className: "form-submit"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "submit",
    type: "submit",
    id: "contact-submit",
    className: "primary button-solid",
    "data-submit": "...Sending"
  }, "Submit"))))));
};
var Contact_default = Contact;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/contact/index.tsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/1dd11a07866c5467a9744f635db24cbe6e6b6dd2.css"
    }
  ];
}
function Homepage2() {
  return /* @__PURE__ */ React.createElement(Contact_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Homepage3,
  links: () => links3
});
init_react();

// app/components/About/index.tsx
init_react();
var About = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "About Us")), /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("span", null, "Alki Digital Web Services"), /* @__PURE__ */ React.createElement("h2", null, "Giving Small Businesses The Big Business Treatment"), /* @__PURE__ */ React.createElement("p", null, "My name is Alex, I'm the owner and sole developer of Alki Digital. After working in the tech industry for a little over 4 years I launched this business as a way for me to serve small businesses while building my own. My goal is to build a company that can foster community, and provide a safe space for industry professionals to harness their skills to build careers of their own.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "A lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website. The ones that do, get taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years. A lot of businesses are in a tough spot - they either can't afford a good website, and if they can they don't know who to trust to make something great. That's where the $0 down and $100 a month model comes in. It's more managable for a small business to handle and won't hurt their bank accounts.")))), /* @__PURE__ */ React.createElement("section", {
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
    action: "https://submit-form.com/Nutg910E",
    id: "contact",
    method: "post",
    name: "ABOUT FORM"
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
function links3() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/bf62e7a7871d940c3c6df187eae9258636299ed4.css"
    }
  ];
}
function Homepage3() {
  return /* @__PURE__ */ React.createElement(About_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Homepage4,
  links: () => links4
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
function links4() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/531aa08a1619a26df663f78609c28da905315645.css"
    }
  ];
}
function Homepage4() {
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
  "routes/services/index": {
    id: "routes/services/index",
    parentId: "root",
    path: "services",
    index: true,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInBhYmlvX3YyMDIyMDEyM19sb2NhbGVcIiwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgXCJTZXQtQ29va2llXCIsXG4gICAgYXdhaXQgY29va2llLnNlcmlhbGl6ZSh1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICApO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQWxraSBEaWdpdGFsIHwgV2ViIERlc2lnblwiIH07XG59O1xuXG5cblxuY29uc3QgQmFzZVRlbXBsYXRlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgPGhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxMaW5rcyAvPlxuICAgIFxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZVRlbXBsYXRlPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE91dGxldCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQmFzZVRlbXBsYXRlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICh7IGVycm9yIH0pID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiA8QmFzZVRlbXBsYXRlPntlcnJvcn08L0Jhc2VUZW1wbGF0ZT47XG59O1xuIiwgImltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpOyAgICAgXG4gICAgY29uc3QgbmF2TGlua3MgPSBbeyBuYW1lOiAnSG9tZScsIHJvdXRlOiAnLyd9LHsgbmFtZTogJ0Fib3V0Jywgcm91dGU6ICcvYWJvdXQnfSx7IG5hbWU6ICdTZXJ2aWNlcycsIHJvdXRlOiAnL3NlcnZpY2VzJ30seyBuYW1lOiAnQ29udGFjdCcsIHJvdXRlOiAnL2NvbnRhY3QnfV1cbnJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2IGNvbnRhaW5lciBtb2JpbGUtbmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJtb2JpbGUtbG9nb1wiIHNyYz17TG9nb30gYWx0PVwibW9iaWxlX2NvbXBhbnlfbG9nb1wiIGhlaWdodD1cIjYwXCIgLz4gXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwib3BlbiB0aGUgbWVudVwiIGlkPVwibWVudS1idXR0b25cIiBjbGFzc05hbWU9XCJoYW1idXJnZXIgaGFtYnVyZ2VyLS1zcHJpbmdcIiBvbkNsaWNrPVwidG9nZ2xlTmF2KClcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1tZW51XCIgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cImNvbXBhbnkgbG9nb1wiIHdpZHRoPVwiMTAwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dWwgIGlkPVwib24tdG9wXCIgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2TGlua3MubWFwKChuYXZMaW5rKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtuYXZMaW5rLm5hbWUgKyBuYXZMaW5rLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayBjbGFzc05hbWU9e2xvY2F0aW9uLnBhdGhuYW1lID09PSBuYXZMaW5rLnJvdXRlID8gJ2FjdGl2ZS1tZW51JyA6ICcnfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e25hdkxpbmsucm91dGV9PntuYXZMaW5rLm5hbWV9PC9MaW5rPjwvbGk+XG5cbn0pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsICJcbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBsaWdodC1tb2RlLXN2Z1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYzI3MmUxM2YxMWZlYzVlOGE4MmI2MzQyYmMxOTRiM2ViNzRiNWI3Mi83Y2YxMC9pbWFnZXMvZm9vdGVyLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAgLz5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBkYXJrLW1vZGUtc3ZnXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8zYjc1NmFlMzBlZjUxY2NkODU2NGMyOTc4ZWE4YTVhNzBmMTkzMWY4Lzk1ZGI3L2ltYWdlcy9mb290ZXItc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3VwXCI+IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW0gaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIG1vYmlsZS1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gZGVza3RvcC1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tXCI+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTA5LTQ4MS03NTEyXCI+KDUwOSk0ODEtNzUxMjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9Jy8nPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9Jy9odG1sL2Fib3V0Jz5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay1sb25nJyBocmVmPScvaHRtbC9zZXJ2aWNlcyc+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstbG9uZycgaHJlZj0nLyNwb3J0Zm9saW8nPlBvcnRmb2xpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay1sb25nJyBocmVmPScvaHRtbC9jb250YWN0Jz5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPlNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPldlYiBEZXNpZ248L3A+XG4gICAgICAgICAgICAgICAgICA8cD5XZWJzaXRlIE1haW50ZW5hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+U0VPIFNlcnZpY2VzPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q29udGVudCBDcmVhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkxvZ28gRGVzaWduPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZGluZ1wiPlxuICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgMjAyMSB8IEFsa2kgRGlnaXRhbCBXZWIgU2VydmljZXMgfCBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYnVuZGxlcy8wMWJhOTQxMjY1YjhhYjU1ZWZjYjFlMmMxNmNkYTkwNjE5NDUzNjk1LmNzc1wiLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICAgIHBhcmFtcyxcbiAgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgcmV0dXJuIHBhcmFtc1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgIFxuICAgICAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgIFxuICByZXR1cm4gPFNlcnZpY2VzIC8+XG59XG4iLCAiXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPk91ciBTZXJ2aWNlczwvaDE+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cIndlYi1kZXZcIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMDU2ODEyZjFkMTgzOTA2NjViYzIwZjMxNWI2NmM3OTUwNjZlNTEzZi82ODA3NC9pbWFnZXMvY29kZS1zY2cuc3ZnXCIgYWx0PVwibWFuIHN0YXJpbmcgYXQgYW4gb3BlbiBicm93c2VyIHdpbmRvd1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj5XZWIgRGVzaWduICYgRGV2ZWxvcG1lbnQgRG9uZSBEaWZmZXJlbnRseTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+V2hhdCBtYWtlcyB1cyB1bmlxdWUgaW4gdGhlIGRldmVsb3BtZW50IHdvcmxkIGlzIHRoYXQgd2UgZG9uJ3QgdXNlIFdvcmRQcmVzcywgZnJhbWV3b3Jrcywgb3IgcGFnZSBidWlsZGVycy4gIFxuICAgICAgICAgICAgICAgIFdlIG1ldGljdWxvdXNseSB3cml0ZSB0aGUgY29kZSBsaW5lIGJ5IGxpbmUuICBUaGlzIGdpdmVzIHVzIG11Y2ggbW9yZSBjb250cm9sIG92ZXIgdGhlIGRlc2lnbiwgXG4gICAgICAgICAgICAgICAgYW5kIHRoZSB3ZWJzaXRlIHBlcmZvcm1zIGxpZ2h0bmluZyBmYXN0IGJlY2F1c2UgdGhlcmUncyBubyBibG9hdGVkIG9yIG1lc3N5IGNvZGUgdGhhdCBzbG93cyBpdCBkb3duLlxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICBXZWJzaXRlcyBidWlsdCBieSBoYW5kIHdpbGwgPHNwYW4+b3V0LXBlcmZvcm0gbW9zdCBXb3JkUHJlc3Mgc2l0ZXM8L3NwYW4+IGFuZCBkcmFnIGFuZCBkcm9wIHBhZ2UgYnVpbGRlcnMgXG4gICAgICAgICAgICAgICAgd2hpY2ggY291bGQgY29zdCB0aG91c2FuZHMgb2YgZG9sbGFycy4gIFdoZW4gaXQgY29tZXMgdG8gdGhlIHdlYiwgdGhlIGZhc3RlciBhbmQgbW9yZSBvcmdhbml6ZWQgd2Vic2l0ZXMgd2luLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwicGFwZXItYWlycGxhbmUtcGF0aCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDU4LjA2NCA1OC4wNjRcIiAgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBjbGFzc05hbWU9XCJcIj48Zz48cG9seWdvbiBzdHlsZT17e2ZpbGw6JyM0M0I3RkYnfX0gcG9pbnRzPVwiMTcuMDY0LDMxLjAzMiA1OC4wNjQsMTAuMDMyIDI0LjA2NCwzNS4wMzIgNDQuMDY0LDQ4LjAzMiA1OC4wNjQsMTAuMDMyIDAsMjIuMDMyIFwiIGRhdGEtb3JpZ2luYWw9XCIjNzM4M0JGXCIgY2xhc3NOYW1lPVwiXCIgZGF0YS1vbGRfY29sb3I9XCIjNzM4M0JGXCIvPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDonIzNEODRENSd9fSBwb2ludHM9XCIyNC4wNjQsMzUuMDMyIDIwLjEyNyw0OC4wMzIgMTcuMDY0LDMxLjAzMiA1OC4wNjQsMTAuMDMyIFwiIGRhdGEtb3JpZ2luYWw9XCIjNTU2MDgwXCIgY2xhc3NOYW1lPVwiXCIgZGF0YS1vbGRfY29sb3I9XCIjNTU2MDgwXCIvPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDogJyMzRDg0RDUnfX0gcG9pbnRzPVwiMjQuMDY0LDM1LjAzMiAyMC4wNjQsNDguMDMyIDMxLjkxMiw0MC4xMzMgXCIgZGF0YS1vcmlnaW5hbD1cIiM0NjRGNjZcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzQ2NEY2NlwiLz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGlkPVwic2VvXCIgY2xhc3NOYW1lPVwic2VjdGlvbiB0ZW1wbGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzgyZGZhMzFiZDcyNDVkMWM1YjdiZThmZDViNGVkMjgxYjZjMzJkNjMvMTgzZDcvaW1hZ2VzL3NwZWVkLnN2Z1wiIGFsdD1cIm1hbiBzdGFuZGluZyBpbiBmcm9udCBvZiBhIGNvbXB1dGVyXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDI+U2VhcmNoIEVuZ2luZSBPcHRpbWl6YXRpb24gRm9yIDIwMjE8L2gyPlxuICAgICAgICAgICAgICAgIDxwPklmIHNvbWVvbmUgdGVsbHMgeW91IHRoZXkgY2FuIGdldCB5b3UgdG8gdGhlIGZyb250IHBhZ2Ugb2YgR29vZ2xlIGluIDMgbW9udGhzIC0gPHNwYW4+UlVOITwvc3Bhbj4gVW5sZXNzIHlvdXIgd2Vic2l0ZSBcbiAgICAgICAgICAgICAgICAgICB3YXMgZmVhdHVyZWQgYnkgVGhlIE5ldyBZb3JrIFRpbWVzIGl0IGNvdWxkIHRha2UgeWVhcnMgdG8gcmFuayBpbiB0aGUgdG9wIG9mIHRoZSBzZWFyY2ggcmVzdWx0cy5cbiAgICAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgV2Ugb2ZmZXIgYSBudW1iZXIgb2YgdGhlIGxhdGVzdCBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiB0ZWNobmlxdWVzIGZvciAyMDIxOlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPktleXdvcmQtQ2VudGVyZWQgQ29udGVudCAmIEJsb2dzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz5Nb2JpbGUtRmlyc3QtT3B0aW1pemVkIGZvciB0aGUgQmVzdCBFeHBlcmllbmNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz5DbGVhbiAmIE9yZ2FuaXplZCBDb2RlIFN0cnVjdHVyZSBGb3IgV2ViIENyYXdsZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz5GdWxseSBSZXNwb25zaXZlIEZvciBNb2JpbGUsIFRhYmxldCwgJiBEZXNrdG9wPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInBhcGVyLWFpcnBsYW5lLXBhdGggY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1OC4wNjQgNTguMDY0XCIgIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDogJyM0M0I3RkYnfX0gcG9pbnRzPVwiMTcuMDY0LDMxLjAzMiA1OC4wNjQsMTAuMDMyIDI0LjA2NCwzNS4wMzIgNDQuMDY0LDQ4LjAzMiA1OC4wNjQsMTAuMDMyIDAsMjIuMDMyIFwiIGRhdGEtb3JpZ2luYWw9XCIjNzM4M0JGXCIgY2xhc3NOYW1lPVwiXCIgZGF0YS1vbGRfY29sb3I9XCIjNzM4M0JGXCIvPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDonIzNEODRENSd9fSBwb2ludHM9XCIyNC4wNjQsMzUuMDMyIDIwLjEyNyw0OC4wMzIgMTcuMDY0LDMxLjAzMiA1OC4wNjQsMTAuMDMyIFwiIGRhdGEtb3JpZ2luYWw9XCIjNTU2MDgwXCIgY2xhc3NOYW1lPVwiXCIgZGF0YS1vbGRfY29sb3I9XCIjNTU2MDgwXCIvPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDonIzNEODRENSd9fSBwb2ludHM9XCIyNC4wNjQsMzUuMDMyIDIwLjA2NCw0OC4wMzIgMzEuOTEyLDQwLjEzMyBcIiBkYXRhLW9yaWdpbmFsPVwiIzQ2NEY2NlwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjNDY0RjY2XCIvPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImdyYXBoaWMtZGVzaWduXCIgY2xhc3NOYW1lPVwic2VjdGlvbiB0ZW1wbGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2E5Y2I0MmE1MjdhOGY3ZDE2ZjM4MDRkODZkYzEyMjYxYzNmMzNmODAvNThkNjAvaW1hZ2VzL2Rlc2lnbi1zdmcuc3ZnXCIgYWx0PVwibWFuIHN0YW5kaW5nIG5leHQgZ3JhcGhpYyBkaXNwbGF5XCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDI+TG9nb3MsIEdyYXBoaWMgRGVzaWduLCAmIEJyYW5kaW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZSBhbHNvIG9mZmVyIGxvZ28gYW5kIGdyYXBoaWMgZGVzaWduIHNlcnZpY2VzIHZpYSBvdXIgb3duIGluLWhvdXNlIGdyYXBoaWMgZGVzaWduZXIuICBJZiB5b3UgaGF2ZSBhbiBcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcgbG9nbyB0aGF0IG5lZWRzIGEgdG91Y2ggdXAgb3IgbmVlZCBhIGNvbXBsZXRlbHkgbmV3IG9uZSB3ZSBjYW4gaGVscCBidWlsZCB5b3VyIGJ1c2luZXNzJ3MgYnJhbmQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gTG9nb3MgU3RhcnRpbmcgYXQgJDM1MDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXRlcyBtYXkgaW5jcmVhc2UgYmFzZWQgb24gY29tcGxleGl0eSwgbnVtYmVyIG9mIGhvdXJzLCBhbmQgbnVtYmVyIG9mIHJldmlzaW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz5Tb2NpYWwgTWVkaWEgR3JhcGhpY3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFrZSBhIHBvc3QgdGhhdCBzdGFuZHMgb3V0IHdpdGggaXRzIG93biBjdXN0b20gZ3JhcGhpY3MuICBHaXZlIHVzIGEgY2FsbCBmb3IgcGxhbnMgYW5kIHJhdGVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInVwZGF0ZXNcIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5MaWZldGltZSBVcGRhdGVzIEZvciBZb3VyIFdlYnNpdGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgY2hhbmdlcyBpdHMgc2VhcmNoIGFsb2dyaXRobSBzdGFuZGFyZHMgZXZlcnkgc28gb2Z0ZW4sIGNoYW5naW5nIHdoYXQgaXMgaW1wb3J0YW50IHRvIHJhbmsuICBBbmQgd2ViIFxuICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5IGd1aWRlbGluZXMgZm9yIHVzZXJzIHdpdGggc2NyZWVuIHJlYWRlcnMgZ2V0IHVwZGF0ZWQgYXMgd2VsbC4gIFNvIHdlIGFsc28gaW5jbHVkZSA8c3Bhbj5saWZldGltZSB1cGRhdGVzPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgdG8geW91ciB3ZWJzaXRlIHRvIG1ha2Ugc3VyZSBpdCBuZXZlciBnb2VzIG91dCBvZiBkYXRlIGFuZCBpcyBhbHdheXMgY2hhbmdpbmcgd2l0aCB0aGUgdGltZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIiBjbGFzc05hbWU9XCJcIj48Zz48Zz48cGF0aCBkPVwibTQwOC4wNDkgMzQwLjUyM3YtMzUuNjQyYzAtNC4xNDQtMy4zNi03LjUwNC03LjUwNC03LjUwNHMtNy41MDQgMy4zNi03LjUwNCA3LjUwNHYzNS42NDJjMCAxLjM3OS0xLjEyMiAyLjUwMS0yLjUwMSAyLjUwMWgtOTkuNzcyYy0zLjA2Ni0zNS4wMTcgMTcuMjE3LTY5LjE0NyA1MS4xNzUtODIuMjU2IDYuNzY1LTIuNjExIDEwLjM2OS0xMC4wOSA4LjIwNS0xNy4wMjdsLTkuNzMzLTMxLjIyOGMtMS4xMjMtMy42MDEtMy43MDgtNi42MjMtNy4wOTEtOC4yOTMtMy4zOTctMS42NzYtNy4zOS0xLjg4OC0xMC45NTQtLjU3OS0zMy45MjYgMTIuNDU2LTYxLjQ4NyAzNy4yMzYtNzcuNjA4IDY5Ljc3NS0xNi4xNzYgMzIuNjUyLTE5LjEyNiA2OS43NTEtOC4zMDcgMTA0LjQ2MiAxMS43NTEgMzcuNyAzOC43MDggNjguNTY3IDc0LjM5IDg1LjQzLS45MzYgMy42OTMuMDA2IDcuNTc5IDIuNjMgMTAuNDg3IDMuMDUgMy4zOTcgNy43MDggNC42MTcgMTEuOTY1IDMuMjc1bDQ1LjAwNi0xNC4wMjhjMy4yMjEtMS4wMDMgNS44MjgtMy4zNTggNy4xNTUtNi40NTlzMS4yMjktNi42MTMtLjI2OS05LjYzNmwtMjAuOTM0LTQyLjI0Yy0yLjAxNy00LjA3LTYuMDg4LTYuNTEyLTEwLjYzMS02LjM5Mi00LjU0MS4xMjctOC40NzEgMi44LTEwLjI1OCA2Ljk3NmwtMS4wMzIgMi40MTJjLTE5LjM0MS05Ljg0NC0zMy45MTYtMjYuOTk4LTQwLjM5Ni00Ny43ODgtLjE5NS0uNjI2LS4zNTgtMS4yNTUtLjUzNy0xLjg4Mmg5Ni45OTRjOS42NTYgMCAxNy41MTEtNy44NTUgMTcuNTExLTE3LjUxem0tNzQuNDYgODMuMzIxYzQuODA3IDIuMDUxIDEwLjM5NC0uMiAxMi40NTMtNS4wMTZsLjI4LS42NTQgMTUuNzQgMzEuNzYtMzQuNjU3IDEwLjgwMmMuMDQxLTEuMzA2LS4xOTMtMi42MTgtLjcwMS0zLjg2Ni0uOTUxLTIuMzM4LTIuNzU1LTQuMTcyLTUuMDc5LTUuMTY1LTM0LjA1MS0xNC41NTgtNTkuODcyLTQzLjA5NS03MC44NDMtNzguMjk0LTE5Ljg4LTYzLjc4MSAxMy4zMy0xMzEuNzQzIDc1LjY2NC0xNTUuMjc0bDkuMDUgMjkuMDM4Yy00Ni4wOTkgMTguNDE1LTcwLjU2MiA2OS42NjUtNTUuNzQ0IDExNy4yMDYgOC4zMzkgMjYuNzUzIDI3Ljk2MSA0OC40MjUgNTMuODM3IDU5LjQ2M3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PGNpcmNsZSBjeD1cIjU1LjQ2OFwiIGN5PVwiOTEuMTQ2XCIgcj1cIjE0LjYzM1wiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48Y2lyY2xlIGN4PVwiOTkuOTY5XCIgY3k9XCI5MS4xNDZcIiByPVwiMTQuNjMzXCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxjaXJjbGUgY3g9XCIxNDQuNDY5XCIgY3k9XCI5MS4xNDZcIiByPVwiMTQuNjMzXCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNTA1LjU5MSAyOTMuOTljLTEyLjA2OC0zOC43MTktMzkuOTE5LTY5Ljk5NC03Ni44Ni04Ni41NzlsLjAzNS0uMDgxYzEuNzg3LTQuMTc2IDEuMDA2LTguODY1LTIuMDM4LTEyLjIzNi0zLjA0NC0zLjM3Mi03LjYzLTQuNjI3LTExLjk2NS0zLjI3NWwtNi43MTQgMi4wOTN2LTE0Mi4wMDdjMC05LjY1NS03Ljg1NS0xNy41MS0xNy41MS0xNy41MWgtMjk2LjY2NGMtNC4xNDQgMC03LjUwNCAzLjM2LTcuNTA0IDcuNTA0czMuMzYgNy41MDQgNy41MDQgNy41MDRoMjk2LjY2NGMxLjM3OSAwIDIuNTAxIDEuMTIyIDIuNTAxIDIuNTAxdjgxLjU0NWgtMzc4LjAzMnYtODEuNTQ0YzAtMS4zNzkgMS4xMjItMi41MDEgMi41MDEtMi41MDFoMzguMjI4YzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtMzguMjI3Yy05LjY1NS0uMDAxLTE3LjUxIDcuODU0LTE3LjUxIDE3LjUwOXYyODguNjE4YzAgOS42NTUgNy44NTUgMTcuNTEgMTcuNTEgMTcuNTFoMTgwLjQ5M2M0LjE0NCAwIDcuNTA0LTMuMzYgNy41MDQtNy41MDRzLTMuMzYtNy41MDQtNy41MDQtNy41MDRoLTE4MC40OTNjLTEuMzc5IDAtMi41MDEtMS4xMjItMi41MDEtMi41MDF2LTE5Mi4wNjVoMzc4LjAzMXY1MC4xMzFsLTIzLjI4NCA3LjI1OGMtMy4yMiAxLjAwMy01LjgyOCAzLjM1Ny03LjE1NSA2LjQ1OS0xLjMyNyAzLjEwMS0xLjIyOSA2LjYxMy4yNjkgOS42MzZsMjAuOTM0IDQyLjI0YzIuMDE3IDQuMDcgNi4xMDMgNi41MTEgMTAuNjMxIDYuMzkyIDQuNTQxLS4xMjcgOC40NzEtMi44IDEwLjI1Ny02Ljk3NmwuMjk2LS42OTJjMjAuNjUzIDkuNTg4IDM2LjE2OSAyNy4yMDkgNDIuOTc2IDQ5LjA0NyAxMi41ODUgNDAuMzc4LTguNDM4IDgzLjkyOS00Ny44NjIgOTkuMTQ3LTYuNzYzIDIuNjExLTEwLjM2NyAxMC4wOTEtOC4yMDQgMTcuMDI3bDkuNzMzIDMxLjIyN2MyLjE0NSA3LjQxNCAxMC44NjkgMTEuNjc4IDE4LjA0NiA4Ljg3MyAzMy45MjUtMTIuNDU2IDYxLjQ4Ni0zNy4yMzYgNzcuNjA3LTY5Ljc3NSAxNi4xNzYtMzIuNjUzIDE5LjEyNi02OS43NTIgOC4zMDctMTA0LjQ2M3ptLTg5Ljk5MiAxNTkuNzQtOS4wNTEtMjkuMDM5YzQ2LjA5OS0xOC40MTUgNzAuNTYyLTY5LjY2NSA1NS43NDQtMTE3LjIwNi04LjcwNC0yNy45MjQtMjkuMzk5LTUwLjAzMy01Ni43ODEtNjAuNjYtNC4zOS0xLjcwNS05LjIzOS4wNDMtMTEuNTgzIDMuOTg4bC0xNS43ODktMzEuODYgMzQuMDYxLTEwLjYxNmMtLjQwMSAxLjg2Mi0uMjMxIDMuNzk5LjUxMyA1LjYuOTcgMi4zNSAyLjg4MiA0LjI0NCA1LjI0NCA1LjE5NiAzNS4zMDggMTQuMjI3IDYyLjAyNyA0My4xMzkgNzMuMzA1IDc5LjMyMyAxOS44OCA2My43ODItMTMuMzMgMTMxLjc0NC03NS42NjMgMTU1LjI3NHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm01NS4xODcgMTY2LjcwOGMtMTIuMDUyIDAtMjEuODU2IDkuODA1LTIxLjg1NiAyMS44NTZ2NzEuMzk2YzAgMTIuMDUyIDkuODA0IDIxLjg1NiAyMS44NTYgMjEuODU2aDcxLjM5NmMxMi4wNTIgMCAyMS44NTYtOS44MDQgMjEuODU2LTIxLjg1NnYtNzAuNzM5YzAtMTIuNDE0LTEwLjA5OS0yMi41MTMtMjIuNTEzLTIyLjUxM3ptNzguMjQ0IDIyLjUxM3Y3MC43MzljMCAzLjc3Ni0zLjA3MiA2Ljg0OC02Ljg0OCA2Ljg0OGgtNzEuMzk2Yy0zLjc3NiAwLTYuODQ4LTMuMDcyLTYuODQ4LTYuODQ4di03MS4zOTZjMC0zLjc3NiAzLjA3Mi02Ljg0OCA2Ljg0OC02Ljg0OGg3MC43NGM0LjEzOC4wMDEgNy41MDQgMy4zNjcgNy41MDQgNy41MDV6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtMTc2LjQyOCAxODYuNzgyaDU1LjE5M2M0LjE0NCAwIDcuNTA0LTMuMzYgNy41MDQtNy41MDRzLTMuMzYtNy41MDQtNy41MDQtNy41MDRoLTU1LjE5M2MtNC4xNDQgMC03LjUwNCAzLjM2LTcuNTA0IDcuNTA0czMuMzYgNy41MDQgNy41MDQgNy41MDR6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtMTc2LjQyOCAyMjEuNDg4aDU1LjE5M2M0LjE0NCAwIDcuNTA0LTMuMzYgNy41MDQtNy41MDRzLTMuMzYtNy41MDQtNy41MDQtNy41MDRoLTU1LjE5M2MtNC4xNDQgMC03LjUwNCAzLjM2LTcuNTA0IDcuNTA0czMuMzYgNy41MDQgNy41MDQgNy41MDR6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjwvZz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RGVzaWduIFVwZGF0ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZXZlciB3YW50IGEgbmV3IGRlc2lnbiwgd2Ugd2lsbCByZWJ1aWxkIHlvdXIgd2Vic2l0ZSBhdCBubyBleHRyYSBjb3N0LjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEycHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMnB4XCI+PGc+PGc+PGc+PHBhdGggZD1cIm0yMjAuNzE2IDUxMmMtNTAuOTUxIDAtOTkuODY4LTIxLjcxNS0xMzQuMjA4LTU5LjU3Ni0yLjc4OC0zLjA3NC0yLjU1Ni03LjgyNy41MTgtMTAuNjE2IDMuMDc0LTIuNzg3IDcuODI2LTIuNTU3IDEwLjYxNS41MTggMzEuNDk3IDM0LjcyOCA3Ni4zNTYgNTQuNjQ1IDEyMy4wNzUgNTQuNjQ1IDI2LjU3MyAwIDUzLjAwOS02LjQzMSA3Ni40NDctMTguNTk2IDIyLjY2OS0xMS43NjUgNDIuNjM5LTI4LjkwMyA1Ny43NDktNDkuNTYyIDIuNDk0LTMuNDA5IDMuNTExLTcuNTg0IDIuODY0LTExLjc1Ny0uNjQ4LTQuMTczLTIuODgyLTcuODQ1LTYuMjkxLTEwLjMzOXMtNy41ODktMy41MTctMTEuNzU4LTIuODY0Yy00LjE3NC42NDctNy44NDUgMi44ODEtMTAuMzM5IDYuMjktMjUuMjg1IDM0LjU2Ny02NS45MSA1NS4yMDQtMTA4LjY3MiA1NS4yMDQtNzQuMTg2IDAtMTM0LjU0MS02MC4zNTUtMTM0LjU0MS0xMzQuNTQxIDAtMjUuNjk0IDcuMjYzLTUwLjY2NiAyMS4wMDMtNzIuMjE4IDEzLjM4OC0yMSAzMi4yNjktMzcuODYzIDU0LjYwMS00OC43NjQgNS43OTMtMi44MjkgOS4zNjctOS4wODUgOC44MjktMTUuNTIyLS41MzMtNi4zODQtNS4wMTItMTEuOTIyLTExLjEyNC0xMy44MDItMy44Mi0xLjE3NS03Ljk4Ni0uODQ2LTExLjU3Ny45MDYtMjcuNTY5IDEzLjQ1OC01MC44NzMgMzQuMjY4LTY3LjM5MyA2MC4xODMtMTYuOTgzIDI2LjYzOC0yNS45NjEgNTcuNDg4LTI1Ljk2MSA4OS4yMTggMCAzMS40NyA4Ljg3NyA2Mi4xMjEgMjUuNjcgODguNjQxIDIuMjIxIDMuNTA3IDEuMTc4IDguMTQ5LTIuMzI4IDEwLjM2OS0zLjUwNiAyLjIyMi04LjE0OCAxLjE3OS0xMC4zNjktMi4zMjgtMTguMzItMjguOTI5LTI4LjAwMy02Mi4zNjEtMjguMDAzLTk2LjY4MiAwLTM0LjU5OCA5Ljc5Mi02OC4yNDMgMjguMzE3LTk3LjI5OCAxOC4wMS0yOC4yNSA0My40MTYtNTAuOTM3IDczLjQ3My02NS42MSA3LjQwMi0zLjYxMyAxNS43Ny00LjEzIDIzLjU2LTEuNDUgNy43OTEgMi42NzkgMTQuMDcxIDguMjMyIDE3LjY4NSAxNS42MzUgMy42MTMgNy40MDIgNC4xMjkgMTUuNzcgMS40NDkgMjMuNTYxLTIuNjc5IDcuNzktOC4yMzEgMTQuMDctMTUuNjM0IDE3LjY4NC0xOS44NDIgOS42ODgtMzYuNjIxIDI0LjY3NC00OC41MjEgNDMuMzQtMTIuMTk5IDE5LjEzMy0xOC42NDcgNDEuMzExLTE4LjY0NyA2NC4xMzggMCA2NS44OTkgNTMuNjEzIDExOS41MTIgMTE5LjUxMiAxMTkuNTEyIDM3Ljk4NiAwIDc0LjA3Ni0xOC4zMzYgOTYuNTQxLTQ5LjA0OCA0Ljg2NC02LjY1IDEyLjAyNS0xMS4wMDcgMjAuMTY2LTEyLjI2OSA4LjEzNS0xLjI2MyAxNi4yODYuNzIgMjIuOTM1IDUuNTg2IDYuNjQ5IDQuODYzIDExLjAwNiAxMi4wMjQgMTIuMjY4IDIwLjE2NCAxLjI2MyA4LjE0MS0uNzIgMTYuMjg3LTUuNTg1IDIyLjkzNS0xNi40NzEgMjIuNTE4LTM4LjI0IDQxLjIwMS02Mi45NTUgNTQuMDI4LTI1LjU2OSAxMy4yNy01NC4zOTggMjAuMjg1LTgzLjM3MSAyMC4yODV6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtMjUyLjkxNiA5Ni4wMjZjLTI2LjQ3NSAwLTQ4LjAxMy0yMS41MzktNDguMDEzLTQ4LjAxNC4wMDEtMjYuNDc0IDIxLjUzOS00OC4wMTIgNDguMDEzLTQ4LjAxMiAyNi40NzUgMCA0OC4wMTQgMjEuNTM4IDQ4LjAxNCA0OC4wMTMgMCAyNi40NzQtMjEuNTM5IDQ4LjAxMy00OC4wMTQgNDguMDEzem0wLTgwLjk5N2MtMTguMTg3IDAtMzIuOTgzIDE0Ljc5Ni0zMi45ODMgMzIuOTgzIDAgMTguMTg4IDE0Ljc5NyAzMi45ODQgMzIuOTgzIDMyLjk4NCAxOC4xODggMCAzMi45ODQtMTQuNzk3IDMyLjk4NC0zMi45ODQuMDAxLTE4LjE4Ni0xNC43OTYtMzIuOTgzLTMyLjk4NC0zMi45ODN6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNDM5LjU2NiAzNjYuMTY4Yy0zLjA0OCAwLTUuOTE0LTEuODY3LTcuMDQyLTQuODlsLTE1LjEzNi00MC41ODFjLTQuNDI0LTEyLjA2OC0xNS45OTYtMjAuMTUxLTI4LjgwOC0yMC4xNTJoLTk3LjQ3N2MtNC4xNTEgMC03LjUxNS0zLjM2NC03LjUxNS03LjUxNXYtNzEuMTQzYzAtNC4xNTEgMy4zNjQtNy41MTUgNy41MTUtNy41MTVoOTEuMDcxYzguNzQzIDAgMTUuODU2LTcuMTE0IDE1Ljg1Ni0xNS44NTdzLTcuMTEzLTE1Ljg1Ni0xNS44NTYtMTUuODU2aC05MS4wNzFjLTQuMTUxIDAtNy41MTUtMy4zNjQtNy41MTUtNy41MTV2LTE1LjM5OWMwLTE2LjkxMy0xMy43NTktMzAuNjcyLTMwLjY3Mi0zMC42NzItMTYuOTEyIDAtMzAuNjcxIDEzLjc1OS0zMC42NzEgMzAuNjcydjgxLjIyMWMwIDQuMTUxLTMuMzY0IDcuNTE1LTcuNTE1IDcuNTE1cy03LjUxNS0zLjM2NC03LjUxNS03LjUxNXYtODEuMjIxYzAtMjUuMiAyMC41MDEtNDUuNzAyIDQ1LjcwMS00NS43MDJzNDUuNzAyIDIwLjUwMiA0NS43MDIgNDUuNzAydjcuODg0aDgzLjU1N2MxNy4wMyAwIDMwLjg4NSAxMy44NTUgMzAuODg1IDMwLjg4NnMtMTMuODU1IDMwLjg4Ny0zMC44ODUgMzAuODg3aC04My41NTd2NTYuMTEzaDg5Ljk2MmMxOS4wOTIuMDAxIDM2LjMzNCAxMi4wNDQgNDIuOTA1IDI5Ljk2OWwxNS4xMjEgNDAuNTQxYzEuNDUgMy44ODktLjUyNiA4LjIxNy00LjQxNSA5LjY2Ny0uODY1LjMyNC0xLjc1Mi40NzYtMi42MjUuNDc2elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTQ0MS41NjEgNDYxLjgyOGMtNC40MjYgMC04LjgzNi0uOTY0LTEyLjk3LTIuODgtNy40ODUtMy40Ny0xMy4xNzEtOS42NDYtMTYuMDEyLTE3LjM5MWwtMjcuODMyLTc0LjEwM2MtNC40MzEtMTIuMDg1LTE2LjAwMy0yMC4xNjctMjguODE1LTIwLjE2N2gtMTAzLjAxNGMtMjUuMjAxIDAtNDUuNzAyLTIwLjUwMi00NS43MDItNDUuNzAzdi0zMC41NTljMC00LjE1MSAzLjM2NC03LjUxNSA3LjUxNS03LjUxNXM3LjUxNSAzLjM2NCA3LjUxNSA3LjUxNXYzMC41NTljMCAxNi45MTMgMTMuNzYgMzAuNjczIDMwLjY3MyAzMC42NzNoMTAzLjAxNWMxOS4wOTEgMCAzNi4zMzQgMTIuMDQzIDQyLjkwNiAyOS45NjhsMjcuODMyIDc0LjEwM2MzLjAyOSA4LjI2NCAxMi4xNiAxMi40OTMgMjAuMzY2IDkuNDg0IDMuOTc3LTEuNDU4IDcuMTQ4LTQuMzc3IDguOTI5LTguMjE5czEuOTU4LTguMTQ5LjUtMTIuMTI1bC0xMy40MDctMzUuOTQ2Yy0xLjQ1LTMuODg4LjUyNi04LjIxNyA0LjQxNS05LjY2NyAzLjg4OS0xLjQ1MSA4LjIxNi41MjUgOS42NjcgNC40MTVsMTMuNDIyIDM1Ljk4NWMyLjg1NCA3Ljc4NSAyLjUwOCAxNi4xNzMtLjk2MSAyMy42NThzLTkuNjQ1IDEzLjE3MS0xNy4zOSAxNi4wMTJjLTMuNDcgMS4yNy03LjA2NiAxLjkwMy0xMC42NTIgMS45MDN6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjwvZz48L2c+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPldlYiBBY2Nlc3NpYmlsaXR5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+U3RheWluZyBvbiB0b3Agb2YgdGhlIGxhdGVzdCBndWlkZWxpbmVzIGZvciB3ZWIgYWNjZXNzaWJpbGl0eSBjb21wbGlhbmNlLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkxheWVyXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJweFwiPjxnPjxwYXRoIGQ9XCJtMjk4LjY3NSAxNjUuMDE0Yy0zMi4xMjQgMjQuNjg5LTM4LjE3MyA3MC45MTEtMTMuNDg0IDEwMy4wMzUgMTEuOTQzIDE1LjUzOSAyOS4yNDkgMjUuNTAxIDQ4LjcyOSAyOC4wNTEgMy4yNDkuNDI1IDYuNDkyLjYzNSA5LjcxNC42MzUgMTYuMDk1IDAgMzEuNjQ1LTUuMjUxIDQ0LjU5Mi0xNS4yMDIgMTUuNTM5LTExLjk0MyAyNS41MDEtMjkuMjQ5IDI4LjA1MS00OC43MjkgMi41NDktMTkuNDgtMi42MjQtMzguNzY3LTE0LjU2Ni01NC4zMDYtMjQuNjktMzIuMTI0LTcwLjkxMS0zOC4xNzItMTAzLjAzNi0xMy40ODR6bTEwMi43MzUgNjUuODQ0Yy0yLjAzIDE1LjUwOS05Ljk1NyAyOS4yODQtMjIuMzIxIDM4Ljc4Ni0yNS41NyAxOS42NTEtNjIuMzU5IDE0LjgzNy04Mi4wMS0xMC43MzMtMTkuNjUxLTI1LjU2OS0xNC44MzctNjIuMzU4IDEwLjczMy04Mi4wMSAxMC42MDMtOC4xNDkgMjMuMTMzLTEyLjA5IDM1LjU3Mi0xMi4wOSAxNy41NTkgMCAzNC45MzYgNy44NTYgNDYuNDM4IDIyLjgyMyA5LjUwMyAxMi4zNjUgMTMuNjE4IDI3LjcxNSAxMS41ODggNDMuMjI0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTMyNS41NTEgMTk5Ljk4M2M2LjIwOC00Ljc3MSAxMy45MTMtNi44NCAyMS43MS01LjgxOCA3Ljc5MSAxLjAyIDE0LjcwOSA1IDE5LjQ4MSAxMS4yMDkgNS45NjYgNy43NjMgMTcuNzQ0LTEuNTE4IDExLjg4OS05LjEzNy0xNC45MDgtMTkuMzk4LTQyLjgyLTIzLjA1LTYyLjIxNy04LjE0My03LjY2OCA1Ljg5MyAxLjQ2OCAxNy43ODEgOS4xMzcgMTEuODg5elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTUxMS43OTUgMTQ1LjU1MXYtLjM5MmMwLTM2LjkyOS0zMC4wNDQtNjYuOTcyLTY2Ljk3My02Ni45NzJoLTMxMS44NzVjLTkuNjcxIDAtOS42NzEgMTQuOTk0IDAgMTQuOTk0aDMxMS44NzVjMjguNjYxIDAgNTEuOTc5IDIzLjMxNyA1MS45NzkgNTEuOTc4di4zOTJjMCAyOC42NjEtMjMuMzE3IDUxLjk3OC01MS45NzkgNTEuOTc4aC0yLjA1MWMtMy40MjMtMTMuMjQzLTkuNDc5LTI1LjcwOS0xNy45OC0zNi43NjktMzQuNDctNDQuODUxLTk5LjAwMy01My4yOTctMTQzLjg1NC0xOC44MjYtMTguODE5IDE0LjQ2NC0zMS4yMjYgMzQuMjIxLTM2Ljc0NSA1NS41OTZoLTE3Ny4yMTljLTI4LjY2MSAwLTUxLjk3OS0yMy4zMTctNTEuOTc5LTUxLjk3OHYtLjM5MmMwLTI4LjY2MSAyMy4zMTctNTEuOTc4IDUxLjk3OS01MS45NzhoMTguOTkzYzkuNjcxIDAgOS42NzEtMTQuOTk0IDAtMTQuOTk0aC0xOC45OTNjLTM2LjkyOS0uMDAxLTY2Ljk3MyAzMC4wNDItNjYuOTczIDY2Ljk3MXYuMzkyYzAgMzYuOTI5IDMwLjA0NCA2Ni45NzIgNjYuOTczIDY2Ljk3MmgxNzQuNTA0Yy0yLjY3MSAyNS4yNzQgMy45NjEgNTEuNTcxIDIwLjYzNCA3My4yNjUgMTYuNjk4IDIxLjcyNyA0MC44NTggMzUuNjUgNjguMDI4IDM5LjIwNiA0LjUyMi41OTIgOS4wMzcuODg0IDEzLjUyMy44ODQgMTQuNzQ4IDAgMjkuMTY4LTMuMTg1IDQyLjQ2NS05LjI5N2wxMy4xNDkgMTcuMTA5Yy05LjI3NSA3LjI3OS0xMC45OTIgMjAuNzI5LTMuNzkgMzAuMDk5IDQuMjQyIDUuNTE5IDEwLjY0OSA4LjQxNiAxNy4xMjQgOC40MTYgMi44ODMgMCA1Ljc3OS0uNTc2IDguNTA0LTEuNzQ5bDQwLjI5NCA1Mi41NzRjMjEuOTA4IDI4LjUwNiA2Ni44MDQtNS4zMTYgNDQuNTcxLTM0LjI0M2wtNDAuMzA4LTUyLjU5M2MyLjM4OC0zLjAyIDMuOTQ2LTYuNjIzIDQuNDU5LTEwLjUzOS43NDctNS43MTItLjc3NC0xMS4zNzMtNC4yODUtMTUuOTQtNy4yMDEtOS4zNy0yMC42MzktMTEuMTcyLTMwLjA2MS00LjA4M2wtMTMuMTY0LTE3LjEyOGM1Ljg1NS03LjA5NyAxMC43NTctMTQuOTU2IDE0LjUwMy0yMy4zNTQgMy45MzktOC44MzItOS43NTQtMTQuOTQtMTMuNjk0LTYuMTA4LTUuODc5IDEzLjE3OS0xNS4wNzcgMjQuODI2LTI2LjYwMSAzMy42ODMtMTguNTUxIDE0LjI1Ny00MS41NDYgMjAuNDM4LTY0Ljc0NCAxNy40MDEtMjMuMTk5LTMuMDM2LTQzLjgyOC0xNC45MjUtNTguMDg1LTMzLjQ3Ni0yOS40MzMtMzguMjk2LTIyLjIyMi05My4zOTYgMTYuMDc0LTEyMi44MjlzOTMuMzk2LTIyLjIyMSAxMjIuODI5IDE2LjA3NWMxMS4wNDQgMTQuMzcgMTcuMjkxIDMxLjUgMTguMDY2IDQ5LjUzOC40MTYgOS42NjEgMTUuMzk1IDkuMDE5IDE0Ljk4LS42NDMtLjA5MS0yLjEwNy0uMjYzLTQuMi0uNDgtNi4yODQgMzYuNjMyLS4zNTEgNjYuMzI3LTMwLjI0NSA2Ni4zMjctNjYuOTU2em0tMTUuMTA2IDI2Mi4wNTVjLTEuNDcyIDExLjI0OS0xNi40NjIgMTUuMzA1LTIzLjM4NiA2LjI5NWwtMzkuODk2LTUyLjA1NSAyMC43ODgtMTUuOTc3IDM5Ljg5IDUyLjA0OGMyLjEzMyAyLjc3NiAzLjA1OCA2LjIxNyAyLjYwNCA5LjY4OS0uNDU1IDMuNDcyLjQ1NC0zLjQ3MiAwIDB6bS00Mi43MzMtODguNzU0YzIuMTg1IDIuODQzIDEuNjM3IDcuMDMxLTEuMjA2IDkuMjE2bC0zNi4xNTkgMjcuNzkxYy0yLjg3MyAyLjIwNy03LjAwOCAxLjY2Ny05LjIxNy0xLjIwNnMtMS42NjctNy4wMDggMS4yMDYtOS4yMTdsMzYuMTU5LTI3Ljc5YzIuODczLTIuMjA4IDcuMDA5LTEuNjY4IDkuMjE3IDEuMjA2em0tNDcuOTkxLTE0LjIzOGMyLjEyNy0xLjYzNSA0LjE3OC0zLjM2IDYuMTY2LTUuMTUybDExLjE2NiAxNC41MjktMTIuNzMgOS43ODQtMTEuMTU5LTE0LjUyYzIuMjMxLTEuNDU3IDQuNDIxLTMgNi41NTctNC42NDF6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNjYuNDczIDE0Ni40NDdjMCA0LjE0IDMuMzU3IDcuNDk3IDcuNDk3IDcuNDk3aDEzOC45NDRjOS42NzEgMCA5LjY3MS0xNC45OTQgMC0xNC45OTRoLTEzOC45NDRjLTQuMTQgMC03LjQ5NyAzLjM1Ny03LjQ5NyA3LjQ5N3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaCBFbmdpbmUgVXBkYXRlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgd2Vic2l0ZSB3aWxsIHN0YXkgdXAgdG8gZGF0ZSB3aXRoIEdvb2dsZSdzIHNlYXJjaCBndWlkZWxpbmVzIGZvciByYW5raW5nLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MDcuNTI3LDIwOC4xNzljLTAuOTA4LTQuNzgyLTUuMDg4LTguMjQyLTkuOTU1LTguMjQySDI2MS40MDRjLTUuNTk2LDAtMTAuMTMyLDQuNTM2LTEwLjEzMiwxMC4xMzJ2OTcuMjY2ICAgIGMwLDUuNTk2LDQuNTM2LDEwLjEzMiwxMC4xMzIsMTAuMTMyaDExNS45NjdjLTExLjc1MiwyMy4xNDktMzAuMDY1LDQyLjctNTIuNjcxLDU1Ljk1OGMtMjAuNzI5LDEyLjE2OC00NC40ODUsMTguNTk5LTY4LjcsMTguNTk5ICAgIGMtNTYuNDE3LDAtMTA3LjYxNS0zNS40NzktMTI3LjQwNC04OC4yOTZjLTUuNzItMTUuMjEzLTguNjItMzEuMjcxLTguNjItNDcuNzI5YzAtMTUuMTM0LDIuNDcxLTMwLjAwOSw3LjM0LTQ0LjIwNiAgICBjMTguODcxLTU0LjkxOSw3MC41ODYtOTEuODE4LDEyOC42ODUtOTEuODE4YzI1LjUyOCwwLDUwLjM5OCw3LjExLDcxLjkxNiwyMC41NjFjMy42ODQsMi4zMDMsOC40MjcsMi4wMDEsMTEuNzg4LTAuNzUyICAgIGw3OS42NS02NS4yMDljMi4zNDEtMS45MTcsMy43MDMtNC43OCwzLjcxNC03LjgwNGMwLjAxMS0zLjAyNi0xLjMzMi01Ljg5Ny0zLjY2LTcuODNDMzczLjYzMiwyMC45MzMsMzE1LjU5OSwwLDI1NiwwICAgIEMxMTQuODQxLDAsMCwxMTQuODQxLDAsMjU2YzAsNDIuMzQ1LDEwLjU1Miw4NC4yOTksMzAuNTE2LDEyMS4zMjZDNzUuMzA3LDQ2MC4zOTYsMTYxLjcwOCw1MTIsMjU2LDUxMiAgICBjNTkuMDA0LDAsMTE2LjU4Ni0yMC41NTYsMTYyLjEzOS01Ny44NzljNDQuOTIyLTM2LjgwNyw3Ni4yNjktODguMTksODguMjYxLTE0NC42NzdjMy43MTUtMTcuNDQ5LDUuNi0zNS40MzEsNS42LTUzLjQ0NSAgICBDNTEyLDIzOS45MDYsNTEwLjQ5NSwyMjMuODE3LDUwNy41MjcsMjA4LjE3OXogTTI1NiwyMC4yNjRjNTAuNzQ2LDAsMTAwLjI1NywxNi40NzcsMTQwLjc1Myw0Ni42MjhsLTY0LjQsNTIuNzI0ICAgIGMtMjMuMjQtMTMuMDQzLTQ5LjQ4Mi0xOS45MDQtNzYuMzUzLTE5LjkwNGMtNjEuOTM0LDAtMTE3LjUzLDM2LjUxMS0xNDIuNTU1LDkyLjE4NGwtNjIuODQ5LTUxLjQ1NCAgICBDOTEuMDc5LDY4Ljc2NywxNjcuOTc3LDIwLjI2NCwyNTYsMjAuMjY0eiBNMjAuMjY0LDI1NmMwLTM0LjU4NSw3LjQ4OC02Ny40NTMsMjAuOTI0LTk3LjA3MWw2NC44MTksNTMuMDY3ICAgIGMtNC4xNzMsMTQuMjUxLTYuMjk1LDI5LjAxOC02LjI5NSw0NC4wMDRjMCwxNi40MywyLjUyNSwzMi41MjMsNy41MDIsNDcuOTRsLTY0LjQxMiw1Mi43MjcgICAgQzI4LjA0MSwzMjUuMzksMjAuMjY0LDI5MC44NDgsMjAuMjY0LDI1NnogTTI1Niw0OTEuNzM2Yy04NC4wNSwwLTE2MS4yOTEtNDQuNTMyLTIwMy41NjUtMTE2Ljc2OGw2Mi42NzUtNTEuMzA1ICAgIGMxMS41MDQsMjMuOTg2LDI4Ljg4Nyw0NC41OTcsNTAuODg5LDYwLjEyMmMyNi40MjcsMTguNjQ3LDU3LjU0OSwyOC41MDQsOTAsMjguNTA0YzI1LjQyNCwwLDUwLjQxMS02LjE5Nyw3Mi43MTktMTcuOTQgICAgbDY0Ljg1NCw1My4wOTNDMzUzLjY4OSw0NzYuMDk3LDMwNS4zODgsNDkxLjczNiwyNTYsNDkxLjczNnogTTQ4Ni41ODEsMzA1LjIzYy0xMC42Myw1MC4wNjctMzcuNzg3LDk1Ljc3NS03Ni43MTQsMTI5LjM2MiAgICBsLTYyLjkxNy01MS41MDhjMjUuMTE4LTE4LjAxNiw0NC41NTItNDMuMjA4LDU1LjQxNC03Mi4xOTVjMS4xNjYtMy4xMTEsMC43MzItNi41OTctMS4xNi05LjMyNyAgICBjLTEuODkzLTIuNzMtNS4wMDUtNC4zNTktOC4zMjctNC4zNTlIMjcxLjUzNnYtNzcuMDAzaDIxNy40OTNjMS43OTgsMTEuNzgsMi43MDcsMjMuNzg2LDIuNzA3LDM1Ljc5OSAgICBDNDkxLjczNiwyNzIuNTk5LDQ5MC4wMDIsMjg5LjE2MSw0ODYuNTgxLDMwNS4yM3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvZz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+R29vZ2xlIEJ1c2luZXNzIFByb2ZpbGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSBhbHNvIGhlbHAgb3B0aW1pemUgYW5kIG1hbmFnZSB5b3VyIEdvb2dsZSwgQmluZywgJiBZYWhvbyBCdXNpbmVzcyBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJzZWN0aW9uIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+U3RhbmRhcmQgKyBCbG9nZ2luZzwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+U1RBUlRJTkcgQVQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjMwMDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAxMDAwKyBXb3JkIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBXcml0dGVuIEJ5IGFuIFNFTyBTcGVjaWFsaXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMSBQb3N0IFBlciBNb250aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+ICQxNTAgUGVyIEV4dHJhIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+NSBQQUdFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MTUwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFVubGltaXRlZCBFZGl0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEluY2x1ZGVzIEhvc3Rpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyNC83IEN1c3RvbWVyIFNlcnZpY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMaWZldGltZSBVcGRhdGVzPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+TG9nb3MgJiBHcmFwaGljIERlc2lnbjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+SU5DTFVERUQhPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4wPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDIgcmV2aXNpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gQWxsIEZpbGUgRm9ybWF0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFJlYWR5IHRvIHVzZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEZSRUUgdy8gU3Vic2NyaXB0aW9uPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbjwvbWFpbj5cbilcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzOyIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0J1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9idW5kbGVzLzFkZDExYTA3ODY2YzU0NjdhOTc0NGY2MzVkYjI0Y2JlNmU2YjZkZDIuY3NzXCIsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8Q29udGFjdCAvPlxufVxuIiwgIlxuXG5cblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIFxuXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG5cbiAgIFxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIFxuICAgICAgICA8c2VjdGlvbiBpZD1cInZhbGxleS1mb3JtXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZ3JvdXBcIj5cbiAgICAgICAgICAgIDxwPkVtYWlsOjwvcD5cbiAgICAgICAgICAgIDxwPmFsa2lkaWdpdGFsLndlYmRlc2lnbkBnbWFpbC5jb208L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncm91cFwiPlxuICAgICAgICAgICAgPHA+UGhvbmU6PC9wPlxuICAgICAgICAgICAgPHA+KDUwOSkgNDgxLTc1MTI8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9zdWJtaXQtZm9ybS5jb20vTnV0ZzkxMEVcIiAgaWQ9J2NvbnRhY3QnIG5hbWU9J0NPTlRBQ1QgRk9STSc+PGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nZm9ybS1uYW1lJyB2YWx1ZT0nZm9ybScvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC10b3BwZXJcIj48c3Bhbj5EUk9QPC9zcGFuPiBVUyBBIExJTkU8L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiB0YWJJbmRleD17MX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJCdXNpbmVzc1wiIHR5cGU9XCJ0ZXh0XCIgdGFiSW5kZXg9ezJ9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdHlwZT1cImVtYWlsXCIgdGFiSW5kZXg9ezN9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cInBob25lIG51bWJlclwiIG5hbWU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiIHRhYkluZGV4PXs0fXJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgYXJpYS1sYWJlbD1cIndyaXRlIHlvdXIgbWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgTWVzc2FnZSBIZXJlLi4uLlwiIHRhYkluZGV4PXs1fSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbnRhY3Qtc3VibWl0XCIgY2xhc3NOYW1lPVwicHJpbWFyeSBidXR0b24tc29saWRcIiBkYXRhLXN1Ym1pdD1cIi4uLlNlbmRpbmdcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L21haW4+XG5cbiAgXG4pXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IEFib3V0U3R5bGVzIGZyb20gJy4uLy4uL2Fzc2V0cy9zdHlsZXMvYWJvdXQuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvYmY2MmU3YTc4NzFkOTQwYzNjNmRmMTg3ZWFlOTI1ODYzNjI5OWVkNC5jc3NcIixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgcmV0dXJuIDxBYm91dCAvPlxufVxuIiwgIlxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG4gICAgXG4gICAgXG5cbiAgXG5cbiAgICA8c2VjdGlvbiBpZD1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5BYm91dCBVczwvaDE+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BbGtpIERpZ2l0YWwgV2ViIFNlcnZpY2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMj5HaXZpbmcgU21hbGwgQnVzaW5lc3NlcyBUaGUgQmlnIEJ1c2luZXNzIFRyZWF0bWVudDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+TXkgbmFtZSBpcyBBbGV4LCBJJ20gdGhlIG93bmVyIGFuZCBzb2xlIGRldmVsb3BlciBvZiBBbGtpIERpZ2l0YWwuIEFmdGVyIHdvcmtpbmcgaW4gdGhlIHRlY2ggaW5kdXN0cnkgZm9yIGEgbGl0dGxlIG92ZXIgNCB5ZWFycyBJIGxhdW5jaGVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgYnVzaW5lc3MgYXMgYSB3YXkgZm9yIG1lIHRvIHNlcnZlIHNtYWxsIGJ1c2luZXNzZXMgd2hpbGUgYnVpbGRpbmcgbXkgb3duLiBNeSBnb2FsIGlzIHRvIGJ1aWxkIGEgY29tcGFueSB0aGF0IGNhbiBmb3N0ZXIgY29tbXVuaXR5LCBhbmQgXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGUgYSBzYWZlIHNwYWNlIGZvciBpbmR1c3RyeSBwcm9mZXNzaW9uYWxzIHRvIGhhcm5lc3MgdGhlaXIgc2tpbGxzIHRvIGJ1aWxkIGNhcmVlcnMgb2YgdGhlaXIgb3duLiBcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgQSBsb3Qgb2Ygc21hbGwgYnVzaW5lc3NlcyBkb24ndCBoYXZlIHRoZSBmdW5kcyB0byBzcGVuZCB0aG91c2FuZHMgb2YgZG9sbGFycyB1cGZyb250IG9uIGEgbmV3IHdlYnNpdGUuXG4gICAgICAgICAgICAgICAgVGhlIG9uZXMgdGhhdCBkbywgZ2V0IHRha2VuIGFkdmFudGFnZSBvZiBhbmQgaGF2ZSBhIHRlcnJpYmxlIHdlYnNpdGUgdGhhdCBsb29rcyBsaWtlIGl0IHdhcyBidWlsdCBieSBzb21lb25lIGluIGEgZHVuZ2VvbiBcbiAgICAgICAgICAgICAgICBhbmQgaGF2ZW4ndCBzZWVuIGRlc2lnbiB0cmVuZHMgZm9yIHRoZSBsYXN0IDEwIHllYXJzLiBBIGxvdCBvZiBidXNpbmVzc2VzIGFyZSBpbiBhIHRvdWdoIHNwb3QgLSB0aGV5IGVpdGhlciBjYW4ndCBhZmZvcmQgYSBnb29kIHdlYnNpdGUsIGFuZCBcbiAgICAgICAgICAgICAgICBpZiB0aGV5IGNhbiB0aGV5IGRvbid0IGtub3cgd2hvIHRvIHRydXN0IHRvIG1ha2Ugc29tZXRoaW5nIGdyZWF0LiBUaGF0J3Mgd2hlcmUgdGhlICQwIGRvd24gYW5kICQxMDAgYSBtb250aCBtb2RlbCBjb21lcyBpbi4gIFxuICAgICAgICAgICAgICAgIEl0J3MgbW9yZSBtYW5hZ2FibGUgZm9yIGEgc21hbGwgYnVzaW5lc3MgdG8gaGFuZGxlIGFuZCB3b24ndCBodXJ0IHRoZWlyIGJhbmsgYWNjb3VudHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJjaXJjbGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMj48c3Bhbj5RdWFsaXR5IDwvc3Bhbj4gT3ZlciBRdWFudGl0eTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+V2UgZm9jdXMgb24gdGhlIG5lZWRzIG9uIGVhY2ggaW5kaXZpZHVhbCBidXNpbmVzcyBhbmQgdGFpbG9yIGNvbnRlbnQgYXJvdW5kIHdoYXQgbWFrZXMgaXQgdW5pcXVlLiBPdXIgY29sbGFib3JhdGl2ZSBwcm9jZXNzIGlzIHZlcnkgaGFuZHMgb24gXG4gICAgICAgICAgICAgICAgICAgIGFzIHdlIHdvcmsgY2xvc2VseSB3aXRoIHlvdSB0byBjcmVhdGUgYSB3ZWJzaXRlIHlvdSdyZSAxMDAlIGhhcHB5IHdpdGggYW5kIG5vdCBzb21ldGhpbmcgeW91IGp1c3Qgc2V0dGxlIGZvci4gXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48c3Bhbj4xPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+Tm8gUHJlLVdyaXR0ZW4gQ29udGVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIHdyaXRlIHVuaXF1ZSBhbmQgZW5nYWdpbmcgY29udGVudCBhcm91bmQgeW91ciBjb21wYW55LiAgRXZlcnlvbmUgaXMgdW5pcXVlITwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48c3Bhbj4yPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+VW5iZWF0YWJsZSBDdXN0b21lciBTZXJ2aWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gYXV0b21hdGVkIHN5c3RlbXMgLSBXaGVuIHlvdSBuZWVkIGhlbHAgdGhlIGxlYWQgZGV2ZWxvcGVyIGFuc3dlcnMgeW91ciBjYWxsLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48c3Bhbj4zPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+Tm8gTGltaXRzIE9uIERlc2lnbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIGNhbiBlZGl0IHRoZSBkZXNpZ24gdG8gY2F0ZXIgdG8geW91ciB0YXN0ZXMuICBFdmVyeXRoaW5nIGlzIGN1c3RvbWl6YWJsZSE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIGFib3V0LWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBPVVIgU0VSVklDRVNcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtY29udGFjdFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY29udGFjdC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGhvbmU6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPig1MDkpIDQ4MS03NTEyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY29udGFjdC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW1haWw6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmFsa2lkaWdpdGFsLndlYmRlc2lnbkBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vc3VibWl0LWZvcm0uY29tL051dGc5MTBFXCIgaWQ9J2NvbnRhY3QnIG1ldGhvZD0ncG9zdCcgbmFtZT0nQUJPVVQgRk9STSc+PGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nZm9ybS1uYW1lJyB2YWx1ZT0nQ29udGFjdCBGb3JtJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC10b3BwZXJcIj48c3Bhbj5EUk9QPC9zcGFuPiBVUyBBIExJTkU8L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiB0eXBlPVwidGV4dFwiIHRhYkluZGV4PXsxfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCIgdHlwZT1cImVtYWlsXCIgdGFiSW5kZXg9ezJ9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cInBob25lIG51bWJlclwiIG5hbWU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGVsXCIgdGFiSW5kZXg9ezN9cmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBhcmlhLWxhYmVsPVwid3JpdGUgeW91ciBtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBNZXNzYWdlIEhlcmUuLi4uXCIgdGFiSW5kZXg9ezR9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzY3JpcHQgc3JjPSdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanMnPjwvc2NyaXB0PlxuPGRpdiBjbGFzc05hbWU9J2ctcmVjYXB0Y2hhJyBkYXRhLXNpdGVrZXk9JzZMZEF2VUlVQUFBQUFIanJqbWp0TlRjWHlLbTBXS3dlZkxwLWRRdjknPjwvZGl2PlxuPG5vc2NyaXB0PlxuPGRpdj5cbjxkaXYgc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuPGRpdiBzdHlsZT17e3dpZHRoOiAzMDIsIGhlaWdodDogNDIyLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+XG5cbnsvKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9mYWxsYmFjaz9rPTZMZEF2VUlVQUFBQUFIanJqbWp0TlRjWHlLbTBXS3dlZkxwLWRRdjlcIiBmcmFtZUJvcmRlcj17MH0gc2Nyb2xsaW5nPVwibm9cIlxuc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgYm9yZGVyU3R5bGU6IFwibm9uZVwifX0+XG5cbjwvaWZyYW1lPiAqL31cbjwvZGl2PlxuPC9kaXY+XG48ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMCwgaGVpZ2h0OiA2MCwgYm9yZGVyU3R5bGU6ICdub25lJywgYm90dG9tOiAxMiwgbGVmdDogMjUsIG1hcmdpbjogMCwgcGFkZGluZzogMCwgcmlnaHQ6IDI1LCBiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsIGJvcmRlcjogJzFweCBzb2xpZCAjYzFjMWMxJywgYm9yZGVyUmFkaXVzOiAzfX0+XG48dGV4dGFyZWEgaWQ9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiIG5hbWU9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiIGNsYXNzTmFtZT1cImctcmVjYXB0Y2hhLXJlc3BvbnNlXCJcbiAgc3R5bGU9e3t3aWR0aDogMjUwLCBoZWlnaHQ6IDQwLCBib3JkZXI6ICcxcHggc29saWQgI2MxYzFjMScsIG1hcmdpbjogJzEwcHggMjVweCcsIHBhZGRpbmc6IDAsIHJlc2l6ZTogJ25vbmUnfX0gPlxuPC90ZXh0YXJlYT5cbjwvZGl2PlxuPC9kaXY+XG48L25vc2NyaXB0PlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb250YWN0LXN1Ym1pdFwiIGNsYXNzTmFtZT1cInByaW1hcnkgYnV0dG9uLXNvbGlkXCIgZGF0YS1zdWJtaXQ9XCIuLi5TZW5kaW5nXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG48L21haW4+XG4pXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIlxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvNTMxYWEwOGExNjE5YTI2ZGY2NjNmNzg2MDljMjhkYTkwNTMxNTY0NS5jc3NcIiwgICBcblxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8TWFpbiAvPlxufVxuIiwgIlxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICBcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJsYW5kaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+U21hbGwgQnVzaW5lc3MgV2ViIERlc2lnbiArIERldmVsb3BtZW50PC9oMT5cbiAgICAgICAgICAgIDxoMj5ObyBwYWdlIGJ1aWxkZXJzIG9yIFdvcmRQcmVzcyAtIFdlIG9mZmVyIDEwMCUgaGFuZC1jb2RlZCB3ZWJzaXRlcyB3aXRoIHN1cGVyaW9yIHJlc3VsdHMgc3RhcnRpbmcgYXQgJDE1MC9tby48L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgcXVvdGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgR0VUIElOIFRPVUNIIVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vY2stdXAgZGVza3RvcC1kaXNwbGF5XCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC84MWZmM2I5YWQzMWM0NGFlMWU1ZDNhZjJmMGQ2MzY0ZDYwZWRlZTg1LzJmMTVmL2ltYWdlcy9tb2NrLXVwLXJlcGxhY2UucG5nXCIgYWx0PVwibW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9jay11cCBtb2JpbGUtZGlzcGxheVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvOWU1NDgyMTgzYzA4ZDk4ZmM0M2E1NmZhMWM5YTdmMWEwZjYxYTIwNy9hM2I3Yy9pbWFnZXMvbW9jay11cC1tb2JpbGUtcmVwYWNlLnBuZ1wiIGFsdD1cImEgbW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgbGlnaHQtc3dvb3BcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzI1ZTk0ZWFiYjFjZGVjMjYxM2JkMjY1ZDY0NWRjMTUzMjRiYWNmZTgvODZmNDUvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgZGFyay1zd29vcCBcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzJjNDk5MjY5YTRhMzNmYmJmY2EyODAxMGRiOGZkYmI2NjhhMjNjMWMvYmViYTYvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJ3aGF0LXdlLWRvXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtdG9wcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tdG9wcGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+V0hBVCA8L3NwYW4+IFdFIERPXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyYXBoaWMtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yOTA0OGQ5ZWZlODkyNTIzOTkxMjJjZDI0ODdmMjUzZGNiZTliY2M0L2NmOGE1L2ltYWdlcy9jb2RlLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldlIHNwZWNpYWxpemUgaW4gc21hbGwgYnVzaW5lc3Mgd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgZm9yIGNsaWVudHMgYW55d2hlcmUgaW4gdGhlIFVTLiBFdmVyeSBsaW5lIG9mIGNvZGUgaXMgd3JpdHRlbiBieSBoYW5kIHRvIGVuc3VyZSB0aGUgYmVzdCBwZXJmb3JtYW5jZSwgd2hpY2ggaGVscHMgYnJpbmcgaW4gbW9yZSBjdXN0b21lcnMgdG8geW91ciBzaXRlIGFuZCBicmluZyBtb3JlIHJldmVudWUgdG8geW91ciBidXNpbmVzcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC13ZS1kby1jb250ZW50IGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjUxMnB0XCIgdmlld0JveD1cIi0xMSAwIDUxMiA1MTIuMDAxXCIgd2lkdGg9XCI1MTJwdFwiPjxwYXRoIGQ9XCJtMjYxLjQzNzUgNTExLjQ0MTQwNiAxMzguODUxNTYyLTU0Ljk0MTQwNmM1NC43NjU2MjYtNDQuOTI5Njg4IDg5LjcxMDkzOC0xMTMuMTMyODEyIDg5LjcxMDkzOC0xODkuNSAwLTEzNS4zMDg1OTQtMTA5LjY5MTQwNi0yNDUtMjQ1LTI0NXMtMjQ1IDEwOS42OTE0MDYtMjQ1IDI0NWMwIDEzNS4zMTI1IDEwOS42OTE0MDYgMjQ1IDI0NSAyNDUgNS41MjczNDQgMCAxMS4wMDM5MDYtLjE5OTIxOSAxNi40Mzc1LS41NTg1OTR6bTAgMFwiIGZpbGw9XCIjMjdhM2ZmXCIvPjxwYXRoIGQ9XCJtMzg4Ljc0MjE4OCAzMTguOTQ5MjE5YzEuOTUzMTI0LTIzLjY0NDUzMS0xLjY0ODQzOC00Ny4zMzU5MzgtMTIuMTE3MTg4LTY4LjYyODkwNy0yNy4wNDI5NjktNTUuMDExNzE4LTIwLjgzOTg0NC01OS4wMDM5MDYtMjEuNjc5Njg4LTExMy42MDE1NjIgMC0xMS4xNTYyNS05LjA0Mjk2OC0yMC4xOTUzMTItMjAuMTk1MzEyLTIwLjE5NTMxMi0xMS4xNTYyNSAwLTIwLjE5NTMxMiA5LjAzOTA2Mi0yMC4xOTUzMTIgMjAuMTk1MzEyIDAgNy4yMDMxMjUgMCAyMDMuODMyMDMxIDAgMjAzLjA2MjUgMCAzLjE0ODQzOC0uMzM1OTM4IDYuMjIyNjU2LS45NTcwMzIgOS4xODc1djI5LjA3MDMxMmMwIDI0LjQ5NjA5NC0xOS45Mjk2ODcgNDQuNDI5Njg4LTQ0LjQyNTc4MSA0NC40Mjk2ODgtMTYuMjY5NTMxIDAtNzIuMzc1IDAtMTEwLjU1MDc4MSAwIDE2Ljk4MDQ2OCAyMy42MTcxODggNDAuMjE0ODQ0IDQyLjExMzI4MSA2Ny4xNzk2ODcgNTMuMzEyNS4xNjc5NjkuMDY2NDA2LjMzNTkzOC4xMzY3MTkuNTAzOTA3LjIwNzAzMSAxNi4yMjI2NTYgNi44NTU0NjkgMjguNjA5Mzc0IDE5Ljc4MTI1IDM1LjEzMjgxMiAzNS40NTMxMjUgNTIuNTM1MTU2LTMuNDgwNDY4IDEwMC41NDY4NzUtMjMuNTA3ODEyIDEzOC44NTE1NjItNTQuOTM3NWwtMTUuMDUwNzgxLTU1LjI5Mjk2OGMtMi4xNDg0MzctNy45MDIzNDQtMi45MDYyNS0xNi4xMTcxODgtMi4yMzgyODEtMjQuMjc3MzQ0em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTgzLjYwOTM3NSAxMTcuMjMwNDY5LTYuMTUyMzQ0LTUuNjk5MjE5Yy05LjQ4MDQ2OS04Ljc4OTA2Mi0yNC40Mjk2ODctOC4yMTg3NS0zMy4yMTQ4NDMgMS4yNjU2MjUtOC43ODUxNTcgOS40ODA0NjktOC4yMTQ4NDQgMjQuNDI5Njg3IDEuMjY1NjI0IDMzLjIxNDg0NGwzOC4xMDE1NjMgMzUuMzA0Njg3em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTI4NS42MjEwOTQgMGgtMTcyLjcxNDg0NGMtMTYuNzU3ODEyIDAtMzAuMzkwNjI1IDEzLjYzNjcxOS0zMC4zOTA2MjUgMzAuMzk0NTMxdjM2My45ODA0NjljMCAxNi43NTc4MTIgMTMuNjMyODEzIDMwLjM5NDUzMSAzMC4zOTA2MjUgMzAuMzk0NTMxaDE3Mi43MTQ4NDRjMTYuNzU3ODEyIDAgMzAuMzk0NTMxLTEzLjYzNjcxOSAzMC4zOTQ1MzEtMzAuMzk0NTMxdi0zNjMuOTgwNDY5YzAtMTYuNzU3ODEyLTEzLjYzNjcxOS0zMC4zOTQ1MzEtMzAuMzk0NTMxLTMwLjM5NDUzMXptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNDEuMDM1MTU2IDIyLjUzOTA2MmMtMS42NDQ1MzEtMi40NDUzMTItMi42MDU0NjgtNS4zODY3MTgtMi42MDU0NjgtOC41NTQ2ODcgMC02LjIxODc1IDMuNzAzMTI0LTExLjU2MjUgOS4wMTU2MjQtMTMuOTg0Mzc1aC0zNC41MzkwNjJjLTE2Ljc4NTE1NiAwLTMwLjM5NDUzMSAxMy42MDkzNzUtMzAuMzk0NTMxIDMwLjM5NDUzMXYzNjMuOTgwNDY5YzAgMTYuNzg1MTU2IDEzLjYwOTM3NSAzMC4zOTA2MjUgMzAuMzk0NTMxIDMwLjM5MDYyNWgzNi43MTg3NXYtMzc1LjU4OTg0NGMwLTkuNTU4NTkzLTMuMjUzOTA2LTE4LjcwMzEyNS04LjU4OTg0NC0yNi42MzY3MTl6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTAwLjEwOTM3NSAxOTEuOTc2NTYydjIwMi4zOTg0MzhjMCA3LjA3MDMxMiA1LjczMDQ2OSAxMi44MDA3ODEgMTIuNzk2ODc1IDEyLjgwMDc4MWgxNzIuNzE0ODQ0YzcuMDY2NDA2IDAgMTIuNzk2ODc1LTUuNzMwNDY5IDEyLjc5Njg3NS0xMi44MDA3ODEgMC02Ljk0NTMxMiAwLTEwOC4zMzU5MzggMC0yMDIuMzk4NDM4em0wIDBcIiBmaWxsPVwiI2U2ZjdmZVwiLz48cGF0aCBkPVwibTEwMC4xMDkzNzUgMTkxLjk3NjU2MnYyMDIuMzk4NDM4YzAgNy4wNzAzMTIgNS43MzA0NjkgMTIuODAwNzgxIDEyLjc5Njg3NSAxMi44MDA3ODFoMzAuMjczNDM4di0yMTUuMTk5MjE5em0wIDBcIiBmaWxsPVwiI2Q1ZjFmZVwiLz48cGF0aCBkPVwibTE2OS42NzU3ODEgMjUzLjAzMTI1YzAgMTEuMDc0MjE5LTguOTc2NTYyIDIwLjA1MDc4MS0yMC4wNTA3ODEgMjAuMDUwNzgxcy0yMC4wNTA3ODEtOC45NzY1NjItMjAuMDUwNzgxLTIwLjA1MDc4MSA4Ljk3NjU2Mi0yMC4wNTQ2ODggMjAuMDUwNzgxLTIwLjA1NDY4OCAyMC4wNTA3ODEgOC45ODA0NjkgMjAuMDUwNzgxIDIwLjA1NDY4OHptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNjkuNjc1NzgxIDMyNy4zODI4MTJjMCAxMS4wNzQyMTktOC45NzY1NjIgMjAuMDU0Njg4LTIwLjA1MDc4MSAyMC4wNTQ2ODhzLTIwLjA1MDc4MS04Ljk4MDQ2OS0yMC4wNTA3ODEtMjAuMDU0Njg4YzAtMTEuMDc0MjE4IDguOTc2NTYyLTIwLjA1MDc4MSAyMC4wNTA3ODEtMjAuMDUwNzgxczIwLjA1MDc4MSA4Ljk3NjU2MyAyMC4wNTA3ODEgMjAuMDUwNzgxem0wIDBcIiBmaWxsPVwiIzNkNGVjNlwiLz48cGF0aCBkPVwibTE0Ny4zNTkzNzUgMjMzLjExMzI4MWMtMTAuMDA3ODEzIDEuMTI4OTA3LTE3Ljc4NTE1NiA5LjYwOTM3NS0xNy43ODUxNTYgMTkuOTE3OTY5IDAgMTEuMDc0MjE5IDguOTc2NTYyIDIwLjA1MDc4MSAyMC4wNTA3ODEgMjAuMDUwNzgxIDYuOTA2MjUgMCAxMi45OTIxODgtMy40OTIxODcgMTYuNTk3NjU2LTguODA0Njg3LTE3LjI4OTA2MiAxLjk0OTIxOC0yOC4yOTY4NzUtMTcuMjY5NTMyLTE4Ljg2MzI4MS0zMS4xNjQwNjN6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTQ3LjM1OTM3NSAzMDcuNDY4NzVjLTEwLjAwNzgxMyAxLjEyNS0xNy43ODUxNTYgOS42MDkzNzUtMTcuNzg1MTU2IDE5LjkxNDA2MiAwIDExLjA3ODEyNiA4Ljk3NjU2MiAyMC4wNTQ2ODggMjAuMDUwNzgxIDIwLjA1NDY4OCA2LjkwNjI1IDAgMTIuOTkyMTg4LTMuNDkyMTg4IDE2LjU5NzY1Ni04LjgwNDY4OC0xNy4xODM1OTQgMS45MzM1OTQtMjguMzU5Mzc1LTE3LjE3OTY4Ny0xOC44NjMyODEtMzEuMTY0MDYyem0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48ZyBmaWxsPVwiIzExZGZlZlwiPjxwYXRoIGQ9XCJtMjMxLjU2NjQwNiAyNDQuNjk1MzEyaC0yOC40Njg3NWMtNC4xNDA2MjUgMC03LjUtMy4zNTkzNzQtNy41LTcuNSAwLTQuMTQ0NTMxIDMuMzU5Mzc1LTcuNSA3LjUtNy41aDI4LjQ2ODc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNi0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjxwYXRoIGQ9XCJtMjYwLjAzNTE1NiAyNzYuMzY3MTg4aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1OTM3Ni03LjUtNy41IDAtNC4xNDQ1MzIgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OCA3LjUgNy41IDAgNC4xNDA2MjQtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTIzMS41NjY0MDYgMzE5LjA0Njg3NWgtMjguNDY4NzVjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMjguNDY4NzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjkgNy41IDcuNXMtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTI2MC4wMzUxNTYgMzUwLjcxODc1aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41IDAtNC4xNDA2MjUgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1OTM3NSA3LjUgNy41IDAgNC4xNDQ1MzEtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48L2c+PHBhdGggZD1cIm0yODUuNTE5NTMxIDE3LjU5NzY1NmgtMjUuNjY3OTY5Yy0yLjQyMTg3NCAwLTQuMzgyODEyIDEuOTYwOTM4LTQuMzgyODEyIDQuMzc4OTA2IDAgNS44MDg1OTQtNC43NSAxMC41NTg1OTQtMTAuNTU0Njg4IDEwLjU1ODU5NGgtOTEuNDk2MDkzYy01LjgwODU5NCAwLTEwLjU1ODU5NC00Ljc1LTEwLjU1ODU5NC0xMC41NTg1OTQgMC0yLjQxNzk2OC0xLjk2MDkzNy00LjM3ODkwNi00LjM4MjgxMy00LjM3ODkwNmgtMjUuNjY3OTY4Yy03LjA3MDMxMyAwLTEyLjgwMDc4MiA1LjczMDQ2OS0xMi44MDA3ODIgMTIuNzk2ODc1djE2My41ODIwMzFoMTk4LjMxMjV2LTE2My41ODIwMzFjMC03LjA2NjQwNi01LjczMDQ2OC0xMi43OTY4NzUtMTIuODAwNzgxLTEyLjc5Njg3NXptMCAwXCIgZmlsbD1cIiNmOTQ4YjRcIi8+PHBhdGggZD1cIm0xNDMuMTc5Njg4IDI0LjUwNzgxMmMtLjIwMzEyNi0uODEyNS0uMzIwMzEzLTEuNjU2MjUtLjMyMDMxMy0yLjUyNzM0MyAwLTIuNDIxODc1LTEuOTYwOTM3LTQuMzgyODEzLTQuMzgyODEzLTQuMzgyODEzaC0yNS42Njc5NjhjLTcuMDcwMzEzIDAtMTIuODAwNzgyIDUuNzMwNDY5LTEyLjgwMDc4MiAxMi43OTY4NzV2MTYzLjU4MjAzMWg0My4xNzE4NzZ6bTAgMFwiIGZpbGw9XCIjZTAwZThiXCIvPjxwYXRoIGQ9XCJtMjg1LjUxOTUzMSAxNy41OTc2NTZoLTI1LjY2Nzk2OWMtMi40MjE4NzQgMC00LjM4MjgxMiAxLjk2MDkzOC00LjM4MjgxMiA0LjM3ODkwNiAwIDUuODA4NTk0LTQuNzUgMTAuNTU4NTk0LTEwLjU1NDY4OCAxMC41NTg1OTRoLTUwLjQ2NDg0M2wxMDMuODcxMDkzIDEzMC4yMDMxMjV2LTEzMi4zNDM3NWMwLTcuMDY2NDA2LTUuNzMwNDY4LTEyLjc5Njg3NS0xMi44MDA3ODEtMTIuNzk2ODc1em0wIDBcIiBmaWxsPVwiI2ZjN2FjZFwiLz48cGF0aCBkPVwibTE2Ni45MTc5NjkgNzcuMjA3MDMxaC0zNC41ODU5MzhjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMzQuNTg1OTM4YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNS0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIgZmlsbD1cIiNmYzdhY2RcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDI0MS4xOTE0MDZjLTcuNzMwNDY4IDguMzM5ODQ0LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzVsLTM0LjQ5NjA5NC0zMS45NjQ4NDNjLTguMzQzNzUtNy43MzA0NjktOC44Mzk4NDQtMjAuNzYxNzE5LTEuMTA5Mzc1LTI5LjEwNTQ2OXMyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjggOC44Mzk4NDQgMjAuNzYxNzE4IDEuMTA5Mzc1IDI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDIxMi4wODU5MzgtMTYuNDEwMTU2LTE1LjIwMzEyNmMyLjE2MDE1NiA3LjgyNDIxOS4zNjcxODcgMTYuNTQyOTY5LTUuNTUwNzgxIDIyLjkyOTY4OC01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU2bDE2LjQwNjI1IDE1LjIwMzEyNWM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3MTA5MyA3LjIzMDQ2OSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzUtMS4xMDkzNzUtMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNy44MTY0MDYgMjk3LjM2MzI4MWMtNy43MzA0NjggOC4zNDM3NS0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc1bC0zNC40OTYwOTQtMzEuOTY0ODQ0Yy04LjM0Mzc1LTcuNzMwNDY4LTguODM5ODQ0LTIwLjc2MTcxOC0xLjEwOTM3NS0yOS4xMDE1NjIgNy43MzA0NjktOC4zNDM3NSAyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjkgOC44Mzk4NDQgMjAuNzU3ODEyIDEuMTA5Mzc1IDI5LjEwMTU2MnptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDM1My41MzkwNjJjLTcuNzMwNDY4IDguMzQzNzUtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NmwtMzQuNDk2MDk0LTMxLjk2NDg0NGMtOC4zNDM3NS03LjczMDQ2OS04LjgzOTg0NC0yMC43NjE3MTktMS4xMDkzNzUtMjkuMTA1NDY5czIwLjc2MTcxOS04LjgzOTg0NCAyOS4xMDU0NjktMS4xMDkzNzVsMzQuNDk2MDkzIDMxLjk2NDg0NGM4LjMzOTg0NCA3LjczMDQ2OCA4LjgzOTg0NCAyMC43NjE3MTggMS4xMDkzNzUgMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTM4NS4yMzgyODEgNDAxLjIwNzAzMWMtMS4wNjY0MDYtMy45Mjk2ODctMS43ODkwNjItNy45MzM1OTMtMi4xNjc5NjktMTEuOTcyNjU2LTM4LjE2NDA2MiA2Mi42NTYyNS0xMTIuMjU3ODEyIDkxLjc1MzkwNi0xODEuODU1NDY4IDczLjY2MDE1NiA3Ljc2MTcxOCA0Ljk4ODI4MSAxNS45ODQzNzUgOS4zMDg1OTQgMjQuNTg1OTM3IDEyLjg4MjgxMy4xNjc5NjkuMDcwMzEyLjMzNTkzOC4xNDA2MjUuNTAzOTA3LjIxMDkzNyAxNi4yMjI2NTYgNi44NTE1NjMgMjguNjA5Mzc0IDE5Ljc3NzM0NCAzNS4xMzI4MTIgMzUuNDUzMTI1IDUyLjUzNTE1Ni0zLjQ4MDQ2OCAxMDAuNTQ2ODc1LTIzLjUxMTcxOCAxMzguODUxNTYyLTU0Ljk0MTQwNnptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDI2OC4yNjE3MTktMTYuNDEwMTU2LTE1LjIwMzEyNWMyLjE2MDE1NiA3LjgyMDMxMi4zNjcxODcgMTYuNTM5MDYyLTUuNTUwNzgxIDIyLjkyOTY4Ny01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU3bDE2LjQwNjI1IDE1LjE5OTIxOGM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3NSA3LjIzNDM3NSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzEwOTMtMS4xMDkzNzUtMjkuMTAxNTYyem0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNi43MDcwMzEgMzI0LjQzMzU5NC0xNi40MTAxNTYtMTUuMjAzMTI1YzIuMTYwMTU2IDcuODI0MjE5LjM2NzE4NyAxNi41NDI5NjktNS41NTA3ODEgMjIuOTI5Njg3LTUuOTIxODc1IDYuMzkwNjI1LTE0LjQ4MDQ2OSA4Ljg0Mzc1LTIyLjQ0MTQwNiA3LjI4NTE1NmwxNi40MDYyNSAxNS4yMDMxMjZjOC4zNDM3NSA3LjczMDQ2OCAyMS4zNzUgNy4yMzQzNzQgMjkuMTA1NDY4LTEuMTA5Mzc2IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzc1LTEuMTA5Mzc1LTI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Nb2JpbGUtRmlyc3QgRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2Ugc3RhcnQgYnVpbGRpbmcgeW91ciBzaXRlIGZvciBtb2JpbGUgZGV2aWNlcyBmaXJzdCwgdGhlbiB3ZSBhZGQgb24gdG8gaXQgdG8gbWFrZSB0YWJsZXQgYW5kIGRlc2t0b3AuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkxheWVyXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCI+PGc+PHBhdGggZD1cIm0yNTYgMjEuOTk1Yy0xMzUuMzExIDAtMjQ1LjAwMiAxMDkuNjkxLTI0NS4wMDIgMjQ1LjAwMiAwIDUyLjM2NyAxNi40MzkgMTAwLjg4OSA0NC40MjUgMTQwLjcwOGwyODYuODIyIDg4LjY2NmM5Mi43NTUtMzQuODkzIDE1OC43NTctMTI0LjQxOSAxNTguNzU3LTIyOS4zNzMgMC0xMzUuMzExLTEwOS42OTEtMjQ1LjAwMy0yNDUuMDAyLTI0NS4wMDN6XCIgZmlsbD1cIiNmZmRkNDBcIi8+PHBhdGggZD1cIm0yMzEuNDMyIDExMy43NjRjMC05LjMwNiAxLjE0Ni0xOC4zNDggMy4yOS0yNy4wMDFoLTEzNi43ODNjLTMuMDM0IDAtNS45OTUuMzE2LTguODU1LjkxMS0xMi44NDcgMTEuOTYzLTI0LjQwNCAyNS4yODgtMzQuNDQ2IDM5Ljc0OC0uMDU3LjkwNi0uMDk2IDEuODE4LS4wOTYgMi43Mzh2Mjc2LjI3NWMxMC40NTEgMTUuMDcxIDIyLjU1MSAyOC45MTIgMzYuMDM1IDQxLjI2NWwyMTYuNTc5IDU4LjkzNmMxMi41NjItMi42NzIgMjQuNzY5LTYuMzAyIDM2LjU0LTEwLjgxNnYtMjY5Ljc5NGMtNjEuOTAzIDAtMTEyLjI2NC01MC4zNi0xMTIuMjY0LTExMi4yNjJ6XCIgZmlsbD1cIiMxNjdjYzFcIi8+PHBhdGggZD1cIm0xNjIuMTY1IDQ4MC4zOTktMi4xMTMtMzM2LjExYy0uMDAzLS40OTItLjE4NS0uOTY0LS40OS0xLjM1LTUuMzQ3LTYuNzUyLTIuMDExLTExLjQwNC4wODItMTMuMzY2LjY4NS0uNjQyLjg0Ni0xLjY3My40MTctMi41MDgtMi40NjMtNC43OTYuODE1LTcuODI5IDIuMTk1LTguODM0LjM3OS0uMjc2LjY0OC0uNjc2Ljc3OS0xLjEyNmwzLjc3My0xMy4wNjFjLjIwMy0uNzAzLjA0MS0xLjQ3MS0uNDQ5LTIuMDE0LTYuNDU5LTcuMTYtMS45OTMtMTIuMjc3LjQ5NC0xNC4zMDQuMzE4LS4yNTkuNTM5LS41OTYuNjY0LS45NjNoLTY5LjU3OGMtMjMuOTI5IDAtNDMuMzk3IDE5LjQ2OC00My4zOTcgNDMuMzk3djI3Ni4yNzNjMTAuMDU0IDE0LjQ5OSAyMS42MzMgMjcuODU4IDM0LjUwMyAzOS44NXpcIiBmaWxsPVwiIzAyNDc4OFwiLz48cGF0aCBkPVwibTgxLjU0MiAxOTUuODg3djI0My4xMDhjNDQuNDMgNDUuMDYyIDEwNi4xNzcgNzMuMDA1IDE3NC40NTggNzMuMDA1IDIwLjk1MSAwIDQxLjI4NS0yLjYzNiA2MC42OTUtNy41ODN2LTI4MS42ODFjLTE4Ljc4Ny00LjY1Ni0zNS43Mi0xNC4wNTUtNDkuNDU0LTI2Ljg0OXpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTgxLjU0MiA0MzguOTk2YzIyLjI3MSAyMi41ODcgNDguODg4IDQwLjg3NSA3OC41MDYgNTMuNDk0di0yOTYuNjAzaC03OC41MDZ6XCIgZmlsbD1cIiNkM2RjZmJcIi8+PGc+PHBhdGggZD1cIm0xNjcuMTQ5IDExNy44NjJoLTQuMzMzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDQuMzMzYzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjMWU5MmQzXCIvPjwvZz48Zz48cGF0aCBkPVwibTIzNC4zODQgMTE3Ljg2MmgtNDEuNjM4Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDQxLjYzOGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiIzFlOTJkM1wiLz48L2c+PHBhdGggZD1cIm0yMzMuNjUzIDEzNi4wMjloLTgzLjAzNWMtNi42IDAtMTItNS40LTEyLTEyIDAtNS42Ny00LjU5Ni0xMC4yNjYtMTAuMjY2LTEwLjI2NmgtMzAuNDEzYy05LjA1NiAwLTE2LjM5NyA3LjM0MS0xNi4zOTcgMTYuMzk3djY4LjM4NWgxODguNjQ0Yy0xOC4zNzktMTUuOTU2LTMxLjUzNS0zNy43NzUtMzYuNTMzLTYyLjUxNnpcIiBmaWxsPVwiIzliZDhmOVwiLz48cGF0aCBkPVwibTE1MC42MTggMTM2LjAyOWMtNi42IDAtMTItNS40LTEyLTEyIDAtNS42Ny00LjU5Ni0xMC4yNjYtMTAuMjY1LTEwLjI2NmgtMzAuNDE0Yy05LjA1NiAwLTE2LjM5NyA3LjM0MS0xNi4zOTcgMTYuMzk3djY4LjM4NWg3OC41MDV2LTYyLjUxN2gtOS40Mjl6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PGcgZmlsbD1cIiMxZTkyZDNcIj48cGF0aCBkPVwibTMxNi42OTUgMjEwLjIzNmMtNC4xNDIgMC03LjUgMy4zNTctNy41IDcuNXYyODguNDU1YzUuMDYtMS4xMiAxMC4wNjMtMi4zOTIgMTUtMy44MTl2LTI4NC42MzZjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNXpcIi8+PHBhdGggZD1cIm04OS4wNDIgNDQ2LjI4MnYtMzE2LjEyMmMwLTQuOTA2IDMuOTkxLTguODk3IDguODk3LTguODk3aDMwLjQxNGMxLjUyNSAwIDIuNzY2IDEuMjQgMi43NjYgMi43NjUgMCAxMC43NTIgOC43NDggMTkuNSAxOS41IDE5LjVoODguMDM1YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjUgMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNWgtODguMDM1Yy0yLjQzOSAwLTQuNS0yLjA2LTQuNS00LjUgMC05Ljc5Ni03Ljk3LTE3Ljc2NS0xNy43NjYtMTcuNzY1aC0zMC40MTRjLTEzLjE3NyAwLTIzLjg5NyAxMC43MjEtMjMuODk3IDIzLjg5N3YzMDAuODkyYzQuNzc2IDUuMjkzIDkuNzg0IDEwLjM3MSAxNSAxNS4yM3pcIi8+PC9nPjxwYXRoIGQ9XCJtMTU5LjY0NCAxMjkuNTczYy4zMDYtLjI4Ni40ODktLjY1NS41OC0xLjA0NGgtOS42MDZjLTIuNDM5IDAtNC41LTIuMDYtNC41LTQuNSAwLTkuNzk2LTcuOTctMTcuNzY1LTE3Ljc2Ni0xNy43NjVoLTMwLjQxM2MtMTMuMTc3IDAtMjMuODk3IDEwLjcyMS0yMy44OTcgMjMuODk3djMwMC44OTJjNC43NzYgNS4yOTMgOS43ODQgMTAuMzcxIDE1IDE1LjIzdi0zMTYuMTIzYzAtNC45MDYgMy45OTEtOC44OTcgOC44OTctOC44OTdoMzAuNDE0YzEuNTI1IDAgMi43NjYgMS4yNCAyLjc2NiAyLjc2NSAwIDEwLjc1MiA4Ljc0OCAxOS41IDE5LjUgMTkuNWg5LjI4MWMtLjA4My0uMjEtLjE5NS0uNDEtLjMzNy0uNTktNS4zNDctNi43NTEtMi4wMTEtMTEuNDA0LjA4MS0xMy4zNjV6XCIgZmlsbD1cIiMxNjdjYzFcIi8+PHBhdGggZD1cIm0yNDEuOTM0IDE1Ny4xMDZoLTgxLjU4NXYyNi4yODZoOTQuMjkyYy41NjggMCAxLjEyNC0uMDQ4IDEuNjc0LS4xMTgtNS44OTItNy45ODQtMTAuNzUtMTYuNzcyLTE0LjM4MS0yNi4xNjh6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm0xNjEuMzQ5IDE1Ny4xMDZoLTE0Ljc1MmMtNy4yNTkgMC0xMy4xNDMgNS44ODQtMTMuMTQzIDEzLjE0M3M1Ljg4NCAxMy4xNDMgMTMuMTQzIDEzLjE0M2gxNC43NTJ6XCIgZmlsbD1cIiMzYzU4YTBcIi8+PGc+PHBhdGggZD1cIm0xMTYuNTM1IDE0MS44MzJoLTEwLjMzNGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWgxMC4zMzRjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PC9nPjxwYXRoIGQ9XCJtMjc5LjgyMSAzNDQuNWgtMTYxLjQwNWMtNS40NDUgMC05Ljg5OS00LjQ1NS05Ljg5OS05Ljg5OXYtODcuMzJjMC01LjQ0NSA0LjQ1NS05Ljg5OSA5Ljg5OS05Ljg5OWgxNjEuNDA1YzUuNDQ1IDAgOS44OTkgNC40NTUgOS44OTkgOS44OTl2ODcuMzJjMCA1LjQ0NS00LjQ1NCA5Ljg5OS05Ljg5OSA5Ljg5OXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48cGF0aCBkPVwibTEwOC41MTcgMjQ3LjI4MXY4Ny4zMmMwIDUuNDQ1IDQuNDU1IDkuODk5IDkuODk5IDkuODk5aDEwMy43MDZjLS4zMTYtLjUyNS0uNzc4LS45Ny0xLjM3NC0xLjI1NS04LjA2OC0zLjg0OC03Ljg1NC0xMC4wNDYtNi44NDgtMTMuNjkyLjQ0My0xLjYwNy0uMzc0LTMuMzE1LTEuOTQtMy44ODYtMTQuMzItNS4yMTYtMTEuNzYxLTE4LjAzNC0xMC42MzMtMjEuODYuMjE4LS43MzkuMTcyLTEuNTI3LS4xNC0yLjIzMmwtMTAuOTktMjQuODIzYy0uNDc5LTEuMDgxLTEuNTEtMS44MzktMi42OS0xLjkwOC05LjY4Ny0uNTY3LTExLjQzNC04LjQ2NC0xMS42NzItMTIuNjg0LS4wODQtMS40ODQtMS4xOTEtMi43MTQtMi42NTYtMi45NjQtMTYuMDQ5LTIuNzQzLTE0LjcxOS0xNS4zNC0xMy42My0yMC4wMzkuMTM5LS42MDEuMDk0LTEuMjE0LS4xMDMtMS43NzVoLTQxLjAyOWMtNS40NDYgMC05LjkgNC40NTQtOS45IDkuODk5elwiIGZpbGw9XCIjZTgwMDU0XCIvPjxnPjxwYXRoIGQ9XCJtMTM4LjIzIDM4Mi4wMDNoLTVjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg1YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1NyA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0xMTMuNTE3IDM4Mi4wMDNoLTVjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg1YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0yODkuNzIxIDM4Mi4wMDNoLTk0LjA3NGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDk0LjA3NGM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTk1LjY0NyAzODIuMDAzaC0zNy4wODNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWgzNy4wODNjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTE5NS42NDggMzg5Ljg4MmMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXYtMTUuNWMwLTQuMTQzIDMuMzU4LTcuNSA3LjUtNy41czcuNSAzLjM1NyA3LjUgNy41djE1LjVjMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2U4MDA1NFwiLz48L2c+PGVsbGlwc2UgY3g9XCIxOTkuMTE4XCIgY3k9XCIyOTAuOTQxXCIgZmlsbD1cIiNlOWVmZmZcIiByeD1cIjM5LjA3MVwiIHJ5PVwiMzkuMDcxXCIgdHJhbnNmb3JtPVwibWF0cml4KC4xNiAtLjk4NyAuOTg3IC4xNiAtMTE5Ljk2MSA0NDAuODg1KVwiLz48cGF0aCBkPVwibTIxMS45NTkgMzI1LjY2OGMtMTQuMzItNS4yMTYtMTEuNzYxLTE4LjAzNC0xMC42MzMtMjEuODYuMjE4LS43MzkuMTcyLTEuNTI3LS4xNC0yLjIzMmwtMTAuOTktMjQuODIzYy0uNDc5LTEuMDgxLTEuNTEtMS44MzktMi42OS0xLjkwOC05LjY4Ny0uNTY3LTExLjQzNC04LjQ2NC0xMS42NzItMTIuNjg0LS4wNDItLjc0Ny0uMzQ1LTEuNDMtLjgyMS0xLjk1NS05LjEwOCA3LjE1My0xNC45NjUgMTguMjU3LTE0Ljk2NSAzMC43MzYgMCAyMS41NzggMTcuNDkzIDM5LjA3MSAzOS4wNzEgMzkuMDcxIDUuMTQ1IDAgMTAuMDUzLTEuMDA0IDE0LjU1MS0yLjgxMS0uMzQ3LS42OS0uOTM2LTEuMjUyLTEuNzExLTEuNTM0elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxwYXRoIGQ9XCJtMjEzLjgwNCAyODYuOTE1LTE5LjA4MS0xMi4xOTljLTMuMTgtMi4wMzMtNy4zNTIuMjUxLTcuMzUyIDQuMDI2djI0LjM5OGMwIDMuNzc1IDQuMTcyIDYuMDU5IDcuMzUyIDQuMDI2bDE5LjA4MS0xMi4xOTljMi45MzktMS44NzkgMi45MzktNi4xNzMgMC04LjA1MnpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48Zz48cGF0aCBkPVwibTE4MC43NDcgNDE0Ljc2M2gtNzIuMjNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNzIuMjNjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNSAwIDQuMTQyLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48Zz48cGF0aCBkPVwibTI4OS43MjEgNDQ0LjE0NWgtMTgxLjIwNGMtNC4xNDIgMC03LjUtMy4zNTgtNy41LTcuNSAwLTQuMTQzIDMuMzU4LTcuNSA3LjUtNy41aDE4MS4yMDRjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNSAwIDQuMTQyLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48cGF0aCBkPVwibTI4OS43MjEgNDU2LjkyMmgtMTgxLjIwNGMtMS45IDAtMy42My43MTItNC45NTIgMS44NzcgNS44MzMgNC42NDIgMTEuODg0IDkuMDIgMTguMTMzIDEzLjEyM2gxNjguMDIzYzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxwYXRoIGQ9XCJtMjg5LjcyMSA0ODQuN2gtMTQ2LjJjMTEuMzk1IDUuODk5IDIzLjMxMyAxMC45MjUgMzUuNjY1IDE1aDExMC41MzRjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNS4wMDEtNC4xNDItMy4zNTctNy41LTcuNDk5LTcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48Y2lyY2xlIGN4PVwiMzQzLjY5NVwiIGN5PVwiMTEzLjc2M1wiIGZpbGw9XCIjMmE0MjhjXCIgcj1cIjExMy43NjNcIi8+PHBhdGggZD1cIm0zODcuMTgyIDE1NS4zNWMuMDk3LTEuOTUzLS42MTMtMy44NTYtMS45OTYtNS4yMzlsLTYuNjYyLTYuNjYyYy0xLjItMS4yLTIuODA4LTEuODkxLTQuNTAyLTEuOTk3LTIxLjYxLTEuMzU3LTIyLjc3Mi0xOS43NjUtMjIuNzA4LTI0LjUzMS4wMTEtLjgxNS0uMTM3LTEuNjIyLS40MTctMi4zODdsLTUuODc4LTE2LjA3NmMtLjgzNy0yLjI4Ny0yLjgyOS0zLjkyNi01LjIxOS00LjM5NC01MS4wMTctOS45OTUtMzkuNzA2LTY4Ljg3NS0zNS45NzItODMuNzkxLjI1OC0xLjAzMS4yNTctMi4wODkuMDM3LTMuMDk4LTQzLjE4NCAxNi4xNDQtNzMuOTM0IDU3Ljc3My03My45MzQgMTA2LjU4OSAwIDYyLjgzIDUwLjkzMyAxMTMuNzYzIDExMy43NjMgMTEzLjc2MyA3LjMyNSAwIDE0LjQ4NC0uNzAxIDIxLjQyNC0yLjAyM2wzMC4zOTYtNjAuOTVjLTcuNDE4LTEuNTI4LTguNDgyLTYuMTc2LTguMzMyLTkuMjA0elwiIGZpbGw9XCIjMWMyZTdhXCIvPjxnPjxwYXRoIGQ9XCJtMjk5LjcxMiAxNTIuNjAzLTMzLjMwNC0zMy4zMDRjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE1IDAtMTEuMDcybDMzLjMwNC0zMy4zMDRjMy4wNTctMy4wNTcgOC4wMTQtMy4wNTggMTEuMDcyIDAgMy4wNTcgMy4wNTcgMy4wNTggOC4wMTUgMCAxMS4wNzJsLTI3Ljc2OCAyNy43NjkgMjcuNzY4IDI3Ljc2OGMzLjA1NyAzLjA1NyAzLjA1NyA4LjAxNSAwIDExLjA3Mi0zLjA1OCAzLjA1Ny04LjAxNCAzLjA1Ni0xMS4wNzItLjAwMXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PGc+PHBhdGggZD1cIm0zNzYuNjA3IDE1Mi42MDNjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE0IDAtMTEuMDcybDI3Ljc2OC0yNy43NjgtMjcuNzY5LTI3Ljc2OGMtMy4wNTctMy4wNTctMy4wNTctOC4wMTUgMC0xMS4wNzIgMy4wNTgtMy4wNTggOC4wMTUtMy4wNTggMTEuMDcyIDBsMzMuMzA1IDMzLjMwNGMzLjA1NSAzLjA1NiAzLjA1NyA4LjAxNSAwIDExLjA3MmwtMzMuMzA0IDMzLjMwNGMtMy4wNTcgMy4wNTctOC4wMTQgMy4wNTgtMTEuMDcyIDB6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMzI1LjU4OSAxNTQuMjEzYy0zLjk0Ny0xLjc2Ni01LjcxNC02LjM5OC0zLjk0OC0xMC4zNDRsMjkuODE2LTY2LjYwOGMxLjc2Ny0zLjk0NiA2LjM5OS01LjcxMyAxMC4zNDQtMy45NDcgMy45NDcgMS43NjcgNS43MTQgNi4zOTggMy45NDcgMTAuMzQ0bC0yOS44MTYgNjYuNjA4Yy0xLjc2IDMuOTM0LTYuMzg1IDUuNzE4LTEwLjM0MyAzLjk0N3pcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PHBhdGggZD1cIm00NDEuNzg5IDE5Mi40NzFoLTkuMDkxYy0yLjQwMiAwLTQuMzU2LTEuOTU0LTQuMzU2LTQuMzU2di05LjA5MWMwLTEwLjgxLTcuNjMxLTE0LjQxOS0xMi41LTE1LjYyMmgtNjcuMjM2Yy0yLjczOCAwLTQuOTU4IDIuMjItNC45NTggNC45NTh2MTUyLjc3NWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoMTAzLjg0OGMyLjczOCAwIDQuOTU4LTIuMjIgNC45NTgtNC45NTh2LTExNy45NjFjLTIuOTE2LTEwLjQ1OS0xNS40NzUtMTAuNzAxLTE1LjYyMy0xMC43MDN6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm0zODMuMDY5IDMwMS40NjV2LTExMy40MzVjMC0xMy42MDEgMTEuMDI2LTI0LjYyOCAyNC42MjctMjQuNjI4aC01OS4wOWMtMi43MzggMC00Ljk1OCAyLjIyLTQuOTU4IDQuOTU4djE1Mi43NzVjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDU5LjA5Yy0xMy42MDEgMC0yNC42MjctMTEuMDI2LTI0LjYyNy0yNC42Mjh6XCIgZmlsbD1cIiNkM2RjZmJcIi8+PHBhdGggZD1cIm00NTIuMjk2IDE4Ny45NTgtMTkuNDQtMTkuNDRjLTMuMjc1LTMuMjc1LTcuNzE4LTUuMTE1LTEyLjM1LTUuMTE1aC04LjYyOHMxNS44NjIuMjQyIDE1Ljg2MiAxNS42MjJ2OS4wOTFjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDkuMDkxczE1LjYyMi4xMjggMTUuNjIyIDE0Ljc3MXYtNy41MzdjMC00LjYzMi0xLjg0LTkuMDc1LTUuMTE1LTEyLjM1elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxnIGZpbGw9XCIjNzNjM2Y5XCI+PHBhdGggZD1cIm00MTQuMDQ1IDIzOC45MTFoLTMxLjQ4M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzMS40ODNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDIxOC40MDdoLTI2LjA4MmMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgyNi4wODJjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzk1LjU2MyAyMTguNDA3aC0xMy4wMDFjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMTMuMDAxYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyNTguNTg2aC0yNi4wODJjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMjYuMDgyYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM5NS41NjMgMjU4LjU4NmgtMTMuMDAxYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDEzLjAwMWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zODYuMzc3IDI3OS4wODhoLTMuODE0Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMuODE0YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyNzkuMDg4aC0zNS42NDRjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMzUuNjQ0YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48L2c+PHBhdGggZD1cIm0zNjYuNzgzIDIzOC45MTFoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyMTguNDA3aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjU4LjU4NmgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI3OS4wODhoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtNDM2LjY0NyAyMzguOTExaC01LjM5NWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWg1LjM5NWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48cGF0aCBkPVwibTQxNC4wNDUgMjk5LjU5MWgtMzEuNDgzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMxLjQ4M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjk5LjU5MWgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm00MzYuNjQ3IDI5OS41OTFoLTUuMzk1Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDUuMzk1YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk9wdGltaXphdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPjYwJSBvZiBhbGwgaW50ZXJuZXQgdHJhZmZpYyBpcyBvbiBtb2JpbGUgZGV2aWNlcywgc28gd2Ugb3B0aW1pemUgeW91ciBtb2JpbGUgdG8gcGVyZm9ybSB0aGVpciBiZXN0IGluIHNlYXJjaCBlbmdpbmVzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGlnZ3ktYmFua1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMWE2YTc2MzVkNzIzYmQ0M2FkMDFlYjhlMTRjYTU1NWFkZTkyMDBkOS9lNjQzYi9pbWFnZXMvc2F2aW5ncy5zdmdcIiBhbHQ9XCJkcmF3aW5nIG9mIGEgbWFuIG5leHQgdG8gYSBsYXJnZSBwaWdneSBiYW5rXCIgd2lkdGg9XCIzMDBweFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtdGV4dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kMDwvc3Bhbj4gRG93biwgPHNwYW4+JDE1MDwvc3Bhbj4gUGVyIE1vbnRoLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIE1pbmltdW0gQ29udHJhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JDAgZG93biBmb3IgYSBzdGFuZGFyZCA1IHBhZ2Ugc21hbGwgYnVzaW5lc3Mgd2Vic2l0ZS4gSWYgeW91IG5lZWQgbW9yZSB0aGFuIHRoYXQgdGhlbiB3ZSBoYXZlIHRvIGRvIGN1c3RvbSBwcmljaW5nIGJhc2VkIG9uIHRoZSBzY29wZSBvZiB3b3JrLCBudW1iZXIgb2YgYWRkaXRpb25hbCBwYWdlcywgYW5kIHRpbWUgaW52b2x2ZWQuIDxici8+PGJyLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IG93biB5b3VyIGRvbWFpbiwgY29udGVudCwgbGlzdGluZywgYW5kIHByb2ZpbGVzLiAgQ2FuY2VsIGFueXRpbWUgd2l0aCBubyBmZWVzIG9yIGhhc3NsZS4gIFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvc3RpbmcgRmVlcyBJbmNsdWRlZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SG9zdGluZyBmZWVzIGFyZSBidWlsdCByaWdodCBpbnRvIHRoZSBtb250aGx5IHBheW1lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5VbmxpbWl0ZWQgRWRpdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBhbnl0aGluZyB5b3Ugd2FudCBhdCBhbnl0aW1lIGFuZCBpdCB3aWxsIGJlIGRvbmUgdGhhdCBkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4yNC83IEN1c3RvbWVyIFNlcnZpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbGwgZGlyZWN0IGFueXRpbWUgZGF5IG9yIG5pZ2h0LCBubyBwaG9uZSB0cmVlcyBvciBhdXRvbWF0ZWQgcmVzcG9uc2VzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V2ViIERlc2lnbiAmIERldmVsb3BtZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbmNsdWRlcyBvdmVyIDQwIGhvdXJzIG9mIGRlc2lnbiwgZGV2ZWxvcG1lbnQsIGFuZCB0ZXN0aW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2l0YXRpb25zIEFuZCBMaXN0aW5nczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SXQncyBpbXBvcnRhbnQgdG8gaGF2ZSB5b3VyIHdlYnNpdGUgbGlua2VkIGZyb20gb3RoZXIgd2Vic2l0ZXMsIGxpa2UgZGlyZWN0b3JpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hb29nbGUgQW5hbHl0aWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBpbnN0YWxsIEFuYWx5dGljcyBmb3IgZnJlZSB0byBtb25pdG9yIHRyYWZmaWMgYW5kIHdoZXJlIGl0IGNvbWVzIGZyb20uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInByaWNlc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZCArIEJsb2dnaW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TVEFSVElORyBBVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MzAwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAxMDAwKyBXb3JkIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gV3JpdHRlbiBCeSBhbiBTRU8gU3BlY2lhbGlzdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAxIFBvc3QgUGVyIE1vbnRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+ICQxNTAgUGVyIEV4dHJhIFBvc3Q8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj41IFBBR0VTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4xNTA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gVW5saW1pdGVkIEVkaXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gSW5jbHVkZXMgSG9zdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDI0LzcgQ3VzdG9tZXIgU2VydmljZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IExpZmV0aW1lIFVwZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWRcInR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5Mb2dvcyAmIEdyYXBoaWMgRGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5JTkNMVURFRCE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMiByZXZpc2lvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBBbGwgRmlsZSBGb3JtYXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gUmVhZHkgdG8gdXNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gRlJFRSB3LyBTdWJzY3JpcHRpb248L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUss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
