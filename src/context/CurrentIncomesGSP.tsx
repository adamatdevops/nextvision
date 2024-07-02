/* src/context/CurrentIncomes.tsx */
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

interface CurrentIncomesState {
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
    /* Current Incomes */
    personalBudget: number;
    childrenAddition: number;
    provisions: number;
    laundry: number;
    gas: number;
    hygiene: number;
    maintenance: number;
    vehicle: number;
    energy: number;
    benefitForWork: number;
    outsourcedFood: number;
    chronicleTreatment: number;
    seniority: number | null;
    partnerSeniority: number | null;
    deceasedSeniority: number | null;
    seniorityAddition: number;
    partnerSeniorityAddition: number;
    deceasedSeniorityAddition: number;
    welfare: number;
    goldenAgeAmount: number;
    otherIncome: number;
    /* Extra Imports */
    welfareExpenses: number;
}

// Define action types as a union of string literals for better type safety
// type ActionType =
type CurrentIncomesActionType =
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
    /* Current Incomes */
    | 'SET_PERSONAL_BUDGET'
    | 'SET_CHILDREN_ADDITION'
    | 'SET_PROVISIONS'
    | 'SET_LAUNDRY'
    | 'SET_GAS'
    | 'SET_HYGIENE'
    | 'SET_MAINTENANCE'
    | 'SET_VEHICLE'
    | 'SET_ENERGY'
    | 'SET_BENEFIT_FOR_WORK'
    | 'SET_OUTSOURCED_FOOD'
    | 'SET_CHRONICLE_TREATMENT'
    | 'SET_SENIORITY'
    | 'SET_PARTNER_SENIORITY'
    | 'SET_DECEASED_SENIORITY'
    | 'SET_SENIORITY_ADDITION'
    | 'SET_PARTNER_SENIORITY_ADDITION'
    | 'SET_DECEASED_SENIORITY_ADDITION'
    | 'SET_WELFARE'
    | 'SET_GOLDEN_AGE_AMOUNT'
    | 'SET_OTHER_INCOME'
    /* Extra Imports */
    | 'SET_WELFARE_EXPENSES';

interface CurrentIncomesAction {
    type: CurrentIncomesActionType;
    payload: any;
}

const currentIncomesInitialState: CurrentIncomesState = {
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
    /* Current Incomes */
    personalBudget: 0,
    childrenAddition: 0, /* TODO: this is to set set according to the number of children */
    provisions: 0,
    laundry: 0,
    gas: 0,
    hygiene: 0, /* TODO: this is to set set according to the number of family members */
    maintenance: 0,
    vehicle: 0,
    energy: 0,
    benefitForWork: 0, // TODO: this is to set to one benefit or two
    outsourcedFood: 0, // TODO: this is to set to one benefit or two
    chronicleTreatment: 0,
    seniority: 0,
    partnerSeniority: 0,
    deceasedSeniority: 0,
    seniorityAddition: 0,
    partnerSeniorityAddition: 0,
    deceasedSeniorityAddition: 0,
    welfare: 0,
    goldenAgeAmount: 0,
    otherIncome: 0,
    /* Extra Imports */
    welfareExpenses: 0,
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
export const setFamilyStatus = (newStatus: string | null): CurrentIncomesAction => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): CurrentIncomesAction => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number): CurrentIncomesAction => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): CurrentIncomesAction => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): CurrentIncomesAction => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const childrenData = (newChildrenData: ChildData[]): CurrentIncomesAction => ({
    type: 'SET_CHILDREN_DATA',
    payload: newChildrenData,
});

export const memberAge = (newMemberAge: number | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const memberGoldenAge = (newMemberGoldenAge: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_GOLDEN_AGE',
    payload: newMemberGoldenAge,
});

export const memberPartnerGoldenAge = (newMemberPartnerGoldenAge: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_GOLDEN_AGE',
    payload: newMemberPartnerGoldenAge,
});

export const educationSystem = (newEducationSystem: string[]): CurrentIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): CurrentIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationSystemFees = (newEducationSystemFees: number[]): CurrentIncomesAction => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

export const memberPositionScope = (newMemberPositionScope: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_POSITION_SCOPE',
    payload: newMemberPositionScope,
});

