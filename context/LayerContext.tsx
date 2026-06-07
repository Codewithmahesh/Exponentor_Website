"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type ActiveLayer = "default" | "intro" | "xsite" | "jems";

interface LayerCtxValue {
  layer: ActiveLayer;
  setLayer: (l: ActiveLayer) => void;
}

const LayerCtx = createContext<LayerCtxValue>({
  layer: "default",
  setLayer: () => {},
});

export function LayerProvider({ children }: { children: React.ReactNode }) {
  const [layer, setLayerState] = useState<ActiveLayer>("default");
  const setLayer = useCallback((l: ActiveLayer) => setLayerState(l), []);
  return (
    <LayerCtx.Provider value={{ layer, setLayer }}>
      {children}
    </LayerCtx.Provider>
  );
}

export const useLayer = () => useContext(LayerCtx);
