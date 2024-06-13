interface Props {
  price: number;
  qty: number;
}

const CartResume: React.FC<Props> = ({ price, qty }) => {
  return (
    <>
      <div className='basis-1/4 flex flex-col gap-4 h-[250px] bg-gray-200 p-7 rounded-xl'>
        <div className='flex flex-col justify-between'>
          <h2 className='text-2xl font-bold text-center'>Resumen del pedido</h2>
          <div className='flex flex-row justify-between py-5'>
            <h3 className='text-xl font-normal'>Total</h3>
            <strong className='text-xl font-bold'>
              {(price * qty).toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </strong>
          </div>
          <small className='text-sm text-neutral-700'>
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button
          className='bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          id='buy'
          type='button'
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};

export default CartResume;
