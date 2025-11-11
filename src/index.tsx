import "./index.css";
import { Login } from "@/components/login/login";
import { People } from "@/components/people";
import { homeAction } from "@/routes/home/action";
import { homeLoader } from "@/routes/home/loader";
import { RootLayout } from "@/routes/layout";
import { tableLoader } from "@/routes/table/loader";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js");
//   });
// }

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
      { path: "/table", Component: People, loader: tableLoader },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
