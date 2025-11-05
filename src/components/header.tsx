import { Button } from "@/components/ui/button";
import { isAuthenticated, logout } from "@/services/login";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  if (!isAuthenticated()) return null;

  const handleLogout = () => {
    logout();
    return navigate("/");
  };

  return (
    <header className="bg-background fixed top-0 flex h-15 w-full items-center justify-end px-5 shadow-md">
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );
};
