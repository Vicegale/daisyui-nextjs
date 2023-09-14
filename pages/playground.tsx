import Buttons from 'components/playground/Buttons';
import NavBar from '../components/navbar/NavBar';
import Sidebar from 'components/playground/Sidebar';
import Prompt from 'components/playground/Prompt';

const Playground = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-row">
        <Sidebar />
        <Buttons />
      </div>
      <Prompt />
    </div>
  );
};
export default Playground;
