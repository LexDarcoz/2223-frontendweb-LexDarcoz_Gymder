import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

import { LOCALES } from "../../Translation/i18n";

export default function LanguageSetter(props) {
  const { languageFunct } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <FormControl>
      <Select
        label="Select a language"
        defaultValue="en"
        size="small"
        onClose={handleClose}
        onClick={open ? handleClose : handleClick}
      >
        <MenuItem value="en">
          <span
            class="fi fi-us"
            onClick={() => languageFunct(LOCALES.ENGLISH)}
          ></span>
        </MenuItem>
        <MenuItem value="nl">
          <span
            class="fi fi-nl "
            onClick={() => languageFunct(LOCALES.DUTCH)}
          ></span>
        </MenuItem>
        <MenuItem value="fr">
          <span
            class="fi fi-fr"
            onClick={() => languageFunct(LOCALES.FRENCH)}
          ></span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
