export const Profile = (props) => {
    return (
        <div>
            <img
                className="m-auto mb-2 rounded-lg w-52"
                src={`/img/${props.src}.png`}
                alt={props.alt}
            />
            <p className="mb-4 text-xl font-bold text-center">{props.name}</p>
            <p className="mb-4">{props.introduce}</p>
        </div>
    )
}
