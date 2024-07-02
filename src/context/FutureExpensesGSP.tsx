/* src/context/FutureExpenses.tsx */
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
    futureEducationPersonalCareExpenses: number;
    futureEducationDayCareExpenses: number;
    customTuition: number;
}

interface FutureExpensesState {
    /* Current Incomes
    * IMPORTANT: NOT Everything Here IS Relevant
    */
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
    // educationTuitionFees: number[];
    memberPositionScope: string | null;
    memberPartnerPositionScope: string | null;
    familyNationalInsurance: number | null;
    /* Future expenses
    * IMPORTANT: NOT Everything Here IS Relevant
    * IMPORTANT: Needed to add "Expenses" prefix at the end due to expenses values that has the same name as the incomes. Please verify that the code is updated
    */
    futureExpenses: number[];
    futurePropertyTaxExpenses: number;
    futureWaterAndSewerExpenses: number;
    // futureGasExpenses: number;
    // futureElectricityExpenses: number;
    futureEnergyExpenses: number;
    futureHouseMaintenanceExpenses: number;
    futureGardeningExpenses: number;
    futureNetworkingExpenses: number;
    futureInternetExpenses: number;
    futureVehicleExpenses: number;
    futureEducationSystemExpenses: number;
    futureKindergartenExpenses: number[]; // number[];
    futureSchoolExpenses: number[]; // number[];
    futureHighSchoolExpenses: number[]; // number[];
    futurePrivateLessonExpenses: number[];
    futureTeenageClassExpenses: number[];
    futureEducationTransportationExpenses: number;
    futureEducationPersonalCareExpenses: number[],
    futureEducationDayCareExpenses: number[],
    // futureTuitionsExpenses: number;
    //futureSafetyNetExpenses: number;
    futureHealthInsuranceExpenses: number;
    futureDentistExpenses: number;
    futurePartnerDentistExpenses: number;
    futureChildrenDentistExpenses: number;
    futureWelfareExpenses: number;
    futureFoodExpenses: number;
    futureDiningRoomExpenses: number;
    futureLaundryExpenses: number;
    futureFlatTaxExpenses: number;
    futureGrossTaxExpenses: number;
    futureAlimonyExpenses: number;
    futureCleaningExpenses: number;
    // futureDecorationsExpenses: number;
    futureOtherExpenses: number;
    /* Added */
    futureGrossIncome: number;
    teenageClassExpenses: number[];
    privateLessonExpenses: number[];
}

// Define action types as a union of string literals for better type safety
// type ActionType =
type FutureExpensesActionType =
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
    /* Future Expenses*/
    | 'SET_FUTURE_EXPENSES'
    | 'SET_FUTURE_PROPERTY_TAX_EXPENSES'
    | 'SET_FUTURE_WATER_AND_SEWER_EXPENSES'
    // | 'SET_FUTURE_GAS_EXPENSES'
    // | 'SET_FUTURE_ELECTRICITY_EXPENSES'
    | 'SET_FUTURE_ENERGY_EXPENSES'
    | 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES'
    | 'SET_FUTURE_GARDENING_EXPENSES'
    | 'SET_FUTURE_NETWORKING_EXPENSES'
    | 'SET_FUTURE_INTERNET_EXPENSES'
    | 'SET_FUTURE_VEHICLE_EXPENSES'
    | 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES'
    | 'SET_FUTURE_KINDERGARTEN_EXPENSES'
    | 'SET_FUTURE_SCHOOL_EXPENSES'
    | 'SET_FUTURE_HIGH_SCHOOL_EXPENSES'
    | 'SET_FUTURE_PRIVATE_LESSON_EXPENSES'
    | 'SET_FUTURE_TEENAGE_CLASS_EXPENSES'
    | 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES'
    | 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES'
    | 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES'
    // | 'SET_FUTURE_TUITIONS_EXPENSES'
    | 'SET_FUTURE_SAFETY_NET_EXPENSES'
    | 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES'
    | 'SET_FUTURE_DENTIST_EXPENSES'
    | 'SET_FUTURE_PARTNER_DENTIST_EXPENSES'
    | 'SET_FUTURE_CHILDREN_DENTIST_EXPENSES'
    | 'SET_FUTURE_WELFARE_EXPENSES'
    | 'SET_FUTURE_FOOD_EXPENSES'
    | 'SET_FUTURE_DINING_ROOM_EXPENSES'
    | 'SET_FUTURE_LAUNDRY_EXPENSES'
    | 'SET_FUTURE_FLAT_TAX_EXPENSES'
    | 'SET_FUTURE_GROSS_TAX_EXPENSES'
    | 'SET_FUTURE_ALIMONY_EXPENSES'
    | 'SET_FUTURE_CLEANING_EXPENSES'
    | 'SET_FUTURE_DECORATIONS_EXPENSES'
    | 'SET_FUTURE_OTHER_EXPENSES'
    /* Added */
    | 'SET_FUTURE_GROSS_INCOME'
    | 'SET_PRIVATE_LESSON_EXPENSES'
    | 'SET_TEENAGE_CLASS_EXPENSES';


