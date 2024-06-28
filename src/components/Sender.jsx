import React, { useState } from 'react'
import SearchExercises from './SearchExercises'
import Exercises from './Exercises'

const Sender = () => {

const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  

  return (
    <>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </>
  )
}

export default Sender
