import { PtagProps } from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'sizeM', color = 'ghost',  children, className, ...props }: PtagProps): JSX.Element => {
   return (
      <p className={cn(styles.p, className, {
         [styles.sizeS]: size == 'sizeS',
         [styles.sizeM]: size == 'sizeM',
         [styles.sizeL]: size == 'sizeL',
      })}
      {...props}
      >
         {children}
      </p>
   )
}