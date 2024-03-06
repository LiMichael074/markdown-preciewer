import styled from "styled-components";

const Inputarea = styled.textarea`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 50%;
  height: 500px;
`;

interface MarkdowninputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Markdowninput = ({ value, onChange }: MarkdowninputProps) => {
  return (
    <>
      <Inputarea value={value} onChange={onChange}></Inputarea>
    </>
  );
};

export default Markdowninput;
