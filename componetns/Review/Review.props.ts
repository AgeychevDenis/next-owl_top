import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";
import { ReviewModel } from "../../interfaces/product.interfaces";

export interface ReviewProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   review: ReviewModel;
}