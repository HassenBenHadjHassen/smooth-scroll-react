import React, { useEffect, useState } from "react";

interface SmoothScrollProps {
  targetRef: React.RefObject<HTMLDivElement>;
  pageHeight?: number;
  scrollSpeed?: number;
  easing?: string;
  loop?: boolean;
  direction?: "vertical" | "horizontal";
  onSectionEnter?: (index: number) => void;
  onSectionLeave?: (index: number) => void;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  targetRef,
  pageHeight = 100,
  scrollSpeed = 1,
  easing = "linear",
  loop = false,
  direction = "vertical",
  onSectionEnter,
  onSectionLeave,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = (event: WheelEvent) => {
    if (scrolling || !targetRef.current) return;

    const delta = direction === "vertical" ? event.deltaY : event.deltaX;
    const nextIndex = delta > 0 ? activeIndex + 1 : activeIndex - 1;

    if (nextIndex >= 0 && nextIndex < targetRef.current!.children.length) {
      scrollToSection(nextIndex);
    } else if (loop) {
      const newIndex =
        nextIndex < 0 ? targetRef.current!.children.length - 1 : 0;
      scrollToSection(newIndex);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (scrolling || !targetRef.current) return;

    let nextIndex = activeIndex;
    if (direction === "vertical") {
      if (event.key === "ArrowUp") nextIndex = activeIndex - 1;
      if (event.key === "ArrowDown") nextIndex = activeIndex + 1;
    } else {
      if (event.key === "ArrowLeft") nextIndex = activeIndex - 1;
      if (event.key === "ArrowRight") nextIndex = activeIndex + 1;
    }

    if (nextIndex >= 0 && nextIndex < targetRef.current!.children.length) {
      scrollToSection(nextIndex);
    } else if (loop) {
      const newIndex =
        nextIndex < 0 ? targetRef.current!.children.length - 1 : 0;
      scrollToSection(newIndex);
    }
  };

  const scrollToSection = (index: number) => {
    if (!targetRef.current) return;

    const newPosition =
      direction === "vertical"
        ? `translateY(${-index * pageHeight}vh)`
        : `translateX(${-index * pageHeight}vw)`;

    if (onSectionLeave && activeIndex !== index) {
      onSectionLeave(activeIndex);
    }

    targetRef.current.style.transform = newPosition;
    targetRef.current.style.transition = `transform ${scrollSpeed}s ${easing}`;

    setScrolling(true);
    setActiveIndex(index);

    setTimeout(() => {
      if (onSectionEnter) onSectionEnter(index);
      setScrolling(false);
    }, scrollSpeed * 1000);
  };

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.addEventListener("wheel", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (target) {
        target.removeEventListener("wheel", handleScroll);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, scrolling, targetRef]);

  return null;
};

export default SmoothScroll;
