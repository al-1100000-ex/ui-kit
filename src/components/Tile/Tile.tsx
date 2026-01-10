import React, { ComponentType, PropsWithChildren } from "react";

type Props = {
  content?: string | React.ReactNode;
  header?: string | React.ReactNode;
  width?: number;
  height?: number;
  link?: string;
  image?: string;
  linkComponent?: ComponentType<any>;
}

const Tile = ({
                content,
                header,
                width = 300,
                height = 200,
                link,
                image,
                linkComponent: LinkComponent,
              }: Props) => {

  const Wrapper = link
    ? (LinkComponent ?? "a")
    : React.Fragment;

  const wrapperProps = link
    ? (LinkComponent ? { to: link } : { href: link })
    : {};

  return (
    <Wrapper {...wrapperProps}>
      <div
        className={`ui-tile ${link ? 'ui-tile--link' : ''}`}
        style={{ width, height, backgroundImage: `url(${image})` }}
      >
        {header && <div className="ui-tile__header">{header}</div>}
        {content && <div className="ui-tile__content">{content}</div>}
      </div>
    </Wrapper>
  );
};

export default Tile;
