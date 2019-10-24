import React from "react";
import { SectionLink } from "react-scroll-section";

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <li onClick={link.onClick} selected={link.isSelected}>
        {children}
      </li>
    )}
  </SectionLink>
);

export { MenuItem as Item };
