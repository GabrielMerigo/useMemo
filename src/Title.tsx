import React from "react"

type TitleProps = {
  title: string
}

function Title({ title }: TitleProps) {
  console.log('título renderizado')

  return <h1>{title}</h1>
}

export default Title