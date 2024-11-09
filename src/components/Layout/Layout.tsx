import { FC } from "react";
import c from "./style.module.css";
import { AddMessage, CopyButton, DeleteBtn, Login } from "../../features";
import { MessageCart, RootState, useGetMessagesQuery } from "../../shared";
import { Spin } from "antd";
import { useSelector } from "react-redux";
const Layout: FC = () => {
  const { data, isLoading } = useGetMessagesQuery();
  const loginState = useSelector((state: RootState) => state.loginState);
  console.log(loginState.succsess);
  return (
    <Spin spinning={isLoading}>
      <div className={c.content}>
        <div className={c.head}>
          <h1>save and use</h1>
          <div className={c.head__left}>
            {loginState.succsess ? <AddMessage /> : <Login />}
          </div>
        </div>
        <div className={c.messages}>
          {loginState.succsess ? (
            <>
              {data?.map((item) => (
                <MessageCart
                  btnComponent={<CopyButton textToCopy={item.title} />}
                  deleteBtnComponent={<DeleteBtn id={item.id} />}
                  key={item.id}
                  {...item}
                />
              ))}
            </>
          ) : (
            <h2>пусто :)</h2>
          )}
        </div>
      </div>
    </Spin>
  );
};

export default Layout;
