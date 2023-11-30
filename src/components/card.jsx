import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, name, status,category, starNumber, job, videoNumber, callNumber, language, skills,showedSkillsNumber, price }) {
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < starNumber; i++) {
      stars.push(
        <i key={i} className="fa-solid fa-star text-blueOne text-center"></i>
      );
    }

    return stars;
  };

  return (
    <div>
      <div className="generalCard bg-white border w-80 text-center ml-5 rounded-md p-4 h-full justify-between flex flex-col px-4 py-4 min-w-xs max-w-md">
        <div className='mb-3 flex h-full flex-col justify-between'>
          <div>
            <div className='imageArea w-full flex flex-col items-center justify-center'>
              <img
                src={image}
                className={`w-28 rounded-full ${status ? `border-2 ${status === 'Çevrim içi' ? 'border-blueOne' : 'border-redOne'}` : ''}`}
                alt=""
              />
              {status && (
                <span className={`status bg-lightBlue ${status === 'Çevrim içi' ? 'text-blueOne' : 'text-redOne'} px-3 py-1 rounded-2xl text-sm border-${status === 'Çevrim içi' ? 'blueOne' : 'redOne'} border relative bottom-3.5`}>
                  {status}
                </span>
              )}
            </div>
            <div className='starArea'>
              {renderStars()}
            </div>
            <div className='nameArea mt-2'>
              <h3 className='text-center font-semibold'>{name}</h3>
            </div>
            <div className='jobArea mt-2'>
              <h4 className='text-center font-thin text-gray-600 text-sm'>{job}</h4>
            </div>
            <div className='infoArea flex justify-center mt-2'>
              <div className='videoCall ml-2'>
                <i className="fa-solid fa-video text-blueOne"></i>
                <span className='ml-2'>{videoNumber}</span>
              </div>
              <div className='call ml-2'>
                <i className="fa-solid fa-phone text-blueOne"></i>
                <span className='ml-2'>{callNumber}</span>
              </div>
              <div className='language ml-2'>
                <i className="fa-solid fa-globe text-blueOne"></i>
                <span className='ml-2'>{language}</span>
              </div>
            </div>
            <div className='skillsArea mt-2 flex flex-wrap justify-center text-sm'>
              {skills.slice(0, showedSkillsNumber).map((skill, index) => (
                <Link className='  m-1 w-max  my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-myBold text-themeBlack hover:border-transparent hover:bg-gray-100' key={index}>{skill}</Link>
              ))}
            </div>
          </div>
          <div className='educationAndSertificateArea'>
            <button className=' font-semibold border-b-2 p-2.5'>Eğitim ve Sertifikaları Gör <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className='priceArea flex text-center justify-center m-3'>
          <h4 className='font-semibold text-sm'>₺{price}/Seans</h4>
          <h4 className='ml-2 text-sm'> (Minimum Tutar)</h4>
        </div>
        <div className='startButtonArea'>
          <button className='bg-blueOne text-white px-20 py-2 rounded-3xl text-sm'>Hemen Başla</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
