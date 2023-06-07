import React from 'react';
import { LucideIcon } from 'lucide-react';
import {
  categories,
  categoryIds,
  CheckedId,
  settingsStore,
} from './context/settings-store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Toggle } from './ui/toggle';
import { Icons } from './icons';

export function SettingsToggle() {
  const showSettings = settingsStore.use.showSettings();

  return (
    <div className="absolute right-0 top-0 z-50 pr-1 pt-1">
      <div className="right-0 top-[100px] z-10">
        <Toggle
          className="h-9 w-9 p-0"
          pressed={showSettings}
          onPressedChange={(pressed) => settingsStore.set.showSettings(pressed)}
        >
          <Icons.plugin className="h-6 w-6" />
        </Toggle>
      </div>
    </div>
  );
}

export function SettingsSwitch({
  // icon: Icon,
  id,
  label,
  popoverContent,
}: {
  label: string;
  id: CheckedId;
  popoverContent: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* <Switch */}
      {/*  id={id} */}
      {/*  checked={settingsStore.use.checkedId(id)} */}
      {/*  onCheckedChange={(_checked) => { */}
      {/*    settingsStore.set.setCheckedId(id, _checked); */}
      {/*  }} */}
      {/* /> */}
      {/* <Label htmlFor={id}>{label}</Label> */}

      <Toggle
        id={id}
        pressed={settingsStore.use.checkedId(id)}
        size="sm"
        className="data-[state=on]:font-semibold"
        onPressedChange={(pressed) => {
          settingsStore.set.setCheckedId(id, pressed);
        }}
      >
        {label}
      </Toggle>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="h-9 w-9 p-0">
            <Icons.chevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[265px]" side="top">
          {popoverContent}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function SettingsPanel() {
  const showSettings = settingsStore.use.showSettings();

  if (!showSettings) return null;

  return (
    <div className="absolute right-0 top-0 z-40 h-full w-[217px] border-l border-l-border">
      <div>
        <h3 className="mb-2 p-3 px-4 text-lg font-semibold">Plugins</h3>

        <Accordion type="multiple" defaultValue={categoryIds}>
          {categories.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="p-3 px-4">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="p-3 px-4">
                <div className="flex flex-col gap-1">
                  {item.children.map((child) => (
                    <SettingsSwitch
                      key={child.id}
                      id={child.id}
                      label={child.label}
                      popoverContent={child.popoverContent}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
