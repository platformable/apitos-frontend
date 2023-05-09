import { useState, useEffect } from 'react';

export default function useFixedContainer(ref) {
  const [chatWidth, setChatWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  useEffect(() => {
    const chatEl = ref.current.getBoundingClientRect();
    setChatWidth(chatEl.width);
    setSidebarTop(chatEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const chatEl = ref.current;
    const scrollTop = window.scrollY;
    if (chatEl && (scrollTop >= sidebarTop - 10)) {
      chatEl.classList.add('fixed-cont');
    } else {
      chatEl && chatEl.classList.remove('fixed-cont');
    }
  };

  return chatWidth;
}