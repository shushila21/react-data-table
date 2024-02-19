import { IFlexContainerProps } from "../types";
import { cn } from "../../../../utils";

export default function Flex({
  className = "",
  children,
  gap,
  md,
  row,
  ...rest
}: IFlexContainerProps) {
  let newClassNames = "";
  if (md) newClassNames += `md:naxatw-flex-row `;

  return (
    <div
      className={cn(
        `naxatw-flex naxatw-flex-col ${newClassNames}
      ${className}`
      )}
      {...rest}
      style={{
        gap: gap ? `${gap * 0.25}rem` : "",
      }}
    >
      {children}
    </div>
  );
}
