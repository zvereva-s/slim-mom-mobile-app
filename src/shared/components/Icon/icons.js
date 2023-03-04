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
