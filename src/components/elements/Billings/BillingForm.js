import React, { useState } from 'react'
import { Button, FlexboxGrid, Form, FormControl, FormGroup, ControlLabel } from 'rsuite'
import { CardElement, injectStripe } from 'react-stripe-elements'
import LoaderButton from '../Libs/LoaderButton'
import { useFormFields } from '../Libs/hooksLib'
import './BillingForm.css'

function BillingForm({ isLoading, onSubmit, ...props }) {
  const [fields, handleFieldChange] = useFormFields({
    name: '',
    storage: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCardComplete, setIsCardComplete] = useState(false)

  isLoading = isProcessing || isLoading

  function validateForm() {
    return fields.name !== '' && fields.storage !== '' && isCardComplete
  }

  async function handleSubmitClick(event) {
    event.preventDefault()

    setIsProcessing(true)

    const { token, error } = await props.stripe.createToken({
      name: fields.name,
    })

    setIsProcessing(false)

    onSubmit(fields.storage, { token, error })
  }

  return (
    <Form className="BillingForm" onSubmit={handleSubmitClick}>
      <FormGroup size="lg" controlId="storage">
        <ControlLabel>Storage</ControlLabel>
        <FormControl
          min="0"
          type="number"
          value={fields.storage}
          onChange={handleFieldChange}
          placeholder="Number of notes to store"
        />
      </FormGroup>
      <hr />
      <FormGroup size="lg" controlId="name">
        <ControlLabel>Cardholder&apos;s name</ControlLabel>
        <FormControl type="text" value={fields.name} onChange={handleFieldChange} placeholder="Name on the card" />
      </FormGroup>
      <ControlLabel>Credit Card Info</ControlLabel>
      <CardElement
        className="card-field"
        onChange={e => setIsCardComplete(e.complete)}
        style={{
          base: {
            fontSize: '16px',
            color: '#495057',
            fontFamily: "'Open Sans', sans-serif",
          },
        }}
      />
      <LoaderButton block size="lg" type="submit" isLoading={isLoading} disabled={!validateForm()}>
        Purchase
      </LoaderButton>
    </Form>
  )
}

export default injectStripe(BillingForm)
