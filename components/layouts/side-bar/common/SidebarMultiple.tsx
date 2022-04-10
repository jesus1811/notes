interface Props {
  sidebar: boolean;
  sidebarHandle: Function;
  opcionHandle: Function;
  opcion: boolean;
  children: JSX.Element;
  title: string;
}

const SidebarMultiple = ({
  sidebar,
  sidebarHandle,
  opcionHandle,
  opcion,
  children,
  title,
}: Props) => {
  return (
    <li>
      <button
        type="button"
        className="flex items-center p-2 w-full text-xl font-normal text-white hover:text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 "
        onClick={() => {
          sidebar ? opcionHandle() : sidebarHandle();
        }}
      >
        <svg
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
        </svg>

        {sidebar ? (
          <>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              {title}
            </span>
            {sidebar ? (
              <svg
                className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-50 transform rotate-180 group-hover:text-gray-900"
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
              </svg>
            ) : (
              <svg
                className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-50 group-hover:text-gray-900 "
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
              </svg>
            )}
          </>
        ) : null}
      </button>
      {opcion == true && sidebar == true ? (
        <ul id="dropdown-example" className="py-2 space-y-2">
          {children}
        </ul>
      ) : null}
    </li>
  );
};
export default SidebarMultiple;
