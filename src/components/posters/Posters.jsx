import { useEffect, useState } from 'react';
import style from './Posters.module.css';
function Posters() {
  const posters = [
    'https://img.freepik.com/premium-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-116652.jpg?w=1380',
    'https://img.freepik.com/premium-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-117129.jpg?w=1380',
    'https://img.freepik.com/premium-photo/portrait-young-woman-against-blue-background_1048944-29361200.jpg?w=1380',
  ];
  const [num, setNum] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);

  //   console.log(timeLeft, num);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft + 1);
      setNum((num + 1) % posters.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className={style.poster}>
      <img src={posters[num]} alt='Poster' />
    </div>
  );
}

export default Posters;
