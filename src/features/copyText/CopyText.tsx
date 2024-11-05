import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { FC, useState } from "react";
import { Button, message } from "antd";

interface CopyTextProps {
  textToCopy: string;
}

export const CopyButton: FC<CopyTextProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      message.success("Текст скопирован!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Ошибка при копировании текста:", err);
      message.error("Ошибка при копировании текста.");
    }
  };

  return (
    <>
      <Button style={{ fontSize: "12px" }} type="text" onClick={handleCopy}>
        {isCopied ? <AiOutlineCheck /> : <AiOutlineCopy />}
      </Button>
    </>
  );
};
