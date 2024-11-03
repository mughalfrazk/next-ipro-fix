'use client'

import { useEffect, useState } from 'react'
import { getTechniciansApi } from '@/lib/services/api/user.service'
import { ComboboxData } from '@mantine/core'

import { showErrorNotification } from '@/utils/functions'
import { getFormattedError } from '@/utils/format-error'
import IproSelect from '@/components/core/IproSelect'
import { FieldErrorPropsType } from '@/hooks/use-action-errors'

const TechnicianSelect = ({ getFieldErrorProps }: FieldErrorPropsType) => {
  const [technicianOptions, setTechnicianOptions] = useState<ComboboxData>([])

  const getTechniciansList = async () => {
    try {
      const result = await getTechniciansApi()
      setTechnicianOptions(
        result.map((item) => ({
          label: `${item.first_name} ${item.last_name}`,
          value: item.id,
        })),
      )
    } catch (error) {
      const e = getFormattedError(error)
      showErrorNotification(e.errors?.formErrors?.[0])
    }
  }

  useEffect(() => {
    getTechniciansList()
  }, [])

  return (
    <IproSelect
      size="md"
      label="Staff Member"
      name="technician_id"
      data={technicianOptions}
      styles={{
        label: {
          color: 'white',
        },
        input: {
          backgroundColor: 'transparent',
          borderColor: 'white',
          color: 'white',
        },
      }}
      {...getFieldErrorProps('technician_id')}
    />
  )
}

export default TechnicianSelect
