import { MainProps } from "./Main.props";
import styles from './Main.module.css';
import PropmoImg from '../../public/promo.png';
import Image from 'next/image';


export const Main = ({ className, ...props }: MainProps): JSX.Element => {
   return (
      <div className={styles.wrapper} {...props}>
         <h1 className={styles.title}>Лучшие курсы онлайн</h1>
         <p className={styles.subTitle}>Подборки лучших курсов и рейтинги, основанные на реальных отзывах.</p>
         <Image placeholder="blur" quality={100} className={styles.img} src={PropmoImg} alt="PropmoImg" />
      </div>
   );
};