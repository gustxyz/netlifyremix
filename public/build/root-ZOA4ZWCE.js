import {
  locales
} from "/build/_shared/chunk-M3MQPAQY.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-GRFXDWEQ.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/Documents/GitHub/remix-starter/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react = __toModule(require_react());
var meta = () => {
  return { title: "Pabio" };
};
var BaseTemplate = ({ children }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("style", {
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
})), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
function App() {
  var _a, _b, _c, _d;
  const { i18n, recommendedLocale, recommendedLocaleUrl } = useLoaderData();
  const [showLocale, setShowLocale] = (0, import_react.useState)(false);
  const matches = useMatches();
  const currentLocale = (_b = (_a = matches[matches.length - 1]) == null ? void 0 : _a.params.locale) != null ? _b : "";
  const currentPathname = (_d = (_c = matches[matches.length - 1]) == null ? void 0 : _c.pathname) != null ? _d : "";
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
  })))), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("nav", {
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
export {
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-ZOA4ZWCE.js.map
