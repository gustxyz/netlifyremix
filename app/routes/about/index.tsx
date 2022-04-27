import type { LoaderFunction, MetaFunction } from "remix";
import About from '../../components/About'
import AboutStyles from '../../assets/styles/about.css'

export function links() {
    return [
      {
        rel: "stylesheet",
        href: AboutStyles,
      },
    ];
  }

export default function Homepage() {
  return <About />
}
