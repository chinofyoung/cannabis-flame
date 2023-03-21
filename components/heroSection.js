import Container from "./container";

export default function HeroSection() {
  return (
    <section className="relative flex h-[400px] w-full items-center md:h-[560px]">
      <div className="absolute z-10 h-full w-full bg-slate-900/30"></div>
      <img
        className="absolute h-full w-full object-cover"
        src="/images/hero.png"
      />
      <Container>
        <div className="relative z-10 flex w-full flex-col items-start gap-4 md:w-[50%]">
          <h1 className="text-5xl text-white md:text-8xl">In-Shred-ible!</h1>
          <p className="font-light text-white md:text-lg">
            From mouth-puckering sours to retro soda flavours, explore the
            lineup from our bestselling edibles brand 
          </p>
          <button className="rounded-sm bg-red-500 px-12 py-3 text-sm uppercase text-white">
            Shop Now
          </button>
        </div>
      </Container>
    </section>
  );
}
