/* src/context/CurrentExpenses.tsx */
import React, { createContext, useContext, useReducer } from 'react';

export interface ChildData {
    id: number, // Unique identifier
    key: number;
    name: string;
    age: number | null;
    educationLevel: string | null;
    educationSystem: string | null;
    educationTeenageClasses: number;
    teenageClassFees: number[];
    educationPrivateLessons: number;
    privateLessonFees: number[];
    futureKindergartenExpenses: number, // Initialize with 0
    futureSchoolExpenses: number, // Initialize with 0
    futureHighSchoolExpenses: number, // Initialize with 0
    // educationTuitionFees: number | null;
    class: string | null;
    educationTransportation: string | null;
    educationPersonalCare: string | null;
    educationDayCare: string | null;
    customTuition: number;
}

export interface CurrentExpensesState {
    familyStatus: string | null;
    partnerCommunityStatus: string | null;
    apartmentSquareFootage: number;
    hasChildren: string | null;
    numberOfChildren: number;
    childrenData: ChildData[];
    memberAge: number | null;
    memberPartnerAge: number | null;
    memberRetired: string | null;
    memberPartnerRetired: string | null;
    memberGoldenAge: string | null;
    memberPartnerGoldenAge: string | null;
    educationSystem: string[];
    educationSystemBudgets: number[];
    educationSystemFees: number[];
    educationTuitionFees: number[];
    memberPositionScope: string | null;
    memberPartnerPositionScope: string | null;
    familyNationalInsurance: number | null;
    /* Current Expenses */
    // gasExpenses: number;
    electricityExpenses: number;
    maintenanceServiceExpenses: number;
    houseMaintenanceExpenses: number;
    gardeningExpenses: number;
    networkingExpenses: number;
    internetExpenses: number;
    vehicleExpenses: number;
    schoolExpenses: number[];
    highSchoolExpenses: number[];
    privateLessonExpenses: number[];
    teenageClassExpenses: number[];
    // tuitionsExpenses: number;
    otherEducationExpenses: number;
    dentistExpenses: number;
    partnerDentistExpenses: number;
    childrenDentistExpenses: number;
    welfareExpenses: number;
    foodExpenses: number;
    diningRoomExpenses: number;
    laundryExpenses: number;
    otherExpenses: number;
}

// Define action types as a union of string literals for better type safety
// type ActionType =
type CurrentExpensesActionType =
    | 'SET_FAMILY_STATUS'
    | 'SET_PARTNER_COMMUNITY_STATUS'
    | 'SET_APARTMENT_SQUARE_FOOTAGE'
    | 'SET_HAS_CHILDREN'
    | 'SET_NUMBER_OF_CHILDREN'
    | 'SET_CHILDREN_DATA'
    | 'UPDATE_CUSTOM_TUITION'
    | 'SET_MEMBER_AGE'
    | 'SET_MEMBER_PARTNER_AGE'
    | 'SET_MEMBER_RETIRED'
    | 'SET_MEMBER_GOLDEN_AGE'
    | 'SET_MEMBER_PARTNER_GOLDEN_AGE'
    | 'SET_MEMBER_PARTNER_RETIRED'
    | 'SET_EDUCATION_SYSTEM'
    | 'SET_EDUCATION_SYSTEM_BUDGETS'
    | 'SET_EDUCATION_SYSTEM_FEES'
    | 'SET_EDUCATION_TUITION_FEES'
    | 'SET_PRIVATE_LESSON_FEES'
    | 'SET_TEENAGE_CLASS_FEES'
    | 'SET_EDUCATION_PRIVATE_LESSONS'
    | 'SET_EDUCATION_TEENAGE_CLASSES'
    | 'SET_MEMBER_POSITION_SCOPE'
    | 'SET_MEMBER_PARTNER_POSITION_SCOPE'
    | 'SET_FAMILY_NATIONAL_INSURANCE'
    /* Current Expenses */
    // | 'SET_GAS_EXPENSES'
    | 'SET_ELECTRICITY_EXPENSES'
    | 'SET_MAINTENANCE_SERVICE_EXPENSES'
    | 'SET_HOUSE_MAINTENANCE_EXPENSES'
    | 'SET_GARDENING_EXPENSES'
    | 'SET_NETWORKING_EXPENSES'
    | 'SET_INTERNET_EXPENSES'
    | 'SET_VEHICLE_EXPENSES'
    | 'SET_SCHOOL_EXPENSES'
    | 'SET_HIGH_SCHOOL_EXPENSES'
    | 'SET_PRIVATE_LESSON_EXPENSES'
    | 'SET_TEENAGE_CLASS_EXPENSES'
    | 'SET_TUITIONS_EXPENSES'
    | 'SET_OTHER_EDUCATION_EXPENSES'
    | 'SET_DENTIST_EXPENSES'
    | 'SET_CHILDREN_DENTIST_EXPENSES'
    | 'SET_PARTNER_DENTIST_EXPENSES'
    | 'SET_WELFARE_EXPENSES'
    | 'SET_FOOD_EXPENSES'
    | 'SET_DINING_ROOM_EXPENSES'
    | 'SET_LAUNDRY_EXPENSES'
    | 'SET_OTHER_EXPENSE';

