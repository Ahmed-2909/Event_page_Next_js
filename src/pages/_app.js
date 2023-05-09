import '@/styles/globals.css'
import MainLayout from '../../component/layout/Mai-layout';
import "../styles/general.sass"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
