import { useEffect, useState } from "react";
import type {
  ErrorBoundaryComponent,
  LoaderFunction,
  MetaFunction,
} from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from "remix";

import Header from "./components/Header";
import Footer from "./components/Footer";
import useMedia from "./helpers/useMedia";



export const meta: MetaFunction = () => {
  return { title: "Alki Digital | Web Design" };
};



const BaseTemplate: React.FC = ({ children }) => (
  <html lang="en">
    <head>
   

    <meta charSet="UTF-8"  />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo." />
    <meta name="keywords" content="small business web designer usa, small business web developer usa, web developer near me usa, affordable web design usa, affordable business website usa, 
    web design agency usa, affordable web design agency for small businesses, custom web development usa, web design ageency, web design services usa, website designing compnay usa" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="theme-color" content="#43b7ff" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <meta property="og:title" content="Small Business Web Design + Development"/>
    <meta property="og:description" content="No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo."/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.alki.digital/"/>
    <meta property="og:image" content="https://www.alki.digital/"/>
    <meta property="og:image:secure_url" content="https://www.alki.digital/"/>

    <link rel="canonical" href="https://www.alki.digital/" />

      <Meta />
      <Links />
    
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);

export default function App() {
  const [navActive, setNavActive] = useState(false);

  const onClickHandler = ()=> {
    setNavActive(!navActive);
}
let isMobile: boolean | null = null;
if(typeof window !== 'undefined') {
     isMobile = useMedia<boolean>(
        // Media queries
        ["(min-width: 1250px)", "(max-width: 1249px)"],
        // Column counts (relates to above media queries by array index)
        [false, true],

        false
   
      );

}
  return (
    <BaseTemplate>
      <Header navActive={navActive} setNavActive={setNavActive} />
      <div onClick={navActive ? onClickHandler : undefined}>
      <Outlet />
      <Footer />
      </div>
   
    </BaseTemplate>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);
  return <BaseTemplate>{error}</BaseTemplate>;
};
