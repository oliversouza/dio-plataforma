export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: React.ReactNode,
    name:string;
    control:any;
    errorMessage?: string;
    rules?: any;
}