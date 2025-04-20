"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function EditTagDialog({
  open,
  onOpenChange,
  title = "تغییر برچسب",
  message = "برای تغییر برچسب، نام آن را به برچسبی جدید تغییر دهید:",
  confirmText = "ثبت",
  onConfirm,
}: DeleteDialogProps) {
  //region hooks
  const [tagName, setTagName] = useState("");
  //endregion
  //region functions

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };
  //endregion
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className="p-0 overflow-hidden border shadow-lg bg-white h-[300px] max-w-md w-full"
        dir="rtl"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl text-secondary">{title}</h2>
        </div>
        <div className="flex p-6 text-center">
          <p className="text-text1 text-[15px]">{message}</p>
        </div>
        <input
          id="newTag"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          className="w-2/3 border-b pl-10 pr-8 py-1 bg-transparent placeholder-text2 text-sm outline-none text-right mb-8"
          placeholder="برچسب جدید"
        />
        <div className="flex gap-3 p-4 pt-0 justify-end">
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
