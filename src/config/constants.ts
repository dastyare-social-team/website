const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = [
  {
    name: "intro",
    is_open: false,
    z_index: INITIAL_Z_INDEX,
    data: null,
  },
  {
    name: "foundation",
    is_open: false,
    z_index: INITIAL_Z_INDEX,
    data: null,
  },
  {
    name: "systems",
    is_open: false,
    z_index: INITIAL_Z_INDEX,
    data: null,
  },
  {
    name: "scaling",
    is_open: false,
    z_index: INITIAL_Z_INDEX,
    data: null,
  },
  {
    name: "invest",
    is_open: false,
    z_index: INITIAL_Z_INDEX,
    data: null,
  },
] as const;

export type WindowName = (typeof WINDOW_CONFIG)[number]["name"];

export type WINDOW_CONFIG_TYPE = {
  name: WindowName;
  is_open: boolean;
  z_index: number;
  data: unknown | null;
};

export const WINDOW_NAMES: WindowName[] = WINDOW_CONFIG.map((w) => w.name);

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
