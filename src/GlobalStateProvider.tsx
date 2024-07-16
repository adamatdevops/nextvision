/* src/GlobalStateProvider.tsx */
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
    // educationTuitionFees: number[];
    class: string | null;
    educationTransportation: string | null;
    educationPersonalCare: string | null;
    educationDayCare: string | null;
    // futureEducationPersonalCareExpenses: number;
    // futureEducationDayCareExpenses: number;
    customTuition: number;
}

export interface State {
    /* SocialData */
    // familySocialData: MemberSocialData[];
    /* FinancialData */
    // familyFinancialData: MemberFinancialData[];
    /* State */
    loginName: string;
    familyStatus: string | null;
    partnerCommunityStatus: string | null;
    apartmentSquareFootage: number | null;
    hasChildren: string | null;
    numberOfChildren: number;
    childrenData: ChildData[];
    memberAge: number | null;
    memberPartnerAge: number | null;
    memberRetired: string | null;
    memberPartnerRetired: string | null;
    memberGoldenAge: string | null;
    memberPartnerGoldenAge: string | null;
    educationLevel: string[];
    educationSystem: string[];
    educationSystemBudgets: number[];
    educationAdditionalCare: number[],
    educationSystemFees: number[];
    educationTuitionFees: number[];
    educationTransportation: string[];
    educationPersonalCare: string[];
    educationDayCare: string[];
    memberPositionScope: string | null;
    memberPartnerPositionScope: string | null;
    familyNationalInsurance: number | null;
    /* Current Incomes
    * IMPORTANT: NOT Everything Here IS Relevant
    */
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
    futureEducationExpenses: number;
    futurePrivateLessonExpenses: number[];
    futureTeenageClassExpenses: number[];
    futureEducationTransportationExpenses: number;
    futureEducationPersonalCareExpenses: number,
    futureEducationDayCareExpenses: number,
    // futureTuitionsExpenses: number;
    // futureSafetyNetExpenses: number;
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
}

// Define action types as a union of string literals for better type safety
type ActionType =
    /* SocialData */
    // | 'SET_FAMILY_SOCIAL_DATA'
    /* FinancialData */
    // | 'SET_FAMILY_FINANCIAL_DATA'
    /* State */
    | 'SET_LOGIN_NAME'
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
    | 'SET_EDUCATION_LEVEL'
    | 'SET_EDUCATION_SYSTEM'
    | 'SET_EDUCATION_SYSTEM_BUDGETS'
    | 'SET_EDUCATION_TRANSPORTATION'
    | 'SET_EDUCATION_ADDITIONAL_CARE'
    | 'SET_EDUCATION_SYSTEM_FEES'
    | 'SET_EDUCATION_PERSONAL_CARE'
    | 'SET_EDUCATION_DAY_CARE'
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
    | 'SET_OTHER_EXPENSE'
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
    | 'SET_FUTURE_OTHER_INCOME'
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
    | 'SET_FUTURE_EDUCATION_EXPENSES'
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
    | 'SET_FUTURE_OTHER_EXPENSES';

interface Action {
    type: ActionType;
    payload: any;
}

const initialState: State = {
    /* SocialData */
    // familySocialData: [{
    //     familyStatus: '',
    //     partnerCommunityStatus: '',
    //     numberOfChildren: 0,
    //     educationDetails: {},
    // }],
    // /* FinancialData */
    // familyFinancialData: [{
    //     currentIncomes: [],
    //     currentExpenses: [],
    //     futureIncomes: [],
    //     futureExpenses: [],
    // }],
    /* State */
    loginName: '',
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
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            // futureEducationPersonalCareExpenses: 0,
            // futureEducationDayCareExpenses: 0,
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
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            // futureEducationPersonalCareExpenses: 0,
            // futureEducationDayCareExpenses: 0,
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
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            // futureEducationPersonalCareExpenses: 0,
            // futureEducationDayCareExpenses: 0,
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
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            // futureEducationPersonalCareExpenses: 0,
            // futureEducationDayCareExpenses: 0,
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
            // educationTuitionFees: null,
            class: null,
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            // futureEducationPersonalCareExpenses: 0,
            // futureEducationDayCareExpenses: 0,
            customTuition: 0,
        },
    ],
    memberAge: 0,
    memberPartnerAge: 0,
    memberRetired: null,
    memberPartnerRetired: null,
    memberGoldenAge: null,
    memberPartnerGoldenAge: null,
    educationLevel: [],
    educationSystem: [],
    educationAdditionalCare: [],
    educationSystemBudgets: [],
    educationSystemFees: [],
    educationTransportation: [],
    educationPersonalCare: [],
    educationDayCare: [],
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
    /* Current Expenses */
    // gasExpenses: 0,
    electricityExpenses: 0,
    futureEnergyExpenses: 0,
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
    /* Future Expenses*/
    futureExpenses: [],
    futurePropertyTaxExpenses: 0,
    futureWaterAndSewerExpenses: 0,
    // futureGasExpenses: 0,
    // futureElectricityExpenses: 0,
    // futureEnergyExpenses: 0,
    futureHouseMaintenanceExpenses: 0,
    futureGardeningExpenses: 0,
    futureNetworkingExpenses: 0,
    futureInternetExpenses: 0,
    futureVehicleExpenses: 0,
    futureEducationSystemExpenses: 0,
    futureEducationExpenses: 0,
    futurePrivateLessonExpenses: [],
    futureTeenageClassExpenses: [],
    futureEducationTransportationExpenses: 0,
    futureEducationPersonalCareExpenses: 0,
    futureEducationDayCareExpenses: 0,
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
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/

