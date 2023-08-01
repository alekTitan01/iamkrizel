import React from "react";
import { ToolTipContainer } from './styles';

const Tooltip = ({ text, children }) => {
  return <ToolTipContainer>
    <span className='tooltiptext'>{text}</span>
    {children}
  </ToolTipContainer>;
};

export default Tooltip;
