import { useEffect, useRef, useState } from "react";

/*
  Custom cursor: a small dot tracks the mouse exactly, a larger ring
  "chases" it with eased delay (lerp), and both grow when hovering
  anything clickable. Desktop-only — see the CSS note below for hiding
  the native cursor without breaking mobile/touch.
*/

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Skip entirely on touch devices — there's no cursor to replace.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    const EASE = 0.15; // lower = lazier trail, higher = tighter follow

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const handleOver = (e) => {
      setHovering(!!e.target.closest("a, button, input, textarea, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    let frame;
    const tick = () => {
      ring.x += (mouse.x - ring.x) * EASE;
      ring.y += (mouse.y - ring.y) * EASE;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#E3A857]"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[999] rounded-full border transition-[width,height,margin,border-color] duration-200 ease-out ${
          hovering
            ? "w-12 h-12 -ml-6 -mt-6 border-[#E3A857] bg-[#E3A857]/10"
            : "w-8 h-8 -ml-4 -mt-4 border-[#93A0B7]/50"
        }`}
      />
    </div>
  );
}

export default CustomCursor;
