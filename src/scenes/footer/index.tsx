import navlogo from "@/assets/navlogo.png";

function Footer() {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={navlogo} alt='logo' />
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            luctus eros sit amet erat hendrerit, non ullamcorper tortor luctus.
            Praesent at est in mauris ornare sollicitudin.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Massa orci senesctus</p>
          <p className='my-5'>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Aenean efficitur lectus</p>
          <p>(343)481-6932</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