interface CurrentExpensesAction {
    type: CurrentExpensesActionType;
    payload: any;
}

const currentExpensesInitialState: CurrentExpensesState = {
    familyStatus: null,
    partnerCommunityStatus: null,
    apartmentSquareFootage: 0,
    hasChildren: null,
    numberOfChildren: 0,
        childrenData: [
        {
            id: 1,
            key: 1,
            name: '',
            age: 0, // Was null
            educationLevel: null,
            educationSystem: null, // was educationSystem: string | null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            privateLessonFees: [],
            futureKindergartenExpenses: 0 , // Initialize with 0
            futureSchoolExpenses: 0, // Initialize with 0
            futureHighSchoolExpenses: 0, // Initialize with 0
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            customTuition: 0,
        },
        {
            id: 2,
            key: 2,
            name: '',
            age: 0,
            educationLevel: null,
            educationSystem: null, // was educationSystem: string | null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            privateLessonFees: [],
            futureKindergartenExpenses: 0, // Initialize with 0
            futureSchoolExpenses: 0, // Initialize with 0
            futureHighSchoolExpenses: 0, // Initialize with 0
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            customTuition: 0,
        },
        {
            id: 3,
            key: 3,
            name: '',
            age: 0,
            educationLevel: null,
            educationSystem: null, // was educationSystem: string | null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            privateLessonFees: [],
            futureKindergartenExpenses: 0,
            futureSchoolExpenses: 0,
            futureHighSchoolExpenses: 0,
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            customTuition: 0,
        },
        {
            id: 4,
            key: 4,
            name: '',
            age: 0,
            educationLevel: null,
            educationSystem: null, // was educationSystem: string | null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            privateLessonFees: [],
            futureKindergartenExpenses: 0,
            futureSchoolExpenses: 0,
            futureHighSchoolExpenses: 0,
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            customTuition: 0,
        },
        {
            id: 5,
            key: 5,
            name: '',
            age: 0,
            educationLevel: null,
            educationSystem: null, // was educationSystem: string | null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            privateLessonFees: [],
            futureKindergartenExpenses: 0,
            futureSchoolExpenses: 0,
            futureHighSchoolExpenses: 0,
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            customTuition: 0,
        },
    ],
    memberAge: 0,
    memberPartnerAge: 0,
    memberRetired: null,
    memberPartnerRetired: null,
    memberGoldenAge: null,
    memberPartnerGoldenAge: null,
    educationSystem: [],
    educationSystemBudgets: [],
    educationSystemFees: [],
    memberPositionScope: null,
    memberPartnerPositionScope: null,
    familyNationalInsurance: null,
    /* Current Expenses */
    // gasExpenses: 0,
    electricityExpenses: 0,
    // energyExpenses: 0,
    maintenanceServiceExpenses: 0,
    houseMaintenanceExpenses: 0,
    gardeningExpenses: 0,
    networkingExpenses: 0,
    internetExpenses: 0,
    vehicleExpenses: 0,
    schoolExpenses: [],
    highSchoolExpenses: [],
    educationTuitionFees: [],
    privateLessonExpenses: [],
    teenageClassExpenses: [],
    // tuitionsExpenses: 0,
    otherEducationExpenses: 0,
    dentistExpenses: 0,
    partnerDentistExpenses: 0,
    childrenDentistExpenses: 0,
    welfareExpenses: 0,
    foodExpenses: 0,
    diningRoomExpenses: 0,
    laundryExpenses: 0,
    otherExpenses: 0,
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
export const setFamilyStatus = (newStatus: string | null): CurrentExpensesAction => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): CurrentExpensesAction => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number): CurrentExpensesAction => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): CurrentExpensesAction => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): CurrentExpensesAction => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const childrenData = (newChildrenData: ChildData[]): CurrentExpensesAction => ({
    type: 'SET_CHILDREN_DATA',
    payload: newChildrenData,
});

