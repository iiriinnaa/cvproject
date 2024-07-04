
export default function DisplayResume({ publishedData }) {

    // get general info object
    const generalInfo = publishedData.filter(data => 
        data.id === 0
    );

    const experiences = publishedData.filter(data =>
        data.id > 0
    );
    // console.log(experiences)

return (
    <>
    <div className="cv-section">
        {/* general info section */}
        {generalInfo.map(general => (
            <>
                <h2>{general.name}</h2>
                <p>{general.email}</p>
                <p>{general.school}</p>
                <p>{general.major}</p>
                <p>{general.graduation}</p>
            </>
        ))}
        <br />
        <hr />
        <h3>Experience</h3>
        {/* experiences map section */}
        {experiences.map(experience => (
            <>
            <hr />
            <p>{experience.company}</p>
            <p>{experience.date}</p>
            <p>{experience.position}</p>
            {experience.responsibilities.map(task => (
                <>
                <p>{task}</p>
                </>
            ))}
          
            </>
        ))}
    </div>
    </>
)
}