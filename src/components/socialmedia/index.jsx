import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialMedia = (props) => {
    return (
        <div className="text-lg">
            <ul className="flex justify-center">
                <li className="px-1">
                    <a href={props.twitter}>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
                <li className="px-1">
                    <a href={props.instagram}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
