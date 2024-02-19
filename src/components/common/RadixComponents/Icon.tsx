interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  className,
  iconClassName = "material-symbols-outlined",
  onClick,
  ...rest
}: IIconProps): JSX.Element {
  return (
    <span
      role="presentation"
      className="naxatw-flex naxatw-h-fit naxatw-items-center"
      onKeyUp={() => {}}
      onClick={onClick}
      {...rest}
    >
      <i
        className={`naxatw-cursor-pointer naxatw-select-none naxatw-text-icon-sm naxatw-duration-300
          lg:naxatw-text-icon-md ${iconClassName} ${className}`}
      >
        {name}
      </i>
    </span>
  );
}
