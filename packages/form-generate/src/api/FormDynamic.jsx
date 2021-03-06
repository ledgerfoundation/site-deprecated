/**
 * @name FormGenerate
 * @description Generate forms from schema reference.
 * @version 0.0.1
 */

/* --- Global --- */
import React from 'react';
import useForm from "react-hook-form";

/* --- Local --- */
import FieldTree from './FieldTree'

/* --- Component --- */
const FormDynamic = ({ sxButton, box, ...props }) => {
  const { handleSubmit, register, errors } = useForm()

  console.log(props, 'form dynamic')
  const onSubmit = (values) => props.onSubmit && props.onSubmit(values)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex flex={1}>
        <FieldTree
          fields={props.schema.fields}
          register={register}
          errors={errors}
          defaults={props.defaults}
        />
      </Atom.Flex>
      <Atom.Box sx={{ py: 3 }}>
        <Atom.Button type='submit' variant='green' sx={sxButton} >{props.label}</Atom.Button>
      </Atom.Box>
    </form>
  )
}

FormDynamic.defaultProps = {
  label: 'Submit',
}

export default props => <FormDynamic {...props} />
