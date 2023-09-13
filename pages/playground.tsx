import Buttons from 'components/playground/Buttons';
import NavBar from '../components/navbar/NavBar';
import Sidebar from 'components/playground/Sidebar';

const Playground = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-row">
        <Sidebar />
        <Buttons />
      </div>
    </div>
  );
};
export default Playground;
