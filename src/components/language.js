import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const Language = ({ pageContext }) => {
  const intl = useIntl()

  return (
    <div>
      <LocalizedLink to={pageContext.originalPath}  language="en">
        English
      </LocalizedLink>
      {` | `}
      <LocalizedLink to={pageContext.originalPath} language="es">
        Espanõl        
      </LocalizedLink>
      {` | `}
      <LocalizedLink to={pageContext.originalPath} language="pt">
        Português
      </LocalizedLink>
    </div>
  )
}

export default Language
