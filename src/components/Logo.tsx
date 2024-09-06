import React from "react";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return (
    <Image src="/logo.svg" alt="Travelite Logo" width={width} height={height} />
  );
};

export default Logo;
