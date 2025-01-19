// pages/index.tsx

import Header from '../app/components/header';
import Footer from '../app/components/footer';

const Home = () => {
  return (
    <div>
      <Header />

      <section>
        <h2>Welcome to the Home Page</h2>
        <p>This is the main landing page of our website.</p>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
