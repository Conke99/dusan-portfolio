import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-yellow-400 to-white">
      <div className="container mx-auto h-[10vh]">
        <div className="flex items-center flex-row w-full justify-between h-full">
          <div>
            <Image
              src="/Images/logo-main.png"
              alt="logo-main"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-row">
            <Image
              src="/Images/placeholder.svg"
              alt="location-icon"
              width={20}
              height={20}
            />
            <div className="flex flex-col px-5 text-black">
              <p>Naselje Stevan Sinđelić br.20/4</p>
              <p>Niš, Serbia</p>
            </div>
            <Image
              src="/Images/call.svg"
              alt="location-icon"
              width={20}
              height={20}
              className="color-white"
            />
            <div className="flex flex-col px-5 text-black">
              <p>Tel. 123/1231234</p>
              <p>Mob. 123/12-12-12</p>
            </div>
            <Image
              src="/Images/email.svg"
              alt="location-icon"
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-center px-5 text-black">
              <p>Loremipsum@Lorem.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
