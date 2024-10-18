import React, { useState } from "react";
import { cn } from "./utils";
// import { AppContext } from "../../Context";
import Modal  from "../Modal/Modal";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto md:mx-0 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  price,
  onClick
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string;
  header?: React.ReactNode;
  price?: React.ReactNode;
  onClick: any
}) => {
  // const { setIsModalOpen } = React.useContext(AppContext);

 
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      onClick={onClick}
      className={cn(
        "row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-800 dark:border-none bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
    >
      {/* Image Section */}
      <div className="w-full">
        {header}
      </div>
  
      {/* Content Section */}
      <div className="flex-1">
        <div className="flex items-center space-x-5">
          <p className="text-green-500">
          ${price.toLocaleString()}
          </p>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2">
          {description.slice(1, 50)}...
        </div>
      </div>
    </div>
  );
};
