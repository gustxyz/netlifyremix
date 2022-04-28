import { LoaderFunction, MetaFunction, redirect } from "remix";
import Contact from '../../components/Contact'



export function links() {
    return [
      {
        rel: "stylesheet",
        href: "https://d33wubrfki0l68.cloudfront.net/bundles/1dd11a07866c5467a9744f635db24cbe6e6b6dd2.css",
      },
    ];
  }

export default function Homepage() {
  return <Contact />
}
