import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as starFull} from '@fortawesome/free-solid-svg-icons'
import {faStar as starOutline} from '@fortawesome/free-regular-svg-icons'

const Star = ({full}) => {
    if (full) return <FontAwesomeIcon icon={starFull}/>
    else return <FontAwesomeIcon icon={starOutline}/>
}

export default Star;
