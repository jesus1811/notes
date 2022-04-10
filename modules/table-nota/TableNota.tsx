import {
  InputField,
  ModalUi,
  SelectField,
  TableUi,
} from "../../components/common";
import useTableNota from "./useTableNota";

const TableNota = () => {
  const {
    columns,
    notas,
    handleOnOpenAdd,
    onOpenAdd,
    cursos,
    estudiantes,
    usuarios,
    nota1,
    nota2,
    nota3,
    onChangeIDCurso,
    onChangeIdEstudiante,
    onChangeIdUsuario,
    onChangeNota1,
    onChangeNota2,
    onChangeNota3,
    addNota,
    deleteNota,
    handleOnOpenEdit,
    onOpenEdit,
    setOnOpenEdit,
    idCurso,
    idEstudiante,
    idUsuario,
    updateNota,
  } = useTableNota();
  return (
    <>
      <TableUi
        title="Notas"
        actionsName="nota"
        columns={columns}
        data={notas}
        onClickDelete={deleteNota}
        onClickEdit={handleOnOpenEdit}
        onClickAdd={handleOnOpenAdd}
      />
      <ModalUi
        onOpen={onOpenAdd}
        handleOnOpen={handleOnOpenAdd}
        title="Agregar"
        module="Nota"
        methodo={addNota}
      >
        <>
          <SelectField onChange={onChangeIdUsuario} defaultValue={null}>
            <option value={null!}>Agregar Usuario</option>
            {usuarios.map((usuario: any) => {
              return (
                <option key={usuario.DNI_usuario} value={usuario.DNI_usuario}>
                  {usuario.nombre + " " + usuario.apellido}
                </option>
              );
            })}
          </SelectField>
          <SelectField onChange={onChangeIdEstudiante} defaultValue={null}>
            <option value={null!}>Agregar Estudiante</option>
            {estudiantes.map((estudiante: any) => {
              return (
                <option
                  key={estudiante.DNI_estudiante}
                  value={estudiante.DNI_estudiante}
                >
                  {estudiante.nombre + " " + estudiante.apellido}
                </option>
              );
            })}
          </SelectField>
          <SelectField onChange={onChangeIDCurso} defaultValue={null}>
            <option value={null!}>Agregar curso</option>
            {cursos.map((curso: any) => {
              return (
                <option key={curso.idCurso} value={curso.idCurso}>
                  {curso.nombre}
                </option>
              );
            })}
          </SelectField>

          <InputField
            onChange={onChangeNota1}
            value={nota1}
            placeholder="Agregar Nota1"
            type="number"
          />
          <InputField
            onChange={onChangeNota2}
            value={nota2}
            placeholder="Agregar Nota2"
            type="number"
          />
          <InputField
            onChange={onChangeNota3}
            value={nota3}
            placeholder="Agregar Nota3"
            type="number"
          />
        </>
      </ModalUi>

      <ModalUi
        onOpen={onOpenEdit}
        handleOnOpen={() => {
          setOnOpenEdit(false);
        }}
        title="Editar"
        module="Nota"
        methodo={updateNota}
      >
        <>
          <SelectField onChange={onChangeIdUsuario} defaultValue={idUsuario}>
            <option value={null!}>Agregar Usuario</option>
            {usuarios.map((usuario: any) => {
              return (
                <option key={usuario.DNI_usuario} value={usuario.DNI_usuario}>
                  {usuario.nombre + " " + usuario.apellido}
                </option>
              );
            })}
          </SelectField>
          <SelectField
            onChange={onChangeIdEstudiante}
            defaultValue={idEstudiante}
          >
            <option value={null!}>Agregar Estudiante</option>
            {estudiantes.map((estudiante: any) => {
              return (
                <option
                  key={estudiante.DNI_estudiante}
                  value={estudiante.DNI_estudiante}
                >
                  {estudiante.nombre + " " + estudiante.apellido}
                </option>
              );
            })}
          </SelectField>
          <SelectField onChange={onChangeIDCurso} defaultValue={idCurso}>
            <option value={null!}>Agregar curso</option>
            {cursos.map((curso: any) => {
              return (
                <option key={curso.idCurso} value={curso.idCurso}>
                  {curso.nombre}
                </option>
              );
            })}
          </SelectField>

          <InputField
            onChange={onChangeNota1}
            value={nota1}
            placeholder="Agregar Nota1"
            type="number"
          />
          <InputField
            onChange={onChangeNota2}
            value={nota2}
            placeholder="Agregar Nota2"
            type="number"
          />
          <InputField
            onChange={onChangeNota3}
            value={nota3}
            placeholder="Agregar Nota3"
            type="number"
          />
        </>
      </ModalUi>
    </>
  );
};

export default TableNota;
