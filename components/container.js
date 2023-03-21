export default function Container({ children, className }) {
  return (
    <section
      className={`mx-auto w-full max-w-[1200px] px-4 md:px-8 ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
}
