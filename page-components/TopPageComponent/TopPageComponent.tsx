import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { Advantages, Htag, Product, Sort, Tag } from "../../componetns";
import { HhData } from "../../componetns/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interfaces";
import { SortEnum } from "../../componetns/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { useReducedMotion } from "framer-motion";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
   const [{ products: sortProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
   const shouldReduceMotion = useReducedMotion();
  

   const setSort = (sort: SortEnum) => {
      dispathSort({ type: sort });
   };

   useEffect(() => {
      dispathSort({ type: 'reset', initialState: products });
   }, [products]);

   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            {products && <Tag color='grey' size="sizeM" aria-label={products.length + 'элементов'}>{products.length}</Tag>}
            <Sort sort={sort} setSort={setSort} />
         </div>
         <div role="list">
            {sortProducts.length ? 
            sortProducts.map(p => (<Product role="listitem" layout={shouldReduceMotion ? false : true} key={p._id} product={p} />))
            : <p className={styles.notCourses}>К сожалению, по данному направлению в данный момент нет курсов</p>
         }
         </div>
         <div className={styles.hhTitle}>
            <Htag tag='h2'>Вакансии - {page.category}</Htag>
            <Tag color='red' size="sizeM">hh.ru</Tag>
         </div>
         {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
         {page.advantages && page.advantages.length > 0 && <>
            <Htag tag='h2'>Преимущества</Htag>
            <Advantages advantages={page.advantages} />
         </>
         }
         {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
         <Htag tag='h2'>Получаемые навыки</Htag>
         {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
      </div>
   )
}