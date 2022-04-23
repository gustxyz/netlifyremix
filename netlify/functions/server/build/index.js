var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// app/helpers/i18n.ts
init_react();
var import_accept_language_parser = __toModule(require("accept-language-parser"));

// app/data/i18n.json
var en = {
  hello: "hello",
  world: "world",
  products: "Products",
  country_de: "Germany",
  country_ch: "Switzerland"
};
var de = {
  hello: "hallo",
  world: "world",
  products: "Itemes",
  country_de: "Deutschland",
  country_ch: "Schweiz"
};
var fr = {
  hello: "bonjour",
  world: "world",
  products: "Les productes",
  country_de: "Allemagne",
  country_ch: "Suisse"
};
var i18n_default = {
  en,
  de,
  fr
};

// app/helpers/i18n.ts
var FALLBACK_LANGUAGE = "en";
var FALLBACK_COUNTRY = "ch";
var locales = {
  de: { en: "English (Germany)", de: "Deutsche (Deutschland)" },
  ch: {
    en: "English (Switzerland)",
    fr: "Fran\xE7ais (Suisse)",
    de: "Deutsche (Schweiz)"
  }
};
var _i18n = i18n_default;
var _computedLanguageCodes = Array.from(new Set(Object.values(locales).map((languages) => Object.keys(languages)).flat()));
var loadTranslations = (locale, keys) => {
  const languageCode = (locale == null ? void 0 : locale.split("-")[0]) ?? FALLBACK_LANGUAGE;
  const result = {};
  keys.forEach((key) => result[key] = _i18n[languageCode][key] ?? _i18n[FALLBACK_LANGUAGE][key] ?? key);
  return result;
};
var getIpAddressFromRequest = (headers) => {
  var _a;
  for (const header in [
    "x-client-ip",
    "x-forwarded-for",
    "cf-connecting-ip",
    "fastly-client-ip",
    "true-client-ip",
    "x-real-ip",
    "x-cluster-client-ip",
    "x-forwarded",
    "forwarded-for",
    "forwarded"
  ]) {
    const value = (_a = headers.get(header)) == null ? void 0 : _a.split(",").map((value2) => {
      value2 = value2.trim();
      if (value2.includes(":")) {
        const splitted = value2.split(":");
        if (splitted.length === 2)
          return splitted[0];
      }
      return value2;
    })[0];
    if (value)
      return value;
  }
  return "1.1.1.1";
};
var getRecommendedLocale = async (request, currentLocale) => {
  var _a, _b;
  const { headers } = request;
  const locale = (0, import_accept_language_parser.pick)(_computedLanguageCodes, headers.get("accept-language") ?? "");
  let recommendedCountryCode = ((_b = (_a = currentLocale == null ? void 0 : currentLocale.split) == null ? void 0 : _a.call(currentLocale, "-")) == null ? void 0 : _b[1]) ?? FALLBACK_COUNTRY;
  if (!currentLocale)
    try {
      const ipAddress = getIpAddressFromRequest(headers);
      const response = await fetch(`https://api.country.is/${ipAddress}`);
      const data = await response.json();
      const { country } = data;
      const lowercased = country.toLowerCase();
      if (Object.keys(locales).includes(lowercased))
        recommendedCountryCode = lowercased;
    } catch (error) {
      console.error(error);
    }
  return `${locale ?? FALLBACK_LANGUAGE}-${recommendedCountryCode}`;
};

