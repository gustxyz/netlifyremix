import "/build/_shared/chunk-M3MQPAQY.js";
import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-GRFXDWEQ.js";
import {
  generateMetaTags
} from "/build/_shared/chunk-IPLUMUTN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/Documents/GitHub/remix-starter/app/routes/$locale/products/index.tsx?browser
init_react();

// app/routes/$locale/products/index.tsx
init_react();

// app/components/LocaleLink.tsx
init_react();
var LocaleLink = ({ children, ...args }) => {
  const { locale } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement(Link, {
    ...args,
    to: `/${locale}${args.to}`
  }, children);
};

// app/routes/$locale/products/index.tsx
var meta = generateMetaTags;
function Index() {
  const { products, i18n } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, i18n.world), /* @__PURE__ */ React.createElement("ul", null, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.name
  }, /* @__PURE__ */ React.createElement(LocaleLink, {
    to: `/products/${product.name}`
  }, product.name)))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/$locale/products/index-GWLQPE6Q.js.map
