import type { LoaderFunction, MetaFunction } from "remix";
import Main from "../components/Main"


export function links() {
    return [
      {
        rel: "stylesheet",
        href: "https://d33wubrfki0l68.cloudfront.net/bundles/531aa08a1619a26df663f78609c28da905315645.css",
      },
    ];
  }


export default function Homepage() {
  return <Main />
}
