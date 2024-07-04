/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSimulatorDataTableSection = /* GraphQL */ `query GetSimulatorDataTableSection($id: ID!) {
  getSimulatorDataTableSection(id: $id) {
    id
    rowName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSimulatorDataTableSectionQueryVariables,
  APITypes.GetSimulatorDataTableSectionQuery
>;
export const listSimulatorDataTableSections = /* GraphQL */ `query ListSimulatorDataTableSections(
  $filter: ModelSimulatorDataTableSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSimulatorDataTableSections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rowName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSimulatorDataTableSectionsQueryVariables,
  APITypes.ListSimulatorDataTableSectionsQuery
>;
export const getSimulatorDataTableModel = /* GraphQL */ `query GetSimulatorDataTableModel($id: ID!) {
  getSimulatorDataTableModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSimulatorDataTableModelQueryVariables,
  APITypes.GetSimulatorDataTableModelQuery
>;
export const listSimulatorDataTableModels = /* GraphQL */ `query ListSimulatorDataTableModels(
  $filter: ModelSimulatorDataTableModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listSimulatorDataTableModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSimulatorDataTableModelsQueryVariables,
  APITypes.ListSimulatorDataTableModelsQuery
>;
export const getEducationDataTable = /* GraphQL */ `query GetEducationDataTable($id: ID!) {
  getEducationDataTable(id: $id) {
    id
    tuition
    classes
    privateLessons
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationDataTableQueryVariables,
  APITypes.GetEducationDataTableQuery
>;
export const listEducationDataTables = /* GraphQL */ `query ListEducationDataTables(
  $filter: ModelEducationDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tuition
      classes
      privateLessons
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationDataTablesQueryVariables,
  APITypes.ListEducationDataTablesQuery
>;
export const getAccountBalanceModel = /* GraphQL */ `query GetAccountBalanceModel($id: ID!) {
  getAccountBalanceModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAccountBalanceModelQueryVariables,
  APITypes.GetAccountBalanceModelQuery
>;
export const listAccountBalanceModels = /* GraphQL */ `query ListAccountBalanceModels(
  $filter: ModelAccountBalanceModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountBalanceModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      income
      expense
      subtotal
      anomaly
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountBalanceModelsQueryVariables,
  APITypes.ListAccountBalanceModelsQuery
>;
export const getReportDataTable = /* GraphQL */ `query GetReportDataTable($id: ID!) {
  getReportDataTable(id: $id) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReportDataTableQueryVariables,
  APITypes.GetReportDataTableQuery
>;
export const listReportDataTables = /* GraphQL */ `query ListReportDataTables(
  $filter: ModelReportDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportDataTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      generatedData
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportDataTablesQueryVariables,
  APITypes.ListReportDataTablesQuery
>;
export const getEducationCostSection = /* GraphQL */ `query GetEducationCostSection($id: ID!) {
  getEducationCostSection(id: $id) {
    id
    actualCost
    communityCoverage
    memberPaticipance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationCostSectionQueryVariables,
  APITypes.GetEducationCostSectionQuery
>;
export const listEducationCostSections = /* GraphQL */ `query ListEducationCostSections(
  $filter: ModelEducationCostSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationCostSections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      actualCost
      communityCoverage
      memberPaticipance
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationCostSectionsQueryVariables,
  APITypes.ListEducationCostSectionsQuery
>;
export const getSelectModel = /* GraphQL */ `query GetSelectModel($id: ID!) {
  getSelectModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSelectModelQueryVariables,
  APITypes.GetSelectModelQuery
>;
export const listSelectModels = /* GraphQL */ `query ListSelectModels(
  $filter: ModelSelectModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listSelectModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      checkbox
      radio
      dropdown
      stepper
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSelectModelsQueryVariables,
  APITypes.ListSelectModelsQuery
>;
