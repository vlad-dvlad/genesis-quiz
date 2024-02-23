import { create } from 'zustand';
import { IAnswer } from '../types/answer.types';
import { persist } from 'zustand/middleware';

interface AnswerData {
  answer: IAnswer;
  setAnswer: (value: IAnswer) => void;
}

export const useAnswerStore = create<AnswerData>()(
  persist(
    (set) => ({
      answer: {} as IAnswer,
      setAnswer: (answer) => set(() => ({ answer }))
    }),
    {
      name: 'quiz_data'
    }
  )
);
