import { Outlet } from 'react-router';
import { QuickNav } from './QuickNav';

export function RootLayout() {
  return (
    <>
      <Outlet />
      <QuickNav />
    </>
  );
}
