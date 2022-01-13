import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Yellow() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/red');
  }, 2000);

  return (
    <div className="App">
      <div className={'green'}></div>
      <div className={'yellow active'}></div>
      <div className={'red'}></div>
    </div>
  );
}
