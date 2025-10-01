import TicketDescriptionMdx from '@/ticketsDescription.mdx';
import MdxLayout from '@/components/MdxLayout';

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <div className="flex flex-row text-center my-2">
        <MdxLayout>
          <TicketDescriptionMdx />
        </MdxLayout>
      </div>
      <iframe
        className="flex dark:hidden"
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=fff8f3&ticketBg=fff8f3&borderCl=fff8f3&bg=f9fafb&fontColor=016e6b&ticketCl=016e6b&btnColor=fa8624&fontFamily=Nunito&borderRadius=10"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe>

      <iframe
        className="hidden dark:flex"
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=016e6b&ticketBg=016e6b&borderCl=016e6b&bg=1a202c&fontColor=f9fafb&ticketCl=f9fafb&btnColor=c56a1c&fontFamily=Nunito&borderRadius=10"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe>
    </section>
  );
}
