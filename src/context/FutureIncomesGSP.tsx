/* src/context/FutureIncomes.tsx */
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

export interface FutureIncomesState {
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
    /* Future Incomes */
    // futurePersonalBudget: number;
    futureNetIncome: number;
    futureGrossIncome: number;
    futurePartnerNetIncome: number;
    futurePartnerGrossIncome: number;
    futurePensionAllowance: number;
    futurePartnerPensionAllowance: number;
    futureNationalInsuranceAllowance: number[];
    futureNationalInsuranceAllowanceCommunity: number;
    futureElderlyPension: number;
    futurePartnerElderlyPension: number;
    futureRecoveryFee: number;
    futurePartnerRecoveryFee: number;
    futureEducationFund: number;
    futurePartnerEducationFund: number;
    futureWelfareIncomes: number;
    futureDentistIncomes: number,
    futurePartnerDentistIncomes: number,
    futureChildrenDentistIncomes: number,
    futureChildrenAddition: number;
    futureChildrenSafetyNet: number;
    futureFamilySafetyNet: number;
    futureProvisions: number;
    futureAdaptationGrant: number;
    futureLaundry: number;
    // futureGas: number;
    futureHygiene: number;
    futureMaintenance: number;
    futureVehicle: number;
    // futureEnergy: number;
    futureBenefitForWork: number;
    futureOutsourcedFood: number;
    futureChronicleTreatment: number;
    futureOtherIncome: number;
}

// Define action types as a union of string literals for better type safety
// type ActionType =
type FutureIncomesActionType =
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
    /* Future Incomes*/
    // | 'SET_FUTURE_PERSONAL_BUDGET'
    | 'SET_FUTURE_NET_INCOME'
    | 'SET_FUTURE_GROSS_INCOME'
    | 'SET_FUTURE_PARTNER_NET_INCOME'
    | 'SET_FUTURE_PARTNER_GROSS_INCOME'
    | 'SET_FUTURE_CHILDREN_ADDITION'
    | 'SET_FUTURE_CHILDREN_SAFETY_NET'
    | 'SET_FUTURE_FAMILY_SAFETY_NET'
    | 'SET_FUTURE_PROVISIONS'
    | 'SET_FUTURE_LAUNDRY'
    | 'SET_FUTURE_GAS'
    | 'SET_FUTURE_HYGIENE'
    | 'SET_FUTURE_MAINTENANCE'
    | 'SET_FUTURE_VEHICLE'
    | 'SET_FUTURE_ENERGY'
    | 'SET_FUTURE_BENEFIT_FOR_WORK'
    | 'SET_FUTURE_OUTSOURCED_FOOD'
    | 'SET_FUTURE_CHRONICLE_TREATMENT'
    | 'SET_FUTURE_PENSION_ALLOWANCE'
    | 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE'
    | 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE'
    | 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY'
    | 'SET_FUTURE_ELDERLY_PENSION'
    | 'SET_FUTURE_PARTNER_ELDERLY_PENSION'
    | 'SET_FUTURE_RECOVERY_FEE'
    | 'SET_FUTURE_PARTNER_RECOVERY_FEE'
    | 'SET_FUTURE_EDUCATION_FUND'
    | 'SET_FUTURE_PARTNER_EDUCATION_FUND'
    | 'SET_FUTURE_WELFARE_INCOMES'
    | 'SET_FUTURE_DENTIST_INCOMES'
    | 'SET_FUTURE_PARTNER_DENTIST_INCOMES'
    | 'SET_FUTURE_CHILDREN_DENTIST_INCOMES'
    | 'SET_FUTURE_ADAPTATION_GRANT'
    | 'SET_FUTURE_OTHER_INCOME';

interface FutureIncomesAction {
    type: FutureIncomesActionType;
    payload: any;
}

