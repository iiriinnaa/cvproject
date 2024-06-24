import './App.css';
import { useState } from 'react';
import DisplayResume from './DisplayResume';

const initialData = [
  {
    name: 'Irina',
    school: 'Brooklyn College',
  }
];

export default function App() {
  const [publishedData, setPublishedData] = useState(initialData);
  const [draftedData, setDraftedData] = useState(publishedData);

    // multiple updates using the latest state via
    // an updater function
  function handleInputChange(e) {
    setDraftedData((publishedData) => (
      [
      { ...publishedData[0], [e.target.name]: e.target.value }
      ]
    ));
  }

  // updates publishedData state with draft
  function handleSaveInfo() {
    setPublishedData(draftedData);    
  }

  return (
  <>
  {/* display inputs to update info */}
    <input
        name="name"
        value={draftedData[0].name}
        onChange={handleInputChange}
      />
    <br />
    <input 
        name="school" 
        value={draftedData[0].school}
        onChange={handleInputChange} />
    <br />
      <button
        onClick={handleSaveInfo}
      >Save</button>
      <button>Cancel</button>

      {/* pass published data to display component as prop */}
      <DisplayResume publishedData={publishedData} />

    </>
  )
}