export const memberPartnerPositionScope = (newMemberPartnerPositionScope: string | null): CurrentIncomesAction => ({
    type: 'SET_MEMBER_PARTNER_POSITION_SCOPE',
    payload: newMemberPartnerPositionScope,
});

export const familyNationalInsurance = (newFamilyNationalInsurance: number): CurrentIncomesAction => ({
    type: 'SET_FAMILY_NATIONAL_INSURANCE',
    payload: newFamilyNationalInsurance,
});

/* Current Incomes */
export const setPersonalBudget = (newBudget: number): CurrentIncomesAction => ({
    type: 'SET_PERSONAL_BUDGET',
    payload: newBudget,
});

export const setChildrenAddition = (newChildrenAddition: number): CurrentIncomesAction => ({
    type: 'SET_CHILDREN_ADDITION',
    payload: newChildrenAddition,
});

export const setProvisions = (newProvisions: number): CurrentIncomesAction => ({
    type: 'SET_PROVISIONS',
    payload: newProvisions,
});

export const setLaundry = (newLaundry: number): CurrentIncomesAction => ({
    type: 'SET_LAUNDRY',
    payload: newLaundry,
});

export const setGas = (newGas: number): CurrentIncomesAction => ({
    type: 'SET_GAS',
    payload: newGas,
});

export const setHygiene = (newHygiene: number): CurrentIncomesAction => ({
    type: 'SET_HYGIENE',
    payload: newHygiene,
});

export const setMaintenance = (newMaintenance: number): CurrentIncomesAction => ({
    type: 'SET_MAINTENANCE',
    payload: newMaintenance,
});

export const setVehicle = (newVehicle: number): CurrentIncomesAction => ({
    type: 'SET_VEHICLE',
    payload: newVehicle,
});

export const setEnergy = (newEnergy: number): CurrentIncomesAction => ({
    type: 'SET_ENERGY',
    payload: newEnergy,
});

export const setBenefitForWork = (newBenefitForWork: number): CurrentIncomesAction => ({
    type: 'SET_BENEFIT_FOR_WORK',
    payload: newBenefitForWork,
});

export const setOutsourcedFood = (newOutsourcedFood: number): CurrentIncomesAction => ({
    type: 'SET_OUTSOURCED_FOOD',
    payload: newOutsourcedFood,
});

export const setChronicleTreatment = (newChronicleTreatment: number): CurrentIncomesAction => ({
    type: 'SET_CHRONICLE_TREATMENT',
    payload: newChronicleTreatment,
});

export const setSeniority = (newSeniority: number): CurrentIncomesAction => ({
    type: 'SET_SENIORITY',
    payload: newSeniority,
});

export const setPartnerSeniority = (newPartnerSeniority: number): CurrentIncomesAction => ({
    type: 'SET_PARTNER_SENIORITY',
    payload: newPartnerSeniority,
});

export const setDeceasedSeniority = (newDeceasedSeniority: number): CurrentIncomesAction => ({
    type: 'SET_DECEASED_SENIORITY',
    payload: newDeceasedSeniority,
});
export const setSeniorityAddition = (newSeniorityAddition: number): CurrentIncomesAction => ({
    type: 'SET_SENIORITY_ADDITION',
    payload: newSeniorityAddition,
});

export const setPartnerSeniorityAddition = (newPartnerSeniorityAddition: number): CurrentIncomesAction => ({
    type: 'SET_PARTNER_SENIORITY_ADDITION',
    payload: newPartnerSeniorityAddition,
});

export const setDeceasedSeniorityAddition = (newDeceasedSeniorityAddition: number): CurrentIncomesAction => ({
    type: 'SET_DECEASED_SENIORITY_ADDITION',
    payload: newDeceasedSeniorityAddition,
});

export const setWelfare = (newWelfare: number): CurrentIncomesAction => ({
    type: 'SET_WELFARE',
    payload: newWelfare,
});

export const setGoldenAgeAmount = (newGoldenAgeAmount: number): CurrentIncomesAction => ({
    type: 'SET_GOLDEN_AGE_AMOUNT',
    payload: newGoldenAgeAmount,
});

export const setOtherIncome = (newOtherIncome: number): CurrentIncomesAction => ({
    type: 'SET_OTHER_INCOME',
    payload: newOtherIncome,
});

