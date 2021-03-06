/* eslint-disable */
const Card = ({ user }) => {
  return (
    <div className="max-w-sm bg-white border-1 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex items-center mb-4">
        <img
          alt="avatar"
          className="w-20 rounded-full border-2 border-gray-300"
          src="https://picsum.photos/seed/picsum/200"
        />
        <div id="header-text" className="leading-5 ml-6 sm">
          <h4 id="name" className="text-xl font-semibold">
            {user.name}
          </h4>
          <h5 id="job" className="text-md font-semibold text-blue-600">
            {user.email}
          </h5>
          <h6 id="address" className="text-sm font-semibold">
            {`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}
          </h6>
        </div>
      </div>
      <div id="quote">
        <p className="font-semibold">{user.company.name}</p>
        <q className="italic text-gray-600">{user.company.catchPhrase}</q>
      </div>
    </div>
  );
};

export default Card;
