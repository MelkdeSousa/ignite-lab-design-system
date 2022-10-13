import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface RootProps {
    children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

interface IconProps {
    children: ReactNode
}

const Root = ({ children }: RootProps) => {
    return <div className={clsx('h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300 w-full')}>{children}</div>
}

const Input = ({ className, ...props }: InputProps) => {
    return (
        <input className={clsx('outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400', className)} {...props} />
    )
}

const Icon = ({ children }: IconProps) => {
    return (
        <Slot className={clsx('w-6 h-6 text-gray-400')}>
            {children}
        </Slot>
    )
}

Root.displayName = 'TextInput.Root'
Input.displayName = 'TextInput.Input'
Icon.displayName = 'TextInput.Icon'

export default {
    Root,
    Input,
    Icon
}
