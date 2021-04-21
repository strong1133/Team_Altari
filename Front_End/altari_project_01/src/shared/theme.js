const size = {
  mobile: '767px',
  tablet: '1024px',
  desktop: '1025px'
};

const theme = {
 main_color: '#3D825A',
 main_black: '#292727',
 main_white: '#ffffff',
 main_bg_color: '#FAF8F8',
 mobile: `(max-width:${size.mobile})`,
 tablet: `(max-width:${size.tablet})`,
 desktop: `(min-width:${size.desktop})`,
 flex_column: 'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ',
 flex_row: 'display: flex; align-items: center; justify-content: space-between;',
 border_box: 'box-sizing:border-box',
 max_size: '1200px',
 logo: 'font-family: "MaplestoryOTFBold"; font-size:1.2rem;color:#ffffff;',
};

/*
 @media ${props => props.theme.table} {
      width: 100%;
      margin: 0 auto;
 }
*/

export default theme;