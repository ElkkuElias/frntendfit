import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchExercise = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${id}`,
      params: { limit: '10' },
      headers: {
        'X-RapidAPI-Key': '365d4c78a6mshb447b99f5591a9ep124736jsn19ae0b6b550e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    setLoading(true);

    axios.request(options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { data, error, loading };
};