import Character from 'common/types/character';

const CharacterDetails = (props: { character: Character }) => {
  const char = props.character;

  return (
    <>
      <div>
        <p>Name: {char.name}</p>
        <p>Level: {char.level}</p>
        <p>Class: {char.class}</p>
        <p>
          Weapon: {char.weapon.name} - {char.weapon.damage} dmg
        </p>
      </div>
    </>
  );
};

const CharacterBadge = (props: { character: Character; className: string }) => {
  const char = props.character;

  return (
    <>
      <div
        className={'tooltip tooltip-hover tooltip-top' + ' ' + props.className}
        data-tip="Show details"
      >
        <div
          className="card h-14 bg-primary hover:bg-secondary active:bg-accent shadow-xl place-content-between m-0.5"
          onClick={() => window['details_' + char.id].showModal()}
        >
          <p className="text-center">{char.name}</p>
          <div className="flex flex-row justify-between">
            <p className="text-center w-full mb-1">{char.level}</p>
            {
              //<p className="">{char.class}</p>
            }
          </div>
        </div>
      </div>
      {
        // TODO: Fix - Several dialogs in one page?}
      }
      <dialog id={'details_' + char.id} className="modal">
        <form method={'details_' + char.id} className="modal-box">
          <CharacterDetails character={char} />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default CharacterBadge;
