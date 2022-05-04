/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
CloseButton.tsx (c) 2022
Desc: description
Created:  2022-05-03T21:00:22.457Z
Modified: 2022-05-03T21:04:08.730Z
*/

import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fecha Formulário de feedback">
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  )
}
