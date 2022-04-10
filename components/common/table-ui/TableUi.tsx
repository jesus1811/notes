import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { MutatingDots } from "react-loader-spinner";
interface Props {
  columns: any;
  data: any;
  title: string;
  onClickEdit: Function;
  onClickDelete: any;
  onClickAdd: any;
  actionsName: string;
}

const TableUi = ({
  columns,
  data,
  title,
  onClickEdit,
  onClickDelete,
  actionsName,
  onClickAdd,
}: Props) => {
  return (
    <div className="flex flex-col items-end justify-center">
      <button
        onClick={onClickAdd}
        className="bg-gray-800 hover:bg-gray-900 text-white text-xl rounded px-4 py-2"
      >
        Agregar {actionsName}
      </button>

      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={[
          {
            icon: "edit",
            tooltip: "editar " + actionsName,
            onClick: onClickEdit,
          },
          {
            icon: "delete",
            tooltip: "eliminar " + actionsName,
            onClick: onClickDelete,
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) => ExportPdf(cols, datas, title),
            },
          ],
          headerStyle: {
            background: "#1F2937",
            color: "white",
            fontSize: "18px",
          },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: (
              <div className="flex justify-center items-center">
                <MutatingDots
                  height="100"
                  width="100"
                  color="#6B7280"
                  secondaryColor="#1F2937"
                  ariaLabel="loading"
                />
              </div>
            ),
          },
          header: {
            actions: "Acciones",
          },
          pagination: {
            labelRowsSelect: "Filas",
          },
          toolbar: {
            searchPlaceholder: "Buscar",
            exportPDFName: true,
          },
        }}
      />
    </div>
  );
};
export default TableUi;
