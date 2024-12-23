import { socials } from "@data/metadata";
import { SocialIcon, TSocialKeys } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {Object.entries(socials).map(([social, link]) => (
            <SocialIcon kind={social as TSocialKeys} href={link} className="size-6" key={link} size={24}/>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Sleek Templates, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
