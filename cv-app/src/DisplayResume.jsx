
export default function DisplayResume({ publishedData }) {
return (
    <>
      <div>
          <p>Your Name: {publishedData[0].name}</p>
          <p>Your School: {publishedData[0].school}</p>
      </div>
    </>
)
}