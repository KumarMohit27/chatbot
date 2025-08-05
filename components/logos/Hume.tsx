import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

export default function HumeLogo(props: HumeLogoProps) {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
   <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Text -->
  <text x="60" y="40" font-family="Verdana, sans-serif" font-size="24" fill="#003366" font-weight="bold">
    medico
    <tspan fill="#00bfa5">.ai</tspan>
  </text>

  <!-- Medical Cross Symbol -->
  <rect x="10" y="10" width="12" height="40" fill="#00bfa5"/>
  <rect x="2" y="22" width="40" height="12" fill="#00bfa5"/>

  <!-- Circular Tech Dot -->
  <circle cx="48" cy="30" r="5" fill="#003366"/>
</svg>

  );
}