export const memberAge = (newMemberAge: number | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const memberGoldenAge = (newMemberGoldenAge: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_GOLDEN_AGE',
    payload: newMemberGoldenAge,
});

export const memberPartnerGoldenAge = (newMemberPartnerGoldenAge: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_GOLDEN_AGE',
    payload: newMemberPartnerGoldenAge,
});

export const educationSystem = (newEducationSystem: string[]): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationSystemFees = (newEducationSystemFees: number[]): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

export const memberPositionScope = (newMemberPositionScope: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_POSITION_SCOPE',
    payload: newMemberPositionScope,
});

export const memberPartnerPositionScope = (newMemberPartnerPositionScope: string | null): CurrentExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_POSITION_SCOPE',
    payload: newMemberPartnerPositionScope,
});

export const familyNationalInsurance = (newFamilyNationalInsurance: number): CurrentExpensesAction => ({
    type: 'SET_FAMILY_NATIONAL_INSURANCE',
    payload: newFamilyNationalInsurance,
});

/* Current Expenses */
export const setElectricityExpenses = (newElectricityExpenses: number): CurrentExpensesAction => ({
    type: 'SET_ELECTRICITY_EXPENSES',
    payload: newElectricityExpenses,
});


export const setMaintenanceServiceExpenses = (newMaintenanceServiceExpenses: number): CurrentExpensesAction => ({
    type: 'SET_MAINTENANCE_SERVICE_EXPENSES',
    payload: newMaintenanceServiceExpenses,
});

export const setHouseMaintenanceExpenses = (newHouseMaintenanceExpenses: number): CurrentExpensesAction => ({
    type: 'SET_HOUSE_MAINTENANCE_EXPENSES',
    payload: newHouseMaintenanceExpenses,
});

export const setGardeningExpenses = (newGardeningExpenses: number): CurrentExpensesAction => ({
    type: 'SET_GARDENING_EXPENSES',
    payload: newGardeningExpenses,
});

export const setNetworkingExpenses = (newNetworkingExpenses: number): CurrentExpensesAction => ({
    type: 'SET_NETWORKING_EXPENSES',
    payload: newNetworkingExpenses,
});

export const setInternetExpenses = (newInternetExpenses: number): CurrentExpensesAction => ({
    type: 'SET_INTERNET_EXPENSES',
    payload: newInternetExpenses,
});

export const setVehicleExpenses = (newVehicleExpenses: number): CurrentExpensesAction => ({
    type: 'SET_VEHICLE_EXPENSES',
    payload: newVehicleExpenses,
});

export const setSchoolExpenses = (newSchoolExpenses: number[]): CurrentExpensesAction => ({
    type: 'SET_SCHOOL_EXPENSES',
    payload: newSchoolExpenses,
});

export const setHighSchoolExpenses = (newHighSchoolExpenses: number[]): CurrentExpensesAction => ({
    type: 'SET_HIGH_SCHOOL_EXPENSES',
    payload: newHighSchoolExpenses,
});

export const setEducationTuitionFees = (newEducationTuitionFees: number[]): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_TUITION_FEES',
    payload: newEducationTuitionFees,
});

export const setPrivateLessonFees = (index: number, newPrivateLessonFees: number[]): CurrentExpensesAction => ({
    type: 'SET_PRIVATE_LESSON_FEES',
    // payload: newPrivateLessonFees,
    payload: { index, newPrivateLessonFees },
});

export const setChildTeenageClassFees = (index: number, newTeenageClassFees: number[]): CurrentExpensesAction => ({
    type: 'SET_TEENAGE_CLASS_FEES',
    // payload: newTeenageClassFees,
    payload: { index, newTeenageClassFees },
});

export const setEducationTeenageClasses = (index: number, newEducationTeenageClasses: number): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_TEENAGE_CLASSES',
    payload: { index, newEducationTeenageClasses },
});

export const setEducationPrivateLessons = (index: number, newEducationPrivateLessons: number): CurrentExpensesAction => ({
    type: 'SET_EDUCATION_PRIVATE_LESSONS',
    payload: { index, newEducationPrivateLessons },
});

export const setPrivateLessonExpenses = (newPrivateLessonExpenses: number[]): CurrentExpensesAction => ({
    type: 'SET_PRIVATE_LESSON_EXPENSES',
    payload: newPrivateLessonExpenses,
});