const futureIncomesInitialState: FutureIncomesState = {
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
    /* Future Incomes*/
    // futurePersonalBudget: 4954,
    futureNetIncome: 0,
    futureGrossIncome: 0,
    futurePartnerNetIncome: 0,
    futurePartnerGrossIncome: 0,
    futurePensionAllowance: 0,
    futurePartnerPensionAllowance: 0,
    futureNationalInsuranceAllowance: [],
    futureNationalInsuranceAllowanceCommunity: 0,
    futureElderlyPension: 0,
    futurePartnerElderlyPension: 0,
    futureRecoveryFee: 0,
    futurePartnerRecoveryFee: 0,
    futureEducationFund: 0,
    futurePartnerEducationFund: 0,
    futureWelfareIncomes: 0,
    futureDentistIncomes: 0,
    futurePartnerDentistIncomes: 0,
    futureChildrenDentistIncomes: 0,
    futureChildrenAddition: 0,
    futureChildrenSafetyNet: 0,
    futureFamilySafetyNet: 0,
    futureProvisions: 0,
    futureAdaptationGrant: 0,
    futureLaundry: 0,
    // futureGas: 0,
    futureHygiene: 0,
    futureMaintenance: 0,
    futureVehicle: 0,
    // futureEnergy: 0,
    futureBenefitForWork: 0,
    futureOutsourcedFood: 0,
    futureChronicleTreatment: 0,
    futureOtherIncome: 0,
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
export const setFamilyStatus = (newStatus: string | null): FutureIncomesAction => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): FutureIncomesAction => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number): FutureIncomesAction => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): FutureIncomesAction => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): FutureIncomesAction => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const childrenData = (newChildrenData: ChildData[]): FutureIncomesAction => ({
    type: 'SET_CHILDREN_DATA',
    payload: newChildrenData,
});

export const memberAge = (newMemberAge: number | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const memberGoldenAge = (newMemberGoldenAge: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_GOLDEN_AGE',
    payload: newMemberGoldenAge,
});

export const memberPartnerGoldenAge = (newMemberPartnerGoldenAge: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_GOLDEN_AGE',
    payload: newMemberPartnerGoldenAge,
});

export const educationSystem = (newEducationSystem: string[]): FutureIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): FutureIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationSystemFees = (newEducationSystemFees: number[]): FutureIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

export const memberPositionScope = (newMemberPositionScope: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_POSITION_SCOPE',
    payload: newMemberPositionScope,
});

export const memberPartnerPositionScope = (newMemberPartnerPositionScope: string | null): FutureIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_POSITION_SCOPE',
    payload: newMemberPartnerPositionScope,
});

export const familyNationalInsurance = (newFamilyNationalInsurance: number): FutureIncomesAction => ({
    type: 'SET_FAMILY_NATIONAL_INSURANCE',
    payload: newFamilyNationalInsurance,
});

/* Future Incomes */
export const setFutureNetIncome = (newFutureNetIncome: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_NET_INCOME',
    payload: newFutureNetIncome,
});

export const setFutureGrossIncome = (income: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_GROSS_INCOME',
    payload: income,
});

export const setFuturePartnerNetIncome = (newFuturePartnerNetIncome: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_NET_INCOME',
    payload: newFuturePartnerNetIncome,
});

export const setFuturePartnerGrossIncome = (income: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_GROSS_INCOME',
    payload: income,
});

export const setFuturePensionAllowance = (newFuturePensionAllowance: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PENSION_ALLOWANCE',
    payload: newFuturePensionAllowance,
});

export const setFuturePartnerPensionAllowance = (newFuturePartnerPensionAllowance: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE',
    payload: newFuturePartnerPensionAllowance,
});

export const setFutureNationalInsuranceAllowance = (newFutureNationalInsuranceAllowance: number[]): FutureIncomesAction => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE',
    payload: newFutureNationalInsuranceAllowance,
});

export const setFutureNationalInsuranceAllowanceCommunity = (newFutureNationalInsuranceAllowanceCommunity: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY',
    payload: newFutureNationalInsuranceAllowanceCommunity,
});

export const setFutureElderlyPension = (newFutureElderlyPension: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_ELDERLY_PENSION',
    payload: newFutureElderlyPension,
});

export const setFuturePartnerElderlyPension = (newFuturePartnerElderlyPension: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_ELDERLY_PENSION',
    payload: newFuturePartnerElderlyPension,
});

export const setFutureRecoveryFee = (newFutureRecoveryFee: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_RECOVERY_FEE',
    payload: newFutureRecoveryFee,
});

export const setFuturePartnerRecoveryFee = (newFuturePartnerRecoveryFee: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_RECOVERY_FEE',
    payload: newFuturePartnerRecoveryFee,
});

export const setFutureEducationFund = (newFutureEducationFund: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_EDUCATION_FUND',
    payload: newFutureEducationFund,
});

export const setFuturePartnerEducationFund = (newFuturePartnerEducationFund: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_EDUCATION_FUND',
    payload: newFuturePartnerEducationFund,
});

export const setFutureWelfareIncomes = (newFutureWelfareIncomes: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_WELFARE_INCOMES',
    payload: newFutureWelfareIncomes,
});

