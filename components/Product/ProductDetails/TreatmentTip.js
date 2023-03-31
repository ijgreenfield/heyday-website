import Container from '../../atoms/Container'

export default function TreatmentTip({ product }) {
  if (product.treatmentRoomCopy) {
    return (
      <div className='bg-[#333f48] text-white py-10'>
          <Container>
          { product.treatmentRoomCopy?.value || 'null' ?
              <div className='text-center flex flex-col gap-y-12'>
              <span className='text-sm font-maison-mono tracking-[.07em]'>• FROM THE TREATMENT ROOM •</span>
              <p className='text-2xl leading-normal'>{product.treatmentRoomCopy?.value}</p>
          </div>
          : "hi"
          }
          </Container>
      </div>
    )
  }

  return ;
}
