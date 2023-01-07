import React, { useState } from 'react';

function App() {
  
  const [summarizedText, setData] = useState([]);
  const [text, setText] = useState([]);

  function submit(e) {
    e.preventDefault();
    const textToSend = text;

    if (textToSend === '') {
      alert('Please add some text');
      return; 
    }
    summarizeTextRequest(textToSend);
  }

  async function summarizeTextRequest(textToSend) {
    try {
      const response = await fetch('/api/summarizeText', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          data: textToSend
        })
      });

      const res = await response.json();
      console.log("data: " + res.data);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }

  function handleText(e) {
    const newText = e.target.value;
    setText(newText);
  }

  return (
    <div>
      <form>
        <input onChange={(e) => handleText(e)} id="text" value={text} placeholder="enter texts to summarize" type="text"></input>
        <button onClick={(e) => submit(e)}>Submit</button>
      </form>
      <div>
        <p>summary: {summarizedText.data}</p>
      </div>
    </div>
  );
}

export default App;
