import Container from './Container';
import Phone from './Phone';
import Email from './Email';
import Address from './Address';
import MessageForm from './MessageForm';

export default function Contact() {
  return (
    <div className="text-gray-a1 border-b border-theme-light-blue bg-theme-navy-blue text-sm p-8 flex justify-between w-screen">
      <Container>
        <div className="flex flex-col md:flex-row w-full xl:mx-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-lato text-2xl font-light text-white ml-2">Contactanos</h3>
            <Phone />
            <Email />
            <Address />
          </div>
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <MessageForm />
          </div>
        </div>
      </Container>
    </div>
  );
}