// import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  price: number;
  images: string;
  colors: string;
}

const ProductCard: React.FC<Props> = ({ id, title, colors, price, images }) => {
  return (
    <>
      <Link to={'/details/' + id} className='hover:opacity-50'>
        <article className='max-w-[295px] lg:w-full overflow-hidden bg-slate-100 rounded-xl'>
          <img src={images} alt={id} className='w-full h-[270px] bg-cover' />
          <div className='p-5'>
            <span className='text-lg font-bold block'>{title}</span>
            <span className='text-sm font-light block text-zinc-500'>{colors}</span>
          </div>
          <div className='flex justify-between items-center p-5'>
            <span className='text-base font-normal text-indigo-600'>
              {price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
            <span className='text-base font-normal text-green-500'>50% off</span>
          </div>
          <div className='text-xs font-normal text-zinc-400 p-5'>
            Incluye impuesto País y percepción AFIP
          </div>
        </article>
      </Link>
    </>
  );
};

export default ProductCard;
