import "./index.css";
import { Login } from "@/components/login/login";
import { People } from "@/components/people/people";
import { homeAction } from "@/routes/home/action";
import { homeLoader } from "@/routes/home/loader";
import { RootLayout } from "@/routes/layout";
import { tableLoader } from "@/routes/table/loader";
import { LoaderCircle } from "lucide-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        loader: homeLoader,
        action: homeAction,
        Component: Login,
      },
      {
        path: "/table",
        Component: People,
        loader: tableLoader,
        hydrateFallbackElement: <LoaderCircle className="animate-spin" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