// app/entry.server.tsx
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const url = new URL(request.url);
  const cookie = (0, import_remix.createCookie)("pabio_v20220123_locale", {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });
  if (!Object.entries(locales).map(([countryCode, languages]) => Object.keys(languages).map((languageCode) => `${languageCode}-${countryCode}`)).flat().some((locale) => url.pathname.startsWith(`/${locale}/`))) {
    const data = await cookie.parse(request.headers.get("Cookie"));
    const locale = data ?? await getRecommendedLocale(request);
    return new Response(`/${locale}${url.pathname}`, {
      status: 302,
      headers: {
        Location: `/${locale}${url.pathname}`,
        "Set-Cookie": await cookie.serialize(locale)
      }
    });
  }
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

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var meta = () => {
  return { title: "Pabio" };
};
var loader = async (args) => {
  const recommendedLocale = await getRecommendedLocale(args.request, args.params.locale);
  const url = new URL(args.request.url);
  return {
    i18n: loadTranslations(args.params.locale, Object.keys(locales).map((countryCode) => `country_${countryCode}`)),
    recommendedLocale: args.params.locale === recommendedLocale ? void 0 : recommendedLocale,
    recommendedLocaleUrl: url.pathname.replace(args.params.locale ?? "", recommendedLocale)
  };
};
var BaseTemplate = ({ children }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("style", {
  dangerouslySetInnerHTML: {
    __html: `
body {
	font-family: system-ui, sans-serif;
	line-height: 1.4;
	margin: 0 auto;
	max-width: 720px;
}
a { color: blue; }
				`
  }
})), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
function App() {
  var _a, _b;
  const { i18n, recommendedLocale, recommendedLocaleUrl } = (0, import_remix2.useLoaderData)();
  const [showLocale, setShowLocale] = (0, import_react.useState)(false);
  const matches = (0, import_remix2.useMatches)();
  const currentLocale = ((_a = matches[matches.length - 1]) == null ? void 0 : _a.params.locale) ?? "";
  const currentPathname = ((_b = matches[matches.length - 1]) == null ? void 0 : _b.pathname) ?? "";
  (0, import_react.useEffect)(() => {
    if (!window.sessionStorage.getItem("locale-recommendation-hidden"))
      setShowLocale(true);
  }, [setShowLocale]);
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, recommendedLocale && /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#eee",
      padding: "0.75rem",
      display: showLocale ? "flex" : "none",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement("p", {
    style: { margin: 0 }
  }, /* @__PURE__ */ React.createElement("span", {
    style: { marginRight: "0.5rem" }
  }, `This site is also available in ${locales[recommendedLocale.split("-")[1]][recommendedLocale.split("-")[0]]}.`), /* @__PURE__ */ React.createElement("a", {
    href: recommendedLocaleUrl
  }, `Switch to ${recommendedLocale.split("-")[0] === currentLocale.split("-")[0] ? locales[recommendedLocale.split("-")[1]][recommendedLocale.split("-")[0]].split("(")[1].split(")")[0].trim() : recommendedLocale.split("-")[1] === currentLocale.split("-")[1] ? locales[recommendedLocale.split("-")[1]][recommendedLocale.split("-")[0]].split("(")[0].trim() : locales[recommendedLocale.split("-")[1]][recommendedLocale.split("-")[0]]} \u2192`)), /* @__PURE__ */ React.createElement("button", {
    style: { border: 0, padding: 0 },
    "aria-label": "Hide",
    onClick: () => {
      setShowLocale(false);
      window.sessionStorage.setItem("locale-recommendation-hidden", "1");
    }
  }, /* @__PURE__ */ React.createElement("svg", {
    style: { height: "0.75rem" },
    viewBox: "0 0 138 137",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "125.922",
    y: "0.264648",
    width: "16",
    height: "177",
    transform: "rotate(45 125.922 0.264648)",
    fill: "black"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "137.236",
    y: "125.422",
    width: "16",
    height: "177",
    transform: "rotate(135 137.236 125.422)",
    fill: "black"
  })))), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("nav", {
    style: { backgroundColor: "#eee", padding: "1.5rem" }
  }, /* @__PURE__ */ React.createElement("h2", {
    style: { fontSize: "100%", margin: 0 }
  }, "Change language & region"), Object.entries(locales).map(([countryCode, languages]) => /* @__PURE__ */ React.createElement("div", {
    key: countryCode
  }, /* @__PURE__ */ React.createElement("h3", {
    style: { fontSize: "100%" }
  }, i18n[`country_${countryCode}`]), Object.entries(languages).map(([languageCode, name]) => {
    const locale = `${languageCode}-${countryCode}`;
    const active = currentLocale === locale;
    const href = currentPathname.replace(`/${currentLocale}`, `/${locale}`);
    return /* @__PURE__ */ React.createElement("a", {
      style: {
        marginRight: "1rem",
        fontWeight: active ? "bold" : "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        window.sessionStorage.setItem("locale-recommendation-hidden", "1");
        window.location.href = href;
      },
      key: locale,
      href,
      "aria-current": active ? "page" : "false"
    }, name);
  })))), /* @__PURE__ */ React.createElement("p", null, "\xA9 ", new Date().getFullYear())));
}
var ErrorBoundary = ({ error }) => {
  console.error(error);
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, error);
};

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/products/$product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_remix4 = __toModule(require_remix());

