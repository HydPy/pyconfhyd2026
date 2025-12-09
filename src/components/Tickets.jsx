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
        className="flex"
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=FFF8F3&ticketBg=E68D00&borderCl=E68D00&bg=FFF8F3&fontColor=1e1f24&ticketCl=1e1f24&btnColor=E3453A&fontFamily=Nunito&borderRadius=10&widget_type=standard"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe>
      {/* <iframe
        className="hidden dark:flex"
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=1A202C&ticketBg=CC7E00&borderCl=CC7E00&bg=1A202C&fontColor=DD2621&ticketCl=f9fafb&btnColor=DD2621&fontFamily=Nunito&borderRadius=10&widget_type=standard"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe> */}
    </section>
  );
}
