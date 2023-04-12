import Container from './Container';
import { Phone } from './Phone';
import Email from './Email';
import Address from './Address';
import MessageForm from './MessageForm';
import MapLocation from './MapLocation';

export default function Contact() {
  return (
    <div className="text-gray-a1 border-b border-theme-light-blue bg-theme-navy-blue text-sm p-8 flex justify-between w-screen">
      <Container>
        <div className="flex flex-col md:flex-row w-full lg:grid lg:grid-cols-3 gap-4">
          <div className="w-full md:w-1/3">
            <h3 className="text-lato text-2xl font-light text-zinc-900 ml-2">Contactanos</h3>
            <div className='flex flex-col justify-around p-3 lg:w-full'>
              <Phone />
              <Email />
              <Address />
            </div>
          </div>
          <div className="lg:w-auto md:w-2/3 mt-6 md:mt-0">
            <MessageForm />
          </div>
          <div className=''>
            <h1>MAPA</h1>
            <MapLocation />
          </div>
        </div>
      </Container>
    </div>
  );
}