interface FutureExpensesAction {
    type: FutureExpensesActionType;
    payload: any;
}

const futureExpensesInitialState: FutureExpensesState = {
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
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
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
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
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
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
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
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
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
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
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
    /* Future Expenses*/
    futureExpenses: [],
    futurePropertyTaxExpenses: 0,
    futureWaterAndSewerExpenses: 0,
    // futureGasExpenses: 0,
    // futureElectricityExpenses: 0,
    futureEnergyExpenses: 0,
    futureHouseMaintenanceExpenses: 0,
    futureGardeningExpenses: 0,
    futureNetworkingExpenses: 0,
    futureInternetExpenses: 0,
    futureVehicleExpenses: 0,
    futureEducationSystemExpenses: 0,
    futureKindergartenExpenses: [],
    futureSchoolExpenses: [],
    futureHighSchoolExpenses: [],
    futurePrivateLessonExpenses: [],
    futureTeenageClassExpenses: [],
    futureEducationTransportationExpenses: 0,
    futureEducationPersonalCareExpenses: [],
    futureEducationDayCareExpenses: [],
    // futureTuitionsExpenses: 0,
    //futureSafetyNetExpenses: 0,
    futureHealthInsuranceExpenses: 0,
    futureDentistExpenses: 0,
    futurePartnerDentistExpenses: 0,
    futureChildrenDentistExpenses: 0,
    futureWelfareExpenses: 0,
    futureFoodExpenses: 0,
    futureDiningRoomExpenses: 0,
    futureLaundryExpenses: 0,
    futureFlatTaxExpenses: 0,
    futureGrossTaxExpenses: 0,
    futureAlimonyExpenses: 0,
    futureCleaningExpenses: 0,
    // futureDecorationsExpenses: 0,
    futureOtherExpenses: 0,
    /* Added */
    futureGrossIncome: 0,
    teenageClassExpenses: [],
    privateLessonExpenses: [],
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
export const setFamilyStatus = (newStatus: string | null): FutureExpensesAction => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): FutureExpensesAction => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number): FutureExpensesAction => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): FutureExpensesAction => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): FutureExpensesAction => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const childrenData = (newChildrenData: ChildData[]): FutureExpensesAction => ({
    type: 'SET_CHILDREN_DATA',
    payload: newChildrenData,
});

export const memberAge = (newMemberAge: number | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const memberGoldenAge = (newMemberGoldenAge: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_GOLDEN_AGE',
    payload: newMemberGoldenAge,
});

export const memberPartnerGoldenAge = (newMemberPartnerGoldenAge: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_GOLDEN_AGE',
    payload: newMemberPartnerGoldenAge,
});

export const educationSystem = (newEducationSystem: string[]): FutureExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): FutureExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationSystemFees = (newEducationSystemFees: number[]): FutureExpensesAction => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

export const memberPositionScope = (newMemberPositionScope: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_POSITION_SCOPE',
    payload: newMemberPositionScope,
});

export const memberPartnerPositionScope = (newMemberPartnerPositionScope: string | null): FutureExpensesAction => ({
    type: 'SET_MEMBER_PARTNER_POSITION_SCOPE',
    payload: newMemberPartnerPositionScope,
});

export const familyNationalInsurance = (newFamilyNationalInsurance: number): FutureExpensesAction => ({
    type: 'SET_FAMILY_NATIONAL_INSURANCE',
    payload: newFamilyNationalInsurance,
});

/* Future Expenses*/
export const setFutureExpenses = (newFutureExpenses: number[]): FutureExpensesAction => ({
    type: 'SET_FUTURE_EXPENSES',
    payload: newFutureExpenses,
});

export const setFuturePropertyTaxExpenses = (newFuturePropertyTaxExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES',
    payload: newFuturePropertyTaxExpenses,
});

export const setFutureWaterAndSewerExpenses = (newFutureWaterAndSewerExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES',
    payload: newFutureWaterAndSewerExpenses,
});

// const setFutureGasExpenses = (newFutureGasExpenses: number): Action => ({
//     type: 'SET_FUTURE_GAS_EXPENSES',
//     payload: newFutureGasExpenses,
// });

