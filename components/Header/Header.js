import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-yellow-400 to-white">
      <div className="container mx-auto h-[10vh]">
        <div className="flex items-center flex-row w-full justify-evenly h-full">
          <div>
            <Image
              src="/Images/logo-main.png"
              alt="logo-main"
              width={100}
              height={100}
            />
          </div>
          <div className="right-side__content">
            <div>
              <Image
                src="/Images/placeholder.svg"
                alt="location-icon"
                width={20}
                height={20}
              />
              <p>Naselje Stevan Sinđelić br.20/4</p>
              <p>Niš, Serbia</p>
            </div>
            <div>
              <Image
                src="/Images/call.svg"
                alt="location-icon"
                width={20}
                height={20}
              />
              <p>Tel. 123/1231234</p>
              <p>Mob. 123/12-12-12</p>
            </div>
            <div>
              <Image
                src="/Images/email.svg"
                alt="location-icon"
                width={20}
                height={20}
              />
              <p>Loremipsum@Lorem.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
