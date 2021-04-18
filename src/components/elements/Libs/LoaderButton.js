import React from 'react'
import { Button, Icon } from 'rsuite'
import './LoaderButton.css'

export default function LoaderButton({ isLoading, className = '', disabled = false, ...props }) {
  return (
    <Button disabled={disabled || isLoading} className={`LoaderButton ${className}`} {...props}>
      {isLoading && <Icon icon="spinner" spin />}
      {props.children}
    </Button>
  )
}
