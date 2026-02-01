// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

import { API_URL } from "./constants";

// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

export const mockSubjects: BaseRecord[] = [
    {
        id: 'SUBJ-101',
        code: 'CSC101',
        name: 'Introduction to Computer Science',
        department: 'Computer Science',
        description: 'Fundamental concepts of computing, algorithms, and programming basics.'
    },
    {
        id: 'MTH-201',
        code: 'MTH201',
        name: 'Calculus I',
        department: 'Mathematics',
        description: 'Limits, derivatives, and integrals of single-variable functions.'
    },
    {
        id: 'PHY-150',
        code: 'PHY150',
        name: 'General Physics',
        department: 'Physics',
        description: 'Mechanics, waves, and thermodynamics with laboratory exercises.'
    },
];

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
        if (resource !== 'subjects') {
            return { data: [] as TData[], total: 0 };
        }

        return { data: mockSubjects as unknown as TData[], total: mockSubjects.length };
    },

    getOne: async () => {throw new Error('This function is not present in mock')},
    create: async () => {throw new Error('This function is not present in mock')},
    update: async () => {throw new Error('This function is not present in mock')},
    deleteOne: async () => {throw new Error('This function is not present in mock')},

    getApiUrl: () => '',
}
