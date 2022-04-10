import Link from "next/link";
import React from "react";
interface Props {
  route: string;
  children: string;
}

const SidebarLink = ({ route, children }: Props) => {
  return (
    <Link href={route}>
      <a className="flex items-center p-2 pl-11 w-full text-base font-normal text-white hover:text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">
        {children}
      </a>
    </Link>
  );
};
export default SidebarLink;
