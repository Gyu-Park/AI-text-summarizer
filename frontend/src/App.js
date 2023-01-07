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
    <div style={{"text-align": "center", "margin-top": "10vh"}}>
      <form style={{"display": "grid", "justify-items": "center"}}>
        <textarea onChange={(e) => handleText(e)} id="text" value={text} placeholder="enter texts to summarize" type="textarea" 
          style={{"width": "40vw", "height": "30vh"}}></textarea>
        <button onClick={(e) => submit(e)} style={{"width": "5vw", "height": "2vh", "margin-top": "1rem"}}>Submit</button>
      </form>
      <div style={{"margin": "1rem 30vw", "display": "grid", "justify-items": "center", "border": "2px solid", "border-color": "black", "padding": "30px"}}>
        <h3>summary</h3>
        <p style={{"width": "30vw", "height": "30vh"}}>{summarizedText.data}</p>
      </div>
    </div>
  );
}

export default App;
