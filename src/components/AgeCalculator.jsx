import React, { useState } from 'react';
import "./AgeCalculator.css"
import ImageModal from './modal/Modal';
import imageUrl from './../assets/images/images.jpeg'

const AgeCalculator = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  });

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;

    // Calculate years
    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    // Calculate remaining milliseconds after removing years
    const remainingMilliseconds = ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);

    // Calculate months
    const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));

    // Calculate remaining milliseconds after removing months
    const remainingDaysMilliseconds = remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000);

    // Calculate days
    const days = Math.floor(remainingDaysMilliseconds / (24 * 60 * 60 * 1000));
    setModalIsOpen(years<0&&months<0&&days<0?true:false)
    setAge({ years, months, days });
  };

  return (
    <div className='container'>
      <div className="content">
        <h2 style={{ marginBottom: "20px", borderBottom: " 1px solid blue", color: "yellow" }}>Age Calculator</h2>

        <div className="input">
          <label style={{ marginBottom: "20px" }} className='bold' htmlFor="birthdate">Enter your Birthdate:</label>
          <input
          style={{width:"100%"}}
            type="date"
            id="birthdate"
            value={birthdate}
            placeholder='select your birth date'
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button className="calc-btn" onClick={calculateAge}>Calculate Age</button>

        {age?.years < 0 && age?.months < 0 && age?.days < 0 == true ? <ImageModal isOpen={modalIsOpen} closeModal={closeModal} >
          <img src={imageUrl} alt="Modal Content" style={{ width: '100%', height: 'auto' }} />

        </ImageModal> :
          age.years !== null && (<div className='age-data'>
            <div className='flex flex-col'>
              <span className='numbers-container'>
                {age.years}
              </span>
              <span>
                {age.years === 1 ? 'year' : 'years'}
              </span>
            </div>

            <div className='flex flex-col'>
              <span className='numbers-container'>
                {age.months}
              </span>
              <span>
                {age.months === 1 ? 'month' : 'months'}
              </span>
            </div>

            <div className='flex flex-col'>
              <span className='numbers-container'>
                {age.days}
              </span>
              <span>
                {age.days === 1 ? 'day' : 'days'}
              </span>
            </div>

          </div>
          )}

      </div>

    </div>
  );
};

export default AgeCalculator;
