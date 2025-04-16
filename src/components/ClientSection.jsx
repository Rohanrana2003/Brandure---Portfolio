import ClientCard from "./ClientCard";

const ClientSection = ({ clients }) => {
  return (
    <div className="w-full px-5 md:px-10 lg:px-[100px] py-16">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