// const setFutureElectricityExpenses = (newFutureElectricityExpenses: number): Action => ({
//     type: 'SET_FUTURE_ELECTRICITY_EXPENSES',
//     payload: newFutureElectricityExpenses,
// });

export const setFutureEnergyExpenses = (newFutureEnergyExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_ENERGY_EXPENSES',
    payload: newFutureEnergyExpenses,
});

export const setFutureHouseMaintenanceExpenses = (newFutureMaintenanceExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES',
    payload: newFutureMaintenanceExpenses,
});

export const setFutureGardeningExpenses = (newFutureGardeningExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_GARDENING_EXPENSES',
    payload: newFutureGardeningExpenses,
});

export const setFutureNetworkingExpenses = (newFutureNetworkingExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_NETWORKING_EXPENSES',
    payload: newFutureNetworkingExpenses,
});

export const setFutureInternetExpenses = (newFutureInternetExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_INTERNET_EXPENSES',
    payload: newFutureInternetExpenses,
});

export const setFutureVehicleExpenses = (newFutureVehicleExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_VEHICLE_EXPENSES',
    payload: newFutureVehicleExpenses,
});

export const setFutureEducationSystemExpenses = (newFutureEducationSystemExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES',
    payload: newFutureEducationSystemExpenses,
});

export const setFutureKindergartenExpenses = (index: number, value: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_KINDERGARTEN_EXPENSES',
    //payload: value,
    payload: { index, value },
});

export const setFutureSchoolExpenses = (index: number, value: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_SCHOOL_EXPENSES',
    //payload: value,
    payload: { index, value },
});

export const setFutureHighSchoolExpenses = (index: number, value: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES',
    payload: { index, value },
});

// export const setFutureKindergartenExpenses = (index: number, value: number): Action => {
//     console.log(`Setting Future Kindergarten Expenses for index: ${index}, value: ${value}`);
//     return { type: 'SET_FUTURE_KINDERGARTEN_EXPENSES', payload: { index, value } };
// };

// export const setFutureSchoolExpenses = (index: number, value: number): Action => {
//     console.log(`Setting Future School Expenses for index: ${index}, value: ${value}`);
//     return { type: 'SET_FUTURE_SCHOOL_EXPENSES', payload: { index, value } };
// };

// export const setFutureHighSchoolExpenses = (index: number, value: number): Action => {
//     console.log(`Setting Future High School Expenses for index: ${index}, value: ${value}`);
//     return { type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES', payload: { index, value } };
// };

export const setFuturePrivateLessonExpenses = (newFutureLessonExpenses: number[]): FutureExpensesAction => ({
    type: 'SET_FUTURE_PRIVATE_LESSON_EXPENSES',
    payload: newFutureLessonExpenses,
});

export const setFutureTeenageClassExpenses = (newFutureTeenageClassExpenses: number[]): FutureExpensesAction => ({
    type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES',
    payload: newFutureTeenageClassExpenses,
});

export const setFutureEducationTransportationExpenses = (newFutureTransportationExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES',
    payload: newFutureTransportationExpenses,
});

export const setFutureEducationPersonalCareExpenses = (index: number, value: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES',
    payload: { index, value },
});

export const setFutureEducationDayCareExpenses = (index: number, value: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES',
    payload: { index, value },
});

// const setFutureTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
//     type: 'SET_FUTURE_TUITIONS_EXPENSES',
//     payload: newTuitionsExpenses,
// });

// export const setFutureSafetyNetExpenses = (newFutureSafetyNetExpenses: number): Action => ({
//     type: 'SET_FUTURE_SAFETY_NET_EXPENSES',
//     payload: newFutureSafetyNetExpenses,
// });

export const setFutureHealthInsuranceExpenses = (newFutureHealthInsuranceExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES',
    payload: newFutureHealthInsuranceExpenses,
});

export const setFutureDentistExpenses = (newFutureDentistExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_DENTIST_EXPENSES',
    payload: newFutureDentistExpenses,
});

export const setFuturePartnerDentistExpenses = (newFuturePartnerDentistExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_PARTNER_DENTIST_EXPENSES',
    payload: newFuturePartnerDentistExpenses,
});

export const setFutureChildrenDentistExpenses = (newFutureChildrenDentistExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_CHILDREN_DENTIST_EXPENSES',
    payload: newFutureChildrenDentistExpenses,
});

export const setFutureWelfareExpenses = (newFutureWelfareExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_WELFARE_EXPENSES',
    payload: newFutureWelfareExpenses,
});

