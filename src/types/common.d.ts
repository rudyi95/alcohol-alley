declare type Nullable<T> = T | null;

declare type Maybe<T> = T | undefined;

declare interface QueriesData {
  city?: string;
  phone?: string;
  name?: string;
  email?: string;
  type?: string | null;
  interviewDate?: Date | null;
  sortField?: string | number;
  sortOrder?: string | number;
  familyName?: string;
  sitterName?: string;
  title?: string;
  cityId?: number;
  scheduleType?: number;
  allocationWorkSchedule?: number;
  jobDuration?: number;
  startDate?: Date;
  salaryFrom?: number;
  salaryTo?: number;
  currency?: number;
  page?: number;
  items?: number;
  limit?: number;
  category?: string;
}

declare interface ApiWrapper {
  method: string;
  url: string;
  data?: any;
  isFormData?: boolean;
  parseData?: any;
}

declare interface RequestDataWithFunc<T> {
  data: T;
  func: () => void;
}

declare interface RequestDataWithFuncData<T, U> {
  data: T;
  func: (data: U) => void;
}

declare interface ErrorHandler {
  response: {
    data: {
      message: string;
    };
  };
}

declare interface ArrayResponse<T> {
  data: T[];
  totalCount: number;
}

declare interface SelectData {
  value: string | number;
  label: string | number | React.ReactNode;
}

declare type TModalType = "edit";

declare interface SelectItem {
  value: string | number;
  label: string | number;
}