export const setFutureDentistIncomes = (newFutureDentistIncomes: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_DENTIST_INCOMES',
    payload: newFutureDentistIncomes,
});

export const setFuturePartnerDentistIncomes = (newFuturePartnerDentistIncomes: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PARTNER_DENTIST_INCOMES',
    payload: newFuturePartnerDentistIncomes,
});

export const setFutureChildrenDentistIncomes = (newFutureChildrenDentistIncomes: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_CHILDREN_DENTIST_INCOMES',
    payload: newFutureChildrenDentistIncomes,
});

export const setFutureChildrenAddition = (newFutureAddition: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_CHILDREN_ADDITION',
    payload: newFutureAddition,
});

export const setFutureChildrenSafetyNet = (newFutureChildrenSafetyNet: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_CHILDREN_SAFETY_NET',
    payload: newFutureChildrenSafetyNet,
});

export const setFutureFamilySafetyNet = (newFutureFamilySafetyNet: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_FAMILY_SAFETY_NET',
    payload: newFutureFamilySafetyNet,
});

export const setFutureProvisions = (newFutureProvisions: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_PROVISIONS',
    payload: newFutureProvisions,
});

export const setFutureAdaptationGrant = (newFutureAdaptationGrant: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_ADAPTATION_GRANT',
    payload: newFutureAdaptationGrant,
});

export const setFutureLaundry = (newFutureLaundry: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_LAUNDRY',
    payload: newFutureLaundry,
});

// const setFutureGas = (newFutureGas: number): Action => ({
//     type: 'SET_FUTURE_GAS',
//     payload: newFutureGas,
// });

export const setFutureHygiene = (newFutureHygiene: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_HYGIENE',
    payload: newFutureHygiene,
});

export const setFutureMaintenance = (newFutureMaintenance: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_MAINTENANCE',
    payload: newFutureMaintenance,
});

export const setFutureVehicle = (newFutureVehicle: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_VEHICLE',
    payload: newFutureVehicle,
});

export const setFutureEnergy = (newFutureEnergy: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_ENERGY',
    payload: newFutureEnergy,
});

export const setFutureBenefitForWork = (newFutureBenefit: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_BENEFIT_FOR_WORK',
    payload: newFutureBenefit,
});

export const setFutureOutsourcedFood = (newFutureFood: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_OUTSOURCED_FOOD',
    payload: newFutureFood,
});

export const setFutureChronicleTreatment = (newFutureTreatment: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_CHRONICLE_TREATMENT',
    payload: newFutureTreatment,
});

export const setFutureOtherIncome = (newFutureIncome: number): FutureIncomesAction => ({
    type: 'SET_FUTURE_OTHER_INCOME',
    payload: newFutureIncome,
});

