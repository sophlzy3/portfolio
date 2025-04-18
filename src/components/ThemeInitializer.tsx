'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  // 添加主题切换过渡动画
  useEffect(() => {
    document.documentElement.classList.add('transition-colors');
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    return () => {
      document.documentElement.classList.remove('transition-colors');
      document.documentElement.style.transition = '';
    };
  }, []);

  return null;
}
