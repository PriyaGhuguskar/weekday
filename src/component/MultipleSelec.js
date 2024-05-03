import React, { useState } from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MultipleSelec = (props) => {
    const fixedOptions = [];
    const [value, setValue] = useState([...fixedOptions]);
    return (
        <Autocomplete
            multiple
            id='fixed-tags-demo'
            value={value}
            onChange={(data, newValue) => {
                setValue([
                    ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                ]);
            }}
            options={props?.options}
            getOptionLabel={(option) => option?.title}
            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                    <Chip
                        label={option?.title}
                        {...getTagProps({ index })}
                    // disabled={fixedOptions.indexOf(option) !== -1}
                    />
                ))
            }
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} placeholder={props?.placeholder} />
            )}
        />
    )
}

export default MultipleSelec