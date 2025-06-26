"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onHighlightAdded?: () => void;
};

export function AddHighlightDialog({
  open,
  onOpenChange,
  onHighlightAdded,
}: Props) {
  const [books, setBooks] = useState<{ id: string; title: string }[]>([]);
  const [bookId, setBookId] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [addingNewBook, setAddingNewBook] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    const fetchBooks = async () => {
      const { data, error } = await supabase.from("books").select("id, title");
      if (error) {
        console.error("Failed to fetch books", error);
      } else {
        setBooks(data || []);
      }
    };

    fetchBooks();
  }, [open]);

  const handleSubmit = async () => {
    if ((!bookId && !newBookTitle.trim()) || !content.trim()) return;

    setLoading(true);
    let finalBookId = bookId;

    if (addingNewBook && newBookTitle.trim()) {
      // insert the new book first
      const { data, error: insertBookError } = await supabase
        .from("books")
        .insert({ title: newBookTitle.trim() })
        .select()
        .single();

      if (insertBookError) {
        console.error("Failed to add new book", insertBookError);
        setLoading(false);
        return;
      }

      finalBookId = data.id;
    }

    const { error: insertHighlightError } = await supabase
      .from("highlights")
      .insert({
        book_id: finalBookId,
        text: content.trim(),
      });

    setLoading(false);

    if (insertHighlightError) {
      console.error("Failed to insert highlight", insertHighlightError);
    } else {
      // Reset state
      setBookId("");
      setNewBookTitle("");
      setContent("");
      setAddingNewBook(false);
      onOpenChange(false);
      onHighlightAdded?.();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>افزودن هایلایت جدید</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <div className="space-y-2">
            <Label>کتاب</Label>
            {!addingNewBook ? (
              <>
                <Select value={bookId} onValueChange={setBookId}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="انتخاب کتاب" />
                  </SelectTrigger>
                  <SelectContent>
                    {books.map((book) => (
                      <SelectItem key={book.id} value={book.id}>
                        {book.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <button
                  className="text-sm text-blue-600 underline"
                  onClick={() => {
                    setAddingNewBook(true);
                    setBookId("");
                  }}
                >
                  کتاب جدید اضافه کن
                </button>
              </>
            ) : (
              <>
                <Input
                  placeholder="عنوان کتاب جدید"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                />
                <button
                  className="text-sm text-blue-600 underline"
                  onClick={() => {
                    setAddingNewBook(false);
                    setNewBookTitle("");
                  }}
                >
                  انتخاب از بین کتاب‌ها
                </button>
              </>
            )}
          </div>

          <div>
            <Label>متن هایلایت</Label>
            <Textarea
              rows={4}
              className="mt-1"
              placeholder="متن مورد نظر را بنویسید..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? "در حال ذخیره..." : "افزودن"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
