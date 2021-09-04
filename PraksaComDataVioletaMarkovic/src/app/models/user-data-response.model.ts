import { User } from '../user/user';
import { PaginationModel } from './pagination.model';

export interface UsersDataResponse {
  data: User[];
  meta: {
    pagination: PaginationModel;
  };
}