// app/helpers/seo.ts
init_react();
var generateMetaTags = ({ data, parentsData }) => {
  const { meta: meta5 } = data;
  return {
    title: [meta5.title].filter((i) => i != null).join(" \xB7 ")
  };
};

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/products/$product.tsx
var i18nKeys = ["hello"];
var meta2 = generateMetaTags;
var loader2 = (args) => {
  const i18n = loadTranslations(args.params.locale, i18nKeys);
  return {
    i18n,
    meta: { title: args.params.product }
  };
};
function Index() {
  const { i18n } = (0, import_remix4.useLoaderData)();
  const { product } = (0, import_remix3.useParams)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, i18n.hello), /* @__PURE__ */ React.createElement("p", null, "This is product ", product));
}

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/products/index.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Index2,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/components/LocaleLink.tsx
init_react();
var import_remix5 = __toModule(require_remix());
var LocaleLink = (_a) => {
  var _b = _a, { children } = _b, args = __objRest(_b, ["children"]);
  const { locale } = (0, import_remix5.useParams)();
  return /* @__PURE__ */ React.createElement(import_remix5.Link, __spreadProps(__spreadValues({}, args), {
    to: `/${locale}${args.to}`
  }), children);
};

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/products/index.tsx
var i18nKeys2 = ["hello", "world", "products"];
var meta3 = generateMetaTags;
var loader3 = (args) => {
  const i18n = loadTranslations(args.params.locale, i18nKeys2);
  return {
    i18n,
    meta: { title: i18n.products },
    products: [{ name: "Pants" }, { name: "Jacket" }]
  };
};
function Index2() {
  const { products, i18n } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, i18n.world), /* @__PURE__ */ React.createElement("ul", null, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.name
  }, /* @__PURE__ */ React.createElement(LocaleLink, {
    to: `/products/${product.name}`
  }, product.name)))));
}

