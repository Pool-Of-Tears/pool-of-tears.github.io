import NavMenu from './NavMenu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { useTheme } from './ui/theme-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MoonIcon, SunIcon} from '@heroicons/react/24/outline'

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container d-flex flex-row justify-content-between">
        <div className="d-flex justify-content-start">
          <Avatar className='hover:rotate-90 mr-4'>
            <AvatarFallback>POT</AvatarFallback>
            <AvatarImage src="https://github.com/Pool-Of-Tears.png" alt="avatar" />
          </Avatar>
        </div>
        <div className="d-flex justify-content-center">
          <NavMenu />
        </div>
        <div className="d-flex justify-content-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar