import Image from "next/image";
import clsx from "clsx";
import { turnObjectIntoString } from "helpers/manipulateText";

export const Container = ({ children, as, className, ...props }) => {
  let Component = as ?? "div";
  const classNameProp = turnObjectIntoString(className);

  return (
    <Component className={clsx(classNameProp)} {...props}>
      {children}
    </Component>
  );
};

Container.Section = function ContainerSection({
  children,
  className,
  as,
  bottomDiv,
  ...props
}) {
  let Component = as ?? "section";
  const classNameProp = turnObjectIntoString(className);

  return (
    <Component
      className={clsx(
        classNameProp,
        bottomDiv ? "pb-14" : "pb-24 sm:pb-32",
        "relative isolate mx-auto max-w-4xl desktop-sm:max-w-5xl px-6 pt-10 lg:px-8"
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.Columns = function ContainerColumns({
  children,
  className,
  ...props
}) {
  const classNameProp = turnObjectIntoString(className);
  return (
    <div className={clsx(classNameProp, "grid")} {...props}>
      {children}
    </div>
  );
};

Container.Flex = function ContainerFlex({ children, className, ...props }) {
  const classNameProp = turnObjectIntoString(className);
  return (
    <div
      className={clsx(
        classNameProp,
        "flex",
        className?.flex === undefined && "flex-row justify-between items-center"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.Image = function ContainerImage({ src, alt, className, ...props }) {
  const classNameProp = turnObjectIntoString(className);

  return (
    <Image className={clsx(classNameProp)} src={src} alt={alt} {...props} />
  );
};