/* Social Data */
// export const setFamilySocialData = (newFamilySocialData: MemberSocialData[]): Action => ({
//     type: 'SET_FAMILY_SOCIAL_DATA',
//     payload: newFamilySocialData,
// });

/* Financial Data*/
// export const setFamilyFinancialData = (newFamilyFinancialData: MemberFinancialData[]): Action => ({
//     type: 'SET_FAMILY_FINANCIAL_DATA',
//     payload: newFamilyFinancialData,
// });

/* State */
export const setLoginName = (newLoginName: string): Action => ({
    type: 'SET_LOGIN_NAME',
    payload: newLoginName,
});

export const setFamilyStatus = (newStatus: string | null): Action => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): Action => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number): Action => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): Action => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): Action => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const childrenData = (newChildrenData: ChildData[]): Action => ({
    type: 'SET_CHILDREN_DATA',
    payload: newChildrenData,
});

export const memberAge = (newMemberAge: number | null): Action => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): Action => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): Action => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): Action => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const memberGoldenAge = (newMemberGoldenAge: string | null): Action => ({
    type: 'SET_MEMBER_GOLDEN_AGE',
    payload: newMemberGoldenAge,
});

export const memberPartnerGoldenAge = (newMemberPartnerGoldenAge: string | null): Action => ({
    type: 'SET_MEMBER_PARTNER_GOLDEN_AGE',
    payload: newMemberPartnerGoldenAge,
});

export const educationLevel = (newEducationLevel: string[]): Action => ({
    type: 'SET_EDUCATION_LEVEL',
    payload: newEducationLevel,
})

