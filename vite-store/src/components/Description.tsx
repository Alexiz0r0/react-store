// import style from './Description.module.css';

interface Props {
  title: string;
  description: string;
}

const Description: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <div className='w-full p-4 my-2.5 mx-1.5 flex flex-col'>
        <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
        <form className='mt-10'>
          <fieldset className=''>
            <label className='text-base font-bold' htmlFor='color'>
              Color
            </label>
            <select className='w-full h-[40px] rounded-lg p-2 my-2' id='color'>
              <option value='Silver'>Silver</option>
            </select>
          </fieldset>
        </form>
        <div className='mt-10'>
          <span className='text-base font-bold'>Descripción</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Description;
