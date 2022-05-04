/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Widget.tsx (c) 2022
Desc: description
Created:  2022-05-02T19:50:41.297Z
Modified: 2022-05-03T21:04:16.333Z
*/

import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel><WidgetForm /></Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 flex items-center group ">
        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-fit transition-all duration-500 ease-linear ">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
