import type { MetaFunction, LinksFunction } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import styles from "./app.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "Dev Nest - Transform Your Ideas into Reality" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "description", content: "Dev Nest helps you bring your ideas alive with expert UI/UX design, website development, and digital solutions." },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}