/* Extra Imports*/
export const setWelfareExpenses = (newWelfareExpenses: number): CurrentIncomesAction => ({
    type: 'SET_WELFARE_EXPENSES',
    payload: newWelfareExpenses,
});

/* Define the reducer function that takes the current state and an action */
const currentIncomesReducer = (state: CurrentIncomesState, action: CurrentIncomesAction): CurrentIncomesState => {
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
        /* Current Incomes */
        // case 'SET_PERSONAL_BUDGET':
        //     return { ...state, personalBudget: action.payload };
        case 'SET_PERSONAL_BUDGET': {
            return { ...state, personalBudget: action.payload };
        }
        case 'SET_CHILDREN_ADDITION':
            return { ...state, childrenAddition: action.payload };
        case 'SET_PROVISIONS':
            return { ...state, provisions: action.payload };
        case 'SET_LAUNDRY':
            return { ...state, laundry: action.payload };
        case 'SET_GAS':
            return { ...state, gas: action.payload };
        case 'SET_HYGIENE':
            return { ...state, hygiene: action.payload };
        case 'SET_MAINTENANCE':
            return { ...state, maintenance: action.payload };
        case 'SET_VEHICLE':
            return { ...state, vehicle: action.payload };
        case 'SET_ENERGY':
            return { ...state, energy: action.payload };
        case 'SET_BENEFIT_FOR_WORK':
            return { ...state, benefitForWork: action.payload };
        case 'SET_OUTSOURCED_FOOD':
            return { ...state, outsourcedFood: action.payload };
        case 'SET_CHRONICLE_TREATMENT':
            return { ...state, chronicleTreatment: action.payload };
        case 'SET_SENIORITY':
            return { ...state, seniority: action.payload };
        case 'SET_PARTNER_SENIORITY':
            return { ...state, partnerSeniority: action.payload };
        case 'SET_DECEASED_SENIORITY':
            return { ...state, deceasedSeniority: action.payload };
        case 'SET_SENIORITY_ADDITION':
            return { ...state, seniorityAddition: action.payload };
        case 'SET_PARTNER_SENIORITY_ADDITION':
            return { ...state, partnerSeniorityAddition: action.payload };
        case 'SET_DECEASED_SENIORITY_ADDITION':
            return { ...state, deceasedSeniorityAddition: action.payload };
        case 'SET_WELFARE':
            return { ...state, welfare: action.payload };
        case 'SET_GOLDEN_AGE_AMOUNT':
            return { ...state, goldenAgeAmount: action.payload };
        case 'SET_OTHER_INCOME':
            return { ...state, otherIncome: action.payload };
        /* Extra Imports*/
        case 'SET_WELFARE_EXPENSES':
            return { ...state, welfareExpenses: action.payload };
        default:
            return state;
    }
};

const CurrentIncomesContext = createContext<{
    state: CurrentIncomesState;
    dispatch: React.Dispatch<CurrentIncomesAction>;
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
    /* Current Incomes */
    setPersonalBudget: (newBudget: number) => void;
    setChildrenAddition: (newChildrenAddition: number) => void;
    setProvisions: (newProvisions: number) => void;
    setLaundry: (newLaundry: number) => void;
    setGas: (newGas: number) => void;
    setHygiene: (newHygiene: number) => void;
    setMaintenance: (newMaintenance: number) => void;
    setVehicle: (newVehicle: number) => void;
    setEnergy: (newEnergy: number) => void;
    setBenefitForWork: (newBenefitForWork: number) => void;
    setOutsourcedFood: (newOutsourcedFood: number) => void;
    setChronicleTreatment: (newChronicleTreatment: number) => void;
    setSeniority: (newSeniority: number) => void;
    setPartnerSeniority: (newPartnerSeniority: number) => void;
    setDeceasedSeniority: (newDeceasedSeniority: number) => void;
    setSeniorityAddition: (newSeniorityAddition: number) => void;
    setPartnerSeniorityAddition: (newPartnerSeniorityAddition: number) => void;
    setDeceasedSeniorityAddition: (newDeceasedSeniorityAddition: number) => void;
    setWelfare: (newWelfare: number) => void;
    setGoldenAgeAmount: (newGoldenAgeAmount: number) => void;
    setOtherIncome: (newOtherIncome: number) => void;
    /* Extra Imports*/
    setWelfareExpenses: (newWelfareExpenses: number) => void;
}>({
    state: currentIncomesInitialState,
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
    /* Current Incomes */
    setPersonalBudget: () => null,
    setChildrenAddition: () => null,
    setProvisions: () => null,
    setLaundry: () => null,
    setGas: () => null,
    setHygiene: () => null,
    setMaintenance: () => null,
    setVehicle: () => null,
    setEnergy: () => null,
    setBenefitForWork: () => null,
    setOutsourcedFood: () => null,
    setChronicleTreatment: () => null,
    setSeniority: () => null,
    setPartnerSeniority: () => null,
    setDeceasedSeniority: () => null,
    setSeniorityAddition: () => null,
    setPartnerSeniorityAddition: () => null,
    setDeceasedSeniorityAddition: () => null,
    setWelfare: () => null,
    setGoldenAgeAmount: () => null,
    setOtherIncome: () => null,
    /* Extra Imports*/
    setWelfareExpenses: () => null,
});

