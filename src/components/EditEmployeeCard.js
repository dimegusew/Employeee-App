import React from 'react';
import './EditEmployeeCard.css';
import Button from './Button.js';
import InputMask from 'react-input-mask';


const EditEmployeeCard = ({...props})=>{
  let {name,surname,phone,manager,photoLink,position,secondname,photo,peoples} = props.editInputs;
  let inputsNotComplete =  !(name && surname && phone && secondname);
  let peoplesStr = peoples.join(' ');
  let inputsArray = [
    { id: "name", placeholder: "Имя", value:  name  },
    { id: "surname", placeholder: "Фамилия", value:  surname  },
    { id: "secondname", placeholder: "Отчество", value:  secondname  },
    { id: "manager", placeholder: "Начальник", value:  manager  },
    { id: "position", placeholder: "Должность", value:  position  },
    { id: "photoLink", placeholder: "Ссылка на фото", value:  photoLink  },
    { id: "peoples", placeholder: "Подчиненные", value:  peoplesStr  }
  ];


  return(
    <div className='edit-employee-card'>
      <h3>{!props.isEditButtonClicked
         ? 'Добавление нового сотрудника'
         : 'Редактирование сотрудника' }
       </h3>
      {inputsArray.map(el =>
          <input
            {...el}
            onChange={props.onChange}
          />
      )}
      <InputMask
         id ='phone'
         placeholder = "Телефон"
         value={phone}
         onChange={props.onChange}
         mask="8\(999) 999-99-99"
         maskChar=" " />
      <div>

      <Button onClick={props.cancelCreate} name={'Отмена'} color={'#a4b0be'}/>
      {!props.isEditButtonClicked?
        <Button onClick={()=>props.onAddClick({...props.editInputs,id:Date.now()})}
           name={'Добавить'} color={'#0984e3'}
           disabled={inputsNotComplete}
         />
        : <Button
          onClick={props.onSaveClick}
          name={'Сохранить'}
          color={'#0984e3'}
          disabled={inputsNotComplete} />
      }
    </div>
     </div>
  )
}

export default EditEmployeeCard;
