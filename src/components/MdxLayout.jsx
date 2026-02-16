export default function MdxLayout({ children }) {
  return (
    <div className="prose !max-w-none dark:prose-invert text-base md:text-lg lg:text-xl prose-headings:mt-8 prose-headings:font-heading prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base">
      {children}
    </div>
  );
}
