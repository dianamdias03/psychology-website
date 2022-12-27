import './about-secundary.css';
import about_img from '../../img/about.png';

export function AboutSecundary() {
  return (
    <div className='background-about-secundary'>
      <div className='decor-secundary-1'></div>
      <img src={about_img}/>
      <div className="about-text">
        <div className="text">
          <h2>Conheça Caroline</h2>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable
          </p>
        </div>
      </div>
    </div>
  );
}