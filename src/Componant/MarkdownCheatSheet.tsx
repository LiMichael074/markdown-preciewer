import styled from "styled-components";
import "./MarkdownCheatSheet.css";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #1e2941;
`;

const MarkdownCheatSheet = () => {
  return (
    <Container>
      <table className="table table-bordered">
        <tr>
          <td>
            <a>Heading</a>
          </td>
          <td>
            <code>
              # H1
              <br />
              ## H2
              <br />
              ### H3
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Bold</a>
          </td>
          <td>
            <code>**bold text**</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Italic</a>
          </td>
          <td>
            <code>*italicized text*</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Blockquote</a>
          </td>
          <td>
            <code>&gt; blockquote</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Ordered List</a>
          </td>
          <td>
            <code>
              1. First item
              <br />
              2. Second item
              <br />
              3. Third item
              <br />
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Unordered List</a>
          </td>
          <td>
            <code>
              - First item
              <br />
              - Second item
              <br />
              - Third item
              <br />
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Code</a>
          </td>
          <td>
            <code>`code`</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Horizontal Rule</a>
          </td>
          <td>
            <code>---</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Link</a>
          </td>
          <td>
            <code>[title](https://www.example.com)</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Image</a>
          </td>
          <td>
            <code>![alt text](image.jpg)</code>
          </td>
        </tr>
      </table>
      <table className="table table-bordered">
        <tr>
          <td>
            <a>Table</a>
          </td>
          <td>
            <code>
              | Syntax | Description |<br />
              | ----------- | ----------- |<br />
              | Header | Title |<br />| Paragraph | Text |
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Fenced Code Block</a>
          </td>
          <td>
            <code>
              ```
              <br />
              <br />
              &nbsp;&nbsp;"firstName": "John",
              <br />
              &nbsp;&nbsp;"lastName": "Smith",
              <br />
              &nbsp;&nbsp;"age": 25
              <br />
              <br />
              ```
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Footnote</a>
          </td>
          <td>
            <code>
              Here's a sentence with a footnote. [^1]
              <br />
              <br />
              [^1]: This is the footnote.
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Heading ID</a>
          </td>
          <td>
            <code>### My Great Heading #custom - id</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Definition List</a>
          </td>
          <td>
            <code>
              term
              <br />: definition
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Strikethrough</a>
          </td>
          <td>
            <code>~~The world is flat.~~</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Task List</a>
          </td>
          <td>
            <code>
              - [x] Write the press release
              <br />
              - [ ] Update the website
              <br />- [ ] Contact the media
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Emoji</a>
            <br />
            (see also <a>Copying and Pasting Emoji</a>)
          </td>
          <td>
            <code>That is so funny! :joy:</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Highlight</a>
          </td>
          <td>
            <code>I need to highlight these ==very important words==.</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Subscript</a>
          </td>
          <td>
            <code>H~2~O</code>
          </td>
        </tr>
        <tr>
          <td>
            <a>Superscript</a>
          </td>
          <td>
            <code>X^2^</code>
          </td>
        </tr>
      </table>
    </Container>
  );
};

export default MarkdownCheatSheet;
