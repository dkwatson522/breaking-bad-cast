const CharacterItem = ({ item }) => {
  const character_occupation = item.occupation.join(', ')
  // console.log(character_occupation)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt=''/>
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
            <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
            <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
            <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
            <strong>Status:</strong> {item.status}
            </li>
            <li>
            <strong>Occupation:</strong> {character_occupation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
