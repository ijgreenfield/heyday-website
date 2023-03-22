import Container from '../../atoms/Container'

export default function TreatmentTip({ product }) {
  if (product.treatmentRoomCopy) {
    return (
      <div className='bg-[#333f48] text-white py-10'>
          <Container>
          { product.treatmentRoomCopy?.value || 'null' ?
              <div className='text-center flex flex-col gap-y-14'>
              <span className='text-sm'>• FROM THE TREATMENT ROOM •</span>
              <p className='text-2xl'>{product.treatmentRoomCopy?.value}</p>
          </div>
          : "hi"
          }
          </Container>
      </div>
    )
  }

  return ;
}
