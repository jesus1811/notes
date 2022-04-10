import {
  InputField,
  ModalUi,
  SelectField,
  TableUi,
} from "../../components/common";
import useTableUsuario from "./useTableUsuario";

const TableUsuario = () => {
  const {
    columns,
    usuarios,
    onOpenAgregar,
    dni,
    nombres,
    apellidos,
    email,
    contrasena,
    tiposUsuarios,
    onOpenEdit,
    tipoUsuario,
    setOnOpenAgregar,
    setOnOpenEdit,
    onChangeNombres,
    onChangeApellidos,
    onChangeDni,
    onChangeEmail,
    onChangeContrasena,
    onChangeTipoUsuario,
    handleOnOpenAgregar,
    handleOnOpenEdit,
    deleteUsuario,
    addUsuario,
    editUsuario,
  } = useTableUsuario();

  return (
    <>
      <TableUi
        columns={columns}
        data={usuarios}
        actionsName="Usuario"
        onClickDelete={deleteUsuario}
        onClickEdit={handleOnOpenEdit}
        title="Usuarios"
        onClickAdd={handleOnOpenAgregar}
      />
      <ModalUi
        module="Usuario"
        handleOnOpen={() => setOnOpenAgregar(false)}
        methodo={addUsuario}
        onOpen={onOpenAgregar}
        title="Agregar"
      >
        <>
          <InputField
            type="number"
            placeholder="DNI del Usuario"
            onChange={onChangeDni}
            value={dni!}
          />
          <InputField
            type="text"
            placeholder="Nombres del Usuario"
            onChange={onChangeNombres}
            value={nombres}
          />
          <InputField
            type="text"
            placeholder="Apellidos del Usuario"
            onChange={onChangeApellidos}
            value={apellidos}
          />
          <InputField
            type="email"
            placeholder="Email del Usuario"
            onChange={onChangeEmail}
            value={email}
          />
          <InputField
            type="password"
            placeholder="Contrasena del Usuario"
            onChange={onChangeContrasena}
            value={contrasena}
          />

          <SelectField onChange={onChangeTipoUsuario}>
            <option value={null!}>Agregar Tipo de Usuario</option>
            {tiposUsuarios.map((tipoUsuario: any) => {
              return (
                <option
                  key={tipoUsuario.idTipo_usuario}
                  value={tipoUsuario.idTipo_usuario}
                >
                  {tipoUsuario.tipo}
                </option>
              );
            })}
          </SelectField>
        </>
      </ModalUi>

      <ModalUi
        module="Usuario"
        handleOnOpen={() => setOnOpenEdit(false)}
        methodo={editUsuario}
        onOpen={onOpenEdit}
        title="Editar"
      >
        <>
          <InputField
            type="number"
            placeholder="DNI del Usuario"
            onChange={onChangeDni}
            value={dni!}
          />
          <InputField
            type="text"
            placeholder="Nombres del Usuario"
            onChange={onChangeNombres}
            value={nombres}
          />
          <InputField
            type="text"
            placeholder="Apellidos del Usuario"
            onChange={onChangeApellidos}
            value={apellidos}
          />
          <InputField
            type="email"
            placeholder="Email del Usuario"
            onChange={onChangeEmail}
            value={email}
          />
          <SelectField
            onChange={onChangeTipoUsuario}
            defaultValue={tipoUsuario!}
          >
            {tiposUsuarios.map((tipoUsuario: any) => {
              return (
                <option
                  key={tipoUsuario.idTipo_usuario}
                  value={tipoUsuario.idTipo_usuario}
                >
                  {tipoUsuario.tipo}
                </option>
              );
            })}
          </SelectField>
        </>
      </ModalUi>
    </>
  );
};

export default TableUsuario;
