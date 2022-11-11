import {useState} from 'react';

interface CounterProps
{
  counterStart: number
}
export const Counter = (props: CounterProps): JSX.Element =>
{
 
  const {counterStart} = props;
  
  const [counter, setCounter] = useState(counterStart);

  return(
    <>
      <p>{counter}</p>
      <button
      onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
      onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </>
  )
}