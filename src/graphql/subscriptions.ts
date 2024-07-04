/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSimulatorDataTableSection = /* GraphQL */ `subscription OnCreateSimulatorDataTableSection(
  $filter: ModelSubscriptionSimulatorDataTableSectionFilterInput
) {
  onCreateSimulatorDataTableSection(filter: $filter) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSimulatorDataTableSectionSubscriptionVariables,
  APITypes.OnCreateSimulatorDataTableSectionSubscription
>;
export const onUpdateSimulatorDataTableSection = /* GraphQL */ `subscription OnUpdateSimulatorDataTableSection(
  $filter: ModelSubscriptionSimulatorDataTableSectionFilterInput
) {
  onUpdateSimulatorDataTableSection(filter: $filter) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSimulatorDataTableSectionSubscriptionVariables,
  APITypes.OnUpdateSimulatorDataTableSectionSubscription
>;
export const onDeleteSimulatorDataTableSection = /* GraphQL */ `subscription OnDeleteSimulatorDataTableSection(
  $filter: ModelSubscriptionSimulatorDataTableSectionFilterInput
) {
  onDeleteSimulatorDataTableSection(filter: $filter) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSimulatorDataTableSectionSubscriptionVariables,
  APITypes.OnDeleteSimulatorDataTableSectionSubscription
>;
export const onCreateSimulatorDataTableModel = /* GraphQL */ `subscription OnCreateSimulatorDataTableModel(
  $filter: ModelSubscriptionSimulatorDataTableModelFilterInput
) {
  onCreateSimulatorDataTableModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSimulatorDataTableModelSubscriptionVariables,
  APITypes.OnCreateSimulatorDataTableModelSubscription
>;
export const onUpdateSimulatorDataTableModel = /* GraphQL */ `subscription OnUpdateSimulatorDataTableModel(
  $filter: ModelSubscriptionSimulatorDataTableModelFilterInput
) {
  onUpdateSimulatorDataTableModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSimulatorDataTableModelSubscriptionVariables,
  APITypes.OnUpdateSimulatorDataTableModelSubscription
>;
export const onDeleteSimulatorDataTableModel = /* GraphQL */ `subscription OnDeleteSimulatorDataTableModel(
  $filter: ModelSubscriptionSimulatorDataTableModelFilterInput
) {
  onDeleteSimulatorDataTableModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSimulatorDataTableModelSubscriptionVariables,
  APITypes.OnDeleteSimulatorDataTableModelSubscription
>;
export const onCreateEducationDataTable = /* GraphQL */ `subscription OnCreateEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onCreateEducationDataTable(filter: $filter) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationDataTableSubscriptionVariables,
  APITypes.OnCreateEducationDataTableSubscription
>;
export const onUpdateEducationDataTable = /* GraphQL */ `subscription OnUpdateEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onUpdateEducationDataTable(filter: $filter) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationDataTableSubscriptionVariables,
  APITypes.OnUpdateEducationDataTableSubscription
>;
export const onDeleteEducationDataTable = /* GraphQL */ `subscription OnDeleteEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onDeleteEducationDataTable(filter: $filter) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationDataTableSubscriptionVariables,
  APITypes.OnDeleteEducationDataTableSubscription
>;
export const onCreateAccountBalanceModel = /* GraphQL */ `subscription OnCreateAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onCreateAccountBalanceModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountBalanceModelSubscriptionVariables,
  APITypes.OnCreateAccountBalanceModelSubscription
>;
export const onUpdateAccountBalanceModel = /* GraphQL */ `subscription OnUpdateAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onUpdateAccountBalanceModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountBalanceModelSubscriptionVariables,
  APITypes.OnUpdateAccountBalanceModelSubscription
>;
export const onDeleteAccountBalanceModel = /* GraphQL */ `subscription OnDeleteAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onDeleteAccountBalanceModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountBalanceModelSubscriptionVariables,
  APITypes.OnDeleteAccountBalanceModelSubscription
>;
export const onCreateReportDataTable = /* GraphQL */ `subscription OnCreateReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onCreateReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReportDataTableSubscriptionVariables,
  APITypes.OnCreateReportDataTableSubscription
>;
export const onUpdateReportDataTable = /* GraphQL */ `subscription OnUpdateReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onUpdateReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReportDataTableSubscriptionVariables,
  APITypes.OnUpdateReportDataTableSubscription
>;
export const onDeleteReportDataTable = /* GraphQL */ `subscription OnDeleteReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onDeleteReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReportDataTableSubscriptionVariables,
  APITypes.OnDeleteReportDataTableSubscription
>;
export const onCreateEducationCostSection = /* GraphQL */ `subscription OnCreateEducationCostSection(
  $filter: ModelSubscriptionEducationCostSectionFilterInput
) {
  onCreateEducationCostSection(filter: $filter) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationCostSectionSubscriptionVariables,
  APITypes.OnCreateEducationCostSectionSubscription
>;
export const onUpdateEducationCostSection = /* GraphQL */ `subscription OnUpdateEducationCostSection(
  $filter: ModelSubscriptionEducationCostSectionFilterInput
) {
  onUpdateEducationCostSection(filter: $filter) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationCostSectionSubscriptionVariables,
  APITypes.OnUpdateEducationCostSectionSubscription
>;
export const onDeleteEducationCostSection = /* GraphQL */ `subscription OnDeleteEducationCostSection(
  $filter: ModelSubscriptionEducationCostSectionFilterInput
) {
  onDeleteEducationCostSection(filter: $filter) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationCostSectionSubscriptionVariables,
  APITypes.OnDeleteEducationCostSectionSubscription
>;
export const onCreateSelectModel = /* GraphQL */ `subscription OnCreateSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onCreateSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSelectModelSubscriptionVariables,
  APITypes.OnCreateSelectModelSubscription
>;
export const onUpdateSelectModel = /* GraphQL */ `subscription OnUpdateSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onUpdateSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSelectModelSubscriptionVariables,
  APITypes.OnUpdateSelectModelSubscription
>;
export const onDeleteSelectModel = /* GraphQL */ `subscription OnDeleteSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onDeleteSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSelectModelSubscriptionVariables,
  APITypes.OnDeleteSelectModelSubscription
>;
