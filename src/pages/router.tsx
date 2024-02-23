import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import RootLayout from '../app/ui/root-layout';
import { RouteE } from '../shared/config/navigation';
import QuizLang from './quiz-lang';
import QuizGender from './quiz-gender';
import QuizAge from './quiz-age';
import QuizBookHate from './quiz-book-hate';
import QuizFavTopics from './quiz-fav-topics';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteE.HOME} element={<RootLayout />}>
      <Route path={RouteE.HOME} element={<Navigate to={RouteE.QUIZ_1} />} />
      <Route
        path={RouteE.QUIZ_1}
        element={
          <Suspense>
            <QuizLang />
          </Suspense>
        }
      />
      <Route
        path={RouteE.QUIZ_2}
        element={
          <Suspense>
            <QuizGender />
          </Suspense>
        }
      />
      <Route
        path={RouteE.QUIZ_3}
        element={
          <Suspense>
            <QuizAge />
          </Suspense>
        }
      />
      <Route
        path={RouteE.QUIZ_4}
        element={
          <Suspense>
            <QuizBookHate />
          </Suspense>
        }
      />
      <Route
        path={RouteE.QUIZ_5}
        element={
          <Suspense>
            <QuizFavTopics />
          </Suspense>
        }
      />
    </Route>
  )
);
