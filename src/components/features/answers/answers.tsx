import { Drawer, DrawerContent, DrawerTrigger } from "src/components/ui/drawer";
import { Button } from "../../ui/button";
import { useState } from "react";

export function Answers({ answers, setUserPrompt }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DrawerTrigger asChild>
        <Button size="sm" variant="default" className="w-full">
          See answers
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-y-2 overflow-y-auto p-4">
          {answers.map((answer, i) => (
            <Button
              key={i}
              onClick={() => {
                setUserPrompt(i + 1);
                setIsOpen(false);
              }}
              className="text-left font-normal"
            >
              {answer}
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
