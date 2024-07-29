import { createBrowserRouter } from 'react-router-dom';
import Wizard from '../Components/Wizard';
import SubmissionMessage from '../Components/FormComponents/SubmissionMessage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Wizard/>,
  },
  {
    path: '/SubmissionMessage',
    element: <SubmissionMessage/>,
  },
 
]);

export default router;
