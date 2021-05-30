import { TwitterShareButton, TwitterIcon } from 'react-share'

export const SnsShare = (props) => {
    const { url, title } = props
    return (
        <div className="mt-24">
            <TwitterShareButton
                url={`https://wiselifelog.microcms.io/api/v1/blog/${url}`}
                title={title}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    )
}
