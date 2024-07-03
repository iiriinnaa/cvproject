
export default function DisplayResume({ publishedData }) {

    // get general info object
    const generalInfo = publishedData.filter(data => 
        data.id === 0
    );

    // const experiences = publishedData.filter(data =>
    //     data.id > 0
    // );
    // console.log(experiences)

return (
    <>
    <div className="cv-section">
        {generalInfo.map(general => (
            <>
                <p>{general.name}</p>
                <p>{general.email}</p>
                <p>{general.school}</p>
                <p>{general.major}</p>
                <p>{general.graduation}</p>
            </>
        ))}
    </div>
    </>
)
}