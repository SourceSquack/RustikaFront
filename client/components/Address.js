import { FaCompass } from 'react-icons/fa';

export default function Address() {
  return (
    <div className="w-full flex m-2 items-start ">
      <div className="flex items-center">
        <FaCompass />
        <p className="ml-2">Address: </p>
      </div>
      <div className="ml-1 w-1/2 lg:w-full">
        <p>Filandia - Quindío Cra 4 Calle 1, barrio La Colonia. Vía mirador</p>
      </div>
    </div>
  );
}