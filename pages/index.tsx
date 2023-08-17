import NavBar from '../components/navbar/NavBar';
import Incrementer from '../components/incrementer/Incrementer';
import Logger from '../components/logger/Logger';
const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <Incrementer />
        <Logger />
      </div>
    </div>
  );
};
export default Home;
