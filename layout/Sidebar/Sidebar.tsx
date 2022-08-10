import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../Header/logo.svg'
import { Search } from "../../componetns";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
   return (
      <div className={cn(className, styles.siteber)} {...props}>
         <Link href="/">
            <a>
               <Logo className={styles.logo} />
            </a>
         </Link>
         <Search />
         <Menu />
      </div>
   )
}