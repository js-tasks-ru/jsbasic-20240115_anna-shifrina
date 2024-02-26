function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } 
  return (maxlength < 1? "" : str.substr(0, maxlength-1)) + "…";
} 
