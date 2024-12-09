import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextForm(props) {
  // State hook for the text
  const [text, setText] = useState('');

  // Convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // Convert text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  // Clear text
  const handleClearClick = () => {
    setText('');
    props.showAlert("Clear case!", "success");
  };

  // Alternate the case of each character
  const handleAlterClick = () => {
    let newText = text.split('').map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
    setText(newText);
    props.showAlert("Converted to Alternatecase!", "success");

  };

  // Handle changes in the textarea
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  // Word and character count
  const wordCount = text.split(" ").filter((word) => word.length > 0).length;
  const charCount = text.length;
  const readingTime = (wordCount * 0.008).toFixed(2); // Approximate time to read

  return (
    <>
      <div className='container' style={{ color: props.mode === 'black' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="3"
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
              borderColor: props.mode === 'dark' ? '#444' : '#ccc'
            }}
          ></textarea>
        </div>
        <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleAlterClick}>Convert to Alternate</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>
  {text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters
</p>


     
        <p>{wordCount} words and {charCount} characters</p>
        <p>{readingTime} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Perview"}</p>
      </div>
    </>
  );
}
