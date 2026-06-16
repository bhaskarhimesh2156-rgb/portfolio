import { useState, useEffect } from 'react';

export function useAge(dob) {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calc = () => {
      const birth = new Date(dob);
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) {
        months--;
        const prev = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prev.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      setAge({ years, months, days });
    };
    calc();
    const t = setInterval(calc, 60000);
    return () => clearInterval(t);
  }, [dob]);

  return age;
}
