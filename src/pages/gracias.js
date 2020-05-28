import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const gracias = () => {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes ti swag, lucelo con orgullo</p>
        <p>¡Te esparamos de vuelta, no pares de aprender!</p>
        <span role="img" aria-label="emoji">
          🤎
        </span>
        <Link to="/">
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default gracias
