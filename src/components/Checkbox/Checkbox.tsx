import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'phosphor-react'

export interface CheckboxProps { }

export const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxPrimitive.Root className={clsx('w-6 h-6 p-[2px] bg-gray-800 rounded')}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight="bold" className={clsx('h-5 w-5 text-cyan-500')} />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}