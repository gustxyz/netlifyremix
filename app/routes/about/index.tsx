import type { LoaderFunction, MetaFunction } from "remix";
import About from '../../components/About'
import AboutStyles from '../../assets/styles/about.css'

export function links() {
    return [
      {
        rel: "stylesheet",
        href: "https://d33wubrfki0l68.cloudfront.net/bundles/bf62e7a7871d940c3c6df187eae9258636299ed4.css",
      },
    ];
  }

export default function Homepage() {
  return <About />
}
