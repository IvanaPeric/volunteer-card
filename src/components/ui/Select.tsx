import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";



// Special value for 'All' option
const ALL_VALUE = '__all__';

export const Select = React.forwardRef<any, any>(({ options, value, onValueChange, placeholder, className }, ref) => (
  <SelectPrimitive.Root value={value || ALL_VALUE} onValueChange={val => onValueChange(val === ALL_VALUE ? '' : val)}>
    <SelectPrimitive.Trigger
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400",
        className
      )}
      aria-label={placeholder}
    >
      <SelectPrimitive.Value placeholder={placeholder} />
      <ChevronDownIcon className="ml-2 h-4 w-4" />
    </SelectPrimitive.Trigger>
  <SelectPrimitive.Content className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 min-w-[var(--radix-select-trigger-width)]" style={{ minWidth: 'var(--radix-select-trigger-width)' }}>
      <SelectPrimitive.Item
        key="all"
        value={ALL_VALUE}
        className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-between"
      >
        <SelectPrimitive.ItemText>{placeholder}</SelectPrimitive.ItemText>
        {(!value || value === ALL_VALUE) && (
          <SelectPrimitive.ItemIndicator>
            <CheckIcon className="h-4 w-4 text-blue-600" />
          </SelectPrimitive.ItemIndicator>
        )}
      </SelectPrimitive.Item>
      {(options as string[]).filter((opt: string) => opt !== '').map((opt: string) => (
        <SelectPrimitive.Item
          key={opt}
          value={opt}
          className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-between"
        >
          <SelectPrimitive.ItemText>{opt}</SelectPrimitive.ItemText>
          {value === opt && (
            <SelectPrimitive.ItemIndicator>
              <CheckIcon className="h-4 w-4 text-blue-600" />
            </SelectPrimitive.ItemIndicator>
          )}
        </SelectPrimitive.Item>
      ))}
    </SelectPrimitive.Content>
  </SelectPrimitive.Root>
));
