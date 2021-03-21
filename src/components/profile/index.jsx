export const Profile = (props) => {
  return (
    <div>
      <img
        className="w-52 rounded-lg m-auto mb-2"
        src={`/img/${props.src}.png`}
        alt={props.alt}
      />
      <p className="text-xl font-bold mb-4">{props.name}</p>
      <p>{props.introduce}</p>
    </div>
  );
};
