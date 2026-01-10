import React, { ComponentType } from "react";
type Props = {
    content?: string | React.ReactNode;
    header?: string | React.ReactNode;
    width?: number;
    height?: number;
    link?: string;
    image?: string;
    linkComponent?: ComponentType<any>;
};
declare const Tile: ({ content, header, width, height, link, image, linkComponent: LinkComponent, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tile;
