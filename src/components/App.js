import '../styles/main.scss';
import '../images/blackboard.jpg';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('pepino');
  const [userLetters, setUserLetter] = useState([]);
  console.log(userLetters);
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((word, idx) => {
      return (
        <li key={idx} className="letter">
          {userLetters.map((letter) => {
            return letter === word ? letter : '';
          })}
        </li>
      );
    });
  };
  const renderErrorLetters = () => {
    userLetters.filter((letter) => {
      return letter !== word;
    }).map;
  };
  const handleClick = () => {
    if (numberOfErrors > 13) {
      setErrors(0);
    } else {
      setErrors(numberOfErrors + 1);
    }
  };
  const handleLastLetter = (ev) => {
    //setLastLetter(ev.target.value);
    const input = ev.target.value;
    const abc = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    if (abc.test(input) || input === '') {
      setLastLetter(input);
      if (input !== '') {
        setUserLetter([...userLetters, input]);
      }
    } else {
      setLastLetter('');
    }
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className='letter'>k</li>
              <li className='letter'>a</li>
              <li className='letter'></li>
              <li className='letter'>a</li>
              <li className='letter'>k</li>
              <li className='letter'>r</li>
              <li className='letter'></li>
              <li className='letter'>k</li>
              <li className='letter'>e</li>
              <li className='letter'>r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters}
              {/*<li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
            <li className="letter">x</li>*/}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleLastLetter}
              value={lastLetter}
            />
          </form>
          <button onClick={handleClick}>Incrementar</button>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