export const useCurrentIncomesState = () => {
    const context = useContext(CurrentIncomesContext);
    if (!context) {
        throw new Error('useCurrentIncomesState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface CurrentIncomesProviderProps {
    children: React.ReactNode;
}

export const CurrentIncomesProvider: React.FC<CurrentIncomesProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(currentIncomesReducer, currentIncomesInitialState);
    return (
        <CurrentIncomesContext.Provider
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
                /* Current Incomes */
                setPersonalBudget: (newBudget) => dispatch(setPersonalBudget(newBudget)),
                setChildrenAddition: (newChildrenAddition) => dispatch(setChildrenAddition(newChildrenAddition)),
                setProvisions: (newProvisions) => dispatch(setProvisions(newProvisions)),
                setLaundry: (newLaundry) => dispatch(setLaundry(newLaundry)),
                setGas: (newGas) => dispatch(setGas(newGas)),
                setHygiene: (newHygiene) => dispatch(setHygiene(newHygiene)),
                setMaintenance: (newMaintenance) => dispatch(setMaintenance(newMaintenance)),
                setVehicle: (newVehicle) => dispatch(setVehicle(newVehicle)),
                setEnergy: (newEnergy) => dispatch(setEnergy(newEnergy)),
                /* TODO: this is to set to one benefit or two */
                setBenefitForWork: (newBenefitForWork) => dispatch(setBenefitForWork(newBenefitForWork)),
                /* TODO: this is to set to one benefit or two */
                setOutsourcedFood: (newOutsourcedFood) => dispatch(setOutsourcedFood(newOutsourcedFood)),
                setChronicleTreatment: (newChronicleTreatment) => dispatch(setChronicleTreatment(newChronicleTreatment)),
                setSeniority: (newSeniority) => dispatch(setSeniority(newSeniority)),
                setPartnerSeniority: (newPartnerSeniority) => dispatch(setPartnerSeniority(newPartnerSeniority)),
                setDeceasedSeniority: (newDeceasedSeniority) => dispatch(setDeceasedSeniority(newDeceasedSeniority)),
                setSeniorityAddition: (newSeniorityAddition) => dispatch(setSeniorityAddition(newSeniorityAddition)),
                setPartnerSeniorityAddition: (newPartnerSeniorityAddition) => dispatch(setPartnerSeniorityAddition(newPartnerSeniorityAddition)),
                setDeceasedSeniorityAddition: (newDeceasedSeniorityAddition) => dispatch(setDeceasedSeniorityAddition(newDeceasedSeniorityAddition)),
                setWelfare: (newWelfare) => dispatch(setWelfare(newWelfare)),
                setGoldenAgeAmount: (newGoldenAgeAmount) => dispatch(setGoldenAgeAmount(newGoldenAgeAmount)),
                setOtherIncome: (newOtherIncome) => dispatch(setOtherIncome(newOtherIncome)),
                /* Extra Imports*/
                setWelfareExpenses: (newWelfareExpenses) => dispatch(setWelfareExpenses(newWelfareExpenses)),
            }}
        >
            {children}
        </CurrentIncomesContext.Provider>
    );
};
