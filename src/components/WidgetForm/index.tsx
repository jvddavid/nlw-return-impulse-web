/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
WidgetForm.tsx (c) 2022
Desc: description
Created:  2022-05-03T20:41:45.428Z
Modified: 2022-05-04T03:04:19.090Z
*/
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma balão de pensamento'
    }
  }
}

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);


  function onRestartFeedbackRequest() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        !feedbackSent ? (
          <>
            {!feedbackType ? (
              <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType} />
            ) : (
              <FeedBackContentStep onFeedBackSent={setFeedbackSent} feedbackType={feedbackType} onRestartFeedbackRequest={onRestartFeedbackRequest} />
            )}
          </>
        ) : (
          <FeedBackSuccessStep onRestartFeedbackRequest={onRestartFeedbackRequest} />
        )
      }
      <footer className="text-xs text-neutral-400">
        Feito com <span className="text-red-600">❤</span> pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}
