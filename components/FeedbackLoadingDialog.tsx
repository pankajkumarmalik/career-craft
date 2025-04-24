import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader } from "lucide-react";

interface FeedbackLoadingDialogProps {
  open: boolean;
}

const FeedbackLoadingDialog = ({ open }: FeedbackLoadingDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-sm sm:max-w-md rounded-2xl p-8 text-center shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold flex items-center justify-center gap-2">
            <Loader className="h-6 w-6 animate-spin text-primary" />
            Generating Feedback...
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-2">
            Please wait a moment, we are assessing your interview.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackLoadingDialog;
