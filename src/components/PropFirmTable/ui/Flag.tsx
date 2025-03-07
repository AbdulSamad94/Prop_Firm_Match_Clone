// ui/Flag.tsx
import React from "react";
import Image from "next/image";

interface FlagProps {
  country: string;
}

export const Flag: React.FC<FlagProps> = ({ country }) => {
  const countryCode = country.toUpperCase();
  return (
    <div className="flex items-center">
      <span className="mr-1">
        {countryCode === "GB" ? (
          <Image
            src={"/assets/country_flag/gb.png"}
            alt="flag"
            width={20}
            height={20}
          />
        ) : countryCode === "US" ? (
          <Image
            src={"/assets/country_flag/us.png"}
            alt="flag"
            width={20}
            height={20}
          />
        ) : countryCode === "IL" ? (
          <Image
            src={"/assets/country_flag/il.png"}
            alt="flag"
            width={20}
            height={20}
          />
        ) : countryCode === "VC" ? (
          <Image
            src={"/assets/country_flag/us.png"}
            alt="flag"
            width={20}
            height={20}
          />
        ) : countryCode === "VG" ? (
          "🇻🇬"
        ) : countryCode === "AE" ? (
          "🇦🇪"
        ) : countryCode === "CZ" ? (
          "🇨🇿"
        ) : countryCode === "LC" ? (
          "🇱🇨"
        ) : countryCode === "ZA" ? (
          "🇿🇦"
        ) : (
          "🏳️"
        )}
      </span>
      <span>{countryCode}</span>
    </div>
  );
};
