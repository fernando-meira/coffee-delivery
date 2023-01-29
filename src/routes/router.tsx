import { Routes, Route } from 'react-router-dom';

import { Home, Checkout, Success } from '~/pages';
import { DefaultLayout } from '~/layout/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
