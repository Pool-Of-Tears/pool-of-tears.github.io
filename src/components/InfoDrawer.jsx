import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import ChangelogViewer from './Changelog';
import { IconBrandAndroid, IconBrandGithub, IconBrandGooglePlay } from '@tabler/icons-react';
import { githubFetch, fdroidFetch } from '../lib/fetch';
import { strings } from '../lib/strings';

export function Drawers({ type }) {
  const { greenStashApkGithubUrl, myneApkGithubUrl } = githubFetch();
  const { greenStashApkFdroidUrl, myneApkFdroidUrl } = fdroidFetch();

  if (type === 'greenStash') {
    return <InfoDrawer type={type} apkGithubUrl={greenStashApkGithubUrl} apkFdroidUrl={greenStashApkFdroidUrl} />;
  }

  if (type === 'myne') {
    return <InfoDrawer type={type} apkGithubUrl={myneApkGithubUrl} apkFdroidUrl={myneApkFdroidUrl} />;
  }

  return null; // or return a default drawer
}

export function InfoDrawer({ type, apkGithubUrl, apkFdroidUrl }) {
  const drawerStrings = strings[type];
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarFallback>{drawerStrings.avatarFallback}</AvatarFallback>
            <AvatarImage src={`src/assets/${type}/${type}-icon.heif`} />
          </Avatar>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{drawerStrings.title}</DrawerTitle>
            <DrawerDescription>{drawerStrings.description}</DrawerDescription>
            <ChangelogViewer repo={type} />
          </DrawerHeader>
        </div>
        <div className="p-4">
          <DrawerFooter>
            <div className="flex flex-col md:justify-between md:flex-row">
              <a href={drawerStrings.playStoreLink} className="flex-grow mb-2 md:mb-0 md:ml-1">
                <Button>
                  <IconBrandGooglePlay size={18} className="mr-1" />
                  Play Store
                </Button>
              </a>
              <a href={apkFdroidUrl} className="flex-grow mb-2 md:mb-0 md:ml-1 md:mr-1">
                {/* <a
                href={drawerStrings.fdroidLink}
                className="flex-grow mb-2 md:mb-0 md:ml-1 md:mr-1"
              > */}
                <Button>
                  <IconBrandAndroid size={18} className="mr-1" />
                  F-Droid
                </Button>
              </a>
              <a href={apkGithubUrl} className="flex-grow mb-2 md:mb-0 md:mr-1">
                <Button>
                  <IconBrandGithub size={18} className="mr-1" />
                  Github
                </Button>
              </a>
            </div>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
