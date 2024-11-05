import { FC } from "react";
import { Collapse } from "antd";
import c from "./style.module.css";

interface Props {
  authorName: string;
  title: string;
  btnComponent: React.ReactNode;
  deleteBtnComponent: React.ReactNode;
}

export const MessageCart: FC<Props> = ({
  authorName,
  title,
  btnComponent,
  deleteBtnComponent,
}) => {
  const items = [
    {
      key: "1",
      label:<h2>{authorName}</h2>,
      children: (
        <div className={c.content}>
          <div className={c.head}>
            <div className={c.features}>
              {btnComponent}
              {deleteBtnComponent}
            </div>
          </div>
          <div>
            <code>{title}</code>
          </div>
        </div>
      ),
    },
  ];

  return <Collapse items={items} className={c.content} />;
};
