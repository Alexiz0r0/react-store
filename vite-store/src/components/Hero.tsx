import style from './Hero.module.css';

interface Props {
  firstMsg: string;
  secondMsg: string;
}

const Hero: React.FC<Props> = ({ firstMsg, secondMsg }) => {
  return (
    <>
      <section id='hero' className={style.hero}>
        <div className={style['hero-container']}>
          <div className={style['title-container']}>
            <span>{firstMsg}</span>
            <span>{secondMsg}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
