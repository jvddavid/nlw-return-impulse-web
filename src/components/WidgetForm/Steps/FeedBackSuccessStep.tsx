/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
FeedBackSucessStep.tsx (c) 2022
Desc: description
Created:  2022-05-03T21:38:11.915Z
Modified: 2022-05-04T03:04:59.791Z
*/

import { CloseButton } from "../../CloseButton";

import successSvg from "../../../assets/success.svg";

interface FeedBackSuccessStepProps {
  onRestartFeedbackRequest: () => void;
}

export function FeedBackSuccessStep({ onRestartFeedbackRequest }: FeedBackSuccessStepProps) {
  return (<>
    <header>
      <CloseButton />
    </header>
    <main className="w-full flex flex-col items-center py-10 sm:w-[304px]">
      <img src={successSvg} alt="Sucesso" className="w-10 h-10 mb-4" />

      <span className="text-xl mt-2">
        Agradecemos o feedback
      </span>

      <button
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-300 focus:ring-brand-500"
        onClick={onRestartFeedbackRequest}
      >
        Quero enviar outro
      </button>
    </main>
  </>)
}