export const educationSystem = (newEducationSystem: string[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const setEducationTransportation = (newEducationTransportation: string[]): Action => ({
    type: 'SET_EDUCATION_TRANSPORTATION',
    payload: newEducationTransportation,
});

export const educationPersonalCare = (newEducationPersonalCare: string[]): Action => ({
    type: 'SET_EDUCATION_PERSONAL_CARE',
    payload: newEducationPersonalCare,
});

export const educationDayCare = (newEducationDayCare: string[]): Action => ({
    type: 'SET_EDUCATION_DAY_CARE',
    payload: newEducationDayCare,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationAdditionalCare = (newEducationAdditionalCare: number[]): Action => ({
    type: 'SET_EDUCATION_ADDITIONAL_CARE',
    payload: newEducationAdditionalCare,
});


export const educationSystemFees = (newEducationSystemFees: number[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

export const memberPositionScope = (newMemberPositionScope: string | null): Action => ({
    type: 'SET_MEMBER_POSITION_SCOPE',
    payload: newMemberPositionScope,
});

export const memberPartnerPositionScope = (newMemberPartnerPositionScope: string | null): Action => ({
    type: 'SET_MEMBER_PARTNER_POSITION_SCOPE',
    payload: newMemberPartnerPositionScope,
});

export const familyNationalInsurance = (newFamilyNationalInsurance: number): Action => ({
    type: 'SET_FAMILY_NATIONAL_INSURANCE',
    payload: newFamilyNationalInsurance,
});

/* Current Incomes */
export const setPersonalBudget = (newBudget: number): Action => ({
    type: 'SET_PERSONAL_BUDGET',
    payload: newBudget,
});

export const setChildrenAddition = (newChildrenAddition: number): Action => ({
    type: 'SET_CHILDREN_ADDITION',
    payload: newChildrenAddition,
});

export const setProvisions = (newProvisions: number): Action => ({
    type: 'SET_PROVISIONS',
    payload: newProvisions,
});

export const setLaundry = (newLaundry: number): Action => ({
    type: 'SET_LAUNDRY',
    payload: newLaundry,
});

export const setGas = (newGas: number): Action => ({
    type: 'SET_GAS',
    payload: newGas,
});

export const setHygiene = (newHygiene: number): Action => ({
    type: 'SET_HYGIENE',
    payload: newHygiene,
});

export const setMaintenance = (newMaintenance: number): Action => ({
    type: 'SET_MAINTENANCE',
    payload: newMaintenance,
});

export const setVehicle = (newVehicle: number): Action => ({
    type: 'SET_VEHICLE',
    payload: newVehicle,
});

export const setEnergy = (newEnergy: number): Action => ({
    type: 'SET_ENERGY',
    payload: newEnergy,
});

export const setBenefitForWork = (newBenefitForWork: number): Action => ({
    type: 'SET_BENEFIT_FOR_WORK',
    payload: newBenefitForWork,
});

export const setOutsourcedFood = (newOutsourcedFood: number): Action => ({
    type: 'SET_OUTSOURCED_FOOD',
    payload: newOutsourcedFood,
});

export const setChronicleTreatment = (newChronicleTreatment: number): Action => ({
    type: 'SET_CHRONICLE_TREATMENT',
    payload: newChronicleTreatment,
});

export const setSeniority = (newSeniority: number): Action => ({
    type: 'SET_SENIORITY',
    payload: newSeniority,
});

export const setPartnerSeniority = (newPartnerSeniority: number): Action => ({
    type: 'SET_PARTNER_SENIORITY',
    payload: newPartnerSeniority,
});

export const setDeceasedSeniority = (newDeceasedSeniority: number): Action => ({
    type: 'SET_DECEASED_SENIORITY',
    payload: newDeceasedSeniority,
});
export const setSeniorityAddition = (newSeniorityAddition: number): Action => ({
    type: 'SET_SENIORITY_ADDITION',
    payload: newSeniorityAddition,
});

export const setPartnerSeniorityAddition = (newPartnerSeniorityAddition: number): Action => ({
    type: 'SET_PARTNER_SENIORITY_ADDITION',
    payload: newPartnerSeniorityAddition,
});

export const setDeceasedSeniorityAddition = (newDeceasedSeniorityAddition: number): Action => ({
    type: 'SET_DECEASED_SENIORITY_ADDITION',
    payload: newDeceasedSeniorityAddition,
});

export const setWelfare = (newWelfare: number): Action => ({
    type: 'SET_WELFARE',
    payload: newWelfare,
});

export const setGoldenAgeAmount = (newGoldenAgeAmount: number): Action => ({
    type: 'SET_GOLDEN_AGE_AMOUNT',
    payload: newGoldenAgeAmount,
});

export const setOtherIncome = (newOtherIncome: number): Action => ({
    type: 'SET_OTHER_INCOME',
    payload: newOtherIncome,
});

/* Current Expenses */
export const setElectricityExpenses = (newElectricityExpenses: number): Action => ({
    type: 'SET_ELECTRICITY_EXPENSES',
    payload: newElectricityExpenses,
});


export const setMaintenanceServiceExpenses = (newMaintenanceServiceExpenses: number): Action => ({
    type: 'SET_MAINTENANCE_SERVICE_EXPENSES',
    payload: newMaintenanceServiceExpenses,
});

export const setHouseMaintenanceExpenses = (newHouseMaintenanceExpenses: number): Action => ({
    type: 'SET_HOUSE_MAINTENANCE_EXPENSES',
    payload: newHouseMaintenanceExpenses,
});

export const setGardeningExpenses = (newGardeningExpenses: number): Action => ({
    type: 'SET_GARDENING_EXPENSES',
    payload: newGardeningExpenses,
});

export const setNetworkingExpenses = (newNetworkingExpenses: number): Action => ({
    type: 'SET_NETWORKING_EXPENSES',
    payload: newNetworkingExpenses,
});

export const setInternetExpenses = (newInternetExpenses: number): Action => ({
    type: 'SET_INTERNET_EXPENSES',
    payload: newInternetExpenses,
});

export const setVehicleExpenses = (newVehicleExpenses: number): Action => ({
    type: 'SET_VEHICLE_EXPENSES',
    payload: newVehicleExpenses,
});

export const setSchoolExpenses = (newSchoolExpenses: number[]): Action => ({
    type: 'SET_SCHOOL_EXPENSES',
    payload: newSchoolExpenses,
});

export const setHighSchoolExpenses = (newHighSchoolExpenses: number[]): Action => ({
    type: 'SET_HIGH_SCHOOL_EXPENSES',
    payload: newHighSchoolExpenses,
});

export const setEducationTuitionFees = (newEducationTuitionFees: number[]): Action => ({
    type: 'SET_EDUCATION_TUITION_FEES',
    payload: newEducationTuitionFees,
});

export const setPrivateLessonFees = (index: number, newPrivateLessonFees: number[]): Action => ({
    type: 'SET_PRIVATE_LESSON_FEES',
    // payload: newPrivateLessonFees,
    payload: { index, newPrivateLessonFees },
});

export const setChildTeenageClassFees = (index: number, newTeenageClassFees: number[]): Action => ({
    type: 'SET_TEENAGE_CLASS_FEES',
    // payload: newTeenageClassFees,
    payload: { index, newTeenageClassFees },
});

export const setEducationTeenageClasses = (index: number, newEducationTeenageClasses: number): Action => ({
    type: 'SET_EDUCATION_TEENAGE_CLASSES',
    payload: { index, newEducationTeenageClasses },
});

export const setEducationPrivateLessons = (index: number, newEducationPrivateLessons: number): Action => ({
    type: 'SET_EDUCATION_PRIVATE_LESSONS',
    payload: { index, newEducationPrivateLessons },
});

export const setPrivateLessonExpenses = (newPrivateLessonExpenses: number[]): Action => ({
    type: 'SET_PRIVATE_LESSON_EXPENSES',
    payload: newPrivateLessonExpenses,
});

export const setTeenageClassExpenses = (newTeenageClassExpenses: number[]): Action => ({
    type: 'SET_TEENAGE_CLASS_EXPENSES',
    payload: newTeenageClassExpenses,
});

export const setOtherEducationExpenses = (newOtherEducationExpenses: number): Action => ({
    type: 'SET_OTHER_EDUCATION_EXPENSES',
    payload: newOtherEducationExpenses,
});

export const setDentistExpenses = (newDentistExpenses: number): Action => ({
    type: 'SET_DENTIST_EXPENSES',
    payload: newDentistExpenses,
});

export const setPartnerDentistExpenses = (newPartnerDentistExpenses: number): Action => ({
    type: 'SET_PARTNER_DENTIST_EXPENSES',
    payload: newPartnerDentistExpenses,
});

export const setChildrenDentistExpenses = (newChildrenDentistExpenses: number): Action => ({
    type: 'SET_CHILDREN_DENTIST_EXPENSES',
    payload: newChildrenDentistExpenses,
});

export const setWelfareExpenses = (newWelfareExpenses: number): Action => ({
    type: 'SET_WELFARE_EXPENSES',
    payload: newWelfareExpenses,
});

export const setFoodExpenses = (newFoodExpenses: number): Action => ({
    type: 'SET_FOOD_EXPENSES',
    payload: newFoodExpenses,
});

export const setDiningRoomExpenses = (newDiningRoomExpenses: number): Action => ({
    type: `SET_DINING_ROOM_EXPENSES`,
    payload: newDiningRoomExpenses,
});

export const setLaundryExpenses = (newLaundryExpenses: number): Action => ({
    type: 'SET_LAUNDRY_EXPENSES',
    payload: newLaundryExpenses,
});

export const setOtherExpenses = (newOtherExpenses: number): Action => ({
    type: 'SET_OTHER_EXPENSE',
    payload: newOtherExpenses,
});

/* Future Incomes*/
export const setFutureNetIncome = (newFutureNetIncome: number): Action => ({
    type: 'SET_FUTURE_NET_INCOME',
    payload: newFutureNetIncome,
});

export const setFutureGrossIncome = (income: number): Action => ({
    type: 'SET_FUTURE_GROSS_INCOME',
    payload: income,
});

export const setFuturePartnerNetIncome = (newFuturePartnerNetIncome: number): Action => ({
    type: 'SET_FUTURE_PARTNER_NET_INCOME',
    payload: newFuturePartnerNetIncome,
});

export const setFuturePartnerGrossIncome = (income: number): Action => ({
    type: 'SET_FUTURE_PARTNER_GROSS_INCOME',
    payload: income,
});

export const setFuturePensionAllowance = (newFuturePensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PENSION_ALLOWANCE',
    payload: newFuturePensionAllowance,
});

export const setFuturePartnerPensionAllowance = (newFuturePartnerPensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE',
    payload: newFuturePartnerPensionAllowance,
});

export const setFutureNationalInsuranceAllowance = (newFutureNationalInsuranceAllowance: number[]): Action => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE',
    payload: newFutureNationalInsuranceAllowance,
});

export const setFutureNationalInsuranceAllowanceCommunity = (newFutureNationalInsuranceAllowanceCommunity: number): Action => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY',
    payload: newFutureNationalInsuranceAllowanceCommunity,
});

