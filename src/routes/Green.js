import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Green() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/yellow');
  }, 3000);

  return (
    <div className="App">
      <div className={'green active'}></div>
      <div className={'yellow'}></div>
      <div className={'red'}></div>
    </div>
  );
}
