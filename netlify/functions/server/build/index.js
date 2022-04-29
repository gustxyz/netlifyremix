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
var import_react2 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// app/components/Header/index.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/helpers/useMedia.ts
init_react();
var import_react = __toModule(require("react"));
var useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return (values == null ? void 0 : values[index]) || defaultValue;
  };
  const [value, setValue] = (0, import_react.useState)(getValue);
  (0, import_react.useEffect)(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);
  return value;
};
var useMedia_default = useMedia;

// app/assets/images/logo.png
var logo_default = "/build/_assets/logo-BHSRVWXK.png";

// app/components/Header/index.tsx
var Header = (props) => {
  const { navActive, setNavActive } = props;
  const location = (0, import_remix2.useLocation)();
  const navLinks = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
  let isMobile = null;
  if (typeof window !== "undefined") {
    isMobile = useMedia_default(["(min-width: 1250px)", "(max-width: 1249px)"], [false, true], false);
  }
  const onClickHandler = () => {
    setNavActive(!navActive);
  };
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
    className: `hamburger hamburger--spring ${isMobile || navActive ? "is-active" : ""}`,
    onClick: onClickHandler,
    type: "button"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-box"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-inner"
  }))))), /* @__PURE__ */ React.createElement("nav", null, isMobile ? /* @__PURE__ */ React.createElement("div", {
    style: navActive ? { width: "60%", position: "fixed" } : { width: 0 },
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
    className: `navbar-links ${!navActive ? "clicked" : ""}`
  }, navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement("li", {
      onClick: onClickHandler,
      style: navActive ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
      key: navLink.name + navLink.route,
      className: "nav-li"
    }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
      style: navActive || !isMobile ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
      className: location.pathname === navLink.route ? "active-menu" : "",
      to: navLink.route
    }, navLink.name));
  })))) : /* @__PURE__ */ React.createElement("div", {
    style: { width: 0 },
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
    className: `navbar-links ${!navActive ? "clicked" : ""}`
  }, navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement("li", {
      onClick: onClickHandler,
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
var import_remix3 = __toModule(require_remix());
var Footer = () => {
  const navLinks = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
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
  }), navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement(import_remix3.Link, {
      className: "link",
      to: navLink.route
    }, navLink.name);
  })), /* @__PURE__ */ React.createElement("div", {
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
}), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
function App() {
  const [navActive, setNavActive] = (0, import_react2.useState)(false);
  const onClickHandler = () => {
    setNavActive(!navActive);
  };
  let isMobile = null;
  if (typeof window !== "undefined") {
    isMobile = useMedia_default(["(min-width: 1250px)", "(max-width: 1249px)"], [false, true], false);
  }
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, /* @__PURE__ */ React.createElement(Header_default, {
    navActive,
    setNavActive
  }), /* @__PURE__ */ React.createElement("div", {
    onClick: navActive ? onClickHandler : void 0
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null)));
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
var import_react3 = __toModule(require("@remix-run/react"));

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
  const params = (0, import_react3.useParams)();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaGVscGVycy91c2VNZWRpYS50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInBhYmlvX3YyMDIyMDEyM19sb2NhbGVcIiwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgXCJTZXQtQ29va2llXCIsXG4gICAgYXdhaXQgY29va2llLnNlcmlhbGl6ZSh1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICApO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gXCIuL2hlbHBlcnMvdXNlTWVkaWFcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFsa2kgRGlnaXRhbCB8IFdlYiBEZXNpZ25cIiB9O1xufTtcblxuXG5cbmNvbnN0IEJhc2VUZW1wbGF0ZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxodG1sIGxhbmc9XCJlblwiPlxuICAgIDxoZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8TGlua3MgLz5cbiAgICBcbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW25hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpPT4ge1xuICAgIHNldE5hdkFjdGl2ZSghbmF2QWN0aXZlKTtcbn1cbmxldCBpc01vYmlsZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgaXNNb2JpbGUgPSB1c2VNZWRpYTxib29sZWFuPihcbiAgICAgICAgLy8gTWVkaWEgcXVlcmllc1xuICAgICAgICBbXCIobWluLXdpZHRoOiAxMjUwcHgpXCIsIFwiKG1heC13aWR0aDogMTI0OXB4KVwiXSxcbiAgICAgICAgLy8gQ29sdW1uIGNvdW50cyAocmVsYXRlcyB0byBhYm92ZSBtZWRpYSBxdWVyaWVzIGJ5IGFycmF5IGluZGV4KVxuICAgICAgICBbZmFsc2UsIHRydWVdLFxuXG4gICAgICAgIGZhbHNlXG4gICBcbiAgICAgICk7XG5cbn1cbiAgcmV0dXJuIChcbiAgICA8QmFzZVRlbXBsYXRlPlxuICAgICAgPEhlYWRlciBuYXZBY3RpdmU9e25hdkFjdGl2ZX0gc2V0TmF2QWN0aXZlPXtzZXROYXZBY3RpdmV9IC8+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e25hdkFjdGl2ZSA/IG9uQ2xpY2tIYW5kbGVyIDogdW5kZWZpbmVkfT5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgPC9CYXNlVGVtcGxhdGU+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gKHsgZXJyb3IgfSkgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIDxCYXNlVGVtcGxhdGU+e2Vycm9yfTwvQmFzZVRlbXBsYXRlPjtcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZU1lZGlhXCI7XG5cbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5cblxuY29uc3QgSGVhZGVyID0gKCBwcm9wczogeyBuYXZBY3RpdmU6IGFueTsgc2V0TmF2QWN0aXZlOiBhbnk7IH0pID0+IHtcbiAgICBjb25zdCB7bmF2QWN0aXZlLCBzZXROYXZBY3RpdmV9ID0gcHJvcHM7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpOyAgICAgXG4gICAgY29uc3QgbmF2TGlua3MgPSBbeyBuYW1lOiAnSG9tZScsIHJvdXRlOiAnLyd9LHsgbmFtZTogJ0Fib3V0Jywgcm91dGU6ICcvYWJvdXQnfSx7IG5hbWU6ICdTZXJ2aWNlcycsIHJvdXRlOiAnL3NlcnZpY2VzJ30seyBuYW1lOiAnQ29udGFjdCcsIHJvdXRlOiAnL2NvbnRhY3QnfV1cblxuICAgIGxldCBpc01vYmlsZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICBpc01vYmlsZSA9IHVzZU1lZGlhPGJvb2xlYW4+KFxuICAgICAgICAgICAgLy8gTWVkaWEgcXVlcmllc1xuICAgICAgICAgICAgW1wiKG1pbi13aWR0aDogMTI1MHB4KVwiLCBcIihtYXgtd2lkdGg6IDEyNDlweClcIl0sXG4gICAgICAgICAgICAvLyBDb2x1bW4gY291bnRzIChyZWxhdGVzIHRvIGFib3ZlIG1lZGlhIHF1ZXJpZXMgYnkgYXJyYXkgaW5kZXgpXG4gICAgICAgICAgICBbZmFsc2UsIHRydWVdLFxuICAgIFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICBcbiAgICAgICAgICApO1xuICAgIFxuICAgIH1cblxuXG4gXG5cbmNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCk9PiB7XG4gICAgc2V0TmF2QWN0aXZlKCFuYXZBY3RpdmUpO1xufVxucmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYgY29udGFpbmVyIG1vYmlsZS1uYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD1cIm1vYmlsZS1sb2dvXCIgc3JjPXtMb2dvfSBhbHQ9XCJtb2JpbGVfY29tcGFueV9sb2dvXCIgaGVpZ2h0PVwiNjBcIiAvPiBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJvcGVuIHRoZSBtZW51XCIgaWQ9XCJtZW51LWJ1dHRvblwiIGNsYXNzTmFtZT17YGhhbWJ1cmdlciBoYW1idXJnZXItLXNwcmluZyAke2lzTW9iaWxlIHx8bmF2QWN0aXZlID8gJ2lzLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICB7aXNNb2JpbGUgP1xuICAgICAgICAgICAgPGRpdiBzdHlsZT17bmF2QWN0aXZlICA/IHt3aWR0aDogJzYwJScsIHBvc2l0aW9uOiAnZml4ZWQnfSA6ICB7d2lkdGg6IDB9fSBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlLW1lbnVcIiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwiY29tcGFueSBsb2dvXCIgd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDx1bCAgaWQ9XCJvbi10b3BcIiBjbGFzc05hbWU9e2BuYXZiYXItbGlua3MgJHshbmF2QWN0aXZlID8gJ2NsaWNrZWQnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2TGlua3MubWFwKChuYXZMaW5rKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgb25DbGljaz17b25DbGlja0hhbmRsZXJ9IHN0eWxlPXtuYXZBY3RpdmUgID8ge29wYWNpdHk6IDEsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30gOiAge29wYWNpdHk6IDAsIHZpc2liaWxpdHk6ICdoaWRkZW4nfX0ga2V5PXtuYXZMaW5rLm5hbWUgKyBuYXZMaW5rLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayBzdHlsZT17bmF2QWN0aXZlIHx8ICFpc01vYmlsZSAgID8ge29wYWNpdHk6IDEsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30gOiAge29wYWNpdHk6IDAsIHZpc2liaWxpdHk6ICdoaWRkZW4nfX0gY2xhc3NOYW1lPXtsb2NhdGlvbi5wYXRobmFtZSA9PT0gbmF2TGluay5yb3V0ZSA/ICdhY3RpdmUtbWVudScgOiAnJ30gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZMaW5rLnJvdXRlfT57bmF2TGluay5uYW1lfTwvTGluaz48L2xpPlxuXG59KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgOiBcbiAgICAgICAgICAgPGRpdiBzdHlsZT17IHt3aWR0aDogMH19IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGUtbWVudVwiIGNsYXNzTmFtZT1cInNpZGUtbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvfSBhbHQ9XCJjb21wYW55IGxvZ29cIiB3aWR0aD1cIjEwMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHVsICBpZD1cIm9uLXRvcFwiIGNsYXNzTmFtZT17YG5hdmJhci1saW5rcyAkeyFuYXZBY3RpdmUgPyAnY2xpY2tlZCcgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKG5hdkxpbmspPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gIGtleT17bmF2TGluay5uYW1lICsgbmF2TGluay5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgY2xhc3NOYW1lPXtsb2NhdGlvbi5wYXRobmFtZSA9PT0gbmF2TGluay5yb3V0ZSA/ICdhY3RpdmUtbWVudScgOiAnJ30gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZMaW5rLnJvdXRlfT57bmF2TGluay5uYW1lfTwvTGluaz48L2xpPlxuXG59KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gfVxuICAgICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIEhvb2tcbmNvbnN0IHVzZU1lZGlhID0gPFQ+KHF1ZXJpZXM6IHN0cmluZ1tdLCB2YWx1ZXM6IFRbXSwgZGVmYXVsdFZhbHVlOiBUKSA9PiB7XG4gIC8vIEFycmF5IGNvbnRhaW5pbmcgYSBtZWRpYSBxdWVyeSBsaXN0IGZvciBlYWNoIHF1ZXJ5XG4gIGNvbnN0IG1lZGlhUXVlcnlMaXN0cyA9IHF1ZXJpZXMubWFwKChxKSA9PiB3aW5kb3cubWF0Y2hNZWRpYShxKSk7XG4gIC8vIEZ1bmN0aW9uIHRoYXQgZ2V0cyB2YWx1ZSBiYXNlZCBvbiBtYXRjaGluZyBtZWRpYSBxdWVyeVxuICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAvLyBHZXQgaW5kZXggb2YgZmlyc3QgbWVkaWEgcXVlcnkgdGhhdCBtYXRjaGVzXG4gICAgY29uc3QgaW5kZXggPSBtZWRpYVF1ZXJ5TGlzdHMuZmluZEluZGV4KChtcWwpID0+IG1xbC5tYXRjaGVzKTtcbiAgICAvLyBSZXR1cm4gcmVsYXRlZCB2YWx1ZSBvciBkZWZhdWx0VmFsdWUgaWYgbm9uZVxuICAgIHJldHVybiB2YWx1ZXM/LltpbmRleF0gfHwgZGVmYXVsdFZhbHVlO1xuICB9O1xuICAvLyBTdGF0ZSBhbmQgc2V0dGVyIGZvciBtYXRjaGVkIHZhbHVlXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8VD4oZ2V0VmFsdWUpO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgY2FsbGJhY2tcbiAgICAgIC8vIE5vdGU6IEJ5IGRlZmluaW5nIGdldFZhbHVlIG91dHNpZGUgb2YgdXNlRWZmZWN0IHdlIGVuc3VyZSB0aGF0IGl0IGhhcyAuLi5cbiAgICAgIC8vIC4uLiBjdXJyZW50IHZhbHVlcyBvZiBob29rIGFyZ3MgKGFzIHRoaXMgaG9vayBjYWxsYmFjayBpcyBjcmVhdGVkIG9uY2Ugb24gbW91bnQpLlxuICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldFZhbHVlKGdldFZhbHVlKTtcbiAgICAgIC8vIFNldCBhIGxpc3RlbmVyIGZvciBlYWNoIG1lZGlhIHF1ZXJ5IHdpdGggYWJvdmUgaGFuZGxlciBhcyBjYWxsYmFjay5cbiAgICAgIG1lZGlhUXVlcnlMaXN0cy5mb3JFYWNoKChtcWwpID0+IG1xbC5hZGRMaXN0ZW5lcihoYW5kbGVyKSk7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICBtZWRpYVF1ZXJ5TGlzdHMuZm9yRWFjaCgobXFsKSA9PiBtcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcikpO1xuICAgIH0sXG4gICAgW10gLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcbiAgKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTWVkaWE7IiwgIlxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIjtcblxuXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgbmF2TGlua3MgPSBbeyBuYW1lOiAnSG9tZScsIHJvdXRlOiAnLyd9LHsgbmFtZTogJ0Fib3V0Jywgcm91dGU6ICcvYWJvdXQnfSx7IG5hbWU6ICdTZXJ2aWNlcycsIHJvdXRlOiAnL3NlcnZpY2VzJ30seyBuYW1lOiAnQ29udGFjdCcsIHJvdXRlOiAnL2NvbnRhY3QnfV1cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1pbWcgbGlnaHQtbW9kZS1zdmdcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2MyNzJlMTNmMTFmZWM1ZThhODJiNjM0MmJjMTk0YjNlYjc0YjViNzIvN2NmMTAvaW1hZ2VzL2Zvb3Rlci1zd29vc2guc3ZnXCIgYWx0PVwiXCIgIC8+XG4gICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1pbWcgZGFyay1tb2RlLXN2Z1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvM2I3NTZhZTMwZWY1MWNjZDg1NjRjMjk3OGVhOGE1YTcwZjE5MzFmOC85NWRiNy9pbWFnZXMvZm9vdGVyLXN3b29zaC1kYXJrLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm91cFwiPiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtIGltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXItbG9nbyBtb2JpbGUtZGlzcGxheVwiIHNyYz17TG9nb30gYWx0PVwiYWxraSBkaWdpdGFsIHdlYiBkZXNpZ25zIGxvZ29cIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIGRlc2t0b3AtZGlzcGxheVwiIHNyYz17TG9nb30gYWx0PVwiYWxraSBkaWdpdGFsIHdlYiBkZXNpZ25zIGxvZ29cIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbVwiPmFsa2lkaWdpdGFsLndlYmRlc2lnbkBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjUwOS00ODEtNzUxMlwiPig1MDkpNDgxLTc1MTI8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+IFxuICAgICAgICAgICAgICAgICAgPGgyPk5hdmlnYXRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobmF2TGluayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIDxMaW5rIGNsYXNzTmFtZT0nbGluaycgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZMaW5rLnJvdXRlfT57bmF2TGluay5uYW1lfTwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+V2ViIERlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPldlYnNpdGUgTWFpbnRlbmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5TRU8gU2VydmljZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db250ZW50IENyZWF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+TG9nbyBEZXNpZ248L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kaW5nXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDIxIHwgQWxraSBEaWdpdGFsIFdlYiBTZXJ2aWNlcyB8IEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9idW5kbGVzLzAxYmE5NDEyNjViOGFiNTVlZmNiMWUyYzE2Y2RhOTA2MTk0NTM2OTUuY3NzXCIsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBleHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gICAgcGFyYW1zLFxuICB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICByZXR1cm4gcGFyYW1zXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICAgXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgXG4gIHJldHVybiA8U2VydmljZXMgLz5cbn1cbiIsICJcblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aDE+T3VyIFNlcnZpY2VzPC9oMT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwid2ViLWRldlwiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8wNTY4MTJmMWQxODM5MDY2NWJjMjBmMzE1YjY2Yzc5NTA2NmU1MTNmLzY4MDc0L2ltYWdlcy9jb2RlLXNjZy5zdmdcIiBhbHQ9XCJtYW4gc3RhcmluZyBhdCBhbiBvcGVuIGJyb3dzZXIgd2luZG93XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgyPldlYiBEZXNpZ24gJiBEZXZlbG9wbWVudCBEb25lIERpZmZlcmVudGx5PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IG1ha2VzIHVzIHVuaXF1ZSBpbiB0aGUgZGV2ZWxvcG1lbnQgd29ybGQgaXMgdGhhdCB3ZSBkb24ndCB1c2UgV29yZFByZXNzLCBmcmFtZXdvcmtzLCBvciBwYWdlIGJ1aWxkZXJzLiAgXG4gICAgICAgICAgICAgICAgV2UgbWV0aWN1bG91c2x5IHdyaXRlIHRoZSBjb2RlIGxpbmUgYnkgbGluZS4gIFRoaXMgZ2l2ZXMgdXMgbXVjaCBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZGVzaWduLCBcbiAgICAgICAgICAgICAgICBhbmQgdGhlIHdlYnNpdGUgcGVyZm9ybXMgbGlnaHRuaW5nIGZhc3QgYmVjYXVzZSB0aGVyZSdzIG5vIGJsb2F0ZWQgb3IgbWVzc3kgY29kZSB0aGF0IHNsb3dzIGl0IGRvd24uXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgIFdlYnNpdGVzIGJ1aWx0IGJ5IGhhbmQgd2lsbCA8c3Bhbj5vdXQtcGVyZm9ybSBtb3N0IFdvcmRQcmVzcyBzaXRlczwvc3Bhbj4gYW5kIGRyYWcgYW5kIGRyb3AgcGFnZSBidWlsZGVycyBcbiAgICAgICAgICAgICAgICB3aGljaCBjb3VsZCBjb3N0IHRob3VzYW5kcyBvZiBkb2xsYXJzLiAgV2hlbiBpdCBjb21lcyB0byB0aGUgd2ViLCB0aGUgZmFzdGVyIGFuZCBtb3JlIG9yZ2FuaXplZCB3ZWJzaXRlcyB3aW4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJwYXBlci1haXJwbGFuZS1wYXRoIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTguMDY0IDU4LjA2NFwiICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDonIzQzQjdGRid9fSBwb2ludHM9XCIxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgMjQuMDY0LDM1LjAzMiA0NC4wNjQsNDguMDMyIDU4LjA2NCwxMC4wMzIgMCwyMi4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM3MzgzQkZcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM3MzgzQkZcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMTI3LDQ4LjAzMiAxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM1NTYwODBcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM1NTYwODBcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOiAnIzNEODRENSd9fSBwb2ludHM9XCIyNC4wNjQsMzUuMDMyIDIwLjA2NCw0OC4wMzIgMzEuOTEyLDQwLjEzMyBcIiBkYXRhLW9yaWdpbmFsPVwiIzQ2NEY2NlwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjNDY0RjY2XCIvPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJzZW9cIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvODJkZmEzMWJkNzI0NWQxYzViN2JlOGZkNWI0ZWQyODFiNmMzMmQ2My8xODNkNy9pbWFnZXMvc3BlZWQuc3ZnXCIgYWx0PVwibWFuIHN0YW5kaW5nIGluIGZyb250IG9mIGEgY29tcHV0ZXJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TZWFyY2ggRW5naW5lIE9wdGltaXphdGlvbiBGb3IgMjAyMTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+SWYgc29tZW9uZSB0ZWxscyB5b3UgdGhleSBjYW4gZ2V0IHlvdSB0byB0aGUgZnJvbnQgcGFnZSBvZiBHb29nbGUgaW4gMyBtb250aHMgLSA8c3Bhbj5SVU4hPC9zcGFuPiBVbmxlc3MgeW91ciB3ZWJzaXRlIFxuICAgICAgICAgICAgICAgICAgIHdhcyBmZWF0dXJlZCBieSBUaGUgTmV3IFlvcmsgVGltZXMgaXQgY291bGQgdGFrZSB5ZWFycyB0byByYW5rIGluIHRoZSB0b3Agb2YgdGhlIHNlYXJjaCByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICBXZSBvZmZlciBhIG51bWJlciBvZiB0aGUgbGF0ZXN0IHNlYXJjaCBlbmdpbmUgb3B0aW1pemF0aW9uIHRlY2huaXF1ZXMgZm9yIDIwMjE6XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGVja21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+S2V5d29yZC1DZW50ZXJlZCBDb250ZW50ICYgQmxvZ3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPk1vYmlsZS1GaXJzdC1PcHRpbWl6ZWQgZm9yIHRoZSBCZXN0IEV4cGVyaWVuY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPkNsZWFuICYgT3JnYW5pemVkIENvZGUgU3RydWN0dXJlIEZvciBXZWIgQ3Jhd2xlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPkZ1bGx5IFJlc3BvbnNpdmUgRm9yIE1vYmlsZSwgVGFibGV0LCAmIERlc2t0b3A8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwicGFwZXItYWlycGxhbmUtcGF0aCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDU4LjA2NCA1OC4wNjRcIiAgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PHBvbHlnb24gc3R5bGU9e3tmaWxsOiAnIzQzQjdGRid9fSBwb2ludHM9XCIxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgMjQuMDY0LDM1LjAzMiA0NC4wNjQsNDguMDMyIDU4LjA2NCwxMC4wMzIgMCwyMi4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM3MzgzQkZcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM3MzgzQkZcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMTI3LDQ4LjAzMiAxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM1NTYwODBcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM1NTYwODBcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMDY0LDQ4LjAzMiAzMS45MTIsNDAuMTMzIFwiIGRhdGEtb3JpZ2luYWw9XCIjNDY0RjY2XCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiM0NjRGNjZcIi8+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiZ3JhcGhpYy1kZXNpZ25cIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYTljYjQyYTUyN2E4ZjdkMTZmMzgwNGQ4NmRjMTIyNjFjM2YzM2Y4MC81OGQ2MC9pbWFnZXMvZGVzaWduLXN2Zy5zdmdcIiBhbHQ9XCJtYW4gc3RhbmRpbmcgbmV4dCBncmFwaGljIGRpc3BsYXlcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj5Mb2dvcywgR3JhcGhpYyBEZXNpZ24sICYgQnJhbmRpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldlIGFsc28gb2ZmZXIgbG9nbyBhbmQgZ3JhcGhpYyBkZXNpZ24gc2VydmljZXMgdmlhIG91ciBvd24gaW4taG91c2UgZ3JhcGhpYyBkZXNpZ25lci4gIElmIHlvdSBoYXZlIGFuIFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBsb2dvIHRoYXQgbmVlZHMgYSB0b3VjaCB1cCBvciBuZWVkIGEgY29tcGxldGVseSBuZXcgb25lIHdlIGNhbiBoZWxwIGJ1aWxkIHlvdXIgYnVzaW5lc3MncyBicmFuZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMb2dvcyBTdGFydGluZyBhdCAkMzUwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGVzIG1heSBpbmNyZWFzZSBiYXNlZCBvbiBjb21wbGV4aXR5LCBudW1iZXIgb2YgaG91cnMsIGFuZCBudW1iZXIgb2YgcmV2aXNpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPlNvY2lhbCBNZWRpYSBHcmFwaGljczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWtlIGEgcG9zdCB0aGF0IHN0YW5kcyBvdXQgd2l0aCBpdHMgb3duIGN1c3RvbSBncmFwaGljcy4gIEdpdmUgdXMgYSBjYWxsIGZvciBwbGFucyBhbmQgcmF0ZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwidXBkYXRlc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkxpZmV0aW1lIFVwZGF0ZXMgRm9yIFlvdXIgV2Vic2l0ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkdvb2dsZSBjaGFuZ2VzIGl0cyBzZWFyY2ggYWxvZ3JpdGhtIHN0YW5kYXJkcyBldmVyeSBzbyBvZnRlbiwgY2hhbmdpbmcgd2hhdCBpcyBpbXBvcnRhbnQgdG8gcmFuay4gIEFuZCB3ZWIgXG4gICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHkgZ3VpZGVsaW5lcyBmb3IgdXNlcnMgd2l0aCBzY3JlZW4gcmVhZGVycyBnZXQgdXBkYXRlZCBhcyB3ZWxsLiAgU28gd2UgYWxzbyBpbmNsdWRlIDxzcGFuPmxpZmV0aW1lIHVwZGF0ZXM8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICB0byB5b3VyIHdlYnNpdGUgdG8gbWFrZSBzdXJlIGl0IG5ldmVyIGdvZXMgb3V0IG9mIGRhdGUgYW5kIGlzIGFsd2F5cyBjaGFuZ2luZyB3aXRoIHRoZSB0aW1lcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxnPjxwYXRoIGQ9XCJtNDA4LjA0OSAzNDAuNTIzdi0zNS42NDJjMC00LjE0NC0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0cy03LjUwNCAzLjM2LTcuNTA0IDcuNTA0djM1LjY0MmMwIDEuMzc5LTEuMTIyIDIuNTAxLTIuNTAxIDIuNTAxaC05OS43NzJjLTMuMDY2LTM1LjAxNyAxNy4yMTctNjkuMTQ3IDUxLjE3NS04Mi4yNTYgNi43NjUtMi42MTEgMTAuMzY5LTEwLjA5IDguMjA1LTE3LjAyN2wtOS43MzMtMzEuMjI4Yy0xLjEyMy0zLjYwMS0zLjcwOC02LjYyMy03LjA5MS04LjI5My0zLjM5Ny0xLjY3Ni03LjM5LTEuODg4LTEwLjk1NC0uNTc5LTMzLjkyNiAxMi40NTYtNjEuNDg3IDM3LjIzNi03Ny42MDggNjkuNzc1LTE2LjE3NiAzMi42NTItMTkuMTI2IDY5Ljc1MS04LjMwNyAxMDQuNDYyIDExLjc1MSAzNy43IDM4LjcwOCA2OC41NjcgNzQuMzkgODUuNDMtLjkzNiAzLjY5My4wMDYgNy41NzkgMi42MyAxMC40ODcgMy4wNSAzLjM5NyA3LjcwOCA0LjYxNyAxMS45NjUgMy4yNzVsNDUuMDA2LTE0LjAyOGMzLjIyMS0xLjAwMyA1LjgyOC0zLjM1OCA3LjE1NS02LjQ1OXMxLjIyOS02LjYxMy0uMjY5LTkuNjM2bC0yMC45MzQtNDIuMjRjLTIuMDE3LTQuMDctNi4wODgtNi41MTItMTAuNjMxLTYuMzkyLTQuNTQxLjEyNy04LjQ3MSAyLjgtMTAuMjU4IDYuOTc2bC0xLjAzMiAyLjQxMmMtMTkuMzQxLTkuODQ0LTMzLjkxNi0yNi45OTgtNDAuMzk2LTQ3Ljc4OC0uMTk1LS42MjYtLjM1OC0xLjI1NS0uNTM3LTEuODgyaDk2Ljk5NGM5LjY1NiAwIDE3LjUxMS03Ljg1NSAxNy41MTEtMTcuNTF6bS03NC40NiA4My4zMjFjNC44MDcgMi4wNTEgMTAuMzk0LS4yIDEyLjQ1My01LjAxNmwuMjgtLjY1NCAxNS43NCAzMS43Ni0zNC42NTcgMTAuODAyYy4wNDEtMS4zMDYtLjE5My0yLjYxOC0uNzAxLTMuODY2LS45NTEtMi4zMzgtMi43NTUtNC4xNzItNS4wNzktNS4xNjUtMzQuMDUxLTE0LjU1OC01OS44NzItNDMuMDk1LTcwLjg0My03OC4yOTQtMTkuODgtNjMuNzgxIDEzLjMzLTEzMS43NDMgNzUuNjY0LTE1NS4yNzRsOS4wNSAyOS4wMzhjLTQ2LjA5OSAxOC40MTUtNzAuNTYyIDY5LjY2NS01NS43NDQgMTE3LjIwNiA4LjMzOSAyNi43NTMgMjcuOTYxIDQ4LjQyNSA1My44MzcgNTkuNDYzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48Y2lyY2xlIGN4PVwiNTUuNDY4XCIgY3k9XCI5MS4xNDZcIiByPVwiMTQuNjMzXCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxjaXJjbGUgY3g9XCI5OS45NjlcIiBjeT1cIjkxLjE0NlwiIHI9XCIxNC42MzNcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PGNpcmNsZSBjeD1cIjE0NC40NjlcIiBjeT1cIjkxLjE0NlwiIHI9XCIxNC42MzNcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm01MDUuNTkxIDI5My45OWMtMTIuMDY4LTM4LjcxOS0zOS45MTktNjkuOTk0LTc2Ljg2LTg2LjU3OWwuMDM1LS4wODFjMS43ODctNC4xNzYgMS4wMDYtOC44NjUtMi4wMzgtMTIuMjM2LTMuMDQ0LTMuMzcyLTcuNjMtNC42MjctMTEuOTY1LTMuMjc1bC02LjcxNCAyLjA5M3YtMTQyLjAwN2MwLTkuNjU1LTcuODU1LTE3LjUxLTE3LjUxLTE3LjUxaC0yOTYuNjY0Yy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNGgyOTYuNjY0YzEuMzc5IDAgMi41MDEgMS4xMjIgMi41MDEgMi41MDF2ODEuNTQ1aC0zNzguMDMydi04MS41NDRjMC0xLjM3OSAxLjEyMi0yLjUwMSAyLjUwMS0yLjUwMWgzOC4yMjhjNC4xNDQgMCA3LjUwNC0zLjM2IDcuNTA0LTcuNTA0cy0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0aC0zOC4yMjdjLTkuNjU1LS4wMDEtMTcuNTEgNy44NTQtMTcuNTEgMTcuNTA5djI4OC42MThjMCA5LjY1NSA3Ljg1NSAxNy41MSAxNy41MSAxNy41MWgxODAuNDkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtMTgwLjQ5M2MtMS4zNzkgMC0yLjUwMS0xLjEyMi0yLjUwMS0yLjUwMXYtMTkyLjA2NWgzNzguMDMxdjUwLjEzMWwtMjMuMjg0IDcuMjU4Yy0zLjIyIDEuMDAzLTUuODI4IDMuMzU3LTcuMTU1IDYuNDU5LTEuMzI3IDMuMTAxLTEuMjI5IDYuNjEzLjI2OSA5LjYzNmwyMC45MzQgNDIuMjRjMi4wMTcgNC4wNyA2LjEwMyA2LjUxMSAxMC42MzEgNi4zOTIgNC41NDEtLjEyNyA4LjQ3MS0yLjggMTAuMjU3LTYuOTc2bC4yOTYtLjY5MmMyMC42NTMgOS41ODggMzYuMTY5IDI3LjIwOSA0Mi45NzYgNDkuMDQ3IDEyLjU4NSA0MC4zNzgtOC40MzggODMuOTI5LTQ3Ljg2MiA5OS4xNDctNi43NjMgMi42MTEtMTAuMzY3IDEwLjA5MS04LjIwNCAxNy4wMjdsOS43MzMgMzEuMjI3YzIuMTQ1IDcuNDE0IDEwLjg2OSAxMS42NzggMTguMDQ2IDguODczIDMzLjkyNS0xMi40NTYgNjEuNDg2LTM3LjIzNiA3Ny42MDctNjkuNzc1IDE2LjE3Ni0zMi42NTMgMTkuMTI2LTY5Ljc1MiA4LjMwNy0xMDQuNDYzem0tODkuOTkyIDE1OS43NC05LjA1MS0yOS4wMzljNDYuMDk5LTE4LjQxNSA3MC41NjItNjkuNjY1IDU1Ljc0NC0xMTcuMjA2LTguNzA0LTI3LjkyNC0yOS4zOTktNTAuMDMzLTU2Ljc4MS02MC42Ni00LjM5LTEuNzA1LTkuMjM5LjA0My0xMS41ODMgMy45ODhsLTE1Ljc4OS0zMS44NiAzNC4wNjEtMTAuNjE2Yy0uNDAxIDEuODYyLS4yMzEgMy43OTkuNTEzIDUuNi45NyAyLjM1IDIuODgyIDQuMjQ0IDUuMjQ0IDUuMTk2IDM1LjMwOCAxNC4yMjcgNjIuMDI3IDQzLjEzOSA3My4zMDUgNzkuMzIzIDE5Ljg4IDYzLjc4Mi0xMy4zMyAxMzEuNzQ0LTc1LjY2MyAxNTUuMjc0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTU1LjE4NyAxNjYuNzA4Yy0xMi4wNTIgMC0yMS44NTYgOS44MDUtMjEuODU2IDIxLjg1NnY3MS4zOTZjMCAxMi4wNTIgOS44MDQgMjEuODU2IDIxLjg1NiAyMS44NTZoNzEuMzk2YzEyLjA1MiAwIDIxLjg1Ni05LjgwNCAyMS44NTYtMjEuODU2di03MC43MzljMC0xMi40MTQtMTAuMDk5LTIyLjUxMy0yMi41MTMtMjIuNTEzem03OC4yNDQgMjIuNTEzdjcwLjczOWMwIDMuNzc2LTMuMDcyIDYuODQ4LTYuODQ4IDYuODQ4aC03MS4zOTZjLTMuNzc2IDAtNi44NDgtMy4wNzItNi44NDgtNi44NDh2LTcxLjM5NmMwLTMuNzc2IDMuMDcyLTYuODQ4IDYuODQ4LTYuODQ4aDcwLjc0YzQuMTM4LjAwMSA3LjUwNCAzLjM2NyA3LjUwNCA3LjUwNXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0xNzYuNDI4IDE4Ni43ODJoNTUuMTkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtNTUuMTkzYy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0xNzYuNDI4IDIyMS40ODhoNTUuMTkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtNTUuMTkzYy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PC9nPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXNpZ24gVXBkYXRlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBldmVyIHdhbnQgYSBuZXcgZGVzaWduLCB3ZSB3aWxsIHJlYnVpbGQgeW91ciB3ZWJzaXRlIGF0IG5vIGV4dHJhIGNvc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIj48Zz48Zz48Zz48cGF0aCBkPVwibTIyMC43MTYgNTEyYy01MC45NTEgMC05OS44NjgtMjEuNzE1LTEzNC4yMDgtNTkuNTc2LTIuNzg4LTMuMDc0LTIuNTU2LTcuODI3LjUxOC0xMC42MTYgMy4wNzQtMi43ODcgNy44MjYtMi41NTcgMTAuNjE1LjUxOCAzMS40OTcgMzQuNzI4IDc2LjM1NiA1NC42NDUgMTIzLjA3NSA1NC42NDUgMjYuNTczIDAgNTMuMDA5LTYuNDMxIDc2LjQ0Ny0xOC41OTYgMjIuNjY5LTExLjc2NSA0Mi42MzktMjguOTAzIDU3Ljc0OS00OS41NjIgMi40OTQtMy40MDkgMy41MTEtNy41ODQgMi44NjQtMTEuNzU3LS42NDgtNC4xNzMtMi44ODItNy44NDUtNi4yOTEtMTAuMzM5cy03LjU4OS0zLjUxNy0xMS43NTgtMi44NjRjLTQuMTc0LjY0Ny03Ljg0NSAyLjg4MS0xMC4zMzkgNi4yOS0yNS4yODUgMzQuNTY3LTY1LjkxIDU1LjIwNC0xMDguNjcyIDU1LjIwNC03NC4xODYgMC0xMzQuNTQxLTYwLjM1NS0xMzQuNTQxLTEzNC41NDEgMC0yNS42OTQgNy4yNjMtNTAuNjY2IDIxLjAwMy03Mi4yMTggMTMuMzg4LTIxIDMyLjI2OS0zNy44NjMgNTQuNjAxLTQ4Ljc2NCA1Ljc5My0yLjgyOSA5LjM2Ny05LjA4NSA4LjgyOS0xNS41MjItLjUzMy02LjM4NC01LjAxMi0xMS45MjItMTEuMTI0LTEzLjgwMi0zLjgyLTEuMTc1LTcuOTg2LS44NDYtMTEuNTc3LjkwNi0yNy41NjkgMTMuNDU4LTUwLjg3MyAzNC4yNjgtNjcuMzkzIDYwLjE4My0xNi45ODMgMjYuNjM4LTI1Ljk2MSA1Ny40ODgtMjUuOTYxIDg5LjIxOCAwIDMxLjQ3IDguODc3IDYyLjEyMSAyNS42NyA4OC42NDEgMi4yMjEgMy41MDcgMS4xNzggOC4xNDktMi4zMjggMTAuMzY5LTMuNTA2IDIuMjIyLTguMTQ4IDEuMTc5LTEwLjM2OS0yLjMyOC0xOC4zMi0yOC45MjktMjguMDAzLTYyLjM2MS0yOC4wMDMtOTYuNjgyIDAtMzQuNTk4IDkuNzkyLTY4LjI0MyAyOC4zMTctOTcuMjk4IDE4LjAxLTI4LjI1IDQzLjQxNi01MC45MzcgNzMuNDczLTY1LjYxIDcuNDAyLTMuNjEzIDE1Ljc3LTQuMTMgMjMuNTYtMS40NSA3Ljc5MSAyLjY3OSAxNC4wNzEgOC4yMzIgMTcuNjg1IDE1LjYzNSAzLjYxMyA3LjQwMiA0LjEyOSAxNS43NyAxLjQ0OSAyMy41NjEtMi42NzkgNy43OS04LjIzMSAxNC4wNy0xNS42MzQgMTcuNjg0LTE5Ljg0MiA5LjY4OC0zNi42MjEgMjQuNjc0LTQ4LjUyMSA0My4zNC0xMi4xOTkgMTkuMTMzLTE4LjY0NyA0MS4zMTEtMTguNjQ3IDY0LjEzOCAwIDY1Ljg5OSA1My42MTMgMTE5LjUxMiAxMTkuNTEyIDExOS41MTIgMzcuOTg2IDAgNzQuMDc2LTE4LjMzNiA5Ni41NDEtNDkuMDQ4IDQuODY0LTYuNjUgMTIuMDI1LTExLjAwNyAyMC4xNjYtMTIuMjY5IDguMTM1LTEuMjYzIDE2LjI4Ni43MiAyMi45MzUgNS41ODYgNi42NDkgNC44NjMgMTEuMDA2IDEyLjAyNCAxMi4yNjggMjAuMTY0IDEuMjYzIDguMTQxLS43MiAxNi4yODctNS41ODUgMjIuOTM1LTE2LjQ3MSAyMi41MTgtMzguMjQgNDEuMjAxLTYyLjk1NSA1NC4wMjgtMjUuNTY5IDEzLjI3LTU0LjM5OCAyMC4yODUtODMuMzcxIDIwLjI4NXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0yNTIuOTE2IDk2LjAyNmMtMjYuNDc1IDAtNDguMDEzLTIxLjUzOS00OC4wMTMtNDguMDE0LjAwMS0yNi40NzQgMjEuNTM5LTQ4LjAxMiA0OC4wMTMtNDguMDEyIDI2LjQ3NSAwIDQ4LjAxNCAyMS41MzggNDguMDE0IDQ4LjAxMyAwIDI2LjQ3NC0yMS41MzkgNDguMDEzLTQ4LjAxNCA0OC4wMTN6bTAtODAuOTk3Yy0xOC4xODcgMC0zMi45ODMgMTQuNzk2LTMyLjk4MyAzMi45ODMgMCAxOC4xODggMTQuNzk3IDMyLjk4NCAzMi45ODMgMzIuOTg0IDE4LjE4OCAwIDMyLjk4NC0xNC43OTcgMzIuOTg0LTMyLjk4NC4wMDEtMTguMTg2LTE0Ljc5Ni0zMi45ODMtMzIuOTg0LTMyLjk4M3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm00MzkuNTY2IDM2Ni4xNjhjLTMuMDQ4IDAtNS45MTQtMS44NjctNy4wNDItNC44OWwtMTUuMTM2LTQwLjU4MWMtNC40MjQtMTIuMDY4LTE1Ljk5Ni0yMC4xNTEtMjguODA4LTIwLjE1MmgtOTcuNDc3Yy00LjE1MSAwLTcuNTE1LTMuMzY0LTcuNTE1LTcuNTE1di03MS4xNDNjMC00LjE1MSAzLjM2NC03LjUxNSA3LjUxNS03LjUxNWg5MS4wNzFjOC43NDMgMCAxNS44NTYtNy4xMTQgMTUuODU2LTE1Ljg1N3MtNy4xMTMtMTUuODU2LTE1Ljg1Ni0xNS44NTZoLTkxLjA3MWMtNC4xNTEgMC03LjUxNS0zLjM2NC03LjUxNS03LjUxNXYtMTUuMzk5YzAtMTYuOTEzLTEzLjc1OS0zMC42NzItMzAuNjcyLTMwLjY3Mi0xNi45MTIgMC0zMC42NzEgMTMuNzU5LTMwLjY3MSAzMC42NzJ2ODEuMjIxYzAgNC4xNTEtMy4zNjQgNy41MTUtNy41MTUgNy41MTVzLTcuNTE1LTMuMzY0LTcuNTE1LTcuNTE1di04MS4yMjFjMC0yNS4yIDIwLjUwMS00NS43MDIgNDUuNzAxLTQ1LjcwMnM0NS43MDIgMjAuNTAyIDQ1LjcwMiA0NS43MDJ2Ny44ODRoODMuNTU3YzE3LjAzIDAgMzAuODg1IDEzLjg1NSAzMC44ODUgMzAuODg2cy0xMy44NTUgMzAuODg3LTMwLjg4NSAzMC44ODdoLTgzLjU1N3Y1Ni4xMTNoODkuOTYyYzE5LjA5Mi4wMDEgMzYuMzM0IDEyLjA0NCA0Mi45MDUgMjkuOTY5bDE1LjEyMSA0MC41NDFjMS40NSAzLjg4OS0uNTI2IDguMjE3LTQuNDE1IDkuNjY3LS44NjUuMzI0LTEuNzUyLjQ3Ni0yLjYyNS40NzZ6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNDQxLjU2MSA0NjEuODI4Yy00LjQyNiAwLTguODM2LS45NjQtMTIuOTctMi44OC03LjQ4NS0zLjQ3LTEzLjE3MS05LjY0Ni0xNi4wMTItMTcuMzkxbC0yNy44MzItNzQuMTAzYy00LjQzMS0xMi4wODUtMTYuMDAzLTIwLjE2Ny0yOC44MTUtMjAuMTY3aC0xMDMuMDE0Yy0yNS4yMDEgMC00NS43MDItMjAuNTAyLTQ1LjcwMi00NS43MDN2LTMwLjU1OWMwLTQuMTUxIDMuMzY0LTcuNTE1IDcuNTE1LTcuNTE1czcuNTE1IDMuMzY0IDcuNTE1IDcuNTE1djMwLjU1OWMwIDE2LjkxMyAxMy43NiAzMC42NzMgMzAuNjczIDMwLjY3M2gxMDMuMDE1YzE5LjA5MSAwIDM2LjMzNCAxMi4wNDMgNDIuOTA2IDI5Ljk2OGwyNy44MzIgNzQuMTAzYzMuMDI5IDguMjY0IDEyLjE2IDEyLjQ5MyAyMC4zNjYgOS40ODQgMy45NzctMS40NTggNy4xNDgtNC4zNzcgOC45MjktOC4yMTlzMS45NTgtOC4xNDkuNS0xMi4xMjVsLTEzLjQwNy0zNS45NDZjLTEuNDUtMy44ODguNTI2LTguMjE3IDQuNDE1LTkuNjY3IDMuODg5LTEuNDUxIDguMjE2LjUyNSA5LjY2NyA0LjQxNWwxMy40MjIgMzUuOTg1YzIuODU0IDcuNzg1IDIuNTA4IDE2LjE3My0uOTYxIDIzLjY1OHMtOS42NDUgMTMuMTcxLTE3LjM5IDE2LjAxMmMtMy40NyAxLjI3LTcuMDY2IDEuOTAzLTEwLjY1MiAxLjkwM3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PC9nPjwvZz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+V2ViIEFjY2Vzc2liaWxpdHk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5TdGF5aW5nIG9uIHRvcCBvZiB0aGUgbGF0ZXN0IGd1aWRlbGluZXMgZm9yIHdlYiBhY2Nlc3NpYmlsaXR5IGNvbXBsaWFuY2UuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiTGF5ZXJfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEycHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMnB4XCI+PGc+PHBhdGggZD1cIm0yOTguNjc1IDE2NS4wMTRjLTMyLjEyNCAyNC42ODktMzguMTczIDcwLjkxMS0xMy40ODQgMTAzLjAzNSAxMS45NDMgMTUuNTM5IDI5LjI0OSAyNS41MDEgNDguNzI5IDI4LjA1MSAzLjI0OS40MjUgNi40OTIuNjM1IDkuNzE0LjYzNSAxNi4wOTUgMCAzMS42NDUtNS4yNTEgNDQuNTkyLTE1LjIwMiAxNS41MzktMTEuOTQzIDI1LjUwMS0yOS4yNDkgMjguMDUxLTQ4LjcyOSAyLjU0OS0xOS40OC0yLjYyNC0zOC43NjctMTQuNTY2LTU0LjMwNi0yNC42OS0zMi4xMjQtNzAuOTExLTM4LjE3Mi0xMDMuMDM2LTEzLjQ4NHptMTAyLjczNSA2NS44NDRjLTIuMDMgMTUuNTA5LTkuOTU3IDI5LjI4NC0yMi4zMjEgMzguNzg2LTI1LjU3IDE5LjY1MS02Mi4zNTkgMTQuODM3LTgyLjAxLTEwLjczMy0xOS42NTEtMjUuNTY5LTE0LjgzNy02Mi4zNTggMTAuNzMzLTgyLjAxIDEwLjYwMy04LjE0OSAyMy4xMzMtMTIuMDkgMzUuNTcyLTEyLjA5IDE3LjU1OSAwIDM0LjkzNiA3Ljg1NiA0Ni40MzggMjIuODIzIDkuNTAzIDEyLjM2NSAxMy42MTggMjcuNzE1IDExLjU4OCA0My4yMjR6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtMzI1LjU1MSAxOTkuOTgzYzYuMjA4LTQuNzcxIDEzLjkxMy02Ljg0IDIxLjcxLTUuODE4IDcuNzkxIDEuMDIgMTQuNzA5IDUgMTkuNDgxIDExLjIwOSA1Ljk2NiA3Ljc2MyAxNy43NDQtMS41MTggMTEuODg5LTkuMTM3LTE0LjkwOC0xOS4zOTgtNDIuODItMjMuMDUtNjIuMjE3LTguMTQzLTcuNjY4IDUuODkzIDEuNDY4IDE3Ljc4MSA5LjEzNyAxMS44ODl6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNTExLjc5NSAxNDUuNTUxdi0uMzkyYzAtMzYuOTI5LTMwLjA0NC02Ni45NzItNjYuOTczLTY2Ljk3MmgtMzExLjg3NWMtOS42NzEgMC05LjY3MSAxNC45OTQgMCAxNC45OTRoMzExLjg3NWMyOC42NjEgMCA1MS45NzkgMjMuMzE3IDUxLjk3OSA1MS45Nzh2LjM5MmMwIDI4LjY2MS0yMy4zMTcgNTEuOTc4LTUxLjk3OSA1MS45NzhoLTIuMDUxYy0zLjQyMy0xMy4yNDMtOS40NzktMjUuNzA5LTE3Ljk4LTM2Ljc2OS0zNC40Ny00NC44NTEtOTkuMDAzLTUzLjI5Ny0xNDMuODU0LTE4LjgyNi0xOC44MTkgMTQuNDY0LTMxLjIyNiAzNC4yMjEtMzYuNzQ1IDU1LjU5NmgtMTc3LjIxOWMtMjguNjYxIDAtNTEuOTc5LTIzLjMxNy01MS45NzktNTEuOTc4di0uMzkyYzAtMjguNjYxIDIzLjMxNy01MS45NzggNTEuOTc5LTUxLjk3OGgxOC45OTNjOS42NzEgMCA5LjY3MS0xNC45OTQgMC0xNC45OTRoLTE4Ljk5M2MtMzYuOTI5LS4wMDEtNjYuOTczIDMwLjA0Mi02Ni45NzMgNjYuOTcxdi4zOTJjMCAzNi45MjkgMzAuMDQ0IDY2Ljk3MiA2Ni45NzMgNjYuOTcyaDE3NC41MDRjLTIuNjcxIDI1LjI3NCAzLjk2MSA1MS41NzEgMjAuNjM0IDczLjI2NSAxNi42OTggMjEuNzI3IDQwLjg1OCAzNS42NSA2OC4wMjggMzkuMjA2IDQuNTIyLjU5MiA5LjAzNy44ODQgMTMuNTIzLjg4NCAxNC43NDggMCAyOS4xNjgtMy4xODUgNDIuNDY1LTkuMjk3bDEzLjE0OSAxNy4xMDljLTkuMjc1IDcuMjc5LTEwLjk5MiAyMC43MjktMy43OSAzMC4wOTkgNC4yNDIgNS41MTkgMTAuNjQ5IDguNDE2IDE3LjEyNCA4LjQxNiAyLjg4MyAwIDUuNzc5LS41NzYgOC41MDQtMS43NDlsNDAuMjk0IDUyLjU3NGMyMS45MDggMjguNTA2IDY2LjgwNC01LjMxNiA0NC41NzEtMzQuMjQzbC00MC4zMDgtNTIuNTkzYzIuMzg4LTMuMDIgMy45NDYtNi42MjMgNC40NTktMTAuNTM5Ljc0Ny01LjcxMi0uNzc0LTExLjM3My00LjI4NS0xNS45NC03LjIwMS05LjM3LTIwLjYzOS0xMS4xNzItMzAuMDYxLTQuMDgzbC0xMy4xNjQtMTcuMTI4YzUuODU1LTcuMDk3IDEwLjc1Ny0xNC45NTYgMTQuNTAzLTIzLjM1NCAzLjkzOS04LjgzMi05Ljc1NC0xNC45NC0xMy42OTQtNi4xMDgtNS44NzkgMTMuMTc5LTE1LjA3NyAyNC44MjYtMjYuNjAxIDMzLjY4My0xOC41NTEgMTQuMjU3LTQxLjU0NiAyMC40MzgtNjQuNzQ0IDE3LjQwMS0yMy4xOTktMy4wMzYtNDMuODI4LTE0LjkyNS01OC4wODUtMzMuNDc2LTI5LjQzMy0zOC4yOTYtMjIuMjIyLTkzLjM5NiAxNi4wNzQtMTIyLjgyOXM5My4zOTYtMjIuMjIxIDEyMi44MjkgMTYuMDc1YzExLjA0NCAxNC4zNyAxNy4yOTEgMzEuNSAxOC4wNjYgNDkuNTM4LjQxNiA5LjY2MSAxNS4zOTUgOS4wMTkgMTQuOTgtLjY0My0uMDkxLTIuMTA3LS4yNjMtNC4yLS40OC02LjI4NCAzNi42MzItLjM1MSA2Ni4zMjctMzAuMjQ1IDY2LjMyNy02Ni45NTZ6bS0xNS4xMDYgMjYyLjA1NWMtMS40NzIgMTEuMjQ5LTE2LjQ2MiAxNS4zMDUtMjMuMzg2IDYuMjk1bC0zOS44OTYtNTIuMDU1IDIwLjc4OC0xNS45NzcgMzkuODkgNTIuMDQ4YzIuMTMzIDIuNzc2IDMuMDU4IDYuMjE3IDIuNjA0IDkuNjg5LS40NTUgMy40NzIuNDU0LTMuNDcyIDAgMHptLTQyLjczMy04OC43NTRjMi4xODUgMi44NDMgMS42MzcgNy4wMzEtMS4yMDYgOS4yMTZsLTM2LjE1OSAyNy43OTFjLTIuODczIDIuMjA3LTcuMDA4IDEuNjY3LTkuMjE3LTEuMjA2cy0xLjY2Ny03LjAwOCAxLjIwNi05LjIxN2wzNi4xNTktMjcuNzljMi44NzMtMi4yMDggNy4wMDktMS42NjggOS4yMTcgMS4yMDZ6bS00Ny45OTEtMTQuMjM4YzIuMTI3LTEuNjM1IDQuMTc4LTMuMzYgNi4xNjYtNS4xNTJsMTEuMTY2IDE0LjUyOS0xMi43MyA5Ljc4NC0xMS4xNTktMTQuNTJjMi4yMzEtMS40NTcgNC40MjEtMyA2LjU1Ny00LjY0MXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm02Ni40NzMgMTQ2LjQ0N2MwIDQuMTQgMy4zNTcgNy40OTcgNy40OTcgNy40OTdoMTM4Ljk0NGM5LjY3MSAwIDkuNjcxLTE0Ljk5NCAwLTE0Ljk5NGgtMTM4Ljk0NGMtNC4xNCAwLTcuNDk3IDMuMzU3LTcuNDk3IDcuNDk3elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIEVuZ2luZSBVcGRhdGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciB3ZWJzaXRlIHdpbGwgc3RheSB1cCB0byBkYXRlIHdpdGggR29vZ2xlJ3Mgc2VhcmNoIGd1aWRlbGluZXMgZm9yIHJhbmtpbmcuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiAgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwNy41MjcsMjA4LjE3OWMtMC45MDgtNC43ODItNS4wODgtOC4yNDItOS45NTUtOC4yNDJIMjYxLjQwNGMtNS41OTYsMC0xMC4xMzIsNC41MzYtMTAuMTMyLDEwLjEzMnY5Ny4yNjYgICAgYzAsNS41OTYsNC41MzYsMTAuMTMyLDEwLjEzMiwxMC4xMzJoMTE1Ljk2N2MtMTEuNzUyLDIzLjE0OS0zMC4wNjUsNDIuNy01Mi42NzEsNTUuOTU4Yy0yMC43MjksMTIuMTY4LTQ0LjQ4NSwxOC41OTktNjguNywxOC41OTkgICAgYy01Ni40MTcsMC0xMDcuNjE1LTM1LjQ3OS0xMjcuNDA0LTg4LjI5NmMtNS43Mi0xNS4yMTMtOC42Mi0zMS4yNzEtOC42Mi00Ny43MjljMC0xNS4xMzQsMi40NzEtMzAuMDA5LDcuMzQtNDQuMjA2ICAgIGMxOC44NzEtNTQuOTE5LDcwLjU4Ni05MS44MTgsMTI4LjY4NS05MS44MThjMjUuNTI4LDAsNTAuMzk4LDcuMTEsNzEuOTE2LDIwLjU2MWMzLjY4NCwyLjMwMyw4LjQyNywyLjAwMSwxMS43ODgtMC43NTIgICAgbDc5LjY1LTY1LjIwOWMyLjM0MS0xLjkxNywzLjcwMy00Ljc4LDMuNzE0LTcuODA0YzAuMDExLTMuMDI2LTEuMzMyLTUuODk3LTMuNjYtNy44M0MzNzMuNjMyLDIwLjkzMywzMTUuNTk5LDAsMjU2LDAgICAgQzExNC44NDEsMCwwLDExNC44NDEsMCwyNTZjMCw0Mi4zNDUsMTAuNTUyLDg0LjI5OSwzMC41MTYsMTIxLjMyNkM3NS4zMDcsNDYwLjM5NiwxNjEuNzA4LDUxMiwyNTYsNTEyICAgIGM1OS4wMDQsMCwxMTYuNTg2LTIwLjU1NiwxNjIuMTM5LTU3Ljg3OWM0NC45MjItMzYuODA3LDc2LjI2OS04OC4xOSw4OC4yNjEtMTQ0LjY3N2MzLjcxNS0xNy40NDksNS42LTM1LjQzMSw1LjYtNTMuNDQ1ICAgIEM1MTIsMjM5LjkwNiw1MTAuNDk1LDIyMy44MTcsNTA3LjUyNywyMDguMTc5eiBNMjU2LDIwLjI2NGM1MC43NDYsMCwxMDAuMjU3LDE2LjQ3NywxNDAuNzUzLDQ2LjYyOGwtNjQuNCw1Mi43MjQgICAgYy0yMy4yNC0xMy4wNDMtNDkuNDgyLTE5LjkwNC03Ni4zNTMtMTkuOTA0Yy02MS45MzQsMC0xMTcuNTMsMzYuNTExLTE0Mi41NTUsOTIuMTg0bC02Mi44NDktNTEuNDU0ICAgIEM5MS4wNzksNjguNzY3LDE2Ny45NzcsMjAuMjY0LDI1NiwyMC4yNjR6IE0yMC4yNjQsMjU2YzAtMzQuNTg1LDcuNDg4LTY3LjQ1MywyMC45MjQtOTcuMDcxbDY0LjgxOSw1My4wNjcgICAgYy00LjE3MywxNC4yNTEtNi4yOTUsMjkuMDE4LTYuMjk1LDQ0LjAwNGMwLDE2LjQzLDIuNTI1LDMyLjUyMyw3LjUwMiw0Ny45NGwtNjQuNDEyLDUyLjcyNyAgICBDMjguMDQxLDMyNS4zOSwyMC4yNjQsMjkwLjg0OCwyMC4yNjQsMjU2eiBNMjU2LDQ5MS43MzZjLTg0LjA1LDAtMTYxLjI5MS00NC41MzItMjAzLjU2NS0xMTYuNzY4bDYyLjY3NS01MS4zMDUgICAgYzExLjUwNCwyMy45ODYsMjguODg3LDQ0LjU5Nyw1MC44ODksNjAuMTIyYzI2LjQyNywxOC42NDcsNTcuNTQ5LDI4LjUwNCw5MCwyOC41MDRjMjUuNDI0LDAsNTAuNDExLTYuMTk3LDcyLjcxOS0xNy45NCAgICBsNjQuODU0LDUzLjA5M0MzNTMuNjg5LDQ3Ni4wOTcsMzA1LjM4OCw0OTEuNzM2LDI1Niw0OTEuNzM2eiBNNDg2LjU4MSwzMDUuMjNjLTEwLjYzLDUwLjA2Ny0zNy43ODcsOTUuNzc1LTc2LjcxNCwxMjkuMzYyICAgIGwtNjIuOTE3LTUxLjUwOGMyNS4xMTgtMTguMDE2LDQ0LjU1Mi00My4yMDgsNTUuNDE0LTcyLjE5NWMxLjE2Ni0zLjExMSwwLjczMi02LjU5Ny0xLjE2LTkuMzI3ICAgIGMtMS44OTMtMi43My01LjAwNS00LjM1OS04LjMyNy00LjM1OUgyNzEuNTM2di03Ny4wMDNoMjE3LjQ5M2MxLjc5OCwxMS43OCwyLjcwNywyMy43ODYsMi43MDcsMzUuNzk5ICAgIEM0OTEuNzM2LDI3Mi41OTksNDkwLjAwMiwyODkuMTYxLDQ4Ni41ODEsMzA1LjIzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Hb29nbGUgQnVzaW5lc3MgUHJvZmlsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIGFsc28gaGVscCBvcHRpbWl6ZSBhbmQgbWFuYWdlIHlvdXIgR29vZ2xlLCBCaW5nLCAmIFlhaG9vIEJ1c2luZXNzIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZCArIEJsb2dnaW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TVEFSVElORyBBVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MzAwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDEwMDArIFdvcmQgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFdyaXR0ZW4gQnkgYW4gU0VPIFNwZWNpYWxpc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAxIFBvc3QgUGVyIE1vbnRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gJDE1MCBQZXIgRXh0cmEgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj41IFBBR0VTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4xNTA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gVW5saW1pdGVkIEVkaXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gSW5jbHVkZXMgSG9zdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDI0LzcgQ3VzdG9tZXIgU2VydmljZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IExpZmV0aW1lIFVwZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5Mb2dvcyAmIEdyYXBoaWMgRGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5JTkNMVURFRCE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMiByZXZpc2lvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBBbGwgRmlsZSBGb3JtYXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gUmVhZHkgdG8gdXNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gRlJFRSB3LyBTdWJzY3JpcHRpb248L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7IiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3QnXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvMWRkMTFhMDc4NjZjNTQ2N2E5NzQ0ZjYzNWRiMjRjYmU2ZTZiNmRkMi5jc3NcIixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgcmV0dXJuIDxDb250YWN0IC8+XG59XG4iLCAiXG5cblxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgXG5cbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuICAgXG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGlkPVwidmFsbGV5LWZvcm1cIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncm91cFwiPlxuICAgICAgICAgICAgPHA+RW1haWw6PC9wPlxuICAgICAgICAgICAgPHA+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyb3VwXCI+XG4gICAgICAgICAgICA8cD5QaG9uZTo8L3A+XG4gICAgICAgICAgICA8cD4oNTA5KSA0ODEtNzUxMjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL3N1Ym1pdC1mb3JtLmNvbS9OdXRnOTEwRVwiICBpZD0nY29udGFjdCcgbmFtZT0nQ09OVEFDVCBGT1JNJz48aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdmb3JtLW5hbWUnIHZhbHVlPSdmb3JtJy8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXRvcHBlclwiPjxzcGFuPkRST1A8L3NwYW4+IFVTIEEgTElORTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHRhYkluZGV4PXsxfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkJ1c2luZXNzXCIgdHlwZT1cInRleHRcIiB0YWJJbmRleD17Mn0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiB0YWJJbmRleD17M30gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwicGhvbmUgbnVtYmVyXCIgbmFtZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGVsXCIgdGFiSW5kZXg9ezR9cmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBhcmlhLWxhYmVsPVwid3JpdGUgeW91ciBtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBNZXNzYWdlIEhlcmUuLi4uXCIgdGFiSW5kZXg9ezV9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29udGFjdC1zdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5IGJ1dHRvbi1zb2xpZFwiIGRhdGEtc3VibWl0PVwiLi4uU2VuZGluZ1wiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvbWFpbj5cblxuICBcbilcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWJvdXQnXG5pbXBvcnQgQWJvdXRTdHlsZXMgZnJvbSAnLi4vLi4vYXNzZXRzL3N0eWxlcy9hYm91dC5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYnVuZGxlcy9iZjYyZTdhNzg3MWQ5NDBjM2M2ZGYxODdlYWU5MjU4NjM2Mjk5ZWQ0LmNzc1wiLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPEFib3V0IC8+XG59XG4iLCAiXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICBcbiAgICBcblxuICBcblxuICAgIDxzZWN0aW9uIGlkPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkFsa2kgRGlnaXRhbCBXZWIgU2VydmljZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyPkdpdmluZyBTbWFsbCBCdXNpbmVzc2VzIFRoZSBCaWcgQnVzaW5lc3MgVHJlYXRtZW50PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5NeSBuYW1lIGlzIEFsZXgsIEknbSB0aGUgb3duZXIgYW5kIHNvbGUgZGV2ZWxvcGVyIG9mIEFsa2kgRGlnaXRhbC4gQWZ0ZXIgd29ya2luZyBpbiB0aGUgdGVjaCBpbmR1c3RyeSBmb3IgYSBsaXR0bGUgb3ZlciA0IHllYXJzIEkgbGF1bmNoZWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBidXNpbmVzcyBhcyBhIHdheSBmb3IgbWUgdG8gc2VydmUgc21hbGwgYnVzaW5lc3NlcyB3aGlsZSBidWlsZGluZyBteSBvd24uIE15IGdvYWwgaXMgdG8gYnVpbGQgYSBjb21wYW55IHRoYXQgY2FuIGZvc3RlciBjb21tdW5pdHksIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBhIHNhZmUgc3BhY2UgZm9yIGluZHVzdHJ5IHByb2Zlc3Npb25hbHMgdG8gaGFybmVzcyB0aGVpciBza2lsbHMgdG8gYnVpbGQgY2FyZWVycyBvZiB0aGVpciBvd24uIFxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICBBIGxvdCBvZiBzbWFsbCBidXNpbmVzc2VzIGRvbid0IGhhdmUgdGhlIGZ1bmRzIHRvIHNwZW5kIHRob3VzYW5kcyBvZiBkb2xsYXJzIHVwZnJvbnQgb24gYSBuZXcgd2Vic2l0ZS5cbiAgICAgICAgICAgICAgICBUaGUgb25lcyB0aGF0IGRvLCBnZXQgdGFrZW4gYWR2YW50YWdlIG9mIGFuZCBoYXZlIGEgdGVycmlibGUgd2Vic2l0ZSB0aGF0IGxvb2tzIGxpa2UgaXQgd2FzIGJ1aWx0IGJ5IHNvbWVvbmUgaW4gYSBkdW5nZW9uIFxuICAgICAgICAgICAgICAgIGFuZCBoYXZlbid0IHNlZW4gZGVzaWduIHRyZW5kcyBmb3IgdGhlIGxhc3QgMTAgeWVhcnMuIEEgbG90IG9mIGJ1c2luZXNzZXMgYXJlIGluIGEgdG91Z2ggc3BvdCAtIHRoZXkgZWl0aGVyIGNhbid0IGFmZm9yZCBhIGdvb2Qgd2Vic2l0ZSwgYW5kIFxuICAgICAgICAgICAgICAgIGlmIHRoZXkgY2FuIHRoZXkgZG9uJ3Qga25vdyB3aG8gdG8gdHJ1c3QgdG8gbWFrZSBzb21ldGhpbmcgZ3JlYXQuIFRoYXQncyB3aGVyZSB0aGUgJDAgZG93biBhbmQgJDEwMCBhIG1vbnRoIG1vZGVsIGNvbWVzIGluLiAgXG4gICAgICAgICAgICAgICAgSXQncyBtb3JlIG1hbmFnYWJsZSBmb3IgYSBzbWFsbCBidXNpbmVzcyB0byBoYW5kbGUgYW5kIHdvbid0IGh1cnQgdGhlaXIgYmFuayBhY2NvdW50cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImNpcmNsZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuPlF1YWxpdHkgPC9zcGFuPiBPdmVyIFF1YW50aXR5PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZSBmb2N1cyBvbiB0aGUgbmVlZHMgb24gZWFjaCBpbmRpdmlkdWFsIGJ1c2luZXNzIGFuZCB0YWlsb3IgY29udGVudCBhcm91bmQgd2hhdCBtYWtlcyBpdCB1bmlxdWUuIE91ciBjb2xsYWJvcmF0aXZlIHByb2Nlc3MgaXMgdmVyeSBoYW5kcyBvbiBcbiAgICAgICAgICAgICAgICAgICAgYXMgd2Ugd29yayBjbG9zZWx5IHdpdGggeW91IHRvIGNyZWF0ZSBhIHdlYnNpdGUgeW91J3JlIDEwMCUgaGFwcHkgd2l0aCBhbmQgbm90IHNvbWV0aGluZyB5b3UganVzdCBzZXR0bGUgZm9yLiBcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjE8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5ObyBQcmUtV3JpdHRlbiBDb250ZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2Ugd3JpdGUgdW5pcXVlIGFuZCBlbmdhZ2luZyBjb250ZW50IGFyb3VuZCB5b3VyIGNvbXBhbnkuICBFdmVyeW9uZSBpcyB1bmlxdWUhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjI8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5VbmJlYXRhYmxlIEN1c3RvbWVyIFNlcnZpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5ObyBhdXRvbWF0ZWQgc3lzdGVtcyAtIFdoZW4geW91IG5lZWQgaGVscCB0aGUgbGVhZCBkZXZlbG9wZXIgYW5zd2VycyB5b3VyIGNhbGwuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjM8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5ObyBMaW1pdHMgT24gRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2UgY2FuIGVkaXQgdGhlIGRlc2lnbiB0byBjYXRlciB0byB5b3VyIHRhc3Rlcy4gIEV2ZXJ5dGhpbmcgaXMgY3VzdG9taXphYmxlITwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgYWJvdXQtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIE9VUiBTRVJWSUNFU1xuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dC1jb250YWN0XCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWNvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJjb250YWN0LWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QaG9uZTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+KDUwOSkgNDgxLTc1MTI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJjb250YWN0LWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbWFpbDo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9zdWJtaXQtZm9ybS5jb20vTnV0ZzkxMEVcIiBpZD0nY29udGFjdCcgbWV0aG9kPSdwb3N0JyBuYW1lPSdBQk9VVCBGT1JNJz48aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdmb3JtLW5hbWUnIHZhbHVlPSdDb250YWN0IEZvcm0nIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXRvcHBlclwiPjxzcGFuPkRST1A8L3NwYW4+IFVTIEEgTElORTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdGFiSW5kZXg9ezF9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiB0YWJJbmRleD17Mn0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwicGhvbmUgbnVtYmVyXCIgbmFtZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lIE51bWJlclwiIHR5cGU9XCJ0ZWxcIiB0YWJJbmRleD17M31yZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGFyaWEtbGFiZWw9XCJ3cml0ZSB5b3VyIG1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIE1lc3NhZ2UgSGVyZS4uLi5cIiB0YWJJbmRleD17NH0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNjcmlwdCBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcyc+PC9zY3JpcHQ+XG48ZGl2IGNsYXNzTmFtZT0nZy1yZWNhcHRjaGEnIGRhdGEtc2l0ZWtleT0nNkxkQXZVSVVBQUFBQUhqcmptanROVGNYeUttMFdLd2VmTHAtZFF2OSc+PC9kaXY+XG48bm9zY3JpcHQ+XG48ZGl2PlxuPGRpdiBzdHlsZT17e3dpZHRoOiAzMDIsIGhlaWdodDogNDIyLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG48ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMiwgaGVpZ2h0OiA0MjIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5cblxuey8qIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL2ZhbGxiYWNrP2s9NkxkQXZVSVVBQUFBQUhqcmptanROVGNYeUttMFdLd2VmTHAtZFF2OVwiIGZyYW1lQm9yZGVyPXswfSBzY3JvbGxpbmc9XCJub1wiXG5zdHlsZT17e3dpZHRoOiAzMDIsIGhlaWdodDogNDIyLCBib3JkZXJTdHlsZTogXCJub25lXCJ9fT5cblxuPC9pZnJhbWU+ICovfVxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgc3R5bGU9e3t3aWR0aDogMzAwLCBoZWlnaHQ6IDYwLCBib3JkZXJTdHlsZTogJ25vbmUnLCBib3R0b206IDEyLCBsZWZ0OiAyNSwgbWFyZ2luOiAwLCBwYWRkaW5nOiAwLCByaWdodDogMjUsIGJhY2tncm91bmQ6ICcjZjlmOWY5JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjMWMxYzEnLCBib3JkZXJSYWRpdXM6IDN9fT5cbjx0ZXh0YXJlYSBpZD1cImctcmVjYXB0Y2hhLXJlc3BvbnNlXCIgbmFtZT1cImctcmVjYXB0Y2hhLXJlc3BvbnNlXCIgY2xhc3NOYW1lPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIlxuICBzdHlsZT17e3dpZHRoOiAyNTAsIGhlaWdodDogNDAsIGJvcmRlcjogJzFweCBzb2xpZCAjYzFjMWMxJywgbWFyZ2luOiAnMTBweCAyNXB4JywgcGFkZGluZzogMCwgcmVzaXplOiAnbm9uZSd9fSA+XG48L3RleHRhcmVhPlxuPC9kaXY+XG48L2Rpdj5cbjwvbm9zY3JpcHQ+XG48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbnRhY3Qtc3VibWl0XCIgY2xhc3NOYW1lPVwicHJpbWFyeSBidXR0b24tc29saWRcIiBkYXRhLXN1Ym1pdD1cIi4uLlNlbmRpbmdcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbjwvbWFpbj5cbilcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYnVuZGxlcy81MzFhYTA4YTE2MTlhMjZkZjY2M2Y3ODYwOWMyOGRhOTA1MzE1NjQ1LmNzc1wiLCAgIFxuXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgcmV0dXJuIDxNYWluIC8+XG59XG4iLCAiXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgIFxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImxhbmRpbmdcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5TbWFsbCBCdXNpbmVzcyBXZWIgRGVzaWduICsgRGV2ZWxvcG1lbnQ8L2gxPlxuICAgICAgICAgICAgPGgyPk5vIHBhZ2UgYnVpbGRlcnMgb3IgV29yZFByZXNzIC0gV2Ugb2ZmZXIgMTAwJSBoYW5kLWNvZGVkIHdlYnNpdGVzIHdpdGggc3VwZXJpb3IgcmVzdWx0cyBzdGFydGluZyBhdCAkMTUwL21vLjwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBxdW90ZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICBHRVQgSU4gVE9VQ0ghXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9jay11cCBkZXNrdG9wLWRpc3BsYXlcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzgxZmYzYjlhZDMxYzQ0YWUxZTVkM2FmMmYwZDYzNjRkNjBlZGVlODUvMmYxNWYvaW1hZ2VzL21vY2stdXAtcmVwbGFjZS5wbmdcIiBhbHQ9XCJtb2NrdXAgb2YgYSB3ZWJzaXRlIG9uIGNvbXB1dGVyIGRlc2t0b3AgYW5kIHBob25lXCIvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2NrLXVwIG1vYmlsZS1kaXNwbGF5XCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC85ZTU0ODIxODNjMDhkOThmYzQzYTU2ZmExYzlhN2YxYTBmNjFhMjA3L2EzYjdjL2ltYWdlcy9tb2NrLXVwLW1vYmlsZS1yZXBhY2UucG5nXCIgYWx0PVwiYSBtb2NrdXAgb2YgYSB3ZWJzaXRlIG9uIGNvbXB1dGVyIGRlc2t0b3AgYW5kIHBob25lXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJzd29vcCBsaWdodC1zd29vcFwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMjVlOTRlYWJiMWNkZWMyNjEzYmQyNjVkNjQ1ZGMxNTMyNGJhY2ZlOC84NmY0NS9pbWFnZXMvbGFuZGluZy1zd29vc2guc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJzd29vcCBkYXJrLXN3b29wIFwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMmM0OTkyNjlhNGEzM2ZiYmZjYTI4MDEwZGI4ZmRiYjY2OGEyM2MxYy9iZWJhNi9pbWFnZXMvbGFuZGluZy1zd29vc2gtZGFyay5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cIndoYXQtd2UtZG9cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC10b3BwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC13ZS1kby10b3BwZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XSEFUIDwvc3Bhbj4gV0UgRE9cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JhcGhpYy1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzI5MDQ4ZDllZmU4OTI1MjM5OTEyMmNkMjQ4N2YyNTNkY2JlOWJjYzQvY2Y4YTUvaW1hZ2VzL2NvZGUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+V2Ugc3BlY2lhbGl6ZSBpbiBzbWFsbCBidXNpbmVzcyB3ZWIgZGVzaWduIGFuZCBkZXZlbG9wbWVudCBmb3IgY2xpZW50cyBhbnl3aGVyZSBpbiB0aGUgVVMuIEV2ZXJ5IGxpbmUgb2YgY29kZSBpcyB3cml0dGVuIGJ5IGhhbmQgdG8gZW5zdXJlIHRoZSBiZXN0IHBlcmZvcm1hbmNlLCB3aGljaCBoZWxwcyBicmluZyBpbiBtb3JlIGN1c3RvbWVycyB0byB5b3VyIHNpdGUgYW5kIGJyaW5nIG1vcmUgcmV2ZW51ZSB0byB5b3VyIGJ1c2luZXNzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LXdlLWRvLWNvbnRlbnQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNTEycHRcIiB2aWV3Qm94PVwiLTExIDAgNTEyIDUxMi4wMDFcIiB3aWR0aD1cIjUxMnB0XCI+PHBhdGggZD1cIm0yNjEuNDM3NSA1MTEuNDQxNDA2IDEzOC44NTE1NjItNTQuOTQxNDA2YzU0Ljc2NTYyNi00NC45Mjk2ODggODkuNzEwOTM4LTExMy4xMzI4MTIgODkuNzEwOTM4LTE4OS41IDAtMTM1LjMwODU5NC0xMDkuNjkxNDA2LTI0NS0yNDUtMjQ1cy0yNDUgMTA5LjY5MTQwNi0yNDUgMjQ1YzAgMTM1LjMxMjUgMTA5LjY5MTQwNiAyNDUgMjQ1IDI0NSA1LjUyNzM0NCAwIDExLjAwMzkwNi0uMTk5MjE5IDE2LjQzNzUtLjU1ODU5NHptMCAwXCIgZmlsbD1cIiMyN2EzZmZcIi8+PHBhdGggZD1cIm0zODguNzQyMTg4IDMxOC45NDkyMTljMS45NTMxMjQtMjMuNjQ0NTMxLTEuNjQ4NDM4LTQ3LjMzNTkzOC0xMi4xMTcxODgtNjguNjI4OTA3LTI3LjA0Mjk2OS01NS4wMTE3MTgtMjAuODM5ODQ0LTU5LjAwMzkwNi0yMS42Nzk2ODgtMTEzLjYwMTU2MiAwLTExLjE1NjI1LTkuMDQyOTY4LTIwLjE5NTMxMi0yMC4xOTUzMTItMjAuMTk1MzEyLTExLjE1NjI1IDAtMjAuMTk1MzEyIDkuMDM5MDYyLTIwLjE5NTMxMiAyMC4xOTUzMTIgMCA3LjIwMzEyNSAwIDIwMy44MzIwMzEgMCAyMDMuMDYyNSAwIDMuMTQ4NDM4LS4zMzU5MzggNi4yMjI2NTYtLjk1NzAzMiA5LjE4NzV2MjkuMDcwMzEyYzAgMjQuNDk2MDk0LTE5LjkyOTY4NyA0NC40Mjk2ODgtNDQuNDI1NzgxIDQ0LjQyOTY4OC0xNi4yNjk1MzEgMC03Mi4zNzUgMC0xMTAuNTUwNzgxIDAgMTYuOTgwNDY4IDIzLjYxNzE4OCA0MC4yMTQ4NDQgNDIuMTEzMjgxIDY3LjE3OTY4NyA1My4zMTI1LjE2Nzk2OS4wNjY0MDYuMzM1OTM4LjEzNjcxOS41MDM5MDcuMjA3MDMxIDE2LjIyMjY1NiA2Ljg1NTQ2OSAyOC42MDkzNzQgMTkuNzgxMjUgMzUuMTMyODEyIDM1LjQ1MzEyNSA1Mi41MzUxNTYtMy40ODA0NjggMTAwLjU0Njg3NS0yMy41MDc4MTIgMTM4Ljg1MTU2Mi01NC45Mzc1bC0xNS4wNTA3ODEtNTUuMjkyOTY4Yy0yLjE0ODQzNy03LjkwMjM0NC0yLjkwNjI1LTE2LjExNzE4OC0yLjIzODI4MS0yNC4yNzczNDR6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtODMuNjA5Mzc1IDExNy4yMzA0NjktNi4xNTIzNDQtNS42OTkyMTljLTkuNDgwNDY5LTguNzg5MDYyLTI0LjQyOTY4Ny04LjIxODc1LTMzLjIxNDg0MyAxLjI2NTYyNS04Ljc4NTE1NyA5LjQ4MDQ2OS04LjIxNDg0NCAyNC40Mjk2ODcgMS4yNjU2MjQgMzMuMjE0ODQ0bDM4LjEwMTU2MyAzNS4zMDQ2ODd6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMjg1LjYyMTA5NCAwaC0xNzIuNzE0ODQ0Yy0xNi43NTc4MTIgMC0zMC4zOTA2MjUgMTMuNjM2NzE5LTMwLjM5MDYyNSAzMC4zOTQ1MzF2MzYzLjk4MDQ2OWMwIDE2Ljc1NzgxMiAxMy42MzI4MTMgMzAuMzk0NTMxIDMwLjM5MDYyNSAzMC4zOTQ1MzFoMTcyLjcxNDg0NGMxNi43NTc4MTIgMCAzMC4zOTQ1MzEtMTMuNjM2NzE5IDMwLjM5NDUzMS0zMC4zOTQ1MzF2LTM2My45ODA0NjljMC0xNi43NTc4MTItMTMuNjM2NzE5LTMwLjM5NDUzMS0zMC4zOTQ1MzEtMzAuMzk0NTMxem0wIDBcIiBmaWxsPVwiIzNkNGVjNlwiLz48cGF0aCBkPVwibTE0MS4wMzUxNTYgMjIuNTM5MDYyYy0xLjY0NDUzMS0yLjQ0NTMxMi0yLjYwNTQ2OC01LjM4NjcxOC0yLjYwNTQ2OC04LjU1NDY4NyAwLTYuMjE4NzUgMy43MDMxMjQtMTEuNTYyNSA5LjAxNTYyNC0xMy45ODQzNzVoLTM0LjUzOTA2MmMtMTYuNzg1MTU2IDAtMzAuMzk0NTMxIDEzLjYwOTM3NS0zMC4zOTQ1MzEgMzAuMzk0NTMxdjM2My45ODA0NjljMCAxNi43ODUxNTYgMTMuNjA5Mzc1IDMwLjM5MDYyNSAzMC4zOTQ1MzEgMzAuMzkwNjI1aDM2LjcxODc1di0zNzUuNTg5ODQ0YzAtOS41NTg1OTMtMy4yNTM5MDYtMTguNzAzMTI1LTguNTg5ODQ0LTI2LjYzNjcxOXptMCAwXCIgZmlsbD1cIiMyYjM4OTRcIi8+PHBhdGggZD1cIm0xMDAuMTA5Mzc1IDE5MS45NzY1NjJ2MjAyLjM5ODQzOGMwIDcuMDcwMzEyIDUuNzMwNDY5IDEyLjgwMDc4MSAxMi43OTY4NzUgMTIuODAwNzgxaDE3Mi43MTQ4NDRjNy4wNjY0MDYgMCAxMi43OTY4NzUtNS43MzA0NjkgMTIuNzk2ODc1LTEyLjgwMDc4MSAwLTYuOTQ1MzEyIDAtMTA4LjMzNTkzOCAwLTIwMi4zOTg0Mzh6bTAgMFwiIGZpbGw9XCIjZTZmN2ZlXCIvPjxwYXRoIGQ9XCJtMTAwLjEwOTM3NSAxOTEuOTc2NTYydjIwMi4zOTg0MzhjMCA3LjA3MDMxMiA1LjczMDQ2OSAxMi44MDA3ODEgMTIuNzk2ODc1IDEyLjgwMDc4MWgzMC4yNzM0Mzh2LTIxNS4xOTkyMTl6bTAgMFwiIGZpbGw9XCIjZDVmMWZlXCIvPjxwYXRoIGQ9XCJtMTY5LjY3NTc4MSAyNTMuMDMxMjVjMCAxMS4wNzQyMTktOC45NzY1NjIgMjAuMDUwNzgxLTIwLjA1MDc4MSAyMC4wNTA3ODFzLTIwLjA1MDc4MS04Ljk3NjU2Mi0yMC4wNTA3ODEtMjAuMDUwNzgxIDguOTc2NTYyLTIwLjA1NDY4OCAyMC4wNTA3ODEtMjAuMDU0Njg4IDIwLjA1MDc4MSA4Ljk4MDQ2OSAyMC4wNTA3ODEgMjAuMDU0Njg4em0wIDBcIiBmaWxsPVwiIzNkNGVjNlwiLz48cGF0aCBkPVwibTE2OS42NzU3ODEgMzI3LjM4MjgxMmMwIDExLjA3NDIxOS04Ljk3NjU2MiAyMC4wNTQ2ODgtMjAuMDUwNzgxIDIwLjA1NDY4OHMtMjAuMDUwNzgxLTguOTgwNDY5LTIwLjA1MDc4MS0yMC4wNTQ2ODhjMC0xMS4wNzQyMTggOC45NzY1NjItMjAuMDUwNzgxIDIwLjA1MDc4MS0yMC4wNTA3ODFzMjAuMDUwNzgxIDguOTc2NTYzIDIwLjA1MDc4MSAyMC4wNTA3ODF6bTAgMFwiIGZpbGw9XCIjM2Q0ZWM2XCIvPjxwYXRoIGQ9XCJtMTQ3LjM1OTM3NSAyMzMuMTEzMjgxYy0xMC4wMDc4MTMgMS4xMjg5MDctMTcuNzg1MTU2IDkuNjA5Mzc1LTE3Ljc4NTE1NiAxOS45MTc5NjkgMCAxMS4wNzQyMTkgOC45NzY1NjIgMjAuMDUwNzgxIDIwLjA1MDc4MSAyMC4wNTA3ODEgNi45MDYyNSAwIDEyLjk5MjE4OC0zLjQ5MjE4NyAxNi41OTc2NTYtOC44MDQ2ODctMTcuMjg5MDYyIDEuOTQ5MjE4LTI4LjI5Njg3NS0xNy4yNjk1MzItMTguODYzMjgxLTMxLjE2NDA2M3ptMCAwXCIgZmlsbD1cIiMyYjM4OTRcIi8+PHBhdGggZD1cIm0xNDcuMzU5Mzc1IDMwNy40Njg3NWMtMTAuMDA3ODEzIDEuMTI1LTE3Ljc4NTE1NiA5LjYwOTM3NS0xNy43ODUxNTYgMTkuOTE0MDYyIDAgMTEuMDc4MTI2IDguOTc2NTYyIDIwLjA1NDY4OCAyMC4wNTA3ODEgMjAuMDU0Njg4IDYuOTA2MjUgMCAxMi45OTIxODgtMy40OTIxODggMTYuNTk3NjU2LTguODA0Njg4LTE3LjE4MzU5NCAxLjkzMzU5NC0yOC4zNTkzNzUtMTcuMTc5Njg3LTE4Ljg2MzI4MS0zMS4xNjQwNjJ6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxnIGZpbGw9XCIjMTFkZmVmXCI+PHBhdGggZD1cIm0yMzEuNTY2NDA2IDI0NC42OTUzMTJoLTI4LjQ2ODc1Yy00LjE0MDYyNSAwLTcuNS0zLjM1OTM3NC03LjUtNy41IDAtNC4xNDQ1MzEgMy4zNTkzNzUtNy41IDcuNS03LjVoMjguNDY4NzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjkgNy41IDcuNSAwIDQuMTQwNjI2LTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PHBhdGggZD1cIm0yNjAuMDM1MTU2IDI3Ni4zNjcxODhoLTU2LjkzNzVjLTQuMTQ0NTMxIDAtNy41LTMuMzU5Mzc2LTcuNS03LjUgMC00LjE0NDUzMiAzLjM1NTQ2OS03LjUgNy41LTcuNWg1Ni45Mzc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY4IDcuNSA3LjUgMCA0LjE0MDYyNC0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjxwYXRoIGQ9XCJtMjMxLjU2NjQwNiAzMTkuMDQ2ODc1aC0yOC40Njg3NWMtNC4xNDA2MjUgMC03LjUtMy4zNTU0NjktNy41LTcuNXMzLjM1OTM3NS03LjUgNy41LTcuNWgyOC40Njg3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OSA3LjUgNy41cy0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjxwYXRoIGQ9XCJtMjYwLjAzNTE1NiAzNTAuNzE4NzVoLTU2LjkzNzVjLTQuMTQ0NTMxIDAtNy41LTMuMzU1NDY5LTcuNS03LjUgMC00LjE0MDYyNSAzLjM1NTQ2OS03LjUgNy41LTcuNWg1Ni45Mzc1YzQuMTQwNjI1IDAgNy41IDMuMzU5Mzc1IDcuNSA3LjUgMCA0LjE0NDUzMS0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjwvZz48cGF0aCBkPVwibTI4NS41MTk1MzEgMTcuNTk3NjU2aC0yNS42Njc5NjljLTIuNDIxODc0IDAtNC4zODI4MTIgMS45NjA5MzgtNC4zODI4MTIgNC4zNzg5MDYgMCA1LjgwODU5NC00Ljc1IDEwLjU1ODU5NC0xMC41NTQ2ODggMTAuNTU4NTk0aC05MS40OTYwOTNjLTUuODA4NTk0IDAtMTAuNTU4NTk0LTQuNzUtMTAuNTU4NTk0LTEwLjU1ODU5NCAwLTIuNDE3OTY4LTEuOTYwOTM3LTQuMzc4OTA2LTQuMzgyODEzLTQuMzc4OTA2aC0yNS42Njc5NjhjLTcuMDcwMzEzIDAtMTIuODAwNzgyIDUuNzMwNDY5LTEyLjgwMDc4MiAxMi43OTY4NzV2MTYzLjU4MjAzMWgxOTguMzEyNXYtMTYzLjU4MjAzMWMwLTcuMDY2NDA2LTUuNzMwNDY4LTEyLjc5Njg3NS0xMi44MDA3ODEtMTIuNzk2ODc1em0wIDBcIiBmaWxsPVwiI2Y5NDhiNFwiLz48cGF0aCBkPVwibTE0My4xNzk2ODggMjQuNTA3ODEyYy0uMjAzMTI2LS44MTI1LS4zMjAzMTMtMS42NTYyNS0uMzIwMzEzLTIuNTI3MzQzIDAtMi40MjE4NzUtMS45NjA5MzctNC4zODI4MTMtNC4zODI4MTMtNC4zODI4MTNoLTI1LjY2Nzk2OGMtNy4wNzAzMTMgMC0xMi44MDA3ODIgNS43MzA0NjktMTIuODAwNzgyIDEyLjc5Njg3NXYxNjMuNTgyMDMxaDQzLjE3MTg3NnptMCAwXCIgZmlsbD1cIiNlMDBlOGJcIi8+PHBhdGggZD1cIm0yODUuNTE5NTMxIDE3LjU5NzY1NmgtMjUuNjY3OTY5Yy0yLjQyMTg3NCAwLTQuMzgyODEyIDEuOTYwOTM4LTQuMzgyODEyIDQuMzc4OTA2IDAgNS44MDg1OTQtNC43NSAxMC41NTg1OTQtMTAuNTU0Njg4IDEwLjU1ODU5NGgtNTAuNDY0ODQzbDEwMy44NzEwOTMgMTMwLjIwMzEyNXYtMTMyLjM0Mzc1YzAtNy4wNjY0MDYtNS43MzA0NjgtMTIuNzk2ODc1LTEyLjgwMDc4MS0xMi43OTY4NzV6bTAgMFwiIGZpbGw9XCIjZmM3YWNkXCIvPjxwYXRoIGQ9XCJtMTY2LjkxNzk2OSA3Ny4yMDcwMzFoLTM0LjU4NTkzOGMtNC4xNDA2MjUgMC03LjUtMy4zNTU0NjktNy41LTcuNXMzLjM1OTM3NS03LjUgNy41LTcuNWgzNC41ODU5MzhjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjkgNy41IDcuNSAwIDQuMTQwNjI1LTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIiBmaWxsPVwiI2ZjN2FjZFwiLz48cGF0aCBkPVwibTExNy44MTY0MDYgMjQxLjE5MTQwNmMtNy43MzA0NjggOC4zMzk4NDQtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NWwtMzQuNDk2MDk0LTMxLjk2NDg0M2MtOC4zNDM3NS03LjczMDQ2OS04LjgzOTg0NC0yMC43NjE3MTktMS4xMDkzNzUtMjkuMTA1NDY5czIwLjc2MTcxOS04LjgzOTg0NCAyOS4xMDU0NjktMS4xMDkzNzVsMzQuNDk2MDkzIDMxLjk2NDg0NGM4LjMzOTg0NCA3LjczMDQ2OCA4LjgzOTg0NCAyMC43NjE3MTggMS4xMDkzNzUgMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTExNi43MDcwMzEgMjEyLjA4NTkzOC0xNi40MTAxNTYtMTUuMjAzMTI2YzIuMTYwMTU2IDcuODI0MjE5LjM2NzE4NyAxNi41NDI5NjktNS41NTA3ODEgMjIuOTI5Njg4LTUuOTIxODc1IDYuMzkwNjI1LTE0LjQ4MDQ2OSA4LjgzOTg0NC0yMi40NDE0MDYgNy4yODUxNTZsMTYuNDA2MjUgMTUuMjAzMTI1YzguMzQzNzUgNy43MzA0NjkgMjEuMzcxMDkzIDcuMjMwNDY5IDI5LjEwNTQ2OC0xLjEwOTM3NSA3LjczMDQ2OS04LjM0Mzc1IDcuMjMwNDY5LTIxLjM3NS0xLjEwOTM3NS0yOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjxwYXRoIGQ9XCJtMTE3LjgxNjQwNiAyOTcuMzYzMjgxYy03LjczMDQ2OCA4LjM0Mzc1LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzVsLTM0LjQ5NjA5NC0zMS45NjQ4NDRjLTguMzQzNzUtNy43MzA0NjgtOC44Mzk4NDQtMjAuNzYxNzE4LTEuMTA5Mzc1LTI5LjEwMTU2MiA3LjczMDQ2OS04LjM0Mzc1IDIwLjc2MTcxOS04LjgzOTg0NCAyOS4xMDU0NjktMS4xMDkzNzVsMzQuNDk2MDkzIDMxLjk2NDg0NGM4LjMzOTg0NCA3LjczMDQ2OSA4LjgzOTg0NCAyMC43NTc4MTIgMS4xMDkzNzUgMjkuMTAxNTYyem0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTExNy44MTY0MDYgMzUzLjUzOTA2MmMtNy43MzA0NjggOC4zNDM3NS0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc2bC0zNC40OTYwOTQtMzEuOTY0ODQ0Yy04LjM0Mzc1LTcuNzMwNDY5LTguODM5ODQ0LTIwLjc2MTcxOS0xLjEwOTM3NS0yOS4xMDU0NjlzMjAuNzYxNzE5LTguODM5ODQ0IDI5LjEwNTQ2OS0xLjEwOTM3NWwzNC40OTYwOTMgMzEuOTY0ODQ0YzguMzM5ODQ0IDcuNzMwNDY4IDguODM5ODQ0IDIwLjc2MTcxOCAxLjEwOTM3NSAyOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMzg1LjIzODI4MSA0MDEuMjA3MDMxYy0xLjA2NjQwNi0zLjkyOTY4Ny0xLjc4OTA2Mi03LjkzMzU5My0yLjE2Nzk2OS0xMS45NzI2NTYtMzguMTY0MDYyIDYyLjY1NjI1LTExMi4yNTc4MTIgOTEuNzUzOTA2LTE4MS44NTU0NjggNzMuNjYwMTU2IDcuNzYxNzE4IDQuOTg4MjgxIDE1Ljk4NDM3NSA5LjMwODU5NCAyNC41ODU5MzcgMTIuODgyODEzLjE2Nzk2OS4wNzAzMTIuMzM1OTM4LjE0MDYyNS41MDM5MDcuMjEwOTM3IDE2LjIyMjY1NiA2Ljg1MTU2MyAyOC42MDkzNzQgMTkuNzc3MzQ0IDM1LjEzMjgxMiAzNS40NTMxMjUgNTIuNTM1MTU2LTMuNDgwNDY4IDEwMC41NDY4NzUtMjMuNTExNzE4IDEzOC44NTE1NjItNTQuOTQxNDA2em0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNi43MDcwMzEgMjY4LjI2MTcxOS0xNi40MTAxNTYtMTUuMjAzMTI1YzIuMTYwMTU2IDcuODIwMzEyLjM2NzE4NyAxNi41MzkwNjItNS41NTA3ODEgMjIuOTI5Njg3LTUuOTIxODc1IDYuMzkwNjI1LTE0LjQ4MDQ2OSA4LjgzOTg0NC0yMi40NDE0MDYgNy4yODUxNTdsMTYuNDA2MjUgMTUuMTk5MjE4YzguMzQzNzUgNy43MzA0NjkgMjEuMzc1IDcuMjM0Mzc1IDI5LjEwNTQ2OC0xLjEwOTM3NSA3LjczMDQ2OS04LjM0Mzc1IDcuMjMwNDY5LTIxLjM3MTA5My0xLjEwOTM3NS0yOS4xMDE1NjJ6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjxwYXRoIGQ9XCJtMTE2LjcwNzAzMSAzMjQuNDMzNTk0LTE2LjQxMDE1Ni0xNS4yMDMxMjVjMi4xNjAxNTYgNy44MjQyMTkuMzY3MTg3IDE2LjU0Mjk2OS01LjU1MDc4MSAyMi45Mjk2ODctNS45MjE4NzUgNi4zOTA2MjUtMTQuNDgwNDY5IDguODQzNzUtMjIuNDQxNDA2IDcuMjg1MTU2bDE2LjQwNjI1IDE1LjIwMzEyNmM4LjM0Mzc1IDcuNzMwNDY4IDIxLjM3NSA3LjIzNDM3NCAyOS4xMDU0NjgtMS4xMDkzNzYgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzUtMS4xMDkzNzUtMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk1vYmlsZS1GaXJzdCBEZXNpZ248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSBzdGFydCBidWlsZGluZyB5b3VyIHNpdGUgZm9yIG1vYmlsZSBkZXZpY2VzIGZpcnN0LCB0aGVuIHdlIGFkZCBvbiB0byBpdCB0byBtYWtlIHRhYmxldCBhbmQgZGVza3RvcC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiTGF5ZXJfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIj48Zz48cGF0aCBkPVwibTI1NiAyMS45OTVjLTEzNS4zMTEgMC0yNDUuMDAyIDEwOS42OTEtMjQ1LjAwMiAyNDUuMDAyIDAgNTIuMzY3IDE2LjQzOSAxMDAuODg5IDQ0LjQyNSAxNDAuNzA4bDI4Ni44MjIgODguNjY2YzkyLjc1NS0zNC44OTMgMTU4Ljc1Ny0xMjQuNDE5IDE1OC43NTctMjI5LjM3MyAwLTEzNS4zMTEtMTA5LjY5MS0yNDUuMDAzLTI0NS4wMDItMjQ1LjAwM3pcIiBmaWxsPVwiI2ZmZGQ0MFwiLz48cGF0aCBkPVwibTIzMS40MzIgMTEzLjc2NGMwLTkuMzA2IDEuMTQ2LTE4LjM0OCAzLjI5LTI3LjAwMWgtMTM2Ljc4M2MtMy4wMzQgMC01Ljk5NS4zMTYtOC44NTUuOTExLTEyLjg0NyAxMS45NjMtMjQuNDA0IDI1LjI4OC0zNC40NDYgMzkuNzQ4LS4wNTcuOTA2LS4wOTYgMS44MTgtLjA5NiAyLjczOHYyNzYuMjc1YzEwLjQ1MSAxNS4wNzEgMjIuNTUxIDI4LjkxMiAzNi4wMzUgNDEuMjY1bDIxNi41NzkgNTguOTM2YzEyLjU2Mi0yLjY3MiAyNC43NjktNi4zMDIgMzYuNTQtMTAuODE2di0yNjkuNzk0Yy02MS45MDMgMC0xMTIuMjY0LTUwLjM2LTExMi4yNjQtMTEyLjI2MnpcIiBmaWxsPVwiIzE2N2NjMVwiLz48cGF0aCBkPVwibTE2Mi4xNjUgNDgwLjM5OS0yLjExMy0zMzYuMTFjLS4wMDMtLjQ5Mi0uMTg1LS45NjQtLjQ5LTEuMzUtNS4zNDctNi43NTItMi4wMTEtMTEuNDA0LjA4Mi0xMy4zNjYuNjg1LS42NDIuODQ2LTEuNjczLjQxNy0yLjUwOC0yLjQ2My00Ljc5Ni44MTUtNy44MjkgMi4xOTUtOC44MzQuMzc5LS4yNzYuNjQ4LS42NzYuNzc5LTEuMTI2bDMuNzczLTEzLjA2MWMuMjAzLS43MDMuMDQxLTEuNDcxLS40NDktMi4wMTQtNi40NTktNy4xNi0xLjk5My0xMi4yNzcuNDk0LTE0LjMwNC4zMTgtLjI1OS41MzktLjU5Ni42NjQtLjk2M2gtNjkuNTc4Yy0yMy45MjkgMC00My4zOTcgMTkuNDY4LTQzLjM5NyA0My4zOTd2Mjc2LjI3M2MxMC4wNTQgMTQuNDk5IDIxLjYzMyAyNy44NTggMzQuNTAzIDM5Ljg1elwiIGZpbGw9XCIjMDI0Nzg4XCIvPjxwYXRoIGQ9XCJtODEuNTQyIDE5NS44ODd2MjQzLjEwOGM0NC40MyA0NS4wNjIgMTA2LjE3NyA3My4wMDUgMTc0LjQ1OCA3My4wMDUgMjAuOTUxIDAgNDEuMjg1LTIuNjM2IDYwLjY5NS03LjU4M3YtMjgxLjY4MWMtMTguNzg3LTQuNjU2LTM1LjcyLTE0LjA1NS00OS40NTQtMjYuODQ5elwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtODEuNTQyIDQzOC45OTZjMjIuMjcxIDIyLjU4NyA0OC44ODggNDAuODc1IDc4LjUwNiA1My40OTR2LTI5Ni42MDNoLTc4LjUwNnpcIiBmaWxsPVwiI2QzZGNmYlwiLz48Zz48cGF0aCBkPVwibTE2Ny4xNDkgMTE3Ljg2MmgtNC4zMzNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNC4zMzNjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiMxZTkyZDNcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjM0LjM4NCAxMTcuODYyaC00MS42MzhjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNDEuNjM4YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjMWU5MmQzXCIvPjwvZz48cGF0aCBkPVwibTIzMy42NTMgMTM2LjAyOWgtODMuMDM1Yy02LjYgMC0xMi01LjQtMTItMTIgMC01LjY3LTQuNTk2LTEwLjI2Ni0xMC4yNjYtMTAuMjY2aC0zMC40MTNjLTkuMDU2IDAtMTYuMzk3IDcuMzQxLTE2LjM5NyAxNi4zOTd2NjguMzg1aDE4OC42NDRjLTE4LjM3OS0xNS45NTYtMzEuNTM1LTM3Ljc3NS0zNi41MzMtNjIuNTE2elwiIGZpbGw9XCIjOWJkOGY5XCIvPjxwYXRoIGQ9XCJtMTUwLjYxOCAxMzYuMDI5Yy02LjYgMC0xMi01LjQtMTItMTIgMC01LjY3LTQuNTk2LTEwLjI2Ni0xMC4yNjUtMTAuMjY2aC0zMC40MTRjLTkuMDU2IDAtMTYuMzk3IDcuMzQxLTE2LjM5NyAxNi4zOTd2NjguMzg1aDc4LjUwNXYtNjIuNTE3aC05LjQyOXpcIiBmaWxsPVwiIzczYzNmOVwiLz48ZyBmaWxsPVwiIzFlOTJkM1wiPjxwYXRoIGQ9XCJtMzE2LjY5NSAyMTAuMjM2Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41djI4OC40NTVjNS4wNi0xLjEyIDEwLjA2My0yLjM5MiAxNS0zLjgxOXYtMjg0LjYzNmMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41elwiLz48cGF0aCBkPVwibTg5LjA0MiA0NDYuMjgydi0zMTYuMTIyYzAtNC45MDYgMy45OTEtOC44OTcgOC44OTctOC44OTdoMzAuNDE0YzEuNTI1IDAgMi43NjYgMS4yNCAyLjc2NiAyLjc2NSAwIDEwLjc1MiA4Ljc0OCAxOS41IDE5LjUgMTkuNWg4OC4wMzVjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNSAwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41aC04OC4wMzVjLTIuNDM5IDAtNC41LTIuMDYtNC41LTQuNSAwLTkuNzk2LTcuOTctMTcuNzY1LTE3Ljc2Ni0xNy43NjVoLTMwLjQxNGMtMTMuMTc3IDAtMjMuODk3IDEwLjcyMS0yMy44OTcgMjMuODk3djMwMC44OTJjNC43NzYgNS4yOTMgOS43ODQgMTAuMzcxIDE1IDE1LjIzelwiLz48L2c+PHBhdGggZD1cIm0xNTkuNjQ0IDEyOS41NzNjLjMwNi0uMjg2LjQ4OS0uNjU1LjU4LTEuMDQ0aC05LjYwNmMtMi40MzkgMC00LjUtMi4wNi00LjUtNC41IDAtOS43OTYtNy45Ny0xNy43NjUtMTcuNzY2LTE3Ljc2NWgtMzAuNDEzYy0xMy4xNzcgMC0yMy44OTcgMTAuNzIxLTIzLjg5NyAyMy44OTd2MzAwLjg5MmM0Ljc3NiA1LjI5MyA5Ljc4NCAxMC4zNzEgMTUgMTUuMjN2LTMxNi4xMjNjMC00LjkwNiAzLjk5MS04Ljg5NyA4Ljg5Ny04Ljg5N2gzMC40MTRjMS41MjUgMCAyLjc2NiAxLjI0IDIuNzY2IDIuNzY1IDAgMTAuNzUyIDguNzQ4IDE5LjUgMTkuNSAxOS41aDkuMjgxYy0uMDgzLS4yMS0uMTk1LS40MS0uMzM3LS41OS01LjM0Ny02Ljc1MS0yLjAxMS0xMS40MDQuMDgxLTEzLjM2NXpcIiBmaWxsPVwiIzE2N2NjMVwiLz48cGF0aCBkPVwibTI0MS45MzQgMTU3LjEwNmgtODEuNTg1djI2LjI4Nmg5NC4yOTJjLjU2OCAwIDEuMTI0LS4wNDggMS42NzQtLjExOC01Ljg5Mi03Ljk4NC0xMC43NS0xNi43NzItMTQuMzgxLTI2LjE2OHpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTE2MS4zNDkgMTU3LjEwNmgtMTQuNzUyYy03LjI1OSAwLTEzLjE0MyA1Ljg4NC0xMy4xNDMgMTMuMTQzczUuODg0IDEzLjE0MyAxMy4xNDMgMTMuMTQzaDE0Ljc1MnpcIiBmaWxsPVwiIzNjNThhMFwiLz48Zz48cGF0aCBkPVwibTExNi41MzUgMTQxLjgzMmgtMTAuMzM0Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDEwLjMzNGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48L2c+PHBhdGggZD1cIm0yNzkuODIxIDM0NC41aC0xNjEuNDA1Yy01LjQ0NSAwLTkuODk5LTQuNDU1LTkuODk5LTkuODk5di04Ny4zMmMwLTUuNDQ1IDQuNDU1LTkuODk5IDkuODk5LTkuODk5aDE2MS40MDVjNS40NDUgMCA5Ljg5OSA0LjQ1NSA5Ljg5OSA5Ljg5OXY4Ny4zMmMwIDUuNDQ1LTQuNDU0IDkuODk5LTkuODk5IDkuODk5elwiIGZpbGw9XCIjZmY0MTU1XCIvPjxwYXRoIGQ9XCJtMTA4LjUxNyAyNDcuMjgxdjg3LjMyYzAgNS40NDUgNC40NTUgOS44OTkgOS44OTkgOS44OTloMTAzLjcwNmMtLjMxNi0uNTI1LS43NzgtLjk3LTEuMzc0LTEuMjU1LTguMDY4LTMuODQ4LTcuODU0LTEwLjA0Ni02Ljg0OC0xMy42OTIuNDQzLTEuNjA3LS4zNzQtMy4zMTUtMS45NC0zLjg4Ni0xNC4zMi01LjIxNi0xMS43NjEtMTguMDM0LTEwLjYzMy0yMS44Ni4yMTgtLjczOS4xNzItMS41MjctLjE0LTIuMjMybC0xMC45OS0yNC44MjNjLS40NzktMS4wODEtMS41MS0xLjgzOS0yLjY5LTEuOTA4LTkuNjg3LS41NjctMTEuNDM0LTguNDY0LTExLjY3Mi0xMi42ODQtLjA4NC0xLjQ4NC0xLjE5MS0yLjcxNC0yLjY1Ni0yLjk2NC0xNi4wNDktMi43NDMtMTQuNzE5LTE1LjM0LTEzLjYzLTIwLjAzOS4xMzktLjYwMS4wOTQtMS4yMTQtLjEwMy0xLjc3NWgtNDEuMDI5Yy01LjQ0NiAwLTkuOSA0LjQ1NC05LjkgOS44OTl6XCIgZmlsbD1cIiNlODAwNTRcIi8+PGc+PHBhdGggZD1cIm0xMzguMjMgMzgyLjAwM2gtNWMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDVjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU3IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTExMy41MTcgMzgyLjAwM2gtNWMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDVjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTI4OS43MjEgMzgyLjAwM2gtOTQuMDc0Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoOTQuMDc0YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PGc+PHBhdGggZD1cIm0xOTUuNjQ3IDM4Mi4wMDNoLTM3LjA4M2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDM3LjA4M2M0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTk1LjY0OCAzODkuODgyYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41di0xNS41YzAtNC4xNDMgMy4zNTgtNy41IDcuNS03LjVzNy41IDMuMzU3IDcuNSA3LjV2MTUuNWMwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZTgwMDU0XCIvPjwvZz48ZWxsaXBzZSBjeD1cIjE5OS4xMThcIiBjeT1cIjI5MC45NDFcIiBmaWxsPVwiI2U5ZWZmZlwiIHJ4PVwiMzkuMDcxXCIgcnk9XCIzOS4wNzFcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLjE2IC0uOTg3IC45ODcgLjE2IC0xMTkuOTYxIDQ0MC44ODUpXCIvPjxwYXRoIGQ9XCJtMjExLjk1OSAzMjUuNjY4Yy0xNC4zMi01LjIxNi0xMS43NjEtMTguMDM0LTEwLjYzMy0yMS44Ni4yMTgtLjczOS4xNzItMS41MjctLjE0LTIuMjMybC0xMC45OS0yNC44MjNjLS40NzktMS4wODEtMS41MS0xLjgzOS0yLjY5LTEuOTA4LTkuNjg3LS41NjctMTEuNDM0LTguNDY0LTExLjY3Mi0xMi42ODQtLjA0Mi0uNzQ3LS4zNDUtMS40My0uODIxLTEuOTU1LTkuMTA4IDcuMTUzLTE0Ljk2NSAxOC4yNTctMTQuOTY1IDMwLjczNiAwIDIxLjU3OCAxNy40OTMgMzkuMDcxIDM5LjA3MSAzOS4wNzEgNS4xNDUgMCAxMC4wNTMtMS4wMDQgMTQuNTUxLTIuODExLS4zNDctLjY5LS45MzYtMS4yNTItMS43MTEtMS41MzR6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PHBhdGggZD1cIm0yMTMuODA0IDI4Ni45MTUtMTkuMDgxLTEyLjE5OWMtMy4xOC0yLjAzMy03LjM1Mi4yNTEtNy4zNTIgNC4wMjZ2MjQuMzk4YzAgMy43NzUgNC4xNzIgNi4wNTkgNy4zNTIgNC4wMjZsMTkuMDgxLTEyLjE5OWMyLjkzOS0xLjg3OSAyLjkzOS02LjE3MyAwLTguMDUyelwiIGZpbGw9XCIjZmY0MTU1XCIvPjxnPjxwYXRoIGQ9XCJtMTgwLjc0NyA0MTQuNzYzaC03Mi4yM2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg3Mi4yM2M0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41IDAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjg5LjcyMSA0NDQuMTQ1aC0xODEuMjA0Yy00LjE0MiAwLTcuNS0zLjM1OC03LjUtNy41IDAtNC4xNDMgMy4zNTgtNy41IDcuNS03LjVoMTgxLjIwNGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41IDAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxwYXRoIGQ9XCJtMjg5LjcyMSA0NTYuOTIyaC0xODEuMjA0Yy0xLjkgMC0zLjYzLjcxMi00Ljk1MiAxLjg3NyA1LjgzMyA0LjY0MiAxMS44ODQgOS4wMiAxOC4xMzMgMTMuMTIzaDE2OC4wMjNjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PHBhdGggZD1cIm0yODkuNzIxIDQ4NC43aC0xNDYuMmMxMS4zOTUgNS44OTkgMjMuMzEzIDEwLjkyNSAzNS42NjUgMTVoMTEwLjUzNGM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41LjAwMS00LjE0Mi0zLjM1Ny03LjUtNy40OTktNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxjaXJjbGUgY3g9XCIzNDMuNjk1XCIgY3k9XCIxMTMuNzYzXCIgZmlsbD1cIiMyYTQyOGNcIiByPVwiMTEzLjc2M1wiLz48cGF0aCBkPVwibTM4Ny4xODIgMTU1LjM1Yy4wOTctMS45NTMtLjYxMy0zLjg1Ni0xLjk5Ni01LjIzOWwtNi42NjItNi42NjJjLTEuMi0xLjItMi44MDgtMS44OTEtNC41MDItMS45OTctMjEuNjEtMS4zNTctMjIuNzcyLTE5Ljc2NS0yMi43MDgtMjQuNTMxLjAxMS0uODE1LS4xMzctMS42MjItLjQxNy0yLjM4N2wtNS44NzgtMTYuMDc2Yy0uODM3LTIuMjg3LTIuODI5LTMuOTI2LTUuMjE5LTQuMzk0LTUxLjAxNy05Ljk5NS0zOS43MDYtNjguODc1LTM1Ljk3Mi04My43OTEuMjU4LTEuMDMxLjI1Ny0yLjA4OS4wMzctMy4wOTgtNDMuMTg0IDE2LjE0NC03My45MzQgNTcuNzczLTczLjkzNCAxMDYuNTg5IDAgNjIuODMgNTAuOTMzIDExMy43NjMgMTEzLjc2MyAxMTMuNzYzIDcuMzI1IDAgMTQuNDg0LS43MDEgMjEuNDI0LTIuMDIzbDMwLjM5Ni02MC45NWMtNy40MTgtMS41MjgtOC40ODItNi4xNzYtOC4zMzItOS4yMDR6XCIgZmlsbD1cIiMxYzJlN2FcIi8+PGc+PHBhdGggZD1cIm0yOTkuNzEyIDE1Mi42MDMtMzMuMzA0LTMzLjMwNGMtMy4wNTctMy4wNTctMy4wNTctOC4wMTUgMC0xMS4wNzJsMzMuMzA0LTMzLjMwNGMzLjA1Ny0zLjA1NyA4LjAxNC0zLjA1OCAxMS4wNzIgMCAzLjA1NyAzLjA1NyAzLjA1OCA4LjAxNSAwIDExLjA3MmwtMjcuNzY4IDI3Ljc2OSAyNy43NjggMjcuNzY4YzMuMDU3IDMuMDU3IDMuMDU3IDguMDE1IDAgMTEuMDcyLTMuMDU4IDMuMDU3LTguMDE0IDMuMDU2LTExLjA3Mi0uMDAxelwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48Zz48cGF0aCBkPVwibTM3Ni42MDcgMTUyLjYwM2MtMy4wNTctMy4wNTctMy4wNTctOC4wMTQgMC0xMS4wNzJsMjcuNzY4LTI3Ljc2OC0yNy43NjktMjcuNzY4Yy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNSAwLTExLjA3MiAzLjA1OC0zLjA1OCA4LjAxNS0zLjA1OCAxMS4wNzIgMGwzMy4zMDUgMzMuMzA0YzMuMDU1IDMuMDU2IDMuMDU3IDguMDE1IDAgMTEuMDcybC0zMy4zMDQgMzMuMzA0Yy0zLjA1NyAzLjA1Ny04LjAxNCAzLjA1OC0xMS4wNzIgMHpcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PGc+PHBhdGggZD1cIm0zMjUuNTg5IDE1NC4yMTNjLTMuOTQ3LTEuNzY2LTUuNzE0LTYuMzk4LTMuOTQ4LTEwLjM0NGwyOS44MTYtNjYuNjA4YzEuNzY3LTMuOTQ2IDYuMzk5LTUuNzEzIDEwLjM0NC0zLjk0NyAzLjk0NyAxLjc2NyA1LjcxNCA2LjM5OCAzLjk0NyAxMC4zNDRsLTI5LjgxNiA2Ni42MDhjLTEuNzYgMy45MzQtNi4zODUgNS43MTgtMTAuMzQzIDMuOTQ3elwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48cGF0aCBkPVwibTQ0MS43ODkgMTkyLjQ3MWgtOS4wOTFjLTIuNDAyIDAtNC4zNTYtMS45NTQtNC4zNTYtNC4zNTZ2LTkuMDkxYzAtMTAuODEtNy42MzEtMTQuNDE5LTEyLjUtMTUuNjIyaC02Ny4yMzZjLTIuNzM4IDAtNC45NTggMi4yMi00Ljk1OCA0Ljk1OHYxNTIuNzc1YzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGgxMDMuODQ4YzIuNzM4IDAgNC45NTgtMi4yMiA0Ljk1OC00Ljk1OHYtMTE3Ljk2MWMtMi45MTYtMTAuNDU5LTE1LjQ3NS0xMC43MDEtMTUuNjIzLTEwLjcwM3pcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTM4My4wNjkgMzAxLjQ2NXYtMTEzLjQzNWMwLTEzLjYwMSAxMS4wMjYtMjQuNjI4IDI0LjYyNy0yNC42MjhoLTU5LjA5Yy0yLjczOCAwLTQuOTU4IDIuMjItNC45NTggNC45NTh2MTUyLjc3NWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoNTkuMDljLTEzLjYwMSAwLTI0LjYyNy0xMS4wMjYtMjQuNjI3LTI0LjYyOHpcIiBmaWxsPVwiI2QzZGNmYlwiLz48cGF0aCBkPVwibTQ1Mi4yOTYgMTg3Ljk1OC0xOS40NC0xOS40NGMtMy4yNzUtMy4yNzUtNy43MTgtNS4xMTUtMTIuMzUtNS4xMTVoLTguNjI4czE1Ljg2Mi4yNDIgMTUuODYyIDE1LjYyMnY5LjA5MWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoOS4wOTFzMTUuNjIyLjEyOCAxNS42MjIgMTQuNzcxdi03LjUzN2MwLTQuNjMyLTEuODQtOS4wNzUtNS4xMTUtMTIuMzV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PGcgZmlsbD1cIiM3M2MzZjlcIj48cGF0aCBkPVwibTQxNC4wNDUgMjM4LjkxMWgtMzEuNDgzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMxLjQ4M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjE4LjQwN2gtMjYuMDgyYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDI2LjA4MmMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zOTUuNTYzIDIxOC40MDdoLTEzLjAwMWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgxMy4wMDFjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDI1OC41ODZoLTI2LjA4MmMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgyNi4wODJjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzk1LjU2MyAyNTguNTg2aC0xMy4wMDFjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMTMuMDAxYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM4Ni4zNzcgMjc5LjA4OGgtMy44MTRjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMy44MTRjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDI3OS4wODhoLTM1LjY0NGMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgzNS42NDRjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjwvZz48cGF0aCBkPVwibTM2Ni43ODMgMjM4LjkxMWgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDIxOC40MDdoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyNTguNTg2aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjc5LjA4OGgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm00MzYuNjQ3IDIzOC45MTFoLTUuMzk1Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDUuMzk1YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxwYXRoIGQ9XCJtNDE0LjA0NSAyOTkuNTkxaC0zMS40ODNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMzEuNDgzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyOTkuNTkxaC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTQzNi42NDcgMjk5LjU5MWgtNS4zOTVjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoNS4zOTVjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+T3B0aW1pemF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+NjAlIG9mIGFsbCBpbnRlcm5ldCB0cmFmZmljIGlzIG9uIG1vYmlsZSBkZXZpY2VzLCBzbyB3ZSBvcHRpbWl6ZSB5b3VyIG1vYmlsZSB0byBwZXJmb3JtIHRoZWlyIGJlc3QgaW4gc2VhcmNoIGVuZ2luZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwaWdneS1iYW5rXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8xYTZhNzYzNWQ3MjNiZDQzYWQwMWViOGUxNGNhNTU1YWRlOTIwMGQ5L2U2NDNiL2ltYWdlcy9zYXZpbmdzLnN2Z1wiIGFsdD1cImRyYXdpbmcgb2YgYSBtYW4gbmV4dCB0byBhIGxhcmdlIHBpZ2d5IGJhbmtcIiB3aWR0aD1cIjMwMHB4XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC10ZXh0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQwPC9zcGFuPiBEb3duLCA8c3Bhbj4kMTUwPC9zcGFuPiBQZXIgTW9udGgsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gTWluaW11bSBDb250cmFjdFxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD4kMCBkb3duIGZvciBhIHN0YW5kYXJkIDUgcGFnZSBzbWFsbCBidXNpbmVzcyB3ZWJzaXRlLiBJZiB5b3UgbmVlZCBtb3JlIHRoYW4gdGhhdCB0aGVuIHdlIGhhdmUgdG8gZG8gY3VzdG9tIHByaWNpbmcgYmFzZWQgb24gdGhlIHNjb3BlIG9mIHdvcmssIG51bWJlciBvZiBhZGRpdGlvbmFsIHBhZ2VzLCBhbmQgdGltZSBpbnZvbHZlZC4gPGJyLz48YnIvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3Ugb3duIHlvdXIgZG9tYWluLCBjb250ZW50LCBsaXN0aW5nLCBhbmQgcHJvZmlsZXMuICBDYW5jZWwgYW55dGltZSB3aXRoIG5vIGZlZXMgb3IgaGFzc2xlLiAgXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG9zdGluZyBGZWVzIEluY2x1ZGVkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3N0aW5nIGZlZXMgYXJlIGJ1aWx0IHJpZ2h0IGludG8gdGhlIG1vbnRobHkgcGF5bWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlVubGltaXRlZCBFZGl0czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIGFueXRoaW5nIHlvdSB3YW50IGF0IGFueXRpbWUgYW5kIGl0IHdpbGwgYmUgZG9uZSB0aGF0IGRheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjI0LzcgQ3VzdG9tZXIgU2VydmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FsbCBkaXJlY3QgYW55dGltZSBkYXkgb3IgbmlnaHQsIG5vIHBob25lIHRyZWVzIG9yIGF1dG9tYXRlZCByZXNwb25zZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduICYgRGV2ZWxvcG1lbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluY2x1ZGVzIG92ZXIgNDAgaG91cnMgb2YgZGVzaWduLCBkZXZlbG9wbWVudCwgYW5kIHRlc3RpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DaXRhdGlvbnMgQW5kIExpc3RpbmdzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JdCdzIGltcG9ydGFudCB0byBoYXZlIHlvdXIgd2Vic2l0ZSBsaW5rZWQgZnJvbSBvdGhlciB3ZWJzaXRlcywgbGlrZSBkaXJlY3Rvcmllcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdvb2dsZSBBbmFseXRpY3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGluc3RhbGwgQW5hbHl0aWNzIGZvciBmcmVlIHRvIG1vbml0b3IgdHJhZmZpYyBhbmQgd2hlcmUgaXQgY29tZXMgZnJvbS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2VzXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkICsgQmxvZ2dpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNUQVJUSU5HIEFUPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4zMDA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IDEwMDArIFdvcmQgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiBXcml0dGVuIEJ5IGFuIFNFTyBTcGVjaWFsaXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IDEgUG9zdCBQZXIgTW9udGg8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gJDE1MCBQZXIgRXh0cmEgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+U3RhbmRhcmQ8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPjUgUEFHRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjE1MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBVbmxpbWl0ZWQgRWRpdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBJbmNsdWRlcyBIb3N0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMjQvNyBDdXN0b21lciBTZXJ2aWNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gTGlmZXRpbWUgVXBkYXRlczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZFwidHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ29zICYgR3JhcGhpYyBEZXNpZ248L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPklOQ0xVREVEITwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyIHJldmlzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEFsbCBGaWxlIEZvcm1hdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBSZWFkeSB0byB1c2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBGUkVFIHcvIFN1YnNjcmlwdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG48L21haW4+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFj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
