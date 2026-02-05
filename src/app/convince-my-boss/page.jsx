"use client"
import ConviceMyBoss from '@/conviceMyBoss.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import { useState } from 'react';

export default function Page() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const element = document.getElementById("request-template");
    if (!element) return;

    const text = element.innerText;

    await navigator.clipboard.writeText(text);
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
          <ConviceMyBoss />
        </MdxLayout>
      </div>
      <div className="flex gap-5 mt-5">
        <button
          onClick={handleCopy}
          label="Copy Request Template"
          className={`inline-flex mt-2 sm:mr-4 items-center px-5 py-3 font-bold text-lg border-4 border-gray-900 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all transform bg-primary-500 hover:bg-primary-700 text-gray-50`}
        >
          {copied ? 'Copied ✅' : 'Copy Request Template'}
        </button>
      </div>
    </section>
  );
}
