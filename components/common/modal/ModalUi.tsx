// import { Modal as ModalMain } from "@material-ui/core";
import { Modal as ModalMain } from "@material-ui/core";

interface Props {
  children: JSX.Element;
  onOpen: boolean;
  handleOnOpen: any;
  maxWidth?: number;
  title: string;
  module: string;
  methodo: VoidFunction;
}
const ModalUi = ({
  children,
  onOpen,
  handleOnOpen,
  title,
  module,
  methodo,
}: Props) => {
  return (
    <ModalMain open={onOpen} onClose={() => handleOnOpen()}>
      <div
        className="w-full flex  absolute max-w-lg -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 
       justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center p-3 bg-white gap-4">
          <h1 className="text-gray-800 text-3xl font-bold">{title + " " + module}</h1>
          {children}
          <div className="flex justify-between items-center w-full">
            <button
              className="px-4 py-2 bg-gray-800 text-white 
        hover:bg-gray-900 text-xl rounded"
              onClick={methodo}
            >
              {title}
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white 
        hover:bg-gray-900 text-xl rounded"
              onClick={handleOnOpen}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </ModalMain>
  );
};

export default ModalUi;
