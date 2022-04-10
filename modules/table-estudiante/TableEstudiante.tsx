import { InputField, ModalUi, TableUi } from "../../components/common";
import useTableEstudiante from "./useTableEstudiante";

const TableEstudiante = () => {
  const {
    columns,
    estudiantes,
    handleDni,
    handleNombres,
    handleApellidos,
    onOpenAgregar,
    setOnOpenAgregar,
    handleOnOpen,
    dni,
    nombres,
    apellidos,
    addEstudiante,
    deleteEstudiante,
    onOpenEdit,
    setOnOpenEdit,
    handleOnOpenEdit,
    putEstudiante,
  } = useTableEstudiante();

  return (
    <>
      <TableUi
        title="Estudiantes"
        actionsName="estudiante"
        columns={columns}
        data={estudiantes}
        onClickDelete={deleteEstudiante}
        onClickEdit={handleOnOpenEdit}
        onClickAdd={handleOnOpen}
      />
      <ModalUi
        onOpen={onOpenAgregar}
        handleOnOpen={() => setOnOpenAgregar(false)}
        methodo={addEstudiante}
        module="Estudiante"
        title="Agregar"
      >
        <>
          <InputField
            type="number"
            placeholder="DNI del Estudiante"
            onChange={handleDni}
            value={dni!}
          />
          <InputField
            type="text"
            placeholder="Nombres del Estudiante"
            onChange={handleNombres}
            value={nombres}
          />
          <InputField
            type="text"
            placeholder="Apellidos del Estudiante"
            onChange={handleApellidos}
            value={apellidos}
          />
        </>
      </ModalUi>

      <ModalUi
        onOpen={onOpenEdit}
        handleOnOpen={() => setOnOpenEdit(false)}
        methodo={putEstudiante}
        module="Estudiante"
        title="Editar"
      >
        <>
          <InputField
            type="text"
            placeholder="Nombres del Estudiante"
            onChange={handleNombres}
            value={nombres}
          />
          <InputField
            type="text"
            placeholder="Apellidos del Estudiante"
            onChange={handleApellidos}
            value={apellidos}
          />
        </>
      </ModalUi>
    </>
  );
};

export default TableEstudiante;
