import { FC, useEffect, useState } from "react";
import {
  AppDispatch,
  loginActions,
  ModalOpenLayout,
  RootState,
} from "../../shared";
import { Button, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

export const Login: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [m, contextHolder] = message.useMessage();
  const loginState = useSelector((state: RootState) => state.loginState);
  const dispatch: AppDispatch = useDispatch();
  
  // Состояние для отслеживания попыток входа
  const [attemptedLogin, setAttemptedLogin] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    // Сбрасываем поля логина и пароля при закрытии модального окна
    setLogin("");
    setPassword("");
    setAttemptedLogin(false); // Сбрасываем состояние попытки входа
  };

  const handleLogin = () => {
    const data = {
      login,
      password,
    };
    dispatch(loginActions.validateLogin(data));
    setAttemptedLogin(true); // Устанавливаем состояние попытки входа
  };

  useEffect(() => {
    if (attemptedLogin) { // Проверяем, была ли попытка входа
      if (loginState.succsess) {
        m.success("успешно");
        onCancel(); // Закрыть модальное окно при успешном входе
      } else if (!loginState.succsess) {
        m.error("доступ запрещен");
        onCancel()
      }
    }
  }, [loginState.succsess, attemptedLogin, m]); // Добавляем состояние попытки входа в зависимости

  return (
    <>
      {contextHolder}
      <ModalOpenLayout
        showModal={showModal}
        onCancel={onCancel}
        isModalOpen={isModalOpen}
        btnComponent={"логин"}
        children={
          <>
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="логин"
              required
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="пароль"
              required
              type="password" // Сделаем ввод пароля скрытым
            />
            <Button type="primary" onClick={handleLogin}>
              логин
            </Button>
          </>
        }
        handleSubmit={handleLogin}
      />
    </>
  );
};
