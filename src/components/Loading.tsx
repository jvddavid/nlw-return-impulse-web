/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Loading.tsx (c) 2022
Desc: description
Created:  2022-05-04T01:43:10.966Z
Modified: 2022-05-04T01:53:56.275Z
*/

import { CircleNotch } from "phosphor-react";

interface LoadingProps {
  className?: string;
  classNameSvg?: string;
}

export function Loading({ className, classNameSvg }: LoadingProps) {
  return (
    <div className={`h-6 w-6 flex justify-center items-center overflow-hidden ${className ? className : ''}`}>
      <CircleNotch weight="bold" className={`animate-spin h-full w-full ${classNameSvg ? classNameSvg : ''}`} />
    </div>
  )
}
