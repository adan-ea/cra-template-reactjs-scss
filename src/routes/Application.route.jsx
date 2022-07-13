import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home.page';
import NotFound from '../pages/notFound/NotFound.page';
import Header from '../compontents/header/Header.component';
import Footer from '../compontents/footer/Footer.component';

const App = () => {
    return (
        <div className="min-h-screen bg-home dark:bg-black-bg dark:text-white transition">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Home />} />
                    <Route path="*" element={<NotFound />} /> {/* 404 */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};
export default App;
