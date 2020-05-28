import { yourAns } from './index';

const correctAn = (yourAns) => {
  if (yourAns === 'yes') {
    return 'no';
  }
  return 'yes';
};
export default correctAn;
