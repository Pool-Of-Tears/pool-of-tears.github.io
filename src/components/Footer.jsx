import { IconBrandGithubFilled, IconBrandTelegram } from '@tabler/icons-react';
import { strings } from '../lib/strings';

const ContactLink = ({ href, icon: Icon, label }) => (
  <a href={href} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
    <Icon className="hidden md:block" size={20} />
    <Icon className="block md:hidden mx-2" size={30} />
    <span className="sr-only">{label}</span>
  </a>
);

const s = strings.navbar.navItems;

export const Footer = () => (
  <div className="mx-auto w-full bg-violet-300 dark:bg-background">
    <div className="p-4 md:flex md:items-center  md:justify-between">
      <div className="text-center md:text-left">
        <span className="text-sm text-gray-800 dark:text-gray-100">
          © 2024 <a href="https://pooloftears.in">Pool-Of-Tears™</a>. All Rights Reserved.
        </span>
      </div>
      <div className="flex justify-center md:justify-start mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
        <ContactLink href={s.contact.socials[0].link} icon={IconBrandGithubFilled} label={s.contact.socials[0].title} />
        <ContactLink href={s.contact.socials[1].link} icon={IconBrandTelegram} label={s.contact.socials[1].title} />
      </div>
    </div>
  </div>
);

export default Footer;
