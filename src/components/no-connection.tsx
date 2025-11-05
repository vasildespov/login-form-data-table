import { Dialog, DialogContent } from "@/components/ui/dialog";

export const NoConnection = () => {
  return (
    <Dialog open>
      <DialogContent className="flex flex-col items-center justify-center">
        <img className="w-xs rounded-lg" src="/no-internet.jpg" />
        <span className="text-center text-3xl font-medium">
          No internet connection
        </span>
      </DialogContent>
    </Dialog>
  );
};