export const setFutureElderlyPension = (newFutureElderlyPension: number): Action => ({
    type: 'SET_FUTURE_ELDERLY_PENSION',
    payload: newFutureElderlyPension,
});

export const setFuturePartnerElderlyPension = (newFuturePartnerElderlyPension: number): Action => ({
    type: 'SET_FUTURE_PARTNER_ELDERLY_PENSION',
    payload: newFuturePartnerElderlyPension,
});

export const setFutureRecoveryFee = (newFutureRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_RECOVERY_FEE',
    payload: newFutureRecoveryFee,
});

export const setFuturePartnerRecoveryFee = (newFuturePartnerRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_PARTNER_RECOVERY_FEE',
    payload: newFuturePartnerRecoveryFee,
});

export const setFutureEducationFund = (newFutureEducationFund: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_FUND',
    payload: newFutureEducationFund,
});

export const setFuturePartnerEducationFund = (newFuturePartnerEducationFund: number): Action => ({
    type: 'SET_FUTURE_PARTNER_EDUCATION_FUND',
    payload: newFuturePartnerEducationFund,
});

export const setFutureWelfareIncomes = (newFutureWelfareIncomes: number): Action => ({
    type: 'SET_FUTURE_WELFARE_INCOMES',
    payload: newFutureWelfareIncomes,
});

