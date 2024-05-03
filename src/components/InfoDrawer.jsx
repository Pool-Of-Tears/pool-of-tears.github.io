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


export function GreenstashDrawer() {
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
            <Button>Download</Button>
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
            <Button>Download</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
