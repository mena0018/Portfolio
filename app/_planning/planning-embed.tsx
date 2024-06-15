'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export const PlanningEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        theme: 'dark',
        layout: 'month_view',
        styles: {
          branding: {
            brandColor: '#D4E8F7',
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      calLink='mena0018/30min'
      config={{ layout: 'month_view' }}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
    />
  );
};
