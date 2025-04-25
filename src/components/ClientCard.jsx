const ClientCard = ({ client }) => {
  return (
    // <div className="overflow-hidden py-[15px] px-4 bg-white rounded-md">
    <a
      href={client.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg shadow-md shadow-black hover:scale-105 transition-all duration-500 bg-cover bg-center  flex flex-col justify-center items-center text-center cursor-pointer`}
    >
      <img className="rounded-md" src={client.img} />
    </a>
    // </div>
  );
};

export default ClientCard;
