import { useState } from "react";
import { IClockList, IForm } from "../types/interfaces";

interface IProps {
  submitFormHandler: (info: IClockList) => void;
}

const Form = ({ submitFormHandler }: IProps) => {
  const [form, setForm] = useState<IForm>({
    title: "",
    timezone: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    })
  )}

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    })
  )}
  
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.timezone && form.title) {
      submitFormHandler({ title: form.title, timezone: form.timezone });
    }
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='formInnerContainer'>
        <label htmlFor="title">Укажите название</label>
        <input id='title'name='title' maxLength={11} type='text'onChange={handleChangeInput} value={form.title} required/>
      </div>
      <div className='formInnerContainer'>
        <label htmlFor="timezone">Выберите временную зону</label>
        <select name='timezone' id='timezone' onChange={handleChangeSelect} value={form.timezone} required>
          <option value=''>Выберите зону</option>
          <option value={-12}>-12</option>
          <option value={-11}>-11</option>
          <option value={-10}>-10</option>
          <option value={-9}>-9</option>
          <option value={-8}>-8</option>
          <option value={-7}>-7</option>
          <option value={-6}>-6</option>
          <option value={-5}>-5</option>
          <option value={-4}>-4</option>
          <option value={-3}>-3</option>
          <option value={-2}>-2</option>
          <option value={-1}>-1</option>
          <option value={0}>0</option>
          <option value={1}>+1</option>
          <option value={2}>+2</option>
          <option value={3}>+3</option>
          <option value={4}>+4</option>
          <option value={5}>+5</option>
          <option value={6}>+6</option>
          <option value={7}>+7</option>
          <option value={8}>+8</option>
          <option value={9}>+9</option>
          <option value={10}>+10</option>
          <option value={11}>+11</option>
          <option value={12}>+12</option>
        </select>
      </div>
      <div className='formInnerContainer'>
        <button type='submit'>Добавить</button>
      </div>
    </form>
  )
}

export default Form
