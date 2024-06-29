import './App.css';
import { useState } from 'react';
import DisplayResume from './DisplayResume';

const initialData = [
  {
    id: 0,
    name: 'Your Name Here',
    email: 'Your Email Here',
    school: 'Your School Here',
    major: 'Your Major Here',
    graduation: 'Your Graduation Date'
  },
  {
    id: 1,
    company: 'Company Name Here',
    position: 'Your Position Title',
    date: 'Dates Worked',
    responsibilities: 'Your Responsibilities Here',
  }
  
];

export default function App() {
  const [publishedData, setPublishedData] = useState(initialData);
  const [draftedData, setDraftedData] = useState(publishedData);
  const [isEditing, setIsEditing] = useState(false);

    // multiple updates using the latest state via
    // an updater function
  function handleInputChange(e) {
    const targetId = e.target.dataset.id;
    const targetPropName = e.target.name;
    const targetValue = e.target.value;

    setDraftedData(draftedData.map(data => {
      if ( data.id === draftedData[targetId].id ) {
        return { ...data, [targetPropName]: targetValue };
      } else {
        return data;
      }
    }));

    // setDraftedData(newObject);

  } 
  

  // updates publishedData state with draft
  function handleSaveInfo() {
    setPublishedData(draftedData); 
    setIsEditing(false);  
  }

  function handleCancel() {
    setIsEditing(false)
    setDraftedData(publishedData)
  }


  return (
  <>
  { isEditing ? (
    <>
    <div className='generalform'>
      <h3>General Info</h3>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        data-id="0"
        name="name"
        value={draftedData[0].name}
        onChange={handleInputChange}
      />
        <br />
        <label htmlFor="email">Email:</label>
        <input
        id="email"
        data-id="0"
        name="email"
        value={draftedData[0].email}
        onChange={handleInputChange} />
        <br />
      <button onClick={handleSaveInfo}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
</>
  ) : (
    <>
    <button onClick={() => setIsEditing(true)}>Edit CV</button>
    </>
  )}

      {/* pass published data to display component as prop */}
      <DisplayResume publishedData={publishedData} />

    </>
  )
}