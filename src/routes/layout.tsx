import { Header } from "@/components/header";
import { NoConnection } from "@/components/no-connection";
import { useConnection } from "@/hooks/useConnection";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

export const RootLayout = () => {
  const isOnline = useConnection();
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col">
      {!isOnline && <NoConnection />}
      {location.pathname !== "/" && <Header />}
      <main className="mt-15 flex flex-1 items-center justify-center p-5">
        <Outlet />
      </main>
    </div>
  );
};
