import {useState} from 'react';
import styles from './page.module.css'

export default function Click() {
  const [count, setCount] = useState(0);

  function handleClick() {

    setCount(count+1);
    alert(count);
  }
  return (
  <div className={styles.main}>
    {count}
    <button onClick={handleClick}>Click Me</button>
  </div>)
}