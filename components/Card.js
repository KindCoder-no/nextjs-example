const Card = ({ user }) => {
  return (
    <>
      <div>
        <h1>{user?.username}</h1>
        <p>{user?.email}</p>
      </div>
    </>
  );
};

export default Card;
