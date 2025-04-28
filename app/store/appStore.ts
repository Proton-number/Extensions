import { create } from "zustand";

interface APPSTORE {
  isChecked: Record<string, boolean>;
  setIsChecked: (name: string, val: boolean) => void;
  all: boolean;
  setAll: (val: boolean) => void;
  active: boolean;
  setActive: (val: boolean) => void;
  inactive: boolean;
  setInactive: (val: boolean) => void;
}
export const appStore = create<APPSTORE>((set) => ({
  isChecked: {},
  setIsChecked: (name, val) =>
    set((state) => ({ isChecked: { ...state.isChecked, [name]: val } })),
  
  all: true,
  setAll: (val) => set(() => ({ all: val, active: false, inactive: false })),

  active: false,
  setActive: (val) => set(() => ({ active: val, all: false, inactive: false })),

  inactive: false,
  setInactive: (val) =>
    set(() => ({ inactive: val, all: false, active: false })),
}));