export const setTeenageClassExpenses = (newTeenageClassExpenses: number[]): CurrentExpensesAction => ({
    type: 'SET_TEENAGE_CLASS_EXPENSES',
    payload: newTeenageClassExpenses,
});

// export const updatedTeenageClassExpenses = (index: number, value: number): Action => ({
//     type: 'UPDATED_TEENAGE_CLASS_EXPENSES',
//     payload: { index, value },
// });

// const setTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
//     type: 'SET_TUITIONS_EXPENSES',
//     payload: newTuitionsExpenses,
// });

export const setOtherEducationExpenses = (newOtherEducationExpenses: number): CurrentExpensesAction => ({
    type: 'SET_OTHER_EDUCATION_EXPENSES',
    payload: newOtherEducationExpenses,
});

export const setDentistExpenses = (newDentistExpenses: number): CurrentExpensesAction => ({
    type: 'SET_DENTIST_EXPENSES',
    payload: newDentistExpenses,
});

export const setPartnerDentistExpenses = (newPartnerDentistExpenses: number): CurrentExpensesAction => ({
    type: 'SET_PARTNER_DENTIST_EXPENSES',
    payload: newPartnerDentistExpenses,
});

export const setChildrenDentistExpenses = (newChildrenDentistExpenses: number): CurrentExpensesAction => ({
    type: 'SET_CHILDREN_DENTIST_EXPENSES',
    payload: newChildrenDentistExpenses,
});

export const setWelfareExpenses = (newWelfareExpenses: number): CurrentExpensesAction => ({
    type: 'SET_WELFARE_EXPENSES',
    payload: newWelfareExpenses,
});

export const setFoodExpenses = (newFoodExpenses: number): CurrentExpensesAction => ({
    type: 'SET_FOOD_EXPENSES',
    payload: newFoodExpenses,
});

export const setDiningRoomExpenses = (newDiningRoomExpenses: number): CurrentExpensesAction => ({
    type: `SET_DINING_ROOM_EXPENSES`,
    payload: newDiningRoomExpenses,
});

export const setLaundryExpenses = (newLaundryExpenses: number): CurrentExpensesAction => ({
    type: 'SET_LAUNDRY_EXPENSES',
    payload: newLaundryExpenses,
});

export const setOtherExpenses = (newOtherExpenses: number): CurrentExpensesAction => ({
    type: 'SET_OTHER_EXPENSE',
    payload: newOtherExpenses,
});

