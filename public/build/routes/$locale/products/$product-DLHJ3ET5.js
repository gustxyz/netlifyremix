import {
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-M3CTSPVS.js";
import {
  generateMetaTags
} from "/build/_shared/chunk-IPLUMUTN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/$locale/products/$product.tsx?browser
init_react();

// app/routes/$locale/products/$product.tsx
init_react();
var meta = generateMetaTags;
function Index() {
  const { i18n } = useLoaderData();
  const { product } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, i18n.hello), /* @__PURE__ */ React.createElement("p", null, "This is product ", product));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/$locale/products/$product-DLHJ3ET5.js.map
