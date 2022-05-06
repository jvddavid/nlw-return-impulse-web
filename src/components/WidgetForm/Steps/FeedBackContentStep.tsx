/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
FeedBackContentStep.tsx (c) 2022
Desc: description
Created:  2022-05-03T21:37:59.838Z
Modified: 2022-05-06T19:33:15.695Z
*/

import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedBackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedBackContentStepProps {
  feedbackType: FeedBackType;
  onRestartFeedbackRequest: () => void;
  onFeedBackSent: (sent: boolean) => void;
}

export function FeedBackContentStep({ feedbackType, onRestartFeedbackRequest, onFeedBackSent }: FeedBackContentStepProps) {

  const feedbackTypeData = feedBackTypes[feedbackType];

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  async function handleSubmitFeedBack(e: FormEvent) {
    setIsSendingFeedback(true);
    e.preventDefault();

    await api.post('/feedbacks', {
      type: feedbackType,
      screenshot,
      comment
    })

    setIsSendingFeedback(false);
    onFeedBackSent(true);
  }

  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onRestartFeedbackRequest}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex gap-2 items-center">
          <img className="h-6 w-6" src={feedbackTypeData.image.source} alt={feedbackTypeData.image.alt} />
          {feedbackTypeData.title}
        </span>
        <CloseButton />
      </header>
      <main className="w-full">
        <form className="my-4 w-full" onSubmit={handleSubmitFeedBack}>
          <textarea
            className="sm:min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-opacity-50 focus:ring-one resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..." required onChange={e => setComment(e.target.value)} />
          <footer className="flex gap-2 mt-2">
            <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />
            <button
              type="submit"
              disabled={!comment.trim().length || isSendingFeedback}
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              {
                isSendingFeedback ? <Loading /> : "Enviar feedback"
              }
            </button>
          </footer>
        </form>
      </main>
    </>
  )
}
