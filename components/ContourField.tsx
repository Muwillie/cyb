"use client";

/**
 * Signature background element: slow-drifting topographic contour lines
 * layered with a nautical bearing line, referencing the "Apex" (summit /
 * elevation) and "Anchor" (chart / coastline) halves of the brand name.
 * Motion is intentionally subtle and disabled for reduced-motion users.
 */
export default function ContourField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="contour-drift absolute -left-1/4 top-0 h-full w-[150%] opacity-[0.35]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 600 C 150 560, 300 640, 450 580 S 750 500, 900 560 S 1100 620, 1200 560" stroke="#2B3B52" strokeWidth="1" />
        <path d="M0 640 C 150 600, 300 680, 450 620 S 750 540, 900 600 S 1100 660, 1200 600" stroke="#2B3B52" strokeWidth="1" />
        <path d="M0 680 C 150 640, 300 720, 450 660 S 750 580, 900 640 S 1100 700, 1200 640" stroke="#2B3B52" strokeWidth="1" />
        <path d="M0 200 C 200 140, 400 260, 600 180 S 900 120, 1200 200" stroke="#5FB8B0" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
        <path d="M0 260 C 200 200, 400 320, 600 240 S 900 180, 1200 260" stroke="#5FB8B0" strokeWidth="1" strokeDasharray="2 6" opacity="0.35" />
        <circle cx="600" cy="210" r="3" fill="#E8A33D" />
      </svg>
      <style jsx>{`
        .contour-drift {
          animation: drift 60s linear infinite;
        }
        @keyframes drift {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .contour-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}