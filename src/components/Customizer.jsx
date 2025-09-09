// components/Customizer.jsx
import { useSnapshot } from "valtio";
import { state } from "../store/State";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Customizer() {
  const snap = useSnapshot(state);
  const c = snap.customizations.counterTop;

  const [open, setOpen] = useState(false);

  return (
    <div className="absolute z-10 top-4 right-4 w-80">
      {/* Toggle Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
      >
        <span className="font-bold">Countertop Customizer</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown Content */}
      {open && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-lg space-y-4">
          {/* Mesh Variant Selector */}
          <div>
            <p className="font-semibold mb-2">Choose Edge Type:</p>
            <div className="flex gap-2 flex-wrap">
              {c.variants.map((variant) => (
                <button
                  key={variant}
                  className={`px-3 py-1 rounded ${
                    c.activeMesh === variant
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    (state.customizations.counterTop.activeMesh = variant)
                  }
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Texture Selector */}
          <div>
            <p className="font-semibold mb-2">Choose Texture:</p>
            <div className="flex gap-2 flex-wrap">
              {c.textures.map((tex) => (
                <img
                  key={tex}
                  src={tex}
                  alt="texture"
                  className={`w-16 h-16 rounded cursor-pointer border ${
                    c.texture === tex ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() =>
                    (state.customizations.counterTop.texture = tex)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
