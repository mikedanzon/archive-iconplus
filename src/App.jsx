import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [ready, setReady] = useState(false);
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  const [answerFour, setAnswerFour] = useState('');
  const [answerFive, setAnswerFive] = useState('');
  const [score, setScore] = useState('');

  const onSubmitButton = () => {
    if (
      !answerOne ||
      !answerTwo ||
      !answerThree ||
      !answerFour ||
      !answerFive
    ) {
      return toast.error('you have to answer all question first!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (score) {
      return toast.error(
        'Refresh the page if you want to take the test again!',
        {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    toast.info(
      'Congrats on finishing the test! Calculating your score now...',
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    let finalScore = 0;
    if (answerOne === 'benar') {
      finalScore += 20;
    }
    if (answerTwo === 'benar') {
      finalScore += 20;
    }
    if (answerThree === 'benar') {
      finalScore += 20;
    }
    if (answerFour === 'benar') {
      finalScore += 20;
    }
    if (answerFive === 'benar') {
      finalScore += 20;
    }
    setTimeout(() => {
      setScore(finalScore);
    }, 3000);
    // value true = benar
  };

  const onClickWait = () => {
    return toast.warn('Okay, get yourself ready before taking the test!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="outside-wrapper">
        <div className="inside-wrapper">
          <div className="quiz-title">Welcome to Max simple quiz test</div>
          <div
            className="quiz-ready"
            style={ready ? { display: 'none' } : { display: 'block' }}
          >
            <div className="quiz-ready-text">
              Are you ready to take the quiz ?
            </div>
            <div className="quiz-ready-button">
              <button onClick={() => setReady(true)}>Let's GO!</button>
              <button onClick={onClickWait}>Please wait!</button>
            </div>
          </div>
          <div
            className="quiz-main"
            style={ready ? { display: 'block' } : { display: 'none' }}
          >
            <div className="quiz">
              <div className="quiz-text">
                Inside which HTML element do we put the JavaScript?
              </div>
              <div className="quiz-option">
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizone"
                  onChange={(e) => setAnswerOne(e.target.value)}
                />
                &nbsp;
                {`<javascript>`}
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizone"
                  onChange={(e) => setAnswerOne(e.target.value)}
                />
                &nbsp;
                {`<scripting>`}
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizone"
                  onChange={(e) => setAnswerOne(e.target.value)}
                />
                &nbsp;
                {`<js>`}
                <input
                  type="radio"
                  value="benar"
                  name="quizone"
                  onChange={(e) => setAnswerOne(e.target.value)}
                />
                &nbsp;
                {`<script>`}
              </div>
            </div>
            <div className="quiz">
              <div className="quiz-text">
                Which built-in method sorts the elements of an array?
              </div>
              <div className="quiz-option">
                <input
                  type="radio"
                  value="cobalagi"
                  name="quiztwo"
                  onChange={(e) => setAnswerTwo(e.target.value)}
                />
                &nbsp; changeOrder(order)
                <input
                  type="radio"
                  value="cobalagi"
                  name="quiztwo"
                  onChange={(e) => setAnswerTwo(e.target.value)}
                />
                &nbsp; order()
                <input
                  type="radio"
                  value="benar"
                  name="quiztwo"
                  onChange={(e) => setAnswerTwo(e.target.value)}
                />
                &nbsp; short()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quiztwo"
                  onChange={(e) => setAnswerTwo(e.target.value)}
                />
                &nbsp; None of the above
              </div>
            </div>
            <div className="quiz">
              <div className="quiz-text">
                Which of the following function of Array object removes the last
                element from an array and returns that element?
              </div>
              <div className="quiz-option">
                <input
                  type="radio"
                  value="benar"
                  name="quizthree"
                  onChange={(e) => setAnswerThree(e.target.value)}
                />
                &nbsp; pop()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizthree"
                  onChange={(e) => setAnswerThree(e.target.value)}
                />
                &nbsp; push()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizthree"
                  onChange={(e) => setAnswerThree(e.target.value)}
                />
                &nbsp; join()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizthree"
                  onChange={(e) => setAnswerThree(e.target.value)}
                />
                &nbsp; map()
              </div>
            </div>
            <div className="quiz">
              <div className="quiz-text">
                Which of the following function of String object returns the
                calling string value converted to upper case while respecting
                the current locale?
              </div>
              <div className="quiz-option">
                <input
                  type="radio"
                  value="benar"
                  name="quizfour"
                  onChange={(e) => setAnswerFour(e.target.value)}
                />
                &nbsp; toLocaleUpperCase()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfour"
                  onChange={(e) => setAnswerFour(e.target.value)}
                />
                &nbsp; toUpperCase()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfour"
                  onChange={(e) => setAnswerFour(e.target.value)}
                />
                &nbsp; toString()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfour"
                  onChange={(e) => setAnswerFour(e.target.value)}
                />
                &nbsp; substring()
              </div>
            </div>
            <div className="quiz">
              <div className="quiz-text">
                Which of the following function of Array object adds one or more
                elements to the front of an array and returns the new length of
                the array?
              </div>
              <div className="quiz-option">
                <input
                  type="radio"
                  value="benar"
                  name="quizfive"
                  onChange={(e) => setAnswerFive(e.target.value)}
                />
                &nbsp; unshift()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfive"
                  onChange={(e) => setAnswerFive(e.target.value)}
                />
                &nbsp; sort()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfive"
                  onChange={(e) => setAnswerFive(e.target.value)}
                />
                &nbsp; splice()
                <input
                  type="radio"
                  value="cobalagi"
                  name="quizfive"
                  onChange={(e) => setAnswerFive(e.target.value)}
                />
                &nbsp; toString()
              </div>
            </div>
          </div>
          <div
            className="quiz-info"
            style={ready ? { display: 'block' } : { display: 'none' }}
          >
            After you are done and sure 100% with your answer for the quiz,
            press the button below
          </div>
          <div
            className="quiz-submit-button"
            style={ready ? { display: 'block' } : { display: 'none' }}
          >
            <button onClick={onSubmitButton}>Submit</button>
          </div>
          <div
            className="quiz-score"
            style={score ? { display: 'block' } : { display: 'none' }}
          >
            Thank you for using our quiz! Your score is: {score}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
