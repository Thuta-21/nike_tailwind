import {offer} from '../assets/images'
import Button from '../components/Button';
import {arrowRight} from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red inline-block mt-3">
              Special
            </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae a eveniet incidunt dolorum dolorem dicta. Soluta, natus inventore. Odit, architecto maxime facere ullam in earum harum eius quod aperiam.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
          <div className='mt-11 flex flex-wrap gap-4'>
            <Button label='Shop now' iconUrl={arrowRight}/>
            <Button label='Learn more' backgroundColor='bg-white' textColor='text-slate-gray' borderColor='border-slate-gray'/>
          </div>
        </div>
    </section>
  )
}

export default SpecialOffers;