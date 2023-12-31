import NavBar from '../components/navbar/NavBar';
import Incrementer from '../components/incrementer/Incrementer';
import Logger from '../components/logger/Logger';
import ContextWidget from '../components/context/ContextWidget';
import PropsWidget from '../components/props/PropsWidget';
import TaskList from '../components/tasklist/TaskList';
import CharacterPicker from '../components/characters/CharacterPicker';
import TypeAheadSearch from 'components/typeahead/TypeAheadSearch';
import TypeAheadQuery from 'components/typeahead/TypeAheadQuery';

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <Incrementer />
        <Logger />
        <TypeAheadSearch />
        <ContextWidget />
        <div className="flex flex-col space-y-1 mt-1 w-96 m-4 p-2 border-solid border-2 border-primary rounded-md">
          <PropsWidget color="bg-primary" />
          <PropsWidget color="bg-secondary" />
          <PropsWidget color="bg-accent" />
        </div>
        <TaskList />
        <TypeAheadQuery />
        <CharacterPicker />
      </div>
    </div>
  );
};
export default Home;
