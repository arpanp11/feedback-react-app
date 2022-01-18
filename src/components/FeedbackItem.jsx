import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import Card from './shared/Card';

function FeedbackItem({ item, removeItem }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => removeItem(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}
FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
