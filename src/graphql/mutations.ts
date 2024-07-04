/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSimulatorDataTableSection = /* GraphQL */ `mutation CreateSimulatorDataTableSection(
  $input: CreateSimulatorDataTableSectionInput!
  $condition: ModelSimulatorDataTableSectionConditionInput
) {
  createSimulatorDataTableSection(input: $input, condition: $condition) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSimulatorDataTableSectionMutationVariables,
  APITypes.CreateSimulatorDataTableSectionMutation
>;
export const updateSimulatorDataTableSection = /* GraphQL */ `mutation UpdateSimulatorDataTableSection(
  $input: UpdateSimulatorDataTableSectionInput!
  $condition: ModelSimulatorDataTableSectionConditionInput
) {
  updateSimulatorDataTableSection(input: $input, condition: $condition) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSimulatorDataTableSectionMutationVariables,
  APITypes.UpdateSimulatorDataTableSectionMutation
>;
export const deleteSimulatorDataTableSection = /* GraphQL */ `mutation DeleteSimulatorDataTableSection(
  $input: DeleteSimulatorDataTableSectionInput!
  $condition: ModelSimulatorDataTableSectionConditionInput
) {
  deleteSimulatorDataTableSection(input: $input, condition: $condition) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSimulatorDataTableSectionMutationVariables,
  APITypes.DeleteSimulatorDataTableSectionMutation
>;
export const createSimulatorDataTableModel = /* GraphQL */ `mutation CreateSimulatorDataTableModel(
  $input: CreateSimulatorDataTableModelInput!
  $condition: ModelSimulatorDataTableModelConditionInput
) {
  createSimulatorDataTableModel(input: $input, condition: $condition) {
    id
    collumnName
    collomnInfo
    netCost
    grossCost
    subtotal
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSimulatorDataTableModelMutationVariables,
  APITypes.CreateSimulatorDataTableModelMutation
>;
export const updateSimulatorDataTableModel = /* GraphQL */ `mutation UpdateSimulatorDataTableModel(
  $input: UpdateSimulatorDataTableModelInput!
  $condition: ModelSimulatorDataTableModelConditionInput
) {
  updateSimulatorDataTableModel(input: $input, condition: $condition) {
    id
    collumnName
    collomnInfo
    netCost
    grossCost
    subtotal
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSimulatorDataTableModelMutationVariables,
  APITypes.UpdateSimulatorDataTableModelMutation
>;
export const deleteSimulatorDataTableModel = /* GraphQL */ `mutation DeleteSimulatorDataTableModel(
  $input: DeleteSimulatorDataTableModelInput!
  $condition: ModelSimulatorDataTableModelConditionInput
) {
  deleteSimulatorDataTableModel(input: $input, condition: $condition) {
    id
    collumnName
    collomnInfo
    netCost
    grossCost
    subtotal
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSimulatorDataTableModelMutationVariables,
  APITypes.DeleteSimulatorDataTableModelMutation
>;
export const createEducationDataTable = /* GraphQL */ `mutation CreateEducationDataTable(
  $input: CreateEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  createEducationDataTable(input: $input, condition: $condition) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationDataTableMutationVariables,
  APITypes.CreateEducationDataTableMutation
>;
export const updateEducationDataTable = /* GraphQL */ `mutation UpdateEducationDataTable(
  $input: UpdateEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  updateEducationDataTable(input: $input, condition: $condition) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationDataTableMutationVariables,
  APITypes.UpdateEducationDataTableMutation
>;
export const deleteEducationDataTable = /* GraphQL */ `mutation DeleteEducationDataTable(
  $input: DeleteEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  deleteEducationDataTable(input: $input, condition: $condition) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationDataTableMutationVariables,
  APITypes.DeleteEducationDataTableMutation
>;
export const createAccountBalanceModel = /* GraphQL */ `mutation CreateAccountBalanceModel(
  $input: CreateAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  createAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expense
    subtotal
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAccountBalanceModelMutationVariables,
  APITypes.CreateAccountBalanceModelMutation
>;
export const updateAccountBalanceModel = /* GraphQL */ `mutation UpdateAccountBalanceModel(
  $input: UpdateAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  updateAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expense
    subtotal
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAccountBalanceModelMutationVariables,
  APITypes.UpdateAccountBalanceModelMutation
>;
export const deleteAccountBalanceModel = /* GraphQL */ `mutation DeleteAccountBalanceModel(
  $input: DeleteAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  deleteAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expense
    subtotal
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAccountBalanceModelMutationVariables,
  APITypes.DeleteAccountBalanceModelMutation
>;
export const createReportDataTable = /* GraphQL */ `mutation CreateReportDataTable(
  $input: CreateReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  createReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportDataTableMutationVariables,
  APITypes.CreateReportDataTableMutation
>;
export const updateReportDataTable = /* GraphQL */ `mutation UpdateReportDataTable(
  $input: UpdateReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  updateReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportDataTableMutationVariables,
  APITypes.UpdateReportDataTableMutation
>;
export const deleteReportDataTable = /* GraphQL */ `mutation DeleteReportDataTable(
  $input: DeleteReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  deleteReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportDataTableMutationVariables,
  APITypes.DeleteReportDataTableMutation
>;
export const createEducationCostSection = /* GraphQL */ `mutation CreateEducationCostSection(
  $input: CreateEducationCostSectionInput!
  $condition: ModelEducationCostSectionConditionInput
) {
  createEducationCostSection(input: $input, condition: $condition) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationCostSectionMutationVariables,
  APITypes.CreateEducationCostSectionMutation
>;
export const updateEducationCostSection = /* GraphQL */ `mutation UpdateEducationCostSection(
  $input: UpdateEducationCostSectionInput!
  $condition: ModelEducationCostSectionConditionInput
) {
  updateEducationCostSection(input: $input, condition: $condition) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationCostSectionMutationVariables,
  APITypes.UpdateEducationCostSectionMutation
>;
export const deleteEducationCostSection = /* GraphQL */ `mutation DeleteEducationCostSection(
  $input: DeleteEducationCostSectionInput!
  $condition: ModelEducationCostSectionConditionInput
) {
  deleteEducationCostSection(input: $input, condition: $condition) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationCostSectionMutationVariables,
  APITypes.DeleteEducationCostSectionMutation
>;
export const createSelectModel = /* GraphQL */ `mutation CreateSelectModel(
  $input: CreateSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  createSelectModel(input: $input, condition: $condition) {
    id
    checkbox
    radio
    dropdown
    stepper
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSelectModelMutationVariables,
  APITypes.CreateSelectModelMutation
>;
export const updateSelectModel = /* GraphQL */ `mutation UpdateSelectModel(
  $input: UpdateSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  updateSelectModel(input: $input, condition: $condition) {
    id
    checkbox
    radio
    dropdown
    stepper
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSelectModelMutationVariables,
  APITypes.UpdateSelectModelMutation
>;
export const deleteSelectModel = /* GraphQL */ `mutation DeleteSelectModel(
  $input: DeleteSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  deleteSelectModel(input: $input, condition: $condition) {
    id
    checkbox
    radio
    dropdown
    stepper
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSelectModelMutationVariables,
  APITypes.DeleteSelectModelMutation
>;
