import React, {useState, useMemo} from "react"
import {setPlayer} from './game_state'
import { navigate } from 'gatsby'

const getValue2Opt = (options) => {
  const map = {}
  for(let i=0; i<options.length; ++i){
    map[options[i].value] = options[i]
  }
  return map
}

const SimpleRadio = ({options , name, className, selected, onChange}) => {
  const value2opt = useMemo(()=>getValue2Opt(options),[options])
  return(
    <div className={className}>
      {options.map(opt => (
        <label for={opt.value} key={opt.value}>
          <input type='radio' name={name} id={opt.value} value={opt.value} checked={opt.value === selected.value} onChange={(e) => onChange(value2opt[e.target.value])}  />
          <p>{opt.label}</p>
        </label>
      ))}
    </div>
  )
}

const genOptions = [
  {value:'mage', label:'mighty mage'},
  {value:'witch', label:'wicked witch'},
  {value:'magician', label:'non-binary friendly magician'},
]

const initGenderOption = {value:'magician', label:'non-binary friendly magician'}

const startGame = (name,gender,invalidFields,setInvalidFields) => {
  if(name == ''){
    if(invalidFields!=`A great ${gender.value} must have a name!`)
      setInvalidFields(`A great ${gender.value} must have a name!`)
  } else if(!genOptions.map(({value, label})=>label).includes(gender.label)){
    setInvalidFields("Don't play smart with me, you must choose a gender")
  } else {
    setPlayer(name,gender.label)
    navigate('/level-1')
  }
}

const ChooseCharacter = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState(initGenderOption)
  const [invalidFields, setInvalidFields] = useState();

  return(
    <>
    <label for="name">
        <p>Choose your name</p>
  			<input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
  	</label>
    <SimpleRadio options={genOptions} name='gender' className='gen-radio' selected={gender} onChange={setGender} />
    <button onClick={(e)=>startGame(name,gender,invalidFields,setInvalidFields)}>Start the game!</button>
    {invalidFields}
    </>
  )
}

export default ChooseCharacter
