// Type definitions for node-mac-virtual-display
// Project: node-mac-virtual-display

export type DisplayInfo = {
  id: number;
  width: number;
  height: number;
};

export function getDisplayId(): number;
export function createVirtualDisplay({
  width,
  height,
  frameRate,
  hiDPI,
  displayName: string,
}: {
  width: number;
  height: number;
  frameRate: number;
  hiDPI: boolean;
  displayName: string;
}): DisplayInfo;
export function cloneVirtualDisplay({
  displayName: string,
}): DisplayInfo;
export function destroyVirtualDisplay(): boolean;
