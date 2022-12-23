import Image from 'next/image';
import { useEffect } from 'react';
import styles from './Drop_down.module.scss';





const Drop_down = () => {
  
  useEffect(() => {

}, []);
return (
  <div className={styles.dropdown_con}>
    <div className={styles.dropdown}>
      <label className={styles.reletive}>
        <h2 className={styles.h2}>エージェント選択</h2>
        <select className={styles.dropdown_item}>
          <option value='actual value 1'>ALL</option>
          <option value='actual value 2'>Display Text 2</option>
          <option value='actual value 3'>Display Text 3</option>
        </select>
      </label>

      <label className={styles.reletive}>
        <h2 className={styles.h2}>マップ選択</h2>
        <select className={styles.dropdown_item}>
          <option value='actual value 1'>ALL</option>
          <option value='actual value 2'>Display Text 2</option>
          <option value='actual value 3'>Display Text 3</option>
        </select>
      </label>
    </div>
  </div>
);}

export default Drop_down