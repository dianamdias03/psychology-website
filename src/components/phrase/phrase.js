import './phrase.css';
import asp_1 from '../../img/asp_1.png';
import asp_2 from '../../img/asp_2.png';

export function Phrase() {
  return (
    <div className='background-phrase'>
      <div className='background-image'>
        <img className='asp_1' src={asp_1}/>
        <div className='sentence'>
          <p>O que é necessário para mudar uma pessoa é mudar sua consciência de si mesma.</p>
          <p className='author'>-Abraham Maslow</p>
        </div>
        <img className='asp_2' src={asp_2}/>
      </div>
    </div>
  );
}