export const setFutureDentistIncomes = (newFutureDentistIncomes: number): Action => ({
    type: 'SET_FUTURE_DENTIST_INCOMES',
    payload: newFutureDentistIncomes,
});

export const setFuturePartnerDentistIncomes = (newFuturePartnerDentistIncomes: number): Action => ({
    type: 'SET_FUTURE_PARTNER_DENTIST_INCOMES',
    payload: newFuturePartnerDentistIncomes,
});

export const setFutureChildrenDentistIncomes = (newFutureChildrenDentistIncomes: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_DENTIST_INCOMES',
    payload: newFutureChildrenDentistIncomes,
});

export const setFutureChildrenAddition = (newFutureAddition: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_ADDITION',
    payload: newFutureAddition,
});

export const setFutureChildrenSafetyNet = (newFutureChildrenSafetyNet: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_SAFETY_NET',
    payload: newFutureChildrenSafetyNet,
});

export const setFutureFamilySafetyNet = (newFutureFamilySafetyNet: number): Action => ({
    type: 'SET_FUTURE_FAMILY_SAFETY_NET',
    payload: newFutureFamilySafetyNet,
});

export const setFutureProvisions = (newFutureProvisions: number): Action => ({
    type: 'SET_FUTURE_PROVISIONS',
    payload: newFutureProvisions,
});

export const setFutureAdaptationGrant = (newFutureAdaptationGrant: number): Action => ({
    type: 'SET_FUTURE_ADAPTATION_GRANT',
    payload: newFutureAdaptationGrant,
});

export const setFutureLaundry = (newFutureLaundry: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY',
    payload: newFutureLaundry,
});

// const setFutureGas = (newFutureGas: number): Action => ({
//     type: 'SET_FUTURE_GAS',
//     payload: newFutureGas,
// });

export const setFutureHygiene = (newFutureHygiene: number): Action => ({
    type: 'SET_FUTURE_HYGIENE',
    payload: newFutureHygiene,
});

export const setFutureMaintenance = (newFutureMaintenance: number): Action => ({
    type: 'SET_FUTURE_MAINTENANCE',
    payload: newFutureMaintenance,
});

export const setFutureVehicle = (newFutureVehicle: number): Action => ({
    type: 'SET_FUTURE_VEHICLE',
    payload: newFutureVehicle,
});

export const setFutureEnergy = (newFutureEnergy: number): Action => ({
    type: 'SET_FUTURE_ENERGY',
    payload: newFutureEnergy,
});

export const setFutureBenefitForWork = (newFutureBenefit: number): Action => ({
    type: 'SET_FUTURE_BENEFIT_FOR_WORK',
    payload: newFutureBenefit,
});

export const setFutureOutsourcedFood = (newFutureFood: number): Action => ({
    type: 'SET_FUTURE_OUTSOURCED_FOOD',
    payload: newFutureFood,
});

export const setFutureChronicleTreatment = (newFutureTreatment: number): Action => ({
    type: 'SET_FUTURE_CHRONICLE_TREATMENT',
    payload: newFutureTreatment,
});

