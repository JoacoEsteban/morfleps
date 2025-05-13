"use client";

import {
  forwardRef,
  PropsWithChildren,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Three } from "@/helpers/components/Three";
import { Color } from "three";

export const Common = ({ color }: { color?: Color }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

const View = forwardRef(
  (
    {
      children,
      orbit,
      ...props
    }: PropsWithChildren<{ orbit?: boolean; className: string }>,
    ref,
  ) => {
    const localRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef as any} {...props} />
        <Three>
          <ViewImpl track={localRef as any}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    );
  },
);
View.displayName = "View";

export { View };
