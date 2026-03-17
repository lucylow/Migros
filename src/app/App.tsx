import { RouterProvider } from 'react-router';
import { router } from './routes';
import { QuickNav } from './components/QuickNav';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <QuickNav />
    </>
  );
}

export default App;