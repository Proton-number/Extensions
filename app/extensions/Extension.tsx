import React from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

export default function Extension() {
  const extensions = [
    {
      name: "DevLens",
      description:
        "Quickly Inspect page layouts and visualize element boundaries.",
      icon: "/logo-devlens.svg",
    },
    {
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      icon: "/logo-style-spy.svg",
    },
    {
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to acelerat page loading",
      icon: "/logo-speed-boost.svg",
    },
    {
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser",
      icon: "/logo-json-wizard.svg",
    },
    {
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      icon: "/logo-tab-master-pro.svg",
    },
    {
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within thr browser.",
      icon: "/logo-viewport-buddy.svg",
    },
    {
      name: "Markup Notes",
      description:
        "Enables annotaion and notes directly onto webpages for collaborative debugging.",
      icon: "/logo-markup-notes.svg",
    },
    {
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      icon: "/logo-grid-guides.svg",
    },
    {
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      icon: "/logo-palette-picker.svg",
    },
    {
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page",
      icon: "/logo-link-checker.svg",
    },
    {
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      icon: "/logo-dom-snapshot.svg",
    },
    {
      name: "ConsolePLus",
      description:
        "Enhanced devloper console with advanced filtering and logging.",
      icon: "/logo-console-plus.svg",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl  ">
      {extensions.map((extension) => (
        <Card
          key={extension.name}
          className=" p-6 rounded-3xl  bg-gray-700 flex flex-col justify-between "
        >
          <div className="flex  gap-4">
            <img src={extension.icon} alt={extension.name} />
            <div>
              <h2 className="text-xl font-bold">{extension.name}</h2>
              <p className="text-gray-500">{extension.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-12">
            <Button
              className=" font-semibold cursor-pointer border-1 rounded-4xl hover:bg-red-600 hover:border-0 hover:text-[color:#070e2c]"
              variant={"ghost"}
            >
              Remove
            </Button>
            <Switch />
          </div>
        </Card>
      ))}
    </div>
  );
}
