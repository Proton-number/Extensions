import { Button } from "~/components/ui/button";
import { CardTitle, CardDescription, Card } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { appStore } from "~/store/appStore";
import { AnimatePresence, motion } from "motion/react";

export default function Extension() {
  const { isChecked, setIsChecked, all, active, inactive } = appStore();
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

  const handleSwitchChange = (isChecked: string, checked: boolean) => {
    setIsChecked(isChecked, checked);
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (all) return true;
    if (active && isChecked[extension.name]) return true;
    if (inactive && !isChecked[extension.name]) return true;
    return false;
  });

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl  ">
      <AnimatePresence>
        {filteredExtensions.map((extension) => (
          <motion.div
            key={extension.name}
            exit={{ opacity: 0, transform: "translateY(-20px)" }}
            transition={{ duration: 0.3 }}
          >
            <Card className=" p-6 rounded-3xl  bg-gray-700 flex flex-col justify-between border-0 shadow-md hover:shadow-lg  text-white">
              <div className="flex  gap-4">
                <img src={extension.icon} alt={extension.name} />
                <div>
                  <CardTitle className="text-xl font-bold">
                    {extension.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm mt-2">
                    {extension.description}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center justify-between mt-12">
                <Button
                  className="  font-semibold cursor-pointer border-1 rounded-4xl hover:bg-red-600 hover:border-0 hover:text-[color:#070e2c]  transition-colors  duration-200 ease-in-out"
                  variant={"ghost"}
                  onClick={() => handleSwitchChange(extension.name, false)}
                >
                  Remove
                </Button>
                <Switch
                  checked={isChecked[extension.name] || false}
                  onCheckedChange={(checked) =>
                    handleSwitchChange(extension.name, checked)
                  }
                  className="data-[state=checked]:bg-red-500 data-[state=checked]:hover:bg-red-600 cursor-pointer"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