export const setFutureFoodExpenses = (newFutureFoodExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFutureFoodExpenses,
});

export const setFutureDiningRoomExpenses = (newFutureDiningRoomExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFutureDiningRoomExpenses,
});

export const setFutureLaundryExpenses = (newFutureLaundryExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_LAUNDRY_EXPENSES',
    payload: newFutureLaundryExpenses,
});

export const setFutureFlatTaxExpenses = (newFutureFlatTaxExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_FLAT_TAX_EXPENSES',
    payload: newFutureFlatTaxExpenses,
});

export const setFutureGrossTaxExpenses = (newFutureGrossTaxExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_GROSS_TAX_EXPENSES',
    payload: newFutureGrossTaxExpenses,
});

export const setFutureAlimonyExpenses = (newFutureAlimonyExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_ALIMONY_EXPENSES',
    payload: newFutureAlimonyExpenses,
});

export const setFutureCleaningExpenses = (newFutureCleaningExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_CLEANING_EXPENSES',
    payload: newFutureCleaningExpenses,
});

// const setFutureDecorationsExpenses = (newFutureDecorationsExpenses: number): Action => ({
//     type: 'SET_FUTURE_DECORATIONS_EXPENSES',
//     payload: newFutureDecorationsExpenses,
// });

export const setFutureOtherExpenses = (newFutureOtherExpenses: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_OTHER_EXPENSES',
    payload: newFutureOtherExpenses,
});

/* Added */
export const setFutureGrossIncome = (newFutureGrossIncome: number): FutureExpensesAction => ({
    type: 'SET_FUTURE_GROSS_INCOME',
    payload: newFutureGrossIncome,
});

export const setPrivateLessonExpenses = (newPrivateLessonExpenses: number[]): FutureExpensesAction => ({
    type: 'SET_PRIVATE_LESSON_EXPENSES',
    payload: newPrivateLessonExpenses,
});

export const setTeenageClassExpenses = (newTeenageClassExpenses: number[]): FutureExpensesAction => ({
    type: 'SET_TEENAGE_CLASS_EXPENSES',
    payload: newTeenageClassExpenses,
});

