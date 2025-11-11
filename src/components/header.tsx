import { Button } from "@/components/ui/button";
import { logout } from "@/services/login";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

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
