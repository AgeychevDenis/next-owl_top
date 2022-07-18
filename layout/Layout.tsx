import { LayoutProps } from "./Layout.props";
import styles from './Ptag.module.css';
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
   return (
      <>
         <Header />
         <main>
            <Sidebar />
            <div>
               {children}
            </div>
         </main>
         <Footer />
      </>
   )
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <Layout>
            <Component {...props} />
         </Layout>
      )
   }
}