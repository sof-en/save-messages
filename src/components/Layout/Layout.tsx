import { FC } from "react";
import c from "./style.module.css";
import { AddMessage, CopyButton } from "../../features";
import { MessageCart, useGetMessagesQuery } from "../../shared";
import { Spin } from "antd";
const Layout: FC = () => {
  const { data, isLoading } = useGetMessagesQuery();

  return (
    <Spin spinning={isLoading}>
      <div className={c.content}>
        <div className={c.head}>
          <h1>Сохрани</h1>
          <AddMessage />
        </div>
        <div className={c.messages}>
          {data?.map((item) => (
            <MessageCart
              btnComponent={<CopyButton textToCopy={item.title} />}
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </Spin>
  );
};

export default Layout;
