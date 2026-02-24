'use client';

import { useState } from 'react';

import ConvinceMyBoss from '@/convinceMyBoss.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import CTAButton from '@/components/CTAButton';

const convinceMyBossTemplate = `
Dear {bossName},

I would like to request approval to attend PyConf Hyderabad 2026, one of the premier Python conferences in India.

Event Details
- Conference: PyConf Hyderabad 2026
- Dates: 14 - 15 March 2026
- Location: Hyderabad, India
- Website: https://2026.pyconfhyd.org/
- Tickets: https://2026.pyconfhyd.org/tickets

Why this is valuable
- Exposure to latest trends in Python, AI/ML, Data Engineering, DevOps, Cloud, Security, and Web Development.
- Learn from industry experts, core contributors, and community leaders.
- Opportunity to network with developers, architects, startups, and open-source maintainers.
- Helps bring modern best practices and tooling back to our team.

Value to the organization
- Knowledge transfer through a post-conference summary or internal session.
- Insights that can improve engineering quality, productivity, and decision-making.
- Community engagement and potential talent and collaboration opportunities.

I believe attending PyConf Hyderabad 2026 aligns well with our technical goals and long-term growth. I’m happy to share learnings with the team after the event.
Please let me know if you need any additional details.
Thank you for your time and consideration.

Sincerely,
{yourName}
`;

export default function ConvinceMyBossContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(convinceMyBossTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-primary-600 dark:text-primary-400"
      >
        Convince My Boss
      </Heading>
      <div id="request-template">
        <MdxLayout>
          <ConvinceMyBoss />
        </MdxLayout>
      </div>
      <div className="flex gap-5 mt-5">
        <div onClick={handleCopy}>
          <CTAButton
            label={copied ? 'Copied ✅' : 'Copy Request Template'}
            className="mt-2 sm:mr-4"
            type="button"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
