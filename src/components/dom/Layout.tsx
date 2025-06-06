"use client";

import { PropsWithChildren, useRef } from "react";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: " 100%",
        height: "100%",
        touchAction: "auto",
      }}
    >
      {children}
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { Layout };
