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
        <MenuItem value="en" onClick={() => languageFunct(LOCALES.ENGLISH)}>
          <span className="fi fi-us"></span>
        </MenuItem>
        <MenuItem value="nl" onClick={() => languageFunct(LOCALES.DUTCH)}>
          <span className="fi fi-nl "></span>
        </MenuItem>
        <MenuItem value="fr" onClick={() => languageFunct(LOCALES.FRENCH)}>
          <span className="fi fi-fr"></span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
