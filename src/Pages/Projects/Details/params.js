import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  const { mk } = useParams();
  // use username to fetch user data from an API, etc.

  const [data, setData] = useState()

//   useEffect(() => {
//     fetch(`http://localhost:5000/projects/${mk}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }, [])

console.log(data)
  return mk;
};
