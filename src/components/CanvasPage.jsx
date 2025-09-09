import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Kitchen } from "./Kitchen";

const CanvasPage = () => {
  const controlsRef = useRef();

  return (
    <Canvas
      camera={{ position: [-10, 9, 75], fov: 30 }} // moved left on X axis
      style={{ height: "100vh" }}
    >
      <Environment preset="city" />
      <Kitchen />

    <CameraControls
  ref={controlsRef}
  // zoom limits
  minDistance={4}
  maxDistance={75}
  // vertical rotation (polar)
minPolarAngle={Math.PI / 2.4} // horizon (90°)
  maxPolarAngle={Math.PI / 2.1} // horizon (90°)
  // horizontal rotation (azimuth) ~20° total
  minAzimuthAngle={-Math.PI / 6} // -10°
  maxAzimuthAngle={Math.PI / 6}  // +10°
  // disable panning if needed
  // enablePan={false}
/>

    </Canvas>
  );
};

export default CanvasPage;
