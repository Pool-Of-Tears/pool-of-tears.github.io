import {
  IconBrandGithubFilled,
  IconBrandTelegram,
} from "@tabler/icons-react"

export const Footer = () => (
  <div className="mx-auto w-full bg-violet-300 dark:bg-background">
    <div className="p-4 md:flex md:items-center  md:justify-between">
      <div className="text-center md:text-left">
        <span className="text-sm text-gray-800 dark:text-gray-100">
          © 2024 <a href="https://pooloftears.in">Pool-Of-Tears™</a>. All Rights Reserved.
        </span>
      </div>
      <div className="flex justify-center md:justify-start mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <IconBrandTelegram className="hidden md:block" size={20} />
          <IconBrandTelegram className="block md:hidden mx-2" size={30} />
          <span className="sr-only">Telegram Channel</span>
        </a>
        {/* <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <IconBrandDiscordFilled className="hidden md:block" size={20} />
          <IconBrandDiscordFilled className="block md:hidden mx-2" size={30} />
          <span className="sr-only">Discord community</span>
        </a> */}
        <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <IconBrandGithubFilled className="hidden md:block" size={20} />
          <IconBrandGithubFilled className="block md:hidden mx-2" size={30} />
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
