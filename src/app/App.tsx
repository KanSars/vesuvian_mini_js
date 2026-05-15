import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { MainPage } from 'pages/MainPage';
import { CollectionsPage } from 'pages/CollectionsPage';
import { Item2Page } from 'pages/Item2Page';
import { AboutPage } from 'pages/AboutPage';
import TrainingPage from 'pages/TrainingPage/ui/TrainingPage';
import styles from './App.module.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.contentWrapper}>
          {/* <SideBar /> */}
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/training/:id" element={<TrainingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/item2" element={<Item2Page />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
