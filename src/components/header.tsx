import Image from 'react-bootstrap/Image'

// * Assets
import desktopHeaderImage from 'src/public/assets/1920x650.png'
import mobileHeaderImage from 'src/public/assets/600x600.png'

export const Header = () => (
  <div className='relative'>
    <div className='hidden sm:flex'>
      <Image src={desktopHeaderImage} fluid className='brightness-75' />
    </div>
    <div className='flex sm:hidden'>
      <Image src={mobileHeaderImage} fluid className='brightness-75' />
    </div>

    <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center space-y-2 text-center text-white'>
      <h1 className='text-4xl sm:text-5xl'>Hello Developer!</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    </div>
  </div>
)
