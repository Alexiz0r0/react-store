import style from './Hero.module.css';

import { HeroProps } from '../interfaces/HeroProps.interface';

// interface Props {
//   firstMsg: string;
//   secondMsg: string;
// }

const Hero: React.FC<HeroProps> = ({ firstMsg, secondMsg }) => {
  return (
    <>
      <section id='hero' className={`${style.hero} h-[200px] flex justify-start items-center`}>
        <div className='mx-4 max-w-[1220px]'>
          <div className='text-white flex flex-col'>
            <span className='text-2xl'>{firstMsg}</span>
            <span className='text-6xl font-bold'>{secondMsg}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
