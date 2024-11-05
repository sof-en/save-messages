import { FC } from "react";
import c from "./style.module.css";
import { Button, Modal } from "antd";
interface Props {
  showModal: () => void;
  onCancel: () => void;
  isModalOpen: boolean;
  btnComponent: React.ReactNode | string;
  children: React.ReactNode;
  handleSubmit: () => void;
}
export const ModalOpenLayout: FC<Props> = ({
  showModal,
  onCancel,
  isModalOpen,
  btnComponent,
  children,
  handleSubmit,
}) => {
  return (
    <div className={c.content}>
      <Button onClick={showModal} type="primary">
        {btnComponent}
      </Button>
      <Modal
        title={"создайте сообщение"}
        onCancel={onCancel}
        open={isModalOpen}
        footer={false}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={c.modal}
        >
          {children}
        </form>
      </Modal>
    </div>
  );
};
