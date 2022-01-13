import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Red() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/green');
  }, 2000);

  return (
    <div className="App">
      <div className={'green'}></div>
      <div className={'yellow'}></div>
      <div className={'red active'}></div>
    </div>
  );
}
