import Container from './Container';
import { Phone } from './Phone';
import Email from './Email';
import Address from './Address';
import MessageForm from './MessageForm';
import MapLocation from './MapLocation';

export default function Contact() {
  return (
    <div className="text-gray-a1 border-b border-theme-light-blue bg-theme-navy-blue text-sm p-8 flex justify-between w-screen lg:w-100%  lg:m-0 lg:px-0">
      <Container>
        <div className=" w-full lg:grid lg:grid-cols-3">
          <div className="w-full md:w-full  lg:py-6 lg:flex lg:flex-col lg:justify-star lg:text:2xl">
            <h3 className="text-lato text-2xl font-light text-zinc-900 ml-2 lg:text-3xl">Contactanos</h3>
            <div className='p-3 lg:w-full lg:flex lg:flex-col justify-evenly lg:align-middle lg:text-lg lg:mt-12'>
              <Phone />
              <Email />
              <Address />
            </div>
          </div>
          <div className=" md:w-2/3 mt-6 md:mt-0 lg:w-full">
            <MessageForm />
          </div>
          <div className=''>
            <MapLocation />
          </div>
        </div>
      </Container>
    </div>
  );
}