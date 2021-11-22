
import ModalLayout from './ModalLayout'
import SobesTime from './SobesTime'
import CommentStatus from './CommentStatus'
import CandidateCard from './CandidateCard'


import {useSelector,useDispatch} from 'react-redux';

const Modals = () => {

  const modals = useSelector( state => state.modals);

  return  <>
            {modals.sobesTime.active ? <SobesTime/> : ''}
            {modals.commentStatus.active ? <CommentStatus/> : ''}
            {modals.candidateCard.active ? <CandidateCard/> : ''}
          </>
}

export default Modals;