/* Define the reducer function that takes the current state and an action */
const currentExpensesReducer = (state: CurrentExpensesState, action: CurrentExpensesAction): CurrentExpensesState => {
    switch (action.type) {
        case 'SET_FAMILY_STATUS':
            return { ...state, familyStatus: action.payload };
        case 'SET_PARTNER_COMMUNITY_STATUS':
            return { ...state, partnerCommunityStatus: action.payload };
        case 'SET_APARTMENT_SQUARE_FOOTAGE':
            return { ...state, apartmentSquareFootage: action.payload };
        case 'SET_HAS_CHILDREN':
            return { ...state, hasChildren: action.payload };
        case 'SET_NUMBER_OF_CHILDREN':
            return { ...state, numberOfChildren: action.payload };
        case 'SET_CHILDREN_DATA':
            return { ...state, childrenData: action.payload };
        case 'UPDATE_CUSTOM_TUITION':
            const updatedChildrenDataCustomTuition = state.childrenData.map((child, index) =>

                index === action.payload.index
                    ? { ...child, customTuition: action.payload.value }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataCustomTuition };
        case 'SET_TEENAGE_CLASS_FEES':
            const updatedChildrenDataTeenageClassFees = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, teenageClassFees: action.payload.newTeenageClassFees }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataTeenageClassFees };
        case 'SET_PRIVATE_LESSON_FEES':
            const updatedChildrenDataPrivateLessonFees = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, privateLessonFees: action.payload.newPrivateLessonFees }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataPrivateLessonFees };
        case 'SET_EDUCATION_TEENAGE_CLASSES': {
            const updatedChildrenDataTeenageClasses = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, educationTeenageClasses: action.payload.newEducationTeenageClasses }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataTeenageClasses };
        }
        case 'SET_EDUCATION_PRIVATE_LESSONS': {
            const updatedChildrenDataForPrivateLessons = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, educationPrivateLessons: action.payload.newEducationPrivateLessons }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataForPrivateLessons };
        }
        case 'SET_MEMBER_POSITION_SCOPE':
            return { ...state, memberPositionScope: action.payload };
        case 'SET_MEMBER_PARTNER_POSITION_SCOPE':
            return { ...state, memberPartnerPositionScope: action.payload };
        case 'SET_FAMILY_NATIONAL_INSURANCE':
            return { ...state, familyNationalInsurance: action.payload };
        case 'SET_MEMBER_AGE':
            return { ...state, memberAge: action.payload };
        case 'SET_MEMBER_PARTNER_AGE':
            return { ...state, memberPartnerAge: action.payload };
        case 'SET_MEMBER_RETIRED':
            return { ...state, memberRetired: action.payload };
        case 'SET_MEMBER_PARTNER_RETIRED':
            return { ...state, memberPartnerRetired: action.payload };
        case 'SET_MEMBER_GOLDEN_AGE':
            return { ...state, memberGoldenAge: action.payload };
        case 'SET_MEMBER_PARTNER_GOLDEN_AGE':
            return { ...state, memberPartnerGoldenAge: action.payload };
        case 'SET_EDUCATION_SYSTEM':
            return { ...state, educationSystem: action.payload };
        case 'SET_EDUCATION_SYSTEM_BUDGETS':
            return { ...state, educationSystemBudgets: action.payload };
        case 'SET_EDUCATION_SYSTEM_FEES':
            return { ...state, educationSystemFees: action.payload };
        /* Current Expenses */
        // case 'SET_GAS_EXPENSES':
        //     return { ...state, gasExpenses: action.payload };
        case 'SET_ELECTRICITY_EXPENSES':
            return { ...state, electricityExpenses: action.payload };
        case 'SET_MAINTENANCE_SERVICE_EXPENSES':
            return { ...state, maintenanceServiceExpenses: action.payload };
        case 'SET_HOUSE_MAINTENANCE_EXPENSES':
            return { ...state, houseMaintenanceExpenses: action.payload };
        case 'SET_GARDENING_EXPENSES':
            return { ...state, gardeningExpenses: action.payload };
        case 'SET_NETWORKING_EXPENSES':
            return { ...state, networkingExpenses: action.payload };
        case 'SET_INTERNET_EXPENSES':
            return { ...state, internetExpenses: action.payload };
        case 'SET_VEHICLE_EXPENSES':
            return { ...state, vehicleExpenses: action.payload };
        case 'SET_SCHOOL_EXPENSES':
            return { ...state, schoolExpenses: action.payload };
        case 'SET_HIGH_SCHOOL_EXPENSES':
            return { ...state, highSchoolExpenses: action.payload };
        case 'SET_PRIVATE_LESSON_EXPENSES':
            return { ...state, privateLessonExpenses: action.payload };
        case 'SET_EDUCATION_TUITION_FEES':
            return { ...state, educationTuitionFees: action.payload };
        case 'SET_TEENAGE_CLASS_EXPENSES':
            return { ...state, teenageClassExpenses: action.payload };
        // case 'SET_TUITIONS_EXPENSES':
        //     return { ...state, tuitionsExpenses: action.payload };
        case 'SET_OTHER_EDUCATION_EXPENSES':
            return { ...state, otherEducationExpenses: action.payload };
        case 'SET_DENTIST_EXPENSES':
            return { ...state, dentistExpenses: action.payload };
        case 'SET_PARTNER_DENTIST_EXPENSES':
            return { ...state, partnerDentistExpenses: action.payload };
        case 'SET_CHILDREN_DENTIST_EXPENSES':
            return { ...state, childrenDentistExpenses: action.payload };
        case 'SET_WELFARE_EXPENSES':
            return { ...state, welfareExpenses: action.payload };
        case 'SET_FOOD_EXPENSES':
            return { ...state, foodExpenses: action.payload };
        case 'SET_DINING_ROOM_EXPENSES':
            return { ...state, diningRoomExpenses: action.payload };
        case 'SET_LAUNDRY_EXPENSES':
            return { ...state, laundryExpenses: action.payload };
        case 'SET_OTHER_EXPENSE':
            return { ...state, otherExpenses: action.payload };
        default:
            return state;
    }
};

