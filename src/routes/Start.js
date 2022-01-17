import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Green() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/lights/green');
  });

  return <></>;
}
