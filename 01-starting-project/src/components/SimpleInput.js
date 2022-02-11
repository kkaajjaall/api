import { useRef, useState} from 'react';
const SimpleInput = (props) => {

  const nameref=useRef();
  const [enteredName, setEnteredName] = useState(' ');
  const [valid, setValid] = useState(true);
  const [touch, setTouch] = useState(false);

  const nameChangeHandeler=(e)=>{
    setEnteredName(e.target.value)
  }
  const onSubmitHandeler=(e)=>{
  e.preventDefault();
  if(enteredName.trim().length === 0){
    setValid(false);
    return  ;
  }
  console.log(enteredName);
 const enterevalue=nameref.current.value;
 console.log(enterevalue);
 setEnteredName('');

  }
  const validation= valid ? 'form-control' : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandeler}>
      <div className={validation}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameref} onChange={nameChangeHandeler} type='text' value={enteredName} id='name' />
      </div>
     {!valid && <p className='error-text'> invalid input</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
     
    </form>
  );
};

export default SimpleInput;
