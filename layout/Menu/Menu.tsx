import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns'
import { AppConext } from '../../context/app.context';
import { useContext } from 'react';

export const Menu = (): JSX.Element => {
   const {menu, setMenu, firstCategory} = useContext(AppConext)

   return (
      <div>
         <ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
      </div>
   )
}