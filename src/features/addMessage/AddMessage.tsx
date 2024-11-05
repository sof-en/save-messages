import { AiFillPlusCircle } from "react-icons/ai";
import { FC, useState } from "react";
import c from "./style.module.css";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ModalOpenLayout, useCreateMessagesMutation } from "../../shared";
export const AddMessage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [createMessage] = useCreateMessagesMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    const data = {
      authorName: input,
      title: textarea,
    };
    try {
      await createMessage(data).unwrap();
      onCancel();
      setInput("");
      setTextarea("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalOpenLayout
      showModal={showModal}
      onCancel={onCancel}
      isModalOpen={isModalOpen}
      btnComponent={<AiFillPlusCircle />}
      handleSubmit={handleSubmit}
      children={
        <>
          <Input
            placeholder="Введите имя"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <TextArea
            placeholder="Введите текст которое хотите сохранить"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            required
          />
          <Button htmlType="submit" type="primary">
            СОЗДАТЬ
          </Button>
        </>
      }
    />
  );
};
