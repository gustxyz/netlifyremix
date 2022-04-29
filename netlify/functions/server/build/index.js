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
    className: `hamburger hamburger--spring ${navActive || !isMobile ? "is-active" : ""}`,
    onClick: onClickHandler,
    type: "button"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-box"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-inner"
  }))))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    style: navActive || !isMobile ? { width: "60%", position: "fixed" } : { width: 0 },
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
      style: navActive || !isMobile ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
      key: navLink.name + navLink.route,
      className: "nav-li"
    }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
      style: navActive || !isMobile ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaGVscGVycy91c2VNZWRpYS50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInBhYmlvX3YyMDIyMDEyM19sb2NhbGVcIiwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgXCJTZXQtQ29va2llXCIsXG4gICAgYXdhaXQgY29va2llLnNlcmlhbGl6ZSh1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICApO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gXCIuL2hlbHBlcnMvdXNlTWVkaWFcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFsa2kgRGlnaXRhbCB8IFdlYiBEZXNpZ25cIiB9O1xufTtcblxuXG5cbmNvbnN0IEJhc2VUZW1wbGF0ZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxodG1sIGxhbmc9XCJlblwiPlxuICAgIDxoZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8TGlua3MgLz5cbiAgICBcbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW25hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpPT4ge1xuICAgIHNldE5hdkFjdGl2ZSghbmF2QWN0aXZlKTtcbn1cbmxldCBpc01vYmlsZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgaXNNb2JpbGUgPSB1c2VNZWRpYTxib29sZWFuPihcbiAgICAgICAgLy8gTWVkaWEgcXVlcmllc1xuICAgICAgICBbXCIobWluLXdpZHRoOiAxMjUwcHgpXCIsIFwiKG1heC13aWR0aDogMTI0OXB4KVwiXSxcbiAgICAgICAgLy8gQ29sdW1uIGNvdW50cyAocmVsYXRlcyB0byBhYm92ZSBtZWRpYSBxdWVyaWVzIGJ5IGFycmF5IGluZGV4KVxuICAgICAgICBbZmFsc2UsIHRydWVdLFxuXG4gICAgICAgIGZhbHNlXG4gICBcbiAgICAgICk7XG5cbn1cbiAgcmV0dXJuIChcbiAgICA8QmFzZVRlbXBsYXRlPlxuICAgICAgPEhlYWRlciBuYXZBY3RpdmU9e25hdkFjdGl2ZX0gc2V0TmF2QWN0aXZlPXtzZXROYXZBY3RpdmV9IC8+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e25hdkFjdGl2ZSA/IG9uQ2xpY2tIYW5kbGVyIDogdW5kZWZpbmVkfT5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgPC9CYXNlVGVtcGxhdGU+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gKHsgZXJyb3IgfSkgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIDxCYXNlVGVtcGxhdGU+e2Vycm9yfTwvQmFzZVRlbXBsYXRlPjtcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZU1lZGlhXCI7XG5cbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5cblxuY29uc3QgSGVhZGVyID0gKCBwcm9wczogeyBuYXZBY3RpdmU6IGFueTsgc2V0TmF2QWN0aXZlOiBhbnk7IH0pID0+IHtcbiAgICBjb25zdCB7bmF2QWN0aXZlLCBzZXROYXZBY3RpdmV9ID0gcHJvcHM7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpOyAgICAgXG4gICAgY29uc3QgbmF2TGlua3MgPSBbeyBuYW1lOiAnSG9tZScsIHJvdXRlOiAnLyd9LHsgbmFtZTogJ0Fib3V0Jywgcm91dGU6ICcvYWJvdXQnfSx7IG5hbWU6ICdTZXJ2aWNlcycsIHJvdXRlOiAnL3NlcnZpY2VzJ30seyBuYW1lOiAnQ29udGFjdCcsIHJvdXRlOiAnL2NvbnRhY3QnfV1cblxuICAgIGxldCBpc01vYmlsZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICBpc01vYmlsZSA9IHVzZU1lZGlhPGJvb2xlYW4+KFxuICAgICAgICAgICAgLy8gTWVkaWEgcXVlcmllc1xuICAgICAgICAgICAgW1wiKG1pbi13aWR0aDogMTI1MHB4KVwiLCBcIihtYXgtd2lkdGg6IDEyNDlweClcIl0sXG4gICAgICAgICAgICAvLyBDb2x1bW4gY291bnRzIChyZWxhdGVzIHRvIGFib3ZlIG1lZGlhIHF1ZXJpZXMgYnkgYXJyYXkgaW5kZXgpXG4gICAgICAgICAgICBbZmFsc2UsIHRydWVdLFxuICAgIFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICBcbiAgICAgICAgICApO1xuICAgIFxuICAgIH1cblxuXG4gXG5cbmNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCk9PiB7XG4gICAgc2V0TmF2QWN0aXZlKCFuYXZBY3RpdmUpO1xufVxucmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYgY29udGFpbmVyIG1vYmlsZS1uYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD1cIm1vYmlsZS1sb2dvXCIgc3JjPXtMb2dvfSBhbHQ9XCJtb2JpbGVfY29tcGFueV9sb2dvXCIgaGVpZ2h0PVwiNjBcIiAvPiBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJvcGVuIHRoZSBtZW51XCIgaWQ9XCJtZW51LWJ1dHRvblwiIGNsYXNzTmFtZT17YGhhbWJ1cmdlciBoYW1idXJnZXItLXNwcmluZyAke25hdkFjdGl2ZSB8fCAhaXNNb2JpbGUgID8gJ2lzLWFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtuYXZBY3RpdmUgfHwgIWlzTW9iaWxlICAgPyB7d2lkdGg6ICc2MCUnLCBwb3NpdGlvbjogJ2ZpeGVkJ30gOiAge3dpZHRoOiAwfX0gY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1tZW51XCIgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cImNvbXBhbnkgbG9nb1wiIHdpZHRoPVwiMTAwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dWwgIGlkPVwib24tdG9wXCIgY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmtzICR7IW5hdkFjdGl2ZSA/ICdjbGlja2VkJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobmF2TGluayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBzdHlsZT17bmF2QWN0aXZlIHx8ICFpc01vYmlsZSA/IHtvcGFjaXR5OiAxLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9IDogIHtvcGFjaXR5OiAwLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ319IGtleT17bmF2TGluay5uYW1lICsgbmF2TGluay5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgc3R5bGU9e25hdkFjdGl2ZSB8fCAhaXNNb2JpbGUgICA/IHtvcGFjaXR5OiAxLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9IDogIHtvcGFjaXR5OiAwLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ319IGNsYXNzTmFtZT17bG9jYXRpb24ucGF0aG5hbWUgPT09IG5hdkxpbmsucm91dGUgPyAnYWN0aXZlLW1lbnUnIDogJyd9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17bmF2TGluay5yb3V0ZX0+e25hdkxpbmsubmFtZX08L0xpbms+PC9saT5cblxufSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gSG9va1xuY29uc3QgdXNlTWVkaWEgPSA8VD4ocXVlcmllczogc3RyaW5nW10sIHZhbHVlczogVFtdLCBkZWZhdWx0VmFsdWU6IFQpID0+IHtcbiAgLy8gQXJyYXkgY29udGFpbmluZyBhIG1lZGlhIHF1ZXJ5IGxpc3QgZm9yIGVhY2ggcXVlcnlcbiAgY29uc3QgbWVkaWFRdWVyeUxpc3RzID0gcXVlcmllcy5tYXAoKHEpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHEpKTtcbiAgLy8gRnVuY3Rpb24gdGhhdCBnZXRzIHZhbHVlIGJhc2VkIG9uIG1hdGNoaW5nIG1lZGlhIHF1ZXJ5XG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIC8vIEdldCBpbmRleCBvZiBmaXJzdCBtZWRpYSBxdWVyeSB0aGF0IG1hdGNoZXNcbiAgICBjb25zdCBpbmRleCA9IG1lZGlhUXVlcnlMaXN0cy5maW5kSW5kZXgoKG1xbCkgPT4gbXFsLm1hdGNoZXMpO1xuICAgIC8vIFJldHVybiByZWxhdGVkIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZSBpZiBub25lXG4gICAgcmV0dXJuIHZhbHVlcz8uW2luZGV4XSB8fCBkZWZhdWx0VmFsdWU7XG4gIH07XG4gIC8vIFN0YXRlIGFuZCBzZXR0ZXIgZm9yIG1hdGNoZWQgdmFsdWVcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxUPihnZXRWYWx1ZSk7XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBFdmVudCBsaXN0ZW5lciBjYWxsYmFja1xuICAgICAgLy8gTm90ZTogQnkgZGVmaW5pbmcgZ2V0VmFsdWUgb3V0c2lkZSBvZiB1c2VFZmZlY3Qgd2UgZW5zdXJlIHRoYXQgaXQgaGFzIC4uLlxuICAgICAgLy8gLi4uIGN1cnJlbnQgdmFsdWVzIG9mIGhvb2sgYXJncyAoYXMgdGhpcyBob29rIGNhbGxiYWNrIGlzIGNyZWF0ZWQgb25jZSBvbiBtb3VudCkuXG4gICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gc2V0VmFsdWUoZ2V0VmFsdWUpO1xuICAgICAgLy8gU2V0IGEgbGlzdGVuZXIgZm9yIGVhY2ggbWVkaWEgcXVlcnkgd2l0aCBhYm92ZSBoYW5kbGVyIGFzIGNhbGxiYWNrLlxuICAgICAgbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKGhhbmRsZXIpKTtcbiAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgIG1lZGlhUXVlcnlMaXN0cy5mb3JFYWNoKChtcWwpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKSk7XG4gICAgfSxcbiAgICBbXSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuICApO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYTsiLCAiXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBuYXZMaW5rcyA9IFt7IG5hbWU6ICdIb21lJywgcm91dGU6ICcvJ30seyBuYW1lOiAnQWJvdXQnLCByb3V0ZTogJy9hYm91dCd9LHsgbmFtZTogJ1NlcnZpY2VzJywgcm91dGU6ICcvc2VydmljZXMnfSx7IG5hbWU6ICdDb250YWN0Jywgcm91dGU6ICcvY29udGFjdCd9XVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBsaWdodC1tb2RlLXN2Z1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYzI3MmUxM2YxMWZlYzVlOGE4MmI2MzQyYmMxOTRiM2ViNzRiNWI3Mi83Y2YxMC9pbWFnZXMvZm9vdGVyLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAgLz5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBkYXJrLW1vZGUtc3ZnXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8zYjc1NmFlMzBlZjUxY2NkODU2NGMyOTc4ZWE4YTVhNzBmMTkzMWY4Lzk1ZGI3L2ltYWdlcy9mb290ZXItc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3VwXCI+IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW0gaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIG1vYmlsZS1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gZGVza3RvcC1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tXCI+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTA5LTQ4MS03NTEyXCI+KDUwOSk0ODEtNzUxMjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7bmF2TGlua3MubWFwKChuYXZMaW5rKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPExpbmsgY2xhc3NOYW1lPSdsaW5rJyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e25hdkxpbmsucm91dGV9PntuYXZMaW5rLm5hbWV9PC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoMj5TZXJ2aWNlczwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD5XZWIgRGVzaWduPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+V2Vic2l0ZSBNYWludGVuYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlNFTyBTZXJ2aWNlczwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkNvbnRlbnQgQ3JlYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Mb2dvIERlc2lnbjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRpbmdcIj5cbiAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjEgfCBBbGtpIERpZ2l0YWwgV2ViIFNlcnZpY2VzIHwgQWxsIFJpZ2h0cyBSZXNlcnZlZDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlcnZpY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvMDFiYTk0MTI2NWI4YWI1NWVmY2IxZTJjMTZjZGE5MDYxOTQ1MzY5NS5jc3NcIixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgICBwYXJhbXMsXG4gIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgIHJldHVybiBwYXJhbXNcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gICBcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICBcbiAgcmV0dXJuIDxTZXJ2aWNlcyAvPlxufVxuIiwgIlxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG5cbiAgICA8c2VjdGlvbiBpZD1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5PdXIgU2VydmljZXM8L2gxPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJ3ZWItZGV2XCIgY2xhc3NOYW1lPVwic2VjdGlvbiB0ZW1wbGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzA1NjgxMmYxZDE4MzkwNjY1YmMyMGYzMTViNjZjNzk1MDY2ZTUxM2YvNjgwNzQvaW1hZ2VzL2NvZGUtc2NnLnN2Z1wiIGFsdD1cIm1hbiBzdGFyaW5nIGF0IGFuIG9wZW4gYnJvd3NlciB3aW5kb3dcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDI+V2ViIERlc2lnbiAmIERldmVsb3BtZW50IERvbmUgRGlmZmVyZW50bHk8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldoYXQgbWFrZXMgdXMgdW5pcXVlIGluIHRoZSBkZXZlbG9wbWVudCB3b3JsZCBpcyB0aGF0IHdlIGRvbid0IHVzZSBXb3JkUHJlc3MsIGZyYW1ld29ya3MsIG9yIHBhZ2UgYnVpbGRlcnMuICBcbiAgICAgICAgICAgICAgICBXZSBtZXRpY3Vsb3VzbHkgd3JpdGUgdGhlIGNvZGUgbGluZSBieSBsaW5lLiAgVGhpcyBnaXZlcyB1cyBtdWNoIG1vcmUgY29udHJvbCBvdmVyIHRoZSBkZXNpZ24sIFxuICAgICAgICAgICAgICAgIGFuZCB0aGUgd2Vic2l0ZSBwZXJmb3JtcyBsaWdodG5pbmcgZmFzdCBiZWNhdXNlIHRoZXJlJ3Mgbm8gYmxvYXRlZCBvciBtZXNzeSBjb2RlIHRoYXQgc2xvd3MgaXQgZG93bi5cbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgV2Vic2l0ZXMgYnVpbHQgYnkgaGFuZCB3aWxsIDxzcGFuPm91dC1wZXJmb3JtIG1vc3QgV29yZFByZXNzIHNpdGVzPC9zcGFuPiBhbmQgZHJhZyBhbmQgZHJvcCBwYWdlIGJ1aWxkZXJzIFxuICAgICAgICAgICAgICAgIHdoaWNoIGNvdWxkIGNvc3QgdGhvdXNhbmRzIG9mIGRvbGxhcnMuICBXaGVuIGl0IGNvbWVzIHRvIHRoZSB3ZWIsIHRoZSBmYXN0ZXIgYW5kIG1vcmUgb3JnYW5pemVkIHdlYnNpdGVzIHdpbi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInBhcGVyLWFpcnBsYW5lLXBhdGggY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1OC4wNjQgNTguMDY0XCIgIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjNDNCN0ZGJ319IHBvaW50cz1cIjE3LjA2NCwzMS4wMzIgNTguMDY0LDEwLjAzMiAyNC4wNjQsMzUuMDMyIDQ0LjA2NCw0OC4wMzIgNTguMDY0LDEwLjAzMiAwLDIyLjAzMiBcIiBkYXRhLW9yaWdpbmFsPVwiIzczODNCRlwiIGNsYXNzTmFtZT1cIlwiIGRhdGEtb2xkX2NvbG9yPVwiIzczODNCRlwiLz48cG9seWdvbiBzdHlsZT17e2ZpbGw6JyMzRDg0RDUnfX0gcG9pbnRzPVwiMjQuMDY0LDM1LjAzMiAyMC4xMjcsNDguMDMyIDE3LjA2NCwzMS4wMzIgNTguMDY0LDEwLjAzMiBcIiBkYXRhLW9yaWdpbmFsPVwiIzU1NjA4MFwiIGNsYXNzTmFtZT1cIlwiIGRhdGEtb2xkX2NvbG9yPVwiIzU1NjA4MFwiLz48cG9seWdvbiBzdHlsZT17e2ZpbGw6ICcjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMDY0LDQ4LjAzMiAzMS45MTIsNDAuMTMzIFwiIGRhdGEtb3JpZ2luYWw9XCIjNDY0RjY2XCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiM0NjRGNjZcIi8+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBpZD1cInNlb1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC84MmRmYTMxYmQ3MjQ1ZDFjNWI3YmU4ZmQ1YjRlZDI4MWI2YzMyZDYzLzE4M2Q3L2ltYWdlcy9zcGVlZC5zdmdcIiBhbHQ9XCJtYW4gc3RhbmRpbmcgaW4gZnJvbnQgb2YgYSBjb21wdXRlclwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgyPlNlYXJjaCBFbmdpbmUgT3B0aW1pemF0aW9uIEZvciAyMDIxPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5JZiBzb21lb25lIHRlbGxzIHlvdSB0aGV5IGNhbiBnZXQgeW91IHRvIHRoZSBmcm9udCBwYWdlIG9mIEdvb2dsZSBpbiAzIG1vbnRocyAtIDxzcGFuPlJVTiE8L3NwYW4+IFVubGVzcyB5b3VyIHdlYnNpdGUgXG4gICAgICAgICAgICAgICAgICAgd2FzIGZlYXR1cmVkIGJ5IFRoZSBOZXcgWW9yayBUaW1lcyBpdCBjb3VsZCB0YWtlIHllYXJzIHRvIHJhbmsgaW4gdGhlIHRvcCBvZiB0aGUgc2VhcmNoIHJlc3VsdHMuXG4gICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgIFdlIG9mZmVyIGEgbnVtYmVyIG9mIHRoZSBsYXRlc3Qgc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gdGVjaG5pcXVlcyBmb3IgMjAyMTpcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz5LZXl3b3JkLUNlbnRlcmVkIENvbnRlbnQgJiBCbG9nczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+TW9iaWxlLUZpcnN0LU9wdGltaXplZCBmb3IgdGhlIEJlc3QgRXhwZXJpZW5jZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+Q2xlYW4gJiBPcmdhbml6ZWQgQ29kZSBTdHJ1Y3R1cmUgRm9yIFdlYiBDcmF3bGVyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+RnVsbHkgUmVzcG9uc2l2ZSBGb3IgTW9iaWxlLCBUYWJsZXQsICYgRGVza3RvcDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJwYXBlci1haXJwbGFuZS1wYXRoIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTguMDY0IDU4LjA2NFwiICB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBjbGFzc05hbWU9XCJcIj48Zz48cG9seWdvbiBzdHlsZT17e2ZpbGw6ICcjNDNCN0ZGJ319IHBvaW50cz1cIjE3LjA2NCwzMS4wMzIgNTguMDY0LDEwLjAzMiAyNC4wNjQsMzUuMDMyIDQ0LjA2NCw0OC4wMzIgNTguMDY0LDEwLjAzMiAwLDIyLjAzMiBcIiBkYXRhLW9yaWdpbmFsPVwiIzczODNCRlwiIGNsYXNzTmFtZT1cIlwiIGRhdGEtb2xkX2NvbG9yPVwiIzczODNCRlwiLz48cG9seWdvbiBzdHlsZT17e2ZpbGw6JyMzRDg0RDUnfX0gcG9pbnRzPVwiMjQuMDY0LDM1LjAzMiAyMC4xMjcsNDguMDMyIDE3LjA2NCwzMS4wMzIgNTguMDY0LDEwLjAzMiBcIiBkYXRhLW9yaWdpbmFsPVwiIzU1NjA4MFwiIGNsYXNzTmFtZT1cIlwiIGRhdGEtb2xkX2NvbG9yPVwiIzU1NjA4MFwiLz48cG9seWdvbiBzdHlsZT17e2ZpbGw6JyMzRDg0RDUnfX0gcG9pbnRzPVwiMjQuMDY0LDM1LjAzMiAyMC4wNjQsNDguMDMyIDMxLjkxMiw0MC4xMzMgXCIgZGF0YS1vcmlnaW5hbD1cIiM0NjRGNjZcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzQ2NEY2NlwiLz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJncmFwaGljLWRlc2lnblwiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9hOWNiNDJhNTI3YThmN2QxNmYzODA0ZDg2ZGMxMjI2MWMzZjMzZjgwLzU4ZDYwL2ltYWdlcy9kZXNpZ24tc3ZnLnN2Z1wiIGFsdD1cIm1hbiBzdGFuZGluZyBuZXh0IGdyYXBoaWMgZGlzcGxheVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ29zLCBHcmFwaGljIERlc2lnbiwgJiBCcmFuZGluZzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+V2UgYWxzbyBvZmZlciBsb2dvIGFuZCBncmFwaGljIGRlc2lnbiBzZXJ2aWNlcyB2aWEgb3VyIG93biBpbi1ob3VzZSBncmFwaGljIGRlc2lnbmVyLiAgSWYgeW91IGhhdmUgYW4gXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nIGxvZ28gdGhhdCBuZWVkcyBhIHRvdWNoIHVwIG9yIG5lZWQgYSBjb21wbGV0ZWx5IG5ldyBvbmUgd2UgY2FuIGhlbHAgYnVpbGQgeW91ciBidXNpbmVzcydzIGJyYW5kLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IExvZ29zIFN0YXJ0aW5nIGF0ICQzNTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmF0ZXMgbWF5IGluY3JlYXNlIGJhc2VkIG9uIGNvbXBsZXhpdHksIG51bWJlciBvZiBob3VycywgYW5kIG51bWJlciBvZiByZXZpc2lvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+U29jaWFsIE1lZGlhIEdyYXBoaWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1ha2UgYSBwb3N0IHRoYXQgc3RhbmRzIG91dCB3aXRoIGl0cyBvd24gY3VzdG9tIGdyYXBoaWNzLiAgR2l2ZSB1cyBhIGNhbGwgZm9yIHBsYW5zIGFuZCByYXRlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJ1cGRhdGVzXCIgY2xhc3NOYW1lPVwic2VjdGlvbiB0ZW1wbGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TGlmZXRpbWUgVXBkYXRlcyBGb3IgWW91ciBXZWJzaXRlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIGNoYW5nZXMgaXRzIHNlYXJjaCBhbG9ncml0aG0gc3RhbmRhcmRzIGV2ZXJ5IHNvIG9mdGVuLCBjaGFuZ2luZyB3aGF0IGlzIGltcG9ydGFudCB0byByYW5rLiAgQW5kIHdlYiBcbiAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eSBndWlkZWxpbmVzIGZvciB1c2VycyB3aXRoIHNjcmVlbiByZWFkZXJzIGdldCB1cGRhdGVkIGFzIHdlbGwuICBTbyB3ZSBhbHNvIGluY2x1ZGUgPHNwYW4+bGlmZXRpbWUgdXBkYXRlczwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgIHRvIHlvdXIgd2Vic2l0ZSB0byBtYWtlIHN1cmUgaXQgbmV2ZXIgZ29lcyBvdXQgb2YgZGF0ZSBhbmQgaXMgYWx3YXlzIGNoYW5naW5nIHdpdGggdGhlIHRpbWVzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEycHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PGc+PHBhdGggZD1cIm00MDguMDQ5IDM0MC41MjN2LTM1LjY0MmMwLTQuMTQ0LTMuMzYtNy41MDQtNy41MDQtNy41MDRzLTcuNTA0IDMuMzYtNy41MDQgNy41MDR2MzUuNjQyYzAgMS4zNzktMS4xMjIgMi41MDEtMi41MDEgMi41MDFoLTk5Ljc3MmMtMy4wNjYtMzUuMDE3IDE3LjIxNy02OS4xNDcgNTEuMTc1LTgyLjI1NiA2Ljc2NS0yLjYxMSAxMC4zNjktMTAuMDkgOC4yMDUtMTcuMDI3bC05LjczMy0zMS4yMjhjLTEuMTIzLTMuNjAxLTMuNzA4LTYuNjIzLTcuMDkxLTguMjkzLTMuMzk3LTEuNjc2LTcuMzktMS44ODgtMTAuOTU0LS41NzktMzMuOTI2IDEyLjQ1Ni02MS40ODcgMzcuMjM2LTc3LjYwOCA2OS43NzUtMTYuMTc2IDMyLjY1Mi0xOS4xMjYgNjkuNzUxLTguMzA3IDEwNC40NjIgMTEuNzUxIDM3LjcgMzguNzA4IDY4LjU2NyA3NC4zOSA4NS40My0uOTM2IDMuNjkzLjAwNiA3LjU3OSAyLjYzIDEwLjQ4NyAzLjA1IDMuMzk3IDcuNzA4IDQuNjE3IDExLjk2NSAzLjI3NWw0NS4wMDYtMTQuMDI4YzMuMjIxLTEuMDAzIDUuODI4LTMuMzU4IDcuMTU1LTYuNDU5czEuMjI5LTYuNjEzLS4yNjktOS42MzZsLTIwLjkzNC00Mi4yNGMtMi4wMTctNC4wNy02LjA4OC02LjUxMi0xMC42MzEtNi4zOTItNC41NDEuMTI3LTguNDcxIDIuOC0xMC4yNTggNi45NzZsLTEuMDMyIDIuNDEyYy0xOS4zNDEtOS44NDQtMzMuOTE2LTI2Ljk5OC00MC4zOTYtNDcuNzg4LS4xOTUtLjYyNi0uMzU4LTEuMjU1LS41MzctMS44ODJoOTYuOTk0YzkuNjU2IDAgMTcuNTExLTcuODU1IDE3LjUxMS0xNy41MXptLTc0LjQ2IDgzLjMyMWM0LjgwNyAyLjA1MSAxMC4zOTQtLjIgMTIuNDUzLTUuMDE2bC4yOC0uNjU0IDE1Ljc0IDMxLjc2LTM0LjY1NyAxMC44MDJjLjA0MS0xLjMwNi0uMTkzLTIuNjE4LS43MDEtMy44NjYtLjk1MS0yLjMzOC0yLjc1NS00LjE3Mi01LjA3OS01LjE2NS0zNC4wNTEtMTQuNTU4LTU5Ljg3Mi00My4wOTUtNzAuODQzLTc4LjI5NC0xOS44OC02My43ODEgMTMuMzMtMTMxLjc0MyA3NS42NjQtMTU1LjI3NGw5LjA1IDI5LjAzOGMtNDYuMDk5IDE4LjQxNS03MC41NjIgNjkuNjY1LTU1Ljc0NCAxMTcuMjA2IDguMzM5IDI2Ljc1MyAyNy45NjEgNDguNDI1IDUzLjgzNyA1OS40NjN6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxjaXJjbGUgY3g9XCI1NS40NjhcIiBjeT1cIjkxLjE0NlwiIHI9XCIxNC42MzNcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PGNpcmNsZSBjeD1cIjk5Ljk2OVwiIGN5PVwiOTEuMTQ2XCIgcj1cIjE0LjYzM1wiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48Y2lyY2xlIGN4PVwiMTQ0LjQ2OVwiIGN5PVwiOTEuMTQ2XCIgcj1cIjE0LjYzM1wiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTUwNS41OTEgMjkzLjk5Yy0xMi4wNjgtMzguNzE5LTM5LjkxOS02OS45OTQtNzYuODYtODYuNTc5bC4wMzUtLjA4MWMxLjc4Ny00LjE3NiAxLjAwNi04Ljg2NS0yLjAzOC0xMi4yMzYtMy4wNDQtMy4zNzItNy42My00LjYyNy0xMS45NjUtMy4yNzVsLTYuNzE0IDIuMDkzdi0xNDIuMDA3YzAtOS42NTUtNy44NTUtMTcuNTEtMTcuNTEtMTcuNTFoLTI5Ni42NjRjLTQuMTQ0IDAtNy41MDQgMy4zNi03LjUwNCA3LjUwNHMzLjM2IDcuNTA0IDcuNTA0IDcuNTA0aDI5Ni42NjRjMS4zNzkgMCAyLjUwMSAxLjEyMiAyLjUwMSAyLjUwMXY4MS41NDVoLTM3OC4wMzJ2LTgxLjU0NGMwLTEuMzc5IDEuMTIyLTIuNTAxIDIuNTAxLTIuNTAxaDM4LjIyOGM0LjE0NCAwIDcuNTA0LTMuMzYgNy41MDQtNy41MDRzLTMuMzYtNy41MDQtNy41MDQtNy41MDRoLTM4LjIyN2MtOS42NTUtLjAwMS0xNy41MSA3Ljg1NC0xNy41MSAxNy41MDl2Mjg4LjYxOGMwIDkuNjU1IDcuODU1IDE3LjUxIDE3LjUxIDE3LjUxaDE4MC40OTNjNC4xNDQgMCA3LjUwNC0zLjM2IDcuNTA0LTcuNTA0cy0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0aC0xODAuNDkzYy0xLjM3OSAwLTIuNTAxLTEuMTIyLTIuNTAxLTIuNTAxdi0xOTIuMDY1aDM3OC4wMzF2NTAuMTMxbC0yMy4yODQgNy4yNThjLTMuMjIgMS4wMDMtNS44MjggMy4zNTctNy4xNTUgNi40NTktMS4zMjcgMy4xMDEtMS4yMjkgNi42MTMuMjY5IDkuNjM2bDIwLjkzNCA0Mi4yNGMyLjAxNyA0LjA3IDYuMTAzIDYuNTExIDEwLjYzMSA2LjM5MiA0LjU0MS0uMTI3IDguNDcxLTIuOCAxMC4yNTctNi45NzZsLjI5Ni0uNjkyYzIwLjY1MyA5LjU4OCAzNi4xNjkgMjcuMjA5IDQyLjk3NiA0OS4wNDcgMTIuNTg1IDQwLjM3OC04LjQzOCA4My45MjktNDcuODYyIDk5LjE0Ny02Ljc2MyAyLjYxMS0xMC4zNjcgMTAuMDkxLTguMjA0IDE3LjAyN2w5LjczMyAzMS4yMjdjMi4xNDUgNy40MTQgMTAuODY5IDExLjY3OCAxOC4wNDYgOC44NzMgMzMuOTI1LTEyLjQ1NiA2MS40ODYtMzcuMjM2IDc3LjYwNy02OS43NzUgMTYuMTc2LTMyLjY1MyAxOS4xMjYtNjkuNzUyIDguMzA3LTEwNC40NjN6bS04OS45OTIgMTU5Ljc0LTkuMDUxLTI5LjAzOWM0Ni4wOTktMTguNDE1IDcwLjU2Mi02OS42NjUgNTUuNzQ0LTExNy4yMDYtOC43MDQtMjcuOTI0LTI5LjM5OS01MC4wMzMtNTYuNzgxLTYwLjY2LTQuMzktMS43MDUtOS4yMzkuMDQzLTExLjU4MyAzLjk4OGwtMTUuNzg5LTMxLjg2IDM0LjA2MS0xMC42MTZjLS40MDEgMS44NjItLjIzMSAzLjc5OS41MTMgNS42Ljk3IDIuMzUgMi44ODIgNC4yNDQgNS4yNDQgNS4xOTYgMzUuMzA4IDE0LjIyNyA2Mi4wMjcgNDMuMTM5IDczLjMwNSA3OS4zMjMgMTkuODggNjMuNzgyLTEzLjMzIDEzMS43NDQtNzUuNjYzIDE1NS4yNzR6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNTUuMTg3IDE2Ni43MDhjLTEyLjA1MiAwLTIxLjg1NiA5LjgwNS0yMS44NTYgMjEuODU2djcxLjM5NmMwIDEyLjA1MiA5LjgwNCAyMS44NTYgMjEuODU2IDIxLjg1Nmg3MS4zOTZjMTIuMDUyIDAgMjEuODU2LTkuODA0IDIxLjg1Ni0yMS44NTZ2LTcwLjczOWMwLTEyLjQxNC0xMC4wOTktMjIuNTEzLTIyLjUxMy0yMi41MTN6bTc4LjI0NCAyMi41MTN2NzAuNzM5YzAgMy43NzYtMy4wNzIgNi44NDgtNi44NDggNi44NDhoLTcxLjM5NmMtMy43NzYgMC02Ljg0OC0zLjA3Mi02Ljg0OC02Ljg0OHYtNzEuMzk2YzAtMy43NzYgMy4wNzItNi44NDggNi44NDgtNi44NDhoNzAuNzRjNC4xMzguMDAxIDcuNTA0IDMuMzY3IDcuNTA0IDcuNTA1elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTE3Ni40MjggMTg2Ljc4Mmg1NS4xOTNjNC4xNDQgMCA3LjUwNC0zLjM2IDcuNTA0LTcuNTA0cy0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0aC01NS4xOTNjLTQuMTQ0IDAtNy41MDQgMy4zNi03LjUwNCA3LjUwNHMzLjM2IDcuNTA0IDcuNTA0IDcuNTA0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTE3Ni40MjggMjIxLjQ4OGg1NS4xOTNjNC4xNDQgMCA3LjUwNC0zLjM2IDcuNTA0LTcuNTA0cy0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0aC01NS4xOTNjLTQuMTQ0IDAtNy41MDQgMy4zNi03LjUwNCA3LjUwNHMzLjM2IDcuNTA0IDcuNTA0IDcuNTA0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48L2c+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2lnbiBVcGRhdGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGV2ZXIgd2FudCBhIG5ldyBkZXNpZ24sIHdlIHdpbGwgcmVidWlsZCB5b3VyIHdlYnNpdGUgYXQgbm8gZXh0cmEgY29zdC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJweFwiPjxnPjxnPjxnPjxwYXRoIGQ9XCJtMjIwLjcxNiA1MTJjLTUwLjk1MSAwLTk5Ljg2OC0yMS43MTUtMTM0LjIwOC01OS41NzYtMi43ODgtMy4wNzQtMi41NTYtNy44MjcuNTE4LTEwLjYxNiAzLjA3NC0yLjc4NyA3LjgyNi0yLjU1NyAxMC42MTUuNTE4IDMxLjQ5NyAzNC43MjggNzYuMzU2IDU0LjY0NSAxMjMuMDc1IDU0LjY0NSAyNi41NzMgMCA1My4wMDktNi40MzEgNzYuNDQ3LTE4LjU5NiAyMi42NjktMTEuNzY1IDQyLjYzOS0yOC45MDMgNTcuNzQ5LTQ5LjU2MiAyLjQ5NC0zLjQwOSAzLjUxMS03LjU4NCAyLjg2NC0xMS43NTctLjY0OC00LjE3My0yLjg4Mi03Ljg0NS02LjI5MS0xMC4zMzlzLTcuNTg5LTMuNTE3LTExLjc1OC0yLjg2NGMtNC4xNzQuNjQ3LTcuODQ1IDIuODgxLTEwLjMzOSA2LjI5LTI1LjI4NSAzNC41NjctNjUuOTEgNTUuMjA0LTEwOC42NzIgNTUuMjA0LTc0LjE4NiAwLTEzNC41NDEtNjAuMzU1LTEzNC41NDEtMTM0LjU0MSAwLTI1LjY5NCA3LjI2My01MC42NjYgMjEuMDAzLTcyLjIxOCAxMy4zODgtMjEgMzIuMjY5LTM3Ljg2MyA1NC42MDEtNDguNzY0IDUuNzkzLTIuODI5IDkuMzY3LTkuMDg1IDguODI5LTE1LjUyMi0uNTMzLTYuMzg0LTUuMDEyLTExLjkyMi0xMS4xMjQtMTMuODAyLTMuODItMS4xNzUtNy45ODYtLjg0Ni0xMS41NzcuOTA2LTI3LjU2OSAxMy40NTgtNTAuODczIDM0LjI2OC02Ny4zOTMgNjAuMTgzLTE2Ljk4MyAyNi42MzgtMjUuOTYxIDU3LjQ4OC0yNS45NjEgODkuMjE4IDAgMzEuNDcgOC44NzcgNjIuMTIxIDI1LjY3IDg4LjY0MSAyLjIyMSAzLjUwNyAxLjE3OCA4LjE0OS0yLjMyOCAxMC4zNjktMy41MDYgMi4yMjItOC4xNDggMS4xNzktMTAuMzY5LTIuMzI4LTE4LjMyLTI4LjkyOS0yOC4wMDMtNjIuMzYxLTI4LjAwMy05Ni42ODIgMC0zNC41OTggOS43OTItNjguMjQzIDI4LjMxNy05Ny4yOTggMTguMDEtMjguMjUgNDMuNDE2LTUwLjkzNyA3My40NzMtNjUuNjEgNy40MDItMy42MTMgMTUuNzctNC4xMyAyMy41Ni0xLjQ1IDcuNzkxIDIuNjc5IDE0LjA3MSA4LjIzMiAxNy42ODUgMTUuNjM1IDMuNjEzIDcuNDAyIDQuMTI5IDE1Ljc3IDEuNDQ5IDIzLjU2MS0yLjY3OSA3Ljc5LTguMjMxIDE0LjA3LTE1LjYzNCAxNy42ODQtMTkuODQyIDkuNjg4LTM2LjYyMSAyNC42NzQtNDguNTIxIDQzLjM0LTEyLjE5OSAxOS4xMzMtMTguNjQ3IDQxLjMxMS0xOC42NDcgNjQuMTM4IDAgNjUuODk5IDUzLjYxMyAxMTkuNTEyIDExOS41MTIgMTE5LjUxMiAzNy45ODYgMCA3NC4wNzYtMTguMzM2IDk2LjU0MS00OS4wNDggNC44NjQtNi42NSAxMi4wMjUtMTEuMDA3IDIwLjE2Ni0xMi4yNjkgOC4xMzUtMS4yNjMgMTYuMjg2LjcyIDIyLjkzNSA1LjU4NiA2LjY0OSA0Ljg2MyAxMS4wMDYgMTIuMDI0IDEyLjI2OCAyMC4xNjQgMS4yNjMgOC4xNDEtLjcyIDE2LjI4Ny01LjU4NSAyMi45MzUtMTYuNDcxIDIyLjUxOC0zOC4yNCA0MS4yMDEtNjIuOTU1IDU0LjAyOC0yNS41NjkgMTMuMjctNTQuMzk4IDIwLjI4NS04My4zNzEgMjAuMjg1elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTI1Mi45MTYgOTYuMDI2Yy0yNi40NzUgMC00OC4wMTMtMjEuNTM5LTQ4LjAxMy00OC4wMTQuMDAxLTI2LjQ3NCAyMS41MzktNDguMDEyIDQ4LjAxMy00OC4wMTIgMjYuNDc1IDAgNDguMDE0IDIxLjUzOCA0OC4wMTQgNDguMDEzIDAgMjYuNDc0LTIxLjUzOSA0OC4wMTMtNDguMDE0IDQ4LjAxM3ptMC04MC45OTdjLTE4LjE4NyAwLTMyLjk4MyAxNC43OTYtMzIuOTgzIDMyLjk4MyAwIDE4LjE4OCAxNC43OTcgMzIuOTg0IDMyLjk4MyAzMi45ODQgMTguMTg4IDAgMzIuOTg0LTE0Ljc5NyAzMi45ODQtMzIuOTg0LjAwMS0xOC4xODYtMTQuNzk2LTMyLjk4My0zMi45ODQtMzIuOTgzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTQzOS41NjYgMzY2LjE2OGMtMy4wNDggMC01LjkxNC0xLjg2Ny03LjA0Mi00Ljg5bC0xNS4xMzYtNDAuNTgxYy00LjQyNC0xMi4wNjgtMTUuOTk2LTIwLjE1MS0yOC44MDgtMjAuMTUyaC05Ny40NzdjLTQuMTUxIDAtNy41MTUtMy4zNjQtNy41MTUtNy41MTV2LTcxLjE0M2MwLTQuMTUxIDMuMzY0LTcuNTE1IDcuNTE1LTcuNTE1aDkxLjA3MWM4Ljc0MyAwIDE1Ljg1Ni03LjExNCAxNS44NTYtMTUuODU3cy03LjExMy0xNS44NTYtMTUuODU2LTE1Ljg1NmgtOTEuMDcxYy00LjE1MSAwLTcuNTE1LTMuMzY0LTcuNTE1LTcuNTE1di0xNS4zOTljMC0xNi45MTMtMTMuNzU5LTMwLjY3Mi0zMC42NzItMzAuNjcyLTE2LjkxMiAwLTMwLjY3MSAxMy43NTktMzAuNjcxIDMwLjY3MnY4MS4yMjFjMCA0LjE1MS0zLjM2NCA3LjUxNS03LjUxNSA3LjUxNXMtNy41MTUtMy4zNjQtNy41MTUtNy41MTV2LTgxLjIyMWMwLTI1LjIgMjAuNTAxLTQ1LjcwMiA0NS43MDEtNDUuNzAyczQ1LjcwMiAyMC41MDIgNDUuNzAyIDQ1LjcwMnY3Ljg4NGg4My41NTdjMTcuMDMgMCAzMC44ODUgMTMuODU1IDMwLjg4NSAzMC44ODZzLTEzLjg1NSAzMC44ODctMzAuODg1IDMwLjg4N2gtODMuNTU3djU2LjExM2g4OS45NjJjMTkuMDkyLjAwMSAzNi4zMzQgMTIuMDQ0IDQyLjkwNSAyOS45NjlsMTUuMTIxIDQwLjU0MWMxLjQ1IDMuODg5LS41MjYgOC4yMTctNC40MTUgOS42NjctLjg2NS4zMjQtMS43NTIuNDc2LTIuNjI1LjQ3NnpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm00NDEuNTYxIDQ2MS44MjhjLTQuNDI2IDAtOC44MzYtLjk2NC0xMi45Ny0yLjg4LTcuNDg1LTMuNDctMTMuMTcxLTkuNjQ2LTE2LjAxMi0xNy4zOTFsLTI3LjgzMi03NC4xMDNjLTQuNDMxLTEyLjA4NS0xNi4wMDMtMjAuMTY3LTI4LjgxNS0yMC4xNjdoLTEwMy4wMTRjLTI1LjIwMSAwLTQ1LjcwMi0yMC41MDItNDUuNzAyLTQ1LjcwM3YtMzAuNTU5YzAtNC4xNTEgMy4zNjQtNy41MTUgNy41MTUtNy41MTVzNy41MTUgMy4zNjQgNy41MTUgNy41MTV2MzAuNTU5YzAgMTYuOTEzIDEzLjc2IDMwLjY3MyAzMC42NzMgMzAuNjczaDEwMy4wMTVjMTkuMDkxIDAgMzYuMzM0IDEyLjA0MyA0Mi45MDYgMjkuOTY4bDI3LjgzMiA3NC4xMDNjMy4wMjkgOC4yNjQgMTIuMTYgMTIuNDkzIDIwLjM2NiA5LjQ4NCAzLjk3Ny0xLjQ1OCA3LjE0OC00LjM3NyA4LjkyOS04LjIxOXMxLjk1OC04LjE0OS41LTEyLjEyNWwtMTMuNDA3LTM1Ljk0NmMtMS40NS0zLjg4OC41MjYtOC4yMTcgNC40MTUtOS42NjcgMy44ODktMS40NTEgOC4yMTYuNTI1IDkuNjY3IDQuNDE1bDEzLjQyMiAzNS45ODVjMi44NTQgNy43ODUgMi41MDggMTYuMTczLS45NjEgMjMuNjU4cy05LjY0NSAxMy4xNzEtMTcuMzkgMTYuMDEyYy0zLjQ3IDEuMjctNy4wNjYgMS45MDMtMTAuNjUyIDEuOTAzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48L2c+PC9nPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5XZWIgQWNjZXNzaWJpbGl0eTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPlN0YXlpbmcgb24gdG9wIG9mIHRoZSBsYXRlc3QgZ3VpZGVsaW5lcyBmb3Igd2ViIGFjY2Vzc2liaWxpdHkgY29tcGxpYW5jZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJMYXllcl8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIj48Zz48cGF0aCBkPVwibTI5OC42NzUgMTY1LjAxNGMtMzIuMTI0IDI0LjY4OS0zOC4xNzMgNzAuOTExLTEzLjQ4NCAxMDMuMDM1IDExLjk0MyAxNS41MzkgMjkuMjQ5IDI1LjUwMSA0OC43MjkgMjguMDUxIDMuMjQ5LjQyNSA2LjQ5Mi42MzUgOS43MTQuNjM1IDE2LjA5NSAwIDMxLjY0NS01LjI1MSA0NC41OTItMTUuMjAyIDE1LjUzOS0xMS45NDMgMjUuNTAxLTI5LjI0OSAyOC4wNTEtNDguNzI5IDIuNTQ5LTE5LjQ4LTIuNjI0LTM4Ljc2Ny0xNC41NjYtNTQuMzA2LTI0LjY5LTMyLjEyNC03MC45MTEtMzguMTcyLTEwMy4wMzYtMTMuNDg0em0xMDIuNzM1IDY1Ljg0NGMtMi4wMyAxNS41MDktOS45NTcgMjkuMjg0LTIyLjMyMSAzOC43ODYtMjUuNTcgMTkuNjUxLTYyLjM1OSAxNC44MzctODIuMDEtMTAuNzMzLTE5LjY1MS0yNS41NjktMTQuODM3LTYyLjM1OCAxMC43MzMtODIuMDEgMTAuNjAzLTguMTQ5IDIzLjEzMy0xMi4wOSAzNS41NzItMTIuMDkgMTcuNTU5IDAgMzQuOTM2IDcuODU2IDQ2LjQzOCAyMi44MjMgOS41MDMgMTIuMzY1IDEzLjYxOCAyNy43MTUgMTEuNTg4IDQzLjIyNHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0zMjUuNTUxIDE5OS45ODNjNi4yMDgtNC43NzEgMTMuOTEzLTYuODQgMjEuNzEtNS44MTggNy43OTEgMS4wMiAxNC43MDkgNSAxOS40ODEgMTEuMjA5IDUuOTY2IDcuNzYzIDE3Ljc0NC0xLjUxOCAxMS44ODktOS4xMzctMTQuOTA4LTE5LjM5OC00Mi44Mi0yMy4wNS02Mi4yMTctOC4xNDMtNy42NjggNS44OTMgMS40NjggMTcuNzgxIDkuMTM3IDExLjg4OXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm01MTEuNzk1IDE0NS41NTF2LS4zOTJjMC0zNi45MjktMzAuMDQ0LTY2Ljk3Mi02Ni45NzMtNjYuOTcyaC0zMTEuODc1Yy05LjY3MSAwLTkuNjcxIDE0Ljk5NCAwIDE0Ljk5NGgzMTEuODc1YzI4LjY2MSAwIDUxLjk3OSAyMy4zMTcgNTEuOTc5IDUxLjk3OHYuMzkyYzAgMjguNjYxLTIzLjMxNyA1MS45NzgtNTEuOTc5IDUxLjk3OGgtMi4wNTFjLTMuNDIzLTEzLjI0My05LjQ3OS0yNS43MDktMTcuOTgtMzYuNzY5LTM0LjQ3LTQ0Ljg1MS05OS4wMDMtNTMuMjk3LTE0My44NTQtMTguODI2LTE4LjgxOSAxNC40NjQtMzEuMjI2IDM0LjIyMS0zNi43NDUgNTUuNTk2aC0xNzcuMjE5Yy0yOC42NjEgMC01MS45NzktMjMuMzE3LTUxLjk3OS01MS45Nzh2LS4zOTJjMC0yOC42NjEgMjMuMzE3LTUxLjk3OCA1MS45NzktNTEuOTc4aDE4Ljk5M2M5LjY3MSAwIDkuNjcxLTE0Ljk5NCAwLTE0Ljk5NGgtMTguOTkzYy0zNi45MjktLjAwMS02Ni45NzMgMzAuMDQyLTY2Ljk3MyA2Ni45NzF2LjM5MmMwIDM2LjkyOSAzMC4wNDQgNjYuOTcyIDY2Ljk3MyA2Ni45NzJoMTc0LjUwNGMtMi42NzEgMjUuMjc0IDMuOTYxIDUxLjU3MSAyMC42MzQgNzMuMjY1IDE2LjY5OCAyMS43MjcgNDAuODU4IDM1LjY1IDY4LjAyOCAzOS4yMDYgNC41MjIuNTkyIDkuMDM3Ljg4NCAxMy41MjMuODg0IDE0Ljc0OCAwIDI5LjE2OC0zLjE4NSA0Mi40NjUtOS4yOTdsMTMuMTQ5IDE3LjEwOWMtOS4yNzUgNy4yNzktMTAuOTkyIDIwLjcyOS0zLjc5IDMwLjA5OSA0LjI0MiA1LjUxOSAxMC42NDkgOC40MTYgMTcuMTI0IDguNDE2IDIuODgzIDAgNS43NzktLjU3NiA4LjUwNC0xLjc0OWw0MC4yOTQgNTIuNTc0YzIxLjkwOCAyOC41MDYgNjYuODA0LTUuMzE2IDQ0LjU3MS0zNC4yNDNsLTQwLjMwOC01Mi41OTNjMi4zODgtMy4wMiAzLjk0Ni02LjYyMyA0LjQ1OS0xMC41MzkuNzQ3LTUuNzEyLS43NzQtMTEuMzczLTQuMjg1LTE1Ljk0LTcuMjAxLTkuMzctMjAuNjM5LTExLjE3Mi0zMC4wNjEtNC4wODNsLTEzLjE2NC0xNy4xMjhjNS44NTUtNy4wOTcgMTAuNzU3LTE0Ljk1NiAxNC41MDMtMjMuMzU0IDMuOTM5LTguODMyLTkuNzU0LTE0Ljk0LTEzLjY5NC02LjEwOC01Ljg3OSAxMy4xNzktMTUuMDc3IDI0LjgyNi0yNi42MDEgMzMuNjgzLTE4LjU1MSAxNC4yNTctNDEuNTQ2IDIwLjQzOC02NC43NDQgMTcuNDAxLTIzLjE5OS0zLjAzNi00My44MjgtMTQuOTI1LTU4LjA4NS0zMy40NzYtMjkuNDMzLTM4LjI5Ni0yMi4yMjItOTMuMzk2IDE2LjA3NC0xMjIuODI5czkzLjM5Ni0yMi4yMjEgMTIyLjgyOSAxNi4wNzVjMTEuMDQ0IDE0LjM3IDE3LjI5MSAzMS41IDE4LjA2NiA0OS41MzguNDE2IDkuNjYxIDE1LjM5NSA5LjAxOSAxNC45OC0uNjQzLS4wOTEtMi4xMDctLjI2My00LjItLjQ4LTYuMjg0IDM2LjYzMi0uMzUxIDY2LjMyNy0zMC4yNDUgNjYuMzI3LTY2Ljk1NnptLTE1LjEwNiAyNjIuMDU1Yy0xLjQ3MiAxMS4yNDktMTYuNDYyIDE1LjMwNS0yMy4zODYgNi4yOTVsLTM5Ljg5Ni01Mi4wNTUgMjAuNzg4LTE1Ljk3NyAzOS44OSA1Mi4wNDhjMi4xMzMgMi43NzYgMy4wNTggNi4yMTcgMi42MDQgOS42ODktLjQ1NSAzLjQ3Mi40NTQtMy40NzIgMCAwem0tNDIuNzMzLTg4Ljc1NGMyLjE4NSAyLjg0MyAxLjYzNyA3LjAzMS0xLjIwNiA5LjIxNmwtMzYuMTU5IDI3Ljc5MWMtMi44NzMgMi4yMDctNy4wMDggMS42NjctOS4yMTctMS4yMDZzLTEuNjY3LTcuMDA4IDEuMjA2LTkuMjE3bDM2LjE1OS0yNy43OWMyLjg3My0yLjIwOCA3LjAwOS0xLjY2OCA5LjIxNyAxLjIwNnptLTQ3Ljk5MS0xNC4yMzhjMi4xMjctMS42MzUgNC4xNzgtMy4zNiA2LjE2Ni01LjE1MmwxMS4xNjYgMTQuNTI5LTEyLjczIDkuNzg0LTExLjE1OS0xNC41MmMyLjIzMS0xLjQ1NyA0LjQyMS0zIDYuNTU3LTQuNjQxelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTY2LjQ3MyAxNDYuNDQ3YzAgNC4xNCAzLjM1NyA3LjQ5NyA3LjQ5NyA3LjQ5N2gxMzguOTQ0YzkuNjcxIDAgOS42NzEtMTQuOTk0IDAtMTQuOTk0aC0xMzguOTQ0Yy00LjE0IDAtNy40OTcgMy4zNTctNy40OTcgNy40OTd6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggRW5naW5lIFVwZGF0ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIHdlYnNpdGUgd2lsbCBzdGF5IHVwIHRvIGRhdGUgd2l0aCBHb29nbGUncyBzZWFyY2ggZ3VpZGVsaW5lcyBmb3IgcmFua2luZy48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiICB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBjbGFzc05hbWU9XCJcIj48Zz48Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTA3LjUyNywyMDguMTc5Yy0wLjkwOC00Ljc4Mi01LjA4OC04LjI0Mi05Ljk1NS04LjI0MkgyNjEuNDA0Yy01LjU5NiwwLTEwLjEzMiw0LjUzNi0xMC4xMzIsMTAuMTMydjk3LjI2NiAgICBjMCw1LjU5Niw0LjUzNiwxMC4xMzIsMTAuMTMyLDEwLjEzMmgxMTUuOTY3Yy0xMS43NTIsMjMuMTQ5LTMwLjA2NSw0Mi43LTUyLjY3MSw1NS45NThjLTIwLjcyOSwxMi4xNjgtNDQuNDg1LDE4LjU5OS02OC43LDE4LjU5OSAgICBjLTU2LjQxNywwLTEwNy42MTUtMzUuNDc5LTEyNy40MDQtODguMjk2Yy01LjcyLTE1LjIxMy04LjYyLTMxLjI3MS04LjYyLTQ3LjcyOWMwLTE1LjEzNCwyLjQ3MS0zMC4wMDksNy4zNC00NC4yMDYgICAgYzE4Ljg3MS01NC45MTksNzAuNTg2LTkxLjgxOCwxMjguNjg1LTkxLjgxOGMyNS41MjgsMCw1MC4zOTgsNy4xMSw3MS45MTYsMjAuNTYxYzMuNjg0LDIuMzAzLDguNDI3LDIuMDAxLDExLjc4OC0wLjc1MiAgICBsNzkuNjUtNjUuMjA5YzIuMzQxLTEuOTE3LDMuNzAzLTQuNzgsMy43MTQtNy44MDRjMC4wMTEtMy4wMjYtMS4zMzItNS44OTctMy42Ni03LjgzQzM3My42MzIsMjAuOTMzLDMxNS41OTksMCwyNTYsMCAgICBDMTE0Ljg0MSwwLDAsMTE0Ljg0MSwwLDI1NmMwLDQyLjM0NSwxMC41NTIsODQuMjk5LDMwLjUxNiwxMjEuMzI2Qzc1LjMwNyw0NjAuMzk2LDE2MS43MDgsNTEyLDI1Niw1MTIgICAgYzU5LjAwNCwwLDExNi41ODYtMjAuNTU2LDE2Mi4xMzktNTcuODc5YzQ0LjkyMi0zNi44MDcsNzYuMjY5LTg4LjE5LDg4LjI2MS0xNDQuNjc3YzMuNzE1LTE3LjQ0OSw1LjYtMzUuNDMxLDUuNi01My40NDUgICAgQzUxMiwyMzkuOTA2LDUxMC40OTUsMjIzLjgxNyw1MDcuNTI3LDIwOC4xNzl6IE0yNTYsMjAuMjY0YzUwLjc0NiwwLDEwMC4yNTcsMTYuNDc3LDE0MC43NTMsNDYuNjI4bC02NC40LDUyLjcyNCAgICBjLTIzLjI0LTEzLjA0My00OS40ODItMTkuOTA0LTc2LjM1My0xOS45MDRjLTYxLjkzNCwwLTExNy41MywzNi41MTEtMTQyLjU1NSw5Mi4xODRsLTYyLjg0OS01MS40NTQgICAgQzkxLjA3OSw2OC43NjcsMTY3Ljk3NywyMC4yNjQsMjU2LDIwLjI2NHogTTIwLjI2NCwyNTZjMC0zNC41ODUsNy40ODgtNjcuNDUzLDIwLjkyNC05Ny4wNzFsNjQuODE5LDUzLjA2NyAgICBjLTQuMTczLDE0LjI1MS02LjI5NSwyOS4wMTgtNi4yOTUsNDQuMDA0YzAsMTYuNDMsMi41MjUsMzIuNTIzLDcuNTAyLDQ3Ljk0bC02NC40MTIsNTIuNzI3ICAgIEMyOC4wNDEsMzI1LjM5LDIwLjI2NCwyOTAuODQ4LDIwLjI2NCwyNTZ6IE0yNTYsNDkxLjczNmMtODQuMDUsMC0xNjEuMjkxLTQ0LjUzMi0yMDMuNTY1LTExNi43NjhsNjIuNjc1LTUxLjMwNSAgICBjMTEuNTA0LDIzLjk4NiwyOC44ODcsNDQuNTk3LDUwLjg4OSw2MC4xMjJjMjYuNDI3LDE4LjY0Nyw1Ny41NDksMjguNTA0LDkwLDI4LjUwNGMyNS40MjQsMCw1MC40MTEtNi4xOTcsNzIuNzE5LTE3Ljk0ICAgIGw2NC44NTQsNTMuMDkzQzM1My42ODksNDc2LjA5NywzMDUuMzg4LDQ5MS43MzYsMjU2LDQ5MS43MzZ6IE00ODYuNTgxLDMwNS4yM2MtMTAuNjMsNTAuMDY3LTM3Ljc4Nyw5NS43NzUtNzYuNzE0LDEyOS4zNjIgICAgbC02Mi45MTctNTEuNTA4YzI1LjExOC0xOC4wMTYsNDQuNTUyLTQzLjIwOCw1NS40MTQtNzIuMTk1YzEuMTY2LTMuMTExLDAuNzMyLTYuNTk3LTEuMTYtOS4zMjcgICAgYy0xLjg5My0yLjczLTUuMDA1LTQuMzU5LTguMzI3LTQuMzU5SDI3MS41MzZ2LTc3LjAwM2gyMTcuNDkzYzEuNzk4LDExLjc4LDIuNzA3LDIzLjc4NiwyLjcwNywzNS43OTkgICAgQzQ5MS43MzYsMjcyLjU5OSw0OTAuMDAyLDI4OS4xNjEsNDg2LjU4MSwzMDUuMjN6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkdvb2dsZSBCdXNpbmVzcyBQcm9maWxlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2UgYWxzbyBoZWxwIG9wdGltaXplIGFuZCBtYW5hZ2UgeW91ciBHb29nbGUsIEJpbmcsICYgWWFob28gQnVzaW5lc3MgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkICsgQmxvZ2dpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNUQVJUSU5HIEFUPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4zMDA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMTAwMCsgV29yZCBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gV3JpdHRlbiBCeSBhbiBTRU8gU3BlY2lhbGlzdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDEgUG9zdCBQZXIgTW9udGg8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAkMTUwIFBlciBFeHRyYSBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+U3RhbmRhcmQ8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPjUgUEFHRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjE1MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBVbmxpbWl0ZWQgRWRpdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBJbmNsdWRlcyBIb3N0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gMjQvNyBDdXN0b21lciBTZXJ2aWNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gTGlmZXRpbWUgVXBkYXRlczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ29zICYgR3JhcGhpYyBEZXNpZ248L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPklOQ0xVREVEITwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyIHJldmlzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEFsbCBGaWxlIEZvcm1hdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBSZWFkeSB0byB1c2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBGUkVFIHcvIFN1YnNjcmlwdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG48L21haW4+XG4pXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlczsiLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBDb250YWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdCdcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYnVuZGxlcy8xZGQxMWEwNzg2NmM1NDY3YTk3NDRmNjM1ZGIyNGNiZTZlNmI2ZGQyLmNzc1wiLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPENvbnRhY3QgLz5cbn1cbiIsICJcblxuXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICBcblxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuXG4gICBcbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICBcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2YWxsZXktZm9ybVwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyb3VwXCI+XG4gICAgICAgICAgICA8cD5FbWFpbDo8L3A+XG4gICAgICAgICAgICA8cD5hbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZ3JvdXBcIj5cbiAgICAgICAgICAgIDxwPlBob25lOjwvcD5cbiAgICAgICAgICAgIDxwPig1MDkpIDQ4MS03NTEyPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vc3VibWl0LWZvcm0uY29tL051dGc5MTBFXCIgIGlkPSdjb250YWN0JyBuYW1lPSdDT05UQUNUIEZPUk0nPjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J2Zvcm0tbmFtZScgdmFsdWU9J2Zvcm0nLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3QtdG9wcGVyXCI+PHNwYW4+RFJPUDwvc3Bhbj4gVVMgQSBMSU5FPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdGFiSW5kZXg9ezF9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQnVzaW5lc3NcIiB0eXBlPVwidGV4dFwiIHRhYkluZGV4PXsyfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIHRhYkluZGV4PXszfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJwaG9uZSBudW1iZXJcIiBuYW1lPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIHR5cGU9XCJ0ZWxcIiB0YWJJbmRleD17NH1yZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGFyaWEtbGFiZWw9XCJ3cml0ZSB5b3VyIG1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIE1lc3NhZ2UgSGVyZS4uLi5cIiB0YWJJbmRleD17NX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb250YWN0LXN1Ym1pdFwiIGNsYXNzTmFtZT1cInByaW1hcnkgYnV0dG9uLXNvbGlkXCIgZGF0YS1zdWJtaXQ9XCIuLi5TZW5kaW5nXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC9tYWluPlxuXG4gIFxuKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BYm91dCdcbmltcG9ydCBBYm91dFN0eWxlcyBmcm9tICcuLi8uLi9hc3NldHMvc3R5bGVzL2Fib3V0LmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9idW5kbGVzL2JmNjJlN2E3ODcxZDk0MGMzYzZkZjE4N2VhZTkyNTg2MzYyOTllZDQuY3NzXCIsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8QWJvdXQgLz5cbn1cbiIsICJcblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuICAgIFxuICAgIFxuXG4gIFxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aDE+QWJvdXQgVXM8L2gxPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWxraSBEaWdpdGFsIFdlYiBTZXJ2aWNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDI+R2l2aW5nIFNtYWxsIEJ1c2luZXNzZXMgVGhlIEJpZyBCdXNpbmVzcyBUcmVhdG1lbnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwPk15IG5hbWUgaXMgQWxleCwgSSdtIHRoZSBvd25lciBhbmQgc29sZSBkZXZlbG9wZXIgb2YgQWxraSBEaWdpdGFsLiBBZnRlciB3b3JraW5nIGluIHRoZSB0ZWNoIGluZHVzdHJ5IGZvciBhIGxpdHRsZSBvdmVyIDQgeWVhcnMgSSBsYXVuY2hlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzIGJ1c2luZXNzIGFzIGEgd2F5IGZvciBtZSB0byBzZXJ2ZSBzbWFsbCBidXNpbmVzc2VzIHdoaWxlIGJ1aWxkaW5nIG15IG93bi4gTXkgZ29hbCBpcyB0byBidWlsZCBhIGNvbXBhbnkgdGhhdCBjYW4gZm9zdGVyIGNvbW11bml0eSwgYW5kIFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlIGEgc2FmZSBzcGFjZSBmb3IgaW5kdXN0cnkgcHJvZmVzc2lvbmFscyB0byBoYXJuZXNzIHRoZWlyIHNraWxscyB0byBidWlsZCBjYXJlZXJzIG9mIHRoZWlyIG93bi4gXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgIEEgbG90IG9mIHNtYWxsIGJ1c2luZXNzZXMgZG9uJ3QgaGF2ZSB0aGUgZnVuZHMgdG8gc3BlbmQgdGhvdXNhbmRzIG9mIGRvbGxhcnMgdXBmcm9udCBvbiBhIG5ldyB3ZWJzaXRlLlxuICAgICAgICAgICAgICAgIFRoZSBvbmVzIHRoYXQgZG8sIGdldCB0YWtlbiBhZHZhbnRhZ2Ugb2YgYW5kIGhhdmUgYSB0ZXJyaWJsZSB3ZWJzaXRlIHRoYXQgbG9va3MgbGlrZSBpdCB3YXMgYnVpbHQgYnkgc29tZW9uZSBpbiBhIGR1bmdlb24gXG4gICAgICAgICAgICAgICAgYW5kIGhhdmVuJ3Qgc2VlbiBkZXNpZ24gdHJlbmRzIGZvciB0aGUgbGFzdCAxMCB5ZWFycy4gQSBsb3Qgb2YgYnVzaW5lc3NlcyBhcmUgaW4gYSB0b3VnaCBzcG90IC0gdGhleSBlaXRoZXIgY2FuJ3QgYWZmb3JkIGEgZ29vZCB3ZWJzaXRlLCBhbmQgXG4gICAgICAgICAgICAgICAgaWYgdGhleSBjYW4gdGhleSBkb24ndCBrbm93IHdobyB0byB0cnVzdCB0byBtYWtlIHNvbWV0aGluZyBncmVhdC4gVGhhdCdzIHdoZXJlIHRoZSAkMCBkb3duIGFuZCAkMTAwIGEgbW9udGggbW9kZWwgY29tZXMgaW4uICBcbiAgICAgICAgICAgICAgICBJdCdzIG1vcmUgbWFuYWdhYmxlIGZvciBhIHNtYWxsIGJ1c2luZXNzIHRvIGhhbmRsZSBhbmQgd29uJ3QgaHVydCB0aGVpciBiYW5rIGFjY291bnRzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiY2lyY2xlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4+UXVhbGl0eSA8L3NwYW4+IE92ZXIgUXVhbnRpdHk8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldlIGZvY3VzIG9uIHRoZSBuZWVkcyBvbiBlYWNoIGluZGl2aWR1YWwgYnVzaW5lc3MgYW5kIHRhaWxvciBjb250ZW50IGFyb3VuZCB3aGF0IG1ha2VzIGl0IHVuaXF1ZS4gT3VyIGNvbGxhYm9yYXRpdmUgcHJvY2VzcyBpcyB2ZXJ5IGhhbmRzIG9uIFxuICAgICAgICAgICAgICAgICAgICBhcyB3ZSB3b3JrIGNsb3NlbHkgd2l0aCB5b3UgdG8gY3JlYXRlIGEgd2Vic2l0ZSB5b3UncmUgMTAwJSBoYXBweSB3aXRoIGFuZCBub3Qgc29tZXRoaW5nIHlvdSBqdXN0IHNldHRsZSBmb3IuIFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+MTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIFByZS1Xcml0dGVuIENvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSB3cml0ZSB1bmlxdWUgYW5kIGVuZ2FnaW5nIGNvbnRlbnQgYXJvdW5kIHlvdXIgY29tcGFueS4gIEV2ZXJ5b25lIGlzIHVuaXF1ZSE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+Mjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlVuYmVhdGFibGUgQ3VzdG9tZXIgU2VydmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIGF1dG9tYXRlZCBzeXN0ZW1zIC0gV2hlbiB5b3UgbmVlZCBoZWxwIHRoZSBsZWFkIGRldmVsb3BlciBhbnN3ZXJzIHlvdXIgY2FsbC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PHNwYW4+Mzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIExpbWl0cyBPbiBEZXNpZ248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gZWRpdCB0aGUgZGVzaWduIHRvIGNhdGVyIHRvIHlvdXIgdGFzdGVzLiAgRXZlcnl0aGluZyBpcyBjdXN0b21pemFibGUhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBhYm91dC1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgT1VSIFNFUlZJQ0VTXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cblxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImFib3V0LWNvbnRhY3RcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGFpbmVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXRlbVwiPlxuXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNvbnRhY3QtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBob25lOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4oNTA5KSA0ODEtNzUxMjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNvbnRhY3QtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVtYWlsOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5hbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL3N1Ym1pdC1mb3JtLmNvbS9OdXRnOTEwRVwiIGlkPSdjb250YWN0JyBtZXRob2Q9J3Bvc3QnIG5hbWU9J0FCT1VUIEZPUk0nPjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J2Zvcm0tbmFtZScgdmFsdWU9J0NvbnRhY3QgRm9ybScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3QtdG9wcGVyXCI+PHNwYW4+RFJPUDwvc3Bhbj4gVVMgQSBMSU5FPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgdHlwZT1cInRleHRcIiB0YWJJbmRleD17MX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIHRhYkluZGV4PXsyfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJwaG9uZSBudW1iZXJcIiBuYW1lPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiIHRhYkluZGV4PXszfXJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgYXJpYS1sYWJlbD1cIndyaXRlIHlvdXIgbWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgTWVzc2FnZSBIZXJlLi4uLlwiIHRhYkluZGV4PXs0fSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c2NyaXB0IHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzJz48L3NjcmlwdD5cbjxkaXYgY2xhc3NOYW1lPSdnLXJlY2FwdGNoYScgZGF0YS1zaXRla2V5PSc2TGRBdlVJVUFBQUFBSGpyam1qdE5UY1h5S20wV0t3ZWZMcC1kUXY5Jz48L2Rpdj5cbjxub3NjcmlwdD5cbjxkaXY+XG48ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMiwgaGVpZ2h0OiA0MjIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbjxkaXYgc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlxuXG57LyogPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkvZmFsbGJhY2s/az02TGRBdlVJVUFBQUFBSGpyam1qdE5UY1h5S20wV0t3ZWZMcC1kUXY5XCIgZnJhbWVCb3JkZXI9ezB9IHNjcm9sbGluZz1cIm5vXCJcbnN0eWxlPXt7d2lkdGg6IDMwMiwgaGVpZ2h0OiA0MjIsIGJvcmRlclN0eWxlOiBcIm5vbmVcIn19PlxuXG48L2lmcmFtZT4gKi99XG48L2Rpdj5cbjwvZGl2PlxuPGRpdiBzdHlsZT17e3dpZHRoOiAzMDAsIGhlaWdodDogNjAsIGJvcmRlclN0eWxlOiAnbm9uZScsIGJvdHRvbTogMTIsIGxlZnQ6IDI1LCBtYXJnaW46IDAsIHBhZGRpbmc6IDAsIHJpZ2h0OiAyNSwgYmFja2dyb3VuZDogJyNmOWY5ZjknLCBib3JkZXI6ICcxcHggc29saWQgI2MxYzFjMScsIGJvcmRlclJhZGl1czogM319PlxuPHRleHRhcmVhIGlkPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiBuYW1lPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIiBjbGFzc05hbWU9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiXG4gIHN0eWxlPXt7d2lkdGg6IDI1MCwgaGVpZ2h0OiA0MCwgYm9yZGVyOiAnMXB4IHNvbGlkICNjMWMxYzEnLCBtYXJnaW46ICcxMHB4IDI1cHgnLCBwYWRkaW5nOiAwLCByZXNpemU6ICdub25lJ319ID5cbjwvdGV4dGFyZWE+XG48L2Rpdj5cbjwvZGl2PlxuPC9ub3NjcmlwdD5cbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29udGFjdC1zdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5IGJ1dHRvbi1zb2xpZFwiIGRhdGEtc3VibWl0PVwiLi4uU2VuZGluZ1wiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7IiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9idW5kbGVzLzUzMWFhMDhhMTYxOWEyNmRmNjYzZjc4NjA5YzI4ZGE5MDUzMTU2NDUuY3NzXCIsICAgXG5cbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPE1haW4gLz5cbn1cbiIsICJcblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgXG4gICAgPG1haW4gaWQ9XCJtYWluXCI+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwibGFuZGluZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPlNtYWxsIEJ1c2luZXNzIFdlYiBEZXNpZ24gKyBEZXZlbG9wbWVudDwvaDE+XG4gICAgICAgICAgICA8aDI+Tm8gcGFnZSBidWlsZGVycyBvciBXb3JkUHJlc3MgLSBXZSBvZmZlciAxMDAlIGhhbmQtY29kZWQgd2Vic2l0ZXMgd2l0aCBzdXBlcmlvciByZXN1bHRzIHN0YXJ0aW5nIGF0ICQxNTAvbW8uPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHF1b3RlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgIEdFVCBJTiBUT1VDSCFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2NrLXVwIGRlc2t0b3AtZGlzcGxheVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvODFmZjNiOWFkMzFjNDRhZTFlNWQzYWYyZjBkNjM2NGQ2MGVkZWU4NS8yZjE1Zi9pbWFnZXMvbW9jay11cC1yZXBsYWNlLnBuZ1wiIGFsdD1cIm1vY2t1cCBvZiBhIHdlYnNpdGUgb24gY29tcHV0ZXIgZGVza3RvcCBhbmQgcGhvbmVcIi8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vY2stdXAgbW9iaWxlLWRpc3BsYXlcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzllNTQ4MjE4M2MwOGQ5OGZjNDNhNTZmYTFjOWE3ZjFhMGY2MWEyMDcvYTNiN2MvaW1hZ2VzL21vY2stdXAtbW9iaWxlLXJlcGFjZS5wbmdcIiBhbHQ9XCJhIG1vY2t1cCBvZiBhIHdlYnNpdGUgb24gY29tcHV0ZXIgZGVza3RvcCBhbmQgcGhvbmVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInN3b29wIGxpZ2h0LXN3b29wXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yNWU5NGVhYmIxY2RlYzI2MTNiZDI2NWQ2NDVkYzE1MzI0YmFjZmU4Lzg2ZjQ1L2ltYWdlcy9sYW5kaW5nLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInN3b29wIGRhcmstc3dvb3AgXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yYzQ5OTI2OWE0YTMzZmJiZmNhMjgwMTBkYjhmZGJiNjY4YTIzYzFjL2JlYmE2L2ltYWdlcy9sYW5kaW5nLXN3b29zaC1kYXJrLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwid2hhdC13ZS1kb1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LXRvcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LXdlLWRvLXRvcHBlciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPldIQVQgPC9zcGFuPiBXRSBET1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJncmFwaGljLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvMjkwNDhkOWVmZTg5MjUyMzk5MTIyY2QyNDg3ZjI1M2RjYmU5YmNjNC9jZjhhNS9pbWFnZXMvY29kZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5XZSBzcGVjaWFsaXplIGluIHNtYWxsIGJ1c2luZXNzIHdlYiBkZXNpZ24gYW5kIGRldmVsb3BtZW50IGZvciBjbGllbnRzIGFueXdoZXJlIGluIHRoZSBVUy4gRXZlcnkgbGluZSBvZiBjb2RlIGlzIHdyaXR0ZW4gYnkgaGFuZCB0byBlbnN1cmUgdGhlIGJlc3QgcGVyZm9ybWFuY2UsIHdoaWNoIGhlbHBzIGJyaW5nIGluIG1vcmUgY3VzdG9tZXJzIHRvIHlvdXIgc2l0ZSBhbmQgYnJpbmcgbW9yZSByZXZlbnVlIHRvIHlvdXIgYnVzaW5lc3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tY29udGVudCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI1MTJwdFwiIHZpZXdCb3g9XCItMTEgMCA1MTIgNTEyLjAwMVwiIHdpZHRoPVwiNTEycHRcIj48cGF0aCBkPVwibTI2MS40Mzc1IDUxMS40NDE0MDYgMTM4Ljg1MTU2Mi01NC45NDE0MDZjNTQuNzY1NjI2LTQ0LjkyOTY4OCA4OS43MTA5MzgtMTEzLjEzMjgxMiA4OS43MTA5MzgtMTg5LjUgMC0xMzUuMzA4NTk0LTEwOS42OTE0MDYtMjQ1LTI0NS0yNDVzLTI0NSAxMDkuNjkxNDA2LTI0NSAyNDVjMCAxMzUuMzEyNSAxMDkuNjkxNDA2IDI0NSAyNDUgMjQ1IDUuNTI3MzQ0IDAgMTEuMDAzOTA2LS4xOTkyMTkgMTYuNDM3NS0uNTU4NTk0em0wIDBcIiBmaWxsPVwiIzI3YTNmZlwiLz48cGF0aCBkPVwibTM4OC43NDIxODggMzE4Ljk0OTIxOWMxLjk1MzEyNC0yMy42NDQ1MzEtMS42NDg0MzgtNDcuMzM1OTM4LTEyLjExNzE4OC02OC42Mjg5MDctMjcuMDQyOTY5LTU1LjAxMTcxOC0yMC44Mzk4NDQtNTkuMDAzOTA2LTIxLjY3OTY4OC0xMTMuNjAxNTYyIDAtMTEuMTU2MjUtOS4wNDI5NjgtMjAuMTk1MzEyLTIwLjE5NTMxMi0yMC4xOTUzMTItMTEuMTU2MjUgMC0yMC4xOTUzMTIgOS4wMzkwNjItMjAuMTk1MzEyIDIwLjE5NTMxMiAwIDcuMjAzMTI1IDAgMjAzLjgzMjAzMSAwIDIwMy4wNjI1IDAgMy4xNDg0MzgtLjMzNTkzOCA2LjIyMjY1Ni0uOTU3MDMyIDkuMTg3NXYyOS4wNzAzMTJjMCAyNC40OTYwOTQtMTkuOTI5Njg3IDQ0LjQyOTY4OC00NC40MjU3ODEgNDQuNDI5Njg4LTE2LjI2OTUzMSAwLTcyLjM3NSAwLTExMC41NTA3ODEgMCAxNi45ODA0NjggMjMuNjE3MTg4IDQwLjIxNDg0NCA0Mi4xMTMyODEgNjcuMTc5Njg3IDUzLjMxMjUuMTY3OTY5LjA2NjQwNi4zMzU5MzguMTM2NzE5LjUwMzkwNy4yMDcwMzEgMTYuMjIyNjU2IDYuODU1NDY5IDI4LjYwOTM3NCAxOS43ODEyNSAzNS4xMzI4MTIgMzUuNDUzMTI1IDUyLjUzNTE1Ni0zLjQ4MDQ2OCAxMDAuNTQ2ODc1LTIzLjUwNzgxMiAxMzguODUxNTYyLTU0LjkzNzVsLTE1LjA1MDc4MS01NS4yOTI5NjhjLTIuMTQ4NDM3LTcuOTAyMzQ0LTIuOTA2MjUtMTYuMTE3MTg4LTIuMjM4MjgxLTI0LjI3NzM0NHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm04My42MDkzNzUgMTE3LjIzMDQ2OS02LjE1MjM0NC01LjY5OTIxOWMtOS40ODA0NjktOC43ODkwNjItMjQuNDI5Njg3LTguMjE4NzUtMzMuMjE0ODQzIDEuMjY1NjI1LTguNzg1MTU3IDkuNDgwNDY5LTguMjE0ODQ0IDI0LjQyOTY4NyAxLjI2NTYyNCAzMy4yMTQ4NDRsMzguMTAxNTYzIDM1LjMwNDY4N3ptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0yODUuNjIxMDk0IDBoLTE3Mi43MTQ4NDRjLTE2Ljc1NzgxMiAwLTMwLjM5MDYyNSAxMy42MzY3MTktMzAuMzkwNjI1IDMwLjM5NDUzMXYzNjMuOTgwNDY5YzAgMTYuNzU3ODEyIDEzLjYzMjgxMyAzMC4zOTQ1MzEgMzAuMzkwNjI1IDMwLjM5NDUzMWgxNzIuNzE0ODQ0YzE2Ljc1NzgxMiAwIDMwLjM5NDUzMS0xMy42MzY3MTkgMzAuMzk0NTMxLTMwLjM5NDUzMXYtMzYzLjk4MDQ2OWMwLTE2Ljc1NzgxMi0xMy42MzY3MTktMzAuMzk0NTMxLTMwLjM5NDUzMS0zMC4zOTQ1MzF6bTAgMFwiIGZpbGw9XCIjM2Q0ZWM2XCIvPjxwYXRoIGQ9XCJtMTQxLjAzNTE1NiAyMi41MzkwNjJjLTEuNjQ0NTMxLTIuNDQ1MzEyLTIuNjA1NDY4LTUuMzg2NzE4LTIuNjA1NDY4LTguNTU0Njg3IDAtNi4yMTg3NSAzLjcwMzEyNC0xMS41NjI1IDkuMDE1NjI0LTEzLjk4NDM3NWgtMzQuNTM5MDYyYy0xNi43ODUxNTYgMC0zMC4zOTQ1MzEgMTMuNjA5Mzc1LTMwLjM5NDUzMSAzMC4zOTQ1MzF2MzYzLjk4MDQ2OWMwIDE2Ljc4NTE1NiAxMy42MDkzNzUgMzAuMzkwNjI1IDMwLjM5NDUzMSAzMC4zOTA2MjVoMzYuNzE4NzV2LTM3NS41ODk4NDRjMC05LjU1ODU5My0zLjI1MzkwNi0xOC43MDMxMjUtOC41ODk4NDQtMjYuNjM2NzE5em0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48cGF0aCBkPVwibTEwMC4xMDkzNzUgMTkxLjk3NjU2MnYyMDIuMzk4NDM4YzAgNy4wNzAzMTIgNS43MzA0NjkgMTIuODAwNzgxIDEyLjc5Njg3NSAxMi44MDA3ODFoMTcyLjcxNDg0NGM3LjA2NjQwNiAwIDEyLjc5Njg3NS01LjczMDQ2OSAxMi43OTY4NzUtMTIuODAwNzgxIDAtNi45NDUzMTIgMC0xMDguMzM1OTM4IDAtMjAyLjM5ODQzOHptMCAwXCIgZmlsbD1cIiNlNmY3ZmVcIi8+PHBhdGggZD1cIm0xMDAuMTA5Mzc1IDE5MS45NzY1NjJ2MjAyLjM5ODQzOGMwIDcuMDcwMzEyIDUuNzMwNDY5IDEyLjgwMDc4MSAxMi43OTY4NzUgMTIuODAwNzgxaDMwLjI3MzQzOHYtMjE1LjE5OTIxOXptMCAwXCIgZmlsbD1cIiNkNWYxZmVcIi8+PHBhdGggZD1cIm0xNjkuNjc1NzgxIDI1My4wMzEyNWMwIDExLjA3NDIxOS04Ljk3NjU2MiAyMC4wNTA3ODEtMjAuMDUwNzgxIDIwLjA1MDc4MXMtMjAuMDUwNzgxLTguOTc2NTYyLTIwLjA1MDc4MS0yMC4wNTA3ODEgOC45NzY1NjItMjAuMDU0Njg4IDIwLjA1MDc4MS0yMC4wNTQ2ODggMjAuMDUwNzgxIDguOTgwNDY5IDIwLjA1MDc4MSAyMC4wNTQ2ODh6bTAgMFwiIGZpbGw9XCIjM2Q0ZWM2XCIvPjxwYXRoIGQ9XCJtMTY5LjY3NTc4MSAzMjcuMzgyODEyYzAgMTEuMDc0MjE5LTguOTc2NTYyIDIwLjA1NDY4OC0yMC4wNTA3ODEgMjAuMDU0Njg4cy0yMC4wNTA3ODEtOC45ODA0NjktMjAuMDUwNzgxLTIwLjA1NDY4OGMwLTExLjA3NDIxOCA4Ljk3NjU2Mi0yMC4wNTA3ODEgMjAuMDUwNzgxLTIwLjA1MDc4MXMyMC4wNTA3ODEgOC45NzY1NjMgMjAuMDUwNzgxIDIwLjA1MDc4MXptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNDcuMzU5Mzc1IDIzMy4xMTMyODFjLTEwLjAwNzgxMyAxLjEyODkwNy0xNy43ODUxNTYgOS42MDkzNzUtMTcuNzg1MTU2IDE5LjkxNzk2OSAwIDExLjA3NDIxOSA4Ljk3NjU2MiAyMC4wNTA3ODEgMjAuMDUwNzgxIDIwLjA1MDc4MSA2LjkwNjI1IDAgMTIuOTkyMTg4LTMuNDkyMTg3IDE2LjU5NzY1Ni04LjgwNDY4Ny0xNy4yODkwNjIgMS45NDkyMTgtMjguMjk2ODc1LTE3LjI2OTUzMi0xOC44NjMyODEtMzEuMTY0MDYzem0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48cGF0aCBkPVwibTE0Ny4zNTkzNzUgMzA3LjQ2ODc1Yy0xMC4wMDc4MTMgMS4xMjUtMTcuNzg1MTU2IDkuNjA5Mzc1LTE3Ljc4NTE1NiAxOS45MTQwNjIgMCAxMS4wNzgxMjYgOC45NzY1NjIgMjAuMDU0Njg4IDIwLjA1MDc4MSAyMC4wNTQ2ODggNi45MDYyNSAwIDEyLjk5MjE4OC0zLjQ5MjE4OCAxNi41OTc2NTYtOC44MDQ2ODgtMTcuMTgzNTk0IDEuOTMzNTk0LTI4LjM1OTM3NS0xNy4xNzk2ODctMTguODYzMjgxLTMxLjE2NDA2MnptMCAwXCIgZmlsbD1cIiMyYjM4OTRcIi8+PGcgZmlsbD1cIiMxMWRmZWZcIj48cGF0aCBkPVwibTIzMS41NjY0MDYgMjQ0LjY5NTMxMmgtMjguNDY4NzVjLTQuMTQwNjI1IDAtNy41LTMuMzU5Mzc0LTcuNS03LjUgMC00LjE0NDUzMSAzLjM1OTM3NS03LjUgNy41LTcuNWgyOC40Njg3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OSA3LjUgNy41IDAgNC4xNDA2MjYtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTI2MC4wMzUxNTYgMjc2LjM2NzE4OGgtNTYuOTM3NWMtNC4xNDQ1MzEgMC03LjUtMy4zNTkzNzYtNy41LTcuNSAwLTQuMTQ0NTMyIDMuMzU1NDY5LTcuNSA3LjUtNy41aDU2LjkzNzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjggNy41IDcuNSAwIDQuMTQwNjI0LTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PHBhdGggZD1cIm0yMzEuNTY2NDA2IDMxOS4wNDY4NzVoLTI4LjQ2ODc1Yy00LjE0MDYyNSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41czMuMzU5Mzc1LTcuNSA3LjUtNy41aDI4LjQ2ODc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjVzLTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PHBhdGggZD1cIm0yNjAuMDM1MTU2IDM1MC43MTg3NWgtNTYuOTM3NWMtNC4xNDQ1MzEgMC03LjUtMy4zNTU0NjktNy41LTcuNSAwLTQuMTQwNjI1IDMuMzU1NDY5LTcuNSA3LjUtNy41aDU2LjkzNzVjNC4xNDA2MjUgMCA3LjUgMy4zNTkzNzUgNy41IDcuNSAwIDQuMTQ0NTMxLTMuMzU5Mzc1IDcuNS03LjUgNy41em0wIDBcIi8+PC9nPjxwYXRoIGQ9XCJtMjg1LjUxOTUzMSAxNy41OTc2NTZoLTI1LjY2Nzk2OWMtMi40MjE4NzQgMC00LjM4MjgxMiAxLjk2MDkzOC00LjM4MjgxMiA0LjM3ODkwNiAwIDUuODA4NTk0LTQuNzUgMTAuNTU4NTk0LTEwLjU1NDY4OCAxMC41NTg1OTRoLTkxLjQ5NjA5M2MtNS44MDg1OTQgMC0xMC41NTg1OTQtNC43NS0xMC41NTg1OTQtMTAuNTU4NTk0IDAtMi40MTc5NjgtMS45NjA5MzctNC4zNzg5MDYtNC4zODI4MTMtNC4zNzg5MDZoLTI1LjY2Nzk2OGMtNy4wNzAzMTMgMC0xMi44MDA3ODIgNS43MzA0NjktMTIuODAwNzgyIDEyLjc5Njg3NXYxNjMuNTgyMDMxaDE5OC4zMTI1di0xNjMuNTgyMDMxYzAtNy4wNjY0MDYtNS43MzA0NjgtMTIuNzk2ODc1LTEyLjgwMDc4MS0xMi43OTY4NzV6bTAgMFwiIGZpbGw9XCIjZjk0OGI0XCIvPjxwYXRoIGQ9XCJtMTQzLjE3OTY4OCAyNC41MDc4MTJjLS4yMDMxMjYtLjgxMjUtLjMyMDMxMy0xLjY1NjI1LS4zMjAzMTMtMi41MjczNDMgMC0yLjQyMTg3NS0xLjk2MDkzNy00LjM4MjgxMy00LjM4MjgxMy00LjM4MjgxM2gtMjUuNjY3OTY4Yy03LjA3MDMxMyAwLTEyLjgwMDc4MiA1LjczMDQ2OS0xMi44MDA3ODIgMTIuNzk2ODc1djE2My41ODIwMzFoNDMuMTcxODc2em0wIDBcIiBmaWxsPVwiI2UwMGU4YlwiLz48cGF0aCBkPVwibTI4NS41MTk1MzEgMTcuNTk3NjU2aC0yNS42Njc5NjljLTIuNDIxODc0IDAtNC4zODI4MTIgMS45NjA5MzgtNC4zODI4MTIgNC4zNzg5MDYgMCA1LjgwODU5NC00Ljc1IDEwLjU1ODU5NC0xMC41NTQ2ODggMTAuNTU4NTk0aC01MC40NjQ4NDNsMTAzLjg3MTA5MyAxMzAuMjAzMTI1di0xMzIuMzQzNzVjMC03LjA2NjQwNi01LjczMDQ2OC0xMi43OTY4NzUtMTIuODAwNzgxLTEyLjc5Njg3NXptMCAwXCIgZmlsbD1cIiNmYzdhY2RcIi8+PHBhdGggZD1cIm0xNjYuOTE3OTY5IDc3LjIwNzAzMWgtMzQuNTg1OTM4Yy00LjE0MDYyNSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41czMuMzU5Mzc1LTcuNSA3LjUtNy41aDM0LjU4NTkzOGM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OSA3LjUgNy41IDAgNC4xNDA2MjUtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiIGZpbGw9XCIjZmM3YWNkXCIvPjxwYXRoIGQ9XCJtMTE3LjgxNjQwNiAyNDEuMTkxNDA2Yy03LjczMDQ2OCA4LjMzOTg0NC0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc1bC0zNC40OTYwOTQtMzEuOTY0ODQzYy04LjM0Mzc1LTcuNzMwNDY5LTguODM5ODQ0LTIwLjc2MTcxOS0xLjEwOTM3NS0yOS4xMDU0NjlzMjAuNzYxNzE5LTguODM5ODQ0IDI5LjEwNTQ2OS0xLjEwOTM3NWwzNC40OTYwOTMgMzEuOTY0ODQ0YzguMzM5ODQ0IDcuNzMwNDY4IDguODM5ODQ0IDIwLjc2MTcxOCAxLjEwOTM3NSAyOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMTE2LjcwNzAzMSAyMTIuMDg1OTM4LTE2LjQxMDE1Ni0xNS4yMDMxMjZjMi4xNjAxNTYgNy44MjQyMTkuMzY3MTg3IDE2LjU0Mjk2OS01LjU1MDc4MSAyMi45Mjk2ODgtNS45MjE4NzUgNi4zOTA2MjUtMTQuNDgwNDY5IDguODM5ODQ0LTIyLjQ0MTQwNiA3LjI4NTE1NmwxNi40MDYyNSAxNS4yMDMxMjVjOC4zNDM3NSA3LjczMDQ2OSAyMS4zNzEwOTMgNy4yMzA0NjkgMjkuMTA1NDY4LTEuMTA5Mzc1IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzc1LTEuMTA5Mzc1LTI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDI5Ny4zNjMyODFjLTcuNzMwNDY4IDguMzQzNzUtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NWwtMzQuNDk2MDk0LTMxLjk2NDg0NGMtOC4zNDM3NS03LjczMDQ2OC04LjgzOTg0NC0yMC43NjE3MTgtMS4xMDkzNzUtMjkuMTAxNTYyIDcuNzMwNDY5LTguMzQzNzUgMjAuNzYxNzE5LTguODM5ODQ0IDI5LjEwNTQ2OS0xLjEwOTM3NWwzNC40OTYwOTMgMzEuOTY0ODQ0YzguMzM5ODQ0IDcuNzMwNDY5IDguODM5ODQ0IDIwLjc1NzgxMiAxLjEwOTM3NSAyOS4xMDE1NjJ6bTAgMFwiIGZpbGw9XCIjZjljZmE5XCIvPjxwYXRoIGQ9XCJtMTE3LjgxNjQwNiAzNTMuNTM5MDYyYy03LjczMDQ2OCA4LjM0Mzc1LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzZsLTM0LjQ5NjA5NC0zMS45NjQ4NDRjLTguMzQzNzUtNy43MzA0NjktOC44Mzk4NDQtMjAuNzYxNzE5LTEuMTA5Mzc1LTI5LjEwNTQ2OXMyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjggOC44Mzk4NDQgMjAuNzYxNzE4IDEuMTA5Mzc1IDI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0zODUuMjM4MjgxIDQwMS4yMDcwMzFjLTEuMDY2NDA2LTMuOTI5Njg3LTEuNzg5MDYyLTcuOTMzNTkzLTIuMTY3OTY5LTExLjk3MjY1Ni0zOC4xNjQwNjIgNjIuNjU2MjUtMTEyLjI1NzgxMiA5MS43NTM5MDYtMTgxLjg1NTQ2OCA3My42NjAxNTYgNy43NjE3MTggNC45ODgyODEgMTUuOTg0Mzc1IDkuMzA4NTk0IDI0LjU4NTkzNyAxMi44ODI4MTMuMTY3OTY5LjA3MDMxMi4zMzU5MzguMTQwNjI1LjUwMzkwNy4yMTA5MzcgMTYuMjIyNjU2IDYuODUxNTYzIDI4LjYwOTM3NCAxOS43NzczNDQgMzUuMTMyODEyIDM1LjQ1MzEyNSA1Mi41MzUxNTYtMy40ODA0NjggMTAwLjU0Njg3NS0yMy41MTE3MTggMTM4Ljg1MTU2Mi01NC45NDE0MDZ6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjxwYXRoIGQ9XCJtMTE2LjcwNzAzMSAyNjguMjYxNzE5LTE2LjQxMDE1Ni0xNS4yMDMxMjVjMi4xNjAxNTYgNy44MjAzMTIuMzY3MTg3IDE2LjUzOTA2Mi01LjU1MDc4MSAyMi45Mjk2ODctNS45MjE4NzUgNi4zOTA2MjUtMTQuNDgwNDY5IDguODM5ODQ0LTIyLjQ0MTQwNiA3LjI4NTE1N2wxNi40MDYyNSAxNS4xOTkyMThjOC4zNDM3NSA3LjczMDQ2OSAyMS4zNzUgNy4yMzQzNzUgMjkuMTA1NDY4LTEuMTA5Mzc1IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzcxMDkzLTEuMTA5Mzc1LTI5LjEwMTU2MnptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDMyNC40MzM1OTQtMTYuNDEwMTU2LTE1LjIwMzEyNWMyLjE2MDE1NiA3LjgyNDIxOS4zNjcxODcgMTYuNTQyOTY5LTUuNTUwNzgxIDIyLjkyOTY4Ny01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44NDM3NS0yMi40NDE0MDYgNy4yODUxNTZsMTYuNDA2MjUgMTUuMjAzMTI2YzguMzQzNzUgNy43MzA0NjggMjEuMzc1IDcuMjM0Mzc0IDI5LjEwNTQ2OC0xLjEwOTM3NiA3LjczMDQ2OS04LjM0Mzc1IDcuMjMwNDY5LTIxLjM3NS0xLjEwOTM3NS0yOS4xMDU0Njh6bTAgMFwiIGZpbGw9XCIjZmJiYzhkXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TW9iaWxlLUZpcnN0IERlc2lnbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgc2l0ZSBmb3IgbW9iaWxlIGRldmljZXMgZmlyc3QsIHRoZW4gd2UgYWRkIG9uIHRvIGl0IHRvIG1ha2UgdGFibGV0IGFuZCBkZXNrdG9wLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJMYXllcl8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiPjxnPjxwYXRoIGQ9XCJtMjU2IDIxLjk5NWMtMTM1LjMxMSAwLTI0NS4wMDIgMTA5LjY5MS0yNDUuMDAyIDI0NS4wMDIgMCA1Mi4zNjcgMTYuNDM5IDEwMC44ODkgNDQuNDI1IDE0MC43MDhsMjg2LjgyMiA4OC42NjZjOTIuNzU1LTM0Ljg5MyAxNTguNzU3LTEyNC40MTkgMTU4Ljc1Ny0yMjkuMzczIDAtMTM1LjMxMS0xMDkuNjkxLTI0NS4wMDMtMjQ1LjAwMi0yNDUuMDAzelwiIGZpbGw9XCIjZmZkZDQwXCIvPjxwYXRoIGQ9XCJtMjMxLjQzMiAxMTMuNzY0YzAtOS4zMDYgMS4xNDYtMTguMzQ4IDMuMjktMjcuMDAxaC0xMzYuNzgzYy0zLjAzNCAwLTUuOTk1LjMxNi04Ljg1NS45MTEtMTIuODQ3IDExLjk2My0yNC40MDQgMjUuMjg4LTM0LjQ0NiAzOS43NDgtLjA1Ny45MDYtLjA5NiAxLjgxOC0uMDk2IDIuNzM4djI3Ni4yNzVjMTAuNDUxIDE1LjA3MSAyMi41NTEgMjguOTEyIDM2LjAzNSA0MS4yNjVsMjE2LjU3OSA1OC45MzZjMTIuNTYyLTIuNjcyIDI0Ljc2OS02LjMwMiAzNi41NC0xMC44MTZ2LTI2OS43OTRjLTYxLjkwMyAwLTExMi4yNjQtNTAuMzYtMTEyLjI2NC0xMTIuMjYyelwiIGZpbGw9XCIjMTY3Y2MxXCIvPjxwYXRoIGQ9XCJtMTYyLjE2NSA0ODAuMzk5LTIuMTEzLTMzNi4xMWMtLjAwMy0uNDkyLS4xODUtLjk2NC0uNDktMS4zNS01LjM0Ny02Ljc1Mi0yLjAxMS0xMS40MDQuMDgyLTEzLjM2Ni42ODUtLjY0Mi44NDYtMS42NzMuNDE3LTIuNTA4LTIuNDYzLTQuNzk2LjgxNS03LjgyOSAyLjE5NS04LjgzNC4zNzktLjI3Ni42NDgtLjY3Ni43NzktMS4xMjZsMy43NzMtMTMuMDYxYy4yMDMtLjcwMy4wNDEtMS40NzEtLjQ0OS0yLjAxNC02LjQ1OS03LjE2LTEuOTkzLTEyLjI3Ny40OTQtMTQuMzA0LjMxOC0uMjU5LjUzOS0uNTk2LjY2NC0uOTYzaC02OS41NzhjLTIzLjkyOSAwLTQzLjM5NyAxOS40NjgtNDMuMzk3IDQzLjM5N3YyNzYuMjczYzEwLjA1NCAxNC40OTkgMjEuNjMzIDI3Ljg1OCAzNC41MDMgMzkuODV6XCIgZmlsbD1cIiMwMjQ3ODhcIi8+PHBhdGggZD1cIm04MS41NDIgMTk1Ljg4N3YyNDMuMTA4YzQ0LjQzIDQ1LjA2MiAxMDYuMTc3IDczLjAwNSAxNzQuNDU4IDczLjAwNSAyMC45NTEgMCA0MS4yODUtMi42MzYgNjAuNjk1LTcuNTgzdi0yODEuNjgxYy0xOC43ODctNC42NTYtMzUuNzItMTQuMDU1LTQ5LjQ1NC0yNi44NDl6XCIgZmlsbD1cIiNlOWVmZmZcIi8+PHBhdGggZD1cIm04MS41NDIgNDM4Ljk5NmMyMi4yNzEgMjIuNTg3IDQ4Ljg4OCA0MC44NzUgNzguNTA2IDUzLjQ5NHYtMjk2LjYwM2gtNzguNTA2elwiIGZpbGw9XCIjZDNkY2ZiXCIvPjxnPjxwYXRoIGQ9XCJtMTY3LjE0OSAxMTcuODYyaC00LjMzM2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg0LjMzM2M0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiIzFlOTJkM1wiLz48L2c+PGc+PHBhdGggZD1cIm0yMzQuMzg0IDExNy44NjJoLTQxLjYzOGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg0MS42MzhjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiMxZTkyZDNcIi8+PC9nPjxwYXRoIGQ9XCJtMjMzLjY1MyAxMzYuMDI5aC04My4wMzVjLTYuNiAwLTEyLTUuNC0xMi0xMiAwLTUuNjctNC41OTYtMTAuMjY2LTEwLjI2Ni0xMC4yNjZoLTMwLjQxM2MtOS4wNTYgMC0xNi4zOTcgNy4zNDEtMTYuMzk3IDE2LjM5N3Y2OC4zODVoMTg4LjY0NGMtMTguMzc5LTE1Ljk1Ni0zMS41MzUtMzcuNzc1LTM2LjUzMy02Mi41MTZ6XCIgZmlsbD1cIiM5YmQ4ZjlcIi8+PHBhdGggZD1cIm0xNTAuNjE4IDEzNi4wMjljLTYuNiAwLTEyLTUuNC0xMi0xMiAwLTUuNjctNC41OTYtMTAuMjY2LTEwLjI2NS0xMC4yNjZoLTMwLjQxNGMtOS4wNTYgMC0xNi4zOTcgNy4zNDEtMTYuMzk3IDE2LjM5N3Y2OC4zODVoNzguNTA1di02Mi41MTdoLTkuNDI5elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxnIGZpbGw9XCIjMWU5MmQzXCI+PHBhdGggZD1cIm0zMTYuNjk1IDIxMC4yMzZjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjV2Mjg4LjQ1NWM1LjA2LTEuMTIgMTAuMDYzLTIuMzkyIDE1LTMuODE5di0yODQuNjM2YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjV6XCIvPjxwYXRoIGQ9XCJtODkuMDQyIDQ0Ni4yODJ2LTMxNi4xMjJjMC00LjkwNiAzLjk5MS04Ljg5NyA4Ljg5Ny04Ljg5N2gzMC40MTRjMS41MjUgMCAyLjc2NiAxLjI0IDIuNzY2IDIuNzY1IDAgMTAuNzUyIDguNzQ4IDE5LjUgMTkuNSAxOS41aDg4LjAzNWM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41IDAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVoLTg4LjAzNWMtMi40MzkgMC00LjUtMi4wNi00LjUtNC41IDAtOS43OTYtNy45Ny0xNy43NjUtMTcuNzY2LTE3Ljc2NWgtMzAuNDE0Yy0xMy4xNzcgMC0yMy44OTcgMTAuNzIxLTIzLjg5NyAyMy44OTd2MzAwLjg5MmM0Ljc3NiA1LjI5MyA5Ljc4NCAxMC4zNzEgMTUgMTUuMjN6XCIvPjwvZz48cGF0aCBkPVwibTE1OS42NDQgMTI5LjU3M2MuMzA2LS4yODYuNDg5LS42NTUuNTgtMS4wNDRoLTkuNjA2Yy0yLjQzOSAwLTQuNS0yLjA2LTQuNS00LjUgMC05Ljc5Ni03Ljk3LTE3Ljc2NS0xNy43NjYtMTcuNzY1aC0zMC40MTNjLTEzLjE3NyAwLTIzLjg5NyAxMC43MjEtMjMuODk3IDIzLjg5N3YzMDAuODkyYzQuNzc2IDUuMjkzIDkuNzg0IDEwLjM3MSAxNSAxNS4yM3YtMzE2LjEyM2MwLTQuOTA2IDMuOTkxLTguODk3IDguODk3LTguODk3aDMwLjQxNGMxLjUyNSAwIDIuNzY2IDEuMjQgMi43NjYgMi43NjUgMCAxMC43NTIgOC43NDggMTkuNSAxOS41IDE5LjVoOS4yODFjLS4wODMtLjIxLS4xOTUtLjQxLS4zMzctLjU5LTUuMzQ3LTYuNzUxLTIuMDExLTExLjQwNC4wODEtMTMuMzY1elwiIGZpbGw9XCIjMTY3Y2MxXCIvPjxwYXRoIGQ9XCJtMjQxLjkzNCAxNTcuMTA2aC04MS41ODV2MjYuMjg2aDk0LjI5MmMuNTY4IDAgMS4xMjQtLjA0OCAxLjY3NC0uMTE4LTUuODkyLTcuOTg0LTEwLjc1LTE2Ljc3Mi0xNC4zODEtMjYuMTY4elwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtMTYxLjM0OSAxNTcuMTA2aC0xNC43NTJjLTcuMjU5IDAtMTMuMTQzIDUuODg0LTEzLjE0MyAxMy4xNDNzNS44ODQgMTMuMTQzIDEzLjE0MyAxMy4xNDNoMTQuNzUyelwiIGZpbGw9XCIjM2M1OGEwXCIvPjxnPjxwYXRoIGQ9XCJtMTE2LjUzNSAxNDEuODMyaC0xMC4zMzRjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoMTAuMzM0YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZTllZmZmXCIvPjwvZz48cGF0aCBkPVwibTI3OS44MjEgMzQ0LjVoLTE2MS40MDVjLTUuNDQ1IDAtOS44OTktNC40NTUtOS44OTktOS44OTl2LTg3LjMyYzAtNS40NDUgNC40NTUtOS44OTkgOS44OTktOS44OTloMTYxLjQwNWM1LjQ0NSAwIDkuODk5IDQuNDU1IDkuODk5IDkuODk5djg3LjMyYzAgNS40NDUtNC40NTQgOS44OTktOS44OTkgOS44OTl6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PHBhdGggZD1cIm0xMDguNTE3IDI0Ny4yODF2ODcuMzJjMCA1LjQ0NSA0LjQ1NSA5Ljg5OSA5Ljg5OSA5Ljg5OWgxMDMuNzA2Yy0uMzE2LS41MjUtLjc3OC0uOTctMS4zNzQtMS4yNTUtOC4wNjgtMy44NDgtNy44NTQtMTAuMDQ2LTYuODQ4LTEzLjY5Mi40NDMtMS42MDctLjM3NC0zLjMxNS0xLjk0LTMuODg2LTE0LjMyLTUuMjE2LTExLjc2MS0xOC4wMzQtMTAuNjMzLTIxLjg2LjIxOC0uNzM5LjE3Mi0xLjUyNy0uMTQtMi4yMzJsLTEwLjk5LTI0LjgyM2MtLjQ3OS0xLjA4MS0xLjUxLTEuODM5LTIuNjktMS45MDgtOS42ODctLjU2Ny0xMS40MzQtOC40NjQtMTEuNjcyLTEyLjY4NC0uMDg0LTEuNDg0LTEuMTkxLTIuNzE0LTIuNjU2LTIuOTY0LTE2LjA0OS0yLjc0My0xNC43MTktMTUuMzQtMTMuNjMtMjAuMDM5LjEzOS0uNjAxLjA5NC0xLjIxNC0uMTAzLTEuNzc1aC00MS4wMjljLTUuNDQ2IDAtOS45IDQuNDU0LTkuOSA5Ljg5OXpcIiBmaWxsPVwiI2U4MDA1NFwiLz48Zz48cGF0aCBkPVwibTEzOC4yMyAzODIuMDAzaC01Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoNWM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTcgNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTEzLjUxNyAzODIuMDAzaC01Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoNWM0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjg5LjcyMSAzODIuMDAzaC05NC4wNzRjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjUgMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNWg5NC4wNzRjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjwvZz48Zz48cGF0aCBkPVwibTE5NS42NDcgMzgyLjAwM2gtMzcuMDgzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoMzcuMDgzYzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2ZmNDE1NVwiLz48L2c+PGc+PHBhdGggZD1cIm0xOTUuNjQ4IDM4OS44ODJjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjV2LTE1LjVjMC00LjE0MyAzLjM1OC03LjUgNy41LTcuNXM3LjUgMy4zNTcgNy41IDcuNXYxNS41YzAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNlODAwNTRcIi8+PC9nPjxlbGxpcHNlIGN4PVwiMTk5LjExOFwiIGN5PVwiMjkwLjk0MVwiIGZpbGw9XCIjZTllZmZmXCIgcng9XCIzOS4wNzFcIiByeT1cIjM5LjA3MVwiIHRyYW5zZm9ybT1cIm1hdHJpeCguMTYgLS45ODcgLjk4NyAuMTYgLTExOS45NjEgNDQwLjg4NSlcIi8+PHBhdGggZD1cIm0yMTEuOTU5IDMyNS42NjhjLTE0LjMyLTUuMjE2LTExLjc2MS0xOC4wMzQtMTAuNjMzLTIxLjg2LjIxOC0uNzM5LjE3Mi0xLjUyNy0uMTQtMi4yMzJsLTEwLjk5LTI0LjgyM2MtLjQ3OS0xLjA4MS0xLjUxLTEuODM5LTIuNjktMS45MDgtOS42ODctLjU2Ny0xMS40MzQtOC40NjQtMTEuNjcyLTEyLjY4NC0uMDQyLS43NDctLjM0NS0xLjQzLS44MjEtMS45NTUtOS4xMDggNy4xNTMtMTQuOTY1IDE4LjI1Ny0xNC45NjUgMzAuNzM2IDAgMjEuNTc4IDE3LjQ5MyAzOS4wNzEgMzkuMDcxIDM5LjA3MSA1LjE0NSAwIDEwLjA1My0xLjAwNCAxNC41NTEtMi44MTEtLjM0Ny0uNjktLjkzNi0xLjI1Mi0xLjcxMS0xLjUzNHpcIiBmaWxsPVwiI2JlYzhmN1wiLz48cGF0aCBkPVwibTIxMy44MDQgMjg2LjkxNS0xOS4wODEtMTIuMTk5Yy0zLjE4LTIuMDMzLTcuMzUyLjI1MS03LjM1MiA0LjAyNnYyNC4zOThjMCAzLjc3NSA0LjE3MiA2LjA1OSA3LjM1MiA0LjAyNmwxOS4wODEtMTIuMTk5YzIuOTM5LTEuODc5IDIuOTM5LTYuMTczIDAtOC4wNTJ6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PGc+PHBhdGggZD1cIm0xODAuNzQ3IDQxNC43NjNoLTcyLjIzYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDcyLjIzYzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjUgMCA0LjE0Mi0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PGc+PHBhdGggZD1cIm0yODkuNzIxIDQ0NC4xNDVoLTE4MS4yMDRjLTQuMTQyIDAtNy41LTMuMzU4LTcuNS03LjUgMC00LjE0MyAzLjM1OC03LjUgNy41LTcuNWgxODEuMjA0YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjUgMCA0LjE0Mi0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PHBhdGggZD1cIm0yODkuNzIxIDQ1Ni45MjJoLTE4MS4yMDRjLTEuOSAwLTMuNjMuNzEyLTQuOTUyIDEuODc3IDUuODMzIDQuNjQyIDExLjg4NCA5LjAyIDE4LjEzMyAxMy4xMjNoMTY4LjAyM2M0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48cGF0aCBkPVwibTI4OS43MjEgNDg0LjdoLTE0Ni4yYzExLjM5NSA1Ljg5OSAyMy4zMTMgMTAuOTI1IDM1LjY2NSAxNWgxMTAuNTM0YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjUuMDAxLTQuMTQyLTMuMzU3LTcuNS03LjQ5OS03LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PGNpcmNsZSBjeD1cIjM0My42OTVcIiBjeT1cIjExMy43NjNcIiBmaWxsPVwiIzJhNDI4Y1wiIHI9XCIxMTMuNzYzXCIvPjxwYXRoIGQ9XCJtMzg3LjE4MiAxNTUuMzVjLjA5Ny0xLjk1My0uNjEzLTMuODU2LTEuOTk2LTUuMjM5bC02LjY2Mi02LjY2MmMtMS4yLTEuMi0yLjgwOC0xLjg5MS00LjUwMi0xLjk5Ny0yMS42MS0xLjM1Ny0yMi43NzItMTkuNzY1LTIyLjcwOC0yNC41MzEuMDExLS44MTUtLjEzNy0xLjYyMi0uNDE3LTIuMzg3bC01Ljg3OC0xNi4wNzZjLS44MzctMi4yODctMi44MjktMy45MjYtNS4yMTktNC4zOTQtNTEuMDE3LTkuOTk1LTM5LjcwNi02OC44NzUtMzUuOTcyLTgzLjc5MS4yNTgtMS4wMzEuMjU3LTIuMDg5LjAzNy0zLjA5OC00My4xODQgMTYuMTQ0LTczLjkzNCA1Ny43NzMtNzMuOTM0IDEwNi41ODkgMCA2Mi44MyA1MC45MzMgMTEzLjc2MyAxMTMuNzYzIDExMy43NjMgNy4zMjUgMCAxNC40ODQtLjcwMSAyMS40MjQtMi4wMjNsMzAuMzk2LTYwLjk1Yy03LjQxOC0xLjUyOC04LjQ4Mi02LjE3Ni04LjMzMi05LjIwNHpcIiBmaWxsPVwiIzFjMmU3YVwiLz48Zz48cGF0aCBkPVwibTI5OS43MTIgMTUyLjYwMy0zMy4zMDQtMzMuMzA0Yy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNSAwLTExLjA3MmwzMy4zMDQtMzMuMzA0YzMuMDU3LTMuMDU3IDguMDE0LTMuMDU4IDExLjA3MiAwIDMuMDU3IDMuMDU3IDMuMDU4IDguMDE1IDAgMTEuMDcybC0yNy43NjggMjcuNzY5IDI3Ljc2OCAyNy43NjhjMy4wNTcgMy4wNTcgMy4wNTcgOC4wMTUgMCAxMS4wNzItMy4wNTggMy4wNTctOC4wMTQgMy4wNTYtMTEuMDcyLS4wMDF6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMzc2LjYwNyAxNTIuNjAzYy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNCAwLTExLjA3MmwyNy43NjgtMjcuNzY4LTI3Ljc2OS0yNy43NjhjLTMuMDU3LTMuMDU3LTMuMDU3LTguMDE1IDAtMTEuMDcyIDMuMDU4LTMuMDU4IDguMDE1LTMuMDU4IDExLjA3MiAwbDMzLjMwNSAzMy4zMDRjMy4wNTUgMy4wNTYgMy4wNTcgOC4wMTUgMCAxMS4wNzJsLTMzLjMwNCAzMy4zMDRjLTMuMDU3IDMuMDU3LTguMDE0IDMuMDU4LTExLjA3MiAwelwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48Zz48cGF0aCBkPVwibTMyNS41ODkgMTU0LjIxM2MtMy45NDctMS43NjYtNS43MTQtNi4zOTgtMy45NDgtMTAuMzQ0bDI5LjgxNi02Ni42MDhjMS43NjctMy45NDYgNi4zOTktNS43MTMgMTAuMzQ0LTMuOTQ3IDMuOTQ3IDEuNzY3IDUuNzE0IDYuMzk4IDMuOTQ3IDEwLjM0NGwtMjkuODE2IDY2LjYwOGMtMS43NiAzLjkzNC02LjM4NSA1LjcxOC0xMC4zNDMgMy45NDd6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PC9nPjxwYXRoIGQ9XCJtNDQxLjc4OSAxOTIuNDcxaC05LjA5MWMtMi40MDIgMC00LjM1Ni0xLjk1NC00LjM1Ni00LjM1NnYtOS4wOTFjMC0xMC44MS03LjYzMS0xNC40MTktMTIuNS0xNS42MjJoLTY3LjIzNmMtMi43MzggMC00Ljk1OCAyLjIyLTQuOTU4IDQuOTU4djE1Mi43NzVjMCAyLjczOCAyLjIyIDQuOTU4IDQuOTU4IDQuOTU4aDEwMy44NDhjMi43MzggMCA0Ljk1OC0yLjIyIDQuOTU4LTQuOTU4di0xMTcuOTYxYy0yLjkxNi0xMC40NTktMTUuNDc1LTEwLjcwMS0xNS42MjMtMTAuNzAzelwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtMzgzLjA2OSAzMDEuNDY1di0xMTMuNDM1YzAtMTMuNjAxIDExLjAyNi0yNC42MjggMjQuNjI3LTI0LjYyOGgtNTkuMDljLTIuNzM4IDAtNC45NTggMi4yMi00Ljk1OCA0Ljk1OHYxNTIuNzc1YzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGg1OS4wOWMtMTMuNjAxIDAtMjQuNjI3LTExLjAyNi0yNC42MjctMjQuNjI4elwiIGZpbGw9XCIjZDNkY2ZiXCIvPjxwYXRoIGQ9XCJtNDUyLjI5NiAxODcuOTU4LTE5LjQ0LTE5LjQ0Yy0zLjI3NS0zLjI3NS03LjcxOC01LjExNS0xMi4zNS01LjExNWgtOC42MjhzMTUuODYyLjI0MiAxNS44NjIgMTUuNjIydjkuMDkxYzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGg5LjA5MXMxNS42MjIuMTI4IDE1LjYyMiAxNC43NzF2LTcuNTM3YzAtNC42MzItMS44NC05LjA3NS01LjExNS0xMi4zNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48ZyBmaWxsPVwiIzczYzNmOVwiPjxwYXRoIGQ9XCJtNDE0LjA0NSAyMzguOTExaC0zMS40ODNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMzEuNDgzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTQzOS4yMiAyMTguNDA3aC0yNi4wODJjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoMjYuMDgyYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM5NS41NjMgMjE4LjQwN2gtMTMuMDAxYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDEzLjAwMWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjU4LjU4NmgtMjYuMDgyYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDI2LjA4MmMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zOTUuNTYzIDI1OC41ODZoLTEzLjAwMWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgxMy4wMDFjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzg2LjM3NyAyNzkuMDg4aC0zLjgxNGMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzLjgxNGMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjc5LjA4OGgtMzUuNjQ0Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDM1LjY0NGMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PC9nPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyMzguOTExaC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjE4LjQwN2gtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI1OC41ODZoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyNzkuMDg4aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTQzNi42NDcgMjM4LjkxMWgtNS4zOTVjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoNS4zOTVjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PHBhdGggZD1cIm00MTQuMDQ1IDI5OS41OTFoLTMxLjQ4M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgzMS40ODNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDI5OS41OTFoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtNDM2LjY0NyAyOTkuNTkxaC01LjM5NWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWg1LjM5NWMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzczYzNmOVwiLz48L2c+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5PcHRpbWl6YXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD42MCUgb2YgYWxsIGludGVybmV0IHRyYWZmaWMgaXMgb24gbW9iaWxlIGRldmljZXMsIHNvIHdlIG9wdGltaXplIHlvdXIgbW9iaWxlIHRvIHBlcmZvcm0gdGhlaXIgYmVzdCBpbiBzZWFyY2ggZW5naW5lcy48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBpZ2d5LWJhbmtcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzFhNmE3NjM1ZDcyM2JkNDNhZDAxZWI4ZTE0Y2E1NTVhZGU5MjAwZDkvZTY0M2IvaW1hZ2VzL3NhdmluZ3Muc3ZnXCIgYWx0PVwiZHJhd2luZyBvZiBhIG1hbiBuZXh0IHRvIGEgbGFyZ2UgcGlnZ3kgYmFua1wiIHdpZHRoPVwiMzAwcHhcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXRleHQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDA8L3NwYW4+IERvd24sIDxzcGFuPiQxNTA8L3NwYW4+IFBlciBNb250aCwgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBNaW5pbXVtIENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiQwIGRvd24gZm9yIGEgc3RhbmRhcmQgNSBwYWdlIHNtYWxsIGJ1c2luZXNzIHdlYnNpdGUuIElmIHlvdSBuZWVkIG1vcmUgdGhhbiB0aGF0IHRoZW4gd2UgaGF2ZSB0byBkbyBjdXN0b20gcHJpY2luZyBiYXNlZCBvbiB0aGUgc2NvcGUgb2Ygd29yaywgbnVtYmVyIG9mIGFkZGl0aW9uYWwgcGFnZXMsIGFuZCB0aW1lIGludm9sdmVkLiA8YnIvPjxici8+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBvd24geW91ciBkb21haW4sIGNvbnRlbnQsIGxpc3RpbmcsIGFuZCBwcm9maWxlcy4gIENhbmNlbCBhbnl0aW1lIHdpdGggbm8gZmVlcyBvciBoYXNzbGUuICBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3N0aW5nIEZlZXMgSW5jbHVkZWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvc3RpbmcgZmVlcyBhcmUgYnVpbHQgcmlnaHQgaW50byB0aGUgbW9udGhseSBwYXltZW50LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VW5saW1pdGVkIEVkaXRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2UgYW55dGhpbmcgeW91IHdhbnQgYXQgYW55dGltZSBhbmQgaXQgd2lsbCBiZSBkb25lIHRoYXQgZGF5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MjQvNyBDdXN0b21lciBTZXJ2aWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYWxsIGRpcmVjdCBhbnl0aW1lIGRheSBvciBuaWdodCwgbm8gcGhvbmUgdHJlZXMgb3IgYXV0b21hdGVkIHJlc3BvbnNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldlYiBEZXNpZ24gJiBEZXZlbG9wbWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5jbHVkZXMgb3ZlciA0MCBob3VycyBvZiBkZXNpZ24sIGRldmVsb3BtZW50LCBhbmQgdGVzdGluZy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNpdGF0aW9ucyBBbmQgTGlzdGluZ3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkl0J3MgaW1wb3J0YW50IHRvIGhhdmUgeW91ciB3ZWJzaXRlIGxpbmtlZCBmcm9tIG90aGVyIHdlYnNpdGVzLCBsaWtlIGRpcmVjdG9yaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R29vZ2xlIEFuYWx5dGljczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgaW5zdGFsbCBBbmFseXRpY3MgZm9yIGZyZWUgdG8gbW9uaXRvciB0cmFmZmljIGFuZCB3aGVyZSBpdCBjb21lcyBmcm9tLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljZXNcIiBjbGFzc05hbWU9XCJzZWN0aW9uIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+U3RhbmRhcmQgKyBCbG9nZ2luZzwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+U1RBUlRJTkcgQVQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPjMwMDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gMTAwMCsgV29yZCBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IFdyaXR0ZW4gQnkgYW4gU0VPIFNwZWNpYWxpc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gMSBQb3N0IFBlciBNb250aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiAkMTUwIFBlciBFeHRyYSBQb3N0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+NSBQQUdFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MTUwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFVubGltaXRlZCBFZGl0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEluY2x1ZGVzIEhvc3Rpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyNC83IEN1c3RvbWVyIFNlcnZpY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMaWZldGltZSBVcGRhdGVzPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkXCJ0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDI+TG9nb3MgJiBHcmFwaGljIERlc2lnbjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+SU5DTFVERUQhPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4wPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDIgcmV2aXNpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gQWxsIEZpbGUgRm9ybWF0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFJlYWR5IHRvIHVzZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEZSRUUgdy8gU3Vic2NyaXB0aW9uPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbjwvbWFpbj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDNUlsQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDcEQxQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNoQ2pDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxXQUFXO0FBSWYsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxVQUFVLFFBQVEsU0FBVSxHQUFHO0FBQzFDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNuQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUUvQixtQkFBMEM7QUFFMUMsNkJBQ0UsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzVCLFFBQU0sU0FBUywrQkFBYSwwQkFBMEI7QUFBQSxJQUNwRCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFHWixRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUNwQyxrQkFBZ0IsSUFDZCxjQUNBLE1BQU0sT0FBTyxVQUFVLElBQUksU0FBUyxNQUFNLEtBQUs7QUFHakQsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDN0JiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW9DO0FBTXBDLG9CQVNPOzs7QUNmUDtBQUNBLG9CQUFrQzs7O0FDRGxDO0FBQUEsbUJBQW9DO0FBR3BDLElBQU0sV0FBVyxDQUFJLFNBQW1CLFFBQWEsaUJBQW9CO0FBRXZFLFFBQU0sa0JBQWtCLFFBQVEsSUFBSSxDQUFDLE1BQU0sT0FBTyxXQUFXO0FBRTdELFFBQU0sV0FBVyxNQUFNO0FBRXJCLFVBQU0sUUFBUSxnQkFBZ0IsVUFBVSxDQUFDLFFBQVEsSUFBSTtBQUVyRCxXQUFPLGtDQUFTLFdBQVU7QUFBQTtBQUc1QixRQUFNLENBQUMsT0FBTyxZQUFZLDJCQUFZO0FBQ3RDLDhCQUNFLE1BQU07QUFJSixVQUFNLFVBQVUsTUFBTSxTQUFTO0FBRS9CLG9CQUFnQixRQUFRLENBQUMsUUFBUSxJQUFJLFlBQVk7QUFFakQsV0FBTyxNQUNMLGdCQUFnQixRQUFRLENBQUMsUUFBUSxJQUFJLGVBQWU7QUFBQSxLQUV4RDtBQUVGLFNBQU87QUFBQTtBQUdULElBQU8sbUJBQVE7Ozs7OztBRHBCZixJQUFNLFNBQVMsQ0FBRSxVQUFrRDtBQUMvRCxRQUFNLEVBQUMsV0FBVyxpQkFBZ0I7QUFDbEMsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sV0FBVyxDQUFDLEVBQUUsTUFBTSxRQUFRLE9BQU8sT0FBSyxFQUFFLE1BQU0sU0FBUyxPQUFPLFlBQVUsRUFBRSxNQUFNLFlBQVksT0FBTyxlQUFhLEVBQUUsTUFBTSxXQUFXLE9BQU87QUFFbEosTUFBSSxXQUEyQjtBQUMvQixNQUFHLE9BQU8sV0FBVyxhQUFhO0FBQzdCLGVBQVcsaUJBRVIsQ0FBQyx1QkFBdUIsd0JBRXhCLENBQUMsT0FBTyxPQUVSO0FBQUE7QUFTWixRQUFNLGlCQUFpQixNQUFLO0FBQ3hCLGlCQUFhLENBQUM7QUFBQTtBQUVsQixTQUNJLG9DQUFDLFVBQUQsTUFDSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBYyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBc0IsUUFBTztBQUFBLE1BQ2xFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLGNBQVc7QUFBQSxJQUFnQixJQUFHO0FBQUEsSUFBYyxXQUFXLCtCQUErQixhQUFhLENBQUMsV0FBWSxjQUFjO0FBQUEsSUFBTSxTQUFTO0FBQUEsSUFBZ0IsTUFBSztBQUFBLEtBQ3RLLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLGVBQVk7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUMvQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsVUFPbkQsb0NBQUMsT0FBRCxNQUNJLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sYUFBYSxDQUFDLFdBQWEsRUFBQyxPQUFPLE9BQU8sVUFBVSxZQUFZLEVBQUMsT0FBTztBQUFBLElBQUksV0FBVTtBQUFBLEtBQzlGLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFZLFdBQVU7QUFBQSxLQUMxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBZSxPQUFNO0FBQUEsTUFDekMsb0NBQUMsTUFBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVMsV0FBVyxnQkFBZ0IsQ0FBQyxZQUFZLFlBQVk7QUFBQSxLQUNoRSxTQUFTLElBQUksQ0FBQyxZQUFVO0FBQ3JCLFdBQU8sb0NBQUMsTUFBRDtBQUFBLE1BQUksU0FBUztBQUFBLE1BQWdCLE9BQU8sYUFBYSxDQUFDLFdBQVcsRUFBQyxTQUFTLEdBQUcsWUFBWSxjQUFjLEVBQUMsU0FBUyxHQUFHLFlBQVk7QUFBQSxNQUFXLEtBQUssUUFBUSxPQUFPLFFBQVE7QUFBQSxNQUFPLFdBQVU7QUFBQSxPQUFTLG9DQUFDLG9CQUFEO0FBQUEsTUFBTSxPQUFPLGFBQWEsQ0FBQyxXQUFhLEVBQUMsU0FBUyxHQUFHLFlBQVksY0FBYyxFQUFDLFNBQVMsR0FBRyxZQUFZO0FBQUEsTUFBVyxXQUFXLFNBQVMsYUFBYSxRQUFRLFFBQVEsZ0JBQWdCO0FBQUEsTUFDelgsSUFBSSxRQUFRO0FBQUEsT0FBUSxRQUFRO0FBQUE7QUFBQTtBQWF4RCxJQUFPLGlCQUFROzs7QUV2RWY7QUFFQSxvQkFBZ0M7QUFRekIsSUFBTSxTQUFTLE1BQU07QUFDMUIsUUFBTSxXQUFXLENBQUMsRUFBRSxNQUFNLFFBQVEsT0FBTyxPQUFLLEVBQUUsTUFBTSxTQUFTLE9BQU8sWUFBVSxFQUFFLE1BQU0sWUFBWSxPQUFPLGVBQWEsRUFBRSxNQUFNLFdBQVcsT0FBTztBQUVsSixTQUNFLG9DQUFDLFVBQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBNEIsS0FBSTtBQUFBLElBQWdILEtBQUk7QUFBQSxNQUN0TCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBMkIsS0FBSTtBQUFBLElBQXFILEtBQUk7QUFBQSxNQUMxTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FFWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBNkIsS0FBSztBQUFBLElBQU0sS0FBSTtBQUFBLElBQWdDLFFBQU87QUFBQSxNQUNsRyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBOEIsS0FBSztBQUFBLElBQU0sS0FBSTtBQUFBLElBQWdDLFFBQU87QUFBQSxNQUVuRyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBeUMsb0NBQ2pELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFtQixtQkFFL0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLGVBQ0osb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sV0FBVTtBQUFBLE1BQ2pDLFNBQVMsSUFBSSxDQUFDLFlBQVU7QUFDZixXQUFRLG9DQUFDLG9CQUFEO0FBQUEsTUFBTSxXQUFVO0FBQUEsTUFDeEIsSUFBSSxRQUFRO0FBQUEsT0FBUSxRQUFRO0FBQUEsT0FJMUMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLGFBQ0osb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sV0FBVTtBQUFBLE1BQ2xDLG9DQUFDLEtBQUQsTUFBRyxlQUNILG9DQUFDLEtBQUQsTUFBRyx3QkFDSCxvQ0FBQyxLQUFELE1BQUcsaUJBQ0gsb0NBQUMsS0FBRCxNQUFHLHFCQUNILG9DQUFDLEtBQUQsTUFBRyxtQkFJZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxLQUFELE1BQUc7QUFBQTtBQU1iLElBQU8saUJBQVE7OztBSC9CUixJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUtsQixJQUFNLGVBQXlCLENBQUMsRUFBRSxlQUNoQyxvQ0FBQyxRQUFEO0FBQUEsRUFBTSxNQUFLO0FBQUEsR0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLEVBQU0sU0FBUTtBQUFBLElBQ2Qsb0NBQUMsUUFBRDtBQUFBLEVBQU0sTUFBSztBQUFBLEVBQVcsU0FBUTtBQUFBLElBQzlCLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFHRixvQ0FBQyxRQUFELE1BQ0csVUFDRCxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQzJDLG9DQUFDLDBCQUFEO0FBS2xDLGVBQWU7QUFDNUIsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLDRCQUFTO0FBRTNDLFFBQU0saUJBQWlCLE1BQUs7QUFDMUIsaUJBQWEsQ0FBQztBQUFBO0FBRWxCLE1BQUksV0FBMkI7QUFDL0IsTUFBRyxPQUFPLFdBQVcsYUFBYTtBQUM3QixlQUFXLGlCQUVSLENBQUMsdUJBQXVCLHdCQUV4QixDQUFDLE9BQU8sT0FFUjtBQUFBO0FBS04sU0FDRSxvQ0FBQyxjQUFELE1BQ0Usb0NBQUMsZ0JBQUQ7QUFBQSxJQUFRO0FBQUEsSUFBc0I7QUFBQSxNQUM5QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxTQUFTLFlBQVksaUJBQWlCO0FBQUEsS0FDM0Msb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxnQkFBRDtBQUFBO0FBT0MsSUFBTSxnQkFBd0MsQ0FBQyxFQUFFLFlBQVk7QUFDbEUsVUFBUSxNQUFNO0FBQ2QsU0FBTyxvQ0FBQyxjQUFELE1BQWU7QUFBQTs7O0FJaEZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUEwQjs7O0FDRDFCO0FBVUEsSUFBTSxXQUFXLE1BQU07QUFDckIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FFVCxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FDUixvQ0FBQyxNQUFELE1BQUksa0JBSVIsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQVUsV0FBVTtBQUFBLEtBQzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUEyRyxLQUFJO0FBQUEsTUFDeEgsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLDhDQUNKLG9DQUFDLEtBQUQsTUFBRyxtVEFHSCxvQ0FBQyxNQUFELE9BQUssb0NBQUMsTUFBRCxPQUFLLGdDQUNrQixvQ0FBQyxRQUFELE1BQU0scUNBQXVDLHFKQU1qRixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLGVBQVk7QUFBQSxJQUErQixTQUFRO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBUyxHQUFFO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBTSxTQUFRO0FBQUEsSUFBcUIsYUFBVTtBQUFBLElBQVcsT0FBTTtBQUFBLElBQVEsUUFBTztBQUFBLElBQVEsV0FBVTtBQUFBLEtBQUcsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLE9BQU8sRUFBQyxNQUFLO0FBQUEsSUFBWSxRQUFPO0FBQUEsSUFBa0YsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFHLGtCQUFlO0FBQUEsTUFBVyxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxPQUFPLEVBQUMsTUFBSztBQUFBLElBQVksUUFBTztBQUFBLElBQTJELGlCQUFjO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBRyxrQkFBZTtBQUFBLE1BQVcsb0NBQUMsV0FBRDtBQUFBLElBQVMsT0FBTyxFQUFDLE1BQU07QUFBQSxJQUFZLFFBQU87QUFBQSxJQUE2QyxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxPQUFlLFVBTTl1QixvQ0FBQyxXQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXdHLEtBQUk7QUFBQSxNQUNySCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksd0NBQ0osb0NBQUMsS0FBRCxNQUFHLG9GQUFnRixvQ0FBQyxRQUFELE1BQU0sU0FBVyx5SEFFakcsb0NBQUMsTUFBRCxPQUFLLG9DQUFDLE1BQUQsT0FBSyxvRkFHYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDVixvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFLLHFDQUNoSixvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLG1EQUMvSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLHNEQUMvSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLHNEQUszSixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFTLEdBQUU7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFNLFNBQVE7QUFBQSxJQUFxQixPQUFNO0FBQUEsSUFBUSxRQUFPO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBRyxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsV0FBRDtBQUFBLElBQVMsT0FBTyxFQUFDLE1BQU07QUFBQSxJQUFZLFFBQU87QUFBQSxJQUFrRixpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQUcsa0JBQWU7QUFBQSxNQUFXLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLE9BQU8sRUFBQyxNQUFLO0FBQUEsSUFBWSxRQUFPO0FBQUEsSUFBMkQsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFHLGtCQUFlO0FBQUEsTUFBVyxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxPQUFPLEVBQUMsTUFBSztBQUFBLElBQVksUUFBTztBQUFBLElBQTZDLGlCQUFjO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBYyxrQkFBZTtBQUFBLE9BQWUsVUFPOXFCLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLElBQUc7QUFBQSxJQUFpQixXQUFVO0FBQUEsS0FDbkMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQTZHLEtBQUk7QUFBQSxNQUMxSCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksc0NBQ0osb0NBQUMsS0FBRCxNQUFHLG9OQUdILG9DQUFDLE1BQUQsTUFDSSxvQ0FBQyxNQUFELE1BQ0ksb0NBQUMsTUFBRCxNQUFJLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGVBQVk7QUFBQSxJQUFPLEtBQUk7QUFBQSxJQUF1RyxLQUFJO0FBQUEsTUFBSSw0QkFDL0ksb0NBQUMsS0FBRCxNQUFHLHNGQUVQLG9DQUFDLE1BQUQsTUFDSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLDBCQUMvSSxvQ0FBQyxLQUFELE1BQUcsd0dBU3ZCLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLElBQUc7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUM1QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDSCxvQ0FBQyxNQUFELE1BQUksc0NBQ0osb0NBQUMsS0FBRCxNQUFHLCtNQUNnRyxvQ0FBQyxRQUFELE1BQU0scUJBQXVCLG1HQUt4SSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxPQUFNO0FBQUEsSUFBNkIsSUFBRztBQUFBLElBQVMscUJBQWtCO0FBQUEsSUFBa0IsUUFBTztBQUFBLElBQVEsU0FBUTtBQUFBLElBQWMsT0FBTTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQUcsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBa2xDLGlCQUFjO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBYyxrQkFBZTtBQUFBLElBQVUsTUFBSztBQUFBLE1BQVcsb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBLElBQVMsSUFBRztBQUFBLElBQVMsR0FBRTtBQUFBLElBQVMsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFjLGtCQUFlO0FBQUEsSUFBVSxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUEsSUFBUyxJQUFHO0FBQUEsSUFBUyxHQUFFO0FBQUEsSUFBUyxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQSxJQUFVLElBQUc7QUFBQSxJQUFTLEdBQUU7QUFBQSxJQUFTLGlCQUFjO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBYyxrQkFBZTtBQUFBLElBQVUsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTYyQyxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUEwVyxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFpSixpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFpSixpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxRQUFtQixNQUN0bkksb0NBQUMsTUFBRCxNQUFJLG1CQUNKLG9DQUFDLEtBQUQsTUFBRyxtRkFFUCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxPQUFNO0FBQUEsSUFBNkIsSUFBRztBQUFBLElBQVMscUJBQWtCO0FBQUEsSUFBa0IsUUFBTztBQUFBLElBQVEsU0FBUTtBQUFBLElBQWMsT0FBTTtBQUFBLEtBQVEsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQWs5QyxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUEyVSxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE4dEIsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFjLGtCQUFlO0FBQUEsSUFBVSxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBMm9CLGlCQUFjO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBYyxrQkFBZTtBQUFBLElBQVUsTUFBSztBQUFBLFNBQXVCLE1BQzdySCxvQ0FBQyxNQUFELE1BQUksc0JBQ0osb0NBQUMsS0FBRCxNQUFHLCtFQUVQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGVBQVk7QUFBQSxJQUFPLE9BQU07QUFBQSxJQUE2QixJQUFHO0FBQUEsSUFBVSxxQkFBa0I7QUFBQSxJQUFrQixRQUFPO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBYyxPQUFNO0FBQUEsS0FBUSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW9pQixpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE2TSxpQkFBYztBQUFBLElBQVUsV0FBVTtBQUFBLElBQWMsa0JBQWU7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUErMUQsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFjLGtCQUFlO0FBQUEsSUFBVSxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBaUksaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFjLGtCQUFlO0FBQUEsSUFBVSxNQUFLO0FBQUEsT0FBZSxNQUMzdkcsb0NBQUMsTUFBRCxNQUFJLDBCQUNKLG9DQUFDLEtBQUQsTUFBRyxvRkFFUCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxPQUFNO0FBQUEsSUFBOEIsU0FBUTtBQUFBLElBQU0sSUFBRztBQUFBLElBQVUsR0FBRTtBQUFBLElBQU0sR0FBRTtBQUFBLElBQU0sU0FBUTtBQUFBLElBQWUsT0FBTTtBQUFBLElBQVEsUUFBTztBQUFBLElBQVEsV0FBVTtBQUFBLEtBQUcsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLEtBQUQsTUFDdkssb0NBQUMsS0FBRCxNQUNJLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFpeUQsaUJBQWM7QUFBQSxJQUFVLFdBQVU7QUFBQSxJQUFjLGtCQUFlO0FBQUEsSUFBVSxNQUFLO0FBQUEsU0FFdjNELE1BQ1Isb0NBQUMsTUFBRCxNQUFJLDRCQUNKLG9DQUFDLEtBQUQsTUFBRyxxRkFRbkIsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQVUsV0FBVTtBQUFBLEtBQzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFBSSx3QkFDSixvQ0FBQyxRQUFELE1BQU0sZ0JBQ04sb0NBQUMsTUFBRCxNQUFJLFFBQ0osb0NBQUMsTUFBRCxNQUNJLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUkscUJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksa0NBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksc0JBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksMEJBRW5KLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFnQyxNQUFLO0FBQUEsS0FBUyxnQkFJcEUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLGFBQ0osb0NBQUMsUUFBRCxNQUFNLFlBQ04sb0NBQUMsTUFBRCxNQUFJLFFBQ0osb0NBQUMsTUFBRCxNQUNJLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUkscUJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksc0JBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksMkJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksdUJBRW5KLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFnQyxNQUFLO0FBQUEsS0FBUyxnQkFJcEUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLDJCQUNKLG9DQUFDLFFBQUQsTUFBTSxjQUNOLG9DQUFDLE1BQUQsTUFBSSxNQUNKLG9DQUFDLE1BQUQsTUFDSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLGlCQUMvSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLHNCQUMvSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLGtCQUMvSSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUFJLDJCQUVuSixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsSUFBZ0MsTUFBSztBQUFBLEtBQVM7QUFBQTtBQWFoRixJQUFPLG1CQUFROzs7QUR6TFIsaUJBQWlCO0FBQ3BCLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBS0wsSUFBTSxTQUF5QixPQUFPO0FBQUEsRUFDM0M7QUFBQSxNQUNJO0FBQ0osVUFBUSxJQUFJO0FBQ1osU0FBTztBQUFBO0FBR0ksb0JBQW9CO0FBRTNCLFFBQU0sU0FBUztBQUNmLFVBQVEsSUFBSTtBQUVsQixTQUFPLG9DQUFDLGtCQUFEO0FBQUE7OztBRTFCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBWUEsSUFBTSxVQUFVLE1BQU07QUFDcEIsU0FHRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FJTCxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FDUixvQ0FBQyxNQUFELE1BQUksZ0JBSVIsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQWMsV0FBVTtBQUFBLEtBRXBDLG9DQUFDLE9BQUQsTUFDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxLQUFELE1BQUcsV0FDSCxvQ0FBQyxLQUFELE1BQUcscUNBRVAsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsS0FBRCxNQUFHLFdBQ0gsb0NBQUMsS0FBRCxNQUFHLHFCQUlILG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFvQyxJQUFHO0FBQUEsSUFBVSxNQUFLO0FBQUEsS0FBZSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBWSxPQUFNO0FBQUEsTUFDMUgsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWlCLG9DQUFDLFFBQUQsTUFBTSxTQUFXLGVBRTVDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLGNBQVc7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFPLGFBQVk7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFPLFVBQVU7QUFBQSxJQUFHLFVBQVE7QUFBQSxNQUN6RixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxjQUFXO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBTyxhQUFZO0FBQUEsSUFBVyxNQUFLO0FBQUEsSUFBTyxVQUFVO0FBQUEsSUFBRyxVQUFRO0FBQUEsTUFDN0Ysb0NBQUMsU0FBRDtBQUFBLElBQU8sY0FBVztBQUFBLElBQVEsTUFBSztBQUFBLElBQVEsYUFBWTtBQUFBLElBQWdCLE1BQUs7QUFBQSxJQUFRLFVBQVU7QUFBQSxJQUFHLFVBQVE7QUFBQSxNQUNyRyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxjQUFXO0FBQUEsSUFBZSxNQUFLO0FBQUEsSUFBUSxhQUFZO0FBQUEsSUFBZSxNQUFLO0FBQUEsSUFBTSxVQUFVO0FBQUEsSUFBRSxVQUFRO0FBQUEsTUFDeEcsb0NBQUMsWUFBRDtBQUFBLElBQVUsY0FBVztBQUFBLElBQXFCLE1BQUs7QUFBQSxJQUFVLGFBQVk7QUFBQSxJQUE2QixVQUFVO0FBQUEsSUFBRyxVQUFRO0FBQUEsTUFFM0gsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1Qsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsSUFBRztBQUFBLElBQWlCLFdBQVU7QUFBQSxJQUF1QixlQUFZO0FBQUEsS0FBYTtBQUFBO0FBYzFJLElBQU8sa0JBQVE7OztBRDFEUixrQkFBaUI7QUFDcEIsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLQyxxQkFBb0I7QUFDakMsU0FBTyxvQ0FBQyxpQkFBRDtBQUFBOzs7QUVmVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBVUEsSUFBTSxRQUFRLE1BQU07QUFDbEIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FNVCxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FDUixvQ0FBQyxNQUFELE1BQUksY0FJUixvQ0FBQyxXQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDMUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsUUFBRCxNQUFNLDhCQUNOLG9DQUFDLE1BQUQsTUFBSSx1REFDSixvQ0FBQyxLQUFELE1BQUcsaVlBR0gsb0NBQUMsTUFBRCxPQUFLLG9DQUFDLE1BQUQsT0FBSyx3a0JBWXRCLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLElBQUc7QUFBQSxLQUNSLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxRQUFELE1BQU0sYUFBZSxtQkFDekIsb0NBQUMsS0FBRCxNQUFHLGdRQUlQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFTLG9DQUFDLFFBQUQsTUFBTSxPQUM5QixvQ0FBQyxNQUFELE1BQUksMkJBQ0osb0NBQUMsS0FBRCxNQUFHLG9GQUVQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFTLG9DQUFDLFFBQUQsTUFBTSxPQUM5QixvQ0FBQyxNQUFELE1BQUksZ0NBQ0osb0NBQUMsS0FBRCxNQUFHLHFGQUVQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFTLG9DQUFDLFFBQUQsTUFBTSxPQUM5QixvQ0FBQyxNQUFELE1BQUksd0JBQ0osb0NBQUMsS0FBRCxNQUFHLG9GQUlmLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUE2QixNQUFLO0FBQUEsS0FBUyxrQkFPakUsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQWdCLFdBQVU7QUFBQSxLQUNsQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FHWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsTUFDbEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLFdBQ0osb0NBQUMsS0FBRCxNQUFHLHFCQUdYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUVYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGVBQVk7QUFBQSxJQUFPLFdBQVU7QUFBQSxNQUNsQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksV0FDSixvQ0FBQyxLQUFELE1BQUcsdUNBSWYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQW1DLElBQUc7QUFBQSxJQUFVLFFBQU87QUFBQSxJQUFPLE1BQUs7QUFBQSxLQUFhLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFZLE9BQU07QUFBQSxNQUNySSxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBaUIsb0NBQUMsUUFBRCxNQUFNLFNBQVcsZUFFNUMsb0NBQUMsU0FBRDtBQUFBLElBQU8sY0FBVztBQUFBLElBQU8sTUFBSztBQUFBLElBQU8sYUFBWTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sVUFBVTtBQUFBLElBQUcsVUFBUTtBQUFBLE1BQzlGLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLGNBQVc7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFRLGFBQVk7QUFBQSxJQUFxQixNQUFLO0FBQUEsSUFBUSxVQUFVO0FBQUEsSUFBRyxVQUFRO0FBQUEsTUFDMUcsb0NBQUMsU0FBRDtBQUFBLElBQU8sY0FBVztBQUFBLElBQWUsTUFBSztBQUFBLElBQVEsYUFBWTtBQUFBLElBQW9CLE1BQUs7QUFBQSxJQUFNLFVBQVU7QUFBQSxJQUFFLFVBQVE7QUFBQSxNQUM3RyxvQ0FBQyxZQUFEO0FBQUEsSUFBVSxjQUFXO0FBQUEsSUFBcUIsTUFBSztBQUFBLElBQVUsYUFBWTtBQUFBLElBQTZCLFVBQVU7QUFBQSxJQUFHLFVBQVE7QUFBQSxNQUN2SCxvQ0FBQyxPQUFELE1BQUssb0NBQUMsVUFBRDtBQUFBLElBQVEsS0FBSTtBQUFBLE1BQ3pDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFjLGdCQUFhO0FBQUEsTUFDMUMsb0NBQUMsWUFBRCxNQUNBLG9DQUFDLE9BQUQsTUFDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUMsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVO0FBQUEsS0FDaEQsb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTyxFQUFDLE9BQU8sS0FBSyxRQUFRLEtBQUssVUFBVTtBQUFBLE9BUWhELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBQyxPQUFPLEtBQUssUUFBUSxJQUFJLGFBQWEsUUFBUSxRQUFRLElBQUksTUFBTSxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsT0FBTyxJQUFJLFlBQVksV0FBVyxRQUFRLHFCQUFxQixjQUFjO0FBQUEsS0FDcEwsb0NBQUMsWUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLElBQXVCLE1BQUs7QUFBQSxJQUF1QixXQUFVO0FBQUEsSUFDeEUsT0FBTyxFQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksUUFBUSxxQkFBcUIsUUFBUSxhQUFhLFNBQVMsR0FBRyxRQUFRO0FBQUEsVUFNcEYsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1Qsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsSUFBRztBQUFBLElBQWlCLFdBQVU7QUFBQSxJQUF1QixlQUFZO0FBQUEsS0FBYTtBQUFBO0FBYTFJLElBQU8sZ0JBQVE7OztBRHhJUixrQkFBaUI7QUFDcEIsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLQyxxQkFBb0I7QUFDakMsU0FBTyxvQ0FBQyxlQUFEO0FBQUE7OztBRWRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFVQSxJQUFNLE9BQU8sTUFBTTtBQUNqQixTQUVFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUdULG9DQUFDLFdBQUQ7QUFBQSxJQUFTLElBQUc7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUU1QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksNENBQ0osb0NBQUMsTUFBRCxNQUFJLGlIQUNKLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUE0QixNQUFLO0FBQUEsS0FBUyxrQkFHNUQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQTBCLEtBQUk7QUFBQSxJQUFrSCxLQUFJO0FBQUEsTUFDbkssb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQXlCLEtBQUk7QUFBQSxJQUF3SCxLQUFJO0FBQUEsT0FFNUssb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sV0FBVTtBQUFBLElBQW9CLEtBQUk7QUFBQSxJQUFpSCxLQUFJO0FBQUEsTUFDL0ssb0NBQUMsT0FBRDtBQUFBLElBQUssZUFBWTtBQUFBLElBQU8sV0FBVTtBQUFBLElBQW9CLEtBQUk7QUFBQSxJQUFzSCxLQUFJO0FBQUEsT0FLeEwsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQWEsV0FBVTtBQUFBLEtBQy9CLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFDSSxvQ0FBQyxRQUFELE1BQU0sVUFBWSxXQUV0QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLE1BQ2Ysb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXVHLEtBQUk7QUFBQSxNQUNwSCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsT0FFbkIsb0NBQUMsS0FBRCxNQUFHLGlRQUlYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGVBQVk7QUFBQSxJQUFPLE9BQU07QUFBQSxJQUE2QixRQUFPO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBb0IsT0FBTTtBQUFBLEtBQVEsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXFQLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE2c0IsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1MLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFvUixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBdVUsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTZMLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFpSCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBc00sTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1OLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUF1UCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbVAsTUFBSztBQUFBLE1BQVcsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQVUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE1BQW1MLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUFpTCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBOEosb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE9BQW9MLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUErWCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBK00sTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW9PLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUF3SyxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBc1IsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQThSLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFzUyxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBcVIsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQThXLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE4UixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBMFIsTUFBSztBQUFBLE9BQ2p0TyxvQ0FBQyxNQUFELE1BQUksd0JBQ0osb0NBQUMsS0FBRCxNQUFHLDRHQUVQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGVBQVk7QUFBQSxJQUFPLE9BQU07QUFBQSxJQUE2QixJQUFHO0FBQUEsSUFBVSxxQkFBa0I7QUFBQSxJQUFrQixRQUFPO0FBQUEsSUFBTSxTQUFRO0FBQUEsSUFBYyxPQUFNO0FBQUEsS0FBTSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXdNLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE2VCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBdVksTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTJKLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE4RSxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTJILE1BQUs7QUFBQSxPQUFlLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBNkgsTUFBSztBQUFBLE9BQWUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXdMLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBVSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBMkgsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE9BQTRWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE4WCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBOEcsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQWtHLE1BQUs7QUFBQSxNQUFXLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBNkgsTUFBSztBQUFBLE9BQWUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQWlMLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUErYyxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQWlJLE1BQUs7QUFBQSxPQUFlLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBa0ksTUFBSztBQUFBLE9BQWUsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE0SSxNQUFLO0FBQUEsT0FBZSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTRJLE1BQUs7QUFBQSxPQUFlLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBZ0ksTUFBSztBQUFBLE9BQWUsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQVUsSUFBRztBQUFBLElBQVUsTUFBSztBQUFBLElBQVUsSUFBRztBQUFBLElBQVMsSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLE1BQStDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE2VixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBeUosTUFBSztBQUFBLE1BQVcsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFrSSxNQUFLO0FBQUEsT0FBZSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQThJLE1BQUs7QUFBQSxPQUFlLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFvSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBOEgsTUFBSztBQUFBLE1BQVcsb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBLElBQVUsSUFBRztBQUFBLElBQVUsTUFBSztBQUFBLElBQVUsR0FBRTtBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXdjLE1BQUs7QUFBQSxNQUFXLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBc1AsTUFBSztBQUFBLE9BQWUsb0NBQUMsS0FBRCxNQUFHLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFxUCxNQUFLO0FBQUEsT0FBZSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXNNLE1BQUs7QUFBQSxPQUFlLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE2USxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBNEwsTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQStNLE1BQUs7QUFBQSxNQUFXLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFVLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUFzSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBcUosb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE1BQXNKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUFxSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBc0osb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE1BQW9KLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxPQUF5SixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUosTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1KLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUosTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1KLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFxSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUosTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1KLE1BQUs7QUFBQSxRQUNwa1Ysb0NBQUMsTUFBRCxNQUFJLGlCQUNKLG9DQUFDLEtBQUQsTUFBRyw4SEFPbkIsb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQVUsV0FBVTtBQUFBLEtBQzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFhLEtBQUk7QUFBQSxJQUEwRyxLQUFJO0FBQUEsSUFBOEMsT0FBTTtBQUFBLE1BQ2xNLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFDSSxvQ0FBQyxRQUFELE1BQU0sT0FBUyxXQUFPLG9DQUFDLFFBQUQsTUFBTSxTQUFXLGdCQUFZLG9DQUFDLE1BQUQsT0FBTSx3QkFHN0Qsb0NBQUMsS0FBRCxNQUFHLGtNQUE4TCxvQ0FBQyxNQUFELE9BQUssb0NBQUMsTUFBRCxPQUFLLGtHQUkvTSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksMEJBQ0osb0NBQUMsS0FBRCxNQUFHLDZEQUdYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFBSSxvQkFDSixvQ0FBQyxLQUFELE1BQUcsd0VBR1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLDBCQUNKLG9DQUFDLEtBQUQsTUFBRywrRUFHWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksNkJBQ0osb0NBQUMsS0FBRCxNQUFHLGtFQUdYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFBSSwyQkFDSixvQ0FBQyxLQUFELE1BQUcsd0ZBR1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLHFCQUNKLG9DQUFDLEtBQUQsTUFBRyxvRkFVM0Isb0NBQUMsV0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQsTUFBSSx3QkFDSixvQ0FBQyxRQUFELE1BQU0sZ0JBQ04sb0NBQUMsTUFBRCxNQUFJLFFBQ0osb0NBQUMsTUFBRCxNQUNJLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUsscUJBQ2hKLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUssa0NBQ2hKLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUssc0JBQ2hKLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUssMEJBRXBKLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUErQixNQUFLO0FBQUEsS0FBUyxnQkFJbkUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLGFBQ0osb0NBQUMsUUFBRCxNQUFNLFlBQ04sb0NBQUMsTUFBRCxNQUFJLFFBQ0osb0NBQUMsTUFBRCxNQUNJLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUkscUJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksc0JBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksMkJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksdUJBRW5KLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFjLE1BQUs7QUFBQSxLQUFTLGdCQUlsRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksMkJBQ0osb0NBQUMsUUFBRCxNQUFNLGNBQ04sb0NBQUMsTUFBRCxNQUFJLE1BQ0osb0NBQUMsTUFBRCxNQUNJLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksaUJBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksc0JBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksa0JBQy9JLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxlQUFZO0FBQUEsSUFBTyxLQUFJO0FBQUEsSUFBdUcsS0FBSTtBQUFBLE1BQUksMkJBRW5KLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFnQyxNQUFLO0FBQUEsS0FBUztBQUFBO0FBVWhGLElBQU8sZUFBUTs7O0FEektSLGtCQUFpQjtBQUNwQixTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQU9DLHFCQUFvQjtBQUNqQyxTQUFPLG9DQUFDLGNBQUQ7QUFBQTs7O0FaUlQsb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix5QkFBeUI7QUFBQSxJQUN2QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHdCQUF3QjtBQUFBLElBQ3RCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsc0JBQXNCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
