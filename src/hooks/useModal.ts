import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleAutoCloseMenu = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleAutoCloseMenu);
    } else {
      document.removeEventListener("click", handleAutoCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleAutoCloseMenu);
    };
  }, [isOpen]);

  return { isOpen, onToggleModal, containerRef };
};