export const setFutureOtherIncome = (newFutureIncome: number): Action => ({
    type: 'SET_FUTURE_OTHER_INCOME',
    payload: newFutureIncome,
});

/* Future Expenses*/
export const setFutureExpenses = (newFutureExpenses: number[]): Action => ({
    type: 'SET_FUTURE_EXPENSES',
    payload: newFutureExpenses,
});

export const setFuturePropertyTaxExpenses = (newFuturePropertyTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES',
    payload: newFuturePropertyTaxExpenses,
});

export const setFutureWaterAndSewerExpenses = (newFutureWaterAndSewerExpenses: number): Action => ({
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

export const setFutureEnergyExpenses = (newFutureEnergyExpenses: number): Action => ({
    type: 'SET_FUTURE_ENERGY_EXPENSES',
    payload: newFutureEnergyExpenses,
});

export const setFutureHouseMaintenanceExpenses = (newFutureMaintenanceExpenses: number): Action => ({
    type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES',
    payload: newFutureMaintenanceExpenses,
});

export const setFutureGardeningExpenses = (newFutureGardeningExpenses: number): Action => ({
    type: 'SET_FUTURE_GARDENING_EXPENSES',
    payload: newFutureGardeningExpenses,
});

export const setFutureNetworkingExpenses = (newFutureNetworkingExpenses: number): Action => ({
    type: 'SET_FUTURE_NETWORKING_EXPENSES',
    payload: newFutureNetworkingExpenses,
});

export const setFutureInternetExpenses = (newFutureInternetExpenses: number): Action => ({
    type: 'SET_FUTURE_INTERNET_EXPENSES',
    payload: newFutureInternetExpenses,
});

export const setFutureVehicleExpenses = (newFutureVehicleExpenses: number): Action => ({
    type: 'SET_FUTURE_VEHICLE_EXPENSES',
    payload: newFutureVehicleExpenses,
});

export const setFutureEducationSystemExpenses = (newFutureEducationSystemExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES',
    payload: newFutureEducationSystemExpenses,
});

export const setFutureEducationExpenses = (newFutureEducationExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_EXPENSES',
    payload: newFutureEducationExpenses,
});

export const setFuturePrivateLessonExpenses = (newFutureLessonExpenses: number[]): Action => ({
    type: 'SET_FUTURE_PRIVATE_LESSON_EXPENSES',
    payload: newFutureLessonExpenses,
});

export const setFutureTeenageClassExpenses = (newFutureTeenageClassExpenses: number[]): Action => ({
    type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES',
    payload: newFutureTeenageClassExpenses,
});

export const setFutureEducationTransportationExpenses = (newFutureEducationTransportationExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES',
    payload: newFutureEducationTransportationExpenses,
});

export const setFutureEducationPersonalCareExpenses = (newFutureEducationPersonalCareExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES',
    payload: newFutureEducationPersonalCareExpenses,
});

export const setFutureEducationDayCareExpenses = (newFutureEducationDayCareExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES',
    payload: newFutureEducationDayCareExpenses,
});

// const setFutureTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
//     type: 'SET_FUTURE_TUITIONS_EXPENSES',
//     payload: newTuitionsExpenses,
// });

// export const setFutureSafetyNetExpenses = (newFutureSafetyNetExpenses: number): Action => ({
//     type: 'SET_FUTURE_SAFETY_NET_EXPENSES',
//     payload: newFutureSafetyNetExpenses,
// });

export const setFutureHealthInsuranceExpenses = (newFutureHealthInsuranceExpenses: number): Action => ({
    type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES',
    payload: newFutureHealthInsuranceExpenses,
});

export const setFutureDentistExpenses = (newFutureDentistExpenses: number): Action => ({
    type: 'SET_FUTURE_DENTIST_EXPENSES',
    payload: newFutureDentistExpenses,
});

export const setFuturePartnerDentistExpenses = (newFuturePartnerDentistExpenses: number): Action => ({
    type: 'SET_FUTURE_PARTNER_DENTIST_EXPENSES',
    payload: newFuturePartnerDentistExpenses,
});

export const setFutureChildrenDentistExpenses = (newFutureChildrenDentistExpenses: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_DENTIST_EXPENSES',
    payload: newFutureChildrenDentistExpenses,
});

export const setFutureWelfareExpenses = (newFutureWelfareExpenses: number): Action => ({
    type: 'SET_FUTURE_WELFARE_EXPENSES',
    payload: newFutureWelfareExpenses,
});

