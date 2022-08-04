import { HtmlHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: boolean;
   rating: number;
   setRating?: (reting: number) => void;
   error?: FieldError;
}