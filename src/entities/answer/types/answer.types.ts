export type ILanguage = 'en' | 'es' | 'fr' | 'de';

export interface IAnswer {
  language: string;
  languageCode: ILanguage;
  gender: string;
  age: string;
  hateCriterias: string[];
  favTopics: string[];
  email: string;
}
