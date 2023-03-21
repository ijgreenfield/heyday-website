import Container from '../../atoms/Container'

export default function TreatmentTip({ product }) {
  return (
    <div className='bg-[#333f48] text-white py-10'>
        <Container>
        { product.treatmentRoomCopy?.value || 'null' ?
            <div className='text-center flex flex-col gap-y-14'>
            <span>• FROM THE TREATMENT ROOM •</span>
            <p className='text-2xl font-light'>{product.treatmentRoomCopy?.value}</p>
        </div>
        : "hi"
        }
        </Container>
    </div>
  )
}
