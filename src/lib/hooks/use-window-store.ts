import { create } from "zustand";
import {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  WINDOW_CONFIG_TYPE,
  WindowName,
} from "@/config/constants";

type WINDOW_STORE = {
  windows: Array<WINDOW_CONFIG_TYPE>;
  next_z_index: number;
  open_window: (name: WindowName, data?: unknown) => void;
  close_window: (name: WindowName) => void;
  focus_window: (name: WindowName) => void;
};

const useWindowStore = create<WINDOW_STORE>((set) => ({
  windows: WINDOW_CONFIG.map((w) => ({ ...w })) as Array<WINDOW_CONFIG_TYPE>,
  next_z_index: INITIAL_Z_INDEX + 1,

  open_window: (name, data) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.name === name
          ? {
              ...window,
              is_open: true,
              z_index: state.next_z_index,
              data: data ?? window.data,
            }
          : window,
      ),
      next_z_index: state.next_z_index + 1,
    })),

  close_window: (name) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.name === name
          ? {
              ...window,
              is_open: false,
              z_index: INITIAL_Z_INDEX,
              data: null,
            }
          : window,
      ),
    })),

  focus_window: (name) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.name === name
          ? {
              ...window,
              z_index: state.next_z_index,
            }
          : window,
      ),
      next_z_index: state.next_z_index + 1,
    })),
}));

export default useWindowStore;
