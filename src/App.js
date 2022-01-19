import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <FeedbackForm addHandler={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} removeItem={deleteFeedback} />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
