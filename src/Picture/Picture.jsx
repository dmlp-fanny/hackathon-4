import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../Context";

export default function Picture ({ picture }) {

    const { alt_description, urls, tags, user } = picture

    const { context: {width} } = useContext(Context)

    return (
            <div className="picture_card" style={ {width: + width + 'px'} }>
                <Link to={'/author/' + user.username}><img className="picture_card_image" src={urls.small} alt={alt_description} /></Link>
                <div className="picture_card_author">
                    <strong>By</strong> {user.first_name}
                </div>
            </div>
    )
} 