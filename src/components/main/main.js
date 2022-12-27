import { About } from '../about-me/about';
import { AboutSecundary } from '../about-secundary/about-secundary';
import { Phrase } from '../phrase/phrase';
import './main.css';

export function Main() {
  return (
    <>
      <About></About>
      <Phrase></Phrase>
      <AboutSecundary></AboutSecundary>
    </>
  );
}