import NavBar from '../components/navbar/NavBar';
import Incrementer from '../components/incrementer/Incrementer';
import Logger from '../components/logger/Logger';
import ContextWidget from '../components/context/ContextWidget'

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <Incrementer />
        <Logger />
        <ContextWidget />
      </div>
    </div>
  );
};
export default Home;
