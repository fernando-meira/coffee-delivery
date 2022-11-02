import { Routes, Route } from 'react-router-dom';

import { Home, Checkout } from '~/pages';
import { DefaultLayout } from '~/layout/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
