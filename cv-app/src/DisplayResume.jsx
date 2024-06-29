
export default function DisplayResume({ publishedData }) {
return (
    <>
      <div>
          <p>{publishedData[0].name}</p>
          <p>{publishedData[0].email}</p>
      </div>


    </>
)
}