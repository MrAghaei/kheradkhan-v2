"use client";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
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
    // onConfirm();
    onOpenChange(false);
  };
  const handleCloseDialog = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className="p-0 overflow-hidden border shadow-lg rounded-lg max-w-md w-full"
        dir="rtl"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={() => onOpenChange(false)}
            className="w-6 h-6 flex items-center justify-center rounded-full focus:outline-none"
          ></button>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="p-6 text-center">
          <p className="text-base">{message}</p>
        </div>
        <div className="flex gap-3 p-4 pt-0 justify-center">
          <Button
            onClick={handleConfirm}
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-8 py-2 rounded-md w-32"
          >
            {confirmText}
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-2 rounded-md w-32"
          >
            {cancelText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
