import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
   return (
      <>
         {products.length}
      </>
   )
}