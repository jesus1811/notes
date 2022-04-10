import { useRouter } from "next/router";

interface Props {
  sidebar: object;
  route: string;
  handle: Function;
  children: string;
}

const SidebarSingle = ({ sidebar, route, handle, children }: Props) => {
  const router = useRouter();
  return (
    <li>
      <button
        className="flex items-center p-2 w-full text-xl font-normal 
      text-white hover:text-gray-900 rounded-lg 
      transition duration-75 group hover:bg-gray-100"
        onClick={() => {
          sidebar ? router.push(route) : handle();
        }}
      >
        <svg
          className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        {sidebar ? <span className="ml-3">{children}</span> : null}
      </button>
    </li>
  );
};
export default SidebarSingle;
