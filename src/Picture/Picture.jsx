import './picture.scss'

export default function Picture ({ picture, setAuthor }) {

    const { alt_description, urls, tags, user } = picture

    setAuthor(user.first_name)

    return (
        <div className="picture_container_column">
            <div className="picture_card">
                <img className="picture_card_image" src={urls.raw} alt={alt_description} />
                <div className="picture_card_author">
                    <strong>By</strong> {user.first_name}
                </div>
            </div>
        </div>
    )
} 