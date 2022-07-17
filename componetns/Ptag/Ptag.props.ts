import { HtmlHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   children: ReactNode;
   size?: 'sizeS' | 'sizeM' | 'sizeL';
}