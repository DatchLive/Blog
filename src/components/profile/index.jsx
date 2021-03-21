export const Profile = (props) => {
  return (
    <div>
      <img />
      <p className="text-xl font-bold mb-2">{props.name}</p>
      <p>{props.introduce}</p>
    </div>
  );
};
