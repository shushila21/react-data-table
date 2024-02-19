import { cn } from "../../../../utils";
import { IFlexContainerProps } from "../types";

export default function FlexColumn({
  className = "",
  children,
  gap,
  style,
  ...rest
}: IFlexContainerProps) {
  return (
    <div
      className={cn(`naxatw-flex naxatw-flex-col ${className}`)}
      style={{
        gap: gap ? `${gap * 0.25}rem` : "",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
