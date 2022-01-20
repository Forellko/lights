import { useSelector, useDispatch } from 'react-redux';
import {
  setGreen,
  setYellow,
  setRed,
  selectColor,
  decrementTimer,
  selectTimer,
} from '../features/slices/slice';
import '../App.css';
import { useEffect } from 'react';

export default function Green() {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);
  const timer = useSelector(selectTimer);
  window.history.pushState('', '', color);

  const styles = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
    timer: 'timer',
    save_button: 'save_button',
    clear_button: 'clear_button',
    save_text: 'save_text',
    clear_text: 'clear_text',
  };
  styles[color] += ' active';
  if (color === 'green' && (timer === 3 || timer === 1)) {
    styles[color] = 'green';
  }

  const actions = {
    green: setYellow,
    yellow: setRed,
    red: setGreen,
  };

  const timersShows = {
    green: '',
    yellow: '',
    red: '',
  };
  timersShows[color] = timer;

  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        dispatch(decrementTimer());
      }, 1000);
    } else {
      dispatch(actions[color]());
    }
  });

  return (
    <div className="App">
      <div className={styles.red}>
        <p className={styles.timer}>{timersShows['red']}</p>
      </div>
      <div className={styles.yellow}>
        <p className={styles.timer}>{timersShows['yellow']}</p>
      </div>
      <div className={styles.green}>
        <p className={styles.timer}>{timersShows['green']}</p>
      </div>

      <div
        className={styles.save_button}
        onClick={(e) => {
          window.localStorage.setItem('color', color);
          window.localStorage.setItem('timer', timer);
        }}
      >
        <p className={styles.save_text}>SAVE</p>
      </div>

      <div
        className={styles.clear_button}
        onClick={(e) => {
          window.localStorage.setItem('color', '');
          window.localStorage.setItem('timer', '');
        }}
      >
        <p className={styles.clear_text}>CLEAR</p>
      </div>
    </div>
  );
}
