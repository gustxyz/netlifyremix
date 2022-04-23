import {
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/helpers/seo.ts
init_react();
var generateMetaTags = ({ data, parentsData }) => {
  const { meta } = data;
  return {
    title: [meta.title].filter((i) => i != null).join(" \xB7 ")
  };
};

export {
  generateMetaTags
};
//# sourceMappingURL=/build/_shared/chunk-IPLUMUTN.js.map
