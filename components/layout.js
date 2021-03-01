import Alert from '../components/alert';
// import Footer from '../components/Footer/Footer';
import Meta from '../components/meta';

import {Footer} from '../components';

export default function Layout({preview, children}) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
