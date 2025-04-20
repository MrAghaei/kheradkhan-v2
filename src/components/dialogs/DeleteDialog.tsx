import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function DeleteDialog({
  open,
  onOpenChange,
  title = "حذف برچسب",
  message = "آیا از حذف برچسب مطمئن هستید؟",
  confirmText = "بله",
  cancelText = "خیر",
  onConfirm,
  onCancel,
}: DeleteDialogProps) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className="p-0 overflow-hidden border shadow-lg bg-white max-w-md w-full"
        dir="rtl"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl text-secondary">{title}</h2>
        </div>
        <div className="flex p-6 text-center">
          <p className="text-text1 text-lg">{message}</p>
        </div>
        <div className="flex gap-3 p-4 pt-0 justify-end">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border border-primary hover:border-emerald-500 bg-white hover:bg-gray-100 hover:text-primary text-primary font-medium px-8 py-2 rounded-md w-32"
          >
            {cancelText}
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-primary hover:bg-emerald-500 text-white font-medium px-8 py-2 rounded-md w-32"
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
