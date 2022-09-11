import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as lightHeart} from '@fortawesome/free-regular-svg-icons';

const Like = (props) => {
    let liked = props.liked;
    return (<FontAwesomeIcon style={{cursor:"pointer"}} icon={liked ? solidHeart: lightHeart} onClick={props.onClick}/>);
}
 
export default Like; 
