import { useState } from 'react';
import NavMenu from './NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { useTheme } from './ui/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
  IconMoon,
  IconSun,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandTelegram,
} from '@tabler/icons-react';
import greenstashIcon from '../assets/greenstash/greenstash-icon.heif';
import myneIcon from '../assets/myne/myne-icon.heif';
import { strings } from '../lib/strings';

const s = strings.navbar.navItems;

function ModeToggle() {

  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconSun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{s.theme.title}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>{s.theme.light}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>{s.theme.dark}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>{s.theme.system}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuButton() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconMap = {
    'Greenstash': greenstashIcon,
    'Myne': myneIcon,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" onClick={toggleMenu}>
          <IconMenu2 className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:-rotate-90 group-hover:scale-0" />
          <IconX className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-hover:rotate-0 group-hover:scale-100" />
          <span className="sr-only">{s.title}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-6">
        <DropdownMenuLabel>{s.projects.title}</DropdownMenuLabel>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{s.projects.project.title[0]}</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {s.projects.project.apps.map(({ title, link }) => (
                <a href={link} key={title}>
                  <DropdownMenuItem>
                    {iconMap[title] && (
                      <Avatar className="mr-2">
                        <AvatarImage src={iconMap[title]} />
                      </Avatar>
                    )}
                    {title}
                  </DropdownMenuItem>
                </a>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{s.contact.title}</DropdownMenuLabel>
        {s.contact.socials.map(({ title, link }) => (
          <a href={link} key={title}>
            <DropdownMenuItem>
              {title === 'Github' ? <IconBrandGithub className="mr-2" /> : null}
              {title === 'Telegram' ? <IconBrandTelegram className="mr-2" /> : null}
              {title}
            </DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Navbar() {
  return (
    <nav className="navbar backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="flex order-2 sm:order-1 mr-4">
          <Avatar className="transition-all hover:rotate-45">
            <AvatarFallback>POT</AvatarFallback>
            <AvatarImage src="https://github.com/Pool-Of-Tears.png" />
          </Avatar>
        </div>
        <div className="order-1 flex sm:hidden">
          <MenuButton />
        </div>
        <div className="order-2 hidden sm:flex">
          <NavMenu />
        </div>
        <div className="order-3 flex">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
