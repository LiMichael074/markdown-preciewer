import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutPutArea = styled.div`
  width: 50%;
`;

interface MarkdownoutputProps {
  markdown: string;
}

const Markdownoutput = ({ markdown }: MarkdownoutputProps) => {
  return (
    <OutPutArea>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutPutArea>
  );
};

export default Markdownoutput;
