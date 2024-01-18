import Entities from "@/enums/Entities";
import ApiSalesTracking from "@/utils/ApiSalesTracking";
import User from '@/@types/User';
import { ERROR_API } from '@/utils/constants'

const getUsers = async (): Promise<User> => {
    try {
        return ApiSalesTracking.post(Entities.USERS);
    } catch (error) {
        throw new Error(`${ERROR_API}: ${error}`);
    }
}

export default getUsers;