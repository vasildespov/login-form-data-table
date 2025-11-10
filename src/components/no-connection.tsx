import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const NoConnection = () => {
  return (
    <Dialog open>
      <DialogContent className="flex flex-col items-center justify-center">
        <DialogTitle>No internet connection</DialogTitle>
        <img className="w-xs rounded-lg" src="/no-internet.jpg" />
      </DialogContent>
    </Dialog>
  );
};
