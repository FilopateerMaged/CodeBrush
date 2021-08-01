import "./App.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";
function App() {
  const [html, setHtml] = useState("")
  const getHtml = (value) => {
     setHtml(value);
     console.log(html);
  }
const [css,setCss] = useState("")
const getCss = (value) => {
  setCss(value);
}
const [js,setJs] = useState("")
const getJs = (value) => {
  setJs(value);
}
const docu = `<hmtl>${html}</html><style>${css}</style><script>${js}</script>`

  return (
    <div>
    <div className="container">
      <div className="HTML">
        <h1>HTML</h1>
        <Editor
          height="30vh"
          width="500px"
          defaultLanguage="html"
          defaultValue="//Write HTML here!"
          onChange={getHtml}
        />
      </div>
      <div className="CSS">
        <h1>CSS</h1>
        <Editor
          height="30vh"
          width="500px"
          defaultLanguage="css"
          defaultValue="// Write CSS here!"
          onChange={getCss}
        />
      </div>
      <div className="JavaScript">
        <h1>javascript</h1>
        <Editor
          height="30vh"
          width="500px"
          defaultLanguage="javascript"
          defaultValue="// Write Some JavaScript Here!"
          onChange={getJs}
          
        />
      </div>
    </div>
    <div>
      <h1>Output</h1>
    <iframe className="Output" srcDoc={docu} title="hello"/>
    </div>
    </div>
  );
}

export default App;