/* Define the reducer function that takes the current state and an action */
const futureExpensesReducer = (state: FutureExpensesState, action: FutureExpensesAction): FutureExpensesState => {
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
        /* Future Expenses*/
        case 'SET_FUTURE_EXPENSES':
            return { ...state, futureExpenses: action.payload };
        case 'SET_FUTURE_PROPERTY_TAX_EXPENSES':
            return { ...state, futurePropertyTaxExpenses: action.payload };
        case 'SET_FUTURE_WATER_AND_SEWER_EXPENSES':
            return { ...state, futureWaterAndSewerExpenses: action.payload };
        // case 'SET_FUTURE_GAS_EXPENSES':
        //     return { ...state, futureGasExpenses: action.payload };
        // case 'SET_FUTURE_ELECTRICITY_EXPENSES':
        //     return { ...state, futureElectricityExpenses: action.payload };
        case 'SET_FUTURE_ENERGY_EXPENSES':
            return { ...state, futureEnergyExpenses: action.payload };
        case 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES':
            return { ...state, futureHouseMaintenanceExpenses: action.payload };
        case 'SET_FUTURE_GARDENING_EXPENSES':
            return { ...state, futureGardeningExpenses: action.payload };
        case 'SET_FUTURE_NETWORKING_EXPENSES':
            return { ...state, futureNetworkingExpenses: action.payload };
        case 'SET_FUTURE_INTERNET_EXPENSES':
            return { ...state, futureInternetExpenses: action.payload };
        case 'SET_FUTURE_VEHICLE_EXPENSES':
            return { ...state, futureVehicleExpenses: action.payload };
        case 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES':
            return { ...state, futureEducationSystemExpenses: action.payload };

        // case 'SET_FUTURE_KINDERGARTEN_EXPENSES':
        //     const updatedFutureKindergartenExpenses = [...state.futureKindergartenExpenses];
        //     updatedFutureKindergartenExpenses[action.payload.index] = action.payload.value;
        //     return { ...state, futureKindergartenExpenses: updatedFutureKindergartenExpenses };
        // case 'SET_FUTURE_SCHOOL_EXPENSES':
        //     const updatedFutureSchoolExpenses = [...state.futureSchoolExpenses];
        //     updatedFutureSchoolExpenses[action.payload.index] = action.payload.value;
        //     return { ...state, futureSchoolExpenses: updatedFutureSchoolExpenses };
        // case 'SET_FUTURE_HIGH_SCHOOL_EXPENSES':
        //     const updatedFutureHighSchoolExpenses = [...state.futureHighSchoolExpenses];
        //     updatedFutureHighSchoolExpenses[action.payload.index] = action.payload.value;
        //     return { ...state, futureHighSchoolExpenses: updatedFutureHighSchoolExpenses };

        case 'SET_FUTURE_KINDERGARTEN_EXPENSES': {
            const updatedChildrenDataFutureKindergartenExpenses = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, futureKindergartenExpenses: action.payload.value }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataFutureKindergartenExpenses };
        }

        case 'SET_FUTURE_SCHOOL_EXPENSES': {
            const updatedChildrenDataFutureSchoolExpenses = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, futureSchoolExpenses: action.payload.value }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataFutureSchoolExpenses };
        }

        case 'SET_FUTURE_HIGH_SCHOOL_EXPENSES': {
            const updatedChildrenDataFutureHighSchoolExpenses = state.childrenData.map((child, index) =>
                index === action.payload.index
                    ? { ...child, futureHighSchoolExpenses: action.payload.value }
                    : child
            );
            return { ...state, childrenData: updatedChildrenDataFutureHighSchoolExpenses };
        }

        case 'SET_FUTURE_PRIVATE_LESSON_EXPENSES':
            return { ...state, futurePrivateLessonExpenses: action.payload };
        case 'SET_FUTURE_TEENAGE_CLASS_EXPENSES':
            return { ...state, futureTeenageClassExpenses: action.payload };
        case 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES':
            return { ...state, futureEducationTransportationExpenses: action.payload };

        case 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES': {
            const updatedChildrenDataFuturePersonalCareExpenses = state.childrenData.map((child, index) =>
                index === action.payload.index
                ? { ...child, futureEducationPersonalCareExpenses: action.payload.value }
                : child
            );
            return { ...state, childrenData: updatedChildrenDataFuturePersonalCareExpenses };
        }

        case 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES': {
            const updatedChildrenDataFutureDayCareExpenses = state.childrenData.map((child, index) =>
                index === action.payload.index
                ? { ...child, futureEducationDayCareExpenses: action.payload.value }
                : child
            );
            return { ...state, childrenData: updatedChildrenDataFutureDayCareExpenses };
        }

        // case 'SET_FUTURE_TUITIONS_EXPENSES':
        //     return { ...state, futureTuitionsExpenses: action.payload };
        // case 'SET_FUTURE_SAFETY_NET_EXPENSES':
        //     return { ...state, futureSafetyNetExpenses: action.payload };
        case 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES':
            return { ...state, futureHealthInsuranceExpenses: action.payload };
        case 'SET_FUTURE_DENTIST_EXPENSES':
            return { ...state, futureDentistExpenses: action.payload };
        case  'SET_FUTURE_PARTNER_DENTIST_EXPENSES':
            return { ...state, futurePartnerDentistExpenses: action.payload };
        case 'SET_FUTURE_CHILDREN_DENTIST_EXPENSES':
            return { ...state, futureChildrenDentistExpenses: action.payload };
        case 'SET_FUTURE_WELFARE_EXPENSES':
            return { ...state, futureWelfareExpenses: action.payload };
        case 'SET_FUTURE_FOOD_EXPENSES':
            return { ...state, futureFoodExpenses: action.payload };
        case 'SET_FUTURE_DINING_ROOM_EXPENSES':
            return { ...state, futureDiningRoomExpenses: action.payload };
        case 'SET_FUTURE_LAUNDRY_EXPENSES':
            return { ...state, futureLaundryExpenses: action.payload };
        case 'SET_FUTURE_FLAT_TAX_EXPENSES':
            return { ...state, futureFlatTaxExpenses: action.payload };
        case 'SET_FUTURE_GROSS_TAX_EXPENSES':
            return { ...state, futureGrossTaxExpenses: action.payload };
        case 'SET_FUTURE_ALIMONY_EXPENSES':
            return { ...state, futureAlimonyExpenses: action.payload };
        case 'SET_FUTURE_CLEANING_EXPENSES':
            return { ...state, futureCleaningExpenses: action.payload };
        // case 'SET_FUTURE_DECORATIONS_EXPENSES':
        //     return { ...state, futureDecorationsExpenses: action.payload };
        case 'SET_FUTURE_OTHER_EXPENSES':
            return { ...state, futureOtherExpenses: action.payload };
        /* Added */
        case 'SET_FUTURE_GROSS_INCOME':
            return { ...state, futureGrossIncome: action.payload };
        case 'SET_PRIVATE_LESSON_EXPENSES':
            return { ...state, privateLessonExpenses: action.payload };
        case 'SET_TEENAGE_CLASS_EXPENSES':
            return { ...state, teenageClassExpenses: action.payload };
        default:
            return state;
    }
};