/* Define the reducer function that takes the current state and an action */
const futureIncomesReducer = (state: FutureIncomesState, action: FutureIncomesAction): FutureIncomesState => {
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
        /* Future Incomes*/
        // case 'SET_FUTURE_PERSONAL_BUDGET':
        //     return { ...state, futurePersonalBudget: action.payload };
        case 'SET_FUTURE_NET_INCOME':
            return { ...state, futureNetIncome: action.payload };
        case 'SET_FUTURE_GROSS_INCOME':
            return { ...state, futureGrossIncome: action.payload };
        case 'SET_FUTURE_PENSION_ALLOWANCE':
            return { ...state, futurePensionAllowance: action.payload };
        case 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE':
            return { ...state, futurePartnerPensionAllowance: action.payload };
        case 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE':
            return { ...state, futureNationalInsuranceAllowance: action.payload };
        case 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY':
            return { ...state, futureNationalInsuranceAllowanceCommunity: action.payload };
        case 'SET_FUTURE_ELDERLY_PENSION':
            return { ...state, futureElderlyPension: action.payload };
        case 'SET_FUTURE_PARTNER_ELDERLY_PENSION':
            return { ...state, futurePartnerElderlyPension: action.payload };
        case 'SET_FUTURE_RECOVERY_FEE':
            return { ...state, futureRecoveryFee: action.payload };
        case 'SET_FUTURE_PARTNER_RECOVERY_FEE':
            return { ...state, futurePartnerRecoveryFee: action.payload };
        case 'SET_FUTURE_EDUCATION_FUND':
            return { ...state, futureEducationFund: action.payload };
        case 'SET_FUTURE_PARTNER_EDUCATION_FUND':
            return { ...state, futurePartnerEducationFund: action.payload };
        case 'SET_FUTURE_WELFARE_INCOMES':
            return { ...state, futureWelfareIncomes: action.payload};
        case 'SET_FUTURE_DENTIST_INCOMES':
            return { ...state, futureDentistIncomes: action.payload };
        case 'SET_FUTURE_PARTNER_DENTIST_INCOMES':
            return { ...state, futurePartnerDentistIncomes: action.payload };
        case 'SET_FUTURE_CHILDREN_DENTIST_INCOMES':
            return { ...state, futureChildrenDentistIncomes: action.payload };
        case 'SET_FUTURE_PARTNER_NET_INCOME':
            return { ...state, futurePartnerNetIncome: action.payload };
        case 'SET_FUTURE_PARTNER_GROSS_INCOME':
            return { ...state, futurePartnerGrossIncome: action.payload };
        case 'SET_FUTURE_CHILDREN_ADDITION':
            return { ...state, futureChildrenAddition: action.payload };
        case 'SET_FUTURE_CHILDREN_SAFETY_NET':
            return { ...state, futureChildrenSafetyNet: action.payload }
        case 'SET_FUTURE_PROVISIONS':
            return { ...state, futureProvisions: action.payload };
        case 'SET_FUTURE_FAMILY_SAFETY_NET':
            return { ...state, futureFamilySafetyNet: action.payload };
        case 'SET_FUTURE_ADAPTATION_GRANT':
            return { ...state, futureAdaptationGrant: action.payload}
        case 'SET_FUTURE_LAUNDRY':
            return { ...state, futureLaundry: action.payload };
        // case 'SET_FUTURE_GAS':
        //     return { ...state, futureGas: action.payload };
        case 'SET_FUTURE_HYGIENE':
            return { ...state, futureHygiene: action.payload };
        case 'SET_FUTURE_MAINTENANCE':
            return { ...state, futureMaintenance: action.payload };
        case 'SET_FUTURE_VEHICLE':
            return { ...state, futureVehicle: action.payload };
        // case 'SET_FUTURE_ENERGY':
        //     return { ...state, futureEnergy: action.payload };
        case 'SET_FUTURE_BENEFIT_FOR_WORK':
            return { ...state, futureBenefitForWork: action.payload };
        case 'SET_FUTURE_OUTSOURCED_FOOD':
            return { ...state, futureOutsourcedFood: action.payload };
        case 'SET_FUTURE_CHRONICLE_TREATMENT':
            return { ...state, futureChronicleTreatment: action.payload };
        case 'SET_FUTURE_OTHER_INCOME':
            return { ...state, futureOtherIncome: action.payload };
        default:
            return state;
    }
};

