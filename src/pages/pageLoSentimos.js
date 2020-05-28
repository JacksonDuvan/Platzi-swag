import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const pageLoSentimos = () => {
  return (
    <div>
      <SEO title="Lo sentimos" />
      <Purchase>
        <h1>LO SENTIMOS</h1>
        <p>Los swag seguiran siendo mios.</p>
        <span>🙁</span>
        <Link to="/">
          <Button>Volver al Home</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default pageLoSentimos
