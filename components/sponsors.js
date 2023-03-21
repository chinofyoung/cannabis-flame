import Link from "next/link";
import ContainerFull from "./containerFull";
import Container from "./container";

export default function Sponsors() {
  return (
    <ContainerFull>
      <Container>
        <ul className="flex w-full gap-4 overflow-x-auto py-4 md:gap-8">
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/1.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/2.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/3.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/4.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/5.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/6.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/7.png" />
            </Link>
          </li>
          <li className="min-w-[80px]">
            <Link href="">
              <img src="/images/sponsors/8.png" />
            </Link>
          </li>
        </ul>
      </Container>
    </ContainerFull>
  );
}
