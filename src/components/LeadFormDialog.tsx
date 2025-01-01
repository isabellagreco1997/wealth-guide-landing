import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from './LeadForm';

interface LeadFormDialogProps {
  children: React.ReactNode;
}

export const LeadFormDialog = ({ children }: LeadFormDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
};