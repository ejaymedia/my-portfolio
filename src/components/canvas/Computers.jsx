import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const modelPath = isMobile
    ? "./desktop_pc/desktop_pc_mobile.glb"
    : "./desktop_pc/desktop_pc_high.glb";

  const { scene } = useGLTF(
    modelPath,
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.6 : 1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={1} />
      {scene && (
        <primitive
          object={scene}
          scale={isMobile ? 0.5 : 0.75}
          position={isMobile ? [0, -2.8, -1.8] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      )}
    </mesh>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <img
          src="./desktop_pc/desktop.png"
          alt="PC preview"
          className="w-[80%] h-auto object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;