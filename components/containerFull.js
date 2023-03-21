export default function ContainerFull({ children, className }) {
  return (
    <section className={`w-full ${className ? className : ""}`}>
      {children}
    </section>
  );
}
