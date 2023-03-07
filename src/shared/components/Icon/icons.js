export const plusIcon = (focused, theme, colorProp) => {
  let color = null;
  if (!colorProp) {
    const mainColor = theme === "light" ? "#212121" : "#E8E8E8";
    color = focused ? "#FF6C00" : mainColor;
  }
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_6_1193)">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill=${color}/>
            </g>
            <defs>
            <clipPath id="clip0_6_1193">
            <rect width="24" height="24" fill=${color}/>
            </clipPath>
            </defs>
            </svg>`;
};
export const closeIcon = (focused, theme, colorProp) => {
  const mainColor = theme === "light" ? "#212121" : "#E8E8E8";
  const color = focused ? "#FF6C00" : mainColor;

  return `<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none">
  <path d="M1 1L13 13" stroke=${color} stroke-width="2" />
  <path d="M1 13L13 0.999999" stroke=${color} stroke-width="2" />
</svg>`;
};
export const calendarIcon = (focused, theme, colorProp) => {
  const mainColor = theme === "light" ? "#212121" : "#E8E8E8";
  const color = focused ? "#FF6C00" : mainColor;

  return `<svg width="18" height="20" viewBox="0 0 18 20" fill="none">
<path d="M14 9H12V11H14V9Z" fill=${color}/>
<path d="M10 9H8V11H10V9Z" fill=${color}/>
<path d="M6.00008 9H4.00006V11H6.00008V9Z" fill=${color}/>
<path d="M16 2.00001H15V0H13V2.00001H5.00001V0H3V2.00001H2.00001C0.890015 2.00001 0.0100313 2.90001 0.0100313 4.00003L0 18C0 19.1 0.890015 20 2.00001 20H16C17.1 20 18 19.1 18 18V3.99998C18 2.90001 17.1 2.00001 16 2.00001ZM16 18H2.00001V6.99998H16V18Z" fill=${color}/>
</svg>`;
};

export const arrowBackIcon = (focused, theme, colorProp) => {
  const mainColor = theme === "light" ? "#212121" : "#E8E8E8";
  const color = focused ? "#FF6C00" : mainColor;

  return `<svg width="15" height="9" viewBox="0 0 15 9" fill="none">
    <path d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8" stroke=${color} stroke-width="2" />
</svg>`;
};
export const moonIcon = (focused, theme, colorProp) => {
  const mainColor = theme === "light" ? "#212121" : "#E8E8E8";
  const color = focused ? "#FF6C00" : mainColor;

  return `<svg viewBox="0 0 20 20"><path fill=${color} d="M13.719 1.8A8.759 8.759 0 1 1 1.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449 2.837-2.837 3.318-7.134 1.45-10.47z"/></svg>`;
};

export const sunIcon = () => {
  return `<svg viewBox="0 0 47.5 47.5"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"/></clipPath></defs><g fill="#ffac33" clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"/></g></svg>`;
};

