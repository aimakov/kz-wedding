export type ValueOf<T> = T[keyof T];

export type InputPropTypes = {
  id: string;
  label?: string | React.ReactElement;
  children?: React.ReactNode;
  validation?: Record<string, any>;
  helperText?: string;
  type?: string;
  errors?: any;
  isRequired?: boolean;
  blockMb?: string | number;
  placeholder?: string;
  value?: any;
  onChange?: (val?: any) => void;
  [x: string]: any;
};

export interface FormInputs {
  [id: string]: string;
}
