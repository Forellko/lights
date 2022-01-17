import { useSelector, useDispatch } from 'react-redux';
import {
  setGreen,
  setYellow,
  setRed,
  selectColor,
} from '../features/colors/colorSlice';
import '../App.css';
import { useEffect } from 'react';

export default function Green() {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);
  window.history.pushState('', '', color);

  const styles = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
  };
  styles[color] += ' active';

  const times = {
    green: 3000,
    yellow: 1000,
    red: 2000,
  };

  const actions = {
    green: setYellow,
    yellow: setRed,
    red: setGreen,
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions[color]());
    }, times[color]);
  });

  return (
    <div className="App">
      <div className={styles.red}></div>
      <div className={styles.yellow}></div>
      <div className={styles.green}></div>
    </div>
  );
}