const FutureIncomesContext = createContext<{
    state: FutureIncomesState;
    dispatch: React.Dispatch<FutureIncomesAction>;
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
    /* Future Incomes*/
    // setFuturePersonalBudget: (newBudget: number) => void;
    setFutureNetIncome: (newFutureNetIncome: number) => void;
    setFutureGrossIncome: (income: number) => void;
    setFuturePartnerNetIncome: (newFuturePartnerNetIncome: number) => void;
    setFuturePartnerGrossIncome: (income: number) => void;
    setFuturePensionAllowance: (newFuturePensionAllowance: number) => void;
    setFuturePartnerPensionAllowance: (newFuturePartnerPensionAllowance: number) => void;
    setFutureNationalInsuranceAllowance: (newFutureNationalInsuranceAllowance: number[]) => void;
    setFutureNationalInsuranceAllowanceCommunity: (newFutureNationalInsuranceAllowanceCommunity: number) => void;
    setFutureElderlyPension: (newFutureElderlyPension: number) => void;
    setFuturePartnerElderlyPension: (newFuturePartnerElderlyPension: number) => void;
    setFutureRecoveryFee: (newFutureRecoveryFee: number) => void;
    setFuturePartnerRecoveryFee: (newFuturePartnerRecoveryFee: number) => void;
    setFutureEducationFund: (newFutureEducationFund: number) => void;
    setFuturePartnerEducationFund: (newFuturePartnerEducationFund: number) => void;
    setFutureWelfareIncomes: (newFutureWelfareIncomes: number) => void;
    setFutureDentistIncomes: (newFutureDentistIncomes: number) => void;
    setFuturePartnerDentistIncomes: (newFuturePartnerDentistIncomes: number) => void;
    setFutureChildrenDentistIncomes: (newFutureChildrenDentistIncomes: number) => void;
    setFutureChildrenAddition: (newFutureAddition: number) => void;
    setFutureChildrenSafetyNet: (newFutureChildrenSafetyNet: number) => void;
    setFutureFamilySafetyNet: (newFutureFamilySafetyNet: number) => void;
    setFutureProvisions: (newFutureProvisions: number) => void;
    setFutureAdaptationGrant: (newFutureAdaptationGrant: number) => void;
    setFutureLaundry: (newFutureLaundry: number) => void;
    // setFutureGas: (newGas: number) => void;
    setFutureHygiene: (newFutureHygiene: number) => void;
    setFutureMaintenance: (newFutureMaintenance: number) => void;
    setFutureVehicle: (newFutureVehicle: number) => void;
    // setFutureEnergy: (newEnergy: number) => void;
    setFutureBenefitForWork: (newFutureBenefit: number) => void;
    setFutureOutsourcedFood: (newFutureFood: number) => void;
    setFutureChronicleTreatment: (newFutureTreatment: number) => void;
    setFutureOtherIncome: (newFutureIncome: number) => void;
}>({
    state: futureIncomesInitialState,
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
    /* Future Incomes*/
    // setFuturePersonalBudget: () => null,
    setFutureNetIncome: () => null,
    setFutureGrossIncome: () => null,
    setFuturePartnerNetIncome: () => null,
    setFuturePartnerGrossIncome: () => null,
    setFuturePensionAllowance: () => null,
    setFuturePartnerPensionAllowance: () => null,
    setFutureNationalInsuranceAllowance: () => null,
    setFutureNationalInsuranceAllowanceCommunity: () => null,
    setFutureElderlyPension: () => null,
    setFuturePartnerElderlyPension: () => null,
    setFutureRecoveryFee: () => null,
    setFuturePartnerRecoveryFee: () => null,
    setFutureEducationFund: () => null,
    setFuturePartnerEducationFund: () => null,
    setFutureWelfareIncomes: () => null,
    setFutureDentistIncomes: () => null,
    setFuturePartnerDentistIncomes: () => null,
    setFutureChildrenDentistIncomes: () => null,
    setFutureChildrenAddition: () => null,
    setFutureChildrenSafetyNet: () => null,
    setFutureFamilySafetyNet: () => null,
    setFutureProvisions: () => null,
    setFutureAdaptationGrant: () => null,
    setFutureLaundry: () => null,
    // setFutureGas: () => null,
    setFutureHygiene: () => null,
    setFutureMaintenance: () => null,
    setFutureVehicle: () => null,
    // setFutureEnergy: () => null,
    setFutureBenefitForWork: () => null,
    setFutureOutsourcedFood: () => null,
    setFutureChronicleTreatment: () => null,
    setFutureOtherIncome: () => null,
});

