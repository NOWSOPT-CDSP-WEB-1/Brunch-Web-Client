import Apply from '@pages/apply/Apply';
import Book from '@pages/book/Book';
import Home from '@pages/home/Home';
import LibraryPage from '@pages/library/page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/library',
      element: <LibraryPage />,
    },
    {
      path: '/apply',
      element: <Apply />,
    },
    { path: '/book/:id', element: <Book /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data, i) => (
          <Route key={`route-${i}`} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
