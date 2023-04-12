import { FaEnvelope } from 'react-icons/fa';

export default function Email() {
  return (
    <a href="mailto:administracion@rustikafilandia.net" className="flex items-center m-2">
      <FaEnvelope />
      <p className="ml-2">
        Email: administracion@rustikafilandia.net
      </p>
    </a>
  );
}