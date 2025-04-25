import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InterviewGeneratedDialogProps {
  open: boolean;
  onClose: () => void;
}

const InterviewGeneratedDialog = ({
  open,
  onClose,
}: InterviewGeneratedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm sm:max-w-md rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center space-y-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl font-bold">
            🎉 Your Interview is Generated
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Go to your dashboard to start the interview!
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button className="btn-primary w-full sm:w-auto" onClick={onClose}>
            Go to Dashboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewGeneratedDialog;