const CurrentExpensesContext = createContext<{
    state: CurrentExpensesState;
    dispatch: React.Dispatch<CurrentExpensesAction>;
    setFamilyStatus: (newStatus: string | null) => void;
    setPartnerCommunityStatus: (newStatus: string | null) => void;
    setApartmentSquareFootage: (newApartmentSquareFootage: number) => void;
    setHasChildren: (newHasChildren: string | null) => void;
    setNumberOfChildren: (newNumberOfChildren: number) => void;
    setChildrenData: (newChildrenData: ChildData[]) => void;
    setEducationTeenageClasses: (newEducationTeenageClasses: number) => void;
    setEducationPrivateLessons: (newEducationPrivateLessons: number) => void;
    setMemberAge: (newMemberAge: number | null) => void;
    setMemberPartnerAge: (newMemberPartnerAge: number | null) => void;
    setMemberRetired: (newMemberRetired: string | null) => void;
    setMemberPartnerRetired: (newMemberPartnerRetired: string | null) => void;
    setMemberGoldenAge: (newMemberGoldenAge: string | null) => void;
    setMemberPartnerGoldenAge: (newMemberPartnerGoldenAge: string | null) => void;
    setEducationSystem: (newEducationSystem: string[]) => void;
    setEducationSystemBudgets: (newEducationSystemBudgets: number[]) => void;
    setEducationSystemFees: (newEducationSystemFees: number[]) => void;
    setMemberPositionScope: (newMemberPositionScope: string | null) => void;
    setMemberPartnerPositionScope: (newMemberPartnerPositionScope: string | null) => void;
    setFamilyNationalInsurance: (newFamilyNationalInsurance: number) => void;
    /* Current Expenses */
    // setGasExpenses: (newGasExpenses: number) => void;
    setElectricityExpenses: (newElectricityExpenses: number) => void;
    setMaintenanceServiceExpenses: (newMaintenanceServiceExpenses: number) => void;
    setHouseMaintenanceExpenses: (newHouseMaintenanceExpenses: number) => void;
    setGardeningExpenses: (newGardeningExpenses: number) => void;
    setNetworkingExpenses: (newNetworkingExpenses: number) => void;
    setInternetExpenses: (newInternetExpenses: number) => void;
    setVehicleExpenses: (newVehicleExpenses: number) => void;
    setSchoolExpenses: (newSchoolExpenses: number[]) => void;
    setHighSchoolExpenses: (newHighSchoolExpenses: number[]) => void;
    setEducationTuitionFees: (newEducationTuitionFees: number[]) => void;
    // setPrivateLessonFees: (newPrivateLessonFees: number[]) => void;
    // setTeenageClassFees: (newTeenageClassFees: number[]) => void;
    setPrivateLessonExpenses: (newPrivateLessonExpenses: number[]) => void;
    setTeenageClassExpenses: (newTeenageClassExpenses: number[]) => void;
    // setTuitionsExpenses: (newTuitionsExpenses: number) => void;
    setOtherEducationExpenses: (newOtherEducationExpenses: number) => void;
    setDentistExpenses: (newDentistExpenses: number) => void;
    setPartnerDentistExpenses: (newPartnerDentistExpenses: number) => void;
    setChildrenDentistExpenses: (newChildrenDentistExpenses: number) => void;
    setWelfareExpenses: (newWelfareExpenses: number) => void;
    setFoodExpenses: (newFoodExpenses: number) => void;
    setDiningRoomExpenses: (newDiningRoomExpenses: number) => void;
    setLaundryExpenses: (newLaundryExpenses: number) => void;
    setOtherExpenses: (newOtherExpenses: number) => void;
}>({
    state: currentExpensesInitialState,
    dispatch: () => null,
    setFamilyStatus: () => null,
    setPartnerCommunityStatus: () => null,
    setApartmentSquareFootage: () => null,
    setHasChildren: () => null,
    setNumberOfChildren: () => null,
    setChildrenData: () => null,
    setEducationTeenageClasses: () => null,
    setEducationPrivateLessons: () => null,
    setMemberAge: () => null,
    setMemberPartnerAge: () => null,
    setMemberRetired: () => null,
    setMemberPartnerRetired: () => null,
    setMemberGoldenAge: () => null,
    setMemberPartnerGoldenAge: () => null,
    setEducationSystem: () => null,
    setEducationSystemBudgets: () => null,
    setEducationSystemFees: () => null,
    setMemberPositionScope: () => null,
    setMemberPartnerPositionScope: () => null,
    setFamilyNationalInsurance: () => null,
    /* Current Expenses */
    // setGasExpenses: () => null,
    setElectricityExpenses: () => null,
    setMaintenanceServiceExpenses: () => null,
    setHouseMaintenanceExpenses: () => null,
    setGardeningExpenses: () => null,
    setNetworkingExpenses: () => null,
    setInternetExpenses: () => null,
    setVehicleExpenses: () => null,
    setSchoolExpenses: () => null,
    setHighSchoolExpenses: () => null,
    setEducationTuitionFees: () => null,
    // setPrivateLessonFees: () => null,
    // setTeenageClassFees: () => null,
    setPrivateLessonExpenses: () => null,
    setTeenageClassExpenses: () => null,
    // setTuitionsExpenses: () => null,
    setOtherEducationExpenses: () => null,
    setDentistExpenses: () => null,
    setPartnerDentistExpenses: () => null,
    setChildrenDentistExpenses: () => null,
    setWelfareExpenses: () => null,
    setFoodExpenses: () => null,
    setDiningRoomExpenses: () => null,
    setLaundryExpenses: () => null,
    setOtherExpenses: () => null,
});

