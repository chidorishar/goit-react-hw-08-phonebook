import { useSelector } from 'react-redux';

import {
  selectIsUserAuthorized,
  selectIsUserRefreshing,
  selectUserData,
} from 'redux/selectors';

export const useAuth = () => {
  const isUserAuthorized = useSelector(selectIsUserAuthorized);
  const userData = useSelector(selectUserData);
  const isUserRefreshing = useSelector(selectIsUserRefreshing);

  return {
    isUserAuthorized,
    isUserRefreshing,
    userData,
  };
};
