'use client';

import { useEffect, useState } from 'react';

const MIN_WIDTH = '(min-width: 768px)';

export function useMediaQuery(query = MIN_WIDTH) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}
