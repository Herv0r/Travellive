import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rocío Perea",
      occupation: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      socialMedia: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        dribbble: "https://dribbble.com/janesmith",
      },
    },
    {
      name: "Lucas Albornoz",
      occupation:
        "Web Developer, Software Developer, Python developer, Machine Learning",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      socialMedia: {
        twitter: "https://twitter.com/AlbornozLucasA1",
        linkedin: "https://www.linkedin.com/in/albornozlucas",
        github: "https://github.com/Herv0r",
      },
    },
    {
      name: "Mariana Arias",
      occupation: "Marketing Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      socialMedia: {
        twitter: "https://twitter.com/markjohnson",
        linkedin: "https://www.linkedin.com/in/markjohnson",
        medium: "https://medium.com/markjohnson",
      },
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div className="bg-white rounded-lg shadow-lg p-6" key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mt-4">
                {member.name}
              </h3>
              <p className="text-gray-600 text-center">{member.occupation}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500 mx-2"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 mx-2"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 mx-2"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
