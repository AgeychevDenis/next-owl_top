import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interfaces";
import { TopLevelCategory } from "../interfaces/page.interfaces";

export interface IAppContext {
   menu: MenuItem[];
   firstCategory: TopLevelCategory;
   setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppConext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
   const [menuState, setMenuState] = useState<MenuItem[]>(menu);

   const setMenu = (newMenu: MenuItem[]) => {
      setMenuState(newMenu);
   }

   return <AppConext.Provider value={{menu: menuState, firstCategory, setMenu}}>
      {children}
   </AppConext.Provider>;
}