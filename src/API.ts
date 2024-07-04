/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSimulatorDataTableSectionInput = {
  id?: string | null,
  rowName?: string | null,
};

export type ModelSimulatorDataTableSectionConditionInput = {
  rowName?: ModelStringInput | null,
  and?: Array< ModelSimulatorDataTableSectionConditionInput | null > | null,
  or?: Array< ModelSimulatorDataTableSectionConditionInput | null > | null,
  not?: ModelSimulatorDataTableSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SimulatorDataTableSection = {
  __typename: "SimulatorDataTableSection",
  id: string,
  rowName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSimulatorDataTableSectionInput = {
  id: string,
  rowName?: string | null,
};

export type DeleteSimulatorDataTableSectionInput = {
  id: string,
};

export type CreateSimulatorDataTableModelInput = {
  id?: string | null,
  collumnName?: string | null,
  collomnInfo?: string | null,
  netCost?: number | null,
  grossCost?: number | null,
  subtotal?: string | null,
};

export type ModelSimulatorDataTableModelConditionInput = {
  collumnName?: ModelStringInput | null,
  collomnInfo?: ModelStringInput | null,
  netCost?: ModelIntInput | null,
  grossCost?: ModelIntInput | null,
  subtotal?: ModelStringInput | null,
  and?: Array< ModelSimulatorDataTableModelConditionInput | null > | null,
  or?: Array< ModelSimulatorDataTableModelConditionInput | null > | null,
  not?: ModelSimulatorDataTableModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SimulatorDataTableModel = {
  __typename: "SimulatorDataTableModel",
  id: string,
  collumnName?: string | null,
  collomnInfo?: string | null,
  netCost?: number | null,
  grossCost?: number | null,
  subtotal?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSimulatorDataTableModelInput = {
  id: string,
  collumnName?: string | null,
  collomnInfo?: string | null,
  netCost?: number | null,
  grossCost?: number | null,
  subtotal?: string | null,
};

export type DeleteSimulatorDataTableModelInput = {
  id: string,
};

export type CreateEducationDataTableInput = {
  id?: string | null,
  tuition?: string | null,
  classes?: string | null,
  privateLessons?: string | null,
};

export type ModelEducationDataTableConditionInput = {
  tuition?: ModelStringInput | null,
  classes?: ModelStringInput | null,
  privateLessons?: ModelStringInput | null,
  and?: Array< ModelEducationDataTableConditionInput | null > | null,
  or?: Array< ModelEducationDataTableConditionInput | null > | null,
  not?: ModelEducationDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type EducationDataTable = {
  __typename: "EducationDataTable",
  id: string,
  tuition?: string | null,
  classes?: string | null,
  privateLessons?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationDataTableInput = {
  id: string,
  tuition?: string | null,
  classes?: string | null,
  privateLessons?: string | null,
};

export type DeleteEducationDataTableInput = {
  id: string,
};

export type CreateAccountBalanceModelInput = {
  id?: string | null,
  income?: number | null,
  expense?: number | null,
  subtotal?: number | null,
  anomaly?: number | null,
};

export type ModelAccountBalanceModelConditionInput = {
  income?: ModelIntInput | null,
  expense?: ModelIntInput | null,
  subtotal?: ModelIntInput | null,
  anomaly?: ModelIntInput | null,
  and?: Array< ModelAccountBalanceModelConditionInput | null > | null,
  or?: Array< ModelAccountBalanceModelConditionInput | null > | null,
  not?: ModelAccountBalanceModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AccountBalanceModel = {
  __typename: "AccountBalanceModel",
  id: string,
  income?: number | null,
  expense?: number | null,
  subtotal?: number | null,
  anomaly?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAccountBalanceModelInput = {
  id: string,
  income?: number | null,
  expense?: number | null,
  subtotal?: number | null,
  anomaly?: number | null,
};

export type DeleteAccountBalanceModelInput = {
  id: string,
};

export type CreateReportDataTableInput = {
  id?: string | null,
  generatedData?: Array< string | null > | null,
};

export type ModelReportDataTableConditionInput = {
  generatedData?: ModelStringInput | null,
  and?: Array< ModelReportDataTableConditionInput | null > | null,
  or?: Array< ModelReportDataTableConditionInput | null > | null,
  not?: ModelReportDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ReportDataTable = {
  __typename: "ReportDataTable",
  id: string,
  generatedData?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportDataTableInput = {
  id: string,
  generatedData?: Array< string | null > | null,
};

export type DeleteReportDataTableInput = {
  id: string,
};

export type CreateEducationCostSectionInput = {
  id?: string | null,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberPaticipance?: number | null,
};

export type ModelEducationCostSectionConditionInput = {
  actualCost?: ModelIntInput | null,
  communityCoverage?: ModelIntInput | null,
  memberPaticipance?: ModelIntInput | null,
  and?: Array< ModelEducationCostSectionConditionInput | null > | null,
  or?: Array< ModelEducationCostSectionConditionInput | null > | null,
  not?: ModelEducationCostSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type EducationCostSection = {
  __typename: "EducationCostSection",
  id: string,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberPaticipance?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationCostSectionInput = {
  id: string,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberPaticipance?: number | null,
};

export type DeleteEducationCostSectionInput = {
  id: string,
};

export type CreateSelectModelInput = {
  id?: string | null,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
};

export type ModelSelectModelConditionInput = {
  checkbox?: ModelStringInput | null,
  radio?: ModelStringInput | null,
  dropdown?: ModelStringInput | null,
  stepper?: ModelStringInput | null,
  and?: Array< ModelSelectModelConditionInput | null > | null,
  or?: Array< ModelSelectModelConditionInput | null > | null,
  not?: ModelSelectModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SelectModel = {
  __typename: "SelectModel",
  id: string,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSelectModelInput = {
  id: string,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
};

export type DeleteSelectModelInput = {
  id: string,
};

export type ModelSimulatorDataTableSectionFilterInput = {
  id?: ModelIDInput | null,
  rowName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSimulatorDataTableSectionFilterInput | null > | null,
  or?: Array< ModelSimulatorDataTableSectionFilterInput | null > | null,
  not?: ModelSimulatorDataTableSectionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSimulatorDataTableSectionConnection = {
  __typename: "ModelSimulatorDataTableSectionConnection",
  items:  Array<SimulatorDataTableSection | null >,
  nextToken?: string | null,
};

export type ModelSimulatorDataTableModelFilterInput = {
  id?: ModelIDInput | null,
  collumnName?: ModelStringInput | null,
  collomnInfo?: ModelStringInput | null,
  netCost?: ModelIntInput | null,
  grossCost?: ModelIntInput | null,
  subtotal?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSimulatorDataTableModelFilterInput | null > | null,
  or?: Array< ModelSimulatorDataTableModelFilterInput | null > | null,
  not?: ModelSimulatorDataTableModelFilterInput | null,
};

export type ModelSimulatorDataTableModelConnection = {
  __typename: "ModelSimulatorDataTableModelConnection",
  items:  Array<SimulatorDataTableModel | null >,
  nextToken?: string | null,
};

export type ModelEducationDataTableFilterInput = {
  id?: ModelIDInput | null,
  tuition?: ModelStringInput | null,
  classes?: ModelStringInput | null,
  privateLessons?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationDataTableFilterInput | null > | null,
  or?: Array< ModelEducationDataTableFilterInput | null > | null,
  not?: ModelEducationDataTableFilterInput | null,
};

export type ModelEducationDataTableConnection = {
  __typename: "ModelEducationDataTableConnection",
  items:  Array<EducationDataTable | null >,
  nextToken?: string | null,
};

export type ModelAccountBalanceModelFilterInput = {
  id?: ModelIDInput | null,
  income?: ModelIntInput | null,
  expense?: ModelIntInput | null,
  subtotal?: ModelIntInput | null,
  anomaly?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountBalanceModelFilterInput | null > | null,
  or?: Array< ModelAccountBalanceModelFilterInput | null > | null,
  not?: ModelAccountBalanceModelFilterInput | null,
};

export type ModelAccountBalanceModelConnection = {
  __typename: "ModelAccountBalanceModelConnection",
  items:  Array<AccountBalanceModel | null >,
  nextToken?: string | null,
};

export type ModelReportDataTableFilterInput = {
  id?: ModelIDInput | null,
  generatedData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportDataTableFilterInput | null > | null,
  or?: Array< ModelReportDataTableFilterInput | null > | null,
  not?: ModelReportDataTableFilterInput | null,
};

export type ModelReportDataTableConnection = {
  __typename: "ModelReportDataTableConnection",
  items:  Array<ReportDataTable | null >,
  nextToken?: string | null,
};

export type ModelEducationCostSectionFilterInput = {
  id?: ModelIDInput | null,
  actualCost?: ModelIntInput | null,
  communityCoverage?: ModelIntInput | null,
  memberPaticipance?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationCostSectionFilterInput | null > | null,
  or?: Array< ModelEducationCostSectionFilterInput | null > | null,
  not?: ModelEducationCostSectionFilterInput | null,
};

export type ModelEducationCostSectionConnection = {
  __typename: "ModelEducationCostSectionConnection",
  items:  Array<EducationCostSection | null >,
  nextToken?: string | null,
};

export type ModelSelectModelFilterInput = {
  id?: ModelIDInput | null,
  checkbox?: ModelStringInput | null,
  radio?: ModelStringInput | null,
  dropdown?: ModelStringInput | null,
  stepper?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSelectModelFilterInput | null > | null,
  or?: Array< ModelSelectModelFilterInput | null > | null,
  not?: ModelSelectModelFilterInput | null,
};

export type ModelSelectModelConnection = {
  __typename: "ModelSelectModelConnection",
  items:  Array<SelectModel | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSimulatorDataTableSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rowName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSimulatorDataTableSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSimulatorDataTableSectionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSimulatorDataTableModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  collumnName?: ModelSubscriptionStringInput | null,
  collomnInfo?: ModelSubscriptionStringInput | null,
  netCost?: ModelSubscriptionIntInput | null,
  grossCost?: ModelSubscriptionIntInput | null,
  subtotal?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSimulatorDataTableModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionSimulatorDataTableModelFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEducationDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tuition?: ModelSubscriptionStringInput | null,
  classes?: ModelSubscriptionStringInput | null,
  privateLessons?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationDataTableFilterInput | null > | null,
};

export type ModelSubscriptionAccountBalanceModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  income?: ModelSubscriptionIntInput | null,
  expense?: ModelSubscriptionIntInput | null,
  subtotal?: ModelSubscriptionIntInput | null,
  anomaly?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountBalanceModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountBalanceModelFilterInput | null > | null,
};

export type ModelSubscriptionReportDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  generatedData?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportDataTableFilterInput | null > | null,
};

export type ModelSubscriptionEducationCostSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  actualCost?: ModelSubscriptionIntInput | null,
  communityCoverage?: ModelSubscriptionIntInput | null,
  memberPaticipance?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationCostSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationCostSectionFilterInput | null > | null,
};

export type ModelSubscriptionSelectModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  checkbox?: ModelSubscriptionStringInput | null,
  radio?: ModelSubscriptionStringInput | null,
  dropdown?: ModelSubscriptionStringInput | null,
  stepper?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSelectModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionSelectModelFilterInput | null > | null,
};

export type CreateSimulatorDataTableSectionMutationVariables = {
  input: CreateSimulatorDataTableSectionInput,
  condition?: ModelSimulatorDataTableSectionConditionInput | null,
};

export type CreateSimulatorDataTableSectionMutation = {
  createSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSimulatorDataTableSectionMutationVariables = {
  input: UpdateSimulatorDataTableSectionInput,
  condition?: ModelSimulatorDataTableSectionConditionInput | null,
};

export type UpdateSimulatorDataTableSectionMutation = {
  updateSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSimulatorDataTableSectionMutationVariables = {
  input: DeleteSimulatorDataTableSectionInput,
  condition?: ModelSimulatorDataTableSectionConditionInput | null,
};

export type DeleteSimulatorDataTableSectionMutation = {
  deleteSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSimulatorDataTableModelMutationVariables = {
  input: CreateSimulatorDataTableModelInput,
  condition?: ModelSimulatorDataTableModelConditionInput | null,
};

export type CreateSimulatorDataTableModelMutation = {
  createSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSimulatorDataTableModelMutationVariables = {
  input: UpdateSimulatorDataTableModelInput,
  condition?: ModelSimulatorDataTableModelConditionInput | null,
};

export type UpdateSimulatorDataTableModelMutation = {
  updateSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSimulatorDataTableModelMutationVariables = {
  input: DeleteSimulatorDataTableModelInput,
  condition?: ModelSimulatorDataTableModelConditionInput | null,
};

export type DeleteSimulatorDataTableModelMutation = {
  deleteSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationDataTableMutationVariables = {
  input: CreateEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type CreateEducationDataTableMutation = {
  createEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationDataTableMutationVariables = {
  input: UpdateEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type UpdateEducationDataTableMutation = {
  updateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationDataTableMutationVariables = {
  input: DeleteEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type DeleteEducationDataTableMutation = {
  deleteEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountBalanceModelMutationVariables = {
  input: CreateAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type CreateAccountBalanceModelMutation = {
  createAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountBalanceModelMutationVariables = {
  input: UpdateAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type UpdateAccountBalanceModelMutation = {
  updateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountBalanceModelMutationVariables = {
  input: DeleteAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type DeleteAccountBalanceModelMutation = {
  deleteAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportDataTableMutationVariables = {
  input: CreateReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type CreateReportDataTableMutation = {
  createReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportDataTableMutationVariables = {
  input: UpdateReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type UpdateReportDataTableMutation = {
  updateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportDataTableMutationVariables = {
  input: DeleteReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type DeleteReportDataTableMutation = {
  deleteReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationCostSectionMutationVariables = {
  input: CreateEducationCostSectionInput,
  condition?: ModelEducationCostSectionConditionInput | null,
};

export type CreateEducationCostSectionMutation = {
  createEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationCostSectionMutationVariables = {
  input: UpdateEducationCostSectionInput,
  condition?: ModelEducationCostSectionConditionInput | null,
};

export type UpdateEducationCostSectionMutation = {
  updateEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationCostSectionMutationVariables = {
  input: DeleteEducationCostSectionInput,
  condition?: ModelEducationCostSectionConditionInput | null,
};

export type DeleteEducationCostSectionMutation = {
  deleteEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSelectModelMutationVariables = {
  input: CreateSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type CreateSelectModelMutation = {
  createSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSelectModelMutationVariables = {
  input: UpdateSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type UpdateSelectModelMutation = {
  updateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSelectModelMutationVariables = {
  input: DeleteSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type DeleteSelectModelMutation = {
  deleteSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSimulatorDataTableSectionQueryVariables = {
  id: string,
};

export type GetSimulatorDataTableSectionQuery = {
  getSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSimulatorDataTableSectionsQueryVariables = {
  filter?: ModelSimulatorDataTableSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSimulatorDataTableSectionsQuery = {
  listSimulatorDataTableSections?:  {
    __typename: "ModelSimulatorDataTableSectionConnection",
    items:  Array< {
      __typename: "SimulatorDataTableSection",
      id: string,
      rowName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSimulatorDataTableModelQueryVariables = {
  id: string,
};

export type GetSimulatorDataTableModelQuery = {
  getSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSimulatorDataTableModelsQueryVariables = {
  filter?: ModelSimulatorDataTableModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSimulatorDataTableModelsQuery = {
  listSimulatorDataTableModels?:  {
    __typename: "ModelSimulatorDataTableModelConnection",
    items:  Array< {
      __typename: "SimulatorDataTableModel",
      id: string,
      collumnName?: string | null,
      collomnInfo?: string | null,
      netCost?: number | null,
      grossCost?: number | null,
      subtotal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationDataTableQueryVariables = {
  id: string,
};

export type GetEducationDataTableQuery = {
  getEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationDataTablesQueryVariables = {
  filter?: ModelEducationDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationDataTablesQuery = {
  listEducationDataTables?:  {
    __typename: "ModelEducationDataTableConnection",
    items:  Array< {
      __typename: "EducationDataTable",
      id: string,
      tuition?: string | null,
      classes?: string | null,
      privateLessons?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountBalanceModelQueryVariables = {
  id: string,
};

export type GetAccountBalanceModelQuery = {
  getAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountBalanceModelsQueryVariables = {
  filter?: ModelAccountBalanceModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountBalanceModelsQuery = {
  listAccountBalanceModels?:  {
    __typename: "ModelAccountBalanceModelConnection",
    items:  Array< {
      __typename: "AccountBalanceModel",
      id: string,
      income?: number | null,
      expense?: number | null,
      subtotal?: number | null,
      anomaly?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportDataTableQueryVariables = {
  id: string,
};

export type GetReportDataTableQuery = {
  getReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportDataTablesQueryVariables = {
  filter?: ModelReportDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportDataTablesQuery = {
  listReportDataTables?:  {
    __typename: "ModelReportDataTableConnection",
    items:  Array< {
      __typename: "ReportDataTable",
      id: string,
      generatedData?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationCostSectionQueryVariables = {
  id: string,
};

export type GetEducationCostSectionQuery = {
  getEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationCostSectionsQueryVariables = {
  filter?: ModelEducationCostSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationCostSectionsQuery = {
  listEducationCostSections?:  {
    __typename: "ModelEducationCostSectionConnection",
    items:  Array< {
      __typename: "EducationCostSection",
      id: string,
      actualCost?: number | null,
      communityCoverage?: number | null,
      memberPaticipance?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSelectModelQueryVariables = {
  id: string,
};

export type GetSelectModelQuery = {
  getSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSelectModelsQueryVariables = {
  filter?: ModelSelectModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSelectModelsQuery = {
  listSelectModels?:  {
    __typename: "ModelSelectModelConnection",
    items:  Array< {
      __typename: "SelectModel",
      id: string,
      checkbox?: string | null,
      radio?: string | null,
      dropdown?: string | null,
      stepper?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSimulatorDataTableSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableSectionFilterInput | null,
};

export type OnCreateSimulatorDataTableSectionSubscription = {
  onCreateSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSimulatorDataTableSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableSectionFilterInput | null,
};

export type OnUpdateSimulatorDataTableSectionSubscription = {
  onUpdateSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSimulatorDataTableSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableSectionFilterInput | null,
};

export type OnDeleteSimulatorDataTableSectionSubscription = {
  onDeleteSimulatorDataTableSection?:  {
    __typename: "SimulatorDataTableSection",
    id: string,
    rowName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSimulatorDataTableModelSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableModelFilterInput | null,
};

export type OnCreateSimulatorDataTableModelSubscription = {
  onCreateSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSimulatorDataTableModelSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableModelFilterInput | null,
};

export type OnUpdateSimulatorDataTableModelSubscription = {
  onUpdateSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSimulatorDataTableModelSubscriptionVariables = {
  filter?: ModelSubscriptionSimulatorDataTableModelFilterInput | null,
};

export type OnDeleteSimulatorDataTableModelSubscription = {
  onDeleteSimulatorDataTableModel?:  {
    __typename: "SimulatorDataTableModel",
    id: string,
    collumnName?: string | null,
    collomnInfo?: string | null,
    netCost?: number | null,
    grossCost?: number | null,
    subtotal?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnCreateEducationDataTableSubscription = {
  onCreateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnUpdateEducationDataTableSubscription = {
  onUpdateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnDeleteEducationDataTableSubscription = {
  onDeleteEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    tuition?: string | null,
    classes?: string | null,
    privateLessons?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnCreateAccountBalanceModelSubscription = {
  onCreateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnUpdateAccountBalanceModelSubscription = {
  onUpdateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnDeleteAccountBalanceModelSubscription = {
  onDeleteAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expense?: number | null,
    subtotal?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnCreateReportDataTableSubscription = {
  onCreateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnUpdateReportDataTableSubscription = {
  onUpdateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnDeleteReportDataTableSubscription = {
  onDeleteReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationCostSectionSubscriptionVariables = {
  filter?: ModelSubscriptionEducationCostSectionFilterInput | null,
};

export type OnCreateEducationCostSectionSubscription = {
  onCreateEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationCostSectionSubscriptionVariables = {
  filter?: ModelSubscriptionEducationCostSectionFilterInput | null,
};

export type OnUpdateEducationCostSectionSubscription = {
  onUpdateEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationCostSectionSubscriptionVariables = {
  filter?: ModelSubscriptionEducationCostSectionFilterInput | null,
};

export type OnDeleteEducationCostSectionSubscription = {
  onDeleteEducationCostSection?:  {
    __typename: "EducationCostSection",
    id: string,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberPaticipance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnCreateSelectModelSubscription = {
  onCreateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnUpdateSelectModelSubscription = {
  onUpdateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnDeleteSelectModelSubscription = {
  onDeleteSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
