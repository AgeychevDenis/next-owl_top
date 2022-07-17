import { HtmlHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: ReactNode;
   size?: 'sizeS' | 'sizeM';
   color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
   href?: string;
}