import { useState } from 'react';
import NavMenu from './NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { useTheme } from './ui/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  IconMoon,
  IconSun,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandTelegram,
} from '@tabler/icons-react';
import { strings } from '../lib/strings';

function ModeToggle() {

  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconSun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuButton() {
  const s = strings.navbar.navItems;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" onClick={toggleMenu}>
          <IconMenu2 className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:-rotate-90 group-hover:scale-0" />
          <IconX className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-hover:rotate-0 group-hover:scale-100" />
          <span className="sr-only">Navigation Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{s.about.title}</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{s.projects.title}</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {s.projects.project.map(({ title }) => (
                <DropdownMenuItem key={title}>
                  {title === 'Github' ? <IconBrandGithub /> : null}
                  {title === 'Telegram' ? <IconBrandTelegram /> : null}
                  {title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-light mw-full flex items-center py-6 px-6 fixed top-0 z-20 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="flex order-2 sm:order-1 mr-4">
          <Avatar className="transition-all hover:rotate-45">
            <AvatarFallback>POT</AvatarFallback>
            <AvatarImage src="https://github.com/Pool-Of-Tears.png" alt="avatar" />
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
