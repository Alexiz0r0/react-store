import style from './Description.module.css';

interface Props {
  title: string;
  description: string;
}

const Description: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <div className={style['product-description-block']}>
        <h1 className={style['product-title']}>{title}</h1>
        <form className={style['product-selector']}>
          <fieldset className={style['product-fieldset']}>
            <label className={style['product-label']} htmlFor='color'>
              Color
            </label>
            <select className={style['product-select']} id='color'>
              <option value='Silver'>Silver</option>
            </select>
          </fieldset>
        </form>
        <div className={style['product-description']}>
          <span className={style['product-label']}>Descripción</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
