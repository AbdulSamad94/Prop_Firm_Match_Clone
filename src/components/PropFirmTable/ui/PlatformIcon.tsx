// ui/PlatformIcon.tsx
import React from "react";
import Image from "next/image";

interface PlatformIconProps {
  platform: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "mt4":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_1.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    case "mt5":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_2.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    case "ctrader":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_3.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_4.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
  }
};
