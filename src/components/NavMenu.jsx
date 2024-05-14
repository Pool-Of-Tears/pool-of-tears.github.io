import * as React from 'react';
import { cn } from '@/lib/utils';
import { IconDropletCode, IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { strings } from '../lib/strings';

const iconMapping = {
  PoolOfTears: <IconDropletCode className="h-6 w-6 lg:h-8 lg:w-8 mb-3" />,
  Github: <IconBrandGithub className="mb-2" />,
  Telegram: <IconBrandTelegram className="mb-2" />,
};

function createListItem({ title, description, link, hasIcon }) {
  return (
    <ListItem
      key={title}
      href={link}
      className={cn(
        'grid grid-rows-[auto,1fr] h-full w-full select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md',
        hasIcon && 'grid items-center mb-1',
      )}
    >
      {hasIcon && iconMapping[title]}
      <div className="mb-2 text-lg font-medium">{title}</div>
      <div className="text-sm leading-tight text-muted-foreground">{description}</div>
    </ListItem>
  );
}

function generateListItems(items, hasIcon = false) {
  return items.map((item) => (item ? createListItem({ ...item, hasIcon }) : null));
}

function createNavigationMenuItem({ title, content, hasIcon }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul
          className={cn(
            'grid w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
            hasIcon && 'w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[500px]',
          )}
        >
          {content}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function NavMenu() {
  const s = strings.navbar.navItems;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{s.about.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="overflow-auto h-[300px] lg:h-auto lg:overflow-visible">
            <div className="grid w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ul className='mt-auto'>
                {createListItem({
                  title: s.about.org,
                  description: s.about.info[0].description,
                  link: '/',
                  hasIcon: true,
                })}
              </ul>
              <ul>{generateListItems(s.about.info)}</ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {createNavigationMenuItem({
          title: s.projects.title,
          content: generateListItems(s.projects.project),
        })}
        {createNavigationMenuItem({
          title: s.contact.title,
          content: generateListItems(s.contact.socials, true),
          hasIcon: true,
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        className={cn(
          'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <div className="text-mauve11 leading-[1.4]">{children}</div>
      </a>
    </NavigationMenuLink>
  </li>
));

ListItem.displayName = 'ListItem';

export default NavMenu;
