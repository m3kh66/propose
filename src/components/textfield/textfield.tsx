import React, { FunctionComponent, useCallback, useState } from 'react';
import { Label, Input } from './textfield.styles';

export type TextFieldChange = (newValue: string) => void;

export interface TextFieldProps {
    readonly title: string;
    readonly initialValue?: string;
    readonly type?: 'text' | 'number' | 'password';
    readonly onChange?: TextFieldChange;
}

export const TextField: FunctionComponent<TextFieldProps> = ({ title, initialValue = '', type = 'text', onChange }) => {
    const [value, setValue] = useState(initialValue);

    const onChangeCallback = useCallback((e) => {
        setValue(e.target.Value);
        onChange && onChange(value);
    }, [value]);

    return (
        <Label>{title}
            <Input
                type={type}
                value={value}
                onChange={onChangeCallback}
            />
        </Label>
    );
};