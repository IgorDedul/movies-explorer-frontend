import React from 'react';

import './AboutMe.css';
import studentPhoto from '../../../images/student.jpg';

const AboutMe = () => {
  return (
    <article className='student section section_type_main' id='student'>
      <h2 className='student__title main-title'>Студент</h2>
      <div className='student__bio-container'>
        <div className='student__text'>
          <h3 className='student__name'>Игорь</h3>
          <p className='student__profession'>
            Фронтенд-разработчик, 37 лет
          </p>
          <p className='student__about'>
            Я родился и проживаю в Таганроге, Ростовской области. Закончил
            ТТИ ЮФУ по профессии инженер-энергетик, и в течении 15 лет
            проработал в сфере энергетики. Год назад решил сменить профессию
            на фронтенд-разработчика, т.к. очень давно хотел открыть для себя
            IT сферу. У меня есть жена и сын. В свободное от работы время играю
            на бас-гитаре в рок-группе.
            <a rel='noreferrer' target='_blank' href='https://github.com/IgorDedul' className='student__link link'>Github</a>

          </p>
        </div>
        <img src={studentPhoto} alt='Игорь, фронтенд разработчик (Мое фото)' className='student__photo' />
      </div>
    </article>
  );
};

export default AboutMe;
