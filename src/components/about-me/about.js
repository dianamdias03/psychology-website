import './about.css';
import about_img from '../../img/about_img.png';

export function About() {
  return (
    <div className='background'>
      <div className='main-decor'>
        <div className='decor-2-mobile'>
          <div className='info'>
            <h1>Psicóloga Caroline Souza</h1>
            <p>There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, 
              by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
        <br/>
        <div className='grid-main'>
            <div>
                <div className='decor-1'></div>
                <img className='img_main' src={about_img} alt='main'></img>
            </div>
            <div className='decor-2'>
              <div className='info'>
                <h1>Psicóloga Caroline Souza</h1>
                <p>There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, 
                  by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}