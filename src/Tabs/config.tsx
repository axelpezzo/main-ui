import { TTabConfig } from "./types";

export const getMainTabs = (): TTabConfig => {
  return [
    { label: "Tab 1", content: "Tab 1" },
    { label: "Tab 2", content: "Tab 2" },
    { label: "Tab 3", content: "Tab 3" },
    { label: "Tab 4", content: "Tab 4" },
  ];
};
