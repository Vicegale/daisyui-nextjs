import NavBar from '../components/navbar/NavBar';
import Incrementer from '../components/incrementer/Incrementer';
import Logger from '../components/logger/Logger';
import ContextWidget from '../components/context/ContextWidget';
import PropsWidget from '../components/props/PropsWidget';

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <Incrementer />
        <Logger />
        <ContextWidget />
        <div className="flex flex-col space-y-1 mt-1 w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
          <PropsWidget color="primary" />
          <PropsWidget color="secondary" />
          <PropsWidget color="accent" />
        </div>
      </div>
    </div>
  );
};
export default Home;
