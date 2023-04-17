import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '@/components/Navbar';
import es from 'date-fns/locale/es';

export default function Reservar() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [numPersons, setNumPersons] = useState(1);
  const [duration, setDuration] = useState('');
  const [decription, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleDateChange = (date) => setStartDate(date);
  const handleTimeChange = (time) => setStartTime(time);
  const handleDurationChange = (event) => setDuration(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleNumPersonsChange = (event) => setNumPersons(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isOpen = checkIsOpen(startDate, startTime);
    if (isOpen) {
      // submit the form
    } else {
      alert('The restaurant is closed at the selected date and time.');
    }
  };

  const handleActiveReservation = (event) => {
    event.preventDefault();
  };

  function filterTime(time) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const day = startDate.getDay();

    // Monday, Wednesday, Thursday
    if (day === 1 || day === 3 || day === 4) {
      return (hour >= 14 && hour < 23) || (hour === 23 && minute === 0);
      // Friday
    } else if (day === 5) {
      return (hour >= 14 && hour < 24) || (hour === 0 && minute === 0);
      // Saturday
    } else if (day === 6) {
      return (hour >= 12 && hour < 24) || (hour === 0 && minute === 0);
      // Sunday
    } else if (day === 0) {
      return (hour >= 12 && hour < 23) || (hour === 23 && minute === 0);
    }
    return false;
  }

  const filterDate = (date) => {
    return date.getDay() !== 2;
  };

  return (
    <div className=''>
      <Navbar
        style={{ backgroundColor: 'black', position: 'sticky', top: '0' }}
      />
      <div className='flex flex-row items-center justify-center min-h-screen'>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h2 className='text-4xl font-bold text-center text-gray-700 mb-[20px]'>
            realizar una reserva
          </h2>
          <form onSubmit={handleSubmit} className='max-w-md'>
            <div className='mb-4'>
              <label
                htmlFor='date'
                className='block text-gray-700 font-bold mb-2'
              >
                Fecha:
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat='dd/MM/yyyy'
                filterDate={filterDate}
                locale={es}
                className='border border-gray-300 px-3 py-2 rounded-md w-full'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='time'
                className='block text-gray-700 font-bold mb-2'
              >
                Hora:
              </label>
              <DatePicker
                selected={startTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption='Hora'
                dateFormat='h:mm aa'
                className='border border-gray-300 px-3 py-2 rounded-md w-full'
                required
                filterTime={filterTime}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='duration'
                className='block text-gray-700 font-bold mb-2'
              >
                Duración:
              </label>
              <select
                id='duration'
                name='duration'
                value={duration}
                onChange={handleDurationChange}
                className='border border-gray-300 px-3 py-2 rounded-md w-full'
                required
              >
                <option value='' disabled>
                  Selecciona una duración ...
                </option>
                <option value='1 hora'>1 hora</option>
                <option value='2 horas'>2 horas</option>
                <option value='3 horas'>3 horas</option>
                <option value='4 horas'>4 horas</option>
                <option value='5 horas'>5 horas</option>
                <option value='6 horas'>6 horas</option>
                <option value='7 horas'>7 horas</option>
                <option value='8 horas'>8 horas</option>
              </select>
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
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Motivo:
              </label>
              <input
                id='motivo'
                name='motivo'
                value={decription}
                onChange={handleDescriptionChange}
                className='border border-gray-300 px-3 py-2 rounded-md w-full'
                required
                maxLength='100'
                placeholder='motivo de la reserva...'
                minLength='5'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 font-bold mb-2'
              >
                Correo electrónico:
              </label>
              <input
                id='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
                className='border border-gray-300 px-3 py-2 rounded-md w-full'
                required
                maxLength='100'
                placeholder='Correo electrónico...'
                minLength='5'
                type='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                title='Introduce un email válido'
              />
            </div>
            <br />
            <button
              type='submit'
              className='bg-[#556b2f] hover:bg-[#82a34a] text-white font-bold py-2 px-4 rounded-full w-full'
            >
              Crear reserva
            </button>
          </form>
        </div>

        <div>
          <h2>Reservas activas</h2>
          <label
            htmlFor='reservas'
            className='block text-gray-700 font-bold mb-2'
          >
            ingrese su correo electrónico para ver sus reservas:
          </label>
          <input
            id='reservas'
            name='reservas'
            className='border border-gray-300 px-3 py-2 rounded-md w-full'
            required
            maxLength='100'
            placeholder='Correo electrónico...'
            minLength='5'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            title='Introduce un email válido'
            onChange={handleEmailChange}
          />

          <button
            type='submit'
            className='bg-[#556b2f] hover:bg-[#82a34a] text-white font-bold py-2 px-4 rounded-full w-full'
            onClick={handleActiveReservation}
          >
            Ver reservas
          </button>
        </div>
      </div>
    </div>
  );
}