export const useCurrentExpensesState = () => {
    const context = useContext(CurrentExpensesContext);
    if (!context) {
        throw new Error('useCurrentExpensesState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface CurrentExpensesProviderProps {
    children: React.ReactNode;
}

export const CurrentExpensesProvider: React.FC<CurrentExpensesProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(currentExpensesReducer, currentExpensesInitialState);
    return (
        <CurrentExpensesContext.Provider
            value={{
                state,
                dispatch,
                setFamilyStatus: (newStatus) => dispatch({ type: 'SET_FAMILY_STATUS', payload: newStatus }),
                setPartnerCommunityStatus: (newStatus) => dispatch({ type: 'SET_PARTNER_COMMUNITY_STATUS', payload: newStatus }),
                setApartmentSquareFootage: (newApartmentSquareFootage) => dispatch({ type: 'SET_APARTMENT_SQUARE_FOOTAGE', payload: newApartmentSquareFootage }),
                setHasChildren: (newHasChildren) => dispatch({ type: 'SET_HAS_CHILDREN', payload: newHasChildren }),
                setNumberOfChildren: (newNumberOfChildren: number) => dispatch({ type: 'SET_NUMBER_OF_CHILDREN', payload: newNumberOfChildren }),
                setChildrenData: (newChildrenData) => dispatch({ type: 'SET_CHILDREN_DATA', payload: newChildrenData }),
                setEducationTeenageClasses: (newEducationTeenageClasses) => dispatch({ type: 'SET_EDUCATION_TEENAGE_CLASSES', payload: newEducationTeenageClasses }),
                setEducationPrivateLessons: (newEducationPrivateLessons) => dispatch({ type: 'SET_EDUCATION_PRIVATE_LESSONS', payload: newEducationPrivateLessons }),
                setMemberAge: (newMemberAge) => dispatch({ type: 'SET_MEMBER_AGE', payload: newMemberAge }),
                setMemberPartnerAge: (newMemberPartnerAge) => dispatch({ type: 'SET_MEMBER_PARTNER_AGE', payload: newMemberPartnerAge }),
                setMemberRetired: (newMemberRetired) => dispatch({ type: 'SET_MEMBER_RETIRED', payload: newMemberRetired }),
                setMemberPartnerRetired: (newMemberPartnerRetired) => dispatch({ type: 'SET_MEMBER_PARTNER_RETIRED', payload: newMemberPartnerRetired }),
                setMemberGoldenAge: (newMemberGoldenAge) => dispatch({ type: 'SET_MEMBER_GOLDEN_AGE', payload: newMemberGoldenAge }),
                setMemberPartnerGoldenAge: (newMemberPartnerGoldenAge) => dispatch({ type: 'SET_MEMBER_PARTNER_GOLDEN_AGE', payload: newMemberPartnerGoldenAge }),
                setEducationSystem: (newEducationSystem) => dispatch({ type: 'SET_EDUCATION_SYSTEM', payload: newEducationSystem }),
                setEducationSystemBudgets: (newEducationSystemBudgets) => dispatch({ type: 'SET_EDUCATION_SYSTEM_BUDGETS', payload: newEducationSystemBudgets }),
                setEducationSystemFees: (newEducationSystemFees) => dispatch({ type: 'SET_EDUCATION_SYSTEM_FEES', payload: newEducationSystemFees }),
                setMemberPositionScope: (newMemberPositionScope) => dispatch({ type: 'SET_MEMBER_POSITION_SCOPE', payload: newMemberPositionScope }),
                setMemberPartnerPositionScope: (newMemberPartnerPositionScope) => dispatch({ type: 'SET_MEMBER_PARTNER_POSITION_SCOPE', payload: newMemberPartnerPositionScope }),
                setFamilyNationalInsurance: (newFamilyNationalInsurance) => dispatch({ type: 'SET_FAMILY_NATIONAL_INSURANCE', payload: newFamilyNationalInsurance }),
                /* Current Expenses */
                // setGasExpenses: (newGasExpenses) => dispatch(setGasExpenses(newGasExpenses)),
                setElectricityExpenses: (newElectricityExpenses) => dispatch(setElectricityExpenses(newElectricityExpenses)),
                setMaintenanceServiceExpenses: (newMaintenanceServiceExpenses) =>
                    dispatch(setMaintenanceServiceExpenses(newMaintenanceServiceExpenses)),
                setHouseMaintenanceExpenses: (newHouseMaintenanceExpenses) =>
                    dispatch(setHouseMaintenanceExpenses(newHouseMaintenanceExpenses)),
                setGardeningExpenses: (newGardeningExpenses) => dispatch(setGardeningExpenses(newGardeningExpenses)),
                setNetworkingExpenses: (newNetworkingExpenses) => dispatch(setNetworkingExpenses(newNetworkingExpenses)),
                setInternetExpenses: (newInternetExpenses) => dispatch(setInternetExpenses(newInternetExpenses)),
                setVehicleExpenses: (newVehicleExpenses) => dispatch(setVehicleExpenses(newVehicleExpenses)),
                setSchoolExpenses: (newSchoolExpenses) => dispatch({ type: 'SET_SCHOOL_EXPENSES', payload: newSchoolExpenses }),
                setHighSchoolExpenses: (newHighSchoolExpenses) => dispatch({ type: 'SET_HIGH_SCHOOL_EXPENSES', payload: newHighSchoolExpenses }),
                setEducationTuitionFees: (newEducationTuitionFees) => dispatch({ type: 'SET_EDUCATION_TUITION_FEES', payload: newEducationTuitionFees }),
                // setPrivateLessonFees: (newPrivateLessonFees) => dispatch({ type: 'SET_PRIVATE_LESSON_FEES', payload: newPrivateLessonFees }),
                // setTeenageClassFees: (newTeenageClassFees) => dispatch({ type: 'SET_TEENAGE_CLASS_FEES', payload: newTeenageClassFees }),
                setPrivateLessonExpenses: (newPrivateLessonExpenses) => dispatch({ type: 'SET_PRIVATE_LESSON_EXPENSES', payload: newPrivateLessonExpenses }),
                setTeenageClassExpenses: (newTeenageClassExpenses) => dispatch({ type: 'SET_TEENAGE_CLASS_EXPENSES', payload: newTeenageClassExpenses }),
                // updatedTeenageClassExpenses: (index, value) => dispatch({ type: 'UPDATED_TEENAGE_CLASS_EXPENSES', payload: { index, value } }),
                // setTuitionsExpenses: (newTuitionsExpenses) => dispatch(setTuitionsExpenses(newTuitionsExpenses)),
                setOtherEducationExpenses: (newOtherEducationExpenses) =>
                    dispatch(setOtherEducationExpenses(newOtherEducationExpenses)),
                setDentistExpenses: (newDentistExpenses) => dispatch(setDentistExpenses(newDentistExpenses)),
                setPartnerDentistExpenses: (newPartnerDentistExpenses) => dispatch(setPartnerDentistExpenses(newPartnerDentistExpenses)),
                setChildrenDentistExpenses: (newChildrenDentistExpenses) => dispatch(setChildrenDentistExpenses(newChildrenDentistExpenses)),
                setWelfareExpenses: (newWelfareExpenses) => dispatch(setWelfareExpenses(newWelfareExpenses)),
                setFoodExpenses: (newFoodExpenses) => dispatch(setFoodExpenses(newFoodExpenses)),
                setDiningRoomExpenses: (newDiningRoomExpenses) => dispatch(setDiningRoomExpenses(newDiningRoomExpenses)),
                setLaundryExpenses: (newLaundryExpenses) => dispatch(setLaundryExpenses(newLaundryExpenses)),
                setOtherExpenses: (newOtherExpenses) => dispatch(setOtherExpenses(newOtherExpenses)),
            }}
        >
            {children}
        </CurrentExpensesContext.Provider>
    );
};