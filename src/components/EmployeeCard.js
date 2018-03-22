import React from "react";
import "./EmployeeCard.css";
import Button from "./Button.js";

const EmployeeCard = ({
  showedEmployee,
  onClick,
  deleteButtonIsClicked,
  onPermittedDeleteClick,
  onEditClick
}) => {
  let {
    surname,
    name,
    secondname,
    position,
    phone,
    manager,
    photo,
    peoples
  } = showedEmployee;
  return (
    <div className="employee-card">
      {showedEmployee && (
        <div className="employee-info">
          <div className="photo-name">
            <div className="photo" style={{ backgroundImage: `url(${photo})` }}>
              {photo == "" && "Нет Фото"}
            </div>
            <div className="name">
              <p>{surname} </p>
              <p>
                {name} {secondname}{" "}
              </p>
            </div>
          </div>

          <div className="info">
            <p><span>Должность</span> : {position}{" "}</p>
            <p><span>Телефон</span> : {phone}{" "}</p>
            <p><span>Начальник</span>: {manager}{" "}</p>
            <p><span>Подчиненные</span>: {peoples? peoples.join(",") : ""}{" "}</p>
            {!deleteButtonIsClicked ? (
              <div className="buttons buttons-to-bottom">
                <Button onClick={onClick} name={"Удалить"} color={"#e74c3c"} />
                <Button
                  onClick={onEditClick}
                  name={"Редактировать"}
                  color={"#0984e3"}
                />
              </div>
            ) : (
              <div className="permit-box">
                <p>Вы точно хотите удалить страницу работника?</p>
                <div className="buttons">
                  <Button onClick={onClick} name={"Отмена"} color={"#0984e3"} />
                  <Button
                    onClick={onPermittedDeleteClick}
                    name={"Удалить"}
                    color={"#ee5253"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
