import "./App.css";
import Header from "./Componant/Header";
import { ChangeEvent, useState } from "react";
import Markdowninput from "./Componant/Markdowninput";
import Markdownoutput from "./Componant/Markdownoutput";
import MarkdownCheatSheet from "./Componant/MarkdownCheatSheet";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  const [value, setValue] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
      <Container>
        <Markdowninput value={value} onChange={onChangeHandler} />
        <Markdownoutput markdown={value} />
      </Container>
    </>
  );
}

export default App;
