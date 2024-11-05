import { FC } from "react";
import c from "./style.module.css";

interface Props {
  authorName: string;
  title: string; // Ожидается, что title содержит текст статьи
  btnComponent: React.ReactNode
}

export const MessageCart: FC<Props> = ({ authorName, title, btnComponent }) => {
  return (
    <div className={c.content}>
      <div className={c.head}>
      <h2>{authorName}</h2>
      {btnComponent}
      </div>
      <>
        <code>{title}</code>
      </>

    </div>
  );
};
