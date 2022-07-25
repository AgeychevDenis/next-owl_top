import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Htag, Tag } from "../../componetns";
import { HhData } from "../../componetns/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interfaces";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            {products && <Tag color='grey' size="sizeM">{products.length}</Tag>}
            <span>Сортировка</span>
         </div>
         <div>
            {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
         </div>
         <div className={styles.hhTitle}>
            <Htag tag='h2'>Вакансии - {page.category}</Htag>
            <Tag color='red' size="sizeM">hh.ru</Tag>
         </div>
         {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
      </div>
   )
}