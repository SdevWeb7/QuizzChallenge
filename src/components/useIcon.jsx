import iconHTML from "../assets/images/icon-html.svg";
import iconCSS from "../assets/images/icon-css.svg";
import iconJS from "../assets/images/icon-js.svg";
import iconAccess from "../assets/images/icon-accessibility.svg";
import sunLightIcon from '../assets/images/icon-sun-light.svg'
import moonLightIcon from '../assets/images/icon-moon-light.svg'
import sunDarkIcon from '../assets/images/icon-sun-dark.svg'
import moonDarkIcon from '../assets/images/icon-moon-dark.svg'

function useIcon (page = 0, theme = '') {
   let icon = ''
   let text = '';
   let style = {}
   let sunIcon = sunLightIcon
   let moonIcon = moonLightIcon

   switch (page) {
      case 0:
         icon = iconHTML
         text = 'HTML'
         style = {backgroundColor: "#FFF1E9"}
         break
      case 1:
         icon = iconCSS
         text = 'CSS'
         style = {backgroundColor: "#E0FDEF"}
         break
      case 2:
         icon = iconJS
         text = 'JavaScript'
         style = {backgroundColor: "#EBF0FF"}
         break
      case 3:
         icon = iconAccess
         text = 'Accessibility'
         style = {backgroundColor: "#F6E7FF"}
         break
      default:
         text = 'erreur'
         break
   }

   if (theme == 'dark') {
      sunIcon = sunDarkIcon
      moonIcon = moonDarkIcon
   }

   return {
      icon,
      text,
      style,
      sunIcon,
      moonIcon
   }
}

export default useIcon;