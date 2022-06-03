import React from "react";

import "./Modal.css";

const Modal = ({ modal,input,setInput,hideModal }) => {

  const handleInput=(e)=>{
let name = e.target.name;
let value = e.target.value;

setInput({...input,[name]:value})
  }

const handleSave=(e)=>{
e.preventDefault();
hideModal();
}

let oldValue = input;

const handleCancel=(e)=>{
  e.preventDefault();
  setInput(oldValue);
  hideModal();
}

const toggleClass = modal ? "modal display-block" : "modal display-none";


  return (
    <div className={toggleClass}>
      <section className="modal-main">
        <div className="modal-header">
          <h2>Update Scores</h2>
          <img src="./images/image 4.png" alt="logo"></img>
        </div>

        <form className="form">
          <label>
            <div>
              <span>1</span> Update your <strong>rank</strong>
            </div>
            <input type="text" name="rank" value={input.rank} onChange={handleInput}></input>
          </label>
          <label>
            <div>
              <span>2</span> Update your <strong>percentile</strong>
            </div>
            <input type="text" name="percentile" value={input.percentile} onChange={handleInput}></input>
          </label>
          <label>
            <div>
              <span>3</span> Update your
              <strong>current score(out of 15)</strong>
            </div>
            <input type="text" name="score" value={input.score} onChange={handleInput}></input>
          </label>
        </form>
        <div className="buttons">
          <button  className="button-one" onClick={handleCancel}>
            Cancel
          </button>
          <button className="button-two" onClick={handleSave}>Save -&gt;</button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