const FutureExpensesContext = createContext<{
    state: FutureExpensesState;
    dispatch: React.Dispatch<FutureExpensesAction>;
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
    /* Future Expenses */
    setFutureExpenses: (newFutureExpenses: number[]) => void;
    setFuturePropertyTaxExpenses: (newFuturePropertyTaxExpenses: number) => void;
    setFutureWaterAndSewerExpenses: (newFutureWaterAndSewerExpenses: number) => void;
    // setFutureGasExpenses: (newFutureGasExpenses: number) => void;
    // setFutureElectricityExpenses: (newFutureElectricityExpenses: number) => void;
    setFutureEnergyExpenses: (newFutureEnergyExpenses: number) => void;
    setFutureHouseMaintenanceExpenses: (newFutureMaintenanceExpenses: number) => void;
    setFutureGardeningExpenses: (newFutureGardeningExpenses: number) => void;
    setFutureNetworkingExpenses: (newFutureNetworkingExpenses: number) => void;
    setFutureInternetExpenses: (newFutureInternetExpenses: number) => void;
    setFutureVehicleExpenses: (newVFutureVehicleExpenses: number) => void;
    setFutureEducationSystemExpenses: (newFutureEducationSystemExpenses: number) => void;
    setFutureKindergartenExpenses: (index: number, value: number) => void;
    setFutureSchoolExpenses: (index: number, value: number) => void;
    setFutureHighSchoolExpenses: (index: number, value: number) => void;
    setFuturePrivateLessonExpenses: (newFutureLessonExpenses: number[]) => void;
    setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses: number[]) => void;
    setFutureEducationTransportationExpenses: (newFutureTransportationExpenses: number) => void;
    setFutureEducationPersonalCareExpenses: (index: number, value: number) => void;
    setFutureEducationDayCareExpenses: (index: number, value: number) => void;
    // setFutureTuitionsExpenses: (newFutureTuitionsExpenses: number) => void;
    // setFutureSafetyNetExpenses: (newFutureSafetyNetExpenses: number) => void;
    setFutureHealthInsuranceExpenses: (newFutureHealthInsuranceExpenses: number) => void;
    setFutureDentistExpenses: (newFutureDentistExpenses: number) => void;
    setFuturePartnerDentistExpenses: (newFuturePartnerDentistExpenses: number) => void;
    setFutureChildrenDentistExpenses: (newFutureChildrenDentistExpenses: number) => void;
    setFutureWelfareExpenses: (newFutureWelfareExpenses: number) => void;
    setFutureFoodExpenses: (newFutureFoodExpenses: number) => void;
    setFutureDiningRoomExpenses: (newFutureDiningRoomExpenses: number) => void;
    setFutureLaundryExpenses: (newFutureLaundryExpenses: number) => void;
    setFutureFlatTaxExpenses: (newFutureFlatTaxExpenses: number) => void;
    setFutureGrossTaxExpenses: (newFutureGrossTaxExpenses: number) => void;
    setFutureAlimonyExpenses: (newFutureAlimonyExpenses: number) => void;
    setFutureCleaningExpenses: (newFutureCleaningExpenses: number) => void;
    // setFutureDecorationsExpenses: (newFutureDecorationsExpenses: number) => void;
    setFutureOtherExpenses: (newFutureOtherExpenses: number) => void;
    /* Added */
    setFutureGrossIncome: (newFutureGrossIncome: number) => void;
    setPrivateLessonExpenses: (newPrivateLessonExpenses: number[]) => void;
    setTeenageClassExpenses: (newTeenageClassExpenses: number[]) => void;
}>({
    state: futureExpensesInitialState,
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
    /* Future Expenses*/
    setFutureExpenses: () => null,
    setFuturePropertyTaxExpenses: () => null,
    setFutureWaterAndSewerExpenses: () => null,
    // setFutureGasExpenses: () => null,
    // setFutureElectricityExpenses: () => null,
    setFutureEnergyExpenses: () => null,
    setFutureHouseMaintenanceExpenses: () => null,
    setFutureGardeningExpenses: () => null,
    setFutureNetworkingExpenses: () => null,
    setFutureInternetExpenses: () => null,
    setFutureVehicleExpenses: () => null,
    setFutureEducationSystemExpenses: () => null,
    setFutureKindergartenExpenses: () => null,
    setFutureSchoolExpenses: () => null,
    setFutureHighSchoolExpenses: () => null,
    setFuturePrivateLessonExpenses: () => null,
    setFutureTeenageClassExpenses: () => null,
    // updatedTeenageClassExpenses: () => null,
    setFutureEducationTransportationExpenses: () => null,
    setFutureEducationPersonalCareExpenses: () => null,
    setFutureEducationDayCareExpenses: () => null,
    // setFutureTuitionsExpenses: () => null,
    // setFutureSafetyNetExpenses: () => null,
    setFutureHealthInsuranceExpenses: () => null,
    setFutureDentistExpenses: () => null,
    setFuturePartnerDentistExpenses: () => null,
    setFutureChildrenDentistExpenses: () => null,
    setFutureWelfareExpenses: () => null,
    setFutureFoodExpenses: () => null,
    setFutureDiningRoomExpenses: () => null,
    setFutureLaundryExpenses: () => null,
    setFutureFlatTaxExpenses: () => null,
    setFutureGrossTaxExpenses: () => null,
    setFutureAlimonyExpenses: () => null,
    setFutureCleaningExpenses: () => null,
    // setFutureDecorationsExpenses: () => null,
    setFutureOtherExpenses: () => null,
    /* Added */
    setFutureGrossIncome: () => null,
    setPrivateLessonExpenses: () => null,
    setTeenageClassExpenses: () => null,
});

