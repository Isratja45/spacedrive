import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Root from '../Input';
import { FormField, UseFormFieldProps, useFormField } from './FormField';

export interface InputProps extends UseFormFieldProps, Root.InputProps {
	name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { formFieldProps, childProps } = useFormField(props);

	return (
		<FormField {...formFieldProps}>
			<Root.Input {...childProps} ref={ref} error={formFieldProps.error !== undefined} />
		</FormField>
	);
});

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { formFieldProps, childProps } = useFormField(props);

	return (
		<FormField {...formFieldProps}>
			<Root.PasswordInput
				{...childProps}
				ref={ref}
				error={formFieldProps.error !== undefined}
			/>
		</FormField>
	);
});
