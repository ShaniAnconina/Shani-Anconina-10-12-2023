import './assets/scss/styles.scss'
import { Route, Routes } from "react-router-dom"
import { AppHeader } from './cmps/app-header';
import { FavoritesPage } from './pages/favorites';
import { HomePage } from './pages/home';

export function App() {
  return (
    <div className="app main-layout full">
      <AppHeader />

      {/* <main className="full"> */}
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<FavoritesPage />} path="/favorites" />
        </Routes>
      {/* </main> */}

    </div>
  );
}