export const useFutureExpensesState = () => {
    const context = useContext(FutureExpensesContext);
    if (!context) {
        throw new Error('useFutureExpensesState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface FutureExpensesProviderProps {
    children: React.ReactNode;
}

export const FutureExpensesProvider: React.FC<FutureExpensesProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(futureExpensesReducer, futureExpensesInitialState);
    return (
        <FutureExpensesContext.Provider
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
                /* Future Expenses*/
                setFutureExpenses: (newFutureExpenses) => dispatch({ type: 'SET_FUTURE_EXPENSES', payload: newFutureExpenses }),
                setFuturePropertyTaxExpenses: (newFuturePropertyTaxExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES', payload: newFuturePropertyTaxExpenses }),
                // setFutureGasExpenses: (newFutureGasExpenses) => dispatch({ type: 'SET_FUTURE_GAS_EXPENSES', payload: newFutureGasExpenses }),
                // setFutureElectricityExpenses: (newFutureElectricityExpenses) => dispatch({ type: 'SET_FUTURE_ELECTRICITY_EXPENSES', payload: newFutureElectricityExpenses }),
                setFutureEnergyExpenses: (newFutureEnergyExpenses) => dispatch({ type: 'SET_FUTURE_ENERGY_EXPENSES', payload: newFutureEnergyExpenses }),
                setFutureWaterAndSewerExpenses: (newFutureWaterAndSewerExpenses) =>
                    dispatch({ type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES', payload: newFutureWaterAndSewerExpenses }),
                setFutureHouseMaintenanceExpenses: (newFutureMaintenanceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES', payload: newFutureMaintenanceExpenses }),
                setFutureGardeningExpenses: (newFutureGardeningExpenses) => dispatch({ type: 'SET_FUTURE_GARDENING_EXPENSES', payload: newFutureGardeningExpenses }),
                setFutureNetworkingExpenses: (newFutureNetworkingExpenses) => dispatch({ type: 'SET_FUTURE_NETWORKING_EXPENSES', payload: newFutureNetworkingExpenses }),
                setFutureInternetExpenses: (newFutureInternetExpenses) => dispatch({ type: 'SET_FUTURE_INTERNET_EXPENSES', payload: newFutureInternetExpenses }),
                setFutureVehicleExpenses: (newFutureVehicleExpenses) => dispatch({ type: 'SET_FUTURE_VEHICLE_EXPENSES', payload: newFutureVehicleExpenses }),
                setFutureEducationSystemExpenses: (newFutureEducationSystemExpenses) =>
                    dispatch({ type: 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES', payload: newFutureEducationSystemExpenses }),
                setFutureKindergartenExpenses: (index, value) => dispatch({ type: 'SET_FUTURE_KINDERGARTEN_EXPENSES', payload: { index, value }}),
                //setFutureSchoolExpenses: (value) => dispatch({ type: 'SET_FUTURE_SCHOOL_EXPENSES', payload: value }),
                setFutureSchoolExpenses: (index, value) => dispatch({ type: 'SET_FUTURE_SCHOOL_EXPENSES', payload: { index, value }}),
                //setFutureHighSchoolExpenses: (value) => dispatch({ type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES', payload: value }),
                setFutureHighSchoolExpenses: (index, value) => dispatch({ type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES', payload: { index, value }}),
                setFuturePrivateLessonExpenses: (newFutureLessonExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PRIVATE_LESSON_EXPENSES', payload: newFutureLessonExpenses }),
                setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses) => dispatch({ type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES', payload: newFutureTeenageClassExpenses }),
                setFutureEducationTransportationExpenses: (newFutureTransportationExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES', payload: newFutureTransportationExpenses }),
                setFutureEducationPersonalCareExpenses: (index, value) => dispatch({ type: 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES', payload: { index, value}}),
                setFutureEducationDayCareExpenses: (index, value) => dispatch({ type: 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES', payload: { index, value}}),
                // setFutureTuitionsExpenses: (newFutureTuitionsExpenses) => dispatch({ type: 'SET_FUTURE_TUITIONS_EXPENSES', payload: newFutureTuitionsExpenses }),
                // setFutureSafetyNetExpenses: (newFutureSafetyNetExpenses) =>
                //    dispatch({ type: 'SET_FUTURE_SAFETY_NET_EXPENSES', payload: newFutureSafetyNetExpenses }),
                setFutureHealthInsuranceExpenses: (newFutureHealthInsuranceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES', payload: newFutureHealthInsuranceExpenses }),
                setFutureDentistExpenses: (newFutureDentistExpenses) => dispatch({ type: 'SET_FUTURE_DENTIST_EXPENSES', payload: newFutureDentistExpenses }),
                setFuturePartnerDentistExpenses: (newFuturePartnerDentistExpenses) => dispatch({ type: 'SET_FUTURE_PARTNER_DENTIST_EXPENSES', payload: newFuturePartnerDentistExpenses }),
                setFutureChildrenDentistExpenses: (newFutureChildrenDentistExpenses) => dispatch({ type: 'SET_FUTURE_CHILDREN_DENTIST_EXPENSES', payload: newFutureChildrenDentistExpenses }),
                setFutureWelfareExpenses: (newFutureWelfareExpenses) => dispatch({ type: 'SET_FUTURE_WELFARE_EXPENSES', payload: newFutureWelfareExpenses }),
                setFutureFoodExpenses: (newFutureFoodExpenses) => dispatch({ type: 'SET_FUTURE_FOOD_EXPENSES', payload: newFutureFoodExpenses }),
                setFutureDiningRoomExpenses: (newFutureDiningRoomExpenses) => dispatch({ type: 'SET_FUTURE_DINING_ROOM_EXPENSES', payload: newFutureDiningRoomExpenses }),
                setFutureLaundryExpenses: (newFutureLaundryExpenses) => dispatch({ type: 'SET_FUTURE_LAUNDRY_EXPENSES', payload: newFutureLaundryExpenses }),
                setFutureFlatTaxExpenses: (newFutureFlatTaxExpenses) => dispatch({ type: 'SET_FUTURE_FLAT_TAX_EXPENSES', payload: newFutureFlatTaxExpenses }),
                setFutureGrossTaxExpenses: (newFutureGrossTaxExpenses) => dispatch({ type: 'SET_FUTURE_GROSS_TAX_EXPENSES', payload: newFutureGrossTaxExpenses }),
                setFutureAlimonyExpenses: (newFutureAlimonyExpenses) => dispatch({ type: 'SET_FUTURE_ALIMONY_EXPENSES', payload: newFutureAlimonyExpenses }),
                setFutureCleaningExpenses: (newFutureCleaningExpenses) => dispatch({ type: 'SET_FUTURE_CLEANING_EXPENSES', payload: newFutureCleaningExpenses }),
                // setFutureDecorationsExpenses: (newFutureDecorationsExpenses) => dispatch({ type: 'SET_FUTURE_DECORATIONS_EXPENSES', payload: newFutureDecorationsExpenses }),
                setFutureOtherExpenses: (newFutureOtherExpenses) => dispatch({ type: 'SET_FUTURE_OTHER_EXPENSES', payload: newFutureOtherExpenses }),
                /* Added */
                setFutureGrossIncome: (newFutureGrossIncome) => dispatch({ type: 'SET_FUTURE_GROSS_INCOME', payload: newFutureGrossIncome }),
                setPrivateLessonExpenses: (newPrivateLessonExpenses) => dispatch({ type: 'SET_PRIVATE_LESSON_EXPENSES', payload: newPrivateLessonExpenses }),
                setTeenageClassExpenses: (newTeenageClassExpenses) => dispatch({ type: 'SET_TEENAGE_CLASS_EXPENSES', payload: newTeenageClassExpenses }),
            }}
        >
            {children}
        </FutureExpensesContext.Provider>
    );
};