export const calendarMenuIcon = (theme, focused) => {
  const mainColor = theme === "light" ? "#C5FF87" : "#9191E9";
  const color = focused ? "#ffa40b" : mainColor;

  return `<svg  viewBox="0 0 48 48"><path fill=${color} fill-rule="evenodd" d="M48 23.977C48 37.248 37.248 48 23.978 48 10.752 48 0 37.248 0 23.977 0 10.752 10.752 0 23.978 0 37.248 0 48 10.752 48 23.977z" clip-rule="evenodd"/><path fill="#fff" d="M19 25c-.827 0-1.5-.673-1.5-1.5S18.173 22 19 22s1.5.673 1.5 1.5S19.827 25 19 25zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM24 25c-.827 0-1.5-.673-1.5-1.5S23.173 22 24 22s1.5.673 1.5 1.5S24.827 25 24 25zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM14 30c-.827 0-1.5-.673-1.5-1.5S13.173 27 14 27s1.5.673 1.5 1.5S14.827 30 14 30zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM19 30c-.827 0-1.5-.673-1.5-1.5S18.173 27 19 27s1.5.673 1.5 1.5S19.827 30 19 30zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM14 35c-.827 0-1.5-.673-1.5-1.5S13.173 32 14 32s1.5.673 1.5 1.5S14.827 35 14 35zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM24 35c-.827 0-1.5-.673-1.5-1.5S23.173 32 24 32s1.5.673 1.5 1.5S24.827 35 24 35zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM34 30c-.827 0-1.5-.673-1.5-1.5S33.173 27 34 27s1.5.673 1.5 1.5S34.827 30 34 30zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM34 25c-.827 0-1.5-.673-1.5-1.5S33.173 22 34 22s1.5.673 1.5 1.5S34.827 25 34 25zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"/><path fill="#fff" d="M36 38H12a2.503 2.503 0 0 1-2.5-2.5v-16a.5.5 0 0 1 .5-.5h28a.5.5 0 0 1 .5.5v16c0 1.378-1.122 2.5-2.5 2.5zM10.5 20v15.5c0 .827.673 1.5 1.5 1.5h24c.827 0 1.5-.673 1.5-1.5V20h-27z"/><path fill="#fff" d="M38 20H10a.5.5 0 0 1-.5-.5v-4c0-1.378 1.122-2.5 2.5-2.5h3a.5.5 0 0 1 0 1h-3c-.827 0-1.5.673-1.5 1.5V19h27v-3.5c0-.827-.673-1.5-1.5-1.5h-3a.5.5 0 0 1 0-1h3c1.378 0 2.5 1.122 2.5 2.5v4a.5.5 0 0 1-.5.5z"/><path fill="#fff" d="M31 14H17a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zM28.646 24.561a.502.502 0 0 1-.354-.146l-.707-.707a.5.5 0 0 1 .707-.707l.354.354 1.061-1.061a.5.5 0 0 1 .707.707L29 24.414a.5.5 0 0 1-.354.147zM28.646 29.707a.502.502 0 0 1-.354-.146l-.707-.707a.5.5 0 0 1 .707-.707l.354.354 1.061-1.061a.5.5 0 0 1 .707.707L29 29.561a.502.502 0 0 1-.354.146zM23.646 29.707a.502.502 0 0 1-.354-.146l-.707-.707a.5.5 0 0 1 .707-.707l.354.354 1.061-1.061a.5.5 0 0 1 .707.707L24 29.561a.502.502 0 0 1-.354.146zM18.646 34.707a.502.502 0 0 1-.354-.146l-.707-.707a.5.5 0 0 1 .707-.707l.354.354 1.061-1.061a.5.5 0 0 1 .707.707L19 34.561a.502.502 0 0 1-.354.146z"/><path fill="#fff" d="M16 17c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm0-6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zM32 17c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm0-6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"/></svg>`;
};
export const diaryIcon = (theme, focused) => {
  const mainColor = theme === "light" ? "#C5FF87" : "#9191E9";
  const color = focused ? "#ffa40b" : mainColor;
  return `<svg viewBox="0 0 48 48"><g transform="translate(0 -1004.362)"><circle cx="24" cy="1028.362" r="24" fill=${color} fill-rule="evenodd"/><g transform="translate(103.04 -207)"><rect width="15" height="18" x="-79.039" y="1226.362" fill="#576d7e" fill-rule="evenodd" rx=".882" ry="1"/><rect width="17.039" height="18" x="-94.039" y="1226.362" fill="#576d7e" fill-rule="evenodd" rx=".882" ry="1"/><rect width="14" height="3" x="-93" y="1240.362" fill="#e9eded" rx="0" ry="0"/><path fill="#f9f9f9" fill-rule="evenodd" d="M-93 1224.362v17h12.006a2 2 0 0 1 2.002 2l-.008-17c0-1.108-.89-2-1.995-2h-10.011z"/><path fill="#f05542" fill-rule="evenodd" d="M-91 1243.262v3.761c0 .247.26.408.481.297l1.159-.579a.805.805 0 0 1 .72 0l1.155.578a.335.335 0 0 0 .485-.3v-3.937a.72.72 0 0 0-.72-.72h-2.38a.9.9 0 0 0-.9.9z"/><rect width="14" height="3" x="65" y="1240.362" fill="#c4cece" rx="0" ry="0" transform="scale(-1 1)"/><path fill="#e9eded" fill-rule="evenodd" d="M-77.006 1224.362a1.989 1.989 0 0 0-1.99 2l.015 17c0-1 .903-2 2.014-2H-65.039v-17H-77.006z"/><path fill="#cad1d8" fill-rule="evenodd" d="m-92.24 1227.562 3.2-3.2v3a1 1 0 0 1-1 1h-3"/><path fill="#f05542" d="M-91 1242.362h4v2h-4z"/></g></g></svg>`;
};
