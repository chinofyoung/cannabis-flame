import ContainerFull from "./containerFull";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <ContainerFull className="bg-slate-900">
      <Container>
        <footer className="flex flex-col gap-8 py-8">
          <div className="flex flex-col md:grid md:grid-cols-4">
            <nav className="mb-8 flex flex-col gap-2 md:mb-0">
              <h3 className="text-lg font-bold uppercase text-white">
                Resources
              </h3>
              <Link href="">
                <span className="text-sm text-white">FAQs</span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Payment & Delivery Information
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Legal Use of Cannabis
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">Product Recall</span>
              </Link>
            </nav>
            <nav className="mb-8 flex flex-col gap-2 md:mb-0">
              <h3 className="mb-2 text-lg font-bold uppercase text-white">
                Company
              </h3>
              <Link href="">
                <span className="text-sm text-white">FAQs</span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Payment & Delivery Information
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Legal Use of Cannabis
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">Product Recall</span>
              </Link>
            </nav>
            <nav className="mb-8 flex flex-col gap-2 md:mb-0">
              <h3 className="mb-2 text-lg font-bold uppercase text-white">
                Policies
              </h3>
              <Link href="">
                <span className="text-sm text-white">FAQs</span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Payment & Delivery Information
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Legal Use of Cannabis
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">Product Recall</span>
              </Link>
            </nav>
            <nav className="mb-8 flex flex-col gap-2 md:mb-0">
              <h3 className="mb-2 text-lg font-bold uppercase text-white">
                Contact
              </h3>
              <Link href="">
                <span className="text-sm text-white">FAQs</span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Payment & Delivery Information
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">
                  Legal Use of Cannabis
                </span>
              </Link>
              <Link href="">
                <span className="text-sm text-white">Product Recall</span>
              </Link>
            </nav>
          </div>
          <p className="text-sm text-white md:text-right">
            © Copyright 1998 - 2023 TheDuftCompany.com
          </p>
        </footer>
      </Container>
    </ContainerFull>
  );
}
