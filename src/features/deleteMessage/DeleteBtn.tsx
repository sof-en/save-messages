import { BsFillTrashFill } from "react-icons/bs";
import { FC } from "react";
import { useDeleteMessageMutation } from "../../shared";
import { Button, message } from "antd";

export const DeleteBtn: FC<{ id: number | string | null }> = ({ id }) => {
  const [deleteMessage] = useDeleteMessageMutation();
  const [infoMessage, setMessage] = message.useMessage();
  const handleDelete = async () => {
    try {
      if (id != 1) {
        await deleteMessage(id).unwrap();
      } else {
        infoMessage.error("Вы не можете удалить эту сообщении");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {setMessage}
      <Button   onClick={handleDelete}>
        <BsFillTrashFill />
      </Button>
    </>
  );
};
