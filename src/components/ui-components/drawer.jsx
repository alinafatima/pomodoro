import React from "react";
import { DrawerContentWrapper, DrawerOuterWrapper } from "./select/styled";

export const Drawer = ({ children, isOpen }) => {

  return (
    <DrawerOuterWrapper open={isOpen}>
      <DrawerContentWrapper>
        {children}
      </DrawerContentWrapper>
    </DrawerOuterWrapper>
  );
};
