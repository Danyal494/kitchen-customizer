// store/State.js
import { proxy } from "valtio";

export const state = proxy({
  target: "counterTop", // default selected object
  customizations: {
    counterTop: {
      activeMesh: "default",
      variants: ["default", "12_bevel", "14_bevel", "Full_Bullnose", "half_BullNose"],
      texture: "/textures/stone2.png",
      textures: ["/textures/stone1.png", "/textures/stone2.png", "/textures/stone3.png","/textures/stone4.png","/textures/stone5.png","/textures/stone6.png","/textures/stone7.png"],
    },
  },
});
