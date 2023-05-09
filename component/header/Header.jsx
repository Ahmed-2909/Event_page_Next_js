import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={"pages/images/logo_black.png"}
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <h1> Home</h1>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <h1> Events</h1>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <h1> About us</h1>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
};
