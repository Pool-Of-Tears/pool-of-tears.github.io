import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { IconBrandAndroid, IconBrandGithub, IconBrandGooglePlay } from "@tabler/icons-react"
import { githubFetch, fdroidFetch } from "../lib/fetch"

export function GreenstashDrawer() {
  const { greenStashApkGithubUrl } = githubFetch();
  // const { greenStashApkFdroidUrl } = fdroidFetch();
  return (
    <Drawer>
      <DrawerTrigger asChild >
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarFallback>Greenstash Logo</AvatarFallback>
            <AvatarImage src="src/assets/greenstash/greenstash-icon.heif" alt="Greenstash Logo" />
          </Avatar>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Greenstash</DrawerTitle>
            <DrawerDescription>Set your budget goals with Greenstash!</DrawerDescription>
          </DrawerHeader>
        </div>
        <div className="p-4">
          <DrawerFooter>
            <div className="flex flex-col md:justify-between md:flex-row">
              <a 
                href={greenStashApkGithubUrl}
                className="flex-grow mb-2 md:mb-0 md:mr-1"
              >
                <Button >
                  <IconBrandGithub size={18} className="mr-1"/>
                  Github
                </Button>
              </a>
              {/* <a href={greenStashApkFdroidUrl}> */}
              <a 
                href="https://f-droid.org/en/packages/com.starry.greenstash/"
                className="flex-grow mb-2 md:mb-0 md:ml-1 md:mr-1"
              >
                <Button>
                  <IconBrandAndroid size={18} className="mr-1"/>
                  F-Droid
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.starry.greenstash&pcampaignid=web_share"
                className="flex-grow mb-2 md:mb-0 md:ml-1"
              >
                <Button>
                  <IconBrandGooglePlay size={18} className="mr-1"/>
                  Play Store
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
  )
}

export function MyneDrawer() {
  const { myneApkGithubUrl } = githubFetch();
  // const { myneApkFdroidUrl } = fdroidFetch();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarFallback>Myne Logo</AvatarFallback>
            <AvatarImage src="src/assets/myne/myne-icon.heif" alt="Myne Logo" />
          </Avatar>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Myne</DrawerTitle>
            <DrawerDescription>Get the b</DrawerDescription>
          </DrawerHeader>
        </div>
        <div className="p-4">
          <DrawerFooter>
            <div className="flex flex-col md:flex-row">
              <a 
                href={myneApkGithubUrl} 
                className="flex-grow mb-2 md:mb-0 md:mr-1"
              >
                <Button>
                  <IconBrandGithub size={18} className="mr-1"/>
                  Github
                </Button>
              </a>
              {/* <a href={myneApkFdroidUrl}> */}
              <a 
                href="https://f-droid.org/en/packages/com.starry.myne/" 
                className="flex-grow mb-2 md:mb-0 md:ml-1 md:mr-1"
              >
                <Button>
                  <IconBrandAndroid size={18} className="mr-1"/>
                  F-Droid
                </Button>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.starry.myne&pcampaignid=web_share" 
                className="flex-grow mb-2 md:mb-0 md:ml-1"
              >
                <Button>
                  <IconBrandGooglePlay size={18} className="mr-1"/>
                  Play Store
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
  )
}
