import { Link } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;

    return (
        <DirectoryItemContainer >
            <BackgroundImage imageUrl={imageUrl} />
            <Body >
                <Link to={route}>
                    <h2>{title}</h2>
                    <p>shop now</p>
                </Link>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;