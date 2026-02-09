import Link from 'next/link';
import TicketDescriptionMdx from '@/ticketsDescription.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading, Paragraph } from '@/components/Typography';

function GroupDiscountCTA() {
  return (
    <div className="w-full text-center mt-12 mb-4">
      <Link
        href="mailto:contact@hydpy.org?subject=Group%20Discount%20Inquiry"
        className="inline-block"
      >
        <Heading
          tagLevel={4}
          level={5}
          className="text-gray-700 dark:text-gray-200 font-body hover:text-secondary-600 dark:hover:text-secondary-400 underline underline-offset-4 decoration-2 transition-colors duration-200"
        >
          ASK FOR GROUP DISCOUNT
        </Heading>
      </Link>
    </div>
  );
}

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
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=FDD100&ticketBg=FFF9DC&borderCl=FDD100&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=FB5850&fontFamily=Nunito&borderRadius=10&widget_type=standard"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe>
      <iframe
        className="hidden dark:flex"
        src="https://konfhub.com/widget/pyconf-hyderabad-2026?desc=false&secondaryBg=C07600&ticketBg=C07600&borderCl=C07600&bg=1A202C&fontColor=F9FAFB&ticketCl=FFF&btnColor=000&anchorTag=fff&fontFamily=Nunito&borderRadius=10&widget_type=standard"
        id="konfhub-widget"
        title="Register for PyConf Hyderabad 2026"
        width="100%"
        height="800"
      ></iframe>
      <GroupDiscountCTA />
      <Paragraph
        level={3}
        className="text-gray-700 dark:text-gray-300 text-center mt-2 max-w-3xl"
      >
        <span className="whitespace-nowrap">
          To learn about the referral contest or for any other questions, please
          check the{' '}
          <Link href="/faq#tickets" className="underline">
            Tickets FAQ
          </Link>{' '}
          section.
        </span>
      </Paragraph>
    </section>
  );
}
