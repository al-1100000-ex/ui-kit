import { text } from "node:stream/consumers";
import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
}

export const IconText = ({icon, text}: Props) => {
  return (
    <span className="ui-icon-text">{icon} {text}</span>
  )
}