import CoursesIcon from './Icons/Hat.svg';
import BooksIcon from './Icons/Book.svg';
import ProductsIcon from './Icons/Box.svg';
import SevircesIcon from './Icons/Cloud.svg';
import { TopLevelCategory } from '../interfaces/page.interfaces';
import { FirstLevelMenuItem } from '../interfaces/menu.interfaces';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'sevirces', name: 'Сервисы', icon: <SevircesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]