export const useFutureIncomesState = () => {
    const context = useContext(FutureIncomesContext);
    if (!context) {
        throw new Error('useFutureIncomesState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface FutureIncomesProviderProps {
    children: React.ReactNode;
}

export const FutureIncomesProvider: React.FC<FutureIncomesProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(futureIncomesReducer, futureIncomesInitialState);
    return (
        <FutureIncomesContext.Provider
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
                /* Future Incomes*/
                // setFuturePersonalBudget: (newBudget) =>
                //     dispatch({ type: 'SET_FUTURE_PERSONAL_BUDGET', payload: newFutureBudget }),
                setFutureNetIncome: (newFutureNetIncome) =>
                    dispatch({ type: 'SET_FUTURE_NET_INCOME', payload: newFutureNetIncome }),
                setFutureGrossIncome: (income) =>
                    dispatch({ type: 'SET_FUTURE_GROSS_INCOME', payload: income }),
                setFuturePartnerNetIncome: (newFuturePartnerNetIncome) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_NET_INCOME', payload: newFuturePartnerNetIncome }),
                setFuturePartnerGrossIncome: (income) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_GROSS_INCOME', payload: income }),
                setFuturePensionAllowance: (newFuturePensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PENSION_ALLOWANCE', payload: newFuturePensionAllowance }),
                setFuturePartnerPensionAllowance: (newFuturePartnerPensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE', payload: newFuturePartnerPensionAllowance }),
                setFutureElderlyPension: (newFutureElderlyPension) =>
                    dispatch({ type: 'SET_FUTURE_ELDERLY_PENSION', payload: newFutureElderlyPension }),
                setFuturePartnerElderlyPension: (newFuturePartnerElderlyPension) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_ELDERLY_PENSION', payload: newFuturePartnerElderlyPension }),
                setFutureNationalInsuranceAllowance: (newFutureNationalInsuranceAllowance) =>
                    dispatch({ type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE', payload: newFutureNationalInsuranceAllowance }),
                setFutureNationalInsuranceAllowanceCommunity: (newFutureNationalInsuranceAllowanceCommunity) =>
                    dispatch({ type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY', payload: newFutureNationalInsuranceAllowanceCommunity }),
                setFutureRecoveryFee: (newFutureRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_RECOVERY_FEE', payload: newFutureRecoveryFee }),
                setFuturePartnerRecoveryFee: (newFuturePartnerRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_RECOVERY_FEE', payload: newFuturePartnerRecoveryFee }),
                setFutureEducationFund: (newFutureEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_EDUCATION_FUND', payload: newFutureEducationFund }),
                setFuturePartnerEducationFund: (newFuturePartnerEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_EDUCATION_FUND', payload: newFuturePartnerEducationFund }),
                setFutureWelfareIncomes: (newFutureWelfareIncomes) => dispatch({ type: 'SET_FUTURE_WELFARE_INCOMES', payload: newFutureWelfareIncomes }),
                setFutureDentistIncomes: (newFutureDentistIncomes) => dispatch({ type: 'SET_FUTURE_DENTIST_INCOMES', payload: newFutureDentistIncomes }),
                setFuturePartnerDentistIncomes: (newFuturePartnerDentistIncomes) => dispatch({ type: 'SET_FUTURE_PARTNER_DENTIST_INCOMES', payload: newFuturePartnerDentistIncomes }),
                setFutureChildrenDentistIncomes: (newFutureChildrenDentistIncomes) => dispatch({ type: 'SET_FUTURE_CHILDREN_DENTIST_INCOMES', payload: newFutureChildrenDentistIncomes }),
                setFutureChildrenAddition: (newFutureAddition) =>
                    dispatch({ type: 'SET_FUTURE_CHILDREN_ADDITION', payload: newFutureAddition }),
                setFutureChildrenSafetyNet: (newFutureChildrenSafetyNet) => dispatch({ type: 'SET_FUTURE_CHILDREN_SAFETY_NET', payload: newFutureChildrenSafetyNet }),
                setFutureFamilySafetyNet: (newFutureFamilySafetyNet) => dispatch({ type: 'SET_FUTURE_FAMILY_SAFETY_NET', payload: newFutureFamilySafetyNet }),
                setFutureProvisions: (newFutureProvisions) => dispatch({ type: 'SET_FUTURE_PROVISIONS', payload: newFutureProvisions }),
                setFutureAdaptationGrant: (newFutureAdaptationGrant) => dispatch({ type: 'SET_FUTURE_ADAPTATION_GRANT', payload: newFutureAdaptationGrant }),
                setFutureLaundry: (newFutureLaundry) => dispatch({ type: 'SET_FUTURE_LAUNDRY', payload: newFutureLaundry }),
                // setFutureGas: (newFutureGas) => dispatch({ type: 'SET_FUTURE_GAS', payload: newFutureGas }),
                setFutureHygiene: (newFutureHygiene) => dispatch({ type: 'SET_FUTURE_HYGIENE', payload: newFutureHygiene }),
                setFutureMaintenance: (newFutureMaintenance) =>
                    dispatch({ type: 'SET_FUTURE_MAINTENANCE', payload: newFutureMaintenance }),
                setFutureVehicle: (newFutureVehicle) => dispatch({ type: 'SET_FUTURE_VEHICLE', payload: newFutureVehicle }),
                // setFutureEnergy: (newFutureEnergy) => dispatch({ type: 'SET_FUTURE_ENERGY', payload: newFutureEnergy }),
                setFutureBenefitForWork: (newFutureBenefit) => dispatch({ type: 'SET_FUTURE_BENEFIT_FOR_WORK', payload: newFutureBenefit }),
                setFutureOutsourcedFood: (newFutureFood) => dispatch({ type: 'SET_FUTURE_OUTSOURCED_FOOD', payload: newFutureFood }),
                setFutureChronicleTreatment: (newFutureTreatment) =>
                    dispatch({ type: 'SET_FUTURE_CHRONICLE_TREATMENT', payload: newFutureTreatment }),
                setFutureOtherIncome: (newFutureIncome) => dispatch({ type: 'SET_FUTURE_OTHER_INCOME', payload: newFutureIncome }),
            }}
        >
            {children}
        </FutureIncomesContext.Provider>
    );
};
