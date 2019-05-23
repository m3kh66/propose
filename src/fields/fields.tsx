import React, { ReactElement, useCallback } from 'react';
import { TextField } from '../components';

/**
 * TitleField
 */

export const Title = createField('title', (props) =>
    <TextField title="Title" {...props} />
);

/**
 * NumberOfPerson
 */

export const NumberOfPerson = createField('numberOfPerson', (props) =>
    <TextField title="Number Of Person" type="number" {...props} />
);

export function createField<T>(name: string, render: (props: T) => ReactElement) {
    return (props: T) => {

        const onChange = useCallback((value) => {
            console.log(name, value);
        }, []);

        return render({ ...props, onChange });
    };
}
