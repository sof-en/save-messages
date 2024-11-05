import { Modal } from "antd";
import { FC } from "react";
interface Props {
  children: React.ReactNode;
  open: boolean;
  onCancel: () => void;
}
export const SharedModal: FC<Props> = ({ children, open, onCancel }) => {
  return (
    <Modal
      title="Заполните поле"
      footer={false}
      open={open}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};
