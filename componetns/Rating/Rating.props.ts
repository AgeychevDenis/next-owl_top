import { HtmlHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: boolean;
   rating: number;
   setRating?: (reting: number) => void;
}