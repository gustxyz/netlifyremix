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


import  Styles  from "./assets/styles/base.css"

export const meta: MetaFunction = () => {
  return { title: "Alki Digital | Web Design" };
};



const BaseTemplate: React.FC = ({ children }) => (
  <html lang="en">
    <head>
      <link href={Styles} rel='stylesheet'/>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
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


  return (
    <BaseTemplate>
      <Header />
      <Outlet />
      <Footer />
    </BaseTemplate>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);
  return <BaseTemplate>{error}</BaseTemplate>;
};
