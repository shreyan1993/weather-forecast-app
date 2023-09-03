export interface InputProps {
    fieldLabel?: string
    type: "text" | "radio"
    id: string
    name: string
    placeholder: string
    value: string
    onClick: () => void
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown:(e: React.KeyboardEvent<HTMLInputElement>) => void
    ref: React.RefObject<HTMLInputElement>
}