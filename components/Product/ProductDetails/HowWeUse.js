import Container from "../../atoms/Container"

export default function HowWeUse({ product }) {
  return (
    <div className='bg-[#f8f4f0] py-10'>
        <Container>
        <div className='border-b border-[#c2c6c9]'>
            <div>
            <span>How We Use It</span>
            </div>
            <div className='flex flex-col gap-3 py-8'>
            <h3>Morning And Night</h3>
            <p>Apply a few drops to clean, toned skin, focusing on areas that you feel need a bit of extra attention.</p>
            </div>
        </div>
        </Container>
    </div>
  )
}