// route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/index.tsx
var locale_exports = {};
__export(locale_exports, {
  default: () => Homepage,
  loader: () => loader4,
  meta: () => meta4
});
init_react();
var meta4 = generateMetaTags;
var loader4 = () => {
  return {
    i18n: {},
    meta: { title: "Pabio" }
  };
};
function Homepage() {
  return /* @__PURE__ */ React.createElement("p", null, "Hello");
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
  "routes/$locale/products/$product": {
    id: "routes/$locale/products/$product",
    parentId: "root",
    path: ":locale/products/:product",
    index: void 0,
    caseSensitive: void 0,
    module: product_exports
  },
  "routes/$locale/products/index": {
    id: "routes/$locale/products/index",
    parentId: "root",
    path: ":locale/products",
    index: true,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/$locale/index": {
    id: "routes/$locale/index",
    parentId: "root",
    path: ":locale",
    index: true,
    caseSensitive: void 0,
    module: locale_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2hlbHBlcnMvaTE4bi50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvcmVtaXgtc3RhcnRlci9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy8kbG9jYWxlL3Byb2R1Y3RzLyRwcm9kdWN0LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaGVscGVycy9zZW8udHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy8kbG9jYWxlL3Byb2R1Y3RzL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Mb2NhbGVMaW5rLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzLyRsb2NhbGUvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9yZW1peC1zdGFydGVyL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL3JlbWl4LXN0YXJ0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy8kbG9jYWxlL3Byb2R1Y3RzLyRwcm9kdWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvJGxvY2FsZS9wcm9kdWN0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzLyRsb2NhbGUvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy8kbG9jYWxlL3Byb2R1Y3RzLyRwcm9kdWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJGxvY2FsZS9wcm9kdWN0cy8kcHJvZHVjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsb2NhbGUvcHJvZHVjdHMvOnByb2R1Y3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy8kbG9jYWxlL3Byb2R1Y3RzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJGxvY2FsZS9wcm9kdWN0cy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpsb2NhbGUvcHJvZHVjdHNcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvJGxvY2FsZS9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRsb2NhbGUvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCI6bG9jYWxlXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRSZWNvbW1lbmRlZExvY2FsZSwgbG9jYWxlcyB9IGZyb20gXCJ+L2hlbHBlcnMvaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBjb29raWUgPSBjcmVhdGVDb29raWUoXCJwYWJpb192MjAyMjAxMjNfbG9jYWxlXCIsIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFPYmplY3QuZW50cmllcyhsb2NhbGVzKVxuICAgICAgLm1hcCgoW2NvdW50cnlDb2RlLCBsYW5ndWFnZXNdKSA9PlxuICAgICAgICBPYmplY3Qua2V5cyhsYW5ndWFnZXMpLm1hcChcbiAgICAgICAgICAobGFuZ3VhZ2VDb2RlKSA9PiBgJHtsYW5ndWFnZUNvZGV9LSR7Y291bnRyeUNvZGV9YFxuICAgICAgICApXG4gICAgICApXG4gICAgICAuZmxhdCgpXG4gICAgICAuc29tZSgobG9jYWxlKSA9PiB1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChgLyR7bG9jYWxlfS9gKSlcbiAgKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvb2tpZS5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgICBjb25zdCBsb2NhbGUgPSBkYXRhID8/IChhd2FpdCBnZXRSZWNvbW1lbmRlZExvY2FsZShyZXF1ZXN0KSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShgLyR7bG9jYWxlfSR7dXJsLnBhdGhuYW1lfWAsIHtcbiAgICAgIHN0YXR1czogMzAyLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBMb2NhdGlvbjogYC8ke2xvY2FsZX0ke3VybC5wYXRobmFtZX1gLFxuICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29va2llLnNlcmlhbGl6ZShsb2NhbGUpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcbiAgICBcIlNldC1Db29raWVcIixcbiAgICBhd2FpdCBjb29raWUuc2VyaWFsaXplKHVybC5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0pXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBwaWNrIH0gZnJvbSBcImFjY2VwdC1sYW5ndWFnZS1wYXJzZXJcIjtcbmltcG9ydCBpMThuRGF0YSBmcm9tIFwifi9kYXRhL2kxOG4uanNvblwiO1xuXG5jb25zdCBGQUxMQkFDS19MQU5HVUFHRSA9IFwiZW5cIjtcbmNvbnN0IEZBTExCQUNLX0NPVU5UUlkgPSBcImNoXCI7XG5cbi8qKlxuICogQWxsIGF2YWlsYWJsZSBsb2NhbGVzIHBlciBjb3VudHJ5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICogeyBbY291bnRyeSBjb2RlXTogeyBbbGFuZ3VhZ2UgY29kZV06IG5hbWUgfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBsb2NhbGVzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZGU6IHsgZW46IFwiRW5nbGlzaCAoR2VybWFueSlcIiwgZGU6IFwiRGV1dHNjaGUgKERldXRzY2hsYW5kKVwiIH0sXG4gIGNoOiB7XG4gICAgZW46IFwiRW5nbGlzaCAoU3dpdHplcmxhbmQpXCIsXG4gICAgZnI6IFwiRnJhblx1MDBFN2FpcyAoU3Vpc3NlKVwiLFxuICAgIGRlOiBcIkRldXRzY2hlIChTY2h3ZWl6KVwiLFxuICB9LFxufTtcblxuY29uc3QgX2kxOG46IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0gaTE4bkRhdGE7XG5jb25zdCBfY29tcHV0ZWRMYW5ndWFnZUNvZGVzID0gQXJyYXkuZnJvbShcbiAgbmV3IFNldDxzdHJpbmc+KFxuICAgIE9iamVjdC52YWx1ZXMobG9jYWxlcylcbiAgICAgIC5tYXAoKGxhbmd1YWdlcykgPT4gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKSlcbiAgICAgIC5mbGF0KClcbiAgKVxuKTtcblxuLyoqXG4gKiBHZXQgbG9jYWxpemVkIGtleXMgZm9yIGEgZ2l2ZW4gbG9jYWxlXG4gKiBAcGFyYW0gbG9jYWxlIC0gTG9jYWxlIGNvZGUsIGUuZy4sIFwiZW4tY2hcIlxuICogQHBhcmFtIGtleXMgLSBLZXlzIHJlcXVpcmVkXG4gKiBAcmV0dXJucyBPYmplY3QgY29udGFpbmluZyBsb2NhbGl6ZWQgdGVybXNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRUcmFuc2xhdGlvbnMgPSA8VCBleHRlbmRzIHN0cmluZz4oXG4gIGxvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBrZXlzOiByZWFkb25seSBzdHJpbmdbXVxuKTogUmVjb3JkPFQsIHN0cmluZz4gPT4ge1xuICBjb25zdCBsYW5ndWFnZUNvZGUgPSBsb2NhbGU/LnNwbGl0KFwiLVwiKVswXSA/PyBGQUxMQkFDS19MQU5HVUFHRTtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGtleXMuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKHJlc3VsdFtrZXldID1cbiAgICAgICAgX2kxOG5bbGFuZ3VhZ2VDb2RlXVtrZXldID8/IF9pMThuW0ZBTExCQUNLX0xBTkdVQUdFXVtrZXldID8/IGtleSlcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBJUCBhZGRyZXNzIGZyb20gYW4gaW5jb21pbmcgUmVxdWVzdCwgYmFzZWRcbiAqIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9wYm9qaW5vdi9yZXF1ZXN0LWlwXG4gKiBAcGFyYW0gaGVhZGVycyAtIFJlcXVlc3QgaGVhZGVyc1xuICogQHJldHVybnMgSVAgYWRkcmVzcyB3aXRoIGEgZmFsbGJhY2sgdmFsdWVcbiAqL1xuY29uc3QgZ2V0SXBBZGRyZXNzRnJvbVJlcXVlc3QgPSAoaGVhZGVyczogSGVhZGVycyk6IHN0cmluZyA9PiB7XG4gIGZvciAoY29uc3QgaGVhZGVyIGluIFtcbiAgICBcIngtY2xpZW50LWlwXCIsXG4gICAgXCJ4LWZvcndhcmRlZC1mb3JcIixcbiAgICBcImNmLWNvbm5lY3RpbmctaXBcIixcbiAgICBcImZhc3RseS1jbGllbnQtaXBcIixcbiAgICBcInRydWUtY2xpZW50LWlwXCIsXG4gICAgXCJ4LXJlYWwtaXBcIixcbiAgICBcIngtY2x1c3Rlci1jbGllbnQtaXBcIixcbiAgICBcIngtZm9yd2FyZGVkXCIsXG4gICAgXCJmb3J3YXJkZWQtZm9yXCIsXG4gICAgXCJmb3J3YXJkZWRcIixcbiAgXSkge1xuICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyc1xuICAgICAgLmdldChoZWFkZXIpXG4gICAgICA/LnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdHRlZCA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAyKSByZXR1cm4gc3BsaXR0ZWRbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSlbMF07XG4gICAgaWYgKHZhbHVlKSByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIFwiMS4xLjEuMVwiO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHJlY29tbWVuZGVkIGxvY2FsZSBmb3IgYSByZXF1ZXN0IHVzaW5nIGl0cyBgQWNjZXB0LUxhbmd1YWdlYCBoZWFkZXIgYW5kIElQIGFkZHJlc3NcbiAqIEBwYXJhbSBoZWFkZXJzIC0gUmVxdWVzdCBoZWFkZXJzXG4gKiBAcGFyYW0gY3VycmVudExvY2FsZSAtIEN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gKiBAcmV0dXJucyBMb2NhbGUsIGUuZy4sIFwiZW4tY2hcIlxuICovXG5leHBvcnQgY29uc3QgZ2V0UmVjb21tZW5kZWRMb2NhbGUgPSBhc3luYyAoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIGN1cnJlbnRMb2NhbGU/OiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxdWVzdDtcbiAgY29uc3QgbG9jYWxlID0gcGljayhcbiAgICBfY29tcHV0ZWRMYW5ndWFnZUNvZGVzLFxuICAgIGhlYWRlcnMuZ2V0KFwiYWNjZXB0LWxhbmd1YWdlXCIpID8/IFwiXCJcbiAgKTtcbiAgbGV0IHJlY29tbWVuZGVkQ291bnRyeUNvZGUgPVxuICAgIGN1cnJlbnRMb2NhbGU/LnNwbGl0Py4oXCItXCIpPy5bMV0gPz8gRkFMTEJBQ0tfQ09VTlRSWTtcbiAgaWYgKCFjdXJyZW50TG9jYWxlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpcEFkZHJlc3MgPSBnZXRJcEFkZHJlc3NGcm9tUmVxdWVzdChoZWFkZXJzKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvdW50cnkuaXMvJHtpcEFkZHJlc3N9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgeyBjb3VudHJ5IH0gPSBkYXRhIGFzIHsgY291bnRyeTogc3RyaW5nOyBpcDogc3RyaW5nIH07XG4gICAgICBjb25zdCBsb3dlcmNhc2VkID0gY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2FsZXMpLmluY2x1ZGVzKGxvd2VyY2FzZWQpKVxuICAgICAgICByZWNvbW1lbmRlZENvdW50cnlDb2RlID0gbG93ZXJjYXNlZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICByZXR1cm4gYCR7bG9jYWxlID8/IEZBTExCQUNLX0xBTkdVQUdFfS0ke3JlY29tbWVuZGVkQ291bnRyeUNvZGV9YDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGdldFJlY29tbWVuZGVkTG9jYWxlLFxuICBsb2FkVHJhbnNsYXRpb25zLFxuICBsb2NhbGVzLFxufSBmcm9tIFwifi9oZWxwZXJzL2kxOG5cIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiUGFiaW9cIiB9O1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBpMThuOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICByZWNvbW1lbmRlZExvY2FsZT86IHN0cmluZztcbiAgcmVjb21tZW5kZWRMb2NhbGVVcmw6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKGFyZ3MpOiBQcm9taXNlPExvYWRlckRhdGE+ID0+IHtcbiAgY29uc3QgcmVjb21tZW5kZWRMb2NhbGUgPSBhd2FpdCBnZXRSZWNvbW1lbmRlZExvY2FsZShcbiAgICBhcmdzLnJlcXVlc3QsXG4gICAgYXJncy5wYXJhbXMubG9jYWxlXG4gICk7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYXJncy5yZXF1ZXN0LnVybCk7XG4gIHJldHVybiB7XG4gICAgaTE4bjogbG9hZFRyYW5zbGF0aW9ucyhcbiAgICAgIGFyZ3MucGFyYW1zLmxvY2FsZSxcbiAgICAgIE9iamVjdC5rZXlzKGxvY2FsZXMpLm1hcCgoY291bnRyeUNvZGUpID0+IGBjb3VudHJ5XyR7Y291bnRyeUNvZGV9YClcbiAgICApLFxuICAgIHJlY29tbWVuZGVkTG9jYWxlOlxuICAgICAgYXJncy5wYXJhbXMubG9jYWxlID09PSByZWNvbW1lbmRlZExvY2FsZSA/IHVuZGVmaW5lZCA6IHJlY29tbWVuZGVkTG9jYWxlLFxuICAgIHJlY29tbWVuZGVkTG9jYWxlVXJsOiB1cmwucGF0aG5hbWUucmVwbGFjZShcbiAgICAgIGFyZ3MucGFyYW1zLmxvY2FsZSA/PyBcIlwiLFxuICAgICAgcmVjb21tZW5kZWRMb2NhbGVcbiAgICApLFxuICB9O1xufTtcblxuY29uc3QgQmFzZVRlbXBsYXRlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgPGhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxMaW5rcyAvPlxuICAgICAgPHN0eWxlXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1heC13aWR0aDogNzIwcHg7XG59XG5hIHsgY29sb3I6IGJsdWU7IH1cblx0XHRcdFx0YCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgaTE4biwgcmVjb21tZW5kZWRMb2NhbGUsIHJlY29tbWVuZGVkTG9jYWxlVXJsIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW3Nob3dMb2NhbGUsIHNldFNob3dMb2NhbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpO1xuICBjb25zdCBjdXJyZW50TG9jYWxlID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdPy5wYXJhbXMubG9jYWxlID8/IFwiXCI7XG4gIGNvbnN0IGN1cnJlbnRQYXRobmFtZSA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXT8ucGF0aG5hbWUgPz8gXCJcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGUtcmVjb21tZW5kYXRpb24taGlkZGVuXCIpKVxuICAgICAgc2V0U2hvd0xvY2FsZSh0cnVlKTtcbiAgfSwgW3NldFNob3dMb2NhbGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxCYXNlVGVtcGxhdGU+XG4gICAgICB7cmVjb21tZW5kZWRMb2NhbGUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWVlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNzVyZW1cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IHNob3dMb2NhbGUgPyBcImZsZXhcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIgfX0+XG4gICAgICAgICAgICAgIHtgVGhpcyBzaXRlIGlzIGFsc28gYXZhaWxhYmxlIGluICR7XG4gICAgICAgICAgICAgICAgbG9jYWxlc1tyZWNvbW1lbmRlZExvY2FsZS5zcGxpdChcIi1cIilbMV1dW1xuICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWRMb2NhbGUuc3BsaXQoXCItXCIpWzBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LmB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YSBocmVmPXtyZWNvbW1lbmRlZExvY2FsZVVybH0+e2BTd2l0Y2ggdG8gJHtcbiAgICAgICAgICAgICAgcmVjb21tZW5kZWRMb2NhbGUuc3BsaXQoXCItXCIpWzBdID09PSBjdXJyZW50TG9jYWxlLnNwbGl0KFwiLVwiKVswXVxuICAgICAgICAgICAgICAgID8gbG9jYWxlc1tyZWNvbW1lbmRlZExvY2FsZS5zcGxpdChcIi1cIilbMV1dW1xuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZExvY2FsZS5zcGxpdChcIi1cIilbMF1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiKFwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIpXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICA6IHJlY29tbWVuZGVkTG9jYWxlLnNwbGl0KFwiLVwiKVsxXSA9PT1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRMb2NhbGUuc3BsaXQoXCItXCIpWzFdXG4gICAgICAgICAgICAgICAgPyBsb2NhbGVzW3JlY29tbWVuZGVkTG9jYWxlLnNwbGl0KFwiLVwiKVsxXV1bXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTG9jYWxlLnNwbGl0KFwiLVwiKVswXVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIoXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICA6IGxvY2FsZXNbcmVjb21tZW5kZWRMb2NhbGUuc3BsaXQoXCItXCIpWzFdXVtcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWRMb2NhbGUuc3BsaXQoXCItXCIpWzBdXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9IFx1MjE5MmB9PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IDAsIHBhZGRpbmc6IDAgfX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIaWRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd0xvY2FsZShmYWxzZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwibG9jYWxlLXJlY29tbWVuZGF0aW9uLWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIFwiMVwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjAuNzVyZW1cIiB9fVxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEzOCAxMzdcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9XCIxMjUuOTIyXCJcbiAgICAgICAgICAgICAgICB5PVwiMC4yNjQ2NDhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE3N1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDQ1IDEyNS45MjIgMC4yNjQ2NDgpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9XCIxMzcuMjM2XCJcbiAgICAgICAgICAgICAgICB5PVwiMTI1LjQyMlwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTc3XCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTM1IDEzNy4yMzYgMTI1LjQyMilcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJibGFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPE91dGxldCAvPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPG5hdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLCBwYWRkaW5nOiBcIjEuNXJlbVwiIH19PlxuICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIxMDAlXCIsIG1hcmdpbjogMCB9fT5cbiAgICAgICAgICAgIHtcIkNoYW5nZSBsYW5ndWFnZSAmIHJlZ2lvblwifVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGxvY2FsZXMpLm1hcCgoW2NvdW50cnlDb2RlLCBsYW5ndWFnZXNdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y291bnRyeUNvZGV9PlxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIHtpMThuW2Bjb3VudHJ5XyR7Y291bnRyeUNvZGV9YF19XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhsYW5ndWFnZXMpLm1hcCgoW2xhbmd1YWdlQ29kZSwgbmFtZV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGUgPSBgJHtsYW5ndWFnZUNvZGV9LSR7Y291bnRyeUNvZGV9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjdXJyZW50TG9jYWxlID09PSBsb2NhbGU7XG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGN1cnJlbnRQYXRobmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgYC8ke2N1cnJlbnRMb2NhbGV9YCxcbiAgICAgICAgICAgICAgICAgIGAvJHtsb2NhbGV9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGFjdGl2ZSA/IFwiYm9sZFwiIDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvY2FsZS1yZWNvbW1lbmRhdGlvbi1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2FjdGl2ZSA/IFwicGFnZVwiIDogXCJmYWxzZVwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHA+XHUwMEE5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9CYXNlVGVtcGxhdGU+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gKHsgZXJyb3IgfSkgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIDxCYXNlVGVtcGxhdGU+e2Vycm9yfTwvQmFzZVRlbXBsYXRlPjtcbn07XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2FkVHJhbnNsYXRpb25zIH0gZnJvbSBcIn4vaGVscGVycy9pMThuXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1ldGFUYWdzIH0gZnJvbSBcIn4vaGVscGVycy9zZW9cIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5kTG9hZGVyRGF0YSB9IGZyb20gXCJ+L2hlbHBlcnMvbG9hZGVyXCI7XG5cbmNvbnN0IGkxOG5LZXlzID0gW1wiaGVsbG9cIl0gYXMgY29uc3Q7XG50eXBlIEkxOG5LZXlzID0gdHlwZW9mIGkxOG5LZXlzW251bWJlcl07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSBnZW5lcmF0ZU1ldGFUYWdzO1xudHlwZSBMb2FkZXJEYXRhID0gRXh0ZW5kTG9hZGVyRGF0YTxJMThuS2V5cywge30+O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoYXJncyk6IExvYWRlckRhdGEgPT4ge1xuICBjb25zdCBpMThuID0gbG9hZFRyYW5zbGF0aW9uczxJMThuS2V5cz4oYXJncy5wYXJhbXMubG9jYWxlLCBpMThuS2V5cyk7XG4gIHJldHVybiB7XG4gICAgaTE4bixcbiAgICBtZXRhOiB7IHRpdGxlOiBhcmdzLnBhcmFtcy5wcm9kdWN0IH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntpMThuLmhlbGxvfTwvaDE+XG4gICAgICA8cD5UaGlzIGlzIHByb2R1Y3Qge3Byb2R1Y3R9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuZExvYWRlckRhdGEgfSBmcm9tIFwifi9oZWxwZXJzL2xvYWRlclwiO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgPG1ldGE+IHRhZ3MgZm9yIGEgcm91dGVcbiAqIEBwYXJhbSBhcmdzIC0gUmVtaXgncyBgTWV0YUZ1bmN0aW9uYCBhcmdnc1xuICogQHJldHVybnMgT2JqZWN0IGZvciBgSHRtbE1ldGFEZXNjcmlwdG9yYFxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVNZXRhVGFnczogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSwgcGFyZW50c0RhdGEgfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyh7IHBhcmVudHNEYXRhOiBKU09OLnN0cmluZ2lmeShwYXJlbnRzRGF0YSkgfSk7XG4gIGNvbnN0IHsgbWV0YSB9OiBFeHRlbmRMb2FkZXJEYXRhPHN0cmluZywgUmVjb3JkPHN0cmluZywgYW55Pj4gPSBkYXRhO1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBbbWV0YS50aXRsZV0uZmlsdGVyKChpKSA9PiBpICE9IG51bGwpLmpvaW4oXCIgXHUwMEI3IFwiKSxcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2NhbGVMaW5rIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2NhbGVMaW5rXCI7XG5pbXBvcnQgeyBsb2FkVHJhbnNsYXRpb25zIH0gZnJvbSBcIn4vaGVscGVycy9pMThuXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuZExvYWRlckRhdGEgfSBmcm9tIFwifi9oZWxwZXJzL2xvYWRlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVNZXRhVGFncyB9IGZyb20gXCJ+L2hlbHBlcnMvc2VvXCI7XG5cbmNvbnN0IGkxOG5LZXlzID0gW1wiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInByb2R1Y3RzXCJdIGFzIGNvbnN0O1xudHlwZSBJMThuS2V5cyA9IHR5cGVvZiBpMThuS2V5c1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gZ2VuZXJhdGVNZXRhVGFncztcbnR5cGUgTG9hZGVyRGF0YSA9IEV4dGVuZExvYWRlckRhdGE8STE4bktleXMsIHsgcHJvZHVjdHM6IHsgbmFtZTogc3RyaW5nIH1bXSB9PjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKGFyZ3MpOiBMb2FkZXJEYXRhID0+IHtcbiAgY29uc3QgaTE4biA9IGxvYWRUcmFuc2xhdGlvbnM8STE4bktleXM+KGFyZ3MucGFyYW1zLmxvY2FsZSwgaTE4bktleXMpO1xuICByZXR1cm4ge1xuICAgIGkxOG4sXG4gICAgbWV0YTogeyB0aXRsZTogaTE4bi5wcm9kdWN0cyB9LFxuICAgIHByb2R1Y3RzOiBbeyBuYW1lOiBcIlBhbnRzXCIgfSwgeyBuYW1lOiBcIkphY2tldFwiIH1dLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMsIGkxOG4gfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2kxOG4ud29ybGR9PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QubmFtZX0+XG4gICAgICAgICAgICA8TG9jYWxlTGluayB0bz17YC9wcm9kdWN0cy8ke3Byb2R1Y3QubmFtZX1gfT5cbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgIDwvTG9jYWxlTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuZXhwb3J0IGNvbnN0IExvY2FsZUxpbms6IFJlYWN0LkZDPFxuICBSZW1peExpbmtQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTEFuY2hvckVsZW1lbnQ+XG4+ID0gKHsgY2hpbGRyZW4sIC4uLmFyZ3MgfSkgPT4ge1xuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB7Li4uYXJnc30gdG89e2AvJHtsb2NhbGV9JHthcmdzLnRvfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1ldGFUYWdzIH0gZnJvbSBcIn4vaGVscGVycy9zZW9cIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5kTG9hZGVyRGF0YSB9IGZyb20gXCJ+L2hlbHBlcnMvbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSBnZW5lcmF0ZU1ldGFUYWdzO1xudHlwZSBMb2FkZXJEYXRhID0gRXh0ZW5kTG9hZGVyRGF0YTxzdHJpbmcsIHt9PjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCk6IExvYWRlckRhdGEgPT4ge1xuICByZXR1cm4ge1xuICAgIGkxOG46IHt9LFxuICAgIG1ldGE6IHsgdGl0bGU6IFwiUGFiaW9cIiB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8cD5IZWxsbzwvcD47XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtB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
