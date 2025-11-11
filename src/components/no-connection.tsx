import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { NO_CONNECTION_IMG } from "@/lib/base64/no-connection";

export const NoConnection = () => {
  return (
    <Dialog open>
      <DialogContent className="flex flex-col items-center justify-center">
        <DialogTitle>No internet connection</DialogTitle>
        <img
          className="w-xs rounded-lg"
          src={NO_CONNECTION_IMG}
          alt="no internet connection illustration"
        />
      </DialogContent>
    </Dialog>
  );
};
