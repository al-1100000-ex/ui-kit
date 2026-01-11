import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Row = ({children}: Props) => {
  return (
    <div className="ui-row">{children}</div>
  )
}