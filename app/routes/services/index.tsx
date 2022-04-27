import type { LoaderFunction, MetaFunction } from "remix";
import { useParams } from "@remix-run/react";

import Services from '../../components/Services'

export function links() {
    return [
      {
        rel: "stylesheet",
        href: "https://d33wubrfki0l68.cloudfront.net/bundles/01ba941265b8ab55efcb1e2c16cda90619453695.css",
      },
    ];
  }

  export const loader: LoaderFunction = async ({
    params,
  }) => {
    console.log(params);
    return params
  };

export default function Homepage() {
   
        const params = useParams();
        console.log(params);
      
  return <Services />
}