export const setFutureFoodExpenses = (newFutureFoodExpenses: number): Action => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFutureFoodExpenses,
});

export const setFutureDiningRoomExpenses = (newFutureDiningRoomExpenses: number): Action => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFutureDiningRoomExpenses,
});

export const setFutureLaundryExpenses = (newFutureLaundryExpenses: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY_EXPENSES',
    payload: newFutureLaundryExpenses,
});

export const setFutureFlatTaxExpenses = (newFutureFlatTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_FLAT_TAX_EXPENSES',
    payload: newFutureFlatTaxExpenses,
});

export const setFutureGrossTaxExpenses = (newFutureGrossTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_GROSS_TAX_EXPENSES',
    payload: newFutureGrossTaxExpenses,
});

export const setFutureAlimonyExpenses = (newFutureAlimonyExpenses: number): Action => ({
    type: 'SET_FUTURE_ALIMONY_EXPENSES',
    payload: newFutureAlimonyExpenses,
});

export const setFutureCleaningExpenses = (newFutureCleaningExpenses: number): Action => ({
    type: 'SET_FUTURE_CLEANING_EXPENSES',
    payload: newFutureCleaningExpenses,
});

// const setFutureDecorationsExpenses = (newFutureDecorationsExpenses: number): Action => ({
//     type: 'SET_FUTURE_DECORATIONS_EXPENSES',
//     payload: newFutureDecorationsExpenses,
// });

export const setFutureOtherExpenses = (newFutureOtherExpenses: number): Action => ({
    type: 'SET_FUTURE_OTHER_EXPENSES',
    payload: newFutureOtherExpenses,
});

/* Define the reducer function that takes the current state and an action */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        /* Social Data */
        // case 'SET_FAMILY_SOCIAL_DATA':
        //     return { ...state, familySocialData: action.payload };
        /* Financial Data */
        // case 'SET_FAMILY_FINANCIAL_DATA':
        //     return { ...state, familyFinancialData: action.payload };
        /* State */
        case 'SET_LOGIN_NAME':
            return { ...state, loginName: action.payload };
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
        case 'SET_EDUCATION_LEVEL':
            return { ...state, educationLevel: action.payload };
        case 'SET_EDUCATION_SYSTEM':
            return { ...state, educationSystem: action.payload };
        case 'SET_EDUCATION_SYSTEM_BUDGETS':
            return { ...state, educationSystemBudgets: action.payload };
        case 'SET_EDUCATION_ADDITIONAL_CARE':
            return { ...state, educationAdditionalCare: action.payload };
        case 'SET_EDUCATION_SYSTEM_FEES':
            return { ...state, educationSystemFees: action.payload };
        case 'SET_EDUCATION_TRANSPORTATION':
            return { ...state, educationTransportation: action.payload };
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
            return { ...state, futureWelfareIncomes: action.payload };
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
            return { ...state, futureAdaptationGrant: action.payload }
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
        case 'SET_FUTURE_EDUCATION_EXPENSES':
            return { ...state, futureEducationExpenses: action.payload };
        case 'SET_FUTURE_PRIVATE_LESSON_EXPENSES':
            return { ...state, futurePrivateLessonExpenses: action.payload };
        case 'SET_FUTURE_TEENAGE_CLASS_EXPENSES':
            return { ...state, futureTeenageClassExpenses: action.payload };
        case 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES':
            return { ...state, futureEducationTransportationExpenses: action.payload };
        case 'SET_EDUCATION_PERSONAL_CARE':
            return { ...state, educationPersonalCare: action.payload };
        case 'SET_EDUCATION_DAY_CARE':
            return { ...state, educationDayCare: action.payload };
        case 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES': 
            return { ...state, futureEducationPersonalCareExpenses: action.payload };
        case 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES': 
            return { ...state, futureEducationDayCareExpenses: action.payload };
        // case 'SET_FUTURE_TUITIONS_EXPENSES':
        //     return { ...state, futureTuitionsExpenses: action.payload };
        // case 'SET_FUTURE_SAFETY_NET_EXPENSES':
        //     return { ...state, futureSafetyNetExpenses: action.payload };
        case 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES':
            return { ...state, futureHealthInsuranceExpenses: action.payload };
        case 'SET_FUTURE_DENTIST_EXPENSES':
            return { ...state, futureDentistExpenses: action.payload };
        case 'SET_FUTURE_PARTNER_DENTIST_EXPENSES':
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
        default:
            return state;
    }
};

const GlobalStateContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
    /* Social Data */
    // setFamilySocialData: (newFamilySocialData: MemberSocialData[]) => void;
    /* Financial Data */
    // setFamilyFinancialData: (newFamilyFinancialData: MemberFinancialData[]) => void;
    /* State */
    setLoginName: (newLoginName: string) => void;
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
    setEducationLevel: (newEducationLevel: string[]) => void;
    setEducationSystem: (newEducationSystem: string[]) => void;
    setEducationPersonalCare: (newEducationPersonalCare: string[]) => void;
    setEducationDayCare: (newEducationDayCare: string[]) => void;
    setEducationSystemBudgets: (newEducationSystemBudgets: number[]) => void;
    setEducationAdditionalCare: (newEducationAdditionalCare: number[]) => void;
    setEducationSystemFees: (newEducationSystemFees: number[]) => void;
    setEducationTransportation: (newEducationTransportation: string[]) => void;
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
    setFutureEducationExpenses: (newFutureEducationExpenses: number) => void;
    setFuturePrivateLessonExpenses: (newFutureLessonExpenses: number[]) => void;
    setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses: number[]) => void;
    setFutureEducationTransportationExpenses: (newFutureEducationTransportationExpenses: number) => void;
    setFutureEducationPersonalCareExpenses: (newFutureEducationPersonalCareExpenses: number) => void;
    setFutureEducationDayCareExpenses: (newFutureEducationDayCareExpenses: number) => void;
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
}>({
    /* Social Data */
    // setFamilySocialData: () => null,
    /* Financial Data */
    // setFamilyFinancialData: () => null,
    /* State */
    state: initialState,
    dispatch: () => null,
    setLoginName: () => null,
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
    setEducationLevel: () => null,
    setEducationSystem: () => null,
    setEducationTransportation: () => null,
    setEducationPersonalCare: () => null,
    setEducationDayCare: () => null,
    setEducationSystemBudgets: () => null,
    setEducationAdditionalCare: () => null,
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
    setFutureEducationExpenses: () => null,
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
});

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider
            value={{
                state,
                dispatch,
                /* Social Data */
                // setFamilySocialData: (newFamilySocialData) => dispatch({ type: 'SET_FAMILY_SOCIAL_DATA', payload: newFamilySocialData }),
                /* Financial Data */
                // setFamilyFinancialData: (newFamilyFinancialData) => dispatch({ type: 'SET_FAMILY_FINANCIAL_DATA', payload: newFamilyFinancialData }),
                /* State */
                setLoginName: (newLoginName) => dispatch({ type: 'SET_LOGIN_NAME', payload: newLoginName }),
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
                setEducationLevel: (newEducationLevel) => dispatch({ type: 'SET_EDUCATION_LEVEL', payload: newEducationLevel }),
                setEducationSystem: (newEducationSystem) => dispatch({ type: 'SET_EDUCATION_SYSTEM', payload: newEducationSystem }),
                setEducationTransportation: (newEducationTransportation) => dispatch({ type: 'SET_EDUCATION_TRANSPORTATION', payload: newEducationTransportation }),
                setEducationPersonalCare: (newEducationPersonalCare) => dispatch({ type: 'SET_EDUCATION_PERSONAL_CARE', payload: newEducationPersonalCare }),
                setEducationDayCare: (newEducationDayCare) => dispatch({ type: 'SET_EDUCATION_DAY_CARE', payload: newEducationDayCare }),
                setEducationSystemBudgets: (newEducationSystemBudgets) => dispatch({ type: 'SET_EDUCATION_SYSTEM_BUDGETS', payload: newEducationSystemBudgets }),
                setEducationAdditionalCare: (newEducationAdditionalCare) => dispatch({ type: 'SET_EDUCATION_ADDITIONAL_CARE', payload: newEducationAdditionalCare }),
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
                setFutureEducationExpenses: (newFutureEducationExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_EXPENSES', payload: newFutureEducationExpenses }),
                setFuturePrivateLessonExpenses: (newFutureLessonExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PRIVATE_LESSON_EXPENSES', payload: newFutureLessonExpenses }),
                setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses) => dispatch({ type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES', payload: newFutureTeenageClassExpenses }),
                setFutureEducationTransportationExpenses: (newFutureEducationTransportationExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES', payload: newFutureEducationTransportationExpenses }),
                setFutureEducationPersonalCareExpenses: (newFutureEducationPersonalCareExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_PERSONAL_CARE_EXPENSES', payload: newFutureEducationPersonalCareExpenses }),
                setFutureEducationDayCareExpenses: (newFutureEducationDayCareExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_DAY_CARE_EXPENSES', payload: newFutureEducationDayCareExpenses }),
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
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};