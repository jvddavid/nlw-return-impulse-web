/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Widget.tsx (c) 2022
Desc: description
Created:  2022-05-02T19:50:41.297Z
Modified: 2022-05-02T20:36:39.840Z
*/

import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {

  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello World</Popover.Panel>
      <Popover.Button className="text-white bg-brand-500 rounded-full px-3 h-12 flex items-center group ">
        <ChatTeardropDots className="w-6 h-6 " weight="bold" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-fit transition-all duration-500 ease-linear ">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
