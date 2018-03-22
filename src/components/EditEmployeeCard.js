import React from "react";
import "./EditEmployeeCard.css";
import Button from "./Button.js";
import InputMask from "react-input-mask";

const EditEmployeeCard = ({
  onAddClick,
  onChange,
  inputsValue,
  isEditEmployee,
  onSaveClick,
  cancelCreate
}) => {
  let {
    name,
    surname,
    phone,
    manager,
    photoLink,
    position,
    secondname,
    photo,
    peoples
  } = inputsValue;
  let inputsNotComplete = !(name && surname && phone && secondname);
  console.log(peoples);
  return (
    <div className="edit-employee-card">
      <h3>
        {!isEditEmployee
          ? "Добавление нового сотрудника"
          : "Редактирование сотрудника"}
      </h3>
      <input
        id="name"
        placeholder="Имя"
        type="text"
        value={name}
        onChange={onChange}
      />
      <input
        id="surname"
        placeholder="Фамилия"
        value={surname}
        onChange={onChange}
      />
      <input
        id="secondname"
        placeholder="Отчество"
        value={secondname}
        onChange={onChange}
      />
      <InputMask
        id="phone"
        placeholder="Телефон"
        value={phone}
        onChange={onChange}
        mask="8\(999) 999-99-99"
        maskChar=" "
      />
      <input
        id="manager"
        placeholder="Начальник"
        value={manager}
        onChange={onChange}
      />
      <input
        id="position"
        placeholder="Должность"
        value={position}
        onChange={onChange}
      />
      <input
        id="photoLink"
        placeholder="Ссылка на фото"
        value={photo}
        onChange={onChange}
      />
      <input
        id="peoples"
        placeholder="Подчиненные"
        value={peoples.join(" ")}
        onChange={onChange}
      />
      <div>
        <Button onClick={cancelCreate} name={"Отмена"} color={"#a4b0be"} />
        {!isEditEmployee ? (
          <Button
            onClick={() =>
              onAddClick({
                name,
                surname,
                secondname,
                phone,
                manager,
                photo: photoLink,
                position,
                id: Date.now()
              })
            }
            name={"Добавить"}
            color={"#0984e3"}
            disabled={inputsNotComplete}
          />
        ) : (
          <Button
            onClick={onSaveClick}
            name={"Сохранить"}
            color={"#0984e3"}
            disabled={inputsNotComplete}
          />
        )}
      </div>
    </div>
  );
};

export default EditEmployeeCard;
