

import React, { useRef } from 'react'
import { useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { state } from "../store/State";

export function Kitchen(props) {
  const { nodes, materials } = useGLTF('/Kitchen.glb')
  const snap = useSnapshot(state);

  // preload textures
  const allTextures = useTexture({
    stone1: "/textures/stone1.png",
    stone2: "/textures/stone2.png",
    stone3: "/textures/stone3.png",
    stone4: "/textures/stone4.png",
    stone5: "/textures/stone5.png",
    stone6: "/textures/stone6.png",
    stone7: "/textures/stone7.png",
  });

  const getTexture = (tex) => {
    const map = {
      "/textures/stone1.png": allTextures.stone1,
      "/textures/stone2.png": allTextures.stone2,
      "/textures/stone3.png": allTextures.stone3,
      "/textures/stone4.png": allTextures.stone4,
      "/textures/stone5.png": allTextures.stone5,
      "/textures/stone6.png": allTextures.stone6,
      "/textures/stone7.png": allTextures.stone7,
    };
    return map[tex];
  };

  const c = snap.customizations.counterTop;
  return (
  <group {...props} dispose={null}position={[0,0.8,0]} rotation={[0,-1.5,0]} >
    <group>
{/* 
      <mesh
        name="default"
        castShadow
        receiveShadow
        geometry={nodes['default'].geometry}
        material={materials['Material.024']}
        position={[14.214, 0.57, 5.068]}
        scale={[-5.438, -0.359, -13.109]}
        />
      <mesh
        name="12_bevel"
        castShadow
        receiveShadow
        geometry={nodes['12_bevel'].geometry}
        material={materials['Material.025']}
        position={[14.248, 0.599, 4.955]}
        scale={[-5.438, -0.359, -13.109]}
      />
      <mesh
        name="14_bevel"
        castShadow
        receiveShadow
        geometry={nodes['14_bevel'].geometry}
        material={materials['Material.025']}
        position={[14.248, 0.599, 4.955]}
        scale={[-5.438, -0.359, -13.109]}
        />
      <mesh
        name="Full_Bullnose"
        castShadow
        receiveShadow
        geometry={nodes.Full_Bullnose.geometry}
        material={materials['Material.025']}
        position={[14.248, 0.599, 4.955]}
        scale={[-5.438, -0.359, -13.109]}
        />
      <mesh
        name="half_BullNose"
        castShadow
        receiveShadow
        geometry={nodes.half_BullNose.geometry}
        material={materials['Material.025']}
        position={[14.248, 0.599, 4.955]}
        scale={[-5.438, -0.359, -13.109]}
      /> */}
         {c.variants.map(
          (variant) =>
            c.activeMesh === variant && (
              <mesh
                key={variant}
                castShadow
                receiveShadow
                geometry={nodes[variant].geometry}
                position={[14.214, 0.57, 5.068]}
        scale={[-5.438, -0.359, -13.109]}
              >
                <meshStandardMaterial map={getTexture(c.texture)} />
              </mesh>
            )
        )}
        </group>
         <mesh
        name="countertop030"
        castShadow
        receiveShadow
        geometry={nodes.countertop030.geometry}
        material={materials['Material.004']}
        position={[6.751, 12.912, -31.049]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.209, -1.785]}
      >
         <meshStandardMaterial map={getTexture(c.texture)} />

      </mesh>


      <group name="Cube002" position={[14.15, 4.909, 84.113]} scale={[46.327, 14.361, 41.149]}>
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Floor}
        />
        <mesh
          name="Cube015_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials['wall.001']}
        />
        <mesh
          name="Cube015_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials['Material.005']}
        />
      </group>
      <mesh
        name="Plane001"
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, -23.528]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane002"
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.003']}
        position={[-24.335, -1.866, -23.528]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 1.877]}
      />
      <mesh
        name="Material2002"
        castShadow
        receiveShadow
        geometry={nodes.Material2002.geometry}
        material={materials.hardware}
        position={[-23.795, -5.687, -14.104]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        position={[-24.335, -4.846, -27.57]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.803, 4.015, 1.877]}
      />
      <mesh
        name="Plane003"
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.003']}
        position={[-24.335, -2.811, -15.341]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.739, 4.015, 2.187]}
      />
      <mesh
        name="Plane004"
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.003']}
        position={[-24.335, -6.572, -15.341]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="handel_1"
        castShadow
        receiveShadow
        geometry={nodes.handel_1.geometry}
        material={materials.hardware}
        position={[-23.795, -1.816, -14.104]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2003"
        castShadow
        receiveShadow
        geometry={nodes.Material2003.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, -22.519]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2004"
        castShadow
        receiveShadow
        geometry={nodes.Material2004.geometry}
        material={materials.hardware}
        position={[-23.795, -3.654, -26.55]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2005"
        castShadow
        receiveShadow
        geometry={nodes.Material2005.geometry}
        material={materials.hardware}
        position={[-23.907, -1.871, -22.695]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Plane005"
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, -19.75]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane006"
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials['Material.003']}
        position={[-24.335, -1.866, -19.75]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 1.877]}
      />
      <mesh
        name="Material2001"
        castShadow
        receiveShadow
        geometry={nodes.Material2001.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, -20.369]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2006"
        castShadow
        receiveShadow
        geometry={nodes.Material2006.geometry}
        material={materials.hardware}
        position={[-23.907, -1.871, -18.916]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['Material.003']}
        position={[5.417, -5.652, 38.606]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane008"
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Material.003']}
        position={[3.443, -1.866, 38.691]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[0.751, 4.339, 3.098]}
      />
      <mesh
        name="Material2007"
        castShadow
        receiveShadow
        geometry={nodes.Material2007.geometry}
        material={materials.hardware}
        position={[4.652, -4.082, 38.055]}
        rotation={[-Math.PI, 1.531, -Math.PI]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2008"
        castShadow
        receiveShadow
        geometry={nodes.Material2008.geometry}
        material={materials.hardware}
        position={[4.196, -1.871, 38.196]}
        rotation={[1.57, -0.013, -1.61]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane009"
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials['Material.003']}
        position={[1.426, -5.652, 38.777]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Material2009"
        castShadow
        receiveShadow
        geometry={nodes.Material2009.geometry}
        material={materials.hardware}
        position={[2.387, -4.082, 38.152]}
        rotation={[-Math.PI, 1.531, -Math.PI]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2010"
        castShadow
        receiveShadow
        geometry={nodes.Material2010.geometry}
        material={materials.hardware}
        position={[-23.795, -5.687, -9.46]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane010"
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Material.003']}
        position={[-24.335, -2.811, -10.697]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.081, 4.015, 2.187]}
      />
      <mesh
        name="Plane011"
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Material.003']}
        position={[-24.335, -6.572, -10.697]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="Plane012"
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials['Material.003']}
        position={[13.333, -5.652, -26.844]}
        rotation={[0, -1.549, -1.571]}
        scale={[2.825, 4.176, 1.737]}
      />
      <mesh
        name="Plane013"
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials['Material.003']}
        position={[15.308, -1.866, -26.888]}
        rotation={[0, -1.549, -1.571]}
        scale={[0.751, 4.176, 3.098]}
      />
      <mesh
        name="Material2011"
        castShadow
        receiveShadow
        geometry={nodes.Material2011.geometry}
        material={materials.hardware}
        position={[14.088, -4.082, -26.299]}
        rotation={[0, -1.549, 0]}
        scale={[-0.632, -0.372, -0.442]}
      />
      <mesh
        name="Material2012"
        castShadow
        receiveShadow
        geometry={nodes.Material2012.geometry}
        material={materials.hardware}
        position={[14.547, -1.871, -25.943]}
        rotation={[1.571, 0.013, 1.549]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane014"
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials['Material.003']}
        position={[17.327, -5.652, -26.47]}
        rotation={[0, -1.549, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Material2013"
        castShadow
        receiveShadow
        geometry={nodes.Material2013.geometry}
        material={materials.hardware}
        position={[16.355, -4.082, -26.35]}
        rotation={[0, -1.549, 0]}
        scale={[-0.632, -0.372, -0.442]}
      />
      <mesh
        name="Material2014"
        castShadow
        receiveShadow
        geometry={nodes.Material2014.geometry}
        material={materials.hardware}
        position={[-23.907, -2.792, -9.88]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Material2015"
        castShadow
        receiveShadow
        geometry={nodes.Material2015.geometry}
        material={materials.hardware}
        position={[7.945, -5.687, -26.11]}
        rotation={[0, -1.549, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Plane015"
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials['Material.003']}
        position={[9.078, -2.811, -26.72]}
        rotation={[0, -1.549, -1.571]}
        scale={[1.081, 4.339, 2.024]}
      />
      <mesh
        name="Plane016"
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials['Material.003']}
        position={[9.078, -6.572, -26.72]}
        rotation={[0, -1.549, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Material2016"
        castShadow
        receiveShadow
        geometry={nodes.Material2016.geometry}
        material={materials.hardware}
        position={[8.332, -2.792, -26.24]}
        rotation={[1.571, 0.013, 1.549]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane017"
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials['Material.003']}
        position={[-17.907, -2.811, 38.823]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[1.739, 4.339, 2.024]}
      />
      <mesh
        name="Plane018"
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials['Material.003']}
        position={[-17.907, -6.572, 38.823]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="handel_1001"
        castShadow
        receiveShadow
        geometry={nodes.handel_1001.geometry}
        material={materials.hardware}
        position={[-16.774, -1.816, 38.527]}
        rotation={[-Math.PI, 1.549, -Math.PI]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2017"
        castShadow
        receiveShadow
        geometry={nodes.Material2017.geometry}
        material={materials.hardware}
        position={[-16.94, -6.438, 38.652]}
        rotation={[1.571, -0.013, -1.592]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane019"
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials['Material.003']}
        position={[-12.849, -4.924, 38.705]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[3.776, 4.339, 2.422]}
      />
      <mesh
        name="Material2018"
        castShadow
        receiveShadow
        geometry={nodes.Material2018.geometry}
        material={materials.hardware}
        position={[-11.69, -5.068, 38.216]}
        rotation={[1.571, -0.013, -1.592]}
        scale={[-0.657, -0.395, -0.989]}
      />
      <mesh
        name="Plane022"
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, -2.073]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane023"
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials['Material.003']}
        position={[-24.335, -1.866, -4.208]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 3.348]}
      />
      <mesh
        name="Material2020"
        castShadow
        receiveShadow
        geometry={nodes.Material2020.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, -2.877]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2021"
        castShadow
        receiveShadow
        geometry={nodes.Material2021.geometry}
        material={materials.hardware}
        position={[-23.907, -1.871, -3.374]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Plane024"
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, -6.389]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Material2022"
        castShadow
        receiveShadow
        geometry={nodes.Material2022.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, -5.327]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2023"
        castShadow
        receiveShadow
        geometry={nodes.Material2023.geometry}
        material={materials.hardware}
        position={[-23.636, -5.687, 43.186]}
        rotation={[0, 0.052, 0]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane025"
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials['Material.003']}
        position={[-24.235, -2.811, 41.981]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.739, 4.016, 2.187]}
      />
      <mesh
        name="Plane026"
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials['Material.003']}
        position={[-24.235, -6.572, 41.981]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.903, 4.016, 2.187]}
      />
      <mesh
        name="handel_1003"
        castShadow
        receiveShadow
        geometry={nodes.handel_1003.geometry}
        material={materials.hardware}
        position={[-23.636, -1.816, 43.186]}
        rotation={[0, 0.052, 0]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane020"
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials['Material.003']}
        position={[1.279, -5.652, -26.749]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane021"
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials['Material.003']}
        position={[1.279, -1.866, -26.749]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 1.737]}
      />
      <mesh
        name="Material2019"
        castShadow
        receiveShadow
        geometry={nodes.Material2019.geometry}
        material={materials.hardware}
        position={[-7.44, -5.687, -26.141]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Plane027"
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials['Material.003']}
        position={[5.019, -4.846, -26.759]}
        rotation={[0, -1.568, -1.571]}
        scale={[3.803, 4.339, 1.737]}
      />
      <mesh
        name="Plane028"
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials['Material.003']}
        position={[-6.297, -2.811, -26.728]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.739, 4.339, 2.024]}
      />
      <mesh
        name="Plane029"
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials['Material.003']}
        position={[-6.297, -6.572, -26.728]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="handel_1002"
        castShadow
        receiveShadow
        geometry={nodes.handel_1002.geometry}
        material={materials.hardware}
        position={[-7.44, -1.816, -26.141]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2024"
        castShadow
        receiveShadow
        geometry={nodes.Material2024.geometry}
        material={materials.hardware}
        position={[0.347, -4.082, -26.163]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2025"
        castShadow
        receiveShadow
        geometry={nodes.Material2025.geometry}
        material={materials.hardware}
        position={[4.077, -3.654, -26.173]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2026"
        castShadow
        receiveShadow
        geometry={nodes.Material2026.geometry}
        material={materials.hardware}
        position={[0.509, -1.871, -26.284]}
        rotation={[1.571, 0.013, 1.568]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane030"
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials['Material.003']}
        position={[-2.217, -5.652, -26.739]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane031"
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials['Material.003']}
        position={[-2.217, -1.866, -26.739]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 1.737]}
      />
      <mesh
        name="Material2027"
        castShadow
        receiveShadow
        geometry={nodes.Material2027.geometry}
        material={materials.hardware}
        position={[-1.643, -4.082, -26.157]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2028"
        castShadow
        receiveShadow
        geometry={nodes.Material2028.geometry}
        material={materials.hardware}
        position={[-2.987, -1.871, -26.275]}
        rotation={[1.571, 0.013, 1.568]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Material2029"
        castShadow
        receiveShadow
        geometry={nodes.Material2029.geometry}
        material={materials.hardware}
        position={[-11.738, -5.687, -26.13]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Plane032"
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials['Material.003']}
        position={[-10.594, -2.811, -26.716]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.081, 4.339, 2.024]}
      />
      <mesh
        name="Plane033"
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials['Material.003']}
        position={[-10.594, -6.572, -26.716]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Material2030"
        castShadow
        receiveShadow
        geometry={nodes.Material2030.geometry}
        material={materials.hardware}
        position={[-11.349, -2.792, -26.252]}
        rotation={[1.571, 0.013, 1.568]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane034"
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials['Material.003']}
        position={[-18.575, -5.652, -26.695]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane035"
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials['Material.003']}
        position={[-16.599, -1.866, -26.7]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 3.098]}
      />
      <mesh
        name="Material2031"
        castShadow
        receiveShadow
        geometry={nodes.Material2031.geometry}
        material={materials.hardware}
        position={[-17.829, -4.082, -26.113]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2032"
        castShadow
        receiveShadow
        geometry={nodes.Material2032.geometry}
        material={materials.hardware}
        position={[-17.369, -1.871, -26.236]}
        rotation={[1.571, 0.013, 1.568]}
        scale={[-0.657, -0.33, -0.498]}
      />
      <mesh
        name="Plane036"
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials['Material.003']}
        position={[-14.58, -5.652, -26.705]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Material2033"
        castShadow
        receiveShadow
        geometry={nodes.Material2033.geometry}
        material={materials.hardware}
        position={[-15.562, -4.082, -26.119]}
        rotation={[0, -1.568, 0]}
        scale={[-0.657, -0.372, -0.442]}
      />
      <mesh
        name="Material2034"
        castShadow
        receiveShadow
        geometry={nodes.Material2034.geometry}
        material={materials.hardware}
        position={[-23.795, -5.687, 12.968]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane037"
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials['Material.003']}
        position={[-24.335, -2.811, 11.731]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.081, 4.015, 2.187]}
      />
      <mesh
        name="Plane038"
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials['Material.003']}
        position={[-24.335, -6.572, 11.731]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="Material2035"
        castShadow
        receiveShadow
        geometry={nodes.Material2035.geometry}
        material={materials.hardware}
        position={[-23.907, -2.792, 12.547]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Plane039"
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, 20.355]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane040"
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials['Material.003']}
        position={[-24.335, -1.866, 18.22]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 3.348]}
      />
      <mesh
        name="Material2036"
        castShadow
        receiveShadow
        geometry={nodes.Material2036.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, 19.551]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Material2037"
        castShadow
        receiveShadow
        geometry={nodes.Material2037.geometry}
        material={materials.hardware}
        position={[-23.907, -1.871, 19.053]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.356, -0.498]}
      />
      <mesh
        name="Plane041"
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials['Material.003']}
        position={[-24.335, -5.652, 16.038]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Material2038"
        castShadow
        receiveShadow
        geometry={nodes.Material2038.geometry}
        material={materials.hardware}
        position={[-23.795, -4.082, 17.101]}
        scale={[-0.608, -0.372, -0.477]}
      />
      <mesh
        name="Plane042"
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials['Material.003']}
        position={[-24.41, 9.56, -14.597]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="Material2039"
        castShadow
        receiveShadow
        geometry={nodes.Material2039.geometry}
        material={materials.hardware}
        position={[-23.871, 10.6, -13.609]}
        scale={[-0.608, -0.247, -0.468]}
      />
      <mesh
        name="Material2040"
        castShadow
        receiveShadow
        geometry={nodes.Material2040.geometry}
        material={materials.hardware}
        position={[-23.983, 12.065, -13.781]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.349, -0.33]}
      />
      <mesh
        name="Plane043"
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials['Material.003']}
        position={[-24.41, 9.56, -10.897]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="Material2041"
        castShadow
        receiveShadow
        geometry={nodes.Material2041.geometry}
        material={materials.hardware}
        position={[-23.871, 10.6, -11.503]}
        scale={[-0.608, -0.247, -0.468]}
      />
      <mesh
        name="Material2042"
        castShadow
        receiveShadow
        geometry={nodes.Material2042.geometry}
        material={materials.hardware}
        position={[-23.983, 12.065, -10.08]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.349, -0.33]}
      />
      <mesh
        name="Plane044"
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials['Material.003']}
        position={[-24.41, 10.131, -18.39]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.015, 1.839]}
      />
      <mesh
        name="Material2043"
        castShadow
        receiveShadow
        geometry={nodes.Material2043.geometry}
        material={materials.hardware}
        position={[-23.871, 10.91, -18.986]}
        scale={[-0.608, -0.243, -0.468]}
      />
      <mesh
        name="Plane045"
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials['Material.003']}
        position={[-24.41, 10.131, -22.296]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.015, 1.839]}
      />
      <mesh
        name="Material2044"
        castShadow
        receiveShadow
        geometry={nodes.Material2044.geometry}
        material={materials.hardware}
        position={[-23.871, 10.91, -21.297]}
        scale={[-0.608, -0.243, -0.468]}
      />
      <mesh
        name="Plane046"
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials['Material.003']}
        position={[-23.819, 9.56, -2.978]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="Material2045"
        castShadow
        receiveShadow
        geometry={nodes.Material2045.geometry}
        material={materials.hardware}
        position={[-23.279, 10.6, -3.672]}
        scale={[-0.608, -0.247, -0.468]}
      />
      <mesh
        name="Material2046"
        castShadow
        receiveShadow
        geometry={nodes.Material2046.geometry}
        material={materials.hardware}
        position={[-23.391, 12.065, -2.162]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.349, -0.33]}
      />
      <mesh
        name="Plane047"
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials['Material.003']}
        position={[-23.696, 10.131, -6.777]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.127, 1.867]}
      />
      <mesh
        name="Material2047"
        castShadow
        receiveShadow
        geometry={nodes.Material2047.geometry}
        material={materials.hardware}
        position={[-23.141, 10.91, -5.642]}
        scale={[-0.625, -0.243, -0.475]}
      />
      <mesh
        name="Plane048"
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials['Material.003']}
        position={[-24.41, 10.005, 15.991]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.1, 4.015, 1.839]}
      />
      <mesh
        name="Material2048"
        castShadow
        receiveShadow
        geometry={nodes.Material2048.geometry}
        material={materials.hardware}
        position={[-23.871, 10.653, 15.203]}
        scale={[-0.608, -0.241, -0.468]}
      />
      <mesh
        name="Plane050"
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials['Material.003']}
        position={[-24.41, 10.003, 11.763]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.17, 4.015, 1.839]}
      />
      <mesh
        name="Material2050"
        castShadow
        receiveShadow
        geometry={nodes.Material2050.geometry}
        material={materials.hardware}
        position={[-23.871, 10.653, 12.803]}
        scale={[-0.608, -0.241, -0.468]}
      />
      <mesh
        name="Plane049"
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials['Material.003']}
        position={[-24.41, 9.56, 20.278]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="Material2049"
        castShadow
        receiveShadow
        geometry={nodes.Material2049.geometry}
        material={materials.hardware}
        position={[-23.871, 10.6, 19.955]}
        rotation={[-1.563, 0, 0]}
        scale={[-0.608, -0.244, -0.472]}
      />
      <mesh
        name="Material2051"
        castShadow
        receiveShadow
        geometry={nodes.Material2051.geometry}
        material={materials.hardware}
        position={[-23.983, 12.065, 21.094]}
        rotation={[1.584, 0, 0]}
        scale={[-0.608, -0.349, -0.33]}
      />
      <mesh
        name="Material2052"
        castShadow
        receiveShadow
        geometry={nodes.Material2052.geometry}
        material={materials.hardware}
        position={[-23.636, 9.695, 42.328]}
        rotation={[0, 0.052, 0]}
        scale={[-0.608, -0.244, -0.468]}
      />
      <mesh
        name="Plane051"
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials['Material.003']}
        position={[-24.235, 11.584, 41.148]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.141, 4.016, 2.142]}
      />
      <mesh
        name="Plane052"
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials['Material.003']}
        position={[-24.235, 9.115, 41.148]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.249, 4.016, 2.142]}
      />
      <mesh
        name="handel_1004"
        castShadow
        receiveShadow
        geometry={nodes.handel_1004.geometry}
        material={materials.hardware}
        position={[-23.636, 12.237, 42.328]}
        rotation={[0, 0.052, 0]}
        scale={[-0.608, -0.244, -0.468]}
      />
      <mesh
        name="Plane053"
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials['Material.003']}
        position={[3.694, 10.131, 39.005]}
        rotation={[0, 1.513, -Math.PI / 2]}
        scale={[2.485, 4.272, 3.704]}
      />
      <mesh
        name="Material2053"
        castShadow
        receiveShadow
        geometry={nodes.Material2053.geometry}
        material={materials.hardware}
        position={[5.75, 10.91, 38.499]}
        rotation={[0, 1.513, 0]}
        scale={[-0.647, -0.243, -0.942]}
      />
      <mesh
        name="Plane054"
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials['Material.003']}
        position={[6.771, 9.56, -26.962]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
     
      <mesh
        name="Material2054"
        castShadow
        receiveShadow
        geometry={nodes.Material2054.geometry}
        material={materials.hardware}
        position={[5.843, 10.6, -26.38]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.247, -0.442]}
      />
      <mesh
        name="Material2055"
        castShadow
        receiveShadow
        geometry={nodes.Material2055.geometry}
        material={materials.hardware}
        position={[6.004, 12.065, -26.501]}
        rotation={[1.571, 0.013, 1.56]}
        scale={[-0.643, -0.33, -0.33]}
      />
      <mesh
        name="Plane055"
        castShadow
        receiveShadow
        geometry={nodes.Plane055.geometry}
        material={materials['Material.003']}
        position={[3.275, 9.56, -26.922]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="Material2056"
        castShadow
        receiveShadow
        geometry={nodes.Material2056.geometry}
        material={materials.hardware}
        position={[3.853, 10.6, -26.357]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.247, -0.442]}
      />
      <mesh
        name="Material2057"
        castShadow
        receiveShadow
        geometry={nodes.Material2057.geometry}
        material={materials.hardware}
        position={[2.508, 12.065, -26.461]}
        rotation={[1.571, 0.013, 1.56]}
        scale={[-0.643, -0.33, -0.33]}
      />
      <mesh
        name="Plane056"
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials['Material.003']}
        position={[10.354, 10.131, -27.003]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="Material2058"
        castShadow
        receiveShadow
        geometry={nodes.Material2058.geometry}
        material={materials.hardware}
        position={[10.923, 10.91, -26.438]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.243, -0.442]}
      />
      <mesh
        name="Plane057"
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials['Material.003']}
        position={[14.044, 10.131, -27.045]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="Material2059"
        castShadow
        receiveShadow
        geometry={nodes.Material2059.geometry}
        material={materials.hardware}
        position={[13.107, 10.91, -26.463]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.243, -0.442]}
      />
      <mesh
        name="Plane058"
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials['Material.003']}
        position={[-4.206, 9.56, -26.837]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="countertop034"
        castShadow
        receiveShadow
        geometry={nodes.countertop034.geometry}
        material={materials['Material.004']}
        position={[-4.225, 12.912, -30.923]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.209, -1.785]}
      />
      <mesh
        name="Material2060"
        castShadow
        receiveShadow
        geometry={nodes.Material2060.geometry}
        material={materials.hardware}
        position={[-3.544, 10.6, -26.273]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.247, -0.442]}
      />
      <mesh
        name="Material2061"
        castShadow
        receiveShadow
        geometry={nodes.Material2061.geometry}
        material={materials.hardware}
        position={[-4.972, 12.065, -26.375]}
        rotation={[1.571, 0.013, 1.56]}
        scale={[-0.643, -0.33, -0.33]}
      />
      <mesh
        name="Plane059"
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials['Material.003']}
        position={[-0.622, 10.131, -26.878]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="Material2062"
        castShadow
        receiveShadow
        geometry={nodes.Material2062.geometry}
        material={materials.hardware}
        position={[-1.673, 10.91, -26.294]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.243, -0.442]}
      />
      <mesh
        name="Plane060"
        castShadow
        receiveShadow
        geometry={nodes.Plane060.geometry}
        material={materials['Material.003']}
        position={[-11.899, 10.005, -26.632]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.1, 4.25, 1.737]}
      />
      <mesh
        name="Material2063"
        castShadow
        receiveShadow
        geometry={nodes.Material2063.geometry}
        material={materials.hardware}
        position={[-11.149, 10.653, -26.069]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.241, -0.442]}
      />
      <mesh
        name="Plane061"
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials['Material.003']}
        position={[-7.904, 10.003, -26.677]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.17, 4.25, 1.737]}
      />
      <mesh
        name="Material2064"
        castShadow
        receiveShadow
        geometry={nodes.Material2064.geometry}
        material={materials.hardware}
        position={[-8.882, 10.653, -26.095]}
        rotation={[0, -1.56, 0]}
        scale={[-0.643, -0.241, -0.442]}
      />
      <mesh
        name="Plane062"
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials['Material.003']}
        position={[-15.949, 9.56, -26.585]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="Material2065"
        castShadow
        receiveShadow
        geometry={nodes.Material2065.geometry}
        material={materials.hardware}
        position={[-15.638, 10.6, -26.017]}
        rotation={[-1.571, -0.008, -1.56]}
        scale={[-0.643, -0.231, -0.472]}
      />
      <mesh
        name="Material2066"
        castShadow
        receiveShadow
        geometry={nodes.Material2066.geometry}
        material={materials.hardware}
        position={[-16.716, 12.065, -26.124]}
        rotation={[1.571, 0.013, 1.56]}
        scale={[-0.643, -0.33, -0.33]}
      />
      <mesh
        name="Plane063"
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={materials['Material.003']}
        position={[-14.094, 10.131, 39.005]}
        rotation={[0, 1.513, -Math.PI / 2]}
        scale={[2.485, 4.272, 3.704]}
      />
      <mesh
        name="Material2067"
        castShadow
        receiveShadow
        geometry={nodes.Material2067.geometry}
        material={materials.hardware}
        position={[-12.039, 10.91, 38.499]}
        rotation={[0, 1.513, 0]}
        scale={[-0.647, -0.243, -0.942]}
      />
      <mesh
        name="countertop040"
        castShadow
        receiveShadow
        geometry={nodes.countertop040.geometry}
        material={materials['Material.001']}
        position={[14.003, 12.91, -31.132]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.206, -1.785]}
      />
      <mesh
        name="Plane065"
        castShadow
        receiveShadow
        geometry={nodes.Plane065.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, -23.528]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane066"
        castShadow
        receiveShadow
        geometry={nodes.Plane066.geometry}
        material={materials['Material.002']}
        position={[-24.335, -1.866, -23.528]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 1.877]}
      />
      <mesh
        name="countertop041"
        castShadow
        receiveShadow
        geometry={nodes.countertop041.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -23.552]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -1.929]}
      />
      <mesh
        name="Plane067"
        castShadow
        receiveShadow
        geometry={nodes.Plane067.geometry}
        material={materials['Material.002']}
        position={[-24.335, -4.846, -27.57]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.803, 4.015, 1.877]}
      />
      <mesh
        name="countertop042"
        castShadow
        receiveShadow
        geometry={nodes.countertop042.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -27.57]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -1.929]}
      />
      <mesh
        name="Plane068"
        castShadow
        receiveShadow
        geometry={nodes.Plane068.geometry}
        material={materials['Material.002']}
        position={[-24.335, -2.811, -15.341]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.739, 4.015, 2.187]}
      />
      <mesh
        name="countertop043"
        castShadow
        receiveShadow
        geometry={nodes.countertop043.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -15.341]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -2.247]}
      />
      <mesh
        name="Plane069"
        castShadow
        receiveShadow
        geometry={nodes.Plane069.geometry}
        material={materials['Material.002']}
        position={[-24.335, -6.572, -15.341]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="Plane070"
        castShadow
        receiveShadow
        geometry={nodes.Plane070.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, -19.75]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane071"
        castShadow
        receiveShadow
        geometry={nodes.Plane071.geometry}
        material={materials['Material.002']}
        position={[-24.335, -1.866, -19.75]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 1.877]}
      />
      <mesh
        name="countertop044"
        castShadow
        receiveShadow
        geometry={nodes.countertop044.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -19.774]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -1.929]}
      />
      <mesh
        name="Plane072"
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={materials['Material.002']}
        position={[5.417, -5.652, 38.606]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane073"
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={materials['Material.002']}
        position={[3.443, -1.866, 38.691]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[0.751, 4.339, 3.098]}
      />
      <mesh
        name="countertop045"
        castShadow
        receiveShadow
        geometry={nodes.countertop045.geometry}
        material={materials['Material.001']}
        position={[3.573, -0.593, 42.861]}
        rotation={[0, -1.531, 0]}
        scale={[-4.059, -0.316, -3.913]}
      />
      <mesh
        name="Plane074"
        castShadow
        receiveShadow
        geometry={nodes.Plane074.geometry}
        material={materials['Material.002']}
        position={[1.426, -5.652, 38.777]}
        rotation={[-Math.PI, 1.531, Math.PI / 2]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane075"
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials['Material.002']}
        position={[-24.335, -2.811, -10.697]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.081, 4.015, 2.187]}
      />
      <mesh
        name="countertop046"
        castShadow
        receiveShadow
        geometry={nodes.countertop046.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -10.697]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -2.247]}
      />
      <mesh
        name="Plane076"
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials['Material.002']}
        position={[-24.335, -6.572, -10.697]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="Plane077"
        castShadow
        receiveShadow
        geometry={nodes.Plane077.geometry}
        material={materials['Material.002']}
        position={[13.333, -5.652, -26.844]}
        rotation={[0, -1.549, -1.571]}
        scale={[2.825, 4.176, 1.737]}
      />
      <mesh
        name="Plane078"
        castShadow
        receiveShadow
        geometry={nodes.Plane078.geometry}
        material={materials['Material.002']}
        position={[15.308, -1.866, -26.888]}
        rotation={[0, -1.549, -1.571]}
        scale={[0.751, 4.176, 3.098]}
      />
      <mesh
        name="countertop047"
        castShadow
        receiveShadow
        geometry={nodes.countertop047.geometry}
        material={materials['Material.001']}
        position={[15.248, -0.593, -30.904]}
        rotation={[-Math.PI, 1.549, -Math.PI]}
        scale={[-3.907, -0.316, -3.913]}
      />
      <mesh
        name="Plane079"
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={materials['Material.002']}
        position={[17.327, -5.652, -26.47]}
        rotation={[0, -1.549, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane080"
        castShadow
        receiveShadow
        geometry={nodes.Plane080.geometry}
        material={materials['Material.002']}
        position={[9.078, -2.811, -26.72]}
        rotation={[0, -1.549, -1.571]}
        scale={[1.081, 4.339, 2.024]}
      />
      <mesh
        name="countertop048"
        castShadow
        receiveShadow
        geometry={nodes.countertop048.geometry}
        material={materials['Material.001']}
        position={[8.995, -0.593, -30.892]}
        rotation={[-Math.PI, 1.549, -Math.PI]}
        scale={[-4.059, -0.316, -2.079]}
      />
      <mesh
        name="Plane081"
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={materials['Material.002']}
        position={[9.078, -6.572, -26.72]}
        rotation={[0, -1.549, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Plane082"
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={materials['Material.002']}
        position={[-17.907, -2.811, 38.823]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[1.739, 4.339, 2.024]}
      />
      <mesh
        name="countertop049"
        castShadow
        receiveShadow
        geometry={nodes.countertop049.geometry}
        material={materials['Material.001']}
        position={[-15.204, -0.593, 42.933]}
        rotation={[0, -1.549, 0]}
        scale={[-4.059, -0.316, -5.121]}
      />
      <mesh
        name="Plane083"
        castShadow
        receiveShadow
        geometry={nodes.Plane083.geometry}
        material={materials['Material.002']}
        position={[-17.907, -6.572, 38.823]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Plane084"
        castShadow
        receiveShadow
        geometry={nodes.Plane084.geometry}
        material={materials['Material.002']}
        position={[-12.849, -4.924, 38.705]}
        rotation={[-Math.PI, 1.549, Math.PI / 2]}
        scale={[3.776, 4.339, 2.422]}
      />
      <mesh
        name="Plane085"
        castShadow
        receiveShadow
        geometry={nodes.Plane085.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, -2.073]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane086"
        castShadow
        receiveShadow
        geometry={nodes.Plane086.geometry}
        material={materials['Material.002']}
        position={[-24.335, -1.866, -4.208]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 3.348]}
      />
      <mesh
        name="countertop050"
        castShadow
        receiveShadow
        geometry={nodes.countertop050.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, -4.232]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -4.228]}
      />
      <mesh
        name="Plane087"
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, -6.389]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane088"
        castShadow
        receiveShadow
        geometry={nodes.Plane088.geometry}
        material={materials['Material.002']}
        position={[-24.235, -2.811, 41.981]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.739, 4.016, 2.187]}
      />
      <mesh
        name="countertop051"
        castShadow
        receiveShadow
        geometry={nodes.countertop051.geometry}
        material={materials['Material.001']}
        position={[-28.091, -0.593, 42.197]}
        rotation={[Math.PI, -0.052, Math.PI]}
        scale={[-3.757, -0.316, -2.247]}
      />
      <mesh
        name="Plane089"
        castShadow
        receiveShadow
        geometry={nodes.Plane089.geometry}
        material={materials['Material.002']}
        position={[-24.235, -6.572, 41.981]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.903, 4.016, 2.187]}
      />
      <mesh
        name="Plane090"
        castShadow
        receiveShadow
        geometry={nodes.Plane090.geometry}
        material={materials['Material.002']}
        position={[1.279, -5.652, -26.749]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane091"
        castShadow
        receiveShadow
        geometry={nodes.Plane091.geometry}
        material={materials['Material.002']}
        position={[1.279, -1.866, -26.749]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 1.737]}
      />
      <mesh
        name="countertop052"
        castShadow
        receiveShadow
        geometry={nodes.countertop052.geometry}
        material={materials['Material.001']}
        position={[1.292, -0.593, -30.921]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -1.785]}
      />
      <mesh
        name="Plane092"
        castShadow
        receiveShadow
        geometry={nodes.Plane092.geometry}
        material={materials['Material.002']}
        position={[5.019, -4.846, -26.759]}
        rotation={[0, -1.568, -1.571]}
        scale={[3.803, 4.339, 1.737]}
      />
      <mesh
        name="countertop053"
        castShadow
        receiveShadow
        geometry={nodes.countertop053.geometry}
        material={materials['Material.001']}
        position={[5.009, -0.593, -30.931]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -1.785]}
      />
      <mesh
        name="Plane093"
        castShadow
        receiveShadow
        geometry={nodes.Plane093.geometry}
        material={materials['Material.002']}
        position={[-6.297, -2.811, -26.728]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.739, 4.339, 2.024]}
      />
      <mesh
        name="countertop054"
        castShadow
        receiveShadow
        geometry={nodes.countertop054.geometry}
        material={materials['Material.001']}
        position={[-6.306, -0.593, -30.9]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -2.079]}
      />
      <mesh
        name="Plane094"
        castShadow
        receiveShadow
        geometry={nodes.Plane094.geometry}
        material={materials['Material.002']}
        position={[-6.297, -6.572, -26.728]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Plane095"
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={materials['Material.002']}
        position={[-2.217, -5.652, -26.739]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane096"
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={materials['Material.002']}
        position={[-2.217, -1.866, -26.739]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 1.737]}
      />
      <mesh
        name="countertop055"
        castShadow
        receiveShadow
        geometry={nodes.countertop055.geometry}
        material={materials['Material.001']}
        position={[-2.204, -0.593, -30.912]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -1.785]}
      />
      <mesh
        name="Plane097"
        castShadow
        receiveShadow
        geometry={nodes.Plane097.geometry}
        material={materials['Material.002']}
        position={[-10.594, -2.811, -26.716]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.081, 4.339, 2.024]}
      />
      <mesh
        name="countertop056"
        castShadow
        receiveShadow
        geometry={nodes.countertop056.geometry}
        material={materials['Material.001']}
        position={[-10.604, -0.593, -30.889]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -2.079]}
      />
      <mesh
        name="Plane098"
        castShadow
        receiveShadow
        geometry={nodes.Plane098.geometry}
        material={materials['Material.002']}
        position={[-10.594, -6.572, -26.716]}
        rotation={[0, -1.568, -1.571]}
        scale={[1.903, 4.339, 2.024]}
      />
      <mesh
        name="Plane099"
        castShadow
        receiveShadow
        geometry={nodes.Plane099.geometry}
        material={materials['Material.002']}
        position={[-18.575, -5.652, -26.695]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane100"
        castShadow
        receiveShadow
        geometry={nodes.Plane100.geometry}
        material={materials['Material.002']}
        position={[-16.599, -1.866, -26.7]}
        rotation={[0, -1.568, -1.571]}
        scale={[0.751, 4.339, 3.098]}
      />
      <mesh
        name="countertop057"
        castShadow
        receiveShadow
        geometry={nodes.countertop057.geometry}
        material={materials['Material.001']}
        position={[-16.586, -0.593, -30.872]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[-4.059, -0.316, -3.913]}
      />
      <mesh
        name="Plane101"
        castShadow
        receiveShadow
        geometry={nodes.Plane101.geometry}
        material={materials['Material.002']}
        position={[-14.58, -5.652, -26.705]}
        rotation={[0, -1.568, -1.571]}
        scale={[2.825, 4.339, 1.737]}
      />
      <mesh
        name="Plane102"
        castShadow
        receiveShadow
        geometry={nodes.Plane102.geometry}
        material={materials['Material.002']}
        position={[-24.335, -2.811, 11.731]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.081, 4.015, 2.187]}
      />
      <mesh
        name="countertop058"
        castShadow
        receiveShadow
        geometry={nodes.countertop058.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, 11.731]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -2.247]}
      />
      <mesh
        name="Plane103"
        castShadow
        receiveShadow
        geometry={nodes.Plane103.geometry}
        material={materials['Material.002']}
        position={[-24.335, -6.572, 11.731]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.903, 4.015, 2.187]}
      />
      <mesh
        name="Plane104"
        castShadow
        receiveShadow
        geometry={nodes.Plane104.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, 20.355]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane105"
        castShadow
        receiveShadow
        geometry={nodes.Plane105.geometry}
        material={materials['Material.002']}
        position={[-24.335, -1.866, 18.22]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.751, 4.015, 3.348]}
      />
      <mesh
        name="countertop059"
        castShadow
        receiveShadow
        geometry={nodes.countertop059.geometry}
        material={materials['Material.001']}
        position={[-28.196, -0.593, 18.195]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.316, -4.228]}
      />
      <mesh
        name="Plane106"
        castShadow
        receiveShadow
        geometry={nodes.Plane106.geometry}
        material={materials['Material.002']}
        position={[-24.335, -5.652, 16.038]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.825, 4.015, 1.877]}
      />
      <mesh
        name="Plane107"
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={materials['Material.002']}
        position={[-24.41, 9.56, -14.597]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="countertop060"
        castShadow
        receiveShadow
        geometry={nodes.countertop060.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.912, -14.621]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.209, -1.889]}
      />
      <mesh
        name="Plane108"
        castShadow
        receiveShadow
        geometry={nodes.Plane108.geometry}
        material={materials['Material.002']}
        position={[-24.41, 9.56, -10.897]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="countertop061"
        castShadow
        receiveShadow
        geometry={nodes.countertop061.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.912, -10.92]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.209, -1.889]}
      />
      <mesh
        name="Plane109"
        castShadow
        receiveShadow
        geometry={nodes.Plane109.geometry}
        material={materials['Material.002']}
        position={[-24.41, 10.131, -18.39]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.015, 1.839]}
      />
      <mesh
        name="countertop062"
        castShadow
        receiveShadow
        geometry={nodes.countertop062.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.91, -18.39]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.206, -1.889]}
      />
      <mesh
        name="Plane110"
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={materials['Material.002']}
        position={[-24.41, 10.131, -22.296]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.015, 1.839]}
      />
      <mesh
        name="countertop063"
        castShadow
        receiveShadow
        geometry={nodes.countertop063.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.91, -22.296]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.206, -1.889]}
      />
      <mesh
        name="Plane111"
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={materials['Material.002']}
        position={[-23.819, 9.56, -2.978]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="countertop064"
        castShadow
        receiveShadow
        geometry={nodes.countertop064.geometry}
        material={materials['Material.001']}
        position={[-27.679, 12.912, -3.002]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.209, -1.889]}
      />
      <mesh
        name="Plane112"
        castShadow
        receiveShadow
        geometry={nodes.Plane112.geometry}
        material={materials['Material.002']}
        position={[-23.696, 10.131, -6.777]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.485, 4.127, 1.867]}
      />
      <mesh
        name="countertop065"
        castShadow
        receiveShadow
        geometry={nodes.countertop065.geometry}
        material={materials['Material.001']}
        position={[-27.665, 12.91, -6.777]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.861, -0.206, -1.918]}
      />
      <mesh
        name="Plane113"
        castShadow
        receiveShadow
        geometry={nodes.Plane113.geometry}
        material={materials['Material.002']}
        position={[-24.41, 10.005, 15.991]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.1, 4.015, 1.839]}
      />
      <mesh
        name="countertop066"
        castShadow
        receiveShadow
        geometry={nodes.countertop066.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.912, 13.875]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.204, -4.141]}
      />
      <mesh
        name="Plane114"
        castShadow
        receiveShadow
        geometry={nodes.Plane114.geometry}
        material={materials['Material.002']}
        position={[-24.41, 10.003, 11.763]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.17, 4.015, 1.839]}
      />
      <mesh
        name="Plane115"
        castShadow
        receiveShadow
        geometry={nodes.Plane115.geometry}
        material={materials['Material.002']}
        position={[-24.41, 9.56, 20.278]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.872, 4.015, 1.839]}
      />
      <mesh
        name="countertop067"
        castShadow
        receiveShadow
        geometry={nodes.countertop067.geometry}
        material={materials['Material.001']}
        position={[-28.271, 12.912, 20.254]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.756, -0.202, -1.889]}
      />
      <mesh
        name="Plane116"
        castShadow
        receiveShadow
        geometry={nodes.Plane116.geometry}
        material={materials['Material.002']}
        position={[-24.235, 11.584, 41.148]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.141, 4.016, 2.142]}
      />
      <mesh
        name="countertop068"
        castShadow
        receiveShadow
        geometry={nodes.countertop068.geometry}
        material={materials['Material.001']}
        position={[-28.091, 13.04, 41.359]}
        rotation={[Math.PI, -0.052, Math.PI]}
        scale={[-3.757, -0.207, -2.2]}
      />
      <mesh
        name="Plane117"
        castShadow
        receiveShadow
        geometry={nodes.Plane117.geometry}
        material={materials['Material.002']}
        position={[-24.235, 9.115, 41.148]}
        rotation={[0, 0.052, -Math.PI / 2]}
        scale={[1.249, 4.016, 2.142]}
      />
      <mesh
        name="Plane118"
        castShadow
        receiveShadow
        geometry={nodes.Plane118.geometry}
        material={materials['Material.002']}
        position={[3.694, 10.131, 39.005]}
        rotation={[0, 1.513, -Math.PI / 2]}
        scale={[2.485, 4.272, 3.704]}
      />
      <mesh
        name="countertop069"
        castShadow
        receiveShadow
        geometry={nodes.countertop069.geometry}
        material={materials['Material.001']}
        position={[3.221, 12.91, 43.085]}
        rotation={[0, -1.568, 0]}
        scale={[-3.997, -0.206, -3.804]}
      />
      <mesh
        name="Plane119"
        castShadow
        receiveShadow
        geometry={nodes.Plane119.geometry}
        material={materials['Material.002']}
        position={[6.771, 9.56, -26.962]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="countertop070"
        castShadow
        receiveShadow
        geometry={nodes.countertop070.geometry}
        material={materials['Material.001']}
        position={[6.751, 12.912, -31.049]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.209, -1.785]}
      />
      <mesh
        name="Plane120"
        castShadow
        receiveShadow
        geometry={nodes.Plane120.geometry}
        material={materials['Material.002']}
        position={[3.275, 9.56, -26.922]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="countertop071"
        castShadow
        receiveShadow
        geometry={nodes.countertop071.geometry}
        material={materials['Material.001']}
        position={[3.256, 12.912, -31.009]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.209, -1.785]}
      />
      <mesh
        name="Plane121"
        castShadow
        receiveShadow
        geometry={nodes.Plane121.geometry}
        material={materials['Material.002']}
        position={[10.354, 10.131, -27.003]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="countertop072"
        castShadow
        receiveShadow
        geometry={nodes.countertop072.geometry}
        material={materials['Material.001']}
        position={[10.312, 12.91, -31.089]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.206, -1.785]}
      />
      <mesh
        name="Plane122"
        castShadow
        receiveShadow
        geometry={nodes.Plane122.geometry}
        material={materials['Material.002']}
        position={[14.044, 10.131, -27.045]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="Plane123"
        castShadow
        receiveShadow
        geometry={nodes.Plane123.geometry}
        material={materials['Material.002']}
        position={[-4.206, 9.56, -26.837]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="countertop073"
        castShadow
        receiveShadow
        geometry={nodes.countertop073.geometry}
        material={materials['Material.001']}
        position={[-4.225, 12.912, -30.923]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.209, -1.785]}
      />
      <mesh
        name="Plane124"
        castShadow
        receiveShadow
        geometry={nodes.Plane124.geometry}
        material={materials['Material.002']}
        position={[-0.622, 10.131, -26.878]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.485, 4.25, 1.737]}
      />
      <mesh
        name="countertop074"
        castShadow
        receiveShadow
        geometry={nodes.countertop074.geometry}
        material={materials['Material.001']}
        position={[-0.664, 12.91, -30.964]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.206, -1.785]}
      />
      <mesh
        name="Plane125"
        castShadow
        receiveShadow
        geometry={nodes.Plane125.geometry}
        material={materials['Material.002']}
        position={[-11.899, 10.005, -26.632]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.1, 4.25, 1.737]}
      />
      <mesh
        name="countertop075"
        castShadow
        receiveShadow
        geometry={nodes.countertop075.geometry}
        material={materials['Material.001']}
        position={[-9.942, 12.912, -30.741]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.204, -3.913]}
      />
      <mesh
        name="Plane126"
        castShadow
        receiveShadow
        geometry={nodes.Plane126.geometry}
        material={materials['Material.002']}
        position={[-7.904, 10.003, -26.677]}
        rotation={[0, -1.56, -1.571]}
        scale={[2.17, 4.25, 1.737]}
      />
      <mesh
        name="Plane127"
        castShadow
        receiveShadow
        geometry={nodes.Plane127.geometry}
        material={materials['Material.002']}
        position={[-15.949, 9.56, -26.585]}
        rotation={[0, -1.56, -1.571]}
        scale={[1.872, 4.25, 1.737]}
      />
      <mesh
        name="countertop076"
        castShadow
        receiveShadow
        geometry={nodes.countertop076.geometry}
        material={materials['Material.001']}
        position={[-15.968, 12.912, -30.672]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[-3.976, -0.202, -1.785]}
      />
      <mesh
        name="Plane128"
        castShadow
        receiveShadow
        geometry={nodes.Plane128.geometry}
        material={materials['Material.002']}
        position={[-14.094, 10.131, 39.005]}
        rotation={[0, 1.513, -Math.PI / 2]}
        scale={[2.485, 4.272, 3.704]}
      />
      <mesh
        name="countertop077"
        castShadow
        receiveShadow
        geometry={nodes.countertop077.geometry}
        material={materials['Material.001']}
        position={[-14.567, 12.91, 43.085]}
        rotation={[0, -1.568, 0]}
        scale={[-3.997, -0.206, -3.804]}
      />
      <group
        name="Sketchfab_model"
        position={[-31.435, -9.53, 4.672]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.099, 0.107, 0.112]}>
        <group name="Stovefbx" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Stove_StoveBody_0"
            castShadow
            receiveShadow
            geometry={nodes.Stove_StoveBody_0.geometry}
            material={materials.StoveBody}
            position={[0, 1.311, 0]}
          />
          <mesh
            name="Stove_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.Stove_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[0, 0, 0.11]}
          />
          <mesh
            name="StoveBurnerDialBottomLeft_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveBurnerDialBottomLeft_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[9.453, 104.571, 22.901]}
            rotation={[0, 0, 1.926]}
          />
          <mesh
            name="StoveBurnerDialBottomRight_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveBurnerDialBottomRight_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[9.453, 104.571, -31.27]}
            rotation={[0, 0, 1.926]}
          />
          <mesh
            name="StoveBurnerDialTopLeft_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveBurnerDialTopLeft_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[9.453, 104.571, 31.279]}
            rotation={[0, 0, 1.926]}
          />
          <mesh
            name="StoveBurnerDialTopRight_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveBurnerDialTopRight_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[9.453, 104.571, -22.893]}
            rotation={[0, 0, 1.926]}
          />
          <mesh
            name="StoveOvenDial_StoveControls_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveOvenDial_StoveControls_0.geometry}
            material={materials.StoveControls}
            position={[9.453, 104.571, -7.622]}
            rotation={[0, 0, 1.926]}
          />
          <mesh
            name="StoveOvenLight_StoveBody_0"
            castShadow
            receiveShadow
            geometry={nodes.StoveOvenLight_StoveBody_0.geometry}
            material={materials.StoveBody}
            position={[9.584, 104.678, 16.228]}
          />
        </group>
      </group>
      <group
        name="Sketchfab_model001"
        position={[-4.933, 0.061, 38.599]}
        rotation={[-Math.PI / 2, 0, 3.133]}
        scale={[0.039, 0.054, 0.042]}>
        <group name="Fridgefbx" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="Cylinder001"
            position={[83.874, 222.842, -2.893]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.351}>
            <mesh
              name="Cylinder001_BlackPlastic_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_BlackPlastic_0.geometry}
              material={materials.BlackPlastic}
            />
            <mesh
              name="Cylinder001_Metal_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            name="Cylinder003"
            position={[83.874, -219, -2.893]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.351}>
            <mesh
              name="Cylinder003_BlackPlastic_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_BlackPlastic_0.geometry}
              material={materials.BlackPlastic}
            />
            <mesh
              name="Cylinder003_Metal_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <mesh
            name="Cube_Metal_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube_Metal_0.geometry}
            material={materials.Metal}
            position={[0, -126.246, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Cube001_BlackPlastic_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_BlackPlastic_0.geometry}
            material={materials.BlackPlastic}
            position={[0, -126.246, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Cube002_BlackPlastic_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_BlackPlastic_0.geometry}
            material={materials.BlackPlastic}
            position={[0, -126.246, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Cube003_Metal_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Metal_0.geometry}
            material={materials.Metal}
            position={[0, -126.246, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Cube004_BlackPlastic_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_BlackPlastic_0.geometry}
            material={materials.BlackPlastic}
            position={[0, -126.246, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Cylinder_Metal_0"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Metal_0.geometry}
            material={materials.Metal}
            position={[83.874, 79.393, -2.893]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.351}
          />
          <mesh
            name="Cylinder002_BlackPlastic_0"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_BlackPlastic_0.geometry}
            material={materials.BlackPlastic}
            position={[0, -216.927, -72.688]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group
        name="countertop038"
        position={[14.214, 0.585, 11.468]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-4.826, -0.359, -6.112]}>
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.019']}
        />
        <mesh
          name="Cube001_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.020']}
        />
        <mesh
          name="Cube001_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['hardware.003']}
        />
        <mesh
          name="Cube001_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['Material.021']}
        />
        <mesh
          name="Cube001_5"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['Faucet3.002']}
        />
        <mesh
          name="Cube001_6"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials['Material.022']}
        />
        <mesh
          name="Cube001_7"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.023']}
        />
      </group>
    
      <group
        name="Sketchfab_model002"
        position={[15.759, -9.336, 1.432]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10.514}>
        <group
          name="734d3461f85d468ab1d2d4d954c77785fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Final_Baked_0"
            castShadow
            receiveShadow
            geometry={nodes.Final_Baked_0.geometry}
            material={materials.Baked}
            position={[0, -0.321, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group
        name="Sketchfab_model003"
        position={[15.759, -9.336, -4.207]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10.514}>
        <group
          name="734d3461f85d468ab1d2d4d954c77785fbx001"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Final_Baked_0001"
            castShadow
            receiveShadow
            geometry={nodes.Final_Baked_0001.geometry}
            material={materials.Baked}
            position={[0, -0.321, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group
        name="Sketchfab_model004"
        position={[7.789, 8.377, 6.379]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={11.272}>
        <group
          name="2638b38de51b40d09c539f7b167702f4fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="lamp_19" position={[0, 99.813, 0]}>
            <mesh
              name="lamp_19_body_0"
              castShadow
              receiveShadow
              geometry={nodes.lamp_19_body_0.geometry}
              material={materials.body}
            />
            <mesh
              name="lamp_19_lamp_0"
              castShadow
              receiveShadow
              geometry={nodes.lamp_19_lamp_0.geometry}
              material={materials.lamp}
            />
          </group>
        </group>
      </group>
      <group
        name="Plane064"
        position={[-26.215, 6.234, 5.043]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.07, 0.37, 0.37]}>
        <mesh
          name="Plane010_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane010_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          name="Plane010_2"
          castShadow
          receiveShadow
          geometry={nodes.Plane010_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          name="Plane010_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane010_3.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        name="Window"
        position={[-32.177, -5.186, 29.774]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.74, 14.617, 16.245]}>
        <group name="window001" position={[0.093, 0.378, 0.037]}>
          <mesh
            name="Cube035"
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials.wood}
          />
          <mesh
            name="Cube035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_1.geometry}
            material={materials.glass}
          />
          <mesh
            name="Cube035_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_2.geometry}
            material={materials.iron}
          />
          <mesh
            name="Cube035_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_3.geometry}
            material={materials['sheet metal']}
          />
          <mesh
            name="Cube035_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_4.geometry}
            material={materials.hlinik}
          />
          <mesh
            name="Cube035_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_5.geometry}
            material={materials.guma}
          />
        </group>
      </group>
      <group
        name="Window001"
        position={[18.024, -5.186, 46.857]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[20.683, 14.617, 16.245]}>
        <group name="window002" position={[0.093, 0.378, 0.037]}>
          <mesh
            name="Cube046"
            castShadow
            receiveShadow
            geometry={nodes.Cube046.geometry}
            material={materials.wood}
          />
          <mesh
            name="Cube046_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_1.geometry}
            material={materials.glass}
          />
          <mesh
            name="Cube046_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_2.geometry}
            material={materials.iron}
          />
          <mesh
            name="Cube046_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_3.geometry}
            material={materials['sheet metal']}
          />
          <mesh
            name="Cube046_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_4.geometry}
            material={materials.hlinik}
          />
          <mesh
            name="Cube046_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_5.geometry}
            material={materials.guma}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Kitchen.glb')
