export type ILanguage = 'en' | 'es' | 'fr' | 'de';

export interface IAnswer {
  language: ILanguage;
  gender: string;
  age: string;
}
