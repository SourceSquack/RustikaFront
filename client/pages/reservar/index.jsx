import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Reservar() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [numPersons, setNumPersons] = useState(1);

  const handleDateChange = (date) => setStartDate(date);
  const handleTimeChange = (time) => setStartTime(time);
  const handleNumPersonsChange = (event) => setNumPersons(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Make reservation request to backend
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <form onSubmit={handleSubmit} className='max-w-md'>
        <div className='mb-4'>
          <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>
            Fecha:
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            className='border border-gray-300 px-3 py-2 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='time' className='block text-gray-700 font-bold mb-2'>
            Hora:
          </label>
          <DatePicker
            selected={startTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption='Time'
            dateFormat='h:mm aa'
            className='border border-gray-300 px-3 py-2 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='numPersons'
            className='block text-gray-700 font-bold mb-2'
          >
            Número de personas:
          </label>
          <input
            type='number'
            id='numPersons'
            name='numPersons'
            min='1'
            max='90'
            value={numPersons}
            onChange={handleNumPersonsChange}
            className='border border-gray-300 px-3 py-2 rounded-md w-full'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
