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
import { GithubFetch, FdroidFetch } from '../lib/fetch';
import { strings } from '../lib/strings';

function DownloadButton({ href, Icon, label }) {
  return (
    <a href={href} className="flex-grow mb-2 md:mb-0 md:ml-1 md:mr-1">
      <Button className="text-md">
        <Icon size={20} className="mr-1" />
        {label}
      </Button>
    </a>
  );
}

export function Drawers({ type }) {
  const { greenStashApkGithubUrl, myneApkGithubUrl } = GithubFetch();
  const { greenStashApkFdroidUrl, myneApkFdroidUrl } = FdroidFetch();

  if (type === 'greenStash') {
    return <InfoDrawer type={type} apkGithubUrl={greenStashApkGithubUrl} apkFdroidUrl={greenStashApkFdroidUrl} />;
  }

  if (type === 'myne') {
    return <InfoDrawer type={type} apkGithubUrl={myneApkGithubUrl} apkFdroidUrl={myneApkFdroidUrl} />;
  }

  return null; // or return a default drawer
}

export function InfoDrawer({ type, apkGithubUrl, apkFdroidUrl }) {
  const s = strings[type];
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" className="w-full">
          Download
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <Avatar className="flex flex-col mx-auto h-[4rem] w-[4rem]">
              <AvatarFallback>{s.avatarFallback}</AvatarFallback>
              <AvatarImage src={`src/assets/${type}/${type}-icon.heif`} />
            </Avatar>
            <DrawerTitle>{s.title}</DrawerTitle>
            <DrawerDescription>{s.description}</DrawerDescription>
            <ChangelogViewer repo={type} />
          </DrawerHeader>
        </div>
        <div className="p-4">
          <DrawerFooter>
            <div className="flex flex-col md:justify-between md:flex-row">
              <DownloadButton href={s.playStoreLink} Icon={IconBrandGooglePlay} label="Play Store" />
              <DownloadButton href={apkFdroidUrl} Icon={IconBrandAndroid} label="F-Droid" />
              <DownloadButton href={apkGithubUrl} Icon={IconBrandGithub} label="Github" />
            </div>
            <DrawerClose asChild>
              <Button variant="outline" className="text-md">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
