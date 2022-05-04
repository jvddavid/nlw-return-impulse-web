/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
FeedBackTypeStep.tsx (c) 2022
Desc: description
Created:  2022-05-03T21:37:42.493Z
Modified: 2022-05-04T01:21:09.009Z
*/

import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps {
  onFeedBackTypeChanged: (feedbackType: FeedBackType) => void;
}

export function FeedBackTypeStep({ onFeedBackTypeChanged }: FeedBackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <main className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center justify-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500"
            onClick={() => onFeedBackTypeChanged(key as FeedBackType)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="text-xl leading-6">{value.title}</span>
          </button>
        ))}
      </main>
    </>
  )
}
