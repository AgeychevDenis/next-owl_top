import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interfaces';
import { TopLevelCategory } from '../../interfaces/page.interfaces';

import CoursesIcon from './Icons/Hat.svg';
import BooksIcon from './Icons/Book.svg';
import ProductsIcon from './Icons/Box.svg';
import SevircesIcon from './Icons/Cloud.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
   { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
   { route: 'sevirces', name: 'Сервисы', icon: <SevircesIcon />, id: TopLevelCategory.Services },
   { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
   { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span >{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};