'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // 获取所有导航链接
    const links = document.querySelectorAll('a[href^="#"]');
    
    // 为每个链接添加点击事件监听器
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 获取目标元素
        const targetId = link.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // 平滑滚动到目标元素
        window.scrollTo({
          top: targetElement.offsetTop - 64, // 减去导航栏高度
          behavior: 'smooth'
        });
        
        // 如果是移动菜单中的链接，关闭菜单
        const mobileMenu = document.querySelector('.md\\:hidden');
        if (mobileMenu && window.innerWidth < 768) {
          mobileMenu.classList.add('hidden');
        }
      });
    });
    
    // 清理函数
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return null;
}
