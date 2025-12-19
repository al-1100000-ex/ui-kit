import { BaseViewType } from "../../types/types";
import React from "react";

export const View = ({children, className, width}: BaseViewType) => {
  return (
    <div className={`ui-view--view ${className}`} style={{width}}>
      {children}
    </div>
  )
}