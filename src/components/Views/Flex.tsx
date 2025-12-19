import { BaseViewType } from "../../types/types";
import React from "react";

export const Flex = ({ children, className, width }: BaseViewType) => {
  return (
    <div className={`ui-view--flex ${className}`} style={{ width }}>
      {children}
    </div>
  )
}