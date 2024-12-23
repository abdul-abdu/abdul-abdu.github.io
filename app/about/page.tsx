import { SocialIcon, TSocialKeys } from "@components/icons";
import { socials } from "@data/metadata";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen max-w-7xl">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image src="/me.jpg" alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Abdug&apos;affor Abdurahim</h3>
            <div className="text-gray-500 dark:text-gray-400">Sowftware Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">Danads</div>
            <div className="flex space-x-3 pt-6">
              {Object.entries(socials)
                .slice(0, 5)
                .map(([social, link]) => (
                  <SocialIcon kind={social as TSocialKeys} href={link} className="size-8" key={link} size={32} />
                ))}
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            Passionate Sowftware Engineer.
          </div>
        </div>
      </div>
    </>
  );
}
