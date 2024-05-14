import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "src/components/ui/drawer";
import { Button } from "src/components/ui/button";
import { Wrench } from "lucide-react";
import { Input } from "../../ui/input";
import { useState } from "react";

export function Setup({ setup, setSetup }) {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("e.currentTarget", e);
    setSetup({
      apiKey: e.currentTarget.elements.namedItem("apiKey").value,
      pseudo: e.currentTarget.elements.namedItem("pseudo").value,
    });
    setIsOpen(false);
  };
  return (
    <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Wrench />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <form onSubmit={onSubmit}>
          <DrawerHeader>
            <DrawerTitle>Setup</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            <Input
              type="text"
              name="apikey"
              id="apiKey"
              placeholder="API Key"
            />
            <Input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
          </div>
          <DrawerFooter>
            <Button type="submit">Save</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
