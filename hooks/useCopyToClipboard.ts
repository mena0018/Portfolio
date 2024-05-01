'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { Config } from '@/config';

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text = Config.email) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Error copying to clipboard');
    }
  };

  return { isCopied, copyToClipboard };
}
