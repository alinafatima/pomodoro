import React, {useState} from 'react';
import { DrawerContentWrapper, DrawerOuterWrapper } from './styled';

const Drawer = ({children})=> 
{
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () =>{
        console.log(isOpen);
        setIsOpen(isOpen => !isOpen);
    }
 
    return (
      <DrawerOuterWrapper open={isOpen} onClick={toggleDrawer}>
        <DrawerContentWrapper onClick={toggleDrawer}>
          {children}
        </DrawerContentWrapper>
      </DrawerOuterWrapper>
    );
}

export default Drawer;
