import { InputField, ModalUi, TableUi } from "../../components/common";
import useTableCurso from "./useTableCurso";
const TableCurso = () => {
  const {
    columnsCurso,
    addCurso,
    handleOnOpen,
    nombreCurso,
    onChangeCurso,
    cursos,
    onOpen,
    deleteCurso,
    handleOnOpenEdit,
    onOpenEditar,
    updateCurso,
    setOnOpen,
    setOnOpenEditar,
  } = useTableCurso();
  return (
    <>
      <TableUi
        title="Cursos"
        columns={columnsCurso}
        data={cursos}
        onClickDelete={deleteCurso}
        onClickEdit={handleOnOpenEdit}
        actionsName="Curso"
        onClickAdd={handleOnOpen}
      />
      <ModalUi
        title="Agregar"
        module="Curso"
        methodo={addCurso}
        handleOnOpen={() => setOnOpen(false)}
        onOpen={onOpen}
      >
        <InputField
          type="text"
          placeholder="Nombre del Curso"
          onChange={onChangeCurso}
          value={nombreCurso}
        />
      </ModalUi>

      <ModalUi
        title="Editar"
        module="Curso"
        methodo={updateCurso}
        handleOnOpen={() => setOnOpenEditar(false)}
        onOpen={onOpenEditar}
      >
        <InputField
          type="text"
          placeholder="Nombre del Curso"
          onChange={onChangeCurso}
          value={nombreCurso}
        />
      </ModalUi>
    </>
  );
};
export default TableCurso;
