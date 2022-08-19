export interface ButtonProps {
    label: string;
    color?: string;
    pressed: () => void;
}

export interface ButtonStyleProps {
    color?: string;
}