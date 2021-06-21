import { useEffect, useState } from 'react';

export function useTest() {
  const [testing, testingSet] = useState('hey');

  useEffect(() => {
    if (testing) {
      console.log('testing state inside hook', testing);
    }
  }, [testing]);

  return